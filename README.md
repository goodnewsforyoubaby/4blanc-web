# 4BLANC Web Prototype

Mobile e-commerce prototype for 4BLANC professional nail equipment. Built with React + TypeScript + Vite.

## Overview

This is a design/UX prototype that simulates a native iOS mobile shopping experience. The app renders in a phone-sized frame (390x844px) and is used to test UI/UX patterns before native mobile implementation.

**Live Demo:** [https://your-username.github.io/4blanc-web/](https://your-username.github.io/4blanc-web/)

## Features

- 3 switchable themes (Minimal, Shopify, Classic)
- iOS-native animations and interactions
- Product catalog with search and filters
- Shopping cart functionality
- Support chat interface
- Knowledge base (FAQ, articles, policies)
- User authentication (mocked)
- Push notifications (mocked)

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
- **Styling:** CSS Variables + CSS Modules (co-located)
- **State:** React Context + localStorage persistence

## Project Structure

```
src/
├── components/
│   ├── common/      # Reusable UI components (Button, Input, Badge, etc.)
│   ├── home/        # Home page components
│   ├── layout/      # App layout (Header, BottomTabBar, etc.)
│   └── product/     # Product-related components
├── contexts/        # React Context providers
├── data/            # Mock data
├── pages/           # Page components
├── styles/          # Global styles and themes
└── types/           # TypeScript interfaces
```

## Themes

Switch between themes using the theme switcher in the bottom-right corner:

| Theme | Style | Shadows |
|-------|-------|---------|
| Minimal | GitHub/Notion inspired | None, borders only |
| Shopify | 4blanc.com Shopify style | Subtle |
| Classic | Traditional e-commerce | Pronounced |

## Design Philosophy

This prototype follows **iOS Human Interface Guidelines**:

- Touch targets minimum 44x44px
- Native iOS easing curves for animations
- System font stack
- Subtle shadows and clean layouts
- No hover effects (touch-first design)

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch via GitHub Actions.

## License

Private - 4BLANC
