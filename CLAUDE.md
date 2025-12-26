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
npm run preview  # Preview production build
```

## Architecture

### Design System
Single theme: **Minimal** (iOS Settings style)
- Theme is hardcoded via `data-theme="minimal"` attribute on `<html>` in `index.html`
- Theme file: `src/styles/themes/minimal.css`
- No shadows, borders only, iOS-style lists
- Clean white backgrounds with subtle gray borders

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
--mobile-safe-top: 47px;
--header-height: 56px;
--tab-bar-height: 64px;
--tab-bar-total-height: calc(var(--tab-bar-height) + var(--safe-area-bottom));
--content-height: calc(
  var(--mobile-height) - var(--mobile-safe-top) - var(--safe-area-top)
  - var(--header-height) - var(--tab-bar-total-height)
);
```

### Navigation (4 main tabs)
- `/` - Home (hero banner, featured products, collections)
- `/shop` - Shop (catalog with search and filters)
- `/chat` - Support chat (real-time messaging simulation)
- `/knowledge` - Knowledge Base (guides, manuals)

### Additional Routes
**Account (`/account`):**
- `/account/login` - Sign in
- `/account/register` - Create account
- `/account/settings` - Account settings
- `/account/orders` - Order history list
- `/account/orders/:id` - Order details with status timeline

**Knowledge Base (`/knowledge`):**
- `/knowledge/setup-guide` - Product setup guides
- `/knowledge/setup-guide/maestro` - Maéstro setup guide (full page)
- `/knowledge/setup-guide/alize` - Alizé setup guide (full page)
- `/knowledge/video-guide` - YouTube video tutorials
- `/knowledge/manual` - PDF user manuals (8 products)
- `/knowledge/faq` - Frequently asked questions
- `/knowledge/shipping-policy` - Shipping information
- `/knowledge/return-policy` - Return & refund policy
- `/knowledge/privacy-policy` - Privacy policy

**Other:**
- `/partnership` - Partnership program hub
- `/partnership/:slug` - Partnership program details
- `/contact` - Contact form
- `/cart` - Shopping cart
- `/notifications` - Push notifications
- `/product/:handle` - Product detail page

### Data
All data is mocked in `src/data/`. No real API calls. Products reference 4blanc.com Shopify CDN images.

**Data modules:**
- `products.ts` - Products and collections
- `orders.ts` - Mock orders with helper functions (`getOrderById`, `getOrderByNumber`)
- `chat.ts` - Chat messages
- `faq.ts` - FAQ items
- `notifications.ts` - Push notifications
- `partnerships.ts` - Partnership programs
- `setupGuides.ts` - Product setup guides

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

#### Page Rhythm Variables
```css
--page-padding: var(--spacing-4);  /* Horizontal padding for all pages */
--section-gap: var(--spacing-6);   /* Vertical gap between sections */
--list-gap: 0;                     /* No gap between list items (divider style) */
```
Use these instead of hardcoding spacing values - keeps all pages consistent.

#### Surface & Component Tokens
Semantic tokens for consistent component styling:
```css
/* Surface backgrounds */
--surface-card: var(--color-bg-primary);
--surface-card-muted: var(--color-bg-secondary);
--surface-card-inset: var(--color-bg-tertiary);

/* List styling */
--list-item-padding-x: var(--page-padding);
--list-icon-bg: var(--color-bg-secondary);
--list-icon-color: var(--color-primary);

/* Input styling */
--input-bg: var(--color-bg-primary);
--input-border: var(--color-border-default);
--input-focus-border: var(--color-primary);
--input-focus-ring: var(--color-primary-strong);
--attachment-bg: var(--color-bg-inset);

/* Overlays and scrims */
--color-overlay-dark: rgba(0, 0, 0, 0.35);
--color-overlay-light: rgba(255, 255, 255, 0.9);
--color-scrim: rgba(0, 0, 0, 0.4);

/* Device frame (MobileContainer) */
--color-device-frame: #0a0a0a;
--color-device-border: #1a1a1a;
--color-device-shadow: rgba(0, 0, 0, 0.15);

/* Primary color tints */
--color-primary-soft: rgba(1, 208, 78, 0.08);
--color-primary-light: rgba(1, 208, 78, 0.12);
--color-primary-strong: rgba(1, 208, 78, 0.15);
```

#### iOS Safe Area Variables
```css
--safe-area-top: env(safe-area-inset-top, 0px);
--safe-area-bottom: env(safe-area-inset-bottom, 0px);
--safe-area-left: env(safe-area-inset-left, 0px);
--safe-area-right: env(safe-area-inset-right, 0px);
--mobile-safe-top: 47px;  /* iPhone notch area */
```
Bottom tab bar and content height calculations use these for proper iPhone X+ support.

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
- Use `--touch-target-min: 44px` variable for width/height
- Recommended: 48x48px for primary actions
- Header buttons, tab bar items, icon buttons must meet this requirement
```css
.icon-button {
  width: var(--touch-target-min);
  height: var(--touch-target-min);
}
```

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

#### Shadows
Minimal theme uses NO shadows:
```css
--shadow-sm: none;
--shadow-md: none;
```

#### Colors
```css
/* Badge color */
--color-badge: #FF3B30 (iOS red)

/* Primary brand color */
--color-primary: #01d04e (4BLANC lime green from logo)
--color-primary-hover: #01b142

/* Background colors */
--color-bg-primary: #FFFFFF
--color-bg-secondary: #F6F8FA
--color-bg-tertiary: #F0F2F5
```

---

### iOS Settings Style

The app uses iOS Settings style throughout:
- **Collections & Products**: Single column iOS list (transparent backgrounds, border-bottom dividers)
- **Bottom Tab Bar**: Icons only, no labels
- **Search Input**: No border, subtle gray background, 10px radius
- **Menus**: Full-width list with dividers, no card containers

Use `[data-theme="minimal"]` selector for iOS list style overrides:
```css
/* Default card style */
.my-card {
  background: var(--color-bg-primary);
  border: var(--card-border);
  border-radius: var(--radius-lg);
}

/* iOS list style override */
[data-theme="minimal"] .my-card {
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--color-border-muted);
}
```

Applied to: FAQ items, Setup Guide items, Knowledge menu, Articles list, Notifications list, Collections, Products

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

#### Press States (Active)
Different elements need different active states:

```css
/* Text links - opacity fade */
.text-link:active {
  opacity: 0.7;
}

/* Icon buttons - scale + background */
.icon-button:active {
  background: var(--color-bg-secondary);
  transform: scale(0.92);
}

/* Regular buttons - scale */
.button:active {
  transform: scale(0.95);
}

/* Cards/list items - background change */
.card:active {
  background: var(--color-bg-tertiary);
}

/* Large touch areas - subtle scale */
.large-touch-area:active {
  transform: scale(0.98);
}
```

Always add `transition: ... 100ms var(--ios-ease)` for smooth feedback.

#### Badge Component
```css
.badge {
  min-width: 16px;
  height: 16px;
  font-size: var(--text-xs);  /* 12px - minimum readable size */
  background: var(--color-badge);
  color: var(--color-badge-text);
}
```

#### iOS Grouped Lists (Apple Settings Style)
Used in AccountPage for menu organization:

```
SECTION HEADER                    ← Caption, uppercase, muted
├─ Setup Guide                 → ← Icon + label + chevron
├─ Video Guide                 →
└─ User Manuals                →

ANOTHER SECTION
├─ FAQ                         →
└─ Contact Us                  →
```

```css
/* Section header */
.section-title {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-tertiary);
  padding: var(--spacing-2) var(--spacing-1);
}

/* Menu group container */
.menu-group {
  background: var(--color-bg-primary);
  border: var(--card-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

/* Menu item row */
.menu-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  min-height: var(--touch-target-min);
  border-bottom: 1px solid var(--color-border-muted);
}

.menu-item:last-child {
  border-bottom: none;
}

/* iOS style - no outer borders */
[data-theme="minimal"] .menu-group {
  border: none;
  box-shadow: none;
}
```

#### Contact Form Pattern
Standard form layout with iOS styling:

```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.form-field label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.form-field input,
.form-field textarea {
  padding: var(--spacing-3);
  min-height: var(--touch-target-min);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--color-primary);
}

/* Required field marker */
.required { color: var(--color-state-error); }
```

#### Product Context in Chat
When navigating from product page to chat, pass product context via router state:

```tsx
// ProductPage - navigate with state
navigate('/chat', {
  state: {
    productContext: {
      title: product.title,
      price: '$299.00',
      image: product.images[0]?.url,
    },
  },
});

// ChatPage - receive and display context
const location = useLocation();
const state = location.state as { productContext?: ProductContext };
```

#### Order Card with Stacked Thumbnails
Orders list displays product thumbnails with overlap effect:

```css
/* Thumbnails container - fixed width for alignment */
.order-thumbnails {
  width: 80px;
  display: flex;
  flex-shrink: 0;
}

/* Individual thumbnail */
.order-thumbnail {
  width: 48px;
  height: 48px;
  border: 2px solid var(--color-bg-primary);
}

/* Overlap effect */
.order-thumbnail:not(:first-child) {
  margin-left: -16px;
}

/* Single item gets larger thumbnail */
.order-thumbnail:only-child {
  width: 64px;
  height: 64px;
}
```

**Status badge colors:**
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
| `background: linear-gradient(...)` | Not minimal | Use `var(--color-overlay-dark)` |

---

### Presentation Quality Checklist

Before committing UI changes:

- [ ] Check touch targets use `--touch-target-min` (44x44px)
- [ ] Verify no hardcoded colors (search for `#` in CSS)
- [ ] Use `--page-padding` for page horizontal padding
- [ ] Use `--section-gap` for spacing between sections
- [ ] All clickable elements have `:active` states
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
| `ProductCard` | Product display (iOS list style) |
| `CollectionCard` | Collection display (iOS list style) |
| `Header` | Top navigation bar |
| `BottomTabBar` | Bottom tab navigation (icons only) |

### Key Pages
| Page | Purpose |
|------|---------|
| `AccountPage` | iOS grouped lists menu (guest/authenticated) |
| `ManualPage` | PDF manuals with external links |
| `VideoGuidePage` | YouTube videos in BottomSheet |
| `ContactPage` | Contact form (Name, Email, Phone, Comment) |
| `ChatPage` | Support chat with product context support |
| `ProductPage` | Product details with "Ask about this product" |
| `SetupGuidePage` | Product selection for setup guides |
| `SetupGuideDetailPage` | Full setup guide with sections, images, videos |
| `MaestroSetupGuidePage` | Maéstro product setup guide |
| `AlizeSetupGuidePage` | Alizé product setup guide |
| `OrdersPage` | Order history list with product thumbnails |
| `OrderDetailPage` | Order details with status timeline and tracking |
