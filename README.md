# seergiromero.github.io

Personal technical portfolio.

## Stack

- [Astro](https://astro.build) (static site generation, zero client-side JS by default)
- Vanilla CSS with design tokens (CSS custom properties)
- TypeScript / `astro check` for type safety

## Development

```bash
npm install
npm run dev
```

Open the printed URL (default `http://localhost:4321`). Changes hot-reload.

## Build

```bash
npm run build   # outputs to ./dist
npm run preview # preview the production build locally
npm run check   # type-checks .astro files
```

## Deployment

Static output is served via GitHub Pages. `site` is set to
`https://seergiromero.github.io` in `astro.config.mjs`.

## Project structure

```
src/
├── components/   # reusable components (SiteNav)
├── layouts/      # BaseLayout (html shell + footer)
├── pages/        # routes: index, projects/, about/, contact/
└── styles/       # global.css (design tokens + base styles)
public/
└── images/       # static images served at /images/
```

## Photo

Place your profile photo at `public/images/profile.jpg`. It is picked up
automatically and served at `/images/profile.jpg`. Until the file exists, a
placeholder is shown.

## Roadmap

- [x] Initial page
- [x] Information architecture (nav: Home / Projects / About / Contact)
- [x] About
- [x] Contact
- [ ] Projects showcase
- [ ] Project detail pages
- [ ] Skills
- [ ] SEO
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] GitHub Pages deployment workflow