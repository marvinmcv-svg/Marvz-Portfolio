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

- `CONFIG`: contact email, WhatsApp, Instagram, LinkedIn and GitHub. The "Start a project" form opens the visitor's mail app (or WhatsApp) using these.
- `PROJECTS`: one entry per project (name, sector, type, url, tagline, description, languages, tags).
- `TICKER`: the scrolling news line at the bottom.

Screenshots are in `assets/work/<slug>.webp` (1440×900, used in the drawer) and `<slug>-sm.webp` (800×500, used on the canvas). To add a project, add the two images and a `PROJECTS` entry with the same `slug`.

## Features

- An infinite, wrap-around canvas you can drag, scroll or move with the arrow keys. It has inertia and a gentle idle drift.
- A project index grouped by sector. Hovering a project highlights its tile, and clicking flies the canvas to it.
- A project drawer with prev/next buttons and deep links (`/#helibol`).
- About and Start a project overlays, a news ticker, and a List view.
- Responsive layout. Animations are reduced when the visitor has `prefers-reduced-motion` turned on.
