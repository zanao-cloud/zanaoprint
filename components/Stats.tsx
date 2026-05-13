'use client'

import { motion, type Variants } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { target: 5, prefix: '+', suffix: ' anos', label: 'de Experiência', desc: 'no mercado de comunicação visual' },
  { target: 50, prefix: '+', suffix: '', label: 'Clientes Atendidos', desc: 'empresas satisfeitas em toda a região' },
  { target: 67, prefix: '+', suffix: '', label: 'Projetos Entregues', desc: 'trabalhos concluídos com excelência' },
  { target: 3, prefix: '+', suffix: '', label: 'Cidades Atendidas', desc: 'cobrindo Grande SP e interior' },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-16 lg:py-24 bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-magenta/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map(({ target, prefix, suffix, label, desc }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="relative text-center p-5 lg:p-8 rounded-xl bg-background border border-border overflow-hidden group hover:border-accent-cyan/40 transition-colors duration-300"
            >
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta"
                aria-hidden="true"
              />
              <div className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl text-accent-cyan text-glow-cyan mb-2">
                <AnimatedCounter target={target} prefix={prefix} suffix={suffix} />
              </div>
              <div className="font-orbitron font-bold text-text-primary text-sm lg:text-base mb-1 tracking-wide leading-tight">
                {label}
              </div>
              <div className="text-text-secondary text-xs hidden sm:block">{desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
