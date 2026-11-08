/* ==========================================================================
   Spanish text for the static page. English lives in index.html itself.
   Elements opt in with data-i18n="key" (inner HTML) and
   data-i18n-attr="attr:key; attr2:key2" (attributes such as aria-label,
   placeholder or value). Project text, the funnel options, the ticker and
   the WhatsApp message are translated in app.js.
   ========================================================================== */

const STATIC_ES = {
  // <head>
  metaTitle: "Marvz Studio · Sitios web y apps hechos para rendir",
  metaDesc: "Marvz Studio diseña y desarrolla sitios web, apps web y productos digitales: colegios, restaurantes, SaaS, e-commerce y portafolios personales.",

  // Header and index
  brandHome: "Marvz Studio, inicio",
  navMain: "Principal",
  langGroup: "Idioma",
  index: "Índice",
  about: "Sobre mí",
  start: "Empezar un proyecto",
  indexLabel: "Índice de proyectos",
  projects: "Proyectos",
  stageLabel: "Lienzo de proyectos. Arrastra o desplázate para explorar y haz clic en un proyecto para abrirlo.",

  // Hero
  heroLabel: "Introducción",
  heroEyebrow: '<span class="dot"></span>Web + Producto + Marca',
  heroTitle: "Sitios web y apps<br><em>hechos para rendir.</em>",

  // List view
  listLabel: "Todos los proyectos",
  listEyebrow: '<span class="dot"></span>Trabajos seleccionados',
  listTitle: "Cada proyecto, <em>de un vistazo.</em>",
  listCta: "Tu proyecto <em>podría ser el siguiente.</em>",
  tickerLabel: "Novedades",

  // Project drawer
  drawerLabel: "Detalles del proyecto",
  prev: "← Anterior",
  prevLabel: "Proyecto anterior",
  next: "Siguiente →",
  nextLabel: "Proyecto siguiente",
  close: "Cerrar",
  visitLive: "Ver en vivo ↗",
  visitSite: "Visitar el sitio en vivo ↗",

  // About
  aboutLabel: "Sobre mí",
  aboutEyebrow: '<span class="dot"></span>Sobre mí',
  aboutTitle: "Hola, soy Marvz. Diseño y desarrollo sitios web y apps <em>que se ganan su lugar.</em>",
  aboutLead: "Soy diseñador y desarrollador independiente en Santa Cruz, Bolivia. Llevo cada proyecto desde la primera llamada hasta el día del lanzamiento, y hago yo mismo la estrategia, el diseño, el código y los textos, así nada se pierde en el camino.",
  aboutWork: "Hasta ahora son <span data-count></span> proyectos en línea: un sitio corporativo para un operador de helicópteros, un sistema de punto de venta que maneja un restaurante desde el celular de los meseros, un sistema de información estudiantil para un colegio, una tienda online para una marca de carne premium y portafolios cinematográficos para estudiantes-deportistas que postulan a la universidad.",
  statLive: "Proyectos en línea",
  statLangs: "Idiomas en un solo sitio",
  statInd: "Industrias",
  statPerson: "Persona, del brief al lanzamiento",
  howTitle: "Cómo trabajo",
  how1: "<strong>Hablas con quien lo construye.</strong> Sin ejecutivos de cuenta ni teléfono descompuesto. La persona en la llamada es la que lo diseña y lo programa.",
  how2: "<strong>Primero el celular.</strong> Tus clientes te van a encontrar desde un celular, así que diseño primero para uno. Eso significa pedidos y reservas por WhatsApp, apps que se instalan desde el navegador y páginas que cargan rápido con datos móviles.",
  how3: "<strong>Todos los idiomas de tus clientes.</strong> La mayoría de mis sitios salen en inglés y español, y algunos funcionan en seis. El cambio de idioma se planifica desde el primer día, no se agrega al final.",
  servicesTitle: "Lo que hago",
  svcWeb: "Sitios web",
  svcWebList: "<li>Diseño web</li><li>Desarrollo web</li><li>Landing pages</li><li>Sitios multilingües</li><li>SEO y rendimiento</li><li>CMS y contenido</li>",
  svcProd: "Productos",
  svcProdList: "<li>Apps web y PWA</li><li>SaaS y paneles</li><li>E-commerce</li><li>Asistentes con IA</li><li>Sistemas para colegios</li><li>Diseño UX</li>",
  svcBrand: "Marca e historia",
  svcBrandList: "<li>Identidad de marca</li><li>Dirección de arte</li><li>Redacción</li><li>Storytelling con scroll</li><li>Diseño de animación</li><li>Video y film</li>",
  aboutCtaTitle: "¿Tienes un proyecto en mente? <em>Hablemos.</em>",
  aboutCtaText: "Cuéntame en qué estás trabajando. Te respondo con los próximos pasos y un plan inicial.",

  // Start a project funnel
  contactLabel: "Empezar un proyecto",
  funnelEyebrow: '<span class="dot"></span>Empezar un proyecto',
  funnelTitle: "Cuéntame qué <em>estás construyendo.</em>",
  step1: " · Qué necesitas",
  step2: " · Detalles",
  step3: " · Sobre ti",
  step4: " · Enviar",
  legService: "Elige un servicio",
  legStart: "Punto de partida",
  startNew: "Desde cero",
  startNewV: "Desde cero",
  startRedesign: "Rediseño",
  startRedesignV: "Rediseño de uno existente",
  startFeatures: "Nuevas funciones",
  startFeaturesV: "Agregar funciones a uno existente",
  legExtras: "Agrega extras",
  languages: "Idiomas",
  langsLabel: "Número de idiomas",
  langsLess: "Menos idiomas",
  langsMore: "Más idiomas",
  timeline: "Plazo",
  asap: "Lo antes posible",
  asapV: "Lo antes posible",
  months12: "1–2 meses",
  months12V: "1–2 meses",
  months3: "3+ meses",
  months3V: "3+ meses",
  budget: "Presupuesto",
  under2k: "Menos de $2k",
  under2kV: "Menos de $2k",
  notSure: "Aún no lo sé",
  notSureV: "Aún no lo sé",
  legAbout: "Sobre ti",
  nameLabel: "Nombre *",
  namePh: "Tu nombre",
  businessLabel: "Negocio",
  businessPh: "Negocio o marca",
  linkLabel: "Sitio actual o Instagram",
  linkPh: "Opcional",
  projectLabel: "Proyecto",
  projectPh: "Unas líneas sobre el proyecto siempre ayudan :)",
  legReview: "Revisa y envía",
  sendWa: "Enviar por WhatsApp",
  waNote: "WhatsApp se abre con este mensaje listo. Solo toca enviar.",
  back: "← Atrás",
  previewLabel: "Vista previa del mensaje",
  online: "en línea",
  bubbleIn: "¡Hola! 👋 Soy Marvz. Cuéntame qué necesitas y te respondo con un plan.",
  message: "Mensaje",
  waFloat: "Empezar un proyecto por WhatsApp",
  cursor: "Abrir",
};

// English originals, captured from the page the first time Spanish is applied.
const STATIC_EN = new WeakMap();

function applyStaticText(lang) {
  const es = lang === "es";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const orig = STATIC_EN.get(el) || {};
    if (!("html" in orig)) { orig.html = el.innerHTML; STATIC_EN.set(el, orig); }
    const key = el.dataset.i18n;
    el.innerHTML = es && key in STATIC_ES ? STATIC_ES[key] : orig.html;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const orig = STATIC_EN.get(el) || {};
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((x) => x.trim());
      if (!attr || !key) return;
      if (!(`@${attr}` in orig)) orig[`@${attr}`] = el.getAttribute(attr);
      const value = es && key in STATIC_ES ? STATIC_ES[key] : orig[`@${attr}`];
      if (attr === "value") el.value = value;
      el.setAttribute(attr, value);
    });
    STATIC_EN.set(el, orig);
  });
  // Title and description (the English ones are captured the same way).
  const desc = document.querySelector('meta[name="description"]');
  if (!STATIC_EN.has(document)) STATIC_EN.set(document, { title: document.title, desc: desc && desc.content });
  const en = STATIC_EN.get(document);
  document.title = es ? STATIC_ES.metaTitle : en.title;
  if (desc) desc.content = es ? STATIC_ES.metaDesc : en.desc;
}
