import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Shield, Users, TrendingUp, Globe } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Protección Gremial',
    desc: 'Defendemos los derechos y los intereses legales de artistas y creadores ante instituciones públicas y privadas.',
  },
  {
    icon: Users,
    title: 'Comunidad Creativa',
    desc: 'Conectamos a los profesionales del sector artístico para crear redes de colaboración y apoyo mutuo.',
  },
  {
    icon: TrendingUp,
    title: 'Desarrollo Económico',
    desc: 'Promovemos políticas e incentivos que fortalecen la industria creativa como motor económico del Ecuador.',
  },
  {
    icon: Globe,
    title: 'Proyección Nacional',
    desc: 'Visibilizamos el talento cultural de Manabí a nivel nacional e internacional, abriendo nuevos mercados.',
  },
]

export default function SobreNosotros() {
  const { ref, inView } = useInView(0.15)

  return (
    <section id="nosotros" ref={ref} className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(200,155,60,0.06),transparent)]" />

      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              <p className="text-muted text-base leading-relaxed max-w-lg">
                La Cámara de la Industria Artística y Cultural — CIAC — es la organización
                gremial que agrupa a los profesionales creativos de Manta y la región de Manabí.
                Desde nuestra fundación, hemos trabajado incansablemente para reconocer y
                visibilizar la industria cultural como un pilar fundamental de la economía ecuatoriana.
              </p>
              <p className="text-muted text-base leading-relaxed max-w-lg">
                Representamos a músicos, actores, bailarines, artistas visuales, diseñadores,
                cineastas, escritores, artesanos y a todos los profesionales que hacen de la
                creatividad su modo de vida. Somos su voz ante el Estado, su red de apoyo y
                su plataforma de crecimiento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-1 glass p-5">
                <p className="font-serif text-2xl font-medium text-gold-400 mb-1">Misión</p>
                <p className="font-sans text-sm text-cream-300 leading-relaxed">
                  Representar, proteger y fortalecer a los artistas y creadores culturales de
                  Manabí, impulsando políticas que dignifiquen su trabajo.
                </p>
              </div>
              <div className="flex-1 glass p-5">
                <p className="font-serif text-2xl font-medium text-gold-400 mb-1">Visión</p>
                <p className="font-sans text-sm text-cream-300 leading-relaxed">
                  Ser referente nacional de la industria cultural, liderando un ecosistema
                  creativo próspero que posicione a Ecuador en el mapa cultural global.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark p-6 hover:border-gold-500/20 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <v.icon size={18} className="text-gold-400" />
                </div>
                <h3 className="font-serif text-lg text-cream-100 mb-2">{v.title}</h3>
                <p className="font-sans text-sm text-cream-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
