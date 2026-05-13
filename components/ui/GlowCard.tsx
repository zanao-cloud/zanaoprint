import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function GlowCard({ children, className = '' }: Props) {
  return (
    <div
      className={`group relative bg-surface border border-border rounded-xl p-6 transition-all duration-300 hover:border-accent-cyan/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  )
}
