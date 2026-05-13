'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Briefcase } from 'lucide-react'

const items = [
  {
    icon: Award,
    title: 'Qualidade Superior',
    desc: 'Materiais de alta qualidade e técnicas modernas para garantir o melhor resultado em cada projeto.',
    border: 'border-accent-cyan',
    iconColor: 'text-accent-cyan',
    bg: 'bg-accent-cyan/5',
  },
  {
    icon: Clock,
    title: 'Pontualidade',
    desc: 'Cumprimos os prazos acordados com seriedade e compromisso. Seu tempo é tão valioso quanto o nosso.',
    border: 'border-accent-magenta',
    iconColor: 'text-accent-magenta',
    bg: 'bg-accent-magenta/5',
  },
  {
    icon: Briefcase,
    title: '+10 Anos de Experiência',
    desc: 'Uma década de projetos nos tornam especialistas em comunicação visual e decoração de ambientes.',
    border: 'border-accent-yellow',
    iconColor: 'text-accent-yellow',
    bg: 'bg-accent-yellow/5',
  },
]

export default function Diferenciais() {
  return (
    <section className="section-padding bg-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-3">
            Por que nos escolher
          </p>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            NOSSOS{' '}
            <span className="text-accent-cyan text-glow-cyan">DIFERENCIAIS</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-yellow rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, border, iconColor, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              className={`relative flex gap-5 p-6 rounded-xl border-l-4 ${border} ${bg} bg-surface border border-border hover:border-opacity-60 transition-all duration-300`}
            >
              <div className={`${iconColor} shrink-0 mt-1`}>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-text-primary text-lg mb-2 tracking-wide">
                  {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
