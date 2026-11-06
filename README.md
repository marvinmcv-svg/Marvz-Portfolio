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
- `SERVICES` and `EXTRAS`: the choices in steps 01 and 02 of the funnel.
- `PROJECTS`: one entry per project (name, sector, type, url, tagline, description, languages, tags).
- `TICKER`: the scrolling news line at the bottom.

Screenshots are in `assets/work/<slug>.webp` (1440×900, used in the drawer) and `<slug>-sm.webp` (800×500, used on the canvas). To add a project, add the two images and a `PROJECTS` entry with the same `slug`.

## Features

- An infinite, wrap-around canvas you can drag, scroll or move with the arrow keys. It has inertia and a gentle idle drift.
- A project index grouped by sector. Hovering a project highlights its tile, and clicking flies the canvas to it.
- A project drawer with prev/next buttons and deep links (`/#helibol`).
- A four-step "Start a project" funnel (what you need, details, about you, send). A phone mock-up previews the WhatsApp message live, and the last step opens WhatsApp with the message ready to send. A floating WhatsApp button opens the funnel too.
- An About overlay, a news ticker, and a List view.
- Responsive layout. Animations are reduced when the visitor has `prefers-reduced-motion` turned on.

## Test

An end-to-end Playwright check runs the canvas, drawer, index, list view, About and the whole WhatsApp funnel on desktop, laptop, tablet and three phones:

```bash
python3 -m http.server 4173 &
node tests/e2e.js            # MOTION=1 to run with animations on
```

Screenshots are saved to `tests/screenshots/`.

## Deploy

The Vercel project is connected to this repo, so every push deploys automatically.
