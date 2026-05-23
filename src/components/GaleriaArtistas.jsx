import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

/* Real artist portraits + action shots from Unsplash */
const artistas = [
  {
    name: 'Valeria M.',
    role: 'Cantautora',
    img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=500&fit=crop&q=80',
    wide: false,
  },
  {
    name: 'En escena',
    role: 'Danza contemporánea',
    img: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58875?w=800&h=500&fit=crop&q=80',
    wide: true,
  },
  {
    name: 'Ramón T.',
    role: 'Director teatral',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
    wide: false,
  },
  {
    name: 'Carlos F.',
    role: 'Cineasta',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=500&fit=crop&q=80',
    wide: false,
  },
  {
    name: 'Taller de pintura',
    role: 'Artes Visuales',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=500&fit=crop&q=80',
    wide: true,
  },
  {
    name: 'Lissette B.',
    role: 'Diseñadora',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b169e38d?w=400&h=500&fit=crop&q=80',
    wide: false,
  },
  {
    name: 'Festival cultural',
    role: 'Eventos',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop&q=80',
    wide: true,
  },
  {
    name: 'Diego A.',
    role: 'Productor musical',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80',
    wide: false,
  },
  {
    name: 'Mariana C.',
    role: 'Artista visual',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&q=80',
    wide: false,
  },
  {
    name: 'Artesanía manabita',
    role: 'Patrimonio cultural',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=500&fit=crop&q=80',
    wide: true,
  },
]

export default function GaleriaArtistas() {
  const { ref, inView } = useInView(0.08)

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,155,60,0.05),transparent)]" />

      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="gold-line" />
            <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Galería</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="heading-lg text-cream-50 max-w-xl">
              Rostros y obras de{' '}
              <span className="text-gradient">la industria creativa</span>
            </h2>
            <p className="text-muted text-sm max-w-xs lg:pb-2 lg:text-right">
              Músicos, bailarines, pintores, artesanos y cineastas que hacen de Manabí
              un referente cultural del Ecuador.
            </p>
          </div>
        </motion.div>

        {/* Masonry-style photo grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {artistas.map((a, i) => (
            <motion.div
              key={a.name + i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-xl break-inside-avoid group cursor-pointer"
            >
              <img
                src={a.img}
                alt={a.name}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-serif text-sm text-white font-medium leading-tight">{a.name}</p>
                <p className="font-sans text-xs text-gold-400">{a.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 relative overflow-hidden rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1400&h=300&fit=crop&q=75"
            alt="Concierto en vivo"
            className="w-full h-36 md:h-44 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/30 flex items-center">
            <div className="section-padding max-w-7xl w-full">
              <blockquote className="font-serif text-xl md:text-3xl text-white font-medium max-w-2xl leading-tight">
                "El arte no es un lujo —{' '}
                <em className="text-gradient not-italic">es la raíz de nuestra identidad.</em>"
              </blockquote>
              <p className="font-sans text-xs text-white/50 mt-2 tracking-wide">— CIAC Manta</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
