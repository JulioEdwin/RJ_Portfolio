import React from 'react'

const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseStyles =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap'

  const variants = {
    default: 'bg-slate-100 text-slate-600',
    primary: 'bg-primary/10 text-primary',
    primarySolid: 'bg-primary text-white',
    navy: 'bg-navy/5 text-navy',
    outline: 'bg-transparent border border-slate-200 text-slate-600',
    outlineLight: 'bg-transparent border border-white/25 text-slate-300',
    dark: 'bg-white/8 text-slate-300',
  }

  return <span className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</span>
}

export default Badge