'use client'

import { motion, type Variants } from 'framer-motion'
import { Layers, Type, Zap, MapPin, Umbrella, Sparkles } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'

const services = [
  {
    icon: Layers,
    title: 'Fachadas em ACM',
    desc: 'Revestimentos modernos em painel composto de alumínio, com acabamento impecável e durabilidade superior.',
    color: 'text-accent-cyan',
    glow: 'group-hover:text-glow-cyan',
  },
  {
    icon: Type,
    title: 'Letra Caixa',
    desc: 'Letras e logos em relevo com acabamento em acrílico, alumínio escovado ou inox, com ou sem iluminação.',
    color: 'text-accent-magenta',
    glow: 'group-hover:text-glow-magenta',
  },
  {
    icon: Zap,
    title: 'Luminosos',
    desc: 'Painéis e displays iluminados com LED de alta eficiência, com visibilidade diurna e noturna.',
    color: 'text-accent-yellow',
    glow: '',
  },
  {
    icon: MapPin,
    title: 'Sinalizações',
    desc: 'Soluções completas de sinalização interna e externa, direcionamento e identidade visual de ambientes.',
    color: 'text-accent-cyan',
    glow: 'group-hover:text-glow-cyan',
  },
  {
    icon: Umbrella,
    title: 'Toldos',
    desc: 'Toldos sob medida em diversos modelos e tecidos, protegendo e valorizando seu espaço comercial.',
    color: 'text-accent-magenta',
    glow: 'group-hover:text-glow-magenta',
  },
  {
    icon: Sparkles,
    title: 'Projetos Especiais',
    desc: 'Soluções personalizadas de comunicação visual e reformas para projetos únicos e desafiadores.',
    color: 'text-accent-yellow',
    glow: '',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-3">
            O que fazemos
          </p>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            NOSSOS{' '}
            <span className="text-accent-cyan text-glow-cyan">SERVIÇOS</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, desc, color }) => (
            <motion.div key={title} variants={itemVariants}>
              <GlowCard className="h-full">
                <div className={`${color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-orbitron font-bold text-text-primary text-lg mb-3 tracking-wide">
                  {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
