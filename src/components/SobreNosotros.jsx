import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Shield, Users, TrendingUp, Globe } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Protección Gremial',
    desc: 'Defendemos los derechos legales de artistas y creadores ante instituciones públicas y privadas.',
  },
  {
    icon: Users,
    title: 'Comunidad Creativa',
    desc: 'Conectamos profesionales del sector artístico para crear redes de colaboración y apoyo mutuo.',
  },
  {
    icon: TrendingUp,
    title: 'Desarrollo Económico',
    desc: 'Promovemos políticas que fortalecen la industria creativa como motor económico del Ecuador.',
  },
  {
    icon: Globe,
    title: 'Proyección Nacional',
    desc: 'Visibilizamos el talento de Manabí a nivel nacional e internacional, abriendo nuevos mercados.',
  },
]

/* Side photo strip — authentic artistic shots */
const sidePhotos = [
  {
    src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&h=340&fit=crop&q=80',
    alt: 'Artista en estudio',
  },
  {
    src: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&h=340&fit=crop&q=80',
    alt: 'Bailarines en ensayo',
  },
  {
    src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=500&h=340&fit=crop&q=80',
    alt: 'Grabación musical',
  },
]

export default function SobreNosotros() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="nosotros" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(200,155,60,0.06),transparent)]" />

      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <div className="gold-line" />
                <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Quiénes somos</span>
              </div>
              <h2 className="heading-lg text-cream-50">
                El gremio que une a los
                <span className="text-gradient"> creadores de Manabí</span>
              </h2>
              <p className="text-muted text-base leading-relaxed">
                La Cámara de la Industria Artística y Cultural — CIAC — agrupa a los
                profesionales creativos de Manta y la región de Manabí. Desde nuestra
                fundación trabajamos para reconocer y visibilizar la industria cultural
                como pilar fundamental de la economía ecuatoriana.
              </p>
              <p className="text-muted text-base leading-relaxed">
                Músicos, actores, bailarines, artistas visuales, diseñadores, cineastas,
                escritores y artesanos — todos los que hacen de la creatividad su modo de
                vida. Somos su voz ante el Estado, su red de apoyo y su plataforma de crecimiento.
              </p>
            </motion.div>

            {/* Misión / Visión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="glass p-5">
                <p className="font-serif text-lg font-medium text-gold-400 mb-2">Misión</p>
                <p className="font-sans text-sm text-cream-300 leading-relaxed">
                  Representar, proteger y fortalecer a los artistas y creadores culturales
                  de Manabí, impulsando políticas que dignifiquen su trabajo.
                </p>
              </div>
              <div className="glass p-5">
                <p className="font-serif text-lg font-medium text-gold-400 mb-2">Visión</p>
                <p className="font-sans text-sm text-cream-300 leading-relaxed">
                  Ser referente nacional de la industria cultural, liderando un ecosistema
                  creativo que posicione a Ecuador en el mapa cultural global.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {values.map((v) => (
                <div key={v.title} className="card-dark p-5 hover:border-gold-500/20 transition-colors duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center mb-3 group-hover:bg-gold-500/20 transition-colors">
                    <v.icon size={16} className="text-gold-400" />
                  </div>
                  <h3 className="font-serif text-base text-cream-100 mb-1.5">{v.title}</h3>
                  <p className="font-sans text-xs text-cream-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Authentic photo strip */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 lg:sticky lg:top-28"
          >
            {sidePhotos.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl group"
                style={{ height: i === 0 ? '260px' : '190px' }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                <span className="absolute bottom-3 left-4 font-sans text-xs text-white/60">{p.alt}</span>
              </div>
            ))}

            {/* Stat pill */}
            <div className="glass p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-gold-400 font-bold text-sm">EC</span>
              </div>
              <div>
                <p className="font-sans text-xs text-cream-400">Industria cultural ecuatoriana</p>
                <p className="font-serif text-lg text-cream-100 font-medium">$1,100M+ en PIB</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
