import React from 'react'
import { cn } from '@/lib/utils'
import { badgeStyles } from '@/lib/tailwind-utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeStyles
  icon?: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', icon, className, children, ...props }, ref) => (
    <span ref={ref} className={cn(badgeStyles[variant], className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  ),
)

Badge.displayName = 'Badge'
