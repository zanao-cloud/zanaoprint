const clients = [
  'Alfa Lix',
  'Transbaruc',
  'Caoeste',
  'Uni Drummond',
  'Auto Center SP',
  'Escola Futuro',
  'Alfa Lix',
  'Transbaruc',
  'Caoeste',
  'Uni Drummond',
  'Auto Center SP',
  'Escola Futuro',
]

export default function MarqueeClients() {
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex gap-16 animate-marquee"
        style={{ willChange: 'transform', width: 'max-content' }}
        aria-hidden="true"
      >
        {[...clients, ...clients].map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300 whitespace-nowrap select-none"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan/40 inline-block" />
            <span className="text-lg font-orbitron tracking-widest uppercase text-sm">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
