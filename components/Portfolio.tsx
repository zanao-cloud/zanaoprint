'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, Zap, Umbrella, MapPin, Sparkles, ArrowRight, type LucideIcon } from 'lucide-react'

type Category = 'Todos' | 'Fachadas' | 'Luminosos' | 'Toldos' | 'Sinalizações' | 'Especiais'

interface Project {
  id: number
  title: string
  category: Exclude<Category, 'Todos'>
  description: string
  gradient: string
  icon: LucideIcon
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Fachada ACM Centro Comercial',
    category: 'Fachadas',
    description: 'Revestimento completo em ACM com iluminação embutida',
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.25) 0%, rgba(0,176,204,0.1) 50%, #0D1117 100%)',
    icon: Layers,
  },
  {
    id: 2,
    title: 'Luminoso LED Auto Center',
    category: 'Luminosos',
    description: 'Painel iluminado com LED de alta eficiência',
    gradient: 'linear-gradient(135deg, rgba(255,0,110,0.25) 0%, rgba(204,0,88,0.1) 50%, #0D1117 100%)',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Sinalização Escola Municipal',
    category: 'Sinalizações',
    description: 'Sistema completo de sinalização interna e externa',
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(255,0,110,0.15) 50%, #0D1117 100%)',
    icon: MapPin,
  },
  {
    id: 4,
    title: 'Toldo Retrátil Restaurante',
    category: 'Toldos',
    description: 'Toldo sob medida com lona importada',
    gradient: 'linear-gradient(135deg, rgba(255,229,0,0.25) 0%, rgba(200,180,0,0.1) 50%, #0D1117 100%)',
    icon: Umbrella,
  },
  {
    id: 5,
    title: 'Fachada Clínica Odontológica',
    category: 'Fachadas',
    description: 'Identidade visual completa com ACM e letra caixa',
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.2) 0%, rgba(0,229,255,0.05) 50%, #0D1117 100%)',
    icon: Layers,
  },
  {
    id: 6,
    title: 'Projeto Especial Showroom',
    category: 'Especiais',
    description: 'Ambientação completa para showroom automotivo',
    gradient: 'linear-gradient(135deg, rgba(255,229,0,0.15) 0%, rgba(255,0,110,0.15) 50%, #0D1117 100%)',
    icon: Sparkles,
  },
  {
    id: 7,
    title: 'Luminoso Farmácia 24h',
    category: 'Luminosos',
    description: 'Totem luminoso com visibilidade máxima',
    gradient: 'linear-gradient(135deg, rgba(255,0,110,0.2) 0%, rgba(255,0,110,0.05) 50%, #0D1117 100%)',
    icon: Zap,
  },
  {
    id: 8,
    title: 'Sinalização Academia Fitness',
    category: 'Sinalizações',
    description: 'Sinalização de emergência e identidade visual',
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(255,229,0,0.1) 50%, #0D1117 100%)',
    icon: MapPin,
  },
]

const categories: Category[] = ['Todos', 'Fachadas', 'Luminosos', 'Toldos', 'Sinalizações', 'Especiais']

export default function Portfolio() {
  const [active, setActive] = useState<Category>('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-3">
            Trabalhos realizados
          </p>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            NOSSOS{' '}
            <span className="text-accent-cyan text-glow-cyan">PROJETOS</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-accent-cyan text-background font-semibold shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'border border-border text-text-secondary hover:border-accent-cyan/50 hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map(({ id, title, category, description, gradient, icon: Icon }) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border hover:border-accent-cyan/40 transition-colors duration-300 cursor-pointer"
                style={{ background: gradient }}
              >
                {/* Icon watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Icon size={80} strokeWidth={0.8} />
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-background/70 backdrop-blur-sm rounded text-accent-cyan text-xs font-mono">
                  {category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <Icon size={32} className="text-accent-cyan mb-3" strokeWidth={1.5} />
                  <h3 className="font-orbitron font-bold text-text-primary text-sm mb-1 leading-snug">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent-cyan/50 text-accent-cyan text-sm font-medium rounded-lg hover:bg-accent-cyan/10 transition-all duration-200"
          >
            Solicitar projeto personalizado
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
