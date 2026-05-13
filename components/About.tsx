'use client'

import { motion, type Variants } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const badges = ['✦ Qualidade', '✦ Pontualidade', '✦ Experiência']

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="quem-somos" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-3"
            >
              Nossa história
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight"
            >
              QUEM{' '}
              <span className="text-accent-cyan text-glow-cyan">SOMOS</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed text-base mb-6"
            >
              A Zanão Print é uma empresa especializada em comunicação visual e projetos
              especiais. Com mais de 10 anos de experiência no mercado, ajudamos nossos
              clientes a transformar ideias em realidade, unindo criatividade, tecnologia e
              qualidade.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed text-base mb-8"
            >
              Seja para ambientes internos ou externos, nosso compromisso é entregar não
              apenas materiais, mas experiências visuais que fortaleçam sua marca e
              impulsionem seus resultados.
            </motion.p>

            {/* Checkpoints */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              {[
                'Materiais de alta qualidade e durabilidade comprovada',
                'Equipe especializada com +10 anos de experiência',
                'Atendimento personalizado e soluções sob medida',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full border border-accent-cyan/30 bg-surface-2 text-accent-cyan text-sm font-medium tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-accent-cyan/10 blur-3xl scale-110" />
              {/* Rotating ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full border border-accent-cyan/20 animate-spin-slow" />
                <div
                  className="absolute inset-4 rounded-full border border-accent-magenta/20"
                  style={{ animation: 'spin 15s linear infinite reverse' }}
                />
                {/* Logo center */}
                <div className="absolute inset-8 rounded-full bg-surface-2 border border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-orbitron font-black text-5xl sm:text-6xl text-accent-cyan text-glow-cyan">
                      Z
                    </div>
                    <div className="font-orbitron text-xs text-text-secondary tracking-widest mt-1">
                      ZANÃO
                    </div>
                    <div className="flex justify-center gap-1 mt-1">
                      <div className="w-3 h-3 rounded-full bg-accent-cyan" />
                      <div className="w-3 h-3 rounded-full bg-accent-magenta" />
                      <div className="w-3 h-3 rounded-full bg-accent-yellow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
