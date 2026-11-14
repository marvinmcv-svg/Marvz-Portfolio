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

// Projects with a case study page at /work/<slug>/ (built by scripts/case-studies.js).
const CASE_STUDIES = ["haras-la-alhambra", "fogo-de-chao", "restobar-os"];

const PROJECTS = [
  {
    slug: "haras-la-alhambra", group: "Industry & Agro", name: "Haras La Alhambra", sector: "Equestrian", type: "Website",
    url: "https://haras-la-alhambra.vercel.app/",
    tagline: "Raised with patience. Selected with rigor.",
    desc: "A cinematic, bilingual site for a breeder of Purebred Arabian and Pura Raza Española horses in Santa Cruz, founded in 1993. The film plays through the cut-out letters of ALHAMBRA, then the site moves through bloodlines, the estate, evening events, the riding school and services, with “Spirit”, an AI assistant that answers visitors' questions.",
    langs: "Spanish · English", tags: ["Art direction", "Scroll storytelling", "AI assistant", "Bilingual", "Motion"],
    es: {
      sector: "Ecuestre", type: "Sitio web",
      tagline: "Criados con paciencia. Seleccionados con rigor.",
      desc: "Un sitio cinematográfico y bilingüe para un criadero de caballos Pura Sangre Árabe y Pura Raza Española en Santa Cruz, fundado en 1993. El video se ve a través de las letras recortadas de ALHAMBRA y luego el sitio recorre los linajes, el haras, las noches de eventos, la escuela de equitación y los servicios, con “Spirit”, un asistente con IA que responde las preguntas de los visitantes.",
      langs: "Español · Inglés", tags: ["Dirección de arte", "Storytelling con scroll", "Asistente con IA", "Bilingüe", "Animación"],
    },
  },
  {
    slug: "fuerzaflow", group: "Health & Fitness", name: "FuerzaFlow", sector: "Fitness · AI", type: "Web app · PWA",
    url: "https://fuerzaflow.vercel.app/",
    tagline: "Strength that flows with you.",
    desc: "An AI strength coach that builds your training program around your days and equipment, adjusts every workout to how you feel, and tracks macros from a photo. It installs from the browser, works offline and runs in six languages.",
    langs: "EN · ES · PT · FR · DE · IT", tags: ["Product design", "PWA", "AI coach", "6 languages", "Themes"],
    es: {
      sector: "Fitness · IA", type: "App web · PWA",
      tagline: "Fuerza que fluye contigo.",
      desc: "Un coach de fuerza con IA que arma tu programa según tus días y tu equipo, ajusta cada entrenamiento a cómo te sientes y calcula tus macros con una foto. Se instala desde el navegador, funciona sin conexión y está en seis idiomas.",
      langs: "EN · ES · PT · FR · DE · IT", tags: ["Diseño de producto", "PWA", "Coach con IA", "6 idiomas", "Temas"],
    },
  },
  {
    slug: "restobar-os", group: "Apps & SaaS", name: "RestoBar OS", sector: "Restaurants · SaaS", type: "SaaS",
    url: "https://restobar-os.vercel.app/",
    tagline: "Your restaurant, under control. From your phone.",
    desc: "A restaurant operating system for bars and restaurants in Bolivia. Waiters take orders on their own phones, each ticket goes to its kitchen station with a timer, staff get role-based permissions, invoicing is built in, and the day's close is sent to the owner on WhatsApp.",
    langs: "Spanish", tags: ["SaaS", "POS", "Kitchen display", "Roles & permissions", "WhatsApp"],
    es: {
      sector: "Restaurantes · SaaS", type: "SaaS",
      tagline: "Tu restaurante, bajo control. Desde tu celular.",
      desc: "Un sistema operativo para restaurantes y bares de Bolivia. Los meseros toman pedidos desde su propio celular, cada comanda llega a su estación de cocina con reloj, el personal tiene permisos por rol, la facturación viene incluida y el cierre del día le llega al dueño por WhatsApp.",
      langs: "Español", tags: ["SaaS", "Punto de venta", "Pantalla de cocina", "Roles y permisos", "WhatsApp"],
    },
  },
  {
    slug: "fogo-de-chao", group: "Food & Hospitality", name: "Fogo de Chão Ventura Sur", sector: "Hospitality", type: "Website",
    url: "https://fogo-de-chao-ventura-sur.vercel.app/es",
    tagline: "From the fire to your table.",
    desc: "A warm, editorial site for a gaúcho churrascaria in Mall Ventura Sur, Santa Cruz: menu, cuts, the Market Table, weekly specials and events, with WhatsApp reservations, in six languages.",
    langs: "ES · EN · PT · FR · DE · ZH", tags: ["Restaurant", "Reservations", "6 languages", "CMS", "Art direction"],
    es: {
      sector: "Gastronomía", type: "Sitio web",
      tagline: "Del fuego a tu mesa.",
      desc: "Un sitio cálido y editorial para una churrasquería gaúcha en el Mall Ventura Sur de Santa Cruz: carta, cortes, la Mesa del Mercado, la Semana Fogo y eventos, con reservas por WhatsApp en seis idiomas.",
      langs: "ES · EN · PT · FR · DE · ZH", tags: ["Restaurante", "Reservas", "6 idiomas", "CMS", "Dirección de arte"],
    },
  },
  {
    slug: "don-corte-fino", group: "Food & Hospitality", name: "Don Corte Fino", sector: "Food · E-commerce", type: "Website + Shop",
    url: "https://new-don-corte-fino.vercel.app/en",
    tagline: "It's not just beef… it's Wangus.",
    desc: "Brand site and online shop for Wangus beef (Wagyu × Angus), finished in a Santa Cruz feedlot and cut by hand. It includes an interactive cut guide, signature boxes, and WhatsApp ordering with delivery across Santa Cruz de la Sierra.",
    langs: "Spanish · English", tags: ["E-commerce", "Brand storytelling", "Cut guide", "WhatsApp ordering"],
    es: {
      sector: "Alimentos · E-commerce", type: "Sitio web + tienda",
      tagline: "No es solo carne… es Wangus.",
      desc: "Sitio de marca y tienda online para la carne Wangus (Wagyu × Angus), terminada en un feedlot de Santa Cruz y cortada a mano. Incluye una guía de cortes interactiva, cajas especiales y pedidos por WhatsApp con delivery en toda Santa Cruz de la Sierra.",
      langs: "Español · Inglés", tags: ["E-commerce", "Storytelling de marca", "Guía de cortes", "Pedidos por WhatsApp"],
    },
  },
  {
    slug: "helibol", group: "Brands & Business", name: "Helibol", sector: "Aviation", type: "Website",
    url: "https://helibol.vercel.app/es",
    tagline: "Where the roads end, we begin.",
    desc: "A site for a family-run helicopter operator flying in Bolivia since 1988: energy and mining, rescue and MEDEVAC, firefighting, cargo, VIP and scenic flights. It presents the fleet and safety culture and gives a 24/7 emergency line.",
    langs: "Spanish · English", tags: ["Corporate", "Fleet showcase", "Bilingual", "Lead generation"],
    es: {
      sector: "Aviación", type: "Sitio web",
      tagline: "Donde terminan los caminos, empezamos nosotros.",
      desc: "Un sitio para un operador familiar de helicópteros que vuela en Bolivia desde 1988: energía y minería, rescate y MEDEVAC, combate de incendios, carga, vuelos VIP y panorámicos. Presenta la flota y la cultura de seguridad, con una línea de emergencias 24/7.",
      langs: "Español · Inglés", tags: ["Corporativo", "Presentación de flota", "Bilingüe", "Captación de clientes"],
    },
  },
  {
    slug: "spc", group: "Industry & Agro", name: "SPC Impresores", sector: "Manufacturing", type: "Website",
    url: "https://spc-3-0.vercel.app/",
    tagline: "Printing the best of Bolivia.",
    desc: "A site for a leader in Bolivia's printing industry since 2001: food and pharmaceutical packaging, commercial printing, books, magazines and on-demand digital print. It has a services catalog, a step-by-step process and WhatsApp quotes with an on-site assistant.",
    langs: "Spanish · English", tags: ["B2B", "Industrial", "Quoting flow", "AI assistant"],
    es: {
      sector: "Industria", type: "Sitio web",
      tagline: "Imprimiendo lo mejor de Bolivia.",
      desc: "Un sitio para un líder de la industria gráfica boliviana desde 2001: packaging para alimentos y farmacia, impresión comercial, libros, revistas e impresión digital bajo demanda. Tiene catálogo de servicios, el proceso paso a paso y cotizaciones por WhatsApp con un asistente en el sitio.",
      langs: "Español · Inglés", tags: ["B2B", "Industrial", "Flujo de cotización", "Asistente con IA"],
    },
  },
  {
    slug: "firuwalk", group: "Apps & SaaS", name: "FiruWalk", sector: "Pets · Marketplace", type: "Web app",
    url: "https://firu-walk.vercel.app/",
    tagline: "Happy walks, calm owners.",
    desc: "A family dog-walking service in Santa Cruz. Owners book recurring walks with verified walkers, follow each walk on live GPS, get photo reports when it ends and pay by QR. Walkers get their own sign-up and dashboard.",
    langs: "Spanish · English", tags: ["Marketplace", "Booking", "Live GPS", "QR payments"],
    es: {
      sector: "Mascotas · Marketplace", type: "App web",
      tagline: "Paseos felices, dueños tranquilos.",
      desc: "Un servicio familiar de paseo de perros en Santa Cruz. Los dueños reservan paseos recurrentes con paseadores verificados, siguen cada paseo por GPS en vivo, reciben un reporte con fotos al terminar y pagan con QR. Los paseadores tienen su propio registro y panel.",
      langs: "Español · Inglés", tags: ["Marketplace", "Reservas", "GPS en vivo", "Pagos con QR"],
    },
  },
  {
    slug: "bloom", group: "Health & Fitness", name: "Bloom", sector: "Wellness", type: "App",
    url: "https://bloom-habits-two.vercel.app/",
    tagline: "Small habits. Big change.",
    desc: "A friendly habit tracker. You build routines in a few minutes a day, and a little companion grows every time you show up. It's built as a cross-platform app with Expo and React Native and runs in the browser.",
    langs: "English", tags: ["Mobile app", "React Native", "Gamification", "Character design"],
    es: {
      sector: "Bienestar", type: "App",
      tagline: "Pequeños hábitos. Grandes cambios.",
      desc: "Un tracker de hábitos amigable. Armas rutinas en pocos minutos al día y un pequeño compañero crece cada vez que cumples. Es una app multiplataforma hecha con Expo y React Native que también funciona en el navegador.",
      langs: "Inglés", tags: ["App móvil", "React Native", "Gamificación", "Diseño de personaje"],
    },
  },
  {
    slug: "sccs-website", group: "Education", name: "Santa Cruz Cooperative School", sector: "Education", type: "Website",
    url: "https://sccs-new.vercel.app/",
    tagline: "Two diplomas. One unrivaled future.",
    desc: "The new website for Bolivia's PK–12 American international school, home of the Jaguars since 1959. It sells the dual U.S. and Bolivian diploma, Cognia accreditation and a 99% university matriculation rate, then walks families through admissions, campus, safety and student life.",
    langs: "English · Spanish", tags: ["Education", "Information architecture", "Search", "Admissions"],
    es: {
      sector: "Educación", type: "Sitio web",
      tagline: "Dos diplomas. Un futuro sin igual.",
      desc: "El nuevo sitio del colegio internacional americano de PK a 12.º grado de Bolivia, hogar de los Jaguars desde 1959. Vende el doble diploma estadounidense y boliviano, la acreditación Cognia y un 99% de ingreso a la universidad, y guía a las familias por admisiones, campus, seguridad y vida estudiantil.",
      langs: "Inglés · Español", tags: ["Educación", "Arquitectura de información", "Buscador", "Admisiones"],
    },
  },
  {
    slug: "sccs-sis", group: "Education", name: "SCCS SIS", sector: "Education · SaaS", type: "Web app · PWA",
    url: "https://sccs-sis.vercel.app/?source=pwa",
    tagline: "Every student. One place.",
    desc: "A student information system that holds records, grades, Google Classroom and family communication for both the U.S. diploma and the Bolivian Bachillerato. It works in English and Spanish, installs on any phone, and search returns in under 72 ms.",
    langs: "English · Spanish", tags: ["SIS", "Gradebook", "Google Classroom", "PWA", "Role-based"],
    es: {
      sector: "Educación · SaaS", type: "App web · PWA",
      tagline: "Cada estudiante. Un solo lugar.",
      desc: "Un sistema de información estudiantil que reúne registros, notas, Google Classroom y la comunicación con las familias, tanto para el diploma estadounidense como para el Bachillerato boliviano. Funciona en inglés y español, se instala en cualquier celular y la búsqueda responde en menos de 72 ms.",
      langs: "Inglés · Español", tags: ["SIS", "Libreta de notas", "Google Classroom", "PWA", "Por roles"],
    },
  },
  {
    slug: "sccs-student-os", group: "Education", name: "SCCS Student OS", sector: "Education · SaaS", type: "Web app",
    url: "https://sccs-student-os.vercel.app/welcome",
    tagline: "Every student, seen clearly.",
    desc: "One calm, bilingual workspace for school staff covering discipline, learning support and positive behavior. Accommodations travel with the student, and a referral can go from the morning dashboard to a compliant record in under a minute.",
    langs: "English · Spanish", tags: ["Dashboard", "Learning support", "Behavior", "Bilingual"],
    es: {
      sector: "Educación · SaaS", type: "App web",
      tagline: "Cada estudiante, visto con claridad.",
      desc: "Un espacio de trabajo tranquilo y bilingüe para el personal del colegio que reúne disciplina, apoyo al aprendizaje y conducta positiva. Las adecuaciones acompañan al estudiante, y un reporte pasa del panel de la mañana a un registro en regla en menos de un minuto.",
      langs: "Inglés · Español", tags: ["Panel", "Apoyo al aprendizaje", "Conducta", "Bilingüe"],
    },
  },
  {
    slug: "sccs-store", group: "Education", name: "SCCS Store", sector: "Education · E-commerce", type: "E-commerce",
    url: "https://sccs-store-app.vercel.app/",
    tagline: "Back to school, Jaguars.",
    desc: "The official school store for uniforms, sportswear, backpacks and keepsakes. Families shop by grade level, buy discounted kits, and pick up their orders at school.",
    langs: "Spanish · English", tags: ["E-commerce", "Catalog", "Kits", "Pickup"],
    es: {
      sector: "Educación · E-commerce", type: "E-commerce",
      tagline: "Vuelta a clases, Jaguars.",
      desc: "La tienda oficial del colegio para uniformes, ropa deportiva, mochilas y recuerdos. Las familias compran por nivel, aprovechan kits con descuento y recogen sus pedidos en el colegio.",
      langs: "Español · Inglés", tags: ["E-commerce", "Catálogo", "Kits", "Recojo en el colegio"],
    },
  },
  {
    slug: "acs-calvert", group: "Education", name: "ACS Calvert", sector: "Education", type: "Website",
    url: "https://acs-calvert.vercel.app/en",
    tagline: "Bolivia's American school since 1955.",
    desc: "A website for a U.S.-accredited, English-language school in La Paz that teaches from KG3 to Grade 12 and awards both U.S. and Bolivian diplomas. It covers admissions, learning, student life and community, with quick links to the school's own tools.",
    langs: "English · Spanish", tags: ["Education", "Admissions", "Bilingual", "Editorial"],
    es: {
      sector: "Educación", type: "Sitio web",
      tagline: "El colegio americano de Bolivia desde 1955.",
      desc: "Un sitio para un colegio de La Paz acreditado en EE. UU. y con enseñanza en inglés, de KG3 a 12.º grado, que otorga los diplomas estadounidense y boliviano. Cubre admisiones, aprendizaje, vida estudiantil y comunidad, con accesos rápidos a las herramientas del colegio.",
      langs: "Inglés · Español", tags: ["Educación", "Admisiones", "Bilingüe", "Editorial"],
    },
  },
  {
    slug: "fabrizio-saunero", group: "Portfolios", name: "Fabrizio Saunero · No. 19", sector: "Personal brand", type: "Portfolio",
    url: "https://fabrizio-saunero-2.vercel.app/",
    tagline: "Built by experience. Driven by purpose.",
    desc: "A cinematic college-application portfolio told in four chapters: athletics, service, work and independence. It uses match footage, animated stats, a division-climb ladder, horizontal galleries and scroll-driven storytelling.",
    langs: "English", tags: ["Storytelling", "Video", "GSAP motion", "College application"],
    es: {
      sector: "Marca personal", type: "Portafolio",
      tagline: "Forjado por la experiencia. Impulsado por un propósito.",
      desc: "Un portafolio cinematográfico para postular a la universidad, contado en cuatro capítulos: deporte, servicio, trabajo e independencia. Usa videos de partidos, estadísticas animadas, una escalera de ascenso de división, galerías horizontales y storytelling con scroll.",
      langs: "Inglés", tags: ["Storytelling", "Video", "Animación GSAP", "Postulación universitaria"],
    },
  },
  {
    slug: "fabrizios", group: "Portfolios", name: "Fabrizio Saunero", sector: "Personal brand", type: "Portfolio",
    url: "https://fabrizios.vercel.app/",
    tagline: "A life built on chances taken.",
    desc: "A second, editorial edition of a student-athlete's portfolio, built around highlights and a gallery: from Bolivia's 4th Division to Primera A, state titles, varsity captaincy and fundraising for Operation Smile.",
    langs: "English", tags: ["Portfolio", "Editorial", "Gallery", "College application"],
    es: {
      sector: "Marca personal", type: "Portafolio",
      tagline: "Una vida hecha de oportunidades aprovechadas.",
      desc: "Una segunda edición, más editorial, del portafolio de un estudiante-deportista, centrada en logros y una galería: de la 4.ª División de Bolivia a la Primera A, títulos estatales, la capitanía del equipo del colegio y la recaudación de fondos para Operation Smile.",
      langs: "Inglés", tags: ["Portafolio", "Editorial", "Galería", "Postulación universitaria"],
    },
  },
  {
    slug: "iker-torrico", group: "Portfolios", name: "Iker Torrico", sector: "Personal brand", type: "Portfolio",
    url: "https://ikertorrico-portfolio.vercel.app/",
    tagline: "Athlete. Performer. Builder.",
    desc: "A college portfolio for a competitive athlete, stage performer and young entrepreneur from La Paz: three sports, community projects, commercial sales work, and music with a live band.",
    langs: "English", tags: ["Portfolio", "Personal brand", "Media library", "College application"],
    es: {
      sector: "Marca personal", type: "Portafolio",
      tagline: "Deportista. Artista. Emprendedor.",
      desc: "Un portafolio universitario para un deportista competitivo, artista de escenario y joven emprendedor de La Paz: tres deportes, proyectos comunitarios, ventas comerciales y música con una banda en vivo.",
      langs: "Inglés", tags: ["Portafolio", "Marca personal", "Biblioteca de medios", "Postulación universitaria"],
    },
  },
  {
    slug: "dyes-grill", group: "Food & Hospitality", name: "D'Yes Grill", sector: "Restaurant", type: "Website",
    url: "https://dyes-grill.vercel.app/",
    tagline: "Real fire. Flavor that stays.",
    desc: "A bold, smoky site for a Santa Cruz grill: craft burgers, BBQ ribs smoked for hours, wings, lomitos and matambre on wooden boards. The full menu is one tap away, and customers build their order for delivery or pickup and send it straight to WhatsApp.",
    langs: "Spanish", tags: ["Restaurant", "Full menu", "WhatsApp ordering", "Delivery & pickup"],
    es: {
      sector: "Restaurante", type: "Sitio web",
      tagline: "Fuego de verdad. Sabor que se queda.",
      desc: "Un sitio intenso y ahumado para una parrilla cruceña: hamburguesas artesanales, costillas BBQ ahumadas por horas, alitas, lomitos y matambre en tabla. La carta completa está a un toque, y el cliente arma su pedido para delivery o para recoger y lo manda directo a WhatsApp.",
      langs: "Español", tags: ["Restaurante", "Carta completa", "Pedidos por WhatsApp", "Delivery y recojo"],
    },
  },
  {
    slug: "ame-coffee", group: "Food & Hospitality", name: "AMÉ Specialty Coffee", sector: "Café & bar", type: "Website",
    url: "https://ame-coffee-2.vercel.app/",
    tagline: "Love, laugh, live.",
    desc: "A warm site for a specialty coffee shop and bar with two branches in Santa Cruz, open from 07:00 to 23:00. It shows Bolivian specialty coffee from bean to latte art, signature cocktails, a menu with local flavor and acoustic nights every Friday.",
    langs: "Spanish", tags: ["Café", "Menu", "Two branches", "Events"],
    es: {
      sector: "Café y bar", type: "Sitio web",
      tagline: "¡Ama, ríe y vive!",
      desc: "Un sitio cálido para una cafetería de especialidad y bar con dos sucursales en Santa Cruz, abierta de 07:00 a 23:00. Muestra el café boliviano de especialidad del grano al latte art, coctelería de autor, una carta con sabor cruceño y noches acústicas cada viernes.",
      langs: "Español", tags: ["Cafetería", "Carta", "Dos sucursales", "Eventos"],
    },
  },
  {
    slug: "rosario-travels", group: "Travel & Hotels", name: "Rosario Travels", sector: "Travel", type: "Website",
    url: "https://rosario-travel.vercel.app/",
    tagline: "Journeys designed by people who were born there.",
    desc: "A cinematic site for a travel agency with 17 years in the Andes: private journeys to the Uyuni Salt Flat, Lake Titicaca, Machu Picchu and Patagonia. Full-screen destinations, signature itineraries, and Rosario AI, an assistant that helps plan the trip. In six languages.",
    langs: "EN · ES · PT · FR · DE · ZH", tags: ["Travel", "Itineraries", "AI assistant", "6 languages"],
    es: {
      sector: "Turismo", type: "Sitio web",
      tagline: "Viajes diseñados por quienes nacieron ahí.",
      desc: "Un sitio cinematográfico para una agencia con 17 años en los Andes: viajes privados al Salar de Uyuni, el Lago Titicaca, Machu Picchu y la Patagonia. Destinos a pantalla completa, itinerarios de autor y Rosario AI, un asistente que ayuda a planear el viaje. En seis idiomas.",
      langs: "EN · ES · PT · FR · DE · ZH", tags: ["Turismo", "Itinerarios", "Asistente con IA", "6 idiomas"],
    },
  },
  {
    slug: "rosario-hotels", group: "Travel & Hotels", name: "Hoteles Rosario", sector: "Hotels", type: "Website",
    url: "https://rosario-hotels.vercel.app/",
    tagline: "Four houses on the roof of the Andes.",
    desc: "A booking-first site for four eco-friendly, four-star hotels in Copacabana, Uyuni and La Paz. Each house has its own story, handcrafted Andean rooms and dining, and guests check availability right from the first screen to book direct.",
    langs: "English", tags: ["Hotels", "Direct booking", "Multi-property", "Storytelling"],
    es: {
      sector: "Hoteles", type: "Sitio web",
      tagline: "Cuatro casas en el techo de los Andes.",
      desc: "Un sitio pensado para reservar, de cuatro hoteles ecológicos de cuatro estrellas en Copacabana, Uyuni y La Paz. Cada casa tiene su propia historia, habitaciones andinas hechas a mano y gastronomía, y el huésped consulta disponibilidad desde la primera pantalla para reservar directo.",
      langs: "Inglés", tags: ["Hoteles", "Reserva directa", "Varias sedes", "Storytelling"],
    },
  },
  {
    slug: "ventura-mall", group: "Retail & Shopping", name: "Ventura Mall", sector: "Shopping mall", type: "Website",
    url: "https://ventura-mall.vercel.app/",
    tagline: "The mall Bolivia prefers.",
    desc: "The website for one of Bolivia's biggest malls: 110,000 m², 200+ stores, the Boulevard food court and 13 cinema screens including IMAX. Visitors browse stores and brands, restaurants, events and live music, with hours and directions always at hand.",
    langs: "Spanish", tags: ["Retail", "Store directory", "Events", "Cinema"],
    es: {
      sector: "Centro comercial", type: "Sitio web",
      tagline: "Somos el mall que Bolivia prefiere.",
      desc: "El sitio de uno de los malls más grandes de Bolivia: 110.000 m², más de 200 tiendas, el Boulevard gastronómico y 13 salas de cine con IMAX. El visitante recorre tiendas y marcas, restaurantes, eventos y música en vivo, con horarios y cómo llegar siempre a mano.",
      langs: "Español", tags: ["Retail", "Directorio de tiendas", "Eventos", "Cine"],
    },
  },
  {
    slug: "sarumadi", group: "Retail & Shopping", name: "Sarumadi SRL", sector: "Hardware & tools", type: "E-commerce",
    url: "https://sarumadi-srl.vercel.app/",
    tagline: "A world of solutions.",
    desc: "An online store and catalog for a Santa Cruz distributor of Truper, Pretul, Foset and more: 500+ products across tools, plumbing, electrical and industrial safety. Customers search, add to cart and confirm stock and delivery on WhatsApp, or visit the showroom.",
    langs: "Spanish", tags: ["E-commerce", "500+ products", "WhatsApp orders", "Showroom"],
    es: {
      sector: "Ferretería y herramientas", type: "E-commerce",
      tagline: "Un mundo de soluciones.",
      desc: "Una tienda online y catálogo para un distribuidor cruceño de Truper, Pretul, Foset y más: más de 500 productos en herramientas, grifería, electricidad y seguridad industrial. El cliente busca, agrega al carrito y confirma stock y entrega por WhatsApp, o visita el showroom.",
      langs: "Español", tags: ["E-commerce", "+500 productos", "Pedidos por WhatsApp", "Showroom"],
    },
  },
  {
    slug: "bencar", group: "Retail & Shopping", name: "BenCar", sector: "Consumer tech", type: "E-commerce",
    url: "https://bencar-store.vercel.app/",
    tagline: "The latest from Apple, at the price you're looking for.",
    desc: "An Apple-style store for a reseller of iPhone, Mac, iPad, Apple Watch, AirPods and Dyson. Product pages with specs and prices, trade-in of your old device, certified pre-owned from US$ 200, and door-to-door tech support.",
    langs: "Spanish", tags: ["E-commerce", "Product pages", "Trade-in", "Tech support"],
    es: {
      sector: "Tecnología", type: "E-commerce",
      tagline: "Lo último de Apple al precio que estás buscando.",
      desc: "Una tienda al estilo Apple para un revendedor de iPhone, Mac, iPad, Apple Watch, AirPods y Dyson. Fichas de producto con especificaciones y precios, tu equipo usado como parte de pago, seminuevos desde US$ 200 y servicio técnico puerta a puerta.",
      langs: "Español", tags: ["E-commerce", "Fichas de producto", "Parte de pago", "Servicio técnico"],
    },
  },
  {
    slug: "isotek", group: "Industry & Agro", name: "ISOTEK LATAM", sector: "Industrial engineering", type: "Website",
    url: "https://isotek-amber.vercel.app/",
    tagline: "One supplier, from engineering to commissioning.",
    desc: "A corporate site for an ISO 9001 industrial EPC company working in five countries: turnkey projects, switchboards and motor control centres built to IEC 61439, instrumentation and an Endress+Hauser calibration lab. Built to win tenders from oil, gas and food plants.",
    langs: "English", tags: ["B2B", "Industrial", "Case studies", "Lead generation"],
    es: {
      sector: "Ingeniería industrial", type: "Sitio web",
      tagline: "Un solo proveedor, de la ingeniería a la puesta en marcha.",
      desc: "Un sitio corporativo para una empresa EPC industrial con ISO 9001 que trabaja en cinco países: proyectos llave en mano, tableros y centros de control de motores bajo IEC 61439, instrumentación y un laboratorio de calibración Endress+Hauser. Hecho para ganar licitaciones de plantas de petróleo, gas y alimentos.",
      langs: "Inglés", tags: ["B2B", "Industrial", "Casos de éxito", "Captación de clientes"],
    },
  },
  {
    slug: "haciendas-urucu", group: "Industry & Agro", name: "Haciendas Urucú", sector: "Cattle genetics", type: "Website",
    url: "https://haciendas-urucu.vercel.app/",
    tagline: "Bolivia's productive Zebu.",
    desc: "A site for a breeder of Nelore, Polled Nelore and Sindi cattle raised in open fields in Santa Cruz. It proves the genetics with numbers and awards, from heifers pregnant at 14 months to 7 prizes at FexpoSIV 2026, and sells bulls, heifers and IVF embryos over WhatsApp.",
    langs: "Spanish", tags: ["Agro", "Genetics", "Awards", "WhatsApp sales"],
    es: {
      sector: "Genética bovina", type: "Sitio web",
      tagline: "El Cebú Productivo de Bolivia.",
      desc: "Un sitio para un criador de ganado Nelore, Nelore Mocho y Sindi seleccionado a campo en Santa Cruz. Demuestra la genética con números y premios, desde vaquillas preñadas a los 14 meses hasta 7 premios en FexpoSIV 2026, y vende toros, vaquillas y embriones FIV por WhatsApp.",
      langs: "Español", tags: ["Agro", "Genética", "Premios", "Ventas por WhatsApp"],
    },
  },
  {
    slug: "coded", group: "Education", name: "Coded", sector: "STEAM education", type: "Website",
    url: "https://coded-five.vercel.app/",
    tagline: "The world is the classroom.",
    desc: "A vibrant site for international STEAM programs for students aged 11 to 17 in Orlando, the UK and Tokyo. Each league leads to a hands-on final project, and parents see exactly how safety works: guardians, medical support and insurance.",
    langs: "Spanish", tags: ["Education", "Programs", "Parents", "Enrollment"],
    es: {
      sector: "Educación STEAM", type: "Sitio web",
      tagline: "El mundo es el aula.",
      desc: "Un sitio vibrante para programas STEAM internacionales para estudiantes de 11 a 17 años en Orlando, Reino Unido y Tokio. Cada liga termina en un proyecto final práctico, y los padres ven exactamente cómo funciona la seguridad: acompañantes, soporte médico y seguro.",
      langs: "Español", tags: ["Educación", "Programas", "Padres", "Inscripciones"],
    },
  },
  {
    slug: "chao-architecture", group: "Brands & Business", name: "Chao Architecture Studio", sector: "Architecture", type: "Website",
    url: "https://chao-architecture-studio.vercel.app/",
    tagline: "Award-winning architecture from Santa Cruz.",
    desc: "A quiet, image-led site for an architecture firm with 15+ years and 50+ projects, led by Sky Moon, the tower redefining the Santa Cruz skyline. Residential, commercial and sustainable work, the studio's philosophy, and a clear path to start a project.",
    langs: "English · Spanish", tags: ["Architecture", "Portfolio", "Art direction", "Bilingual"],
    es: {
      sector: "Arquitectura", type: "Sitio web",
      tagline: "Arquitectura premiada desde Santa Cruz.",
      desc: "Un sitio sereno y guiado por la imagen para un estudio de arquitectura con más de 15 años y 50 proyectos, encabezado por Sky Moon, la torre que redefine el horizonte de Santa Cruz. Obra residencial, comercial y sostenible, la filosofía del estudio y un camino claro para empezar un proyecto.",
      langs: "Inglés · Español", tags: ["Arquitectura", "Portafolio", "Dirección de arte", "Bilingüe"],
    },
  },
  {
    slug: "aussie-fitness", group: "Health & Fitness", name: "Aussie Fitness", sector: "Fitness · Recipes", type: "Website",
    url: "https://aussiefit.vercel.app/",
    tagline: "Eat the food you crave.",
    desc: "A site for a fitness creator's high-protein \"fakeaway\" recipes: burgers, pizza and kebabs rebuilt with fewer calories and full macros. Real results lead the story, like Dez, who lost 60 kg, and readers move on to meal plans and ebooks.",
    langs: "English", tags: ["Fitness", "Recipes", "Macros", "Ebooks"],
    es: {
      sector: "Fitness · Recetas", type: "Sitio web",
      tagline: "Come lo que se te antoja.",
      desc: "Un sitio para las recetas \"fakeaway\" altas en proteína de un creador fitness: hamburguesas, pizza y kebabs rehechos con menos calorías y macros completos. Los resultados reales abren la historia, como Dez, que bajó 60 kg, y el lector pasa a planes de comida y ebooks.",
      langs: "Inglés", tags: ["Fitness", "Recetas", "Macros", "Ebooks"],
    },
  },
];

// "Start a project" funnel: step 01 services and step 02 extras.
const SERVICES = [
  { id: "website", en: ["Website", "Brand, business or corporate site"], es: ["Sitio web", "Sitio de marca, negocio o corporativo"] },
  { id: "landing", en: ["Landing page", "One page built to convert"], es: ["Landing page", "Una página hecha para convertir"] },
  { id: "shop", en: ["Online shop", "Catalog, cart, WhatsApp or online orders"], es: ["Tienda online", "Catálogo, carrito, pedidos por WhatsApp u online"] },
  { id: "app", en: ["Web app · PWA", "Installs from the browser, works offline"], es: ["App web · PWA", "Se instala desde el navegador y funciona sin conexión"] },
  { id: "saas", en: ["SaaS & dashboards", "POS, booking, school or internal systems"], es: ["SaaS y paneles", "Punto de venta, reservas, colegios o sistemas internos"] },
  { id: "ai", en: ["AI assistant", "A chatbot trained on your business"], es: ["Asistente con IA", "Un chatbot entrenado con tu negocio"] },
  { id: "portfolio", en: ["Portfolio", "Personal brand or college application"], es: ["Portafolio", "Marca personal o postulación universitaria"] },
  { id: "brand", en: ["Brand & story", "Identity, copy, motion and video"], es: ["Marca e historia", "Identidad, textos, animación y video"] },
];
const EXTRAS = [
  { en: "WhatsApp ordering & booking", es: "Pedidos y reservas por WhatsApp" },
  { en: "AI assistant", es: "Asistente con IA" },
  { en: "Online payments", es: "Pagos online" },
  { en: "Bookings & calendar", es: "Reservas y calendario" },
  { en: "CMS to edit content", es: "CMS para editar contenido" },
  { en: "SEO & performance", es: "SEO y rendimiento" },
  { en: "Copywriting", es: "Redacción de textos" },
  { en: "Logo & brand identity", es: "Logo e identidad de marca" },
  { en: "Motion & video", es: "Animación y video" },
];

const TICKER = [
  { en: `${PROJECTS.length} projects live and counting`, es: `${PROJECTS.length} proyectos en línea y contando` },
  { en: "Now booking projects for the new year", es: "Agenda abierta para proyectos del nuevo año" },
  { en: "FuerzaFlow ships in 6 languages", es: "FuerzaFlow está disponible en 6 idiomas" },
  { en: "SCCS SIS search answers in under 72 ms", es: "La búsqueda de SCCS SIS responde en menos de 72 ms" },
  { en: "Fogo de Chão Ventura Sur takes reservations in 6 languages", es: "Fogo de Chão Ventura Sur recibe reservas en 6 idiomas" },
  { en: "RestoBar OS sends the day's close to WhatsApp", es: "RestoBar OS envía el cierre del día por WhatsApp" },
  { en: "Haras La Alhambra welcomes Spirit, its AI assistant", es: "Haras La Alhambra da la bienvenida a Spirit, su asistente con IA" },
];

// Interface text generated by this script. Static page text is in i18n.js.
const UI = {
  en: {
    groups: { "Food & Hospitality": "Food & Hospitality", "Travel & Hotels": "Travel & Hotels", "Retail & Shopping": "Retail & Shopping", "Industry & Agro": "Industry & Agro", Education: "Education", "Apps & SaaS": "Apps & SaaS", "Health & Fitness": "Health & Fitness", "Brands & Business": "Brands & Business", Portfolios: "Portfolios" },
    ctaTile: "Your project<br><em>could be here.</em>", start: "Start a project", open: "Open",
    cardAlt: (n) => `${n} website`, shotAlt: (n) => `Screenshot of the ${n} website`,
    type: "Type", sector: "Sector", languages: "Languages", liveAt: "Live at",
    canvasView: ["Canvas view", "Canvas"], listView: ["List view", "List"], readCase: "Read the case study →",
    drag: "Drag to explore ↔", swipe: "Swipe to explore",
    opening: "Opening WhatsApp…", needService: "Pick a service to continue.", needName: "Add your name so I know who's writing.",
    hi: "Hi Marvz! 👋", want: "*I'd like to start a project*", service: "Service", extras: "Extras", timeline: "Timeline",
    budget: "Budget", name: "Name", business: "Business", thanks: "Thanks!", from: "From", none: "None",
  },
  es: {
    groups: { "Food & Hospitality": "Gastronomía", "Travel & Hotels": "Viajes y hoteles", "Retail & Shopping": "Comercio y retail", "Industry & Agro": "Industria y agro", Education: "Educación", "Apps & SaaS": "Apps y SaaS", "Health & Fitness": "Salud y fitness", "Brands & Business": "Marcas y empresas", Portfolios: "Portafolios" },
    ctaTile: "Tu proyecto<br><em>podría estar aquí.</em>", start: "Empezar un proyecto", open: "Abierto",
    cardAlt: (n) => `Sitio web de ${n}`, shotAlt: (n) => `Captura del sitio web de ${n}`,
    type: "Tipo", sector: "Sector", languages: "Idiomas", liveAt: "En línea en",
    canvasView: ["Vista lienzo", "Lienzo"], listView: ["Vista lista", "Lista"], readCase: "Leer el caso de estudio →",
    drag: "Arrastra para explorar ↔", swipe: "Desliza para explorar",
    opening: "Abriendo WhatsApp…", needService: "Elige un servicio para continuar.", needName: "Agrega tu nombre para saber quién escribe.",
    hi: "¡Hola Marvz! 👋", want: "*Quiero empezar un proyecto*", service: "Servicio", extras: "Extras", timeline: "Plazo",
    budget: "Presupuesto", name: "Nombre", business: "Negocio", thanks: "¡Gracias!", from: "De", none: "Ninguno",
  },
};

/* ========================================================================== */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, "0");
const mod = (a, n) => ((a % n) + n) % n;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const img = (p, size = "sm") => `/assets/work/${p.slug}${size === "lg" ? "" : "-" + size}.webp`;

// Vercel Web Analytics custom event (queued until the script loads; a no-op locally).
const track = (name, data) => { try { window.va && window.va("event", data ? { name, data } : { name }); } catch (e) {} };
const caseUrl = (slug) => `/work/${slug}/${lang === "es" ? "es/" : ""}`;

// Language: "en" or "es". t() reads interface text, loc() a project in the current language.
let lang = "en";
const t = (k) => UI[lang][k];
const loc = (p) => (lang === "es" && p.es ? { ...p, ...p.es } : p);


/* ---------- Index (grouped by sector) ---------- */
// Each project sets its group; anything unknown lands in "Brands & Business".
const groupKey = (p) => (GROUP_ORDER.includes(p.group) ? p.group : "Brands & Business");
const GROUP_ORDER = ["Food & Hospitality", "Travel & Hotels", "Retail & Shopping", "Industry & Agro", "Education", "Apps & SaaS", "Health & Fitness", "Brands & Business", "Portfolios"];
// Number projects in index order so 01, 02, 03… reads top to bottom.
PROJECTS.map((p, k) => [GROUP_ORDER.indexOf(groupKey(p)), k, p]).sort((a, b) => a[0] - b[0] || a[1] - b[1])
  .forEach(([, , p], i) => (p.i = i));
PROJECTS.sort((a, b) => a.i - b.i);

// Canvas order: round-robin across categories (a restaurant, then a hotel, then a store…).
const CANVAS_ORDER = (() => {
  const queues = GROUP_ORDER.map((g) => PROJECTS.filter((p) => groupKey(p) === g)).filter((q) => q.length);
  const out = [];
  while (queues.some((q) => q.length)) queues.forEach((q) => q.length && out.push(q.shift()));
  return out;
})();

function buildIndex() {
  const body = $("#indexBody");
  $("#indexCount").textContent = pad(PROJECTS.length);
  const groups = {};
  PROJECTS.forEach((p) => (groups[groupKey(p)] ||= []).push(p));
  body.innerHTML = GROUP_ORDER.filter((g) => groups[g]).map((g) => `
    <div class="index__group">
      <h3 class="mono">${t("groups")[g]}</h3>
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
  $("#listGrid").innerHTML = PROJECTS.map(loc).map((p) => `
    <button class="card" type="button" data-i="${p.i}">
      <div class="tile__img"><img src="${img(p)}" alt="${t("cardAlt")(p.name)}" loading="lazy" width="800" height="500"></div>
      <div class="tile__label"><span class="tile__name">${p.name}</span><span class="tile__meta mono">${p.type}</span></div>
      <p>${p.tagline}</p>
    </button>`).join("");
  $$("#listGrid .card").forEach((c) => c.addEventListener("click", () => openProject(+c.dataset.i)));
  $("#casesGrid").innerHTML = CASE_STUDIES.map((s) => loc(PROJECTS.find((p) => p.slug === s))).map((p) => `
    <a class="case-card" href="${caseUrl(p.slug)}" data-case="${p.slug}">
      <div class="tile__img"><img src="${img(p)}" alt="${t("cardAlt")(p.name)}" loading="lazy" width="800" height="500"></div>
      <span class="mono">${p.sector}</span>
      <strong>${p.name}</strong>
      <p>${p.tagline}</p>
      <span class="case-card__go mono">${t("readCase")}</span>
    </a>`).join("");
}

/* ---------- Ticker ---------- */
function buildTicker() {
  const row = TICKER.map((x) => `<span>${x[lang]}</span><i>●</i>`).join("");
  $("#ticker").innerHTML = row + row;
}

/* ---------- Infinite canvas ---------- */
const stage = $("#stage");
const world = $("#world");
// Three rows, and as many columns as the projects need (plus one "your project" tile).
const ROWS = 3, COLS = Math.ceil((PROJECTS.length + 1) / ROWS);
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
  // Deal projects out one category at a time so neighbours vary; spare slots become "your project" tiles.
  slots.forEach((s, k) => (s.p = CANVAS_ORDER[k] || null));

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
            <div class="tile__label"><span class="tile__name">${s.p.name}</span><span class="tile__meta mono">${pad(s.p.i + 1)} · ${loc(s.p).type}</span></div>`;
        } else {
          el.dataset.cta = "1";
          el.innerHTML = `<div class="tile__img"><span>${t("ctaTile")}</span></div>
            <div class="tile__label"><span class="tile__name">${t("start")}</span><span class="tile__meta mono">${pad(PROJECTS.length + 1)} · ${t("open")}</span></div>`;
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
  const p = loc(PROJECTS[mod(i, PROJECTS.length)]);
  current = p.i;
  if (!drawerOpen()) lastFocus = document.activeElement;
  cursor.classList.remove("is-on");
  $("#dIndex").textContent = `${pad(p.i + 1)} / ${pad(PROJECTS.length)}`;
  const im = $("#dImg");
  im.src = img(p, "lg"); im.alt = t("shotAlt")(p.name);
  $("#dShot").href = p.url;
  $("#dSector").textContent = p.sector;
  $("#dTitle").textContent = p.name;
  $("#dTagline").textContent = p.tagline;
  $("#dDesc").textContent = p.desc;
  $("#dMeta").innerHTML = [
    [t("type"), p.type], [t("sector"), p.sector], [t("languages"), p.langs], [t("liveAt"), new URL(p.url).host],
  ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  $("#dTags").innerHTML = p.tags.map((t) => `<li>${t}</li>`).join("");
  $("#dLink").href = p.url;
  const dc = $("#dCase");
  dc.hidden = !CASE_STUDIES.includes(p.slug);
  dc.href = caseUrl(p.slug);
  $(".drawer__scroll").scrollTop = 0;
  track("Project Open", { project: p.slug });
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
  history.replaceState(null, "", location.pathname + location.search);
  lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
}
$$("[data-step]").forEach((b) => b.addEventListener("click", () => openProject(current + +b.dataset.step)));
drawer.querySelector("[data-close]").addEventListener("click", closeProject);
scrim.addEventListener("click", closeProject);

/* ---------- Overlays (About / Pricing / Contact) ---------- */
function openOverlay(id, from) {
  if (id === "contact") track("Funnel Open", { from: from || "link" });
  if (id === "pricing") track("Pricing Open", { from: from || "link" });
  closeProject();
  document.body.classList.remove("index-open");
  $$(".overlay.is-open").forEach((o) => o.id !== id && closeOverlay(o));
  const o = $("#" + id);
  o.classList.add("is-open");
  o.setAttribute("aria-hidden", "false");
  o.scrollTop = 0;
  setTimeout(() => (id === "contact" && $(".step.is-on input") || o.querySelector(".close")).focus({ preventScroll: true }), 300);
}
// Where an overlay was opened from, for analytics.
function openerName(el) {
  if (el.id === "waFloat") return "whatsapp-button";
  if (el.closest(".top")) return "header";
  if (el.closest(".hero")) return "hero";
  if (el.closest(".list")) return "list";
  const o = el.closest(".overlay");
  return o ? o.id : "page";
}
function closeOverlay(o) {
  o.classList.remove("is-open");
  o.setAttribute("aria-hidden", "true");
}
document.addEventListener("click", (e) => {
  const opener = e.target.closest("[data-open]");
  if (opener) return openOverlay(opener.dataset.open, openerName(opener));
  const out = e.target.closest("#dLink, #dShot, #dCase");
  if (out && drawerOpen()) track(out.id === "dCase" ? "Case Study Click" : "Live Site Click", { project: PROJECTS[current].slug });
  const cc = e.target.closest("[data-case]");
  if (cc) track("Case Study Click", { project: cc.dataset.case, from: "list" });
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
  renderViewBtn();
  document.body.classList.remove("index-open");
  scrollTo(0, 0);
});

/* ---------- Contact: WhatsApp funnel ---------- */
const funnel = $("#funnel");
const F = { step: 0, service: null, extras: new Set(), langs: 1 };
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function buildFunnel() {
  renderFunnelOptions();
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
  $("#waSend").addEventListener("click", () => {
    $("#fStatus").textContent = t("opening");
    track("Funnel WhatsApp", { service: F.service ? F.service.id : "none", budget: new FormData(funnel).get("budget") || "" });
  });
  goStep(0);
}

function onFunnelInput(e) {
  const el = e.target;
  if (el.name === "service") F.service = SERVICES.find((s) => s.id === el.value);
  if (el.name === "extra") el.checked ? F.extras.add(+el.value) : F.extras.delete(+el.value);
  if (el.name === "name" && el.value.trim()) el.removeAttribute("aria-invalid");
  $("#fStatus").textContent = "";
  renderMessage();
  syncSteps();
}

// Returns [stepToFallBackTo, message] when step n can't be reached yet.
function stepError(n) {
  if (n >= 1 && !F.service) return [0, t("needService")];
  if (n >= 3 && !funnel.elements.name.value.trim()) return [2, t("needName")];
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
  if (n > F.step) track("Funnel Step", { step: n + 1 });
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
    service: F.service ? F.service[lang][0] : "",
    start: d.start || "", timeline: d.timeline || "", budget: d.budget || "",
    extras: [...F.extras].sort((a, b) => a - b).map((k) => EXTRAS[k][lang]), langs: F.langs,
    name: (d.name || "").trim(), company: (d.company || "").trim(),
    link: (d.link || "").trim(), message: (d.message || "").trim(),
  };
}

function messageLines(d) {
  const L = [t("hi"), t("want"), ""];
  if (d.service) L.push(`🧩 *${t("service")}:* ${d.service} (${d.start.toLowerCase()})`);
  if (d.extras.length) L.push(`✨ *${t("extras")}:* ${d.extras.join(", ")}`);
  if (d.langs > 1) L.push(`🌎 *${t("languages")}:* ${d.langs}`);
  L.push(`📅 *${t("timeline")}:* ${d.timeline}`, `💰 *${t("budget")}:* ${d.budget}`);
  if (d.name || d.company || d.link) L.push("");
  if (d.name) L.push(`🙋 *${t("name")}:* ${d.name}${d.company ? ` · ${d.company}` : ""}`);
  else if (d.company) L.push(`🏢 *${t("business")}:* ${d.company}`);
  if (d.link) L.push(`🔗 ${d.link}`);
  if (d.message) L.push("", d.message);
  L.push("", t("thanks"));
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
    [t("service"), d.service ? `${d.service} · ${d.start}` : "-"],
    [t("extras"), d.extras.join(", ") || t("none")],
    [t("languages"), d.langs], [t("timeline"), d.timeline], [t("budget"), d.budget],
    [t("from"), [d.name, d.company].filter(Boolean).join(" · ") || "-"],
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

/* ---------- Language (EN / ES) ---------- */
// Order: ?lang= in the URL, then the visitor's last choice, then the browser language.
function initialLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "en" || q === "es") return q;
  try { const saved = localStorage.getItem("lang"); if (saved === "en" || saved === "es") return saved; } catch (e) {}
  return /^es\b/i.test(navigator.language || "") ? "es" : "en";
}

function renderViewBtn() {
  const [long, short] = t(document.body.classList.contains("is-list") ? "canvasView" : "listView");
  viewBtn.innerHTML = `<span class="hide-sm">${long}</span><span class="show-sm">${short}</span>`;
}

function renderFunnelOptions() {
  $("#services").innerHTML = SERVICES.map((s) => `
    <label class="choice"><input type="radio" name="service" value="${s.id}"${F.service && F.service.id === s.id ? " checked" : ""}>
      <span class="choice__name">${s[lang][0]}</span><span class="choice__note">${s[lang][1]}</span></label>`).join("");
  $("#extras").innerHTML = EXTRAS.map((x, k) => `
    <label class="chip"><input type="checkbox" name="extra" value="${k}"${F.extras.has(k) ? " checked" : ""}><span>${x[lang]}</span></label>`).join("");
}

function setLang(next, { boot = false } = {}) {
  lang = next === "es" ? "es" : "en";
  document.documentElement.lang = lang;
  applyStaticText(lang); // i18n.js: page text, labels, placeholders, title and meta
  $$("[data-count]").forEach((el) => (el.textContent = PROJECTS.length));
  $("#heroHint").textContent = t(matchMedia("(hover: none)").matches ? "swipe" : "drag");
  $$("[data-setlang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setlang === lang)));
  renderViewBtn();
  const canonical = $('link[rel="canonical"]');
  if (canonical) canonical.href = `${location.origin}/${lang === "es" ? "?lang=es" : ""}`;
  if (boot) return;

  try { localStorage.setItem("lang", lang); } catch (e) {}
  track("Language Switch", { to: lang });
  const u = new URL(location.href);
  if (lang === "es") u.searchParams.set("lang", "es"); else u.searchParams.delete("lang");
  history.replaceState(null, "", u);

  buildIndex();
  buildList();
  buildTicker();
  renderFunnelOptions();
  $("#fStatus").textContent = "";
  renderMessage();
  syncSteps();
  if (typeof renderPricing === "function") renderPricing();
  layout();
  if (drawerOpen()) openProject(current);
}
$$("[data-setlang]").forEach((b) => b.addEventListener("click", () => b.dataset.setlang !== lang && setLang(b.dataset.setlang)));

/* ---------- Boot ---------- */
setLang(initialLang(), { boot: true });
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
  if (location.hash === "#pricing") return openOverlay("pricing", "link");
  if (location.hash === "#start") return openOverlay("contact", "link");
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
      if (slug === "pricing") return openOverlay("pricing", document.referrer.includes("/work/") ? "case-study" : "link");
      if (slug === "start") return openOverlay("contact", document.referrer.includes("/work/") ? "case-study" : "link");
      const p = PROJECTS.find((x) => x.slug === slug);
      if (p) setTimeout(() => focusTile(p.i), 300);
    }
  })();
})();
