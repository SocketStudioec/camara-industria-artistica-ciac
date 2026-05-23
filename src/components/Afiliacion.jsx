import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Check, Star, ArrowRight } from 'lucide-react'

const planes = [
  {
    name: 'Artista',
    price: '25',
    period: 'mes',
    desc: 'Para artistas independientes y creadores en etapa de desarrollo profesional.',
    features: [
      'Carnet de afiliado CIAC',
      'Asesoría jurídica básica',
      'Acceso a bolsa de trabajo',
      'Difusión en redes CIAC',
      'Descuentos en talleres',
      'Newsletter mensual',
    ],
    highlight: false,
    cta: 'Comenzar',
  },
  {
    name: 'Profesional',
    price: '60',
    period: 'mes',
    desc: 'Para artistas consolidados, estudios y profesionales con trayectoria activa.',
    features: [
      'Todo lo de Artista',
      'Asesoría jurídica completa',
      'Certificación profesional',
      'Acceso a fondos y becas',
      'Perfil en directorio CIAC',
      'Participación en eventos oficiales',
      'Red de networking premium',
    ],
    highlight: true,
    cta: 'Más popular',
  },
  {
    name: 'Empresa',
    price: '150',
    period: 'mes',
    desc: 'Para agencias, productoras, escuelas de arte y empresas culturales.',
    features: [
      'Todo lo de Profesional',
      'Múltiples afiliados (hasta 10)',
      'Representación institucional',
      'Espacios en eventos gremiales',
      'Colaboraciones comerciales',
      'Visibilidad premium en medios',
      'Consultoría estratégica',
    ],
    highlight: false,
    cta: 'Contactar',
  },
]

const pasos = [
  { num: '01', title: 'Completa el formulario', desc: 'Llena tus datos y área creativa en el formulario de afiliación en línea.' },
  { num: '02', title: 'Revisión de solicitud',  desc: 'Nuestro equipo revisa tu postulación en un plazo de 48 horas hábiles.' },
  { num: '03', title: 'Pago y activación',      desc: 'Realizas el pago mensual y recibes tu carnet digital de afiliado CIAC.' },
  { num: '04', title: 'Bienvenida a CIAC',      desc: 'Accedes a todos los beneficios y te unirás a la comunidad creativa.' },
]

export default function Afiliacion() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="afiliacion" ref={ref} className="py-28 lg:py-36 relative overflow-hidden bg-ink-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(200,155,60,0.07),transparent)]" />

      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col gap-4 mb-16"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="gold-line" />
            <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Afiliación</span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg text-cream-50 max-w-2xl mx-auto">
            Únete a la comunidad{' '}
            <span className="text-gradient">que impulsa tu arte</span>
          </h2>
          <p className="text-muted text-base max-w-lg mx-auto">
            Elige el plan que mejor se adapta a tu etapa y necesidades. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {planes.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-gold-900/40 to-ink-800 border-gold-500/40 shadow-xl shadow-gold-500/5'
                  : 'bg-ink-800 border-white/[0.06]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gold-500 text-ink-900 text-[11px] font-sans font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  <Star size={11} fill="currentColor" />
                  Más popular
                </div>
              )}

              <div className="flex flex-col gap-1 mb-6">
                <h3 className="font-serif text-xl text-cream-100">{plan.name}</h3>
                <p className="font-sans text-sm text-cream-400 leading-relaxed">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1.5 mb-7">
                <span className="font-sans text-cream-300 text-sm">$</span>
                <span className="font-serif text-5xl text-cream-50 font-medium">{plan.price}</span>
                <span className="font-sans text-cream-400 text-sm">/{plan.period}</span>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-gold-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={9} className="text-gold-400" strokeWidth={3} />
                    </div>
                    <span className="font-sans text-sm text-cream-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`flex items-center justify-center gap-2 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gold-500 hover:bg-gold-400 text-ink-900 hover:shadow-[0_0_20px_rgba(200,155,60,0.3)]'
                    : 'border border-white/10 hover:border-gold-500/40 text-cream-200 hover:text-gold-400'
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col gap-8"
        >
          <div className="text-center">
            <h3 className="font-serif text-2xl text-cream-100">¿Cómo me afilio?</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((paso, i) => (
              <div key={paso.num} className="flex flex-col gap-3 relative">
                {i < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%-1rem)] w-8 h-px bg-gold-500/20" />
                )}
                <span className="font-serif text-4xl font-medium text-gradient opacity-60">{paso.num}</span>
                <h4 className="font-serif text-base text-cream-100">{paso.title}</h4>
                <p className="font-sans text-sm text-cream-400 leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
