interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = 'px-4 py-2 rounded font-semibold transition-colors cursor-pointer text-background focus:outline-2 focus:outline-offset-2 shadow-sm'
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 focus:outline-primary',
    secondary: 'bg-secondary hover:bg-secondary/90 focus:outline-secondary',
  }

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
