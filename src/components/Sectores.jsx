import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowUpRight } from 'lucide-react'

const sectores = [
  {
    title: 'Música',
    desc: 'Músicos, compositores, productores y técnicos de sonido.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=700&fit=crop&q=80',
    color: 'from-gold-900/80',
    members: '120+ afiliados',
  },
  {
    title: 'Artes Escénicas',
    desc: 'Teatro, danza, circo y performance en vivo.',
    img: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=700&fit=crop&q=80',
    color: 'from-coral-500/70',
    members: '85+ afiliados',
  },
  {
    title: 'Audiovisual',
    desc: 'Cine, televisión, fotografía y producción digital.',
    img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=700&fit=crop&q=80',
    color: 'from-indigo-900/80',
    members: '64+ afiliados',
  },
  {
    title: 'Artes Visuales',
    desc: 'Pintores, escultores, ilustradores y artistas plásticos.',
    img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=700&fit=crop&q=80',
    color: 'from-gold-900/80',
    members: '93+ afiliados',
  },
  {
    title: 'Artesanía',
    desc: 'Maestros de oficios tradicionales y patrimonio material.',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=700&fit=crop&q=80',
    color: 'from-coral-500/70',
    members: '58+ afiliados',
  },
  {
    title: 'Diseño & Publicidad',
    desc: 'Diseñadores, directores de arte y creativos publicitarios.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=700&fit=crop&q=80',
    color: 'from-indigo-900/80',
    members: '47+ afiliados',
  },
  {
    title: 'Gastronomía Cultural',
    desc: 'Chefs y cocineros que elevan la gastronomía manabita.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a624ab?w=600&h=700&fit=crop&q=80',
    color: 'from-gold-900/80',
    members: '39+ afiliados',
  },
  {
    title: 'Literatura',
    desc: 'Escritores, poetas y editores que enriquecen la lengua.',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=700&fit=crop&q=80',
    color: 'from-coral-500/70',
    members: '41+ afiliados',
  },
]

export default function Sectores() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="sectores" ref={ref} className="py-24 lg:py-32 relative overflow-hidden bg-ink-900">

      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-4 mb-14"
        >
          <div className="flex items-center gap-3">
            <div className="gold-line" />
            <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Sectores creativos</span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg text-cream-50 max-w-2xl">
            Ocho industrias creativas,{' '}
            <span className="text-gradient">un solo movimiento</span>
          </h2>
          <p className="text-muted text-base max-w-lg">
            Cada sector tiene su voz, su identidad y su fuerza. Juntos somos la industria
            artística más diversa de Manabí.
          </p>
        </motion.div>

        {/* Photo card grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {sectores.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
            >
              {/* Photo */}
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Always-on dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

              {/* Hover: extra color tint */}
              <div className={`absolute inset-0 bg-gradient-to-t ${s.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-1.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base md:text-lg text-white font-medium leading-tight">
                    {s.title}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={11} className="text-gold-400" />
                  </div>
                </div>
                <p className="font-sans text-xs text-white/60 leading-snug line-clamp-2 max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-500">
                  {s.desc}
                </p>
                <span className="font-sans text-[10px] text-gold-400/80 tracking-wide">{s.members}</span>
              </div>

              {/* Top badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-[10px] text-white/70 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                  CIAC
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More sectors note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="font-sans text-sm text-cream-400">
            Y 4 sectores más: Gestión Cultural · Media Digital · Eventos · Medios Culturales.{' '}
            <a href="#contacto" className="text-gold-400 hover:text-gold-300 underline underline-offset-4 transition-colors">
              Contáctanos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
