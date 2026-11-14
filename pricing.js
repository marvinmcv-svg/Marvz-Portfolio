/* ==========================================================================
   Marvz Studio · Pricing overlay
   A sales page: promise, proof, three packages, how it works, build your own,
   monthly care, a live quote that opens WhatsApp, and an FAQ.
   All prices are in bolivianos (Bs). Edit prices and text below.
   Loaded after app.js and uses its globals: lang, CONFIG, $, $$, esc, track, reduced.
   ========================================================================== */

const PRICING = {
  fx: 11.65, // Bs per US$, used only for the US$ view. Check it every few months.
  base: 3500, // Base site: up to 5 pages, built for phones, fast
};

// "popular" is the tab the list opens on; it shows the add-ons marked popular.
const CATS = {
  popular: { en: "Popular", es: "Populares" },
  all: { en: "All", es: "Todo" },
  sales: { en: "Sell more", es: "Vender más" },
  reach: { en: "Get found", es: "Que te encuentren" },
  content: { en: "Content & brand", es: "Contenido y marca" },
  tech: { en: "AI & apps", es: "IA y apps" },
  ops: { en: "Domain & email", es: "Dominio y correo" },
};

// [name, one line that sells it]. price = one-time Bs, monthly = Bs a month, qty = can be added more than once.
const ADDONS = [
  { id: "whatsapp", cat: "sales", price: 900, popular: true,
    en: ["WhatsApp orders & bookings", "Customers send their order or booking to your WhatsApp, already written out."],
    es: ["Pedidos y reservas por WhatsApp", "Tus clientes te mandan el pedido o la reserva por WhatsApp, ya escrito."] },
  { id: "qr", cat: "sales", price: 1900, popular: true,
    en: ["QR & card payments", "Get paid online with QR Simple, cards and wallets. Gateway fees apply."],
    es: ["Cobros con QR y tarjeta", "Cobra online con QR Simple, tarjeta y billeteras. Aplican comisiones de la pasarela."] },
  { id: "shop", cat: "sales", price: 3500, popular: true,
    en: ["Online store", "Up to 50 products with a cart. Customers check out by WhatsApp or QR."],
    es: ["Tienda online", "Hasta 50 productos con carrito. El cliente compra por WhatsApp o QR."] },
  { id: "booking", cat: "sales", price: 1800, popular: true,
    en: ["Online booking", "Customers pick a time, you get the booking, and they get a reminder."],
    es: ["Reservas online", "El cliente elige el horario, tú recibes la reserva y él recibe un recordatorio."] },
  { id: "lang", cat: "reach", price: 700, qty: true,
    en: ["Extra language", "English, Portuguese and more, each fully translated and ready for Google."],
    es: ["Idioma adicional", "Inglés, portugués y más, cada uno traducido por completo y listo para Google."] },
  { id: "seo", cat: "reach", price: 1100, popular: true,
    en: ["Local SEO + Google Maps", "Show up when people nearby search for what you sell."],
    es: ["SEO local + Google Maps", "Aparece cuando la gente cerca de ti busca lo que vendes."] },
  { id: "seoMo", cat: "reach", price: 0, monthly: 900,
    en: ["Monthly SEO", "Two articles a month, ongoing tuning and a ranking report."],
    es: ["SEO mensual", "Dos artículos al mes, ajustes continuos y un reporte de posiciones."] },
  { id: "analytics", cat: "reach", price: 450,
    en: ["Analytics + Meta Pixel", "See where visitors come from and which ads bring you chats."],
    es: ["Analítica + Píxel de Meta", "Ve de dónde llegan tus visitas y qué anuncios te traen chats."] },
  { id: "pages", cat: "content", price: 350, qty: true,
    en: ["Extra page", "Add pages beyond the five in the base site."],
    es: ["Página extra", "Suma páginas a las cinco del sitio base."] },
  { id: "copy", cat: "content", price: 1200,
    en: ["Professional copywriting", "Five pages of copy written to sell and ready for Google. You don't write a word."],
    es: ["Redacción profesional", "Cinco páginas de textos que venden, listos para Google. Tú no escribes nada."] },
  { id: "blog", cat: "content", price: 800,
    en: ["Blog / news", "Post news and articles yourself, and give Google more to find."],
    es: ["Blog / noticias", "Publica noticias y artículos tú mismo, y dale a Google más para encontrar."] },
  { id: "story", cat: "content", price: 2400,
    en: ["Scroll storytelling & motion", "Cinematic scrolling and animation, like Haras La Alhambra."],
    es: ["Storytelling y animación", "Scroll cinematográfico y animaciones, como en Haras La Alhambra."] },
  { id: "brand", cat: "content", price: 2800,
    en: ["Brand identity", "Logo, colors, fonts and a short brand guide."],
    es: ["Identidad de marca", "Logo, colores, tipografías y un mini manual de marca."] },
  { id: "video", cat: "content", price: 2500,
    en: ["Hero video", "A half-day shoot and a 30–60 second film for your homepage."],
    es: ["Video de portada", "Medio día de rodaje y un video de 30–60 segundos para tu portada."] },
  { id: "ai", cat: "tech", price: 2900, monthly: 290, popular: true,
    en: ["AI assistant", "Answers questions about prices, hours and location 24/7, then hands off to WhatsApp."],
    es: ["Asistente con IA", "Responde precios, horarios y ubicación 24/7, y pasa la conversación a WhatsApp."] },
  { id: "wabot", cat: "tech", price: 3900, monthly: 550,
    en: ["AI WhatsApp bot", "Replies to your WhatsApp chats on the official API. Meta's message fees apply."],
    es: ["Bot de WhatsApp con IA", "Responde tus chats de WhatsApp en la API oficial. Aplican las tarifas de Meta por mensaje."] },
  { id: "pwa", cat: "tech", price: 1600,
    en: ["Installable app", "Customers add your site to their home screen like an app, with notifications."],
    es: ["App instalable", "Tus clientes agregan tu sitio a su pantalla de inicio como una app, con notificaciones."] },
  { id: "cms", cat: "tech", price: 1500,
    en: ["Edit-it-yourself panel", "Change prices, menus, photos and text without calling anyone."],
    es: ["Panel autoadministrable", "Cambia precios, menú, fotos y textos sin llamar a nadie."] },
  { id: "domain", cat: "ops", price: 950,
    en: ["Domain + business email", "Your own .com or .bo, SSL and @yourbusiness email. Renews yearly."],
    es: ["Dominio + correos", "Tu propio .com o .bo, SSL y correos @tuempresa. Se renueva cada año."] },
];

const CARE = [
  { id: "none", price: 0, en: ["No plan", "Changes billed at Bs 150 an hour"], es: ["Sin plan", "Cambios a Bs 150 la hora"] },
  { id: "basic", price: 350, en: ["Basic Care", "Hosting, backups, security updates and 1 hour of changes a month"], es: ["Cuidado Básico", "Hosting, backups, seguridad y 1 hora de cambios al mes"] },
  { id: "pro", price: 690, en: ["Pro Care", "Everything in Basic, plus 3 hours of changes, a monthly report and WhatsApp support"], es: ["Cuidado Pro", "Todo lo de Básico, más 3 horas de cambios, reporte mensual y soporte por WhatsApp"] },
  { id: "partner", price: 1290, en: ["Digital Partner", "6 hours a month, ongoing improvements and a new campaign page every month"], es: ["Socio Digital", "6 horas al mes, mejoras continuas y una página de campaña nueva cada mes"] },
];

// items: add-on id → quantity included (used for the quote and the "value separately" price).
// en/es: [name, promise, best for, highlights[]]. caseSlug links a case study built at this level.
const PACKAGES = [
  { id: "presence", price: 4900, careId: "basic", careMonths: 1, aiMonths: 0, plan: 2, weeks: "2–3",
    items: { whatsapp: 1, seo: 1, analytics: 1 },
    en: ["Presence", "Look professional. Get messages.", "New businesses and anyone without a real website yet.",
      ["A fast site that looks great on any phone", "Customers order or book straight on WhatsApp", "Show up on Google and Google Maps", "See which visitors turn into chats"]],
    es: ["Presencia", "Verte profesional. Recibir mensajes.", "Negocios nuevos y quien todavía no tiene una web de verdad.",
      ["Un sitio rápido que se ve increíble en cualquier celular", "Tus clientes piden o reservan directo por WhatsApp", "Aparece en Google y en Google Maps", "Mira qué visitas se convierten en chats"]] },
  { id: "growth", price: 9900, careId: "pro", careMonths: 3, aiMonths: 0, plan: 2, weeks: "4–5", featured: true, caseSlug: "fogo-de-chao",
    items: { pages: 3, lang: 1, cms: 1, whatsapp: 1, booking: 1, seo: 1, analytics: 1, copy: 1 },
    en: ["Growth", "Sell and take bookings online.", "Restaurants, clinics, salons and growing businesses.",
      ["Everything in Presence", "Online booking with reminders", "Update prices and menus yourself", "A second language and 3 extra pages", "Copy written for you, ready for Google"]],
    es: ["Crecimiento", "Vende y recibe reservas online.", "Restaurantes, clínicas, salones y negocios en crecimiento.",
      ["Todo lo de Presencia", "Reservas online con recordatorios", "Cambia precios y menú tú mismo", "Un segundo idioma y 3 páginas extra", "Textos escritos por mí, listos para Google"]] },
  { id: "flagship", price: 21900, careId: "pro", careMonths: 6, aiMonths: 3, plan: 3, weeks: "7–9", caseSlug: "haras-la-alhambra",
    items: { pages: 5, lang: 2, cms: 1, shop: 1, qr: 1, whatsapp: 1, story: 1, ai: 1, seo: 1, analytics: 1, copy: 1, brand: 1, pwa: 1 },
    en: ["Flagship", "Become the brand people talk about.", "Leading brands that want to stand out and sell online.",
      ["A cinematic, story-driven site", "Online store with QR and card payments", "An AI assistant that answers 24/7", "A full brand identity", "Three languages and an installable app"]],
    es: ["Insignia", "Sé la marca de la que todos hablan.", "Marcas líderes que quieren destacar y vender online.",
      ["Un sitio cinematográfico que cuenta tu historia", "Tienda online con cobros por QR y tarjeta", "Un asistente con IA que responde 24/7", "Identidad de marca completa", "Tres idiomas y una app instalable"]] },
];

// Clients whose live work is in the portfolio.
const CLIENTS = ["Ventura Mall", "Fogo de Chão", "Hoteles Rosario", "ISOTEK", "Helibol", "Santa Cruz Cooperative School", "SPC Impresores", "Haras La Alhambra", "Sarumadi", "Haciendas Urucú", "D'Yes Grill", "AMÉ Coffee", "Don Corte Fino", "ACS Calvert"];

const PT = {
  en: {
    eyebrow: "Pricing",
    title: "A website that pays for itself. <em>Then keeps paying.</em>",
    lead: "Most websites are expensive brochures. Mine do one job: turn strangers into WhatsApp messages, and messages into money. One fixed price in bolivianos. Half now, the other half when it's live.",
    ctaPkgs: "Show me the packages", ctaBuild: "Run my numbers",
    stats: (n) => [[String(n), "live projects"], ["2–9", "weeks to launch"], ["6", "languages on one site"], ["1", "person, start to finish"]],
    trusted: "Trusted by",
    pkgEyebrow: "Packages", pkgTitle: "Three ways to win. <em>Pick one.</em>",
    pkgSub: "Every package costs less than its parts. Buy the same things one by one and you pay up to 31% more.",
    bestFor: "Best for", featured: "Recommended", save: (p) => `Save ${p}%`, valueWas: "if bought separately",
    pay2: (v) => `Or 2 payments of ${v}`, pay3: (v) => `Or 3 payments, starting at ${v}`, weeks: (w) => `Live in ${w} weeks`,
    showAll: (n) => `Show all ${n} add-ons`,
    careIncl: (n, c) => `${n} ${n === 1 ? "month" : "months"} of ${c} included`, aiIncl: (n) => `${n} months of AI usage included`, monthsIncl: (n) => `${n} ${n === 1 ? "month" : "months"} included`,
    seeAll: (n) => `See all ${n} things included`, example: "See one I built", choose: (n) => `Choose ${n}`, chosen: "Added to your quote ✓",

    calcEyebrow: "Run the numbers", calcTitle: "What's one more customer <em>worth to you?</em>",
    calcSub: "Move the sliders. Use honest numbers. Watch how fast a website pays for itself.",
    calcTicket: "Your average sale", calcCust: "Extra customers a month from your website", calcHrs: "Hours a week answering the same questions",
    calcRate: "What one hour of your time is worth", calcPkg: "Package", calcMine: "My quote",
    calcSales: "Extra sales a month", calcTime: "Your time back a month", calcHours: (h) => `${h} hours`, calcTotal: "Total value a month",
    calcPayback: "Pays for itself in", calcDays: (n) => `${n} ${n === 1 ? "day" : "days"}`, calcWeeks: (n) => `${n} weeks`, calcMonths: (n) => `${n} months`,
    calcYear: (x, net) => `First year: <b>${x}×</b> your money back. That's <b>${net}</b> in your pocket after paying for the site.`,
    calcYearLow: "At these numbers it takes more than a year. Try Presence, or tell me about your business and I'll find a smaller start.",
    calcZero: "Move a slider to see your number.",
    calcPunch: "If the math says yes, the only question left is how many more months you wait.",
    calcCta: "Lock in this package", calcNote: "An estimate from your own numbers, not a promise of results.",

    howEyebrow: "How it works", howTitle: "From first message <em>to launch day.</em>",
    how: [
      ["Tell me what you need", "Pick a package or build your own and send it on WhatsApp. Two minutes, tops."],
      ["Get a fixed price", "I reply with a plan and one price in bolivianos. No hourly billing. No surprise invoices."],
      ["Pay half, we start", "50% to start (40% on Flagship). You pay the rest when your site is live, not before."],
      ["Go live, then grow", "Live in 2 to 9 weeks, with months of care included so it stays fast, safe and selling."],
    ],
    buildEyebrow: "Build your own", buildTitle: "Only want what you need? <em>Build it.</em>",
    buildSub: (b) => `Start from a package or from the base site (up to 5 pages, built for phones, ${b}). Add only what makes you money.`,
    careTitle: "Monthly care", careSub: "Hosting, updates and support, so your site stays fast, safe and selling. Every package includes months of care for free.",
    add: "Add", added: "Added", included: "Included", each: "each", once: "one-time", mo: "/mo",
    quote: "Your quote", base: "Base site", baseFull: "Base site (up to 5 pages, built for phones)", pkgLine: (n) => `${n} package`,
    upTo: (n) => `${n}× `, empty: "Just the base site so far. Pick a package or add what you need.",
    oneTime: "One-time", monthly: "Monthly", fromMonth: (n) => `from month ${n}`, rushLabel: "Rush delivery (+25%)", rush: "Rush delivery",
    payment: "Payment", plan2: "50% upfront / 50% at launch", plan3: "40% / 30% / 30%", total: "Project total", deposit: "Deposit to start",
    send: "Send my quote on WhatsApp", copy: "Copy quote", copied: "Quote copied", pkgLoaded: "Package added to your quote", remove: "Remove",
    custom: "<strong>Need a custom system?</strong> Apps, booking engines and systems like RestoBar OS are quoted separately.", customBtn: "Tell me about it",
    promises: [
      ["Half now. Half when it's live.", "You pay the second half when you see your site working. Not before."],
      ["One fixed price", "In bolivianos, with no hourly billing. Your quote holds for 15 days."],
      ["You talk to the builder", "The person on the call designs and codes your site. No middlemen, no telephone game."],
      ["Built to sell on phones", "Fast on mobile data, wired to WhatsApp, ready for Google."],
    ],
    faqEyebrow: "Questions", faqTitle: "Good questions, <em>straight answers.</em>",
    faq: [
      ["Isn't a website expensive?", "Run the calculator above with your own numbers. If a few extra customers a month pay it back in weeks, the expensive thing is not having one."],
      ["Why not just use Instagram?", "Instagram is rented land. Your website is yours: Google finds it, it answers at 3 a.m., and every visitor lands on your offer instead of a competitor's ad."],
      ["How long does it take?", "Presence: 2–3 weeks. Growth: 4–5 weeks. Flagship: 7–9 weeks. Need it sooner? Rush delivery is 25% extra."],
      ["What do I need to bring?", "Your logo, photos and a few lines about your business. No logo yet? Add Brand identity. No time to write? Add Professional copywriting. It's already in Growth and Flagship."],
      ["Is hosting included?", "Yes, for the months of care that come with your package. After that, care starts at Bs 350 a month, or skip it and pay Bs 150 an hour for changes."],
      ["Can I update the site myself?", "Yes, with the edit-it-yourself panel. It's included in Growth and Flagship, and costs Bs 1,500 on its own."],
      ["Do prices include VAT (factura)?", "No. Prices don't include VAT, payment-gateway fees or Meta's WhatsApp message fees."],
      ["What if I need something that isn't listed?", "Systems, apps and special integrations are quoted separately. Tell me what you need and I'll put together a plan."],
    ],
    finalTitle: "Still deciding? <em>Let me make it easy.</em>",
    finalText: "Send me one message. I'll tell you straight which package makes sense for your business, even if it's the smallest one. Every month without a site that sells is customers you never hear from.",
    finalBtn: "Help me choose on WhatsApp", finalMsg: "Hi Marvz! 👋 Can you help me choose a package for my business?",
    fine: "Prices are in bolivianos. They don't include VAT (factura), payment-gateway fees or Meta's WhatsApp message fees. US$ amounts are approximate and follow the exchange rate.",
    currency: "Currency", view: "View",
    waHead: "Hi Marvz! 👋", waWant: "*I'd like a quote for this project:*", waUsd: "approx.",
  },
  es: {
    eyebrow: "Precios",
    title: "Una web que se paga sola. <em>Y sigue pagando.</em>",
    lead: "La mayoría de las webs son folletos caros. Las mías hacen un solo trabajo: convertir desconocidos en mensajes de WhatsApp, y mensajes en plata. Un precio fijo en bolivianos. La mitad ahora, la otra mitad cuando está en línea.",
    ctaPkgs: "Ver los paquetes", ctaBuild: "Calcular mis números",
    stats: (n) => [[String(n), "proyectos en línea"], ["2–9", "semanas al lanzamiento"], ["6", "idiomas en un solo sitio"], ["1", "persona, de principio a fin"]],
    trusted: "Confían en mí",
    pkgEyebrow: "Paquetes", pkgTitle: "Tres formas de ganar. <em>Elige una.</em>",
    pkgSub: "Cada paquete cuesta menos que sus partes. Si compras lo mismo por separado, pagas hasta 31% más.",
    bestFor: "Ideal para", featured: "Recomendado", save: (p) => `Ahorras ${p}%`, valueWas: "comprando por separado",
    pay2: (v) => `O 2 pagos de ${v}`, pay3: (v) => `O 3 pagos, desde ${v}`, weeks: (w) => `En línea en ${w} semanas`,
    showAll: (n) => `Ver los ${n} add-ons`,
    careIncl: (n, c) => `${n} ${n === 1 ? "mes" : "meses"} de ${c} incluido${n === 1 ? "" : "s"}`, aiIncl: (n) => `${n} meses de uso de IA incluidos`, monthsIncl: (n) => `${n} ${n === 1 ? "mes incluido" : "meses incluidos"}`,
    seeAll: (n) => `Ver las ${n} cosas incluidas`, example: "Mira uno que hice", choose: (n) => `Elegir ${n}`, chosen: "En tu cotización ✓",

    calcEyebrow: "Haz los números", calcTitle: "¿Cuánto vale para ti <em>un cliente más?</em>",
    calcSub: "Mueve los controles. Usa números honestos. Mira qué tan rápido una web se paga sola.",
    calcTicket: "Tu venta promedio", calcCust: "Clientes extra al mes gracias a tu web", calcHrs: "Horas a la semana respondiendo lo mismo",
    calcRate: "Cuánto vale una hora de tu tiempo", calcPkg: "Paquete", calcMine: "Mi cotización",
    calcSales: "Ventas extra al mes", calcTime: "Tiempo que recuperas al mes", calcHours: (h) => `${h} horas`, calcTotal: "Valor total al mes",
    calcPayback: "Se paga sola en", calcDays: (n) => `${n} ${n === 1 ? "día" : "días"}`, calcWeeks: (n) => `${n} semanas`, calcMonths: (n) => `${n} meses`,
    calcYear: (x, net) => `Primer año: recuperas <b>${x}×</b> tu inversión. Son <b>${net}</b> en tu bolsillo después de pagar la web.`,
    calcYearLow: "Con estos números tarda más de un año. Prueba Presencia, o cuéntame de tu negocio y busco un comienzo más chico.",
    calcZero: "Mueve un control para ver tu número.",
    calcPunch: "Si los números dicen que sí, la única pregunta es cuántos meses más vas a esperar.",
    calcCta: "Quiero este paquete", calcNote: "Una estimación con tus propios números, no una promesa de resultados.",

    howEyebrow: "Cómo funciona", howTitle: "Del primer mensaje <em>al lanzamiento.</em>",
    how: [
      ["Cuéntame qué necesitas", "Elige un paquete o arma el tuyo y mándalo por WhatsApp. Dos minutos, máximo."],
      ["Recibe un precio fijo", "Te respondo con un plan y un solo precio en bolivianos. Sin cobro por hora. Sin facturas sorpresa."],
      ["Pagas la mitad y empezamos", "50% para empezar (40% en Insignia). El resto lo pagas cuando tu web está en línea, no antes."],
      ["Lanzas y creces", "En línea en 2 a 9 semanas, con meses de cuidado incluidos para que siga rápida, segura y vendiendo."],
    ],
    buildEyebrow: "Arma el tuyo", buildTitle: "¿Solo quieres lo que necesitas? <em>Ármalo.</em>",
    buildSub: (b) => `Parte de un paquete o del sitio base (hasta 5 páginas, pensado para el celular, ${b}). Añade solo lo que te hace ganar plata.`,
    careTitle: "Cuidado mensual", careSub: "Hosting, actualizaciones y soporte para que tu web siga rápida, segura y vendiendo. Todo paquete incluye meses de cuidado gratis.",
    add: "Añadir", added: "Añadido", included: "Incluido", each: "c/u", once: "pago único", mo: "/mes",
    quote: "Tu cotización", base: "Sitio base", baseFull: "Sitio base (hasta 5 páginas, pensado para el celular)", pkgLine: (n) => `Paquete ${n}`,
    upTo: (n) => `${n}× `, empty: "Por ahora solo el sitio base. Elige un paquete o añade lo que necesites.",
    oneTime: "Pago único", monthly: "Mensual", fromMonth: (n) => `desde el mes ${n}`, rushLabel: "Entrega express (+25%)", rush: "Entrega express",
    payment: "Forma de pago", plan2: "50% anticipo / 50% al publicar", plan3: "40% / 30% / 30%", total: "Total del proyecto", deposit: "Anticipo para empezar",
    send: "Enviar mi cotización por WhatsApp", copy: "Copiar cotización", copied: "Cotización copiada", pkgLoaded: "Paquete añadido a tu cotización", remove: "Quitar",
    custom: "<strong>¿Necesitas un sistema a medida?</strong> Apps, motores de reservas y sistemas como RestoBar OS se cotizan aparte.", customBtn: "Cuéntame",
    promises: [
      ["La mitad ahora. La otra al publicar.", "Pagas la segunda mitad cuando ves tu web funcionando. No antes."],
      ["Un precio fijo", "En bolivianos y sin cobro por hora. Tu cotización se mantiene 15 días."],
      ["Hablas con quien la construye", "La persona de la llamada diseña y programa tu web. Sin intermediarios, sin teléfono descompuesto."],
      ["Hecha para vender en el celular", "Rápida con datos móviles, conectada a WhatsApp y lista para Google."],
    ],
    faqEyebrow: "Preguntas", faqTitle: "Buenas preguntas, <em>respuestas claras.</em>",
    faq: [
      ["¿Una web no es cara?", "Usa la calculadora de arriba con tus propios números. Si unos pocos clientes extra al mes la pagan en semanas, lo caro es no tenerla."],
      ["¿Por qué no solo Instagram?", "Instagram es un terreno alquilado. Tu web es tuya: Google la encuentra, responde a las 3 a.m. y cada visita llega a tu oferta, no al anuncio de tu competencia."],
      ["¿Cuánto tarda?", "Presencia: 2–3 semanas. Crecimiento: 4–5 semanas. Insignia: 7–9 semanas. ¿Lo necesitas antes? La entrega express cuesta 25% más."],
      ["¿Qué necesito traer?", "Tu logo, fotos y unas líneas sobre tu negocio. ¿Aún no tienes logo? Añade Identidad de marca. ¿No tienes tiempo para escribir? Añade Redacción profesional, que ya viene en Crecimiento e Insignia."],
      ["¿El hosting está incluido?", "Sí, durante los meses de cuidado que trae tu paquete. Después, el cuidado empieza en Bs 350 al mes, o puedes no tener plan y pagar Bs 150 la hora por cambios."],
      ["¿Puedo actualizar la web yo mismo?", "Sí, con el panel autoadministrable. Viene en Crecimiento e Insignia, y cuesta Bs 1.500 por separado."],
      ["¿Los precios incluyen IVA (factura)?", "No. Los precios no incluyen IVA, comisiones de pasarelas de pago ni las tarifas de Meta por mensaje de WhatsApp."],
      ["¿Y si necesito algo que no está en la lista?", "Sistemas, apps e integraciones especiales se cotizan aparte. Cuéntame qué necesitas y armo un plan."],
    ],
    finalTitle: "¿Todavía lo piensas? <em>Te lo hago fácil.</em>",
    finalText: "Mándame un mensaje. Te digo directo qué paquete tiene sentido para tu negocio, aunque sea el más chico. Cada mes sin una web que vende son clientes que nunca te escriben.",
    finalBtn: "Ayúdame a elegir por WhatsApp", finalMsg: "¡Hola Marvz! 👋 ¿Me ayudas a elegir un paquete para mi negocio?",
    fine: "Precios en bolivianos. No incluyen IVA (factura), comisiones de pasarelas de pago ni las tarifas de Meta por mensaje de WhatsApp. Los montos en US$ son aproximados y siguen el tipo de cambio.",
    currency: "Moneda", view: "Ver",
    waHead: "¡Hola Marvz! 👋", waWant: "*Quiero cotizar este proyecto:*", waUsd: "aprox.",
  },
};

/* ========================================================================== */

const P = { cur: "BOB", cat: "popular", sel: {}, pkg: null, care: "none", rush: false, plan: 2 };
// Savings calculator: average sale (Bs), extra customers a month, hours a week on repeat questions, Bs per hour, package.
const C = { ticket: 150, cust: 10, hrs: 5, rate: 50, pkg: "growth", used: false };
const CALC_FIELDS = [
  ["ticket", "calcTicket", 20, 3000, 10, "money"],
  ["cust", "calcCust", 0, 100, 1, "n"],
  ["hrs", "calcHrs", 0, 30, 1, "n"],
  ["rate", "calcRate", 0, 300, 10, "money"],
];
const pt = (k) => PT[lang][k];
const pAddon = (id) => ADDONS.find((a) => a.id === id);
const pCare = (id) => CARE.find((c) => c.id === id);
const pPkg = (id) => PACKAGES.find((b) => b.id === id);
const WA_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>';

function money(bs, cur = P.cur) {
  if (cur === "USD") return "US$ " + Math.round(bs / PRICING.fx).toLocaleString("en-US");
  return "Bs " + Math.round(bs).toLocaleString(lang === "es" ? "es-BO" : "en-US");
}
const otherCur = () => (P.cur === "BOB" ? "USD" : "BOB");
const wa = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

function packageValue(b) {
  let v = PRICING.base;
  for (const [id, q] of Object.entries(b.items)) v += pAddon(id).price * q;
  v += pCare(b.careId).price * b.careMonths;
  v += (pAddon("ai").monthly || 0) * b.aiMonths;
  return v;
}

/* ---------- Page shell (rebuilt when the language changes) ---------- */
function renderShell() {
  const head = (id, eyebrow, title, sub = "") => `
    <header class="psec__head reveal"${id ? ` id="${id}"` : ""}>
      <p class="mono psec__eyebrow"><span class="dot"></span>${eyebrow}</p>
      <h3 class="psec__title">${title}</h3>
      ${sub ? `<p class="psec__sub">${sub}</p>` : ""}
    </header>`;
  $("#pricingRoot").innerHTML = `
    <section class="phero">
      <p class="mono psec__eyebrow"><span class="dot"></span>${pt("eyebrow")}</p>
      <h2 class="phero__title">${pt("title")}</h2>
      <p class="phero__lead">${pt("lead")}</p>
      <div class="phero__ctas">
        <button class="btn btn--red" type="button" data-pgo="pkgsHead">${pt("ctaPkgs")} ↓</button>
        <button class="btn btn--line" type="button" data-pgo="calcHead">${pt("ctaBuild")}</button>
      </div>
      <dl class="pstats">${pt("stats")(PROJECTS.length).map(([n, l]) => `<div><dt>${n}</dt><dd class="mono">${l}</dd></div>`).join("")}</dl>
      <div class="ptrust">
        <p class="mono">${pt("trusted")}</p>
        <div class="ptrust__track" aria-hidden="true"><div>${CLIENTS.concat(CLIENTS).map((c) => `<span>${c}</span>`).join("<i>✦</i>")}</div></div>
        <p class="sr-only">${CLIENTS.join(", ")}</p>
      </div>
    </section>

    ${head("pkgsHead", pt("pkgEyebrow"), pt("pkgTitle"), pt("pkgSub"))}
    <div class="pkgs__bar">
      <div class="lang pricing__cur" role="group" aria-label="${pt("currency")}">
        <button type="button" data-pcur="BOB" aria-pressed="true">Bs</button>
        <button type="button" data-pcur="USD" aria-pressed="false">US$</button>
      </div>
    </div>
    <div class="pkgs" id="pkgs"></div>

    ${head("calcHead", pt("calcEyebrow"), pt("calcTitle"), pt("calcSub"))}
    <section class="calc reveal" id="calc" aria-labelledby="calcHead">
      <div class="calc__inputs">
        ${CALC_FIELDS.map(([k, label, min, max, step]) => `
        <label class="calc__field">
          <span class="calc__label">${pt(label)}</span>
          <output class="calc__val" id="cv-${k}"></output>
          <input type="range" min="${min}" max="${max}" step="${step}" value="${C[k]}" data-calc="${k}" aria-label="${pt(label)}">
        </label>`).join("")}
        <div class="calc__field">
          <span class="calc__label">${pt("calcPkg")}</span>
          <div class="pills calc__pkgs" role="group" aria-label="${pt("calcPkg")}">
            ${PACKAGES.map((b) => `<button class="pill pill--btn" type="button" data-cpkg="${b.id}">${b[lang][0]}</button>`).join("")}
            <button class="pill pill--btn" type="button" data-cpkg="mine">${pt("calcMine")}</button>
          </div>
        </div>
      </div>
      <div class="calc__out" aria-live="polite">
        <dl class="calc__rows">
          <div><dt>${pt("calcSales")}</dt><dd id="co-sales"></dd></div>
          <div><dt>${pt("calcTime")}</dt><dd id="co-time"></dd></div>
          <div class="is-total"><dt>${pt("calcTotal")}</dt><dd id="co-total"></dd></div>
        </dl>
        <p class="calc__payback"><span class="mono">${pt("calcPayback")}</span><b id="co-payback"></b></p>
        <p class="calc__year" id="co-year"></p>
        <p class="calc__punch">${pt("calcPunch")}</p>
        <button class="btn btn--red calc__cta" type="button" id="calcCta">${pt("calcCta")} →</button>
        <p class="calc__note">${pt("calcNote")}</p>
      </div>
    </section>

    <ul class="promises">${pt("promises").map(([h, p]) => `<li class="reveal"><strong>${h}</strong><span>${p}</span></li>`).join("")}</ul>

    ${head("", pt("howEyebrow"), pt("howTitle"))}
    <ol class="how">${pt("how").map(([h, p], i) => `<li class="reveal"><span class="how__n">0${i + 1}</span><strong>${h}</strong><p>${p}</p></li>`).join("")}</ol>

    ${head("buildHead", pt("buildEyebrow"), pt("buildTitle"), pt("buildSub")(money(PRICING.base)))}
    <div class="pills pricing__filters" id="pFilters"></div>
    <div class="pricing__build">
      <div>
        <div class="addons" id="pGrid"></div>
        <h4 class="mono cares__title">${pt("careTitle")}</h4>
        <p class="cares__sub">${pt("careSub")}</p>
        <div class="cares" id="pCare"></div>
      </div>
      <aside class="quote" id="quote" aria-label="${pt("quote")}">
        <h4 class="mono quote__title">${pt("quote")}</h4>
        <ul class="quote__lines" id="qLines"></ul>
        <div class="quote__row"><span>${pt("oneTime")}</span><b id="qOne"></b></div>
        <div class="quote__row"><span>${pt("monthly")}</span><b id="qMo"></b></div>
        <div class="quote__row quote__opt">
          <span>${pt("rushLabel")}</span>
          <button class="switch" type="button" role="switch" id="qRush" aria-checked="false" aria-label="${pt("rushLabel")}"></button>
        </div>
        <div class="quote__row quote__opt">
          <span>${pt("payment")}</span>
          <div class="lang" role="group" aria-label="${pt("payment")}">
            <button type="button" data-pplan="2" aria-pressed="true">50/50</button>
            <button type="button" data-pplan="3" aria-pressed="false">40/30/30</button>
          </div>
        </div>
        <div class="quote__total">
          <span class="mono">${pt("total")}</span>
          <b id="qTotal"></b>
          <small id="qOneAlt"></small>
          <small id="qDeposit"></small>
        </div>
        <a class="btn btn--wa" id="qWa" href="#" target="_blank" rel="noopener">${WA_ICON}<span>${pt("send")}</span></a>
        <button class="link mono quote__copy" type="button" id="qCopy">${pt("copy")}</button>
        <div class="quote__custom">
          <p>${pt("custom")}</p>
          <button class="link mono" type="button" data-open="contact">${pt("customBtn")} →</button>
        </div>
      </aside>
    </div>

    ${head("", pt("faqEyebrow"), pt("faqTitle"))}
    <div class="faq">${pt("faq").map(([q, a]) => `<details class="reveal"><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>

    <section class="pfinal reveal">
      <div>
        <h3>${pt("finalTitle")}</h3>
        <p>${pt("finalText")}</p>
      </div>
      <a class="btn btn--wa" id="pHelp" href="${wa(pt("finalMsg"))}" target="_blank" rel="noopener">${WA_ICON}<span>${pt("finalBtn")}</span></a>
    </section>
    <p class="pricing__fine">${pt("fine")}</p>

    <div class="quote-dock" aria-hidden="true">
      <div><small class="mono">${pt("quote")}</small><b id="qDock"></b></div>
      <button class="btn btn--red" type="button" data-pgo="quote" tabindex="-1">${pt("view")}</button>
    </div>
    <div class="ptoast" id="pToast" role="status"></div>`;
  observeReveal();
  quoteObs.disconnect();
  quoteObs.observe($("#quote"));
}

/* ---------- Dynamic parts ---------- */
function renderPackages() {
  $("#pkgs").innerHTML = PACKAGES.map((b) => {
    const [name, promise, bestFor, highlights] = b[lang];
    const value = packageValue(b), pct = Math.round((1 - b.price / value) * 100), on = P.pkg === b.id;
    const all = [pt("baseFull")].concat(Object.entries(b.items).map(([id, q]) => (q > 1 ? pt("upTo")(q) : "") + pAddon(id)[lang][0]));
    all.push(pt("careIncl")(b.careMonths, pCare(b.careId)[lang][0]));
    if (b.aiMonths) all.push(pt("aiIncl")(b.aiMonths));
    const extras = [pt("careIncl")(b.careMonths, pCare(b.careId)[lang][0])].concat(b.aiMonths ? [pt("aiIncl")(b.aiMonths)] : []);
    return `<article class="pkg reveal${b.featured ? " pkg--featured" : ""}${on ? " is-on" : ""}">
      ${b.featured ? `<span class="pkg__badge mono">★ ${pt("featured")}</span>` : ""}
      <h4 class="pkg__name">${name}</h4>
      <p class="pkg__promise">${promise}</p>
      <p class="pkg__price"><b>${money(b.price)}</b></p>
      <p class="pkg__value mono"><span class="pkg__save">${pt("save")(pct)}</span> <s>${money(value)}</s> ${pt("valueWas")}</p>
      <p class="pkg__terms">${b.plan === 2 ? pt("pay2")(money(b.price / 2)) : pt("pay3")(money(b.price * 0.4))}</p>
      <p class="pkg__weeks"><span aria-hidden="true">⚡</span> ${pt("weeks")(b.weeks)}</p>
      <ul class="pkg__list">${highlights.map((i) => `<li>${i}</li>`).join("")}${extras.map((i) => `<li class="is-gift">${i}</li>`).join("")}</ul>
      <p class="pkg__for"><span class="mono">${pt("bestFor")}</span> ${bestFor}</p>
      <details class="pkg__all"><summary class="mono">${pt("seeAll")(all.length)}</summary><ul>${all.map((i) => `<li>${i}</li>`).join("")}</ul></details>
      <button class="btn pkg__cta ${b.featured ? "btn--red" : on ? "btn--cream" : "btn--line"}" type="button" data-pkg="${b.id}" aria-pressed="${on}">${on ? pt("chosen") : pt("choose")(name) + " →"}</button>
      ${b.caseSlug ? `<a class="pkg__case mono" href="/work/${b.caseSlug}/${lang === "es" ? "es/" : ""}">${pt("example")}: ${PROJECTS.find((p) => p.slug === b.caseSlug).name.replace(" Ventura Sur", "")} ↗</a>` : ""}
    </article>`;
  }).join("");
}

function renderFilters() {
  $("#pFilters").innerHTML = Object.entries(CATS).map(([k, v]) =>
    `<button class="pill pill--btn" type="button" data-pcat="${k}" aria-pressed="${P.cat === k}">${v[lang]}</button>`).join("");
}

function addonPrice(a) {
  let h = "";
  if (a.price) h += `<b>${money(a.price)}</b>${a.qty ? `<span>${pt("each")}</span>` : ""}`;
  if (a.monthly) h += `<b>${a.price ? "+ " : ""}${money(a.monthly)}</b><span>${pt("mo")}</span>`;
  return h;
}

function renderAddons() {
  const inPkg = P.pkg ? pPkg(P.pkg).items : {};
  const shown = ADDONS.filter((a) => P.cat === "all" || a.cat === P.cat || (P.cat === "popular" && a.popular));
  $("#pGrid").innerHTML = shown.map((a) => {
    const [name, line] = a[lang];
    const q = P.sel[a.id] || 0, incl = inPkg[a.id] || 0, on = q + incl > 0;
    let ctl;
    if (a.qty) ctl = `<div class="stepper stepper--sm" role="group" aria-label="${esc(name)}">
        <button type="button" data-pdec="${a.id}" aria-label="−"${q ? "" : " disabled"}>−</button>
        <output>${q + incl}</output>
        <button type="button" data-pinc="${a.id}" aria-label="+">+</button></div>`;
    else if (incl) ctl = `<span class="addon__incl mono">✓ ${pt("included")}</span>`;
    else ctl = `<button class="addon__tog${q ? " is-on" : ""}" type="button" data-ptog="${a.id}" aria-pressed="${!!q}">${q ? "✓ " + pt("added") : "+ " + pt("add")}</button>`;
    return `<article class="addon${on ? " is-on" : ""}">
      <div class="addon__main">
        <h5 class="addon__name">${name}</h5>
        <p class="addon__line">${line}</p>
      </div>
      <div class="addon__foot"><p class="addon__price">${addonPrice(a)}</p>${ctl}</div>
    </article>`;
  }).join("") + (P.cat === "popular" ? `<button class="addons__more mono" type="button" data-pcat="all">${pt("showAll")(ADDONS.length)} →</button>` : "");
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
  $("#qWa").href = wa(quoteText());
  $("#qDock").textContent = money(one);
  if (C.pkg === "mine") renderCalc();
  pricingEl.classList.toggle("has-quote", !!P.pkg || Object.values(P.sel).some(Boolean));
}

function quoteText() {
  const { one, mo, lines, startMo } = calc();
  const rows = lines.map((l) => (l.inc ? "   ↳ " : "• ") + l.n +
    (l.v != null ? ` — ${money(l.v)}` : l.m ? ` — ${money(l.m)}${pt("mo")}` : "") +
    (l.v != null && l.m ? ` + ${money(l.m)}${pt("mo")}` : ""));
  return [
    pt("waHead"), pt("waWant"), "", ...rows, "",
    `*${pt("oneTime")}:* ${money(one)} (${pt("waUsd")} ${money(one, otherCur())})`,
    mo ? `*${pt("monthly")}:* ${money(mo)}${pt("mo")}${startMo ? ` (${pt("fromMonth")(startMo)})` : ""}` : null,
    `*${pt("payment")}:* ${P.plan === 2 ? pt("plan2") : pt("plan3")}`,
  ].filter((x) => x !== null).join("\n");
}

function renderPricing() {
  renderShell();
  renderDynamic();
}
/* ---------- Savings calculator ---------- */
const WEEKS_PER_MONTH = 4.33;
function calcPrice() {
  return C.pkg === "mine" ? calc().one : pPkg(C.pkg).price;
}
function renderCalc() {
  if (!$("#calc")) return;
  const fmtN = (k, v) => (CALC_FIELDS.find((f) => f[0] === k)[5] === "money" ? money(v) : String(v));
  CALC_FIELDS.forEach(([k]) => { $("#cv-" + k).textContent = fmtN(k, C[k]); });
  $$("[data-cpkg]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cpkg === C.pkg)));
  const sales = C.ticket * C.cust;
  const hours = Math.round(C.hrs * WEEKS_PER_MONTH);
  const timeVal = hours * C.rate;
  const total = sales + timeVal;
  const price = calcPrice();
  $("#co-sales").textContent = money(sales);
  $("#co-time").textContent = `${pt("calcHours")(hours)} · ${money(timeVal)}`;
  $("#co-total").textContent = money(total);
  const pay = $("#co-payback"), year = $("#co-year");
  if (!total) { pay.textContent = "—"; year.textContent = pt("calcZero"); return; }
  const days = Math.ceil(price / (total / 30));
  pay.textContent = days <= 60 ? pt("calcDays")(days) : days <= 120 ? pt("calcWeeks")(Math.ceil(days / 7)) : pt("calcMonths")(Math.ceil(days / 30));
  const back = (total * 12) / price, net = total * 12 - price;
  year.innerHTML = net > 0 ? pt("calcYear")(back.toFixed(1).replace(".", lang === "es" ? "," : "."), money(net)) : pt("calcYearLow");
}

function renderDynamic() {
  renderPackages();
  renderFilters();
  renderAddons();
  renderCare();
  renderQuote();
  renderCalc();
  observeReveal();
}

/* ---------- Motion: fade sections in as they scroll into view ---------- */
const pricingEl = $("#pricing");
const revealObs = new IntersectionObserver((es) => es.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add("is-in"); revealObs.unobserve(en.target); }
}), { root: pricingEl, threshold: 0.08 });
function observeReveal() {
  $$("#pricing .reveal:not(.is-in)").forEach((el) => (reduced ? el.classList.add("is-in") : revealObs.observe(el)));
}

/* ---------- Events ---------- */
function toastP(msg) {
  const el = $("#pToast");
  el.textContent = msg;
  el.classList.add("is-on");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("is-on"), 1800);
}

function scrollToEl(id) {
  const el = $("#" + id);
  if (el) pricingEl.scrollTo({ top: el.getBoundingClientRect().top - pricingEl.getBoundingClientRect().top + pricingEl.scrollTop - 70, behavior: reduced ? "auto" : "smooth" });
}

pricingEl.addEventListener("click", (e) => {
  const d = e.target.closest("[data-pcat],[data-ptog],[data-pinc],[data-pdec],[data-pcare],[data-pkg],[data-prm],[data-pplan],[data-pcur],[data-pgo],[data-cpkg],#calcCta,#qRush,#qCopy,#qWa,#pHelp");
  if (!d) return;
  const ds = d.dataset;
  if (d.id === "qWa") return track("Quote WhatsApp", { package: P.pkg || "custom", total: calc().one });
  if (d.id === "pHelp") return track("Help Me Choose");
  if (ds.pgo) return scrollToEl(ds.pgo);
  if (ds.pcat) { P.cat = ds.pcat; renderFilters(); renderAddons(); return; }
  if (ds.pcur) { P.cur = ds.pcur; renderPackages(); renderAddons(); renderCare(); renderQuote(); renderCalc(); observeReveal(); return; }
  if (ds.cpkg) { C.pkg = ds.cpkg; renderCalc(); return; }
  if (d.id === "calcCta") {
    if (C.pkg === "mine") return scrollToEl("buildHead");
    if (P.pkg !== C.pkg) choosePackage(C.pkg);
    renderPackages(); renderAddons(); renderCare(); renderQuote(); observeReveal();
    track("Calculator CTA", { package: C.pkg });
    return setTimeout(() => scrollToEl("buildHead"), 250);
  }
  if (ds.pplan) { P.plan = +ds.pplan; renderQuote(); return; }
  if (d.id === "qRush") { P.rush = !P.rush; renderQuote(); return; }
  if (d.id === "qCopy") { track("Quote Copied", { package: P.pkg || "custom" }); return copyQuote(); }
  if (ds.ptog) P.sel[ds.ptog] = P.sel[ds.ptog] ? 0 : 1;
  if (ds.pinc) P.sel[ds.pinc] = (P.sel[ds.pinc] || 0) + 1;
  if (ds.pdec) P.sel[ds.pdec] = Math.max(0, (P.sel[ds.pdec] || 0) - 1);
  if (ds.prm) P.sel[ds.prm] = 0;
  if (ds.pcare) { P.care = ds.pcare; if (P.pkg && ds.pcare === "none") P.care = pPkg(P.pkg).careId; }
  if (ds.ptog && P.sel[ds.ptog]) track("Add-on Added", { addon: ds.ptog });
  const picked = ds.pkg ? choosePackage(ds.pkg) : false;
  renderPackages();
  renderAddons();
  renderCare();
  renderQuote();
  observeReveal();
  if (picked) setTimeout(() => scrollToEl("buildHead"), 250);
});

// Returns true when a package was picked (not un-picked).
function choosePackage(id) {
  P.pkg = P.pkg === id ? null : id;
  P.care = "none";
  if (!P.pkg) return false;
  track("Package Chosen", { package: id });
  const b = pPkg(id);
  P.plan = b.plan;
  // Single add-ons the package already covers come off the extras list.
  for (const k in b.items) if (!pAddon(k).qty) P.sel[k] = 0;
  toastP(pt("pkgLoaded"));
  return true;
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

// Phones: a bar with the running total that jumps to the quote, shown while the quote is off screen.
const quoteObs = new IntersectionObserver(([en]) => pricingEl.classList.toggle("quote-visible", en.isIntersecting), { root: pricingEl, threshold: 0.05 });

pricingEl.addEventListener("input", (e) => {
  const k = e.target.dataset.calc;
  if (!k) return;
  C[k] = +e.target.value;
  renderCalc();
  if (!C.used) { C.used = true; track("Calculator Used"); }
});

renderPricing();
