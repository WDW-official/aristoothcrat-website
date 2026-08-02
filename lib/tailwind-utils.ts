/**
 * Tailwind CSS Utility Functions & Patterns
 * Comprehensive utility library for consistent styling across the platform
 */

import { cn } from './utils'

/**
 * Button Styling Utilities
 */
export const buttonStyles = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 transition-all duration-200',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 transition-all duration-200',
  outline: 'border border-border bg-transparent hover:bg-muted transition-all duration-200',
  ghost: 'bg-transparent hover:bg-muted transition-all duration-200',
  destructive: 'bg-destructive text-white hover:bg-destructive/90 active:bg-destructive/80 transition-all duration-200',
}

/**
 * Input Field Styling Utilities
 */
export const inputStyles = {
  base: 'w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground transition-all duration-200',
  focus: 'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30',
  error: 'border-destructive focus:ring-destructive/30',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
}

/**
 * Card Styling Utilities
 */
export const cardStyles = {
  base: 'rounded-lg border border-border bg-card text-card-foreground',
  elevated: 'shadow-lg hover:shadow-xl transition-shadow duration-300',
  interactive: 'hover:border-accent/50 transition-all duration-300 cursor-pointer',
  padding: 'p-6',
  hover: 'hover:shadow-md transition-shadow duration-200',
}

/**
 * Heading Styles
 */
export const headingStyles = {
  h1: 'font-serif text-5xl lg:text-6xl font-bold text-foreground',
  h2: 'font-serif text-4xl lg:text-5xl font-bold text-foreground',
  h3: 'font-serif text-3xl font-bold text-foreground',
  h4: 'font-serif text-2xl font-semibold text-foreground',
  h5: 'font-serif text-xl font-semibold text-foreground',
  h6: 'font-serif text-lg font-semibold text-foreground',
}

/**
 * Badge Styling Utilities
 */
export const badgeStyles = {
  primary: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent',
  success: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald/10 text-emerald',
  warning: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  danger: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-destructive/10 text-destructive',
}

/**
 * Container Utilities
 */
export const containerStyles = {
  full: 'w-full',
  section: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  tight: 'max-w-2xl mx-auto px-4 sm:px-6 lg:px-8',
}

/**
 * Spacing/Gap Utilities
 */
export const spacingStyles = {
  compact: 'gap-3',
  normal: 'gap-4',
  loose: 'gap-6',
  spacious: 'gap-8',
  extraSpaciious: 'gap-12',
}

/**
 * Grid Utilities
 */
export const gridStyles = {
  cols1: 'grid-cols-1',
  cols2: 'grid-cols-1 md:grid-cols-2',
  cols3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  cols4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

/**
 * Shadow Utilities
 */
export const shadowStyles = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  hover: 'hover:shadow-lg transition-shadow duration-300',
}

/**
 * Border Utilities
 */
export const borderStyles = {
  thin: 'border border-border',
  thick: 'border-2 border-border',
  accent: 'border border-accent',
  accentThick: 'border-2 border-accent',
  rounded: 'rounded-lg',
  roundedFull: 'rounded-full',
}

/**
 * Flexbox Utilities
 */
export const flexStyles = {
  center: 'flex items-center justify-center',
  between: 'flex items-center justify-between',
  start: 'flex items-center justify-start',
  end: 'flex items-center justify-end',
  col: 'flex flex-col',
  colCenter: 'flex flex-col items-center justify-center',
}

/**
 * Text Utilities
 */
export const textStyles = {
  muted: 'text-muted-foreground',
  subtle: 'text-muted-foreground/70',
  accent: 'text-accent',
  primary: 'text-primary',
  secondary: 'text-secondary',
  error: 'text-destructive',
  small: 'text-sm text-muted-foreground',
  tiny: 'text-xs text-muted-foreground',
}

/**
 * Background Utilities
 */
export const bgStyles = {
  muted: 'bg-muted',
  card: 'bg-card',
  accent: 'bg-accent/10',
  accentHover: 'hover:bg-accent/20 transition-colors duration-200',
  gradient: 'bg-gradient-to-br from-background via-card to-background',
}

/**
 * Combined Utility Builders
 */
export const buildInputClass = (hasError = false) =>
  cn(inputStyles.base, inputStyles.focus, inputStyles.disabled, hasError && inputStyles.error)

export const buildButtonClass = (variant: keyof typeof buttonStyles = 'primary') =>
  cn('rounded-lg px-4 py-2 font-medium transition-all duration-200', buttonStyles[variant])

export const buildCardClass = (elevated = false, interactive = false) =>
  cn(cardStyles.base, cardStyles.padding, elevated && cardStyles.elevated, interactive && cardStyles.interactive)

/**
 * Responsive Padding
 */
export const responsivePadding = {
  section: 'py-12 md:py-16 lg:py-20',
  sectionCompact: 'py-8 md:py-12 lg:py-16',
  sectionLarge: 'py-16 md:py-24 lg:py-32',
}

/**
 * Responsive Font Sizes
 */
export const responsiveFontSize = {
  h1: 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
  h2: 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
  h3: 'text-xl md:text-2xl lg:text-3xl',
  body: 'text-base md:text-lg',
}

/**
 * Transition Utilities
 */
export const transitionStyles = {
  fast: 'transition-all duration-150',
  normal: 'transition-all duration-300',
  slow: 'transition-all duration-500',
}

/**
 * Accessibility Utilities
 */
export const a11yStyles = {
  focusRing: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
  srOnly: 'sr-only',
  ariaHidden: 'aria-hidden',
}

/**
 * Form Utilities
 */
export const formStyles = {
  label: 'block text-sm font-medium text-foreground mb-2',
  helper: 'text-xs text-muted-foreground mt-1',
  error: 'text-xs text-destructive mt-1',
  fieldWrapper: 'space-y-2',
  formGroup: 'space-y-4',
}

/**
 * List Utilities
 */
export const listStyles = {
  base: 'space-y-3',
  compact: 'space-y-2',
  loose: 'space-y-4',
  horizontal: 'flex gap-4 flex-wrap',
}
