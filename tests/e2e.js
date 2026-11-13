/* End-to-end check of the portfolio on desktop and mobile.
 *
 *   python3 -m http.server 4173 &      # from the repo root
 *   node tests/e2e.js                  # or BASE_URL=https://… node tests/e2e.js
 *   MOTION=1 node tests/e2e.js         # with animations on
 *
 * Needs Playwright (`npm i -g playwright` or any global install). Screenshots go
 * to tests/screenshots/. Exits non-zero if any check fails.
 */
const { chromium, devices } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE = process.env.BASE_URL || "http://localhost:4173/";
const SHOTS = path.join(__dirname, "screenshots");
const PHONE = "59177165787";
fs.mkdirSync(SHOTS, { recursive: true });

const results = [];
function check(device, name, ok, detail = "") {
  results.push({ device, name, ok, detail });
  console.log(`${ok ? "  ✓" : "  ✗"} [${device}] ${name}${detail ? ` (${detail})` : ""}`);
}

const PROFILES = [
  ["desktop", { viewport: { width: 1440, height: 900 } }],
  ["laptop", { viewport: { width: 1280, height: 720 } }],
  ["tablet", devices["iPad Mini"]],
  ["iphone", devices["iPhone 13"]],
  ["android", devices["Pixel 7"]],
  ["small-phone", devices["iPhone SE"]],
];

async function run(browser, [dev, opts]) {
  console.log(`\n${dev}`);
  const ctx = await browser.newContext({ ...opts, reducedMotion: process.env.MOTION ? "no-preference" : "reduce" });
  // The sandbox can't reach wa.me; answer it locally so the new tab's URL can be checked.
  await ctx.route("https://wa.me/**", (r) => r.fulfill({ status: 200, contentType: "text/html", body: "WhatsApp" }));
  await ctx.route("https://api.whatsapp.com/**", (r) => r.fulfill({ status: 200, contentType: "text/html", body: "WhatsApp" }));
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("requestfailed", (r) => !/fonts\.g/.test(r.url()) && errors.push(`failed: ${r.url()}`));
  page.on("response", (r) => r.status() >= 400 && errors.push(`${r.status()}: ${r.url()}`));
  const touch = !!opts.hasTouch;
  const tap = (loc) => (touch ? loc.tap() : loc.click());
  const isOpen = (sel) => page.locator(sel).evaluate((el) => el.getAttribute("aria-hidden") === "false");
  const vw = page.viewportSize().width;

  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.body.classList.contains("is-ready"), null, { timeout: 5000 });
  await page.screenshot({ path: `${SHOTS}/${dev}-1-canvas.png` });

  // Layout: nothing spills past the viewport horizontally.
  const overflowX = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  check(dev, "no horizontal page overflow", overflowX <= 0, `${overflowX}px`);

  // Canvas tiles render with loaded images.
  const tileImgs = await page.evaluate(() => [...document.querySelectorAll(".tile img")].slice(0, 18)
    .every((i) => i.complete && i.naturalWidth > 0 || i.loading === "lazy"));
  check(dev, "canvas tiles render", (await page.locator(".tile").count()) > 17 && tileImgs);

  // Drag the canvas and confirm it moves.
  const before = await page.locator(".tile").first().getAttribute("style");
  const st = page.locator("#stage");
  await page.mouse.move(vw / 2, 200); await page.mouse.down();
  await page.mouse.move(vw / 2 - 160, 260, { steps: 8 }); await page.mouse.up();
  await page.waitForTimeout(150);
  check(dev, "canvas drags", before !== (await page.locator(".tile").first().getAttribute("style")));

  // Open a project from a visible tile.
  // Pick a tile whose centre isn't covered by the index, hero or header.
  const tileBox = await page.evaluate(() => {
    for (const t of document.querySelectorAll(".tile[data-i]")) {
      const r = t.getBoundingClientRect();
      const x = r.left + r.width / 2, y = r.top + r.height / 3;
      if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) continue;
      const hit = document.elementFromPoint(x, y);
      if (hit && hit.closest(".tile") === t) return { x, y };
    }
    return null;
  });
  if (tileBox) {
    if (touch) await page.touchscreen.tap(tileBox.x, tileBox.y); else await page.mouse.click(tileBox.x, tileBox.y);
    await page.waitForTimeout(300);
  }
  check(dev, "tapping a tile opens its project", tileBox && (await isOpen("#drawer")));
  const title = await page.locator("#dTitle").textContent();
  check(dev, "drawer shows project + live link", !!title && /^https:\/\//.test(await page.locator("#dLink").getAttribute("href")), title);
  await page.screenshot({ path: `${SHOTS}/${dev}-2-drawer.png` });
  await tap(page.locator("#drawer [data-step='1']"));
  check(dev, "drawer next button", (await page.locator("#dTitle").textContent()) !== title);
  await tap(page.locator("#drawer [data-close]"));
  await page.waitForTimeout(200);
  check(dev, "drawer closes", !(await isOpen("#drawer")));

  // Index (sidebar on desktop, toggle on mobile).
  if (vw <= 860) await tap(page.locator("[data-toggle-index]"));
  const item = page.locator(".index__item").nth(4);
  await tap(item);
  await page.waitForTimeout(1300);
  check(dev, "index item flies to + opens project", await isOpen("#drawer"));
  await page.keyboard.press("Escape"); await page.waitForTimeout(150);

  // List view.
  await tap(page.locator("[data-view-toggle]"));
  check(dev, "list view shows all projects", (await page.locator("#listGrid .card").count()) === 17);
  await page.screenshot({ path: `${SHOTS}/${dev}-3-list.png` });
  await page.locator("#listGrid .card").nth(16).scrollIntoViewIfNeeded();
  await tap(page.locator("#listGrid .card").nth(16));
  await page.waitForTimeout(200);
  check(dev, "list card opens project", await isOpen("#drawer"));
  await page.keyboard.press("Escape");
  if (vw <= 860) check(dev, "WhatsApp float shows in list view", await page.locator("#waFloat").isVisible());
  await tap(page.locator("[data-view-toggle]"));

  // About overlay.
  await tap(page.locator("[data-open='about']").first());
  await page.waitForTimeout(250);
  check(dev, "about opens", await isOpen("#about"));
  await tap(page.locator("#about [data-close]"));
  await page.waitForTimeout(250);
  check(dev, "about closes", !(await isOpen("#about")));

  // ---- Pricing: packages, build your own, quote ----
  const headerOverflow = await page.evaluate(() => { const n = document.querySelector(".top"); return n.scrollWidth - n.clientWidth; });
  check(dev, "header fits", headerOverflow <= 0, `${headerOverflow}px`);
  if (vw > 860) check(dev, "Pricing link in the header", await page.locator(".top__nav [data-open='pricing']").isVisible());
  await tap(page.locator(".hero [data-open='pricing']"));
  await page.waitForTimeout(350);
  check(dev, "pricing opens from hero", await isOpen("#pricing"));
  const total = () => page.locator("#qTotal").textContent();
  check(dev, "quote starts at the base site", (await total()) === "Bs 3,500");
  check(dev, "three packages with savings", (await page.locator(".pkg").count()) === 3 && /Save 31%/.test(await page.locator(".pkg--featured").textContent()));
  await page.screenshot({ path: `${SHOTS}/${dev}-9-pricing.png` });
  await tap(page.locator("[data-pkg='growth']"));
  check(dev, "choosing Growth loads it into the quote", (await total()) === "Bs 9,900" && (await page.locator("[data-ptog='booking']").count()) === 0);
  await page.locator("[data-ptog='qr']").scrollIntoViewIfNeeded();
  await tap(page.locator("[data-ptog='qr']"));
  await page.locator(".addons__more").scrollIntoViewIfNeeded();
  await tap(page.locator(".addons__more"));
  await page.locator("[data-pinc='lang']").scrollIntoViewIfNeeded();
  await tap(page.locator("[data-pinc='lang']"));
  check(dev, "add-ons add to the total", (await total()) === "Bs 12,500");
  await page.locator("#qRush").scrollIntoViewIfNeeded();
  await tap(page.locator("#qRush"));
  check(dev, "rush adds 25%", (await total()) === "Bs 15,625");
  await tap(page.locator("[data-pcare='partner']"));
  check(dev, "care plan sets the monthly", /Bs 1,290/.test(await page.locator("#qMo").textContent()));
  const qtext = new URL(await page.locator("#qWa").getAttribute("href")).searchParams.get("text") || "";
  check(dev, "quote goes to WhatsApp with every line",
    ["Growth package", "Online booking", "QR & card payments — Bs 1,900", "Extra language — Bs 700", "Rush delivery +25%", "Digital Partner", "*One-time:* Bs 15,625", "50% upfront"].every((x) => qtext.includes(x)) &&
    (await page.locator("#qWa").getAttribute("href")).startsWith(`https://wa.me/${PHONE}?`), qtext.slice(0, 60));
  await tap(page.locator("[data-pcur='USD']"));
  check(dev, "US$ view", (await total()) === "US$ 1,341" && /US\$ 850/.test(await page.locator(".pkg--featured .pkg__price").textContent()));
  await tap(page.locator("[data-pcur='BOB']"));
  if (vw <= 860) {
    await page.locator("#pricing").evaluate((e) => e.scrollTo(0, 0));
    await page.waitForTimeout(200);
    check(dev, "quote bar shows on phones", await page.locator(".quote-dock").isVisible());
    await page.screenshot({ path: `${SHOTS}/${dev}-9b-pricing-dock.png` });
  }
  await page.locator("#quote").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${SHOTS}/${dev}-10-quote.png` });
  const overflowP = await page.evaluate(() => document.querySelector("#pricing").scrollWidth - innerWidth);
  check(dev, "pricing has no horizontal overflow", overflowP <= 0, `${overflowP}px`);
  await tap(page.locator("#pricing .quote__custom [data-open='contact']"));
  await page.waitForTimeout(350);
  check(dev, "custom link opens the funnel", (await isOpen("#contact")) && !(await isOpen("#pricing")));
  await tap(page.locator("#contact .overlay__close"));
  await page.waitForTimeout(250);

  // ---- Start a project funnel ----
  const cta = page.locator(".hero .btn--red");
  await tap(cta);
  await page.waitForTimeout(350);
  check(dev, "funnel opens from hero CTA", await isOpen("#contact"));
  const next = page.locator("#fNext");

  // Step 1 guard: can't continue without a service.
  await tap(next);
  check(dev, "step 1 requires a service", /service/i.test(await page.locator("#fStatus").textContent()));
  await tap(page.locator(".choice", { hasText: "Online shop" }));
  await tap(page.locator(".pill", { hasText: "Redesign" }));
  check(dev, "preview shows chosen service", /Online shop \(redesign/.test(await page.locator("#chatOut").textContent()));
  await page.screenshot({ path: `${SHOTS}/${dev}-4-funnel-1.png`, fullPage: false });
  await tap(next);

  // Step 2: extras, languages, timeline, budget.
  check(dev, "step 2 visible", await page.locator("[data-step-panel='1']").isVisible());
  await tap(page.locator(".chip", { hasText: "WhatsApp ordering" }));
  await tap(page.locator(".chip", { hasText: "Online payments" }));
  await tap(page.locator("[data-lang='1']")); await tap(page.locator("[data-lang='1']"));
  await tap(page.locator(".pill", { hasText: "ASAP" }));
  await tap(page.locator(".pill", { hasText: "$2k – $5k" }));
  const out2 = await page.locator("#chatOut").textContent();
  check(dev, "preview updates with extras/langs/budget",
    out2.includes("WhatsApp ordering & booking, Online payments") && out2.includes("Languages: 3") && out2.includes("$2k – $5k") && out2.includes("As soon as possible"));
  await page.screenshot({ path: `${SHOTS}/${dev}-5-funnel-2.png` });
  await tap(next);

  // Step 3: name required.
  await tap(next);
  check(dev, "step 3 requires a name", /name/i.test(await page.locator("#fStatus").textContent()) &&
    (await page.locator("[data-step-panel='2']").isVisible()));
  await page.locator("input[name=name]").fill("Ana Pérez");
  await page.locator("input[name=company]").fill("Café & Co <b>");
  await page.locator("textarea[name=message]").fill("We need a shop for our coffee.");
  await page.screenshot({ path: `${SHOTS}/${dev}-6-funnel-3.png` });
  await tap(next);

  // Step 4: review + WhatsApp link.
  check(dev, "step 4 visible", await page.locator("[data-step-panel='3']").isVisible());
  check(dev, "preview escapes HTML", (await page.locator("#chatOut b").count()) === 0);
  const send = page.locator("#waSend");
  await send.scrollIntoViewIfNeeded();
  check(dev, "send button visible", await send.isVisible());
  const href = await send.getAttribute("href");
  const u = new URL(href);
  const text = u.searchParams.get("text") || "";
  check(dev, "link goes to +591 77165787", u.host === "wa.me" && u.pathname === `/${PHONE}`, u.pathname);
  check(dev, "message has every answer",
    ["Online shop (redesign", "WhatsApp ordering & booking", "Languages:* 3", "As soon as possible", "$2k – $5k", "Ana Pérez · Café & Co <b>", "We need a shop for our coffee."]
      .every((t) => text.includes(t)));
  check(dev, "phone preview visible on final step", await page.locator(".phone__frame").isVisible());
  await page.screenshot({ path: `${SHOTS}/${dev}-7-funnel-send.png` });
  await page.locator(".phone__frame").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${SHOTS}/${dev}-8-funnel-phone.png` });
  const [popup] = await Promise.all([ctx.waitForEvent("page", { timeout: 4000 }).catch(() => null), tap(send)]);
  check(dev, "send opens WhatsApp in a new tab", !!popup && popup.url().includes(PHONE), popup ? popup.url().slice(0, 40) : "no tab");
  if (popup) await popup.close();

  // Back navigation keeps answers; step tabs jump.
  await tap(page.locator("#fBack"));
  check(dev, "back keeps answers", (await page.locator("input[name=name]").inputValue()) === "Ana Pérez");
  await page.locator("#steps [data-goto='0']").scrollIntoViewIfNeeded();
  await tap(page.locator("#steps [data-goto='0']"));
  check(dev, "step tab jumps to step 1", await page.locator("[data-step-panel='0']").isVisible());
  const overflowF = await page.evaluate(() => document.querySelector("#contact").scrollWidth - innerWidth);
  check(dev, "funnel has no horizontal overflow", overflowF <= 0, `${overflowF}px`);

  await tap(page.locator("#contact .overlay__close"));
  await page.waitForTimeout(250);
  check(dev, "funnel closes", !(await isOpen("#contact")));

  // Analytics: events are queued for Vercel Web Analytics (the script itself only loads in production).
  const events = await page.evaluate(() => (window.vaq || []).filter((a) => a[0] === "event").map((a) => a[1].name));
  const want = ["Pricing Open", "Package Chosen", "Funnel Open", "Funnel Step", "Funnel WhatsApp", "Project Open"];
  check(dev, "analytics events queued", want.every((w) => events.includes(w)), want.filter((w) => !events.includes(w)).join(", "));

  // Deep links: on a fresh load and when the hash changes.
  await page.goto("about:blank");
  await page.goto(BASE + "#helibol", { waitUntil: "networkidle" });
  await page.waitForTimeout(1900);
  check(dev, "deep link on load", (await isOpen("#drawer")) && (await page.locator("#dTitle").textContent()) === "Helibol");
  await page.evaluate(() => { location.hash = "#bloom"; });
  await page.waitForTimeout(1600);
  check(dev, "hash change opens project", (await isOpen("#drawer")) && (await page.locator("#dTitle").textContent()) === "Bloom");
  check(dev, "no case-study button without a case study", await page.locator("#dCase").isHidden());
  await page.evaluate(() => { location.hash = "#fogo-de-chao"; });
  await page.waitForTimeout(1600);
  check(dev, "case-study button in the drawer", (await page.locator("#dCase").isVisible()) && (await page.locator("#dCase").getAttribute("href")) === "/work/fogo-de-chao/");

  // ---- Case studies ----
  for (const slug of ["haras-la-alhambra", "fogo-de-chao", "restobar-os"]) {
    const res = await page.goto(`${BASE}work/${slug}/`, { waitUntil: "networkidle" });
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } });
    await page.waitForLoadState("networkidle");
    const info = await page.evaluate(() => ({
      h1: document.querySelector("h1")?.textContent || "",
      broken: [...document.images].filter((i) => !i.complete || !i.naturalWidth).map((i) => i.src),
      ox: document.documentElement.scrollWidth - innerWidth,
    }));
    check(dev, `case study ${slug} loads`, res.status() === 200 && info.h1.length > 10 && info.broken.length === 0 && info.ox <= 0, `${res.status()} ${info.broken.join(" ")} ${info.ox}px`);
    if (slug === "haras-la-alhambra") await page.screenshot({ path: `${SHOTS}/${dev}-11-case.png` });
  }
  await Promise.all([page.waitForURL(/#start$/), tap(page.locator(".case__cta .btn--red"))]);
  await page.waitForFunction(() => document.body && document.body.classList.contains("is-ready"), null, { timeout: 5000 });
  await page.waitForTimeout(400);
  check(dev, "case study CTA opens the funnel", await isOpen("#contact"));
  await page.goto(`${BASE}work/haras-la-alhambra/`, { waitUntil: "networkidle" });
  await page.locator(".pkgnote .btn").scrollIntoViewIfNeeded();
  await Promise.all([page.waitForURL(/#pricing$/), tap(page.locator(".pkgnote .btn"))]);
  await page.waitForFunction(() => document.body && document.body.classList.contains("is-ready"), null, { timeout: 5000 });
  await page.waitForTimeout(400);
  check(dev, "case study links to pricing", await isOpen("#pricing"));

  check(dev, "no console errors or failed requests", errors.length === 0, errors.slice(0, 3).join(" | "));
  await ctx.close();
}

// Spanish: a Spanish-language browser gets the Spanish site, and switching works both ways.
async function runSpanish(browser, [dev, opts]) {
  const d = `${dev} · es`;
  console.log(`\n${d}`);
  const ctx = await browser.newContext({ ...opts, locale: "es-BO", reducedMotion: "reduce" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  const touch = !!opts.hasTouch;
  const tap = (loc) => (touch ? loc.tap() : loc.click());
  const vw = page.viewportSize().width;

  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.body.classList.contains("is-ready"), null, { timeout: 5000 });
  check(d, "browser language picks Spanish", (await page.evaluate(() => document.documentElement.lang)) === "es");
  check(d, "hero and title in Spanish", /hechos para rendir/.test(await page.locator(".hero__title").textContent()) && /Sitios web/.test(await page.title()));
  const overflowX = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  check(d, "no horizontal page overflow", overflowX <= 0, `${overflowX}px`);
  const body = await page.evaluate(() => document.body.innerText);
  const leftovers = ["Start a project", "Drag to explore", "Swipe to explore", "List view", "Your project"].filter((w) => body.includes(w));
  check(d, "no English left on the page", leftovers.length === 0, leftovers.join(", "));
  await page.screenshot({ path: `${SHOTS}/${dev}-es-1-canvas.png` });

  // Project drawer in Spanish.
  await page.evaluate(() => { location.hash = "#helibol"; });
  await page.waitForTimeout(1600);
  check(d, "drawer in Spanish", (await page.locator("#dSector").textContent()) === "Aviación" && /Tipo/.test(await page.locator("#dMeta").textContent()));
  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);

  // Funnel builds a Spanish WhatsApp message.
  await tap(page.locator(".hero .btn--red"));
  await page.waitForTimeout(350);
  await tap(page.locator(".choice", { hasText: "Tienda online" }));
  await tap(page.locator("#fNext"));
  await tap(page.locator(".chip", { hasText: "Pagos online" }));
  await tap(page.locator("#fNext"));
  await page.locator("input[name=name]").fill("Ana");
  await tap(page.locator("#fNext"));
  const es = new URL(await page.locator("#waSend").getAttribute("href")).searchParams.get("text") || "";
  check(d, "WhatsApp message in Spanish",
    ["¡Hola Marvz!", "*Servicio:* Tienda online (desde cero)", "*Extras:* Pagos online", "*Plazo:* 1–2 meses", "*Nombre:* Ana", "¡Gracias!"].every((x) => es.includes(x)));
  await page.screenshot({ path: `${SHOTS}/${dev}-es-2-funnel.png` });
  await tap(page.locator("#contact .overlay__close"));
  await page.waitForTimeout(250);

  // Switch to English: answers carry over, the choice sticks after a reload.
  await tap(page.locator("[data-setlang='en']"));
  await page.waitForTimeout(200);
  const en = new URL(await page.locator("#waSend").getAttribute("href")).searchParams.get("text") || "";
  check(d, "switching to English translates the page", (await page.evaluate(() => document.documentElement.lang)) === "en" && /built to perform/.test(await page.locator(".hero__title").textContent()));
  check(d, "funnel answers carry over to English", ["*Service:* Online shop (brand new)", "Online payments", "*Name:* Ana"].every((x) => en.includes(x)));
  await page.reload({ waitUntil: "networkidle" });
  check(d, "language choice sticks after reload", (await page.evaluate(() => document.documentElement.lang)) === "en");
  await tap(page.locator("[data-setlang='es']"));
  check(d, "?lang=es link for sharing", new URL(page.url()).searchParams.get("lang") === "es");
  const overflowEn = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  check(d, "header fits in both languages", overflowEn <= 0 && vw > 0, `${overflowEn}px`);

  // Pricing in Spanish.
  await tap(page.locator(".hero [data-open='pricing']"));
  await page.waitForTimeout(350);
  await tap(page.locator("[data-pkg='presence']"));
  const pes = new URL(await page.locator("#qWa").getAttribute("href")).searchParams.get("text") || "";
  check(d, "pricing in Spanish", /ya te está buscando/.test(await page.locator("#pricing h2").textContent()) &&
    ["*Quiero cotizar este proyecto:*", "Paquete Presencia — Bs 4.900", "*Pago único:* Bs 4.900"].every((x) => pes.includes(x)), pes.slice(0, 80));
  const pBody = await page.locator("#pricing").evaluate((e) => e.innerText);
  const pLeft = ["Your quote", "Build your own", "Packages", "One-time", "Add"].filter((w) => new RegExp(`\\b${w}\\b`).test(pBody));
  check(d, "no English left in pricing", pLeft.length === 0, pLeft.join(", "));
  await page.screenshot({ path: `${SHOTS}/${dev}-es-3-pricing.png` });
  await tap(page.locator("#pricing .overlay__close"));
  await page.waitForTimeout(250);

  // Case studies in Spanish: the English URL follows the saved language.
  await page.goto(`${BASE}work/fogo-de-chao/`, { waitUntil: "networkidle" });
  check(d, "case study follows the saved language", new URL(page.url()).pathname === "/work/fogo-de-chao/es/" && /seis idiomas/.test(await page.locator("h1").textContent()));
  const caseLeft = await page.evaluate(() => ["The brief", "What I built", "Next case study", "Start a project"].filter((w) => document.body.innerText.toLowerCase().includes(w.toLowerCase())));
  check(d, "no English left in the case study", caseLeft.length === 0, caseLeft.join(", "));
  await Promise.all([page.waitForURL(/lang=en/), tap(page.locator(".top .lang"))]);
  await page.waitForLoadState("networkidle");
  check(d, "case study switches to English", new URL(page.url()).pathname === "/work/fogo-de-chao/" && /six languages/.test(await page.locator("h1").textContent()));
  await page.screenshot({ path: `${SHOTS}/${dev}-es-4-case.png` });
  await Promise.all([page.waitForURL(/\/es\/$/), tap(page.locator(".top .lang"))]);
  await page.waitForLoadState("networkidle");

  check(d, "no console errors", errors.length === 0, errors.slice(0, 3).join(" | "));
  await ctx.close();
}

(async () => {
  const browser = await chromium.launch();
  for (const p of PROFILES) {
    try { await run(browser, p); } catch (e) { check(p[0], "run completed", false, e.message.split("\n")[0]); }
    try { await runSpanish(browser, p); } catch (e) { check(`${p[0]} · es`, "run completed", false, e.message.split("\n")[0]); }
  }
  await browser.close();
  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  process.exit(failed.length ? 1 : 0);
})();
