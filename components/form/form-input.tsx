import React from 'react'
import { cn } from '@/lib/utils'
import { inputStyles } from '@/lib/tailwind-utils'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
  icon?: React.ReactNode
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helper, icon, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-foreground">
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>}
          <input
            ref={ref}
            className={cn(
              inputStyles.base,
              inputStyles.focus,
              inputStyles.disabled,
              error && inputStyles.error,
              icon && 'pl-10',
              className,
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-destructive">{error}</p>}
        {helper && <p className="text-xs text-muted-foreground">{helper}</p>}
      </div>
    )
  },
)

FormInput.displayName = 'FormInput'
