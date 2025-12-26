# 4BLANC Web Prototype

Mobile e-commerce prototype for 4BLANC professional nail equipment. Built with React + TypeScript + Vite.

## Overview

This is a design/UX prototype that simulates a native iOS mobile shopping experience. The app renders in a phone-sized frame (390x844px) and is used to test UI/UX patterns before native mobile implementation.

**Design Style:** iOS Settings style - clean, minimal, no shadows, borders only, iOS-style lists.

**Live Demo:** [https://goodnewsforyoubaby.github.io/4blanc-web/](https://goodnewsforyoubaby.github.io/4blanc-web/)

## Features

### Shopping
- Product catalog with search and filters
- Product details with image gallery
- Shopping cart functionality
- "Ask about this product" - opens chat with product context

### Support
- Real-time chat interface with product context support
- Contact form (Name, Email, Phone, Comment)
- FAQ section

### Knowledge Base
- PDF user manuals (8 products)
- Video tutorials (YouTube embeds in BottomSheet)
- Setup guides with step-by-step instructions
- Policy pages (Shipping, Return, Privacy)

### Account
- iOS-style grouped menu (Apple Settings pattern)
- Guest and authenticated modes
- Order history with status tracking
- Order details with status timeline and tracking
- Partnership program information

### Design System
- iOS Settings style (clean, minimal, no shadows)
- iOS-native animations and interactions
- Push notifications (mocked)
- Bottom tab bar with icons only (no labels)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Development server runs at: `http://localhost:5173/4blanc-web/`

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Styling:** CSS Variables + co-located CSS files
- **State:** React Context + localStorage persistence

## Project Structure

```
src/
├── components/
│   ├── common/      # Reusable UI (Button, Input, Badge, BottomSheet)
│   ├── home/        # Home page components
│   ├── layout/      # App layout (Header, BottomTabBar, MobileContainer)
│   └── product/     # Product-related components (ProductCard)
├── contexts/        # React Context (Auth, Cart, Notifications)
├── data/            # Mock data (products, orders, chat, faq, etc.)
├── pages/
│   ├── Account/     # Account, Login, Register, Settings, Orders
│   ├── Cart/        # Shopping cart
│   ├── Chat/        # Support chat
│   ├── Contact/     # Contact form
│   ├── Home/        # Landing page
│   ├── Knowledge/   # FAQ, Manuals, Videos, Policies
│   ├── Notifications/
│   └── Shop/        # Catalog, Collection, Product detail
├── styles/          # Global styles and theme variables
└── types/           # TypeScript interfaces
```

## Design Philosophy

This prototype follows **iOS Human Interface Guidelines**:

- Touch targets minimum 44x44px
- Native iOS easing curves (`cubic-bezier(0.2, 0.0, 0.0, 1.0)`)
- System font stack (-apple-system, SF Pro)
- No shadows, clean borders, iOS-style list layouts
- Touch-first design (no hover effects)
- iOS grouped list pattern for menus
- Bottom tab bar with icons only

## Key Patterns

### iOS Settings Style
- Single column iOS list for products and collections
- Transparent backgrounds with border-bottom dividers
- No card shadows, clean minimal look
- Full-width list items with chevron arrows

### BottomSheet Modal
iOS-style modal that slides up from bottom, used for video playback and filters.

### Product Context in Chat
Navigate from product to chat with context - customer can ask questions about specific products.

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch via GitHub Actions.

## License

Private - 4BLANC
