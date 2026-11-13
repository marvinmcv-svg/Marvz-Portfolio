/* Writes the SEO pieces that come from the PROJECTS list in app.js:
 *   - JSON-LD structured data in <head>
 *   - a <noscript> list of every project (what crawlers and no-JS visitors see)
 *   - sitemap.xml
 * Run after editing PROJECTS:  node scripts/seo.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SITE = "https://marvz-portfolio.vercel.app";
const app = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
const src = app.slice(app.indexOf("const PROJECTS"), app.indexOf("\n];", app.indexOf("const PROJECTS")) + 3);
const PROJECTS = new Function(`${src}; return PROJECTS;`)();

const { CASES } = require("./case-studies.js");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#studio`,
      name: "Marvz Studio",
      url: `${SITE}/`,
      image: `${SITE}/assets/og.jpg`,
      logo: `${SITE}/assets/icon-512.png`,
      description: "Websites, web apps and digital products for schools, restaurants, startups and growing brands.",
      areaServed: "Worldwide",
      knowsAbout: ["Web design", "Web development", "Web apps", "E-commerce", "Multilingual websites", "AI assistants"],
      sameAs: ["https://github.com/marvinmcv-svg"],
    },
    {
      "@type": "ItemList",
      name: "Selected work",
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          url: p.url,
          description: p.desc,
          genre: p.sector,
          image: `${SITE}/assets/work/${p.slug}.webp`,
          creator: { "@id": `${SITE}/#studio` },
        },
      })),
    },
  ],
};

const jsonld = `<script type="application/ld+json">\n${JSON.stringify(ld, null, 1).replace(/</g, "\\u003c")}\n</script>`;
const noscript = `<noscript>
<section class="noscript">
  <h2>Selected work</h2>
  <ul>
${PROJECTS.map((p) => `    <li><a href="${esc(p.url)}">${esc(p.name)}</a> · ${esc(p.sector.includes(p.type) ? p.sector : `${p.type} · ${p.sector}`)}. ${esc(p.desc)}</li>`).join("\n")}
  </ul>
  <h2>Case studies</h2>
  <ul>
${CASES.map((c) => `    <li><a href="/work/${c.slug}/">${esc(c.name)}</a> · ${esc(c.en.plain)}</li>`).join("\n")}
  </ul>
</section>
</noscript>`;

const swap = (html, tag, content) => {
  const re = new RegExp(`(<!-- ${tag}:start -->)[\\s\\S]*?(<!-- ${tag}:end -->)`);
  if (!re.test(html)) throw new Error(`Missing <!-- ${tag}:start/end --> markers in index.html`);
  return html.replace(re, `$1\n${content}\n$2`);
};

const file = path.join(ROOT, "index.html");
let html = fs.readFileSync(file, "utf8");
html = swap(html, "jsonld", jsonld);
html = swap(html, "noscript", noscript);
fs.writeFileSync(file, html);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
${CASES.flatMap((c) => ["", "es/"].map((l) => `  <url><loc>${SITE}/work/${c.slug}/${l}</loc><lastmod>${today}</lastmod><changefreq>yearly</changefreq><priority>0.8</priority></url>`)).join("\n")}
</urlset>
`);
console.log(`Wrote JSON-LD and <noscript> for ${PROJECTS.length} projects, and sitemap.xml with ${CASES.length * 2} case-study pages`);
