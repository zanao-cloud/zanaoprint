import { MessageCircle } from 'lucide-react'
import InstagramIcon from '@/components/ui/InstagramIcon'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      {/* Gradient top line */}
      <div className="h-px bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-cyan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="font-orbitron text-2xl font-black text-accent-cyan text-glow-cyan tracking-widest mb-3">
              ZANÃO<span className="text-white">PRINT</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Especialistas em comunicação visual e reformas. Transformando marcas em
              referência na Grande São Paulo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/zanaoprint"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @zanaoprint"
                className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-text-secondary hover:text-accent-magenta hover:border-accent-magenta/50 transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://wa.me/5511982857385"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-text-secondary hover:text-whatsapp hover:border-whatsapp/50 transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-orbitron font-bold text-text-primary text-sm tracking-widest uppercase mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-text-secondary text-sm hover:text-accent-cyan transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-orbitron font-bold text-text-primary text-sm tracking-widest uppercase mb-4">
              Contato
            </h3>
            <div className="space-y-2 text-text-secondary text-sm">
              <p>
                <a href="mailto:leonardo@zanaoprint.com.br" className="hover:text-accent-cyan transition-colors">
                  leonardo@zanaoprint.com.br
                </a>
              </p>
              <p>
                <a href="tel:+5511982857385" className="hover:text-accent-cyan transition-colors">
                  (11) 98285-7385
                </a>
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Benedito+Alves+Tur%C3%ADbio,+1574,+Bandeiras,+Osasco,+SP,+06160-004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-cyan transition-colors"
              >
                Av. Benedito Alves Turíbio, 1574<br />
                Bandeiras, Osasco - SP, 06160-004
              </a>
              <p className="font-mono text-xs text-text-secondary pt-2">
                CNPJ: 57.566.841/0001-88
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-text-secondary text-xs">
          <p>© 2026 Zanão Print — Todos os direitos reservados.</p>
          <p className="font-mono">Comunicação Visual & Reformas</p>
        </div>
      </div>
    </footer>
  )
}
