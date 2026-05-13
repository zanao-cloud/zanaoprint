import MarqueeClients from '@/components/ui/MarqueeClients'

export default function Clients() {
  return (
    <section className="py-16 bg-surface-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-3">
            Parceiros
          </p>
          <h2 className="font-orbitron font-black text-2xl sm:text-3xl lg:text-4xl text-white">
            EMPRESAS QUE{' '}
            <span className="text-accent-cyan text-glow-cyan">CONFIAM NA GENTE</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full" />
        </div>
      </div>

      <MarqueeClients />
    </section>
  )
}
