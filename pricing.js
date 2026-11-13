/* ==========================================================================
   Marvz Studio · Pricing overlay
   Packages, build-your-own add-ons, monthly care plans and a live quote
   that opens WhatsApp. All prices are in bolivianos (Bs). Edit them below.
   Loaded after app.js and uses its globals: lang, CONFIG, $, $$, esc.
   ========================================================================== */

const PRICING = {
  fx: 11.65, // Bs per US$, used only for the US$ view. Check it every few months.
  base: 3500, // Base site: up to 5 sections, responsive, fast
};

const CATS = {
  all: { en: "All", es: "Todo" },
  sales: { en: "Sell more", es: "Vender más" },
  reach: { en: "Get found", es: "Que te encuentren" },
  content: { en: "Content & brand", es: "Contenido y marca" },
  tech: { en: "AI & tech", es: "IA y tecnología" },
  ops: { en: "Domain & email", es: "Dominio y correo" },
};

// price = one-time Bs, monthly = Bs per month, qty = can be added more than once.
const ADDONS = [
  { id: "whatsapp", cat: "sales", price: 900,
    en: ["WhatsApp ordering & booking", "Buttons and flows that open WhatsApp with the order or booking already written.", "Most sales in Bolivia close on WhatsApp. Your site sends customers straight to the chat."],
    es: ["Pedidos y reservas por WhatsApp", "Botones y flujos que abren WhatsApp con el pedido o la reserva ya escrita.", "En Bolivia la venta se cierra en WhatsApp. Tu web lleva al cliente directo al chat."] },
  { id: "qr", cat: "sales", price: 1900,
    en: ["QR Simple & card payments", "A local payment gateway: interoperable QR, cards and wallets. Gateway fees are separate.", "Your customers pay the way they already pay every day: with a QR."],
    es: ["Cobros con QR Simple y tarjeta", "Integración con una pasarela local: QR interoperable, tarjeta y billeteras. Las comisiones de la pasarela van aparte.", "Tus clientes pagan como ya pagan todos los días: con QR."] },
  { id: "shop", cat: "sales", price: 3500,
    en: ["Online shop / catalog", "Up to 50 products, cart and categories, with checkout by WhatsApp or QR.", "Customers browse on your site and confirm the order in the chat."],
    es: ["Tienda online / catálogo", "Hasta 50 productos, carrito y categorías, con pedido por WhatsApp o pago QR.", "El cliente mira en tu web y confirma el pedido en el chat."] },
  { id: "booking", cat: "sales", price: 1800,
    en: ["Online bookings & calendar", "A calendar for appointments or tables, with confirmations and reminders.", "Made for restaurants, clinics, salons and academies."],
    es: ["Reservas y agenda online", "Calendario de turnos o mesas con confirmación y recordatorio.", "Ideal para restaurantes, clínicas, salones y academias."] },
  { id: "lang", cat: "reach", price: 700, qty: true,
    en: ["Extra language", "Per language (English, Portuguese…), with a language switch and SEO for each one.", "Santa Cruz does business with Brazil and the world. Speak to those customers too."],
    es: ["Idioma adicional", "Por idioma (inglés, portugués…), con selector de idioma y SEO para cada uno.", "Santa Cruz hace negocios con Brasil y el mundo. Háblales también a esos clientes."] },
  { id: "seo", cat: "reach", price: 1100,
    en: ["Local SEO + Google Maps", "Google Business Profile, structured data, “in Santa Cruz” keywords and speed.", "Most people search “near me” on their phone. You'll see results within weeks."],
    es: ["SEO local + Google Maps", "Perfil de Empresa en Google, datos estructurados, palabras clave “en Santa Cruz” y velocidad.", "La mayoría busca “cerca de mí” desde el celular. Verás resultados en semanas."] },
  { id: "seoMo", cat: "reach", price: 0, monthly: 900,
    en: ["Monthly SEO", "2 articles, on-page tuning and a monthly ranking report.", "Keeps you climbing on Google once local SEO is working."],
    es: ["SEO mensual", "2 artículos, ajustes en la página y un reporte mensual de posiciones.", "Te mantiene subiendo en Google cuando el SEO local ya funciona."] },
  { id: "analytics", cat: "reach", price: 450,
    en: ["Analytics + Meta Pixel", "GA4, the Meta Pixel and WhatsApp-click tracking, ready for ads.", "A must if you run ads on Facebook or Instagram."],
    es: ["Analítica + Píxel de Meta", "GA4, el Píxel de Meta y medición de clics a WhatsApp, listos para pautar.", "Imprescindible si haces anuncios en Facebook o Instagram."] },
  { id: "pages", cat: "content", price: 350, qty: true,
    en: ["Extra page / section", "Each page beyond the 5 in the base site.", "A small, clear price for every extra page."],
    es: ["Página o sección extra", "Cada página adicional a las 5 del sitio base.", "Un precio pequeño y claro por cada página extra."] },
  { id: "copy", cat: "content", price: 1200,
    en: ["Professional copywriting (5 pages)", "Texts that sell, in natural local Spanish, ready for SEO.", "No need to write it yourself, and your site goes live sooner."],
    es: ["Redacción profesional (5 páginas)", "Textos que venden, en un español cercano para Santa Cruz y listos para SEO.", "No tienes que escribirlos tú, y tu web sale antes."] },
  { id: "blog", cat: "content", price: 800,
    en: ["Blog / news", "An articles section you can edit, with categories.", "Share news and give Google more reasons to find you."],
    es: ["Blog / noticias", "Sección de artículos que puedes editar, con categorías.", "Comparte novedades y dale a Google más razones para encontrarte."] },
  { id: "story", cat: "content", price: 2400,
    en: ["Scroll storytelling & motion", "A cinematic experience: transitions, parallax and animated stats.", "The signature style behind Haras La Alhambra and Fabrizio Saunero."],
    es: ["Scroll storytelling y animaciones", "Una experiencia cinematográfica: transiciones, parallax y cifras animadas.", "El sello de Haras La Alhambra y Fabrizio Saunero."] },
  { id: "brand", cat: "content", price: 2800,
    en: ["Brand identity", "Logo, colors, typography and a short brand guide.", "Start with a clear brand, then design around it."],
    es: ["Identidad de marca", "Logo, paleta, tipografías y un mini manual de marca.", "Empieza con una marca clara y diseña a partir de ella."] },
  { id: "video", cat: "content", price: 2500,
    en: ["Hero video / mini film", "A half-day shoot and edit of a 30–60 s video for your homepage.", "Agro, hospitality and food brands sell with visuals."],
    es: ["Video de portada / mini film", "Medio día de rodaje y edición de un video de 30–60 s para tu portada.", "El agro, la hotelería y la gastronomía venden por lo visual."] },
  { id: "ai", cat: "tech", price: 2900, monthly: 290,
    en: ["AI assistant on your site", "A chat trained on your business, like “Spirit”. The monthly fee covers AI usage.", "Answers prices, hours and location 24/7, then hands off to WhatsApp."],
    es: ["Asistente con IA en tu web", "Un chat entrenado con la información de tu negocio, como “Spirit”. Lo mensual cubre el consumo de IA.", "Responde precios, horarios y ubicación 24/7, y deriva a WhatsApp."] },
  { id: "wabot", cat: "tech", price: 3900, monthly: 550,
    en: ["AI WhatsApp bot", "Answers on the official WhatsApp Business API. Meta's per-message fees are separate.", "For businesses with lots of chats: real estate, delivery, clinics."],
    es: ["Bot de WhatsApp con IA", "Atiende en la API oficial de WhatsApp Business. Las tarifas de Meta por mensaje van aparte.", "Para negocios con muchos chats: inmobiliarias, delivery, clínicas."] },
  { id: "pwa", cat: "tech", price: 1600,
    en: ["Installable app (PWA)", "Installs from the browser, works on a weak signal and sends notifications.", "Have your own app without paying for a native one."],
    es: ["App instalable (PWA)", "Se instala desde el navegador, funciona con mala señal y envía notificaciones.", "Ten tu propia app sin pagar una app nativa."] },
  { id: "cms", cat: "tech", price: 1500,
    en: ["Admin panel to edit your site", "Change menus, prices, photos and text yourself.", "When your prices change, update them in minutes."],
    es: ["Panel autoadministrable", "Cambia menú, precios, fotos y textos tú mismo.", "Cuando cambian tus precios, los actualizas en minutos."] },
  { id: "domain", cat: "ops", price: 950,
    en: ["Domain + email (yearly)", "A .com or .bo domain, SSL and branded email, set up for you. Renews yearly.", "An @yourbusiness email builds trust with banks and clients."],
    es: ["Dominio + correos (anual)", "Dominio .com o .bo, SSL y correos corporativos configurados. Se renueva cada año.", "Un correo @tuempresa da confianza a bancos y clientes."] },
];

const CARE = [
  { id: "none", price: 0, en: ["No plan", "Changes at Bs 150/h"], es: ["Sin plan", "Cambios a Bs 150/h"] },
  { id: "basic", price: 350, en: ["Basic Care", "Hosting, backups, security and 1 h of changes"], es: ["Cuidado Básico", "Hosting, backups, seguridad y 1 h de cambios"] },
  { id: "pro", price: 690, en: ["Pro Care", "Everything in Basic, plus 3 h, a monthly report and WhatsApp support"], es: ["Cuidado Pro", "Todo lo de Básico, más 3 h, reporte mensual y soporte por WhatsApp"] },
  { id: "partner", price: 1290, en: ["Digital Partner", "6 h, ongoing improvements and 1 campaign landing page a month"], es: ["Socio Digital", "6 h, mejoras continuas y 1 landing de campaña al mes"] },
];

// items: add-on id → quantity included. careMonths of careId are included; aiMonths of AI usage too.
const PACKAGES = [
  { id: "presence", price: 4900, careId: "basic", careMonths: 1, aiMonths: 0, plan: 2,
    items: { whatsapp: 1, seo: 1, analytics: 1 },
    en: ["Presence", "For businesses that need to look professional and get messages now.", "50% upfront · 50% at launch · 2–3 weeks"],
    es: ["Presencia", "Para el negocio que necesita verse profesional y recibir mensajes ya.", "50% anticipo · 50% al publicar · 2–3 semanas"] },
  { id: "growth", price: 9900, careId: "pro", careMonths: 3, aiMonths: 0, plan: 2, featured: true,
    items: { pages: 3, lang: 1, cms: 1, whatsapp: 1, booking: 1, seo: 1, analytics: 1, copy: 1 },
    en: ["Growth", "For restaurants, clinics and businesses that want to sell and take bookings online.", "50% upfront · 50% at launch · 4–5 weeks"],
    es: ["Crecimiento", "Para restaurantes, clínicas y PyMEs que quieren vender y recibir reservas online.", "50% anticipo · 50% al publicar · 4–5 semanas"] },
  { id: "flagship", price: 21900, careId: "pro", careMonths: 6, aiMonths: 3, plan: 3,
    items: { pages: 5, lang: 2, cms: 1, shop: 1, qr: 1, whatsapp: 1, story: 1, ai: 1, seo: 1, analytics: 1, copy: 1, brand: 1, pwa: 1 },
    en: ["Flagship", "For leading brands: a cinematic experience, online shop, payments and AI.", "3 payments 40/30/30 · 7–9 weeks"],
    es: ["Insignia", "Para marcas líderes: experiencia cinematográfica, tienda, cobros e IA.", "3 cuotas 40/30/30 · 7–9 semanas"] },
];

const PT = {
  en: {
    base: "Base site", baseFull: "Base site (up to 5 sections, responsive, fast)", pkgLine: (n) => `${n} package`,
    included: "Included", add: "Add", added: "Added", each: "each", once: "one-time", mo: "/mo",
    valueSep: "Value separately", save: "Save", choose: "Choose", chosen: "Chosen", featured: "Most chosen",
    careIncl: (n, c) => `${n} ${n === 1 ? "month" : "months"} of ${c} included`, monthsIncl: (n) => `${n} ${n === 1 ? "month" : "months"} included`, aiIncl: (n) => `${n} months of AI usage included`,
    upTo: (n) => `${n}× `, empty: "Just the base site for now. Choose a package or add what you need.",
    fromMonth: (n) => `from month ${n}`, deposit: "Deposit to start", remove: "Remove",
    plan2: "50% upfront / 50% at launch", plan3: "40% / 30% / 30%", rush: "Rush delivery", copied: "Quote copied",
    pkgLoaded: "Package added to your quote", careNone: "No plan",
    waHead: "Hi Marvz! 👋", waWant: "*I'd like a quote for this project:*", waOne: "One-time", waMo: "Monthly", waPlan: "Payment",
    waUsd: "approx.",
  },
  es: {
    base: "Sitio base", baseFull: "Sitio base (hasta 5 secciones, responsive, rápido)", pkgLine: (n) => `Paquete ${n}`,
    included: "Incluido", add: "Añadir", added: "Añadido", each: "c/u", once: "pago único", mo: "/mes",
    valueSep: "Valor por separado", save: "Ahorras", choose: "Elegir", chosen: "Elegido", featured: "El más elegido",
    careIncl: (n, c) => `${n} ${n === 1 ? "mes" : "meses"} de ${c} incluido${n === 1 ? "" : "s"}`, monthsIncl: (n) => `${n} ${n === 1 ? "mes incluido" : "meses incluidos"}`, aiIncl: (n) => `${n} meses de uso de IA incluidos`,
    upTo: (n) => `${n}× `, empty: "Por ahora solo el sitio base. Elige un paquete o añade lo que necesites.",
    fromMonth: (n) => `desde el mes ${n}`, deposit: "Anticipo para empezar", remove: "Quitar",
    plan2: "50% anticipo / 50% al publicar", plan3: "40% / 30% / 30%", rush: "Entrega express", copied: "Cotización copiada",
    pkgLoaded: "Paquete añadido a tu cotización", careNone: "Sin plan",
    waHead: "¡Hola Marvz! 👋", waWant: "*Quiero cotizar este proyecto:*", waOne: "Pago único", waMo: "Mensual", waPlan: "Forma de pago",
    waUsd: "aprox.",
  },
};

/* ========================================================================== */

const P = { cur: "BOB", cat: "all", sel: {}, pkg: null, care: "none", rush: false, plan: 2 };
const pt = (k) => PT[lang][k];
const pAddon = (id) => ADDONS.find((a) => a.id === id);
const pCare = (id) => CARE.find((c) => c.id === id);
const pPkg = (id) => PACKAGES.find((b) => b.id === id);

function money(bs, cur = P.cur) {
  if (cur === "USD") return "US$ " + Math.round(bs / PRICING.fx).toLocaleString("en-US");
  return "Bs " + Math.round(bs).toLocaleString(lang === "es" ? "es-BO" : "en-US");
}
const otherCur = () => (P.cur === "BOB" ? "USD" : "BOB");

function packageValue(b) {
  let v = PRICING.base;
  for (const [id, q] of Object.entries(b.items)) v += pAddon(id).price * q;
  v += pCare(b.careId).price * b.careMonths;
  v += (pAddon("ai").monthly || 0) * b.aiMonths;
  return v;
}

/* ---------- Render ---------- */
function renderPackages() {
  $("#pkgs").innerHTML = PACKAGES.map((b) => {
    const [name, forWho, terms] = b[lang];
    const value = packageValue(b), pct = Math.round((1 - b.price / value) * 100), on = P.pkg === b.id;
    const items = [pt("base")].concat(Object.entries(b.items).map(([id, q]) => (q > 1 ? pt("upTo")(q) : "") + pAddon(id)[lang][0]));
    items.push(pt("careIncl")(b.careMonths, pCare(b.careId)[lang][0]));
    if (b.aiMonths) items.push(pt("aiIncl")(b.aiMonths));
    return `<article class="pkg${b.featured ? " pkg--featured" : ""}${on ? " is-on" : ""}">
      ${b.featured ? `<span class="pkg__badge mono">${pt("featured")}</span>` : ""}
      <h3 class="pkg__name">${name}</h3>
      <p class="pkg__for">${forWho}</p>
      <p class="pkg__price">${money(b.price)}<small class="mono">≈ ${money(b.price, otherCur())}</small></p>
      <p class="pkg__value mono">${pt("valueSep")} <s>${money(value)}</s> <span class="pkg__save">${pt("save")} ${pct}%</span></p>
      <ul class="pkg__list">${items.map((i) => `<li>${i}</li>`).join("")}</ul>
      <p class="pkg__terms">${terms}</p>
      <button class="btn ${on || b.featured ? "btn--red" : "btn--line"}" type="button" data-pkg="${b.id}" aria-pressed="${on}">${on ? "✓ " + pt("chosen") : pt("choose") + " " + name}</button>
    </article>`;
  }).join("");
}

function renderFilters() {
  $("#pFilters").innerHTML = Object.entries(CATS).map(([k, v]) =>
    `<button class="pill pill--btn" type="button" data-pcat="${k}" aria-pressed="${P.cat === k}">${v[lang]}</button>`).join("");
}

function addonPrice(a) {
  let h = "";
  if (a.price) h += `<b>${money(a.price)}</b><span>${a.qty ? pt("each") : pt("once")}</span>`;
  if (a.monthly) h += `<b>${a.price ? "+ " : ""}${money(a.monthly)}</b><span>${pt("mo")}</span>`;
  return h;
}

function renderAddons() {
  const inPkg = P.pkg ? pPkg(P.pkg).items : {};
  $("#pGrid").innerHTML = ADDONS.filter((a) => P.cat === "all" || a.cat === P.cat).map((a) => {
    const [name, desc, why] = a[lang];
    const q = P.sel[a.id] || 0, incl = inPkg[a.id] || 0, on = q + incl > 0;
    let ctl;
    if (a.qty) ctl = `<div class="stepper stepper--sm" role="group" aria-label="${esc(name)}">
        <button type="button" data-pdec="${a.id}" aria-label="−"${q ? "" : " disabled"}>−</button>
        <output>${q + incl}</output>
        <button type="button" data-pinc="${a.id}" aria-label="+">+</button></div>`;
    else if (incl) ctl = `<span class="addon__incl mono">✓ ${pt("included")}</span>`;
    else ctl = `<button class="btn ${q ? "btn--cream" : "btn--line"}" type="button" data-ptog="${a.id}" aria-pressed="${!!q}">${q ? "✓ " + pt("added") : "+ " + pt("add")}</button>`;
    return `<article class="addon${on ? " is-on" : ""}">
      <span class="addon__cat mono">${CATS[a.cat][lang]}</span>
      <h4 class="addon__name">${name}</h4>
      <p class="addon__desc">${desc}</p>
      <p class="addon__why">${why}</p>
      <div class="addon__foot"><p class="addon__price">${addonPrice(a)}</p>${ctl}</div>
    </article>`;
  }).join("");
}

function renderCare() {
  $("#pCare").innerHTML = CARE.map((c) => {
    const on = activeCare() === c.id;
    return `<button class="care${on ? " is-on" : ""}" type="button" data-pcare="${c.id}" aria-pressed="${on}">
      <span class="mono">${c[lang][0]}</span>
      <b>${c.price ? money(c.price) + `<small>${pt("mo")}</small>` : "—"}</b>
      <span class="care__desc">${c[lang][1]}</span></button>`;
  }).join("");
}

// With a package and no plan picked, the package's plan applies.
function activeCare() {
  return P.pkg && P.care === "none" ? pPkg(P.pkg).careId : P.care;
}

function calc() {
  const b = P.pkg ? pPkg(P.pkg) : null;
  const lines = [];
  let one = 0, mo = 0;
  if (b) {
    one += b.price;
    lines.push({ n: pt("pkgLine")(b[lang][0]), v: b.price });
    for (const [id, q] of Object.entries(b.items)) {
      const a = pAddon(id);
      lines.push({ n: (q > 1 ? pt("upTo")(q) : "") + a[lang][0], inc: true });
      if (a.monthly) mo += a.monthly;
    }
  } else {
    one += PRICING.base;
    lines.push({ n: pt("baseFull"), v: PRICING.base });
  }
  for (const [id, q] of Object.entries(P.sel)) {
    if (!q) continue;
    const a = pAddon(id);
    const v = a.price * q;
    one += v;
    if (a.monthly) mo += a.monthly * q;
    lines.push({ id, n: (q > 1 ? pt("upTo")(q) : "") + a[lang][0], v, m: a.monthly ? a.monthly * q : 0 });
  }
  const care = pCare(activeCare());
  if (care.price) {
    mo += care.price;
    lines.push({ n: care[lang][0] + (b && care.id === b.careId ? ` · ${pt("monthsIncl")(b.careMonths)}` : ""), m: care.price });
  }
  const rush = P.rush ? Math.round(one * 0.25) : 0;
  if (rush) { lines.push({ n: `${pt("rush")} +25%`, v: rush }); one += rush; }
  const startMo = b ? Math.max(b.careMonths, b.aiMonths) + 1 : 0;
  return { one, mo, lines, startMo };
}

function renderQuote() {
  const { one, mo, lines, startMo } = calc();
  $("#qLines").innerHTML = lines.map((l) => `<li class="${l.inc ? "is-inc" : ""}">
      <span>${l.inc ? "↳ " : ""}${esc(l.n)}${l.id ? ` <button class="qline__x" type="button" data-prm="${l.id}" aria-label="${pt("remove")}">✕</button>` : ""}</span>
      <span>${l.v != null ? money(l.v) + (l.m ? `<small> + ${money(l.m)}${pt("mo")}</small>` : "") : l.m ? money(l.m) + pt("mo") : pt("included")}</span></li>`).join("") +
    (lines.length < 2 && !P.pkg ? `<li class="qline__empty">${pt("empty")}</li>` : "");
  $("#qOne").textContent = money(one);
  $("#qTotal").textContent = money(one);
  $("#qOneAlt").textContent = "≈ " + money(one, otherCur());
  $("#qMo").innerHTML = mo ? `${money(mo)}<small>${pt("mo")}${startMo ? " · " + pt("fromMonth")(startMo) : ""}</small>` : "—";
  $("#qDeposit").textContent = `${pt("deposit")}: ${money(P.plan === 2 ? one * 0.5 : one * 0.4)}`;
  $("#qRush").setAttribute("aria-checked", String(P.rush));
  $$("[data-pplan]").forEach((x) => x.setAttribute("aria-pressed", String(+x.dataset.pplan === P.plan)));
  $$("[data-pcur]").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.pcur === P.cur)));
  $("#qWa").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(quoteText())}`;
  $("#qDock").textContent = money(one);
}

function quoteText() {
  const { one, mo, lines, startMo } = calc();
  const rows = lines.map((l) => (l.inc ? "   ↳ " : "• ") + l.n +
    (l.v != null ? ` — ${money(l.v)}` : l.m ? ` — ${money(l.m)}${pt("mo")}` : "") +
    (l.v != null && l.m ? ` + ${money(l.m)}${pt("mo")}` : ""));
  return [
    pt("waHead"), pt("waWant"), "", ...rows, "",
    `*${pt("waOne")}:* ${money(one)} (${pt("waUsd")} ${money(one, otherCur())})`,
    mo ? `*${pt("waMo")}:* ${money(mo)}${pt("mo")}${startMo ? ` (${pt("fromMonth")(startMo)})` : ""}` : null,
    `*${pt("waPlan")}:* ${P.plan === 2 ? pt("plan2") : pt("plan3")}`,
  ].filter((x) => x !== null).join("\n");
}

function renderPricing() {
  renderPackages();
  renderFilters();
  renderAddons();
  renderCare();
  renderQuote();
}

/* ---------- Events ---------- */
const pricingEl = $("#pricing");
function toastP(msg) {
  const el = $("#pToast");
  el.textContent = msg;
  el.classList.add("is-on");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("is-on"), 1800);
}

pricingEl.addEventListener("click", (e) => {
  const d = e.target.closest("[data-pcat],[data-ptog],[data-pinc],[data-pdec],[data-pcare],[data-pkg],[data-prm],[data-pplan],[data-pcur],#qRush,#qCopy");
  if (!d) return;
  const ds = d.dataset;
  if (ds.pcat) { P.cat = ds.pcat; renderFilters(); renderAddons(); return; }
  if (ds.pcur) { P.cur = ds.pcur; renderPricing(); return; }
  if (ds.pplan) { P.plan = +ds.pplan; renderQuote(); return; }
  if (d.id === "qRush") { P.rush = !P.rush; renderQuote(); return; }
  if (d.id === "qCopy") return copyQuote();
  if (ds.ptog) P.sel[ds.ptog] = P.sel[ds.ptog] ? 0 : 1;
  if (ds.pinc) P.sel[ds.pinc] = (P.sel[ds.pinc] || 0) + 1;
  if (ds.pdec) P.sel[ds.pdec] = Math.max(0, (P.sel[ds.pdec] || 0) - 1);
  if (ds.prm) P.sel[ds.prm] = 0;
  if (ds.pcare) { P.care = ds.pcare; if (P.pkg && ds.pcare === "none") P.care = pPkg(P.pkg).careId; }
  if (ds.pkg) choosePackage(ds.pkg);
  renderPackages();
  renderAddons();
  renderCare();
  renderQuote();
});

function choosePackage(id) {
  P.pkg = P.pkg === id ? null : id;
  P.care = "none";
  if (!P.pkg) return;
  const b = pPkg(id);
  P.plan = b.plan;
  // Single add-ons the package already covers come off the extras list.
  for (const k in b.items) if (!pAddon(k).qty) P.sel[k] = 0;
  toastP(pt("pkgLoaded"));
}

function copyQuote() {
  const txt = quoteText();
  const done = () => toastP(pt("copied"));
  const fallback = () => {
    const ta = document.createElement("textarea");
    ta.value = txt; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    ta.remove();
  };
  if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
}

$("[data-scroll-quote]").addEventListener("click", () => $("#quote").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" }));

// Phones: a bar with the running total that jumps to the quote, shown while the quote is off screen.
const quoteObs = new IntersectionObserver(([en]) => pricingEl.classList.toggle("quote-visible", en.isIntersecting), { root: pricingEl, threshold: 0.05 });
quoteObs.observe($("#quote"));

renderPricing();
