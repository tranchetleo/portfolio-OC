interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = 'px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer text-background focus:outline-2 focus:outline-offset-2 shadow-sm hover:scale-105 transition-transform duration-400'
  const variants = {
    primary: 'bg-primary hover:bg-primary/80 focus:outline-primary',
    secondary: 'bg-secondary hover:bg-secondary/80 focus:outline-secondary',
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
