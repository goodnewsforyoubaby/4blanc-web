# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

4BLANC Web Prototype - a React web app simulating a mobile e-commerce experience for nail equipment. This is a design/UX prototype for testing before mobile implementation. Renders in a phone-sized frame (390x844px).

**Goal:** Create a polished, iOS-native looking mobile app prototype that could be shown to stakeholders and used as a reference for native development.

**Design Style:** iOS Settings style - clean, minimal, no shadows, borders only, iOS-style lists.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173/4blanc-web/
npm run build    # TypeScript check + production build
npm run lint     # ESLint check
```

## Architecture

### Design System
Single theme: **Minimal** (iOS Settings style)
- Theme is hardcoded via `data-theme="minimal"` attribute on `<html>` in `index.html`
- Theme file: `src/styles/themes/minimal.css`
- No shadows, borders only, iOS-style lists

### State Management
React Context providers wrap the app in this order (outermost first):
1. `AuthProvider` - mock authentication
2. `CartProvider` - shopping cart
3. `NotificationProvider` - push notifications

All contexts persist to localStorage. Theme is not managed via context (hardcoded in HTML).

### Layout Structure
`AppLayout` wraps all routes with:
- `MobileContainer` - phone frame wrapper (390x844px)
- `Header` - top bar with back button, title, notifications, cart
- `BottomTabBar` - 4 tabs: Home, Shop, Chat, Knowledge (icons only, no labels)
- `#modal-root` - Portal target for modals (inside `.app-layout`)

Layout height calculation:
```css
--mobile-width: 390px;
--mobile-height: 844px;
--mobile-safe-top: 47px;  /* iPhone notch area */
--header-height: 56px;
--tab-bar-height: 64px;
--tab-bar-total-height: calc(var(--tab-bar-height) + var(--safe-area-bottom));
--content-height: calc(
  var(--mobile-height) - var(--mobile-safe-top) - var(--safe-area-top)
  - var(--header-height) - var(--tab-bar-total-height)
);
```

### Navigation
**Main tabs:** `/` Home, `/shop` Shop, `/chat` Chat, `/knowledge` Knowledge Base

**Account:** `/account`, `/account/login`, `/account/register`, `/account/settings`, `/account/orders`, `/account/orders/:id`

**Knowledge:** `/knowledge/setup-guide`, `/knowledge/setup-guide/:slug`, `/knowledge/video-guide`, `/knowledge/manual`, `/knowledge/faq`, `/knowledge/*-policy`

**Other:** `/product/:handle`, `/cart`, `/checkout`, `/checkout/success`, `/partnership`, `/partnership/:slug`, `/contact`, `/notifications`

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
- See `src/styles/variables.css` for all available tokens

#### Page Rhythm Variables
```css
--page-padding: var(--spacing-4);       /* 16px - page-level horizontal padding */
--list-item-padding-x: var(--page-padding); /* List item horizontal padding */
--section-gap: var(--spacing-6);        /* 24px - vertical gap between sections */
--list-gap: 0;                          /* No gap between list items (divider style) */
```

**When to use:**
- `--page-padding`: Page containers, empty states, section headers, negative margins for full-width
- `--list-item-padding-x`: List items, cards, notifications, orders

**Pattern for iOS-style full-width lists in minimal theme:**
```css
[data-theme="minimal"] .my-page { padding: var(--page-padding) 0; } /* vertical only */
[data-theme="minimal"] .my-section-title { padding: 0 var(--page-padding); }
[data-theme="minimal"] .my-list-item { padding: var(--spacing-3) var(--list-item-padding-x); }
[data-theme="minimal"] .my-empty { padding: var(--spacing-8) var(--page-padding); }
```

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
- Use `--touch-target-min: 44px` variable
- Header buttons, tab bar items, icon buttons must meet this requirement

#### Animations & Transitions
- Use `--ios-ease` for most animations (smooth deceleration)
- Use `--ios-spring` only for playful elements (NOT for modals!)
- Duration: 200-300ms for most transitions
- Button press: `transform: scale(0.95)` on `:active`
- Card press: `transform: scale(0.98)` on `:active`

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

#### Shadows & Colors
Minimal theme uses NO shadows (`--shadow-sm: none; --shadow-md: none;`)

```css
--color-primary: #01d04e;        /* 4BLANC lime green */
--color-badge: #FF3B30;          /* iOS red */
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F6F8FA;
--color-bg-tertiary: #F0F2F5;
```

---

### iOS Settings Style

The app uses iOS Settings style throughout:
- **Lists**: Single column, transparent backgrounds, border-bottom dividers
- **Bottom Tab Bar**: Icons only, no labels
- **Search Input**: No border, subtle gray background, 10px radius
- **Menus**: Full-width list with dividers, no card containers

```css
/* iOS list style override */
[data-theme="minimal"] .my-card {
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--color-border-muted);
}
```

---

### Common Patterns

#### BottomSheet Modal
```css
.bottom-sheet {
  bottom: -20px;           /* Extend below to hide edges */
  padding-bottom: 20px;    /* Compensate for extension */
  animation: slideUp 280ms var(--ios-ease);  /* NOT spring! */
}
```
Uses Portal to render outside `.app-content` (which has overflow).

#### Press States (Active)
```css
.text-link:active { opacity: 0.7; }
.icon-button:active { background: var(--color-bg-secondary); transform: scale(0.92); }
.button:active { transform: scale(0.95); }
.card:active { background: var(--color-bg-tertiary); }
.large-touch-area:active { transform: scale(0.98); }
```
Always add `transition: ... 100ms var(--ios-ease)` for smooth feedback.

#### iOS Grouped Lists (Apple Settings Style)
Used in AccountPage - section headers with grouped menu items. See `AccountPage.tsx` for implementation.

#### Status Badge Colors
| Status | Background | Text Color |
|--------|------------|------------|
| processing | `--color-state-warning-light` | `--color-state-warning` |
| shipped | `--color-link-light` | `--color-text-link` |
| delivered | `--color-state-success-light` | `--color-state-success` |
| cancelled | `--color-state-error-light` | `--color-state-error` |

---

### What NOT to Do

| Bad Practice | Why | Instead |
|--------------|-----|---------|
| `color: #339999` | Hardcoded color | `color: var(--color-primary)` |
| `padding: 0 16px` | Hardcoded spacing | `padding: 0 var(--page-padding)` |
| `width: 44px; height: 44px` | Magic number | `width: var(--touch-target-min)` |
| `margin-bottom: 24px` | Inconsistent gaps | `margin-bottom: var(--section-gap)` |
| `text-transform: uppercase` | Not iOS-native | Use normal case |
| `letter-spacing: 2px` | Feels Android | Minimal or none |
| `transform: translateY(-2px)` on hover | Desktop pattern | Use `:active` scale |
| Spring animation on modals | Causes "jumping" | Use `--ios-ease` |
| Modal inside `.app-content` | Gets clipped | Use Portal to `#modal-root` |
| Font size < 12px | Unreadable | Minimum 12px |
| Gradient backgrounds | Not iOS | Solid colors |
| No `:active` state on clickables | No touch feedback | Add opacity/scale/background change |
| `rgba(0,0,0,0.4)` for overlays | Hardcoded value | Use `var(--color-scrim)` |

---

### Presentation Quality Checklist

Before committing UI changes:

- [ ] Check touch targets use `--touch-target-min` (44x44px)
- [ ] Verify no hardcoded colors (search for `#` in CSS)
- [ ] Use `--page-padding` for page/section padding
- [ ] Use `--list-item-padding-x` for list items in minimal theme
- [ ] Use `--section-gap` for spacing between sections
- [ ] All clickable elements have `:active` states
- [ ] Test animations are smooth (no jank)
- [ ] Check modal overlays cover header
- [ ] Verify consistent spacing (8px grid)
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
| Theme variables | `src/styles/themes/minimal.css` |
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
| `Header` | Top navigation bar |
| `BottomTabBar` | Bottom tab navigation (icons only) |
