import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Scale, BookOpen, Handshake, Megaphone, Award, HeartHandshake, Briefcase, Zap } from 'lucide-react'

const servicios = [
  {
    icon: Scale,
    category: 'Legal',
    title: 'Asesoría Jurídica',
    desc: 'Orientación legal especializada en derechos de autor, contratos artísticos, propiedad intelectual y normativa cultural.',
    accent: 'gold',
  },
  {
    icon: BookOpen,
    category: 'Formación',
    title: 'Capacitación Profesional',
    desc: 'Talleres, seminarios y programas de formación continua en gestión cultural, marketing artístico y negocios creativos.',
    accent: 'gold',
  },
  {
    icon: Handshake,
    category: 'Red',
    title: 'Networking & Alianzas',
    desc: 'Conexión con artistas, empresas, patrocinadores e instituciones culturales para potenciar tu carrera y proyectos.',
    accent: 'coral',
  },
  {
    icon: Megaphone,
    category: 'Visibilidad',
    title: 'Difusión y Comunicación',
    desc: 'Plataformas digitales, redes sociales y medios de comunicación para difundir tu obra y proyectos artísticos.',
    accent: 'coral',
  },
  {
    icon: Award,
    category: 'Reconocimiento',
    title: 'Certificación Profesional',
    desc: 'Acreditación gremial que valida tu trayectoria y te abre puertas en licitaciones, eventos y convocatorias oficiales.',
    accent: 'gold',
  },
  {
    icon: Briefcase,
    category: 'Financiero',
    title: 'Acceso a Fondos',
    desc: 'Información y apoyo para acceder a fondos públicos, becas, líneas de crédito y patrocinios culturales disponibles.',
    accent: 'gold',
  },
  {
    icon: HeartHandshake,
    category: 'Bienestar',
    title: 'Beneficios Sociales',
    desc: 'Acceso preferencial a servicios de salud, seguros artísticos y programas de bienestar para afiliados y sus familias.',
    accent: 'coral',
  },
  {
    icon: Zap,
    category: 'Mercado',
    title: 'Oportunidades Laborales',
    desc: 'Bolsa de trabajo cultural, convocatorias de proyectos y conexión con productores, empresas y organizadores de eventos.',
    accent: 'coral',
  },
]

const accentClasses = {
  gold:  { bg: 'bg-gold-500/10',  icon: 'text-gold-400',  tag: 'bg-gold-500/10 text-gold-400' },
  coral: { bg: 'bg-coral-400/10', icon: 'text-coral-400', tag: 'bg-coral-400/10 text-coral-400' },
}

export default function Servicios() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="servicios" ref={ref} className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_30%,rgba(224,122,95,0.05),transparent)]" />

      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="gold-line" />
            <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Servicios para afiliados</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-16">
            <h2 className="heading-lg text-cream-50 max-w-xl">
              Todo lo que necesitas para{' '}
              <span className="text-gradient">crecer como artista</span>
            </h2>
            <p className="text-muted text-base max-w-sm lg:pb-2">
              Como miembro de CIAC, accedes a un ecosistema completo de herramientas y
              servicios diseñados para impulsar tu carrera creativa.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((s, i) => {
            const cls = accentClasses[s.accent]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="card-dark p-6 flex flex-col gap-4 hover:border-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl ${cls.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon size={18} className={cls.icon} />
                  </div>
                  <span className={`font-sans text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full ${cls.tag}`}>
                    {s.category}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-base text-cream-100">{s.title}</h3>
                  <p className="font-sans text-sm text-cream-400 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a href="#afiliacion" className="btn-primary">
            Acceder a todos los beneficios
          </a>
        </motion.div>
      </div>
    </section>
  )
}
