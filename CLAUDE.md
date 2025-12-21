# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

4BLANC Web Prototype - a React web app simulating a mobile e-commerce experience for nail equipment. This is a design/UX prototype for testing before mobile implementation. Renders in a phone-sized frame (390x844px).

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173/4blanc-web/
npm run build    # TypeScript check + production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## Architecture

### Theme System
Three switchable themes via CSS variables (`data-theme` attribute on `<html>`):
- `minimal` - GitHub/Notion style, no shadows, borders only
- `shopify` - 4blanc.com Shopify style
- `classic` - Traditional e-commerce with shadows and gradients

Theme switching: `ThemeContext.tsx` → sets `data-theme` → CSS variables in `styles/themes/*.css` apply.

### State Management
React Context providers wrap the app in this order (outermost first):
1. `ThemeProvider` - theme selection
2. `AuthProvider` - mock authentication
3. `CartProvider` - shopping cart
4. `WishlistProvider` - saved items
5. `NotificationProvider` - push notifications

All contexts persist to localStorage.

### Layout Structure
`AppLayout` wraps all routes with:
- `MobileContainer` - phone frame wrapper
- `Header` - top bar with notifications/user icons
- `BottomTabBar` - 4 tabs: Home, Shop, Chat, Knowledge

### Navigation (4 main tabs)
- `/` - Home (featured products, collections)
- `/shop` - Shop (catalog + search combined)
- `/chat` - Support chat (mocked conversation)
- `/knowledge` - Knowledge base (FAQ, articles, policies)

### Data
All data is mocked in `src/data/`. No real API calls. Products reference 4blanc.com Shopify CDN images.

## Key Conventions

- Components have co-located CSS files (e.g., `Button.tsx` + `Button.css`)
- CSS uses `var(--*)` for all colors, spacing, typography
- 8px spacing grid: `--spacing-1` (4px) through `--spacing-16` (64px)
- Icons from `lucide-react` library

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Push to `main` triggers auto-deploy. Base URL configured as `/4blanc-web/` in `vite.config.ts` and router.
