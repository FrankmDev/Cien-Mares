# Cien Mares - Astro Project Structure

## 📁 Architecture Overview

```
src/
├── components/           # Reusable components
│   ├── ui/              # Atomic UI components
│   │   ├── Button.astro
│   │   ├── SectionLabel.astro
│   │   ├── Icon.astro
│   │   ├── AnimatedCounter.astro
│   │   └── RevealContainer.astro
│   ├── sections/        # Page section components
│   │   ├── HeroSection.astro
│   │   ├── StorySection.astro
│   │   ├── ServicesSection.astro
│   │   ├── QuoteSection.astro
│   │   ├── GallerySection.astro
│   │   ├── StatsSection.astro
│   │   └── CTASection.astro
│   ├── layout/          # Layout components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   └── shared/          # Shared between sections
├── layouts/             # Page layouts
│   └── Layout.astro
├── pages/               # Route pages
│   └── index.astro
├── styles/              # Global styles
│   ├── base/
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── typography.css
│   ├── components/
│   │   └── reveal.css
│   └── global.css
├── data/                # Centralized data
│   ├── services.ts
│   ├── gallery.ts
│   ├── stats.ts
│   ├── navigation.ts
│   └── index.ts
├── types/               # TypeScript types
│   └── index.ts
└── utils/               # Utilities
    ├── animations.ts
    └── index.ts
```

## 🎯 Design Principles

1. **Single Responsibility**: Each component does one thing well
2. **DRY**: Data is centralized in `/data`, no duplication
3. **Islands Architecture**: JavaScript only where needed
4. **Type Safety**: Full TypeScript coverage
5. **Performance**: CSS animations preferred over JS

## 🧩 Component Categories

### UI Components (`/components/ui/`)
Atomic, reusable building blocks:
- **Button**: Multiple variants (primary, secondary, text, glass)
- **SectionLabel**: Consistent section numbering
- **Icon**: SVG icon system
- **AnimatedCounter**: Number animation with IntersectionObserver
- **RevealContainer**: Wrapper for scroll reveal animations

### Section Components (`/components/sections/`)
Full page sections with scoped styles and scripts:
- Self-contained with `<style>` blocks
- Client-side interactivity via `<script>`
- Import data from `/data` instead of hardcoding

### Layout Components (`/components/layout/`)
Structural components used across pages:
- Header with mobile menu
- Footer with links grid

## 📊 Data Flow

```
/data/*.ts → Components → Rendered HTML
     ↓
  Types (Zod validation optional)
```

All content data lives in `/data/`:
- Services, gallery items, stats
- Navigation links
- Contact information

## 🎨 Styling Architecture

### CSS Variables (`/styles/base/variables.css`)
Design tokens for:
- Colors (Navy, Cream, Gold scale)
- Typography (Playfair Display + Satoshi)
- Spacing scale
- Border radius
- Shadows
- Transitions

### Scoped Styles
Each section component has its own `<style>` block:
- BEM-like naming: `.section__element--modifier`
- No CSS-in-JS overhead
- Automatic Astro scoping

### Reveal Animations
Global utility classes in `/styles/components/reveal.css`:
- `[data-reveal]` with direction variants
- `[data-delay]` for staggered animations
- Respects `prefers-reduced-motion`

## ⚡ Performance Optimizations

1. **Islands Architecture**: Components hydrated only when needed
2. **CSS Containment**: Sections use `contain: layout` where applicable
3. **Lazy Loading**: Images use native lazy loading
4. **Intersection Observer**: Animations trigger on visibility
5. **Will-change**: Applied only during animations

## 🚀 Development Workflow

1. **Add new data**: Update `/data/*.ts` files
2. **Create component**: Add to appropriate `/components/*` folder
3. **Import and use**: Add to `index.astro` or other pages
4. **Style**: Use CSS variables, add scoped styles to component

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1400px

Components use `clamp()` for fluid typography and responsive spacing.
