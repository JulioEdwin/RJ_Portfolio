import React from 'react'

const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-sm shadow-primary/25',
    secondary:
      'bg-white text-navy border border-slate-200 hover:border-primary hover:text-primary focus:ring-primary',
    outline:
      'bg-transparent text-primary border border-primary/40 hover:bg-primary hover:text-white focus:ring-primary',
    outlineLight:
      'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white focus:ring-white',
    ghost: 'text-primary hover:bg-slate-100',
    dark: 'bg-navy text-white hover:bg-navy-light focus:ring-navy',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal || target ? { target: target || '_blank', rel: rel || 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button