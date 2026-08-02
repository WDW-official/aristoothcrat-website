import React from 'react'
import { cn } from '@/lib/utils'
import { cardStyles } from '@/lib/tailwind-utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean
  interactive?: boolean
  hoverable?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ elevated = false, interactive = false, hoverable = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardStyles.base,
          cardStyles.padding,
          elevated && cardStyles.elevated,
          interactive && cardStyles.interactive,
          hoverable && cardStyles.hover,
          className,
        )}
        {...props}
      />
    )
  },
)

Card.displayName = 'Card'

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-1', className)} {...props} />
))

CardHeader.displayName = 'CardHeader'

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('font-serif text-2xl font-bold text-foreground', className)} {...props} />
))

CardTitle.displayName = 'CardTitle'

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  ),
)

CardDescription.displayName = 'CardDescription'

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-4', className)} {...props} />
))

CardContent.displayName = 'CardContent'

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center justify-between pt-4 border-t border-border', className)} {...props} />
  ),
)

CardFooter.displayName = 'CardFooter'
