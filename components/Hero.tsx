'use client'

import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const particles = [
  { top: '10%', left: '5%', size: 20, delay: '0s', opacity: 0.3 },
  { top: '20%', left: '85%', size: 30, delay: '1s', opacity: 0.2 },
  { top: '60%', left: '90%', size: 15, delay: '2s', opacity: 0.4 },
  { top: '75%', left: '8%', size: 25, delay: '0.5s', opacity: 0.25 },
  { top: '40%', left: '3%', size: 12, delay: '1.5s', opacity: 0.35 },
  { top: '85%', left: '70%', size: 35, delay: '3s', opacity: 0.15 },
  { top: '15%', left: '50%', size: 18, delay: '2.5s', opacity: 0.2 },
  { top: '50%', left: '60%', size: 22, delay: '0.8s', opacity: 0.3 },
  { top: '30%', left: '25%', size: 14, delay: '1.8s', opacity: 0.25 },
  { top: '70%', left: '40%', size: 28, delay: '3.5s', opacity: 0.18 },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 140])

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center scanlines"
    >
      {/* Dot grid with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="dot-grid absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute animate-float pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
          aria-hidden="true"
        >
          <div
            style={{
              width: p.size,
              height: p.size,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background:
                i % 3 === 0
                  ? 'rgba(0,229,255,0.6)'
                  : i % 3 === 1
                  ? 'rgba(255,0,110,0.6)'
                  : 'rgba(255,229,0,0.6)',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="text-accent-cyan font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-6"
          >
            ✦ Comunicação Visual & Reformas ✦
          </motion.p>

          <motion.h1
            variants={item}
            className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight mb-2"
          >
            <span className="block text-glow-cyan text-accent-cyan">COMUNICAÇÃO</span>
            <span className="block text-white">VISUAL QUE</span>
            <span className="block bg-gradient-to-r from-accent-cyan via-white to-accent-magenta bg-clip-text text-transparent">
              TRANSFORMA
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-orbitron font-bold text-xl sm:text-2xl lg:text-3xl text-white mt-4 mb-2 tracking-wide"
          >
            MARCAS EM REFERÊNCIA
          </motion.p>

          <motion.p
            variants={item}
            className="text-text-secondary text-sm sm:text-base mt-6 mb-10 tracking-wider"
          >
            Fachadas em ACM&nbsp;&bull;&nbsp;Letra Caixa&nbsp;&bull;&nbsp;Luminosos&nbsp;&bull;&nbsp;Sinalizações&nbsp;&bull;&nbsp;Toldos
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 border border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan/10 hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all duration-300 text-sm tracking-wider"
            >
              Ver Portfólio
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-accent-magenta text-white font-semibold rounded-lg hover:bg-accent-magenta-dark hover:shadow-[0_0_25px_rgba(255,0,110,0.4)] transition-all duration-300 text-sm tracking-wider"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent-cyan transition-colors animate-bounce-slow"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
