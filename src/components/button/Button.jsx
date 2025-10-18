import React from 'react'

const Button = ({ children, icon, iconPosition = 'left', className = '', onClick, disabled = false, variant = 'primary', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'btn-primary hover-lift',
    secondary: 'btn-secondary hover-lift',
    outline: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-primary-green hover:text-primary-green hover:bg-gray-50'
  }
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  )
}

export default Button