'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import InstagramIcon from '@/components/ui/InstagramIcon'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', 'servicos', 'portfolio', 'quem-somos', 'contato']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navCls = scrolled
    ? 'backdrop-blur-md bg-surface/90 border-b border-border shadow-[0_4px_30px_rgba(0,229,255,0.05)]'
    : 'bg-transparent'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navCls}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="font-orbitron text-xl lg:text-2xl font-black text-accent-cyan text-glow-cyan tracking-widest"
          >
            ZANÃO<span className="text-white">PRINT</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
            {links.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = activeSection === id
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    isActive ? 'text-accent-cyan' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent-cyan transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/zanaoprint"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @zanaoprint"
              className="text-text-secondary hover:text-accent-magenta transition-colors duration-200"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#contato"
              className="px-5 py-2.5 bg-accent-magenta hover:bg-accent-magenta-dark text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,0,110,0.4)]"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-text-secondary hover:text-accent-cyan transition-colors"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface/95 backdrop-blur-md border-b border-border px-4 py-6 space-y-1">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-text-secondary hover:text-accent-cyan hover:bg-surface-2 rounded-lg transition-colors text-sm font-medium"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-4 py-3 bg-accent-magenta text-white text-center text-sm font-semibold rounded-lg"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
