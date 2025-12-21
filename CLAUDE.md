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
- `minimal` - GitHub/Notion style, no shadows, borders only, iOS-style lists
- `shopify` - 4blanc.com Shopify style
- `classic` - Traditional e-commerce with shadows and gradients

Theme switching: `ThemeContext.tsx` → sets `data-theme` → CSS variables in `styles/themes/*.css` apply.

### State Management
React Context providers wrap the app in this order (outermost first):
1. `ThemeProvider` - theme selection
2. `AuthProvider` - mock authentication
3. `CartProvider` - shopping cart
4. `NotificationProvider` - push notifications

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
- Modals use React Portal to `#modal-root` inside AppLayout

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Push to `main` triggers auto-deploy. Base URL configured as `/4blanc-web/` in `vite.config.ts` and router.

---

## Design Guidelines

### iOS-Native Style (CRITICAL)

This app must look and feel like a native iOS application. Follow these rules strictly:

#### Touch Targets
- Minimum tap area: **44x44px** (iOS Human Interface Guidelines)
- Recommended: 48x48px for primary actions

#### Animations & Transitions
- Use iOS-native easing: `cubic-bezier(0.2, 0.0, 0.0, 1.0)` (defined as `--ios-ease`)
- Spring animations: `cubic-bezier(0.34, 1.56, 0.64, 1.0)` (defined as `--ios-spring`)
- Duration: 200-300ms for most transitions
- Button press: `transform: scale(0.95)` on `:active`
- Card press: `transform: scale(0.98)` on `:active`

#### Border Radius
- Buttons/Inputs: 10-12px
- Cards: 12px
- Bottom sheets: 12px (top corners only)
- Full round: `--radius-full` for badges, avatars

#### Typography
- Minimum readable font size: **12px**
- Use system font stack (already configured)
- NO `text-transform: uppercase` (not iOS-native)
- Minimal letter-spacing

#### Shadows (iOS-style, subtle)
- Subtle: `0 1px 2px rgba(0,0,0,0.1)`
- Medium: `0 2px 8px rgba(0,0,0,0.12)`
- Large: `0 4px 16px rgba(0,0,0,0.15)`

#### Colors
- NEVER hardcode colors - always use CSS variables
- Badge colors are theme-specific (`--color-badge`, `--color-badge-text`)
- Primary brand color: `--color-primary` (#339999 - 4BLANC teal)

#### What NOT to do
- No hover `translateY()` effects (not iOS-native)
- No uppercase text transforms
- No excessive shadows
- No gradients (except Classic theme buttons)
- No colors outside the theme system

### Theme-Specific Behaviors

For `minimal` theme only:
- Lists should be full-width with subtle separators (iOS Settings style)
- No card borders, use `border-bottom: 1px solid var(--color-border-muted)`
- Background transparent on list items

For `shopify` and `classic` themes:
- Keep card borders and shadows
- Traditional card-based layout

### Presentation Quality

The app must always look polished and professional:
- Consistent spacing using the 8px grid
- Proper alignment of all elements
- Smooth animations without jank
- No broken layouts or overflow issues
- Test all three themes before committing changes
