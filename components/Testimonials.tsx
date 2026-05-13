'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    initials: 'RL',
    name: 'Ricardo Lima',
    company: 'Auto Center SP',
    text: 'A Zanão Print transformou completamente a fachada do nosso auto center. O resultado ficou muito acima do esperado — profissionalismo e qualidade do começo ao fim.',
    stars: 5,
    color: 'from-accent-cyan/20 to-accent-cyan/5',
    border: 'border-accent-cyan/30',
    avatar: 'bg-accent-cyan/20 text-accent-cyan',
  },
  {
    initials: 'MF',
    name: 'Marina Ferreira',
    company: 'Escola Municipal Futuro',
    text: 'Contratamos para toda a sinalização interna e externa da escola. Entregaram no prazo, com acabamento impecável. Os alunos adoraram o resultado!',
    stars: 5,
    color: 'from-accent-magenta/20 to-accent-magenta/5',
    border: 'border-accent-magenta/30',
    avatar: 'bg-accent-magenta/20 text-accent-magenta',
  },
  {
    initials: 'PS',
    name: 'Paulo Souza',
    company: 'Caoeste Transportes',
    text: 'Fizemos a identidade visual completa da nossa sede. A equipe foi super atenciosa, sugeriu soluções que nem imaginávamos e o prazo foi cumprido certinho.',
    stars: 5,
    color: 'from-accent-yellow/20 to-accent-yellow/5',
    border: 'border-accent-yellow/30',
    avatar: 'bg-accent-yellow/20 text-accent-yellow',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-3">
            Avaliações
          </p>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            O QUE DIZEM NOSSOS{' '}
            <span className="text-accent-cyan text-glow-cyan">CLIENTES</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ initials, name, company, text, stars, color, border, avatar }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className={`relative rounded-xl border ${border} bg-gradient-to-br ${color} bg-surface-2 p-6 flex flex-col gap-4`}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: stars }).map((_, s) => (
                  <Star key={s} size={14} className="text-accent-yellow fill-accent-yellow" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full ${avatar} flex items-center justify-center font-orbitron font-bold text-sm shrink-0`}>
                  {initials}
                </div>
                <div>
                  <div className="text-text-primary text-sm font-semibold">{name}</div>
                  <div className="text-text-secondary text-xs">{company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
