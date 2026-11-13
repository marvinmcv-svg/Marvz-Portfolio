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
- `PROJECTS`: one entry per project (name, sector, type, url, tagline, description, languages, tags), with the Spanish version of the text in its `es` block.
- `TICKER`: the scrolling news line at the bottom, in English and Spanish.
- `UI`: other interface text that the script writes, including the WhatsApp message wording.

Prices live at the top of `pricing.js`:

- `PRICING`: the base-site price (Bs 3,500) and the exchange rate used for the US$ view. Update the rate every few months.
- `ADDONS`: every build-your-own add-on, with its price in bolivianos (`monthly` for recurring fees, `qty` for ones that can be added more than once), in English and Spanish.
- `CARE`: the monthly care plans.
- `PACKAGES`: the three packages (Presence, Growth, Flagship), what each includes, and their payment terms. The "Value separately" price and the savings percentage are worked out from the add-on prices, so they stay correct when you change a price.

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
- A Pricing overlay (also at `/#pricing`) with three packages, a build-your-own list of add-ons, monthly care plans, and a live quote in Bs or US$. The quote has rush delivery and payment-plan options, and sends the full breakdown to WhatsApp.
- An About overlay, a news ticker, and a List view.
- Responsive layout. Animations are reduced when the visitor has `prefers-reduced-motion` turned on.

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

An end-to-end Playwright check runs the canvas, drawer, index, list view, About, Pricing and the whole WhatsApp funnel on desktop, laptop, tablet and three phones. It then repeats the key flows in Spanish and switches between the two languages:

```bash
python3 -m http.server 4173 &
node tests/e2e.js            # MOTION=1 to run with animations on
```

Screenshots are saved to `tests/screenshots/`.

## Deploy

The Vercel project is connected to this repo, so every push deploys automatically.
