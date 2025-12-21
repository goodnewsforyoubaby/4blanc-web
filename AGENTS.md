# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React + TypeScript app code.
- `src/components/` holds reusable UI and feature components, organized by area (e.g., `common/`, `home/`, `layout/`, `product/`).
- `src/pages/` defines routed screens; `src/contexts/` contains React Context providers and state persistence.
- `src/styles/` stores global CSS and theme files; `src/assets/` includes static assets.
- `public/` hosts static files served as-is; `dist/` is the production build output.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server at `http://localhost:5173/4blanc-web/`.
- `npm run build` runs TypeScript build checks and generates the production bundle.
- `npm run preview` serves the production build locally for verification.
- `npm run lint` runs ESLint across the repository.

## Coding Style & Naming Conventions
- TypeScript + React (`.tsx`) with ES modules.
- Components use PascalCase filenames and are co-located with their CSS (e.g., `Button.tsx` + `Button.css`).
- CSS uses variables for all colors, spacing, and typography; do not hardcode colors.
- Follow the iOS-native styling rules in `CLAUDE.md` (touch targets, easing, radius, shadows).
- Use the 8px spacing scale defined in theme variables.

## Testing Guidelines
- There are no automated tests in this repo yet.
- For UI changes, manually verify the core routes (`/`, `/shop`, `/chat`, `/knowledge`) across all three themes.
- If you add tests, document the command in `package.json` and update this guide.

## Commit & Pull Request Guidelines
- Recent commits use short, imperative subject lines (e.g., “Redesign HomePage...”).
- Keep commits focused and describe user-visible behavior changes.
- PRs should include a clear summary, linked issue (if applicable), and screenshots or short clips for UI changes.
- Note any manual test coverage (routes visited, themes checked).

## Design & UX Requirements
- This project is an iOS-style mobile prototype; maintain the 390x844 layout and touch-first behavior.
- Theme switching uses `data-theme` on `<html>` with CSS variables in `src/styles/themes/`.
- Avoid hover-only effects and ensure tap targets meet the 44x44px minimum.
