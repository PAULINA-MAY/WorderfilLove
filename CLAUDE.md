# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static landing site for **Wonderful Love**, a Mérida (Yucatán) brand of handmade scented candles and plaster figurines. Built with Astro 7 + Tailwind CSS 4 (via `@tailwindcss/vite`), deployed to Vercel as static output (`vercel.json`). Node 22.x. The original product brief is in `landin-page-desing.md`.

All code identifiers, comments, and UI copy are in **Spanish (es-MX)** — keep new code consistent with that (e.g. `temporada`, `iniciarFiltros`, `contenedor`).

## Commands

```bash
npm run dev        # dev server
npm run build      # static build to dist/
npm run preview    # serve the build
npm run check      # astro check (type-checks .astro and .ts)
npm test           # vitest run (tests/)
npx vitest run tests/temporadas.test.ts -t "halloween"   # single file / filtered cases
```

## Architecture: seasonal theming

The whole site re-themes itself by season (Halloween, Día de Muertos, Navidad, etc.) **on the client, before first paint**, while the HTML stays fully static. Understanding this is key to touching almost any component:

1. **`src/data/temporadas.ts`** is the single source of truth: each `Temporada` has date ranges (`[mes, día]`, inclusive, may wrap the year), hero copy, featured product ids, and a 3-color palette (`bg`, `ink`, `accent`). `general` has no ranges and is the fallback for calendar gaps.
2. **`claveParaFecha`** is a pure function that is serialized with `.toString()` into an inline `<head>` script in `src/layouts/Base.astro`. It must not reference anything outside its arguments (no imports, closures, or TS-only runtime features). The same function is what `tests/temporadas.test.ts` covers — update those cases when ranges change.
3. The inline script sets `<html data-temporada="...">`. A `?temporada=<clave>` query param overrides the date (persisted in `sessionStorage` key `wl-temporada`; `?temporada=auto` clears it). It also adds `.con-intro` to show the "Wonderful Love" splash (`components/IntroMarca.astro`, `scripts/intro.ts`) only once per browser (`localStorage` key `wl-intro`), or again with `?intro`; never with `prefers-reduced-motion`.
4. `Base.astro` generates CSS from the data: per-season variables from `paleta()` in `src/data/contraste.ts` (`--bg` is a near-white tint of the season pastel, `--soft` the pastel itself, plus `--ink`, `--accent`, and `--accent-texto`, an OKLCH-darkened accent that meets 4.5:1 on both backgrounds — `tests/contraste.test.ts` enforces it), plus rules hiding every `[data-solo="<clave>"]` element that isn't the active season. Use `text-accent-texto` for any text in the accent color; raw `accent` is for fills and icons only.
   Each season can also declare a `tema` (border, background dots, icon and button-hover colors → `--borde-tema`, `--puntos`, `--icono`, `--hover*`) and `particulas` (falling/rising shapes rendered by `components/Particulas.astro`). `:root` in `global.css` mirrors the `general` theme. On `/productos`, picking a season filter sets `html[data-temporada]` live (`scripts/filtros.ts`), re-theming the whole page; "Todas" restores the date's season.
5. Components therefore **render every season's variant** and tag each with `data-solo={t.clave}` (see `Hero`, `Destacados`, `IconoTemporada`, `productos.astro`). Only the matching one is visible. When adding season-specific content, follow this pattern rather than branching at build time.
6. `src/styles/global.css` derives `--line` and exposes the tokens to Tailwind via `@theme inline` (`bg-bg`, `text-ink`, `text-accent-texto`, `bg-soft`, `border-line`, the fixed brand pastels `rosa`/`amarillo`/`celeste`/`naranja`/`coral`, plus fonts `font-display`/`font-sans`). The look is minimalist: hairline borders, no shadows or hand-drawn ornaments. Use these tokens instead of hard-coded colors so themes keep working. Shared component classes (`.contenedor`, `.etiqueta`, `.nota`, `.papel`, `.papel-vivo`) live in that file.

## Other structure notes

- `src/data/productos.ts` — catalog (fictional for the prototype); `productoPorId` throws on unknown ids, so ids listed in `temporadas[].destacados` must exist here. Products currently use line-art placeholders (`ilustracion`) instead of photos; real photos are starting to land in `src/assets/<temporada>/`.
- `src/data/sitio.ts` — contact info (placeholder) and WhatsApp link/message helpers (`enlaceWhatsApp`, `mensajeProducto`).
- `src/scripts/*.ts` — small vanilla DOM initializers (`iniciarX()`) imported from `<script>` tags in layouts/pages; e.g. `filtros.ts` drives the product filters on `/productos` via `data-filtro`/`data-producto` attributes.
- Pages: `index` (landing), `productos` (catalog with filters + current-season block), `historia` (about the brand). All use `Base.astro` with an `actual` prop for nav highlighting.
- `astro.config.mjs` `site` is a provisional Vercel URL used for canonical links.
