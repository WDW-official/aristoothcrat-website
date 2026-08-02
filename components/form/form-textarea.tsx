import React from 'react'
import { cn } from '@/lib/utils'
import { inputStyles } from '@/lib/tailwind-utils'

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helper?: string
  characterCount?: boolean
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, helper, characterCount = false, className, maxLength, ...props }, ref) => {
    const [count, setCount] = React.useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCount(e.target.value.length)
      props.onChange?.(e)
    }

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-foreground">
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            className={cn(
              inputStyles.base,
              inputStyles.focus,
              inputStyles.disabled,
              error && inputStyles.error,
              'resize-vertical min-h-[120px]',
              className,
            )}
            maxLength={maxLength}
            onChange={handleChange}
            {...props}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            {error && <p className="text-xs text-destructive">{error}</p>}
            {helper && <p className="text-xs text-muted-foreground">{helper}</p>}
          </div>
          {characterCount && maxLength && (
            <p className="text-xs text-muted-foreground">
              {count}/{maxLength}
            </p>
          )}
        </div>
      </div>
    )
  },
)

FormTextarea.displayName = 'FormTextarea'
