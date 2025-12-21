# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

4BLANC Web Prototype - a React web app simulating a mobile e-commerce experience for nail equipment. This is a design/UX prototype for testing before mobile implementation. Renders in a phone-sized frame (390x844px).

**Goal:** Create a polished, iOS-native looking mobile app prototype that could be shown to stakeholders and used as a reference for native development.

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
- `shopify` - 4blanc.com Shopify style with subtle shadows
- `classic` - Traditional e-commerce with pronounced shadows and gradients

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
- `MobileContainer` - phone frame wrapper (390x844px)
- `Header` - top bar with back button, title, notifications, cart
- `BottomTabBar` - 4 tabs: Home, Shop, Chat, Knowledge
- `#modal-root` - Portal target for modals (inside `.app-layout`)

### Navigation (4 main tabs)
- `/` - Home (hero banner, featured products, collections)
- `/shop` - Shop (catalog with search and filters)
- `/chat` - Support chat (mocked conversation)
- `/knowledge` - Knowledge base (FAQ, articles, policies)

### Data
All data is mocked in `src/data/`. No real API calls. Products reference 4blanc.com Shopify CDN images.

---

## Key Conventions

### File Organization
- Components have co-located CSS files (e.g., `Button.tsx` + `Button.css`)
- Each component folder has `index.ts` for exports
- Pages organized by feature in `src/pages/`

### CSS Architecture
- **ALL colors via CSS variables** - never hardcode hex values
- 8px spacing grid: `--spacing-1` (4px) through `--spacing-16` (64px)
- Typography: `--text-xs` (12px) through `--text-2xl` (24px)
- Icons from `lucide-react` library (consistent 20-24px size)

### Modals & Overlays
- **Always use React Portal** to `#modal-root`
- This ensures overlay covers the Header properly
- BottomSheet component already implements this pattern

---

## Design Guidelines

### iOS-Native Style (CRITICAL)

This app MUST look and feel like a native iOS application. Follow these rules strictly:

#### CSS Variables for Animations
```css
--ios-ease: cubic-bezier(0.2, 0.0, 0.0, 1.0);   /* Standard iOS deceleration */
--ios-spring: cubic-bezier(0.34, 1.56, 0.64, 1.0); /* Bounce effect - use sparingly */
--transition-fast: 150ms var(--ios-ease);
--transition-normal: 250ms var(--ios-ease);
```

#### Touch Targets
- Minimum tap area: **44x44px** (iOS Human Interface Guidelines)
- Recommended: 48x48px for primary actions
- Header buttons, tab bar items must meet this requirement

#### Animations & Transitions
- Use `--ios-ease` for most animations (smooth deceleration)
- Use `--ios-spring` only for playful elements (NOT for modals!)
- Duration: 200-300ms for most transitions
- Button press: `transform: scale(0.95)` on `:active`
- Card press: `transform: scale(0.98)` on `:active`
- List item press: subtle background change + scale(0.98)

#### Border Radius Reference
| Element | Radius |
|---------|--------|
| Buttons, Inputs | 10-12px (`--radius-md`) |
| Cards | 12px (`--radius-lg`) |
| Bottom sheets | 12px top corners only |
| Badges, avatars | 50% (`--radius-full`) |
| Small tags | 6px (`--radius-sm`) |

#### Typography
- Minimum readable font size: **12px**
- System font stack: `-apple-system, BlinkMacSystemFont, 'SF Pro'...`
- **NO `text-transform: uppercase`** - not iOS-native
- Minimal letter-spacing (avoid `letter-spacing: 2px`)
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

#### Shadows (iOS-style, subtle)
```css
/* Minimal theme: NO shadows */
--shadow-sm: none;
--shadow-md: none;

/* Shopify theme: subtle */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 2px 4px rgba(0, 0, 0, 0.08);

/* Classic theme: pronounced */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
--shadow-md: 0 3px 6px rgba(0, 0, 0, 0.15);
```

#### Colors - Theme-Specific
```css
/* Badge colors per theme */
minimal:  --color-badge: #FF3B30 (iOS red)
shopify:  --color-badge: #339999 (4BLANC teal)
classic:  --color-badge: #E53935 (Material red)

/* Primary brand color (all themes) */
--color-primary: #339999 (4BLANC teal)
--color-primary-hover: #2a7a7a
```

---

### Theme-Specific Behaviors

#### Minimal Theme (iOS Settings style)
Use `[data-theme="minimal"]` selector for overrides:
```css
/* Default card style */
.my-card {
  background: var(--color-bg-primary);
  border: var(--card-border);
  border-radius: var(--radius-lg);
}

/* Minimal theme override - iOS list style */
[data-theme="minimal"] .my-card {
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--color-border-muted);
}
```

Applied to: FAQ items, Setup Guide items, Knowledge menu, Articles list, Notifications list

#### Shopify & Classic Themes
- Keep card borders and shadows
- Traditional card-based layout
- No special overrides needed

---

### Common Patterns

#### BottomSheet Modal
```tsx
// Uses Portal to render outside .app-content (which has overflow)
// Extends 20px below visible area to hide bottom edges
// Animation: 280ms var(--ios-ease) - NO spring!
```

Key CSS for smooth modal:
```css
.bottom-sheet {
  bottom: -20px;           /* Extend below to hide edges */
  padding-bottom: 20px;    /* Compensate for extension */
  animation: slideUp 280ms var(--ios-ease);  /* Not spring! */
}
```

#### Press States
```css
.interactive-element {
  transition: transform 100ms var(--ios-ease);
}
.interactive-element:active {
  transform: scale(0.95);  /* Buttons */
  /* or scale(0.98) for cards/larger elements */
}
```

#### Badge Component
```css
.badge {
  min-width: 16px;
  height: 16px;
  font-size: 10px;
  background: var(--color-badge);
  color: var(--color-badge-text);
}
```

---

### What NOT to Do

| Bad Practice | Why | Instead |
|--------------|-----|---------|
| `color: #339999` | Hardcoded color | `color: var(--color-primary)` |
| `text-transform: uppercase` | Not iOS-native | Use normal case |
| `letter-spacing: 2px` | Feels Android | Minimal or none |
| `transform: translateY(-2px)` on hover | Desktop pattern | Use `:active` scale |
| Spring animation on modals | Causes "jumping" | Use `--ios-ease` |
| Modal inside `.app-content` | Gets clipped | Use Portal to `#modal-root` |
| Font size < 12px | Unreadable | Minimum 12px |
| Gradient backgrounds | Not iOS (except Classic buttons) | Solid colors |

---

### Presentation Quality Checklist

Before committing UI changes:

- [ ] Test in all 3 themes (Minimal, Shopify, Classic)
- [ ] Check touch targets are at least 44x44px
- [ ] Verify no hardcoded colors (search for `#` in CSS)
- [ ] Test animations are smooth (no jank)
- [ ] Check modal overlays cover header
- [ ] Verify consistent spacing (8px grid)
- [ ] Test on different content lengths
- [ ] Run `npm run build` to catch TypeScript errors

---

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Push to `main` triggers auto-deploy.

Base URL configured as `/4blanc-web/` in:
- `vite.config.ts` (base option)
- `BrowserRouter` (basename prop)

---

## Quick Reference

### File Locations
| What | Where |
|------|-------|
| Theme variables | `src/styles/themes/*.css` |
| Global variables | `src/styles/variables.css` |
| Base styles | `src/styles/base.css` |
| Common components | `src/components/common/` |
| Layout components | `src/components/layout/` |
| Mock data | `src/data/` |
| Type definitions | `src/types/index.ts` |

### Key Components
| Component | Purpose |
|-----------|---------|
| `BottomSheet` | iOS-style modal from bottom |
| `Button` | Primary/secondary buttons |
| `Badge` | Notification count indicator |
| `ProductCard` | Product grid item |
| `Header` | Top navigation bar |
| `BottomTabBar` | Bottom tab navigation |
