/* ==========================================================================
   Marvz Studio · portfolio
   Edit CONFIG and PROJECTS below to update the site.
   ========================================================================== */

const CONFIG = {
  // The "Start a project" funnel sends to this WhatsApp number (digits only, with country code).
  whatsapp: "59177165787",
  email: "",               // optional, shown as a link next to the funnel
  instagram: "",           // e.g. "https://instagram.com/yourhandle"
  linkedin: "",            // e.g. "https://linkedin.com/in/yourhandle"
  github: "https://github.com/marvinmcv-svg",
};

const PROJECTS = [
  {
    slug: "haras-la-alhambra", name: "Haras La Alhambra", sector: "Equestrian", type: "Website",
    url: "https://haras-la-alhambra.vercel.app/",
    tagline: "Raised with patience. Selected with rigor.",
    desc: "A cinematic, bilingual site for a breeder of Purebred Arabian and Pura Raza Española horses in Santa Cruz, founded in 1993. The film plays through the cut-out letters of ALHAMBRA, then the site moves through bloodlines, the estate, evening events, the riding school and services, with “Spirit”, an AI assistant that answers visitors' questions.",
    langs: "Spanish · English", tags: ["Art direction", "Scroll storytelling", "AI assistant", "Bilingual", "Motion"],
  },
  {
    slug: "fuerzaflow", name: "FuerzaFlow", sector: "Fitness · AI", type: "Web app · PWA",
    url: "https://fuerzaflow.vercel.app/",
    tagline: "Strength that flows with you.",
    desc: "An AI strength coach that builds your training program around your days and equipment, adjusts every workout to how you feel, and tracks macros from a photo. It installs from the browser, works offline and runs in six languages.",
    langs: "EN · ES · PT · FR · DE · IT", tags: ["Product design", "PWA", "AI coach", "6 languages", "Themes"],
  },
  {
    slug: "restobar-os", name: "RestoBar OS", sector: "Restaurants · SaaS", type: "SaaS",
    url: "https://restobar-os.vercel.app/",
    tagline: "Your restaurant, under control. From your phone.",
    desc: "A restaurant operating system for bars and restaurants in Bolivia. Waiters take orders on their own phones, each ticket goes to its kitchen station with a timer, staff get role-based permissions, invoicing is built in, and the day's close is sent to the owner on WhatsApp.",
    langs: "Spanish", tags: ["SaaS", "POS", "Kitchen display", "Roles & permissions", "WhatsApp"],
  },
  {
    slug: "fogo-de-chao", name: "Fogo de Chão Ventura Sur", sector: "Hospitality", type: "Website",
    url: "https://fogo-de-chao-ventura-sur.vercel.app/es",
    tagline: "From the fire to your table.",
    desc: "A warm, editorial site for a gaúcho churrascaria in Mall Ventura Sur, Santa Cruz: menu, cuts, the Market Table, weekly specials and events, with WhatsApp reservations, in six languages.",
    langs: "ES · EN · PT · FR · DE · ZH", tags: ["Restaurant", "Reservations", "6 languages", "CMS", "Art direction"],
  },
  {
    slug: "don-corte-fino", name: "Don Corte Fino", sector: "Food · E-commerce", type: "Website + Shop",
    url: "https://new-don-corte-fino.vercel.app/en",
    tagline: "It's not just beef… it's Wangus.",
    desc: "Brand site and online shop for Wangus beef (Wagyu × Angus), finished in a Santa Cruz feedlot and cut by hand. It includes an interactive cut guide, signature boxes, and WhatsApp ordering with delivery across Santa Cruz de la Sierra.",
    langs: "Spanish · English", tags: ["E-commerce", "Brand storytelling", "Cut guide", "WhatsApp ordering"],
  },
  {
    slug: "helibol", name: "Helibol", sector: "Aviation", type: "Website",
    url: "https://helibol.vercel.app/es",
    tagline: "Where the roads end, we begin.",
    desc: "A site for a family-run helicopter operator flying in Bolivia since 1988: energy and mining, rescue and MEDEVAC, firefighting, cargo, VIP and scenic flights. It presents the fleet and safety culture and gives a 24/7 emergency line.",
    langs: "Spanish · English", tags: ["Corporate", "Fleet showcase", "Bilingual", "Lead generation"],
  },
  {
    slug: "spc", name: "SPC Impresores", sector: "Manufacturing", type: "Website",
    url: "https://spc-3-0.vercel.app/",
    tagline: "Printing the best of Bolivia.",
    desc: "A site for a leader in Bolivia's printing industry since 2001: food and pharmaceutical packaging, commercial printing, books, magazines and on-demand digital print. It has a services catalog, a step-by-step process and WhatsApp quotes with an on-site assistant.",
    langs: "Spanish · English", tags: ["B2B", "Industrial", "Quoting flow", "AI assistant"],
  },
  {
    slug: "firuwalk", name: "FiruWalk", sector: "Pets · Marketplace", type: "Web app",
    url: "https://firu-walk.vercel.app/",
    tagline: "Happy walks, calm owners.",
    desc: "A family dog-walking service in Santa Cruz. Owners book recurring walks with verified walkers, follow each walk on live GPS, get photo reports when it ends and pay by QR. Walkers get their own sign-up and dashboard.",
    langs: "Spanish · English", tags: ["Marketplace", "Booking", "Live GPS", "QR payments"],
  },
  {
    slug: "bloom", name: "Bloom", sector: "Wellness", type: "App",
    url: "https://bloom-habits-two.vercel.app/",
    tagline: "Small habits. Big change.",
    desc: "A friendly habit tracker. You build routines in a few minutes a day, and a little companion grows every time you show up. It's built as a cross-platform app with Expo and React Native and runs in the browser.",
    langs: "English", tags: ["Mobile app", "React Native", "Gamification", "Character design"],
  },
  {
    slug: "sccs-website", name: "Santa Cruz Cooperative School", sector: "Education", type: "Website",
    url: "https://sccs-website-eight.vercel.app/",
    tagline: "Two diplomas. One unrivaled future.",
    desc: "The main website for a PK–12 American international school in Bolivia, home of the Jaguars. It covers admissions, the dual U.S. and Bolivian diploma, campus and facilities, safety and student life, with site-wide search and a full navigation system.",
    langs: "English · Spanish", tags: ["Education", "Information architecture", "Search", "Admissions"],
  },
  {
    slug: "sccs-sis", name: "SCCS SIS", sector: "Education · SaaS", type: "Web app · PWA",
    url: "https://sccs-sis.vercel.app/?source=pwa",
    tagline: "Every student. One place.",
    desc: "A student information system that holds records, grades, Google Classroom and family communication for both the U.S. diploma and the Bolivian Bachillerato. It works in English and Spanish, installs on any phone, and search returns in under 72 ms.",
    langs: "English · Spanish", tags: ["SIS", "Gradebook", "Google Classroom", "PWA", "Role-based"],
  },
  {
    slug: "sccs-student-os", name: "SCCS Student OS", sector: "Education · SaaS", type: "Web app",
    url: "https://sccs-student-os.vercel.app/welcome",
    tagline: "Every student, seen clearly.",
    desc: "One calm, bilingual workspace for school staff covering discipline, learning support and positive behavior. Accommodations travel with the student, and a referral can go from the morning dashboard to a compliant record in under a minute.",
    langs: "English · Spanish", tags: ["Dashboard", "Learning support", "Behavior", "Bilingual"],
  },
  {
    slug: "sccs-store", name: "SCCS Store", sector: "Education · E-commerce", type: "E-commerce",
    url: "https://sccs-store-app.vercel.app/",
    tagline: "Back to school, Jaguars.",
    desc: "The official school store for uniforms, sportswear, backpacks and keepsakes. Families shop by grade level, buy discounted kits, and pick up their orders at school.",
    langs: "Spanish · English", tags: ["E-commerce", "Catalog", "Kits", "Pickup"],
  },
  {
    slug: "acs-calvert", name: "ACS Calvert", sector: "Education", type: "Website",
    url: "https://acs-calvert.vercel.app/en",
    tagline: "Bolivia's American school since 1955.",
    desc: "A website for a U.S.-accredited, English-language school in La Paz that teaches from KG3 to Grade 12 and awards both U.S. and Bolivian diplomas. It covers admissions, learning, student life and community, with quick links to the school's own tools.",
    langs: "English · Spanish", tags: ["Education", "Admissions", "Bilingual", "Editorial"],
  },
  {
    slug: "fabrizio-saunero", name: "Fabrizio Saunero · No. 19", sector: "Personal brand", type: "Portfolio",
    url: "https://fabrizio-saunero-2.vercel.app/",
    tagline: "Built by experience. Driven by purpose.",
    desc: "A cinematic college-application portfolio told in four chapters: athletics, service, work and independence. It uses match footage, animated stats, a division-climb ladder, horizontal galleries and scroll-driven storytelling.",
    langs: "English", tags: ["Storytelling", "Video", "GSAP motion", "College application"],
  },
  {
    slug: "fabrizios", name: "Fabrizio Saunero", sector: "Personal brand", type: "Portfolio",
    url: "https://fabrizios.vercel.app/",
    tagline: "A life built on chances taken.",
    desc: "A second, editorial edition of a student-athlete's portfolio, built around highlights and a gallery: from Bolivia's 4th Division to Primera A, state titles, varsity captaincy and fundraising for Operation Smile.",
    langs: "English", tags: ["Portfolio", "Editorial", "Gallery", "College application"],
  },
  {
    slug: "iker-torrico", name: "Iker Torrico", sector: "Personal brand", type: "Portfolio",
    url: "https://ikertorrico-portfolio.vercel.app/",
    tagline: "Athlete. Performer. Builder.",
    desc: "A college portfolio for a competitive athlete, stage performer and young entrepreneur from La Paz: three sports, community projects, commercial sales work, and music with a live band.",
    langs: "English", tags: ["Portfolio", "Personal brand", "Media library", "College application"],
  },
];

// "Start a project" funnel: step 01 services and step 02 extras.
const SERVICES = [
  { id: "website", name: "Website", note: "Brand, business or corporate site" },
  { id: "landing", name: "Landing page", note: "One page built to convert" },
  { id: "shop", name: "Online shop", note: "Catalog, cart, WhatsApp or online orders" },
  { id: "app", name: "Web app · PWA", note: "Installs from the browser, works offline" },
  { id: "saas", name: "SaaS & dashboards", note: "POS, booking, school or internal systems" },
  { id: "ai", name: "AI assistant", note: "A chatbot trained on your business" },
  { id: "portfolio", name: "Portfolio", note: "Personal brand or college application" },
  { id: "brand", name: "Brand & story", note: "Identity, copy, motion and video" },
];
const EXTRAS = [
  "WhatsApp ordering & booking", "AI assistant", "Online payments", "Bookings & calendar",
  "CMS to edit content", "SEO & performance", "Copywriting", "Logo & brand identity", "Motion & video",
];

const TICKER = [
  `${PROJECTS.length} projects live and counting`,
  "Now booking projects for the new year",
  "FuerzaFlow ships in 6 languages",
  "SCCS SIS search answers in under 72 ms",
  "Fogo de Chão Ventura Sur takes reservations in 6 languages",
  "RestoBar OS sends the day's close to WhatsApp",
  "Haras La Alhambra welcomes Spirit, its AI assistant",
];

/* ========================================================================== */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, "0");
const mod = (a, n) => ((a % n) + n) % n;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const img = (p, size = "sm") => `/assets/work/${p.slug}${size === "lg" ? "" : "-" + size}.webp`;


/* ---------- Index (grouped by sector) ---------- */
function groupKey(p) {
  const s = p.sector.toLowerCase();
  if (s.includes("education")) return "Education";
  if (s.includes("saas") || s.includes("ai") || s.includes("marketplace") || s.includes("wellness")) return "Apps & SaaS";
  if (s.includes("hospitality") || s.includes("food")) return "Food & Hospitality";
  if (s.includes("personal")) return "Portfolios";
  return "Brands & Business";
}
const GROUP_ORDER = ["Apps & SaaS", "Education", "Food & Hospitality", "Brands & Business", "Portfolios"];
// Number projects in index order so 01–17 reads top to bottom.
PROJECTS.map((p, k) => [GROUP_ORDER.indexOf(groupKey(p)), k, p]).sort((a, b) => a[0] - b[0] || a[1] - b[1])
  .forEach(([, , p], i) => (p.i = i));
PROJECTS.sort((a, b) => a.i - b.i);

function buildIndex() {
  const body = $("#indexBody");
  $("#indexCount").textContent = pad(PROJECTS.length);
  const groups = {};
  PROJECTS.forEach((p) => (groups[groupKey(p)] ||= []).push(p));
  body.innerHTML = GROUP_ORDER.filter((g) => groups[g]).map((g) => `
    <div class="index__group">
      <h3 class="mono">${g}</h3>
      ${groups[g].map((p) => `<button class="index__item" type="button" data-i="${p.i}"><small>${pad(p.i + 1)}</small><span>${p.name}</span></button>`).join("")}
    </div>`).join("");
  $$(".index__item", body).forEach((b) => {
    const i = +b.dataset.i;
    b.addEventListener("mouseenter", () => light(i));
    b.addEventListener("mouseleave", () => light(null));
    b.addEventListener("focus", () => light(i));
    b.addEventListener("blur", () => light(null));
    b.addEventListener("click", () => { document.body.classList.remove("index-open"); focusTile(i); });
  });
}

/* ---------- List view ---------- */
function buildList() {
  $("#listGrid").innerHTML = PROJECTS.map((p) => `
    <button class="card" type="button" data-i="${p.i}">
      <div class="tile__img"><img src="${img(p)}" alt="${p.name} website" loading="lazy" width="800" height="500"></div>
      <div class="tile__label"><span class="tile__name">${p.name}</span><span class="tile__meta mono">${p.type}</span></div>
      <p>${p.tagline}</p>
    </button>`).join("");
  $$("#listGrid .card").forEach((c) => c.addEventListener("click", () => openProject(+c.dataset.i)));
}

/* ---------- Ticker ---------- */
function buildTicker() {
  const row = TICKER.map((t) => `<span>${t}</span><i>●</i>`).join("");
  $("#ticker").innerHTML = row + row;
}

/* ---------- Infinite canvas ---------- */
const stage = $("#stage");
const world = $("#world");
const COLS = 6, ROWS = 3;
let slots = [];      // [{p|null, x, y}]
let tiles = [];      // [{el, slot, ci, cj}]
let L = {};          // layout metrics
let off = { x: 0, y: 0 }, vel = { x: 0, y: 0 };
let dragging = false, needs = true, hovering = false, tween = null;

function layout() {
  const vw = innerWidth, vh = innerHeight;
  const tw = Math.round(Math.max(230, Math.min(400, vw * (vw < 860 ? 0.62 : 0.22))));
  const th = Math.round(tw * 0.625) + 42;
  const gx = Math.round(tw * 0.2), gy = Math.round(Math.max(48, tw * 0.17));
  const cw = tw + gx, rh = th + gy;
  const W = COLS * cw, H = ROWS * rh;
  const nx = Math.ceil((vw + 2 * cw) / W), ny = Math.ceil((vh + 2 * rh) / H);
  L = { vw, vh, tw, th, cw, rh, W, H, nx, ny, SX: W * nx, SY: H * ny };
  world.style.setProperty("--tw", tw + "px");

  slots = [];
  for (let c = 0; c < COLS; c++)
    for (let r = 0; r < ROWS; r++) slots.push({ x: c * cw, y: r * rh + (c % 2 ? rh / 2 : 0) });
  // Spread projects so neighbours vary; the spare slot becomes a "your project" tile.
  const order = [0, 9, 3, 1, 10, 4, 7, 13, 5, 2, 11, 6, 14, 8, 12, 16, 15];
  slots.forEach((s, k) => (s.p = k < order.length ? PROJECTS[order[k]] : null));

  world.innerHTML = "";
  tiles = [];
  const frag = document.createDocumentFragment();
  for (let ci = 0; ci < nx; ci++)
    for (let cj = 0; cj < ny; cj++)
      slots.forEach((s) => {
        const primary = ci === 0 && cj === 0;
        const el = document.createElement("button");
        el.type = "button";
        el.className = "tile" + (s.p ? "" : " tile--cta");
        if (!primary) { el.tabIndex = -1; el.setAttribute("aria-hidden", "true"); }
        if (s.p) {
          el.dataset.i = s.p.i;
          el.innerHTML = `<div class="tile__img"><img src="${img(s.p)}" srcset="${img(s.p, "xs")} 480w, ${img(s.p)} 800w" sizes="${tw}px" alt="" loading="lazy" decoding="async" width="800" height="500" draggable="false"></div>
            <div class="tile__label"><span class="tile__name">${s.p.name}</span><span class="tile__meta mono">${pad(s.p.i + 1)} · ${s.p.type}</span></div>`;
        } else {
          el.dataset.cta = "1";
          el.innerHTML = `<div class="tile__img"><span>Your project<br><em>could be here.</em></span></div>
            <div class="tile__label"><span class="tile__name">Start a project</span><span class="tile__meta mono">${pad(PROJECTS.length + 1)} · Open</span></div>`;
        }
        frag.appendChild(el);
        tiles.push({ el, s, ci, cj });
      });
  world.appendChild(frag);
  // Load the tiles that start on screen right away (the rest stay lazy), so the
  // first paint isn't waiting on lazy-load discovery.
  place();
  let first = 0;
  for (const t of tiles) {
    const im = t.el.querySelector("img");
    if (!im || t.x > vw + cw * 0.5 || t.y > vh || t.x < -tw || t.y < -th) continue;
    im.loading = "eager";
    if (first++ < 4) im.fetchPriority = "high";
  }
  needs = true;
}

function place() {
  const { SX, SY, W, H, cw, rh } = L;
  for (const t of tiles) {
    const x = mod(t.s.x + t.ci * W + off.x, SX) - cw;
    const y = mod(t.s.y + t.cj * H + off.y, SY) - rh;
    t.x = x; t.y = y;
    t.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
  const lat = (17.7833 + off.y * 0.00002).toFixed(4);
  const lng = (63.1821 - off.x * 0.00002).toFixed(4);
  $("#coords").textContent = `${lat}° S  ${lng}° W`;
}

function loop() {
  if (tween) {
    const k = Math.min(1, (performance.now() - tween.t0) / tween.dur);
    const e = 1 - Math.pow(1 - k, 4);
    off.x = tween.fx + tween.dx * e; off.y = tween.fy + tween.dy * e;
    needs = true;
    if (k >= 1) { const cb = tween.cb; tween = null; cb && cb(); }
  } else if (!dragging) {
    if (Math.abs(vel.x) > 0.05 || Math.abs(vel.y) > 0.05) {
      off.x += vel.x; off.y += vel.y; vel.x *= 0.94; vel.y *= 0.94; needs = true;
    } else if (!reduced && !hovering && !document.body.classList.contains("is-list") && !drawerOpen()) {
      off.x -= 0.22; off.y -= 0.06; needs = true; // gentle idle drift
    }
  }
  if (needs) { place(); needs = false; }
  requestAnimationFrame(loop);
}

/* Pointer: drag with inertia, click to open */
let down = null, last = null, moved = 0, tapped = null;
stage.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  tween = null;
  down = { x: e.clientX, y: e.clientY, tile: e.target.closest(".tile") };
  last = { x: e.clientX, y: e.clientY, t: performance.now() };
  moved = 0; dragging = true; vel.x = vel.y = 0;
  stage.setPointerCapture(e.pointerId);
});
stage.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const dx = e.clientX - last.x, dy = e.clientY - last.y;
  const now = performance.now(), dt = Math.max(1, now - last.t);
  off.x += dx; off.y += dy;
  vel.x = (dx / dt) * 16; vel.y = (dy / dt) * 16;
  moved += Math.abs(dx) + Math.abs(dy);
  last = { x: e.clientX, y: e.clientY, t: now };
  if (moved > 6) stage.classList.add("is-dragging");
  needs = true;
});
function endDrag(e) {
  if (!dragging) return;
  dragging = false;
  stage.classList.remove("is-dragging");
  if (performance.now() - last.t > 80) vel.x = vel.y = 0;
  // A tap: open on the click that follows. Opening on pointerup let a touch's
  // synthetic click land on the freshly shown scrim and close the drawer again.
  tapped = moved < 6 && down && down.tile && e.type === "pointerup" ? down.tile : null;
  if (tapped) vel.x = vel.y = 0;
  down = null;
}
stage.addEventListener("pointerup", endDrag);
stage.addEventListener("pointercancel", endDrag);
stage.addEventListener("wheel", (e) => {
  e.preventDefault(); tween = null;
  const k = e.deltaMode === 1 ? 32 : 1;
  off.x -= (e.shiftKey ? e.deltaY : e.deltaX) * k;
  off.y -= (e.shiftKey ? 0 : e.deltaY) * k;
  vel.x = vel.y = 0; needs = true;
  heroTuck();
}, { passive: false });
stage.addEventListener("click", (e) => {
  const t = e.detail === 0 ? e.target.closest(".tile") : tapped; // detail 0: Enter/Space on a focused tile
  tapped = null;
  if (t) activateTile(t);
});
stage.addEventListener("keydown", (e) => {
  const step = 120, map = { ArrowLeft: [step, 0], ArrowRight: [-step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] };
  if (map[e.key]) { e.preventDefault(); animateBy(map[e.key][0], map[e.key][1], 400); }
});

function activateTile(el) {
  if (el.dataset.cta) return openOverlay("contact");
  openProject(+el.dataset.i);
}

let heroTimer;
function heroTuck() {
  $(".hero").classList.add("is-tucked");
  clearTimeout(heroTimer);
  heroTimer = setTimeout(() => $(".hero").classList.remove("is-tucked"), 2200);
}
stage.addEventListener("pointermove", () => { if (dragging && moved > 30) heroTuck(); });

/* Highlight + fly-to */
function light(i) {
  world.classList.toggle("has-lit", i !== null);
  tiles.forEach((t) => t.el.classList.toggle("is-lit", i !== null && t.s.p && t.s.p.i === i));
  $$(".index__item").forEach((b) => b.classList.toggle("is-active", i !== null && +b.dataset.i === i));
}
function animateBy(dx, dy, dur = 900, cb) {
  if (reduced) { off.x += dx; off.y += dy; needs = true; cb && cb(); return; }
  tween = { fx: off.x, fy: off.y, dx, dy, t0: performance.now(), dur, cb };
}
function focusTile(i) {
  const { vw, vh, tw, th } = L;
  const sideW = vw > 860 ? 300 : 0;
  const cx = sideW + (vw - sideW) / 2 - tw / 2, cy = vh / 2 - th / 2;
  let best = null, bd = Infinity;
  tiles.forEach((t) => {
    if (!t.s.p || t.s.p.i !== i) return;
    const d = Math.hypot(t.x - cx, t.y - cy);
    if (d < bd) { bd = d; best = t; }
  });
  if (!best) return openProject(i);
  vel.x = vel.y = 0;
  light(i);
  animateBy(cx - best.x, cy - best.y, 900, () => { openProject(i); setTimeout(() => light(null), 400); });
}

/* Hover state + cursor bubble */
const cursor = $("#cursor");
stage.addEventListener("pointerover", (e) => { const t = e.target.closest(".tile"); hovering = !!t; cursor.classList.toggle("is-on", !!t); });
stage.addEventListener("pointerleave", () => { hovering = false; cursor.classList.remove("is-on"); });
addEventListener("pointermove", (e) => {
  cursor.style.setProperty("--x", e.clientX + "px");
  cursor.style.setProperty("--y", e.clientY + "px");
}, { passive: true });

/* ---------- Project drawer ---------- */
const drawer = $("#drawer"), scrim = $("#scrim");
let current = -1, lastFocus = null;
const drawerOpen = () => drawer.classList.contains("is-open");

function openProject(i) {
  const p = PROJECTS[mod(i, PROJECTS.length)];
  current = p.i;
  if (!drawerOpen()) lastFocus = document.activeElement;
  cursor.classList.remove("is-on");
  $("#dIndex").textContent = `${pad(p.i + 1)} / ${pad(PROJECTS.length)}`;
  const im = $("#dImg");
  im.src = img(p, "lg"); im.alt = `Screenshot of the ${p.name} website`;
  $("#dShot").href = p.url;
  $("#dSector").textContent = p.sector;
  $("#dTitle").textContent = p.name;
  $("#dTagline").textContent = p.tagline;
  $("#dDesc").textContent = p.desc;
  $("#dMeta").innerHTML = [
    ["Type", p.type], ["Sector", p.sector], ["Languages", p.langs], ["Live at", new URL(p.url).host],
  ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  $("#dTags").innerHTML = p.tags.map((t) => `<li>${t}</li>`).join("");
  $("#dLink").href = p.url;
  $(".drawer__scroll").scrollTop = 0;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  scrim.hidden = false;
  history.replaceState(null, "", "#" + p.slug);
  drawer.focus({ preventScroll: true });
}
function closeProject() {
  if (!drawerOpen()) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  scrim.hidden = true;
  history.replaceState(null, "", location.pathname);
  lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
}
$$("[data-step]").forEach((b) => b.addEventListener("click", () => openProject(current + +b.dataset.step)));
drawer.querySelector("[data-close]").addEventListener("click", closeProject);
scrim.addEventListener("click", closeProject);

/* ---------- Overlays (About / Contact) ---------- */
function openOverlay(id) {
  closeProject();
  document.body.classList.remove("index-open");
  $$(".overlay.is-open").forEach((o) => o.id !== id && closeOverlay(o));
  const o = $("#" + id);
  o.classList.add("is-open");
  o.setAttribute("aria-hidden", "false");
  o.scrollTop = 0;
  setTimeout(() => (id === "contact" && $(".step.is-on input") || o.querySelector(".close")).focus({ preventScroll: true }), 300);
}
function closeOverlay(o) {
  o.classList.remove("is-open");
  o.setAttribute("aria-hidden", "true");
}
document.addEventListener("click", (e) => {
  const opener = e.target.closest("[data-open]");
  if (opener) return openOverlay(opener.dataset.open);
  const closer = e.target.closest(".overlay [data-close]");
  if (closer) closeOverlay(closer.closest(".overlay"));
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const o = $(".overlay.is-open");
  if (o) return closeOverlay(o);
  if (drawerOpen()) return closeProject();
  document.body.classList.remove("index-open");
});
$("[data-toggle-index]").addEventListener("click", () => document.body.classList.toggle("index-open"));

/* View toggle */
const viewBtn = $("[data-view-toggle]");
viewBtn.addEventListener("click", () => {
  const on = !document.body.classList.contains("is-list");
  document.body.classList.toggle("is-list", on);
  $("#list").hidden = !on;
  viewBtn.setAttribute("aria-pressed", on);
  viewBtn.innerHTML = on
    ? '<span class="hide-sm">Canvas view</span><span class="show-sm">Canvas</span>'
    : '<span class="hide-sm">List view</span><span class="show-sm">List</span>';
  document.body.classList.remove("index-open");
  scrollTo(0, 0);
});

/* ---------- Contact: WhatsApp funnel ---------- */
const funnel = $("#funnel");
const F = { step: 0, service: null, extras: new Set(), langs: 1 };
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function buildFunnel() {
  $("#services").innerHTML = SERVICES.map((s) => `
    <label class="choice"><input type="radio" name="service" value="${s.id}">
      <span class="choice__name">${s.name}</span><span class="choice__note">${s.note}</span></label>`).join("");
  $("#extras").innerHTML = EXTRAS.map((x) => `
    <label class="chip"><input type="checkbox" name="extra" value="${esc(x)}"><span>${x}</span></label>`).join("");
  funnel.addEventListener("input", onFunnelInput);
  funnel.addEventListener("change", onFunnelInput);
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => {
    F.langs = Math.max(1, Math.min(6, F.langs + +b.dataset.lang));
    $("#langs").textContent = F.langs;
    renderMessage();
  }));
  $$("[data-goto]").forEach((b) => b.addEventListener("click", () => goStep(+b.dataset.goto)));
  $("#fBack").addEventListener("click", () => goStep(F.step - 1));
  funnel.addEventListener("submit", (e) => { e.preventDefault(); if (F.step < 3) goStep(F.step + 1); });
  $("#waSend").addEventListener("click", () => { $("#fStatus").textContent = "Opening WhatsApp…"; });
  goStep(0);
}

function onFunnelInput(e) {
  const t = e.target;
  if (t.name === "service") F.service = SERVICES.find((s) => s.id === t.value);
  if (t.name === "extra") t.checked ? F.extras.add(t.value) : F.extras.delete(t.value);
  if (t.name === "name" && t.value.trim()) t.removeAttribute("aria-invalid");
  $("#fStatus").textContent = "";
  renderMessage();
  syncSteps();
}

// Returns [stepToFallBackTo, message] when step n can't be reached yet.
function stepError(n) {
  if (n >= 1 && !F.service) return [0, "Pick a service to continue."];
  if (n >= 3 && !funnel.elements.name.value.trim()) return [2, "Add your name so I know who's writing."];
  return null;
}

function syncSteps() {
  $$("#steps li").forEach((li, k) => {
    li.classList.toggle("is-on", k <= F.step);
    li.classList.toggle("is-current", k === F.step);
    li.querySelector("button").disabled = k > F.step && !!stepError(k);
  });
}

function goStep(n) {
  n = Math.max(0, Math.min(3, n));
  const err = n > F.step ? stepError(n) : null;
  const nameEl = funnel.elements.name;
  if (err) {
    n = Math.min(err[0], n);
    $("#fStatus").textContent = err[1];
    if (err[0] === 2) nameEl.setAttribute("aria-invalid", "true");
  } else $("#fStatus").textContent = "";
  F.step = n;
  $$("[data-step-panel]").forEach((p) => p.classList.toggle("is-on", +p.dataset.stepPanel === n));
  syncSteps();
  $("#fBack").style.visibility = n === 0 ? "hidden" : "visible";
  $("#fNext").hidden = n === 3;
  $("#contact").classList.toggle("is-final", n === 3);
  renderMessage();
  if (err && err[0] === 2) nameEl.focus({ preventScroll: true });
  // On phones, bring the top of the funnel back into view when the step changes.
  if (innerWidth <= 860) {
    const o = $("#contact"), top = $("#steps").offsetTop - 70;
    if (o.scrollTop > top) o.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  }
}

function funnelData() {
  const d = Object.fromEntries(new FormData(funnel));
  return {
    service: F.service ? F.service.name : "",
    start: d.start || "", timeline: d.timeline || "", budget: d.budget || "",
    extras: [...F.extras], langs: F.langs,
    name: (d.name || "").trim(), company: (d.company || "").trim(),
    link: (d.link || "").trim(), message: (d.message || "").trim(),
  };
}

function messageLines(d) {
  const L = ["Hi Marvz! 👋", "*I'd like to start a project*", ""];
  if (d.service) L.push(`🧩 *Service:* ${d.service} (${d.start.toLowerCase()})`);
  if (d.extras.length) L.push(`✨ *Extras:* ${d.extras.join(", ")}`);
  if (d.langs > 1) L.push(`🌎 *Languages:* ${d.langs}`);
  L.push(`📅 *Timeline:* ${d.timeline}`, `💰 *Budget:* ${d.budget}`);
  if (d.name || d.company || d.link) L.push("");
  if (d.name) L.push(`🙋 *Name:* ${d.name}${d.company ? ` · ${d.company}` : ""}`);
  else if (d.company) L.push(`🏢 *Business:* ${d.company}`);
  if (d.link) L.push(`🔗 ${d.link}`);
  if (d.message) L.push("", d.message);
  L.push("", "Thanks!");
  return L;
}

function renderMessage() {
  const d = funnelData();
  const text = messageLines(d).join("\n");
  // WhatsApp-style *bold* in the preview.
  $("#chatOut").innerHTML = esc(text).replace(/\*([^*\n]+)\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>") +
    `<time>09:42 <span class="ticks">✓✓</span></time>`;
  const chat = $("#chat"); chat.scrollTop = chat.scrollHeight;
  $("#waSend").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  $("#summary").innerHTML = [
    ["Service", d.service ? `${d.service} · ${d.start}` : "-"],
    ["Extras", d.extras.join(", ") || "None"],
    ["Languages", d.langs], ["Timeline", d.timeline], ["Budget", d.budget],
    ["From", [d.name, d.company].filter(Boolean).join(" · ") || "-"],
  ].map(([k, v]) => `<div><dt class="mono">${k}</dt><dd>${esc(v)}</dd></div>`).join("");
}

function buildContactLinks() {
  const links = [];
  if (CONFIG.whatsapp) links.push(`<a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">WhatsApp +${CONFIG.whatsapp.replace(/^(\d{3})(\d+)$/, "$1 $2")} ↗</a>`);
  if (CONFIG.email) links.push(`<a href="mailto:${CONFIG.email}">${CONFIG.email}</a>`);
  if (CONFIG.instagram) links.push(`<a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram ↗</a>`);
  if (CONFIG.linkedin) links.push(`<a href="${CONFIG.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>`);
  if (CONFIG.github) links.push(`<a href="${CONFIG.github}" target="_blank" rel="noopener">GitHub ↗</a>`);
  $("#contactLinks").innerHTML = links.join("");
}

/* ---------- Boot ---------- */
$$("[data-count]").forEach((el) => (el.textContent = PROJECTS.length));
if (matchMedia("(hover: none)").matches) $("#heroHint").textContent = "Swipe to explore";
stage.addEventListener("pointerdown", () => document.body.classList.remove("index-open"));
buildIndex();
buildList();
buildTicker();
buildContactLinks();
buildFunnel();
layout();
off.x = -L.cw * 0.4; off.y = -L.rh * 0.15;
requestAnimationFrame(loop);

// Open a project when the hash changes (e.g. a shared /#helibol link on the open page).
addEventListener("hashchange", () => {
  const p = PROJECTS.find((x) => x.slug === location.hash.slice(1));
  if (p && !(drawerOpen() && current === p.i)) focusTile(p.i);
});

let rt;
addEventListener("resize", () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    // Mobile browsers fire resize when the URL bar shows or hides. Only rebuild
    // the canvas when the width changes or the height needs more tile copies.
    const ny = Math.ceil((innerHeight + 2 * L.rh) / L.H);
    if (innerWidth !== L.vw || ny > L.ny) layout();
    else { L.vh = innerHeight; needs = true; }
  }, 120);
});

// Loader count-up, then reveal
(function boot() {
  const num = $("#loaderNum"), t0 = performance.now(), dur = reduced ? 0 : 1100;
  (function step() {
    const k = dur ? Math.min(1, (performance.now() - t0) / dur) : 1;
    num.textContent = pad(Math.round(k * 99));
    if (k < 1) requestAnimationFrame(step);
    else {
      document.body.classList.add("is-ready");
      const slug = location.hash.slice(1);
      const p = PROJECTS.find((x) => x.slug === slug);
      if (p) setTimeout(() => focusTile(p.i), 300);
    }
  })();
})();
