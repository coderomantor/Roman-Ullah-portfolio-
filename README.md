# Roman Ullah Portfolio

A production-ready foundation for Roman Ullah's future developer and AI engineering portfolio.

## Status

Phase 3A is in visual review. The global Creative Systems direction, responsive navigation, and homepage hero are implemented; portfolio sections, case studies, and advanced interactions are intentionally pending.

## Technology

- Next.js with the App Router
- React and TypeScript
- Tailwind CSS
- ESLint
- Motion (installed for later interaction work, not currently used)

## Local development

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Copy `.env.example` to `.env.local` and update `NEXT_PUBLIC_SITE_URL` when absolute metadata URLs need a non-local origin.

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Architecture

- `src/app` — App Router routes, root metadata, global styles, and favicon
- `src/components` — layout, section, and reusable UI components
- `src/data` — structured portfolio content
- `src/hooks` — reusable client hooks
- `src/lib` — shared utilities and integrations
- `src/types` — shared domain types

The homepage currently contains only the site header and hero. Selected Work and all subsequent sections are deliberately deferred until the visual direction is approved.
