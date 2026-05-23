import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Quote } from 'lucide-react'

const testimonios = [
  {
    name:    'Valeria Mendoza',
    role:    'Cantautora · Manta',
    sector:  'Música',
    quote:   'CIAC me dio la orientación legal que necesitaba cuando firmé mi primer contrato discográfico. Sin su asesoría, hubiera perdido derechos importantes sobre mi propia música.',
    initial: 'V',
    color:   'gold',
  },
  {
    name:    'Ramón Torres',
    role:    'Director teatral · Portoviejo',
    sector:  'Teatro',
    quote:   'Gracias a la red de CIAC conseguimos financiamiento para nuestra temporada de teatro. La conexión con empresas patrocinadoras fue fundamental para sacar adelante el proyecto.',
    initial: 'R',
    color:   'coral',
  },
  {
    name:    'Lissette Bravo',
    role:    'Diseñadora gráfica · Manta',
    sector:  'Diseño',
    quote:   'El taller de emprendimiento cultural cambió completamente mi visión de negocio. Hoy tengo un estudio propio y tres clientes regulares que llegaron gracias al directorio de CIAC.',
    initial: 'L',
    color:   'indigo',
  },
  {
    name:    'Carlos Fuentes',
    role:    'Cineasta independiente · Manta',
    sector:  'Audiovisual',
    quote:   'CIAC nos apoyó en la postulación a la convocatoria del IFAIC. Ganamos el fondo y pudimos producir nuestro cortometraje que hoy compite en festivales internacionales.',
    initial: 'C',
    color:   'gold',
  },
  {
    name:    'Mariana Cedeño',
    role:    'Artista visual · Manta',
    sector:  'Artes Visuales',
    quote:   'Expuse mis pinturas en la galería de CIAC y tuve acceso a compradores que nunca hubiera conocido sola. La visibilidad que me dieron cambió el rumbo de mi carrera artística.',
    initial: 'M',
    color:   'coral',
  },
  {
    name:    'Diego Alvarado',
    role:    'Productor musical · Chone',
    sector:  'Música',
    quote:   'El carnet de CIAC me abrió puertas en licitaciones culturales del municipio. Es una credencial que le da peso y seriedad a tu trabajo como profesional del sector.',
    initial: 'D',
    color:   'indigo',
  },
]

const avatarColors = {
  gold:   'bg-gold-500/20 text-gold-400 ring-1 ring-gold-500/30',
  coral:  'bg-coral-400/20 text-coral-400 ring-1 ring-coral-400/30',
  indigo: 'bg-indigo-400/20 text-indigo-400 ring-1 ring-indigo-400/30',
}

export default function Testimonios() {
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref} className="py-28 lg:py-36 relative overflow-hidden bg-ink-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_50%,rgba(200,155,60,0.04),transparent)]" />

      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col gap-4 mb-14"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="gold-line" />
            <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Testimonios</span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg text-cream-50 max-w-2xl mx-auto">
            Lo que dicen nuestros{' '}
            <span className="text-gradient">artistas afiliados</span>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark p-6 flex flex-col gap-5 hover:border-white/10 transition-all duration-300"
            >
              <Quote size={20} className="text-gold-500/30 flex-shrink-0" />
              <p className="font-sans text-sm text-cream-300 leading-relaxed italic flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm font-medium flex-shrink-0 ${avatarColors[t.color]}`}>
                  {t.initial}
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-sm text-cream-100 font-medium">{t.name}</span>
                  <span className="font-sans text-xs text-cream-400">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
