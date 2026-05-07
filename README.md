# Portfolio

Personal portfolio site for **Hector Torrez**: a single-page layout with semantic HTML, a dark theme, and content driven by typed data—built with [TanStack Start](https://tanstack.com/start), [React](https://react.dev/), [Vite](https://vite.dev/), and [Tailwind CSS](https://tailwindcss.com/) v4.

## Stack

- **Framework**: TanStack Start (SSR-ready routing via TanStack Router, file-based routes under [`src/routes`](src/routes))
- **UI**: React 19, Tailwind CSS v4 (`@tailwindcss/vite`), `@tailwindcss/typography`
- **Tooling**: TypeScript, [Biome](https://biomejs.dev/) (lint/format), [Vitest](https://vitest.dev/)
- **Deploy**: [Cloudflare Workers](https://developers.cloudflare.com/workers/) via `@cloudflare/vite-plugin` and [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

## Prerequisites

- [Node.js](https://nodejs.org/) (version aligned with your team’s policy)
- [pnpm](https://pnpm.io/)

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server listens on port **3000** ([`package.json`](package.json) `dev` script).

## Customize content

Most copy lives in [`src/content/portfolio.ts`](src/content/portfolio.ts):

- `portfolioMeta` — page `<title>` and meta description (see [`src/routes/__root.tsx`](src/routes/__root.tsx))
- `portfolio` — name, headline, location, `aboutParagraphs`, `skills`, `experience`, `education`, contact links

The homepage composes sections from [`src/components/portfolio/`](src/components/portfolio/) ([`portfolio-home.tsx`](src/components/portfolio/portfolio-home.tsx)).

Theme tokens, typography plugin, skip-link styles, and motion helpers are in [`src/styles.css`](src/styles.css).

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start Vite dev server (port 3000)    |
| `pnpm build`   | Production build                     |
| `pnpm preview` | Preview production build locally           |
| `pnpm test`    | Run Vitest                           |
| `pnpm lint`    | Biome lint                           |
| `pnpm format`  | Biome format                         |
| `pnpm check`   | Biome check (lint + format + import)|
| `pnpm deploy`  | `pnpm build` then `wrangler deploy`  |

## Production build

```bash
pnpm build
pnpm preview
```

## Deploy to Cloudflare

Production bundles are built with Vite ([`vite.config.ts`](vite.config.ts)) and deployed to **Cloudflare Workers** using [`wrangler.jsonc`](wrangler.jsonc).

```bash
pnpm deploy
```

For first-time setup, install and authenticate Wrangler (`pnpm exec wrangler login`), then configure bindings or secrets as needed in your Wrangler config / dashboard. Public Worker vars and bindings follow [Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/).

## Routing

Routes are files under [`src/routes`](src/routes). The root shell (`head`, fonts, global `<body>` classes) is defined in [`src/routes/__root.tsx`](src/routes/__root.tsx). The home route is [`src/routes/index.tsx`](src/routes/index.tsx).

For SPA navigation between routes, use [`Link`](https://tanstack.com/router/latest/docs/framework/react/api/router/linkComponent) from `@tanstack/react-router`.

## Learn more

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS](https://tailwindcss.com/docs)
