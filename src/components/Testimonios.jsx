import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Quote } from 'lucide-react'

const testimonios = [
  {
    name:    'Valeria Mendoza',
    role:    'Cantautora · Manta',
    sector:  'Música',
    quote:   'CIAC me dio la orientación legal que necesitaba cuando firmé mi primer contrato discográfico. Sin su asesoría, hubiera perdido derechos importantes sobre mi propia música.',
    img:     'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=120&h=120&fit=crop&q=80',
    accent:  'gold',
  },
  {
    name:    'Ramón Torres',
    role:    'Director teatral · Portoviejo',
    sector:  'Teatro',
    quote:   'Gracias a la red de CIAC conseguimos financiamiento para nuestra temporada. La conexión con empresas patrocinadoras fue fundamental para sacar adelante el proyecto.',
    img:     'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80',
    accent:  'coral',
  },
  {
    name:    'Lissette Bravo',
    role:    'Diseñadora gráfica · Manta',
    sector:  'Diseño',
    quote:   'El taller de emprendimiento cultural cambió mi visión de negocio. Hoy tengo un estudio propio y tres clientes regulares que llegaron gracias al directorio de CIAC.',
    img:     'https://images.unsplash.com/photo-1494790108755-2616b169e38d?w=120&h=120&fit=crop&q=80',
    accent:  'indigo',
  },
  {
    name:    'Carlos Fuentes',
    role:    'Cineasta independiente · Manta',
    sector:  'Audiovisual',
    quote:   'Ganamos el fondo IFAIC gracias al acompañamiento de CIAC en la postulación. Nuestro cortometraje compite hoy en festivales internacionales.',
    img:     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&q=80',
    accent:  'gold',
  },
  {
    name:    'Mariana Cedeño',
    role:    'Artista visual · Manta',
    sector:  'Artes Visuales',
    quote:   'Expuse mis pinturas en la galería de CIAC y tuve acceso a compradores que nunca hubiera conocido sola. La visibilidad cambió el rumbo de mi carrera.',
    img:     'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80',
    accent:  'coral',
  },
  {
    name:    'Diego Alvarado',
    role:    'Productor musical · Chone',
    sector:  'Música',
    quote:   'El carnet de CIAC me abrió puertas en licitaciones culturales del municipio. Es la credencial que le da peso y seriedad a tu trabajo como profesional.',
    img:     'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80',
    accent:  'indigo',
  },
]

const accentBorder = {
  gold:   'border-gold-500/30 hover:border-gold-500/60',
  coral:  'border-coral-400/30 hover:border-coral-400/60',
  indigo: 'border-indigo-400/30 hover:border-indigo-400/60',
}
const accentBadge = {
  gold:   'bg-gold-500/10 text-gold-400',
  coral:  'bg-coral-400/10 text-coral-400',
  indigo: 'bg-indigo-400/10 text-indigo-400',
}

export default function Testimonios() {
  const { ref, inView } = useInView(0.08)

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden bg-ink-900">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className={`card-dark p-6 flex flex-col gap-5 border transition-all duration-300 ${accentBorder[t.accent]}`}
            >
              <Quote size={20} className="text-gold-500/25 flex-shrink-0" />
              <p className="font-sans text-sm text-cream-200 leading-relaxed italic flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10 flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-sans text-sm text-cream-100 font-medium truncate">{t.name}</span>
                  <span className="font-sans text-xs text-cream-400 truncate">{t.role}</span>
                </div>
                <span className={`ml-auto flex-shrink-0 font-sans text-[10px] font-medium px-2.5 py-1 rounded-full ${accentBadge[t.accent]}`}>
                  {t.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
