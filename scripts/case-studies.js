/* Builds the case-study pages from the CASES list below:
 *   work/<slug>/index.html      English
 *   work/<slug>/es/index.html   Spanish
 * Run after editing:  node scripts/case-studies.js
 * (scripts/seo.js adds the pages to sitemap.xml.)
 *
 * Images live in assets/case/ (desktop shots at 1440×900 plus an -sm copy,
 * phone shots at 360×800) and the hero comes from assets/work/<slug>.webp.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SITE = "https://marvz-portfolio.vercel.app";

const CASES = [
  {
    slug: "haras-la-alhambra",
    name: "Haras La Alhambra",
    url: "https://haras-la-alhambra.vercel.app/",
    shots: { phone: "haras-m", a: "haras-linajes", b: "haras-noches" },
    en: {
      sector: "Equestrian",
      title: "Three decades of horse breeding, <em>told like a film.</em>",
      plain: "Three decades of horse breeding, told like a film",
      summary: "Haras La Alhambra has bred Purebred Arabian and Pura Raza Española horses in Urubó, Santa Cruz, since 1993. I designed and built a cinematic, bilingual site that tells that story in eight chapters, brings people to the farm for a visit, and answers their questions at any hour with an AI assistant.",
      meta: [["Client", "Haras La Alhambra"], ["Location", "Urubó, Santa Cruz"], ["What I did", "Art direction, design, development, copywriting, AI assistant"], ["Languages", "Spanish · English"]],
      brief: [
        "La Alhambra is more than a stud farm. It breeds three bloodlines, runs a riding school for children from four years old and for adults, offers boarding and training, and hosts evening galas and the Santa Cruz dressage circuit in its own arena.",
        "All of that had to feel as premium as the horses. And every kind of visitor, whether a buyer, a rider looking for a trainer or a parent looking for lessons, needed a clear path to their part of the farm and to a visit.",
      ],
      approach: [
        ["Story first", "I organized the site as eight numbered chapters: Origin, Bloodlines, Philosophy, The Haras, Nights, Education, Services & rates, and Visit us. The home page plays like a trailer, and each chapter has its own page for people who want more."],
        ["Art direction", "The opening film plays through the cut-out letters of ALHAMBRA. A classic serif, a warm palette and the farm's own photography carry through every page, with scroll-driven reveals, a sideways bloodline gallery and “A day at La Alhambra” from 07:00 to 21:00."],
        ["Answers without a phone call", "Spirit, an AI assistant trained on the farm's information, answers questions about the horses, lessons, rates, events and visits, with quick replies for the common ones. Rates are published openly, starting with a Bs 150 trial class."],
      ],
      built: [
        "Eight-chapter site with a page for each chapter",
        "Spanish and English throughout",
        "Bloodline gallery for Arabian, PRE and Hispano-Arabian horses",
        "Riding school with four levels, from Pony Club to classical dressage",
        "Services and rates: boarding, training, arenas and paddocks",
        "Events page with the 2025 dressage circuit",
        "Spirit, the AI assistant, on every page",
        "Visit section with Instagram contact and directions",
      ],
      caps: { a: "Bloodlines: three lines, one standard.", b: "Nights at La Alhambra: galas, dinners and shows in the arena.", phone: "The film plays through the letters, on phones too." },
      pkg: ["Flagship", "Closest to the Flagship package: cinematic storytelling, an AI assistant and full copywriting."],
    },
    es: {
      sector: "Ecuestre",
      title: "Tres décadas de cría de caballos, <em>contadas como una película.</em>",
      plain: "Tres décadas de cría de caballos, contadas como una película",
      summary: "Haras La Alhambra cría caballos Pura Sangre Árabe y Pura Raza Española en el Urubó, Santa Cruz, desde 1993. Diseñé y desarrollé un sitio cinematográfico y bilingüe que cuenta esa historia en ocho capítulos, lleva a la gente a visitar el haras y responde sus preguntas a cualquier hora con un asistente con IA.",
      meta: [["Cliente", "Haras La Alhambra"], ["Ubicación", "Urubó, Santa Cruz"], ["Qué hice", "Dirección de arte, diseño, desarrollo, redacción, asistente con IA"], ["Idiomas", "Español · Inglés"]],
      brief: [
        "La Alhambra es más que un criadero. Cría tres linajes, tiene una escuela de equitación para niños desde los cuatro años y para adultos, ofrece pensión y entrenamiento, y recibe galas nocturnas y el circuito de adiestramiento de Santa Cruz en su propia pista.",
        "Todo eso tenía que sentirse tan exclusivo como sus caballos. Y cada tipo de visitante, ya sea un comprador, un jinete que busca entrenador o un padre que busca clases, necesitaba un camino claro hacia su parte del haras y hacia una visita.",
      ],
      approach: [
        ["Primero, la historia", "Organicé el sitio en ocho capítulos numerados: El origen, Linajes, Filosofía, El Haras, Noches, Educación, Servicios y tarifas, y Visítenos. La portada funciona como un tráiler y cada capítulo tiene su propia página para quien quiere saber más."],
        ["Dirección de arte", "El video de apertura se ve a través de las letras recortadas de ALHAMBRA. Una tipografía serif clásica, una paleta cálida y las fotos del propio haras recorren todas las páginas, con apariciones al hacer scroll, una galería lateral de linajes y “Un día en La Alhambra” de 07:00 a 21:00."],
        ["Respuestas sin llamar", "Spirit, un asistente con IA entrenado con la información del haras, responde sobre los caballos, las clases, las tarifas, los eventos y las visitas, con respuestas rápidas para las preguntas más comunes. Las tarifas se publican abiertamente, empezando por una clase de prueba de Bs 150."],
      ],
      built: [
        "Sitio de ocho capítulos, con una página para cada uno",
        "Español e inglés en todo el sitio",
        "Galería de linajes: Árabe, PRE e Hispano-Árabe",
        "Escuela de equitación con cuatro niveles, del Pony Club a la doma clásica",
        "Servicios y tarifas: pensión, entrenamiento, picaderos y potreros",
        "Página de eventos con el circuito de adiestramiento 2025",
        "Spirit, el asistente con IA, en todas las páginas",
        "Sección de visitas con contacto por Instagram y cómo llegar",
      ],
      caps: { a: "Linajes: tres sangres, una sola exigencia.", b: "Noches de La Alhambra: galas, cenas y espectáculos en el picadero.", phone: "El video a través de las letras, también en el celular." },
      pkg: ["Insignia", "Lo más parecido al paquete Insignia: storytelling cinematográfico, asistente con IA y redacción completa."],
    },
  },
  {
    slug: "fogo-de-chao",
    name: "Fogo de Chão Ventura Sur",
    url: "https://fogo-de-chao-ventura-sur.vercel.app/es",
    shots: { phone: "fogo-m", a: "fogo-cortes", b: "fogo-reservar" },
    en: {
      sector: "Hospitality",
      title: "A churrascaria's ritual, <em>in six languages.</em>",
      plain: "A churrascaria's ritual, in six languages",
      summary: "Fogo de Chão opened its second Santa Cruz restaurant in the new Mall Ventura Sur. I built a warm, editorial site that explains the gaúcho ritual, shows every cut, and turns visits into WhatsApp reservations, in Spanish, English, Portuguese, French, German and Chinese.",
      meta: [["Client", "Fogo de Chão Ventura Sur"], ["Location", "Mall Ventura Sur, Santa Cruz"], ["What I did", "Art direction, design, development, CMS, reservations"], ["Languages", "ES · EN · PT · FR · DE · ZH"]],
      brief: [
        "A rodízio has rules that first-time guests don't know. The cuts keep coming to the table, the Market Table is self-service, and a two-sided card tells the gauchos when to bring more and when to pause.",
        "The new restaurant also needed a home for its weekly specials and events, and an easy way to reserve a table for locals, business travelers and tourists alike.",
      ],
      approach: [
        ["Explain the ritual", "The home page walks guests through the evening in order: the ritual in three steps, the rodízio cuts, the Market Table, the card, the bar, the week's specials and, finally, their table."],
        ["Every cut has a page", "Picanha, fraldinha, bife ancho, tomahawk, T-bone, costela and alcatra each get tasting notes, the recommended doneness, where the cut comes from and a wine pairing."],
        ["Book where people already are", "The reservation page asks for the date, time and number of guests, then opens WhatsApp with the request already written. FOGO, a chat host, handles bookings, group events, menu questions and everything else."],
      ],
      built: [
        "Six languages, each with its own web address",
        "Menu, cuts, weekly specials, events and location pages",
        "A detail page for every cut, with tasting notes and wine pairings",
        "Reservation form that sends the request to WhatsApp",
        "FOGO chat host for bookings and questions",
        "Semana Fogo: the week's offers, with today highlighted",
        "A content manager so the team updates the menu, specials and photos",
        "Directions to the mall, one tap from every page",
      ],
      caps: { a: "The cuts, one by one.", b: "Reservations: fill in three fields, then WhatsApp opens with the request written.", phone: "On phones, reserving is always one tap away." },
      pkg: ["Growth", "Closest to the Growth package, with five extra languages and a content manager."],
    },
    es: {
      sector: "Gastronomía",
      title: "El ritual de una churrascaría, <em>en seis idiomas.</em>",
      plain: "El ritual de una churrascaría, en seis idiomas",
      summary: "Fogo de Chão abrió su segundo restaurante de Santa Cruz en el nuevo Mall Ventura Sur. Desarrollé un sitio cálido y editorial que explica el ritual gaúcho, muestra cada corte y convierte las visitas en reservas por WhatsApp, en español, inglés, portugués, francés, alemán y chino.",
      meta: [["Cliente", "Fogo de Chão Ventura Sur"], ["Ubicación", "Mall Ventura Sur, Santa Cruz"], ["Qué hice", "Dirección de arte, diseño, desarrollo, CMS, reservas"], ["Idiomas", "ES · EN · PT · FR · DE · ZH"]],
      brief: [
        "Un rodízio tiene reglas que quien va por primera vez no conoce. Los cortes no dejan de llegar a la mesa, la Mesa del Mercado es de autoservicio y una tarjeta de dos caras les dice a los gauchos cuándo traer más y cuándo hacer una pausa.",
        "El nuevo restaurante también necesitaba un lugar para sus promociones de la semana y sus eventos, y una forma fácil de reservar mesa, tanto para cruceños como para viajeros de negocios y turistas.",
      ],
      approach: [
        ["Explicar el ritual", "La portada acompaña al comensal por la noche en orden: el ritual en tres pasos, los cortes del rodízio, la Mesa del Mercado, la tarjeta, el bar, las promociones de la semana y, al final, su mesa."],
        ["Cada corte tiene su página", "Picanha, fraldinha, bife ancho, tomahawk, T-bone, costela y alcatra tienen notas de sabor, el punto recomendado, de dónde sale el corte y un maridaje."],
        ["Reservar donde la gente ya está", "La página de reservas pide fecha, hora y número de personas, y abre WhatsApp con el pedido ya escrito. FOGO, un anfitrión por chat, atiende reservas, eventos de grupo, preguntas del menú y todo lo demás."],
      ],
      built: [
        "Seis idiomas, cada uno con su propia dirección web",
        "Páginas de carta, cortes, promociones de la semana, eventos y ubicación",
        "Una página por corte, con notas de sabor y maridajes",
        "Formulario de reserva que envía el pedido a WhatsApp",
        "FOGO, anfitrión por chat para reservas y consultas",
        "Semana Fogo: las promociones de la semana, con la de hoy resaltada",
        "Un gestor de contenido para que el equipo actualice la carta, las promociones y las fotos",
        "Cómo llegar al mall, a un toque desde cada página",
      ],
      caps: { a: "Los cortes, uno por uno.", b: "Reservas: tres datos y WhatsApp se abre con el pedido escrito.", phone: "En el celular, reservar siempre está a un toque." },
      pkg: ["Crecimiento", "Lo más parecido al paquete Crecimiento, con cinco idiomas más y un gestor de contenido."],
    },
  },
  {
    slug: "restobar-os",
    name: "RestoBar OS",
    url: "https://restobar-os.vercel.app/",
    shots: { phone: "resto-m", a: "resto-entrar" },
    en: {
      sector: "Restaurants · SaaS",
      title: "A restaurant system built <em>for how Bolivia works.</em>",
      plain: "A restaurant system built for how Bolivia works",
      summary: "RestoBar OS is a point-of-sale and operations system I designed and built for restaurants and bars in Bolivia. Waiters take orders on their own phones, the kitchen and bar get each ticket with a timer, and the owner follows the day from anywhere. It costs Bs 350 a month, with no contract.",
      meta: [["Product", "RestoBar OS (my own product)"], ["For", "Restaurants and bars in Bolivia"], ["What I did", "Product design, development, roles & security, landing page"], ["Language", "Spanish"]],
      brief: [
        "The big restaurant systems ask for tablets and their own hardware, two- to three-year contracts, extra fees for each module and their own card processor. None of them issue Bolivian SIN invoices.",
        "Restaurants here run on QR payments, cash and WhatsApp. Owners told me their biggest worries are deleted sales and a cash drawer that doesn't add up at the end of the night.",
      ],
      approach: [
        ["Phones, not hardware", "It runs in the browser on Android and iPhone, and each person signs in with a PIN. A restaurant only needs a thermal printer for the kitchen and one Android device for the cashier."],
        ["Roles the system enforces", "Six roles: owner, manager, cashier, waiter, bartender and kitchen. A waiter can't charge, change prices or void a sale, and the database blocks it, not just the screen. Every void needs the manager's PIN and is logged with a name and a reason."],
        ["Built around the owner", "A live summary shows sales by hour, best sellers, how customers paid, voids and the expected cash. The full close of the day goes to the owner's WhatsApp each night."],
      ],
      built: [
        "Waiter ordering with photos, options and smart add-on suggestions",
        "Kitchen and bar screens with timers, plus printed tickets",
        "Sold-out items disappear from every screen at once",
        "Cashier shifts with cash counts by bill and coin",
        "Attendance by PIN, schedules, tip splits by hours and an export for the accountant",
        "Menu editor: change a price and every phone has it instantly",
        "Owner dashboard with sales, voids and cash",
        "A sales page with pricing, a comparison table and FAQs",
      ],
      caps: { a: "Each person signs in with their own PIN and sees only what their role allows.", phone: "The sales page, built for owners on their phones." },
      pkg: ["custom", "Systems like this are custom projects, quoted separately for each business."],
    },
    es: {
      sector: "Restaurantes · SaaS",
      title: "Un sistema para restaurantes <em>pensado para Bolivia.</em>",
      plain: "Un sistema para restaurantes pensado para Bolivia",
      summary: "RestoBar OS es un sistema de punto de venta y operación que diseñé y desarrollé para restaurantes y bares de Bolivia. Los meseros toman pedidos desde su propio celular, la cocina y la barra reciben cada comanda con reloj, y el dueño sigue el día desde cualquier lugar. Cuesta Bs 350 al mes, sin contrato.",
      meta: [["Producto", "RestoBar OS (producto propio)"], ["Para", "Restaurantes y bares de Bolivia"], ["Qué hice", "Diseño de producto, desarrollo, roles y seguridad, landing page"], ["Idioma", "Español"]],
      brief: [
        "Los sistemas grandes para restaurantes piden tablets y hardware propio, contratos de dos a tres años, un cobro extra por cada módulo y su propio procesador de tarjetas. Ninguno emite factura del SIN.",
        "Aquí los restaurantes funcionan con QR, efectivo y WhatsApp. Los dueños me dijeron que lo que más les preocupa son las ventas borradas y una caja que no cuadra al final de la noche.",
      ],
      approach: [
        ["Celulares, no hardware", "Funciona en el navegador, en Android y iPhone, y cada persona entra con su PIN. El restaurante solo necesita una impresora térmica para la cocina y un equipo Android para la caja."],
        ["Roles que el sistema hace cumplir", "Seis roles: dueño, encargado, cajero, mesero, barman y cocina. Un mesero no puede cobrar, cambiar precios ni anular una venta, y lo impide la base de datos, no solo la pantalla. Cada anulación pide el PIN del encargado y queda registrada con nombre y motivo."],
        ["Pensado para el dueño", "Un resumen en vivo muestra ventas por hora, lo más vendido, cómo pagaron los clientes, anulaciones y la caja esperada. Cada noche, el cierre completo del día llega al WhatsApp del dueño."],
      ],
      built: [
        "Pedidos del mesero con fotos, opciones y sugerencias automáticas",
        "Pantallas de cocina y barra con tiempos, más comandas impresas",
        "Los agotados desaparecen de todas las pantallas al instante",
        "Turnos de caja con arqueo por billetes y monedas",
        "Asistencia con PIN, horarios, reparto de propinas por horas y exportación para el contador",
        "Editor de menú: cambias un precio y llega a todos los celulares al instante",
        "Panel del dueño con ventas, anulaciones y caja",
        "Una página de ventas con precios, tabla comparativa y preguntas frecuentes",
      ],
      caps: { a: "Cada persona entra con su PIN y ve solo lo que su rol permite.", phone: "La página de ventas, pensada para dueños en el celular." },
      pkg: ["custom", "Sistemas como este son proyectos a medida y se cotizan aparte para cada negocio."],
    },
  },
];

const UI = {
  en: {
    lang: "en", locale: "en_US", other: "es", otherLabel: "ES", otherName: "Español",
    eyebrow: "Case study", back: "All work", start: "Start a project", visit: "Visit the live site ↗",
    brief: "The brief", approach: "The approach", built: "What I built", pkgLabel: "Package",
    pricing: "See pricing", custom: "Tell me about your project", next: "Next case study",
    ctaTitle: "Want something <em>like this?</em>", ctaText: "Tell me what you're working on. I'll reply on WhatsApp with next steps and a rough plan.",
    shotAlt: (n) => `Screenshot of the ${n} website`, phoneAlt: (n) => `${n} on a phone`,
    titleSuffix: "Case study · Marvz Studio",
  },
  es: {
    lang: "es", locale: "es_BO", other: "en", otherLabel: "EN", otherName: "English",
    eyebrow: "Caso de estudio", back: "Todos los proyectos", start: "Empezar un proyecto", visit: "Ver el sitio en línea ↗",
    brief: "El encargo", approach: "El enfoque", built: "Qué construí", pkgLabel: "Paquete",
    pricing: "Ver precios", custom: "Cuéntame tu proyecto", next: "Siguiente caso",
    ctaTitle: "¿Quieres algo <em>así?</em>", ctaText: "Cuéntame en qué estás trabajando. Te respondo por WhatsApp con los siguientes pasos y un plan inicial.",
    shotAlt: (n) => `Captura del sitio web de ${n}`, phoneAlt: (n) => `${n} en un celular`,
    titleSuffix: "Caso de estudio · Marvz Studio",
  },
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const pagePath = (slug, lang) => `/work/${slug}/${lang === "es" ? "es/" : ""}`;
const home = (lang) => (lang === "es" ? "/?lang=es" : "/");

// Analytics loader, shared with index.html: no-op on localhost.
const ANALYTICS = `<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};if(!/^(localhost|127\\.|\\[::1\\])/.test(location.hostname)){var s=document.createElement("script");s.defer=true;s.src="/_vercel/insights/script.js";document.head.appendChild(s)}</script>`;

function page(c, lang, next) {
  const u = UI[lang], d = c[lang], nd = next[lang];
  const self = SITE + pagePath(c.slug, lang);
  const desc = d.summary.split(". ").slice(0, 2).join(". ").replace(/\.?$/, ".");
  const img = (n, alt, w = 1440, h = 900, cls = "") => `<img src="/assets/case/${n}.webp" ${w > 1000 ? `srcset="/assets/case/${n}-sm.webp 800w, /assets/case/${n}.webp 1440w" sizes="(max-width: 860px) 100vw, 70vw"` : ""} width="${w}" height="${h}" alt="${esc(alt)}" loading="lazy"${cls ? ` class="${cls}"` : ""}>`;
  const pkg = d.pkg[0] === "custom"
    ? `<div class="pkgnote"><p>${d.pkg[1]}</p><a class="btn btn--line" href="/#start" data-track="Case Start Project" data-track-project="${c.slug}">${u.custom}</a></div>`
    : `<div class="pkgnote"><p><span class="mono">${u.pkgLabel} · ${d.pkg[0]}</span>${d.pkg[1]}</p><a class="btn btn--line" href="${home(lang)}#pricing" data-track="Case Pricing" data-track-project="${c.slug}">${u.pricing}</a></div>`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: d.plain,
    description: desc,
    inLanguage: lang,
    image: `${SITE}/assets/case/${c.slug}-og.jpg`,
    url: self,
    author: { "@type": "Person", name: "Marvz", url: `${SITE}/` },
    publisher: { "@id": `${SITE}/#studio` },
    about: { "@type": "CreativeWork", name: c.name, url: c.url },
  };
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(c.name)} · ${u.titleSuffix}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#181616">
<link rel="canonical" href="${self}">
<link rel="alternate" hreflang="en" href="${SITE + pagePath(c.slug, "en")}">
<link rel="alternate" hreflang="es" href="${SITE + pagePath(c.slug, "es")}">
<link rel="alternate" hreflang="x-default" href="${SITE + pagePath(c.slug, "en")}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Marvz Studio">
<meta property="og:locale" content="${u.locale}">
<meta property="og:url" content="${self}">
<meta property="og:title" content="${esc(c.name)} · ${esc(d.plain)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/case/${c.slug}-og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Roboto+Mono:wght@500&display=swap">
<link rel="stylesheet" href="/work/case.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
${lang === "en" ? `<script>try{if(localStorage.getItem("lang")==="es"&&!/[?&]lang=en/.test(location.search))location.replace("${pagePath(c.slug, "es")}")}catch(e){}</script>\n` : ""}${ANALYTICS}
</head>
<body>
<header class="top">
  <a class="brand" href="${home(lang)}">Marvz <em>Studio</em></a>
  <nav class="top__nav mono">
    <a class="link hide-sm" href="${home(lang)}">← ${u.back}</a>
    <a class="lang" href="${pagePath(c.slug, u.other)}${u.other === "en" ? "?lang=en" : ""}" hreflang="${u.other}" lang="${u.other}" aria-label="${u.otherName}" data-setlang="${u.other}">${u.otherLabel}</a>
    <a class="btn btn--red" href="/#start" data-track="Case Start Project" data-track-project="${c.slug}">${u.start}</a>
  </nav>
</header>
<main class="case">
  <section class="case__head">
    <p class="mono case__eyebrow"><span class="dot"></span>${u.eyebrow} · ${d.sector}</p>
    <h1 class="case__title">${d.title}</h1>
    <div class="case__intro">
      <p class="case__lead">${d.summary}</p>
      <dl class="case__meta mono">${d.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
    </div>
    <a class="btn btn--cream case__visit" href="${c.url}" target="_blank" rel="noopener" data-track="Case Live Site" data-track-project="${c.slug}">${u.visit}</a>
  </section>

  <figure class="case__hero">
    <img src="/assets/work/${c.slug}.webp" srcset="/assets/work/${c.slug}-sm.webp 800w, /assets/work/${c.slug}.webp 1440w" sizes="(max-width: 1240px) 100vw, 1200px" width="1440" height="900" alt="${esc(u.shotAlt(c.name))}" fetchpriority="high">
  </figure>

  <section class="case__block">
    <h2 class="mono">01 · ${u.brief}</h2>
    <div class="case__text">${d.brief.map((p) => `<p>${p}</p>`).join("")}</div>
  </section>

  <section class="case__block">
    <h2 class="mono">02 · ${u.approach}</h2>
    <ol class="case__steps">${d.approach.map(([h, p]) => `<li><strong>${h}</strong>${p}</li>`).join("")}</ol>
  </section>

  <section class="case__gallery">
    <figure class="case__wide">${img(c.shots.a, d.caps.a)}<figcaption>${d.caps.a}</figcaption></figure>
    <figure class="case__phone">${img(c.shots.phone, u.phoneAlt(c.name), 360, 800, "phone-shot")}<figcaption>${d.caps.phone}</figcaption></figure>
    ${c.shots.b ? `<figure class="case__wide case__wide--full">${img(c.shots.b, d.caps.b)}<figcaption>${d.caps.b}</figcaption></figure>` : ""}
  </section>

  <section class="case__block">
    <h2 class="mono">03 · ${u.built}</h2>
    <ul class="case__built">${d.built.map((x) => `<li>${x}</li>`).join("")}</ul>
  </section>

  ${pkg}

  <a class="case__next" href="${pagePath(next.slug, lang)}">
    <span class="mono">${u.next} →</span>
    <strong>${next.name}</strong>
    <span>${nd.plain}</span>
    <img src="/assets/work/${next.slug}-sm.webp" width="800" height="500" alt="" loading="lazy">
  </a>

  <section class="case__cta">
    <div>
      <h2>${u.ctaTitle}</h2>
      <p>${u.ctaText}</p>
    </div>
    <a class="btn btn--red" href="/#start" data-track="Case Start Project" data-track-project="${c.slug}">${u.start}</a>
  </section>
</main>
<footer class="case__foot mono">
  <a href="${home(lang)}">← ${u.back}</a>
  <span>Marvz Studio · Santa Cruz, Bolivia</span>
</footer>
<script>
document.addEventListener("click", function (e) {
  var l = e.target.closest("[data-setlang]");
  if (l) try { localStorage.setItem("lang", l.dataset.setlang); } catch (_) {}
  var t = e.target.closest("[data-track]");
  if (t) window.va("event", { name: t.dataset.track, data: { project: t.dataset.trackProject } });
});
</script>
</body>
</html>
`;
}

if (require.main === module) for (const [i, c] of CASES.entries()) {
  const next = CASES[(i + 1) % CASES.length];
  for (const lang of ["en", "es"]) {
    const out = path.join(ROOT, "work", c.slug, lang === "es" ? "es" : "", "index.html");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, page(c, lang, next));
  }
}
if (require.main === module) console.log(`Wrote ${CASES.length * 2} case-study pages: ${CASES.map((c) => c.slug).join(", ")}`);
module.exports = { CASES };
