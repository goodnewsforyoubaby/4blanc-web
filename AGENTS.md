# Repository Guidelines

## Source of Truth (Read First)
- The canonical, up-to-date project guidance lives in `CLAUDE.md`.
- When anything here conflicts, follow `CLAUDE.md`.
- Design system, layout math, routes, and component patterns are defined in `CLAUDE.md`.

## Project Snapshot (Current)
- 4BLANC Web Prototype: React + TypeScript mobile UX prototype in a 390x844 frame.
- iOS Settings style (minimal, border-only lists, no shadows).
- Single theme: `data-theme="minimal"` in `index.html` using `src/styles/themes/minimal.css`.
- All data is mocked in `src/data/`; no real API calls.

## Project Structure & Module Organization
- `src/` contains the React + TypeScript app code.
- `src/components/` holds reusable UI and feature components, organized by area (e.g., `common/`, `home/`, `layout/`, `product/`).
- `src/pages/` defines routed screens; `src/contexts/` contains React Context providers and state persistence.
- `src/styles/` stores global CSS and theme files; `src/assets/` includes static assets.
- `src/data/` houses mocked data modules.
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
- For UI changes, manually verify the core routes (`/`, `/shop`, `/chat`, `/knowledge`) in the minimal theme.
- Run `npm run build` to catch TypeScript errors before committing UI work.

## Commit Guidelines (Claude Template)
- Subject line: short, imperative, user-visible outcome.
- Blank line.
- Bulleted list of concrete changes.
- Body lines are left-aligned; do not indent bullets or paragraphs.
- Blank line.
- Short rationale or impact statement.

Example:
```
Implement zone-based layout for ProductPage content sections

- Add semantic zone containers: details-zone, resources-zone, actions-zone
- Use consistent --section-gap (24px) spacing between zones
- Group Description + Promo Banner in details-zone
- Group Setup Guide + FAQ in resources-zone (conditional rendering)
- Place "Ask about product" button in actions-zone
- Remove inconsistent margin-top values from individual sections
- FAQ section now uses --spacing-4 within zone (was --spacing-8)
- Add :first-child rule for FAQ when it's the only item in resources zone

This ensures consistent spacing regardless of which optional sections
(Setup Guide, FAQ) are present on the product page.
```

## Design & UX Requirements
- This project is an iOS-style mobile prototype; maintain the 390x844 layout and touch-first behavior.
- Theme is minimal and hardcoded via `data-theme="minimal"` on `<html>`.
- Avoid hover-only effects and ensure tap targets meet the 44x44px minimum.
- Use `#modal-root` portal for overlays as described in `CLAUDE.md`.
