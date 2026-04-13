# Mindloop

Mindloop is a React + Vite landing experience focused on long-form content, thoughtful publishing, and community storytelling.

This project uses a modular, production-friendly front-end structure while preserving an animation-heavy visual style (Motion + Tailwind CSS + Base UI primitives).

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion (Framer Motion package name: motion)
- React Router 7
- Base UI components

## Project Structure

The codebase is organized by responsibility:

- src/app: app shell and routing
- src/layout: global layout components (navbar/footer)
- src/pages: route-level pages
- src/sections: reusable page sections
- src/shared: shared ui and animation helpers
- components/ui: Base UI component wrappers (button, input)
- lib: global utility helpers

Current route map:

- /
- /how-it-works
- /philosophy
- /use-cases

## Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

## Local Development

1. Install dependencies

npm install

2. Create local env file (optional but recommended)

Create a file named .env.local in the project root.

3. Start dev server

npm run dev

Default dev URL:

http://localhost:3000

## Available Scripts

- npm run dev: start Vite dev server (hosted on 0.0.0.0:3000)
- npm run build: create production build in dist
- npm run preview: serve the production build locally
- npm run lint: TypeScript type-check only (no emit)
- npm run clean: remove dist directory

## Environment Variables

The app can read environment variables from .env.local or shell environment.

- GEMINI_API_KEY: optional, exposed at build time via Vite define for integrations
- DISABLE_HMR: optional, set to true to disable Vite HMR

Example:

GEMINI_API_KEY=your_key_here
DISABLE_HMR=false

## Path Aliases

This project uses @ as a root alias.

- In TypeScript: @/* -> ./*
- In Vite: @ -> project root

Examples:

- @/components/ui/button
- @/lib/utils
- @/src/pages/HomePage

## Build and Preview

Production build:

npm run build

Preview production output:

npm run preview

## Troubleshooting

1. Import resolution errors with @/...

- Verify tsconfig.json and vite.config.ts alias settings are aligned
- Restart dev server after config changes

2. npm run dev exits with code 254

- Ensure package.json exists in the current checkout
- Reinstall dependencies: npm install

3. Blank page after major refactor

- Run npm run lint and fix reported TypeScript errors
- Hard refresh browser to clear cached assets

## Notes

- Large bundle warnings can appear because the landing page includes animation and media-heavy sections.
- Consider route-level lazy loading and chunk splitting if size optimization becomes a priority.
