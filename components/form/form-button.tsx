import React from 'react'
import { cn } from '@/lib/utils'
import { buttonStyles } from '@/lib/tailwind-utils'
import { Loader2 } from 'lucide-react'

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const FormButton = React.forwardRef<HTMLButtonElement, FormButtonProps>(
  (
    { variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, className, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed',
          buttonStyles[variant],
          sizeStyles[size],
          className,
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    )
  },
)

FormButton.displayName = 'FormButton'
