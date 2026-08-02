# Tailwind CSS Platform Guide

Complete documentation of Tailwind CSS usage across the Aristoothcrat Dental Clinic platform.

## Overview

The entire platform uses **Tailwind CSS v4** exclusively for styling. No inline styles, CSS modules, or external CSS frameworks are used. All styling is achieved through utility-first Tailwind classes and semantic components.

## Color System

### Light Mode
- **Background**: `#f8fafb` (`bg-background`)
- **Foreground**: `#1a2332` (`text-foreground`)
- **Accent (Primary)**: `#1abc9c` (`bg-accent`, `text-accent`) - Teal/Turquoise
- **Secondary**: `#1abc9c` (matches accent)
- **Muted**: `#e8ecf0` (`bg-muted`)
- **Border**: `#e8ecf0` (`border-border`)

### Dark Mode
- **Background**: `#0d1117` (`dark:bg-background`)
- **Foreground**: `#e8ecf0` (`dark:text-foreground`)
- **Accent**: `#1abc9c` (`dark:bg-accent`)
- **Card**: `#161b22` (`dark:bg-card`)

## Layout Patterns

### Container
```tsx
// Section container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// Narrow container
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Grid Layouts
```tsx
// 2 column grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Items */}
</div>

// 3 column grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>

// 4 column grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Items */}
</div>
```

### Flexbox Layouts
```tsx
// Center align
<div className="flex items-center justify-center">
  {/* Content */}
</div>

// Space between
<div className="flex items-center justify-between">
  {/* Content */}
</div>

// Column flex
<div className="flex flex-col gap-4">
  {/* Content */}
</div>
```

## Components

### Buttons
```tsx
// Primary button
<button className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-lg font-medium transition-all duration-200">
  Button
</button>

// Secondary button
<button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg font-medium transition-all duration-200">
  Button
</button>

// Outline button
<button className="border border-border bg-transparent hover:bg-muted px-4 py-2 rounded-lg font-medium transition-all duration-200">
  Button
</button>

// Ghost button
<button className="bg-transparent hover:bg-muted px-4 py-2 rounded-lg font-medium transition-all duration-200">
  Button
</button>
```

### Form Inputs
```tsx
// Text input
<input
  type="text"
  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-200"
  placeholder="Enter text..."
/>

// Textarea
<textarea
  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 resize-vertical min-h-[120px] transition-all duration-200"
  placeholder="Enter message..."
/>
```

### Cards
```tsx
// Basic card
<div className="rounded-lg border border-border bg-card text-card-foreground p-6">
  {/* Content */}
</div>

// Elevated card
<div className="rounded-lg border border-border bg-card text-card-foreground p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
  {/* Content */}
</div>

// Interactive card
<div className="rounded-lg border border-border bg-card text-card-foreground p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer">
  {/* Content */}
</div>
```

### Badges
```tsx
// Primary badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
  Badge
</span>

// Success badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald/10 text-emerald">
  Success
</span>

// Warning badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
  Warning
</span>

// Danger badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-destructive/10 text-destructive">
  Error
</span>
```

## Typography

### Heading Styles
```tsx
// Heading sizes
<h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground">H1</h1>
<h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">H2</h2>
<h3 className="font-serif text-3xl font-bold text-foreground">H3</h3>
<h4 className="font-serif text-2xl font-semibold text-foreground">H4</h4>

// Body text
<p className="text-base text-foreground">Body text</p>
<p className="text-sm text-muted-foreground">Small text</p>
<p className="text-xs text-muted-foreground">Tiny text</p>
```

### Fonts
- **Headings**: `font-serif` - Playfair Display (weights: 600, 700, 800)
- **Body**: `font-sans` - Inter (weights: 400, 500, 600, 700)

## Spacing Scale

All spacing uses Tailwind's standard scale (px, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32...):

```tsx
// Padding
<div className="p-4">Padded on all sides</div>
<div className="px-4 py-6">Padded horizontally and vertically</div>

// Margin
<div className="m-4">Margin on all sides</div>
<div className="mt-6 mb-4">Top and bottom margin</div>

// Gap (for flex/grid)
<div className="flex gap-4">Items with gap</div>
<div className="grid gap-6">Grid with gap</div>
```

## Responsive Design

### Breakpoints
- **Mobile**: (default, no prefix)
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)
- **Large**: `xl:` (1280px)

### Examples
```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

// Responsive text
<h1 className="text-3xl md:text-4xl lg:text-5xl">
  Responsive heading
</h1>

// Responsive padding
<div className="p-4 md:p-6 lg:p-8">
  {/* Different padding at each breakpoint */}
</div>
```

## Dark Mode

Dark mode is enabled via `next-themes` and applied with `dark:` prefix:

```tsx
<div className="bg-background dark:bg-background text-foreground dark:text-foreground">
  {/* Automatically adapts to dark mode */}
</div>

// More explicit
<div className="bg-white dark:bg-black text-black dark:text-white">
  {/* Specific dark mode colors */}
</div>
```

## Animations & Transitions

### Transition Classes
```tsx
// Basic transition
<button className="transition-all duration-200 hover:bg-accent">
  Button
</button>

// Specific properties
<div className="transition-colors duration-300 hover:bg-muted">
  {/* Only color changes are animated */}
</div>
```

### With Framer Motion
Animations are enhanced with Framer Motion (`motion` components):

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Animated content
</motion.div>
```

## Utilities Library

Pre-built utility exports are available in `lib/tailwind-utils.ts`:

```tsx
import { buttonStyles, inputStyles, cardStyles, badgeStyles } from '@/lib/tailwind-utils'

// Use them
<button className={buttonStyles.primary}>Click me</button>
<input className={inputStyles.base} />
<div className={cardStyles.base}>Card content</div>
```

## State Modifiers

### Hover
```tsx
<button className="hover:bg-accent/90">Hover state</button>
```

### Focus
```tsx
<input className="focus:outline-none focus:ring-2 focus:ring-accent/30" />
```

### Disabled
```tsx
<button className="disabled:opacity-50 disabled:cursor-not-allowed">
  Disabled button
</button>
```

### Dark Mode
```tsx
<div className="bg-white dark:bg-black">Light/Dark aware</div>
```

## Custom Utilities

Custom utility classes defined in `globals.css`:

```css
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .smooth-scroll {
    scroll-behavior: smooth;
  }
  .tap-highlight-none {
    -webkit-tap-highlight-color: transparent;
  }
}
```

## Accessibility

### Focus Visible
```tsx
<button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
  Accessible button
</button>
```

### Screen Reader Only
```tsx
<span className="sr-only">Screen reader text</span>
```

### Semantic HTML
```tsx
<button> {/* Use semantic button tag */}
<a href="/"> {/* Use semantic anchor tag */}
<h1> {/* Use semantic heading tag */}
<label> {/* Use semantic label tag */}
```

## Best Practices

1. **Use semantic HTML** - Never replace with divs
2. **Prefer Tailwind classes** - Use `className` over `style`
3. **Use consistent spacing** - Follow the spacing scale
4. **Responsive first** - Design mobile-first, enhance with responsive prefixes
5. **Dark mode aware** - Always include dark mode variants
6. **Accessibility** - Use focus states and semantic HTML
7. **Component reuse** - Extract repeated patterns into components
8. **Merge classes safely** - Always use the `cn()` utility function
9. **Keep components small** - Single responsibility principle
10. **Use utilities library** - Reference `lib/tailwind-utils.ts` for patterns

## File Structure

```
app/
├── globals.css          # Tailwind imports, theme variables, custom utilities
└── layout.tsx          # Root layout with theme provider

components/
├── ui/                 # Base UI components
├── layout/             # Layout components (navbar, footer)
├── sections/           # Page sections
├── form/               # Form-specific components
└── common/             # Shared components

lib/
├── utils.ts            # cn() utility for class merging
├── tailwind-utils.ts   # Pre-built Tailwind utility exports
└── constants.ts        # App constants and data
```

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Dark Mode](https://tailwindcss.com/docs/dark-mode)
