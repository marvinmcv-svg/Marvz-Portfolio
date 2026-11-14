# Marvz Studio · Portfolio

A bird's-eye, draggable canvas of every website and app I've built. Visitors can open any project in a detail drawer and click through to the live site. The layout is inspired by agency "labs" portfolios.

It's static HTML, CSS and JS with no build step, so it deploys as-is to Vercel, Netlify or GitHub Pages.

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Edit content

Everything lives at the top of `app.js`:

- `CONFIG`: the WhatsApp number the "Start a project" funnel sends to (currently +591 77165787), plus optional email, Instagram, LinkedIn and GitHub links.
- `SERVICES` and `EXTRAS`: the choices in steps 01 and 02 of the funnel, in English and Spanish.
- `PROJECTS`: one entry per project (name, category, sector, type, url, tagline, description, languages, tags), with the Spanish version of the text in its `es` block. `group` is the category it's listed under in the index: Food & Hospitality, Travel & Hotels, Retail & Shopping, Industry & Agro, Education, Apps & SaaS, Health & Fitness, Brands & Business or Portfolios (`GROUP_ORDER` sets the order, `UI.groups` the Spanish names). The canvas grows to fit however many projects there are and mixes categories so neighbouring tiles differ.
- `TICKER`: the scrolling news line at the bottom, in English and Spanish.
- `UI`: other interface text that the script writes, including the WhatsApp message wording.

The Pricing page is built by `pricing.js` (styles in `pricing.css`). Everything you'd edit is at the top of that file:

- `PRICING`: the base-site price (Bs 3,500) and the exchange rate used for the US$ view. Update the rate every few months.
- `PACKAGES`: the three packages (Presence, Growth, Flagship): price, delivery time, what's included, the four or five highlights shown on each card, and which case study each one links to.
- `ADDONS`: every build-your-own add-on, with its price in bolivianos (`monthly` for recurring fees, `qty` for ones that can be added more than once) and one line that sells it. `popular: true` puts it on the "Popular" tab the list opens on.
- `CARE`: the monthly care plans.
- `C` and `CALC_FIELDS`: the savings calculator's starting values and slider ranges (average sale, extra customers a month, hours a week spent on repeat questions, value of an hour). It shows extra sales, time saved, how fast the chosen package pays for itself and the first-year return.
- `CLIENTS`: the names in the "Trusted by" strip.
- `PT`: every other line of text on the page (headline, how it works, promises, FAQ), in English and Spanish.

The "bought separately" price and the savings percentage are worked out from the add-on prices, so they stay correct when you change a price.

Screenshots are in `assets/work/`: `<slug>.webp` (1440×900, used in the drawer), plus `<slug>-sm.webp` (800×500) and `<slug>-xs.webp` (480×300) for the canvas, where phones and high-density screens pick the right size. To add a project, add the three images and a `PROJECTS` entry with the same `slug`, then run:

```bash
node scripts/seo.js
```

This rewrites the structured data and the crawlable project list in `index.html`, and updates `sitemap.xml`.

## Features

- An infinite, wrap-around canvas you can drag, scroll or move with the arrow keys. It has inertia and a gentle idle drift.
- A project index grouped by sector. Hovering a project highlights its tile, and clicking flies the canvas to it.
- A project drawer with prev/next buttons and deep links (`/#helibol`).
- A four-step "Start a project" funnel (what you need, details, about you, send). A phone mock-up previews the WhatsApp message live, and the last step opens WhatsApp with the message ready to send. A floating WhatsApp button opens the funnel too.
- A Pricing page (also at `/#pricing`) built to sell: a headline and proof, three packages with the recommended one highlighted, how it works, a build-your-own list of add-ons with monthly care plans, a live quote in Bs or US$ that goes to WhatsApp, an FAQ, and a "help me choose" button.
- An About overlay, a news ticker, and a List view.
- Responsive layout. Animations are reduced when the visitor has `prefers-reduced-motion` turned on.

## Case studies

Three projects have a full case study page: Haras La Alhambra, Fogo de Chão Ventura Sur and RestoBar OS. Each page is at `/work/<slug>/`, with a Spanish version at `/work/<slug>/es/`.

- The text for both languages is in the `CASES` list at the top of `scripts/case-studies.js`. Edit it there, then run:

  ```bash
  node scripts/case-studies.js
  node scripts/seo.js
  ```

  The first command rewrites the pages in `work/`, and the second adds them to `sitemap.xml`.
- Extra screenshots are in `assets/case/`, and the share images are `assets/case/<slug>-og.jpg`.
- On the main site, the case studies appear at the top of the List view, and as a "Read the case study" button in the project drawer. That button shows for the projects listed in `CASE_STUDIES` at the top of `app.js`.
- To add a case study, add an entry to `CASES` and its slug to `CASE_STUDIES`, then run both commands.

## Analytics

The site loads Vercel Web Analytics on the live site (not on localhost). For data to show up, open the project in the Vercel dashboard, go to **Analytics** and click **Enable**.

Page views (including each case study page) are counted on every Vercel plan. The site also sends these custom events, which show up under Analytics → Events on plans that include custom events:

| Event | When | Extra data |
| --- | --- | --- |
| Project Open | A project drawer opens | project |
| Live Site Click / Case Study Click | A link to the live site or a case study is clicked | project |
| Pricing Open | The Pricing overlay opens | from (header, hero, list, link, case-study) |
| Package Chosen / Add-on Added | A package or add-on is picked | package / addon |
| Quote WhatsApp / Quote Copied | The pricing quote is sent or copied | package, total |
| Funnel Open | "Start a project" opens | from |
| Funnel Step | The visitor reaches step 2, 3 or 4 | step |
| Funnel WhatsApp | The funnel's "Send on WhatsApp" is clicked | service, budget |
| Language Switch | EN/ES is switched | to |
| Case Live Site / Case Pricing / Case Start Project | Buttons on a case study page | project |

To see how many visitors open the funnel compared with how many send it, compare **Funnel Open** with **Funnel WhatsApp**.

## English and Spanish

The whole site, including the WhatsApp message, is in English and Spanish. Visitors whose browser is set to Spanish get Spanish automatically. Anyone can switch with the EN/ES button in the header, and the site remembers their choice.

- Share `https://marvz-portfolio.vercel.app/?lang=es` to open the Spanish version directly.
- Static page text is English in `index.html`. Elements opt in with `data-i18n="key"` (or `data-i18n-attr` for labels and placeholders), and the Spanish text for each key is in `i18n.js`.
- Project text and other script-written text are in `app.js`, as described above.
- If you change some English text in `index.html`, update the matching key in `i18n.js` too.

## SEO and sharing

- `assets/og.jpg` is the 1200×630 preview image shown when the link is shared on WhatsApp, iMessage, LinkedIn or X.
- `index.html` has a canonical URL, Open Graph and Twitter tags, and JSON-LD (the studio plus every project). It also has a `<noscript>` list of all projects, which search engines and visitors without JavaScript see.
- `robots.txt`, `sitemap.xml` and `site.webmanifest` (home-screen icons) are in the root.
- `vercel.json` caches `/assets` for a week and adds basic security headers.
- If you move to a custom domain, replace `marvz-portfolio.vercel.app` in `index.html`, `robots.txt` and `scripts/seo.js`, then run `node scripts/seo.js`.

## Test

An end-to-end Playwright check runs the canvas, drawer, index, list view, About, Pricing, the case studies, the analytics events and the whole WhatsApp funnel on desktop, laptop, tablet and three phones. It then repeats the key flows in Spanish and switches between the two languages:

```bash
python3 -m http.server 4173 &
node tests/e2e.js            # MOTION=1 to run with animations on
```

Screenshots are saved to `tests/screenshots/`.

## Deploy

The Vercel project is connected to this repo, so every push deploys automatically.
