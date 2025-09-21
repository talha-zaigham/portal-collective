import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'luxury' | 'luxury-secondary' | 'default' | 'outline'
  size?: 'default' | 'lg' | 'xl'
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'luxury', size = 'default', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50'
    
    const variantClasses = {
      luxury: 'btn-luxury',
      'luxury-secondary': 'btn-luxury-secondary',
      default: 'bg-white text-black hover:bg-gray-200 rounded-md',
      outline: 'border border-accent text-accent hover:bg-accent hover:text-black bg-transparent rounded-md'
    }
    
    const sizeClasses = {
      default: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-6 py-3 text-base',
      xl: 'h-14 px-8 py-4 text-lg'
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }