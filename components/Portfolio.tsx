'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type Category = 'Todos' | 'Fachadas em ACM' | 'Envelopamento' | 'Interiores'

interface Project {
  id: number
  title: string
  category: Exclude<Category, 'Todos'>
  image: string
}

const projects: Project[] = [
  // Fachadas em ACM
  { id: 1,  title: 'Fachada em ACM',   category: 'Fachadas em ACM', image: '/images/portfolio/fachadas/fachada-1.jpg' },
  { id: 2,  title: 'Fachada em ACM',   category: 'Fachadas em ACM', image: '/images/portfolio/fachadas/fachada-2.jpg' },
  { id: 3,  title: 'Fachada em ACM',   category: 'Fachadas em ACM', image: '/images/portfolio/fachadas/fachada-3.jpg' },
  { id: 4,  title: 'Fachada em ACM',   category: 'Fachadas em ACM', image: '/images/portfolio/fachadas/fachada-4.jpg' },
  { id: 5,  title: 'Fachada em ACM',   category: 'Fachadas em ACM', image: '/images/portfolio/fachadas/fachada-5.jpg' },
  { id: 6,  title: 'Fachada em ACM',   category: 'Fachadas em ACM', image: '/images/portfolio/fachadas/fachada-6.jpg' },
  // Envelopamento veicular
  { id: 7,  title: 'Envelopamento',    category: 'Envelopamento',   image: '/images/portfolio/envelopamento/env-1.jpg' },
  { id: 8,  title: 'Envelopamento',    category: 'Envelopamento',   image: '/images/portfolio/envelopamento/env-2.jpg' },
  { id: 9,  title: 'Envelopamento',    category: 'Envelopamento',   image: '/images/portfolio/envelopamento/env-3.jpg' },
  { id: 10, title: 'Envelopamento',    category: 'Envelopamento',   image: '/images/portfolio/envelopamento/env-4.jpg' },
  { id: 11, title: 'Envelopamento',    category: 'Envelopamento',   image: '/images/portfolio/envelopamento/env-5.jpg' },
  { id: 12, title: 'Envelopamento',    category: 'Envelopamento',   image: '/images/portfolio/envelopamento/env-6.jpg' },
  // Interiores
  { id: 13, title: 'Interiores',       category: 'Interiores',      image: '/images/portfolio/interiores/int-1.jpg' },
  { id: 14, title: 'Interiores',       category: 'Interiores',      image: '/images/portfolio/interiores/int-2.jpg' },
  { id: 15, title: 'Interiores',       category: 'Interiores',      image: '/images/portfolio/interiores/int-3.jpg' },
  { id: 16, title: 'Interiores',       category: 'Interiores',      image: '/images/portfolio/interiores/int-4.jpg' },
  { id: 17, title: 'Interiores',       category: 'Interiores',      image: '/images/portfolio/interiores/int-5.jpg' },
  { id: 18, title: 'Interiores',       category: 'Interiores',      image: '/images/portfolio/interiores/int-6.jpg' },
]

const categories: Category[] = ['Todos', 'Fachadas em ACM', 'Envelopamento', 'Interiores']

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
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map(({ id, title, category, image }) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border hover:border-accent-cyan/40 transition-colors duration-300"
              >
                <Image
                  src={image}
                  alt={`${category} - Zanão Print`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-background/70 backdrop-blur-sm rounded text-accent-cyan text-xs font-mono z-10">
                  {category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
                  <p className="font-orbitron font-bold text-text-primary text-sm tracking-wide">
                    {category}
                  </p>
                  <p className="text-accent-cyan text-xs mt-1 font-mono">Zanão Print</p>
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
