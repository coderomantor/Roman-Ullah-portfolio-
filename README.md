# Roman Ullah Portfolio

A production-ready foundation for Roman Ullah's future developer and AI engineering portfolio.

## Status

Foundation phase complete. The visual identity, portfolio content, case studies, and interactions are intentionally pending.

## Technology

- Next.js with the App Router
- React and TypeScript
- Tailwind CSS
- ESLint
- Motion (installed for later, not currently used)

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
- `src/components` — future layout, section, and reusable UI components
- `src/data` — structured portfolio content
- `src/hooks` — reusable client hooks
- `src/lib` — shared utilities and integrations
- `src/types` — shared domain types

The current homepage is only a semantic smoke test for the application foundation. It is not the portfolio's final design.
