import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react'

const eventos = [
  {
    category: 'Festival',
    title: 'Festival de Artes Manabitas 2026',
    desc: 'La celebración más importante del calendario cultural de Manta reúne a artistas locales, nacionales e internacionales en cuatro días de música, teatro, danza y artes visuales.',
    date: { day: '15', month: 'Jun', year: '2026' },
    time: '09:00 – 22:00',
    location: 'Malecón Escénico, Manta',
    attendees: '8,000+',
    tag: 'Festival',
    color: 'gold',
  },
  {
    category: 'Formación',
    title: 'Taller: Gestión de la Carrera Artística',
    desc: 'Taller intensivo de dos días para artistas que quieren profesionalizar su carrera: marca personal, contratos, redes sociales y financiamiento de proyectos.',
    date: { day: '22', month: 'Jun', year: '2026' },
    time: '09:00 – 17:00',
    location: 'Centro Cultural CIAC, Manta',
    attendees: '40',
    tag: 'Taller',
    color: 'coral',
  },
  {
    category: 'Networking',
    title: 'CIAC Connect — Noche de Industria Creativa',
    desc: 'Noche de networking exclusiva para afiliados, productores e inversionistas culturales. Presentaciones de proyectos, pitching y conexiones estratégicas en un ambiente premium.',
    date: { day: '05', month: 'Jul', year: '2026' },
    time: '19:00 – 23:00',
    location: 'Hotel Oro Verde, Manta',
    attendees: '120',
    tag: 'Networking',
    color: 'indigo',
  },
  {
    category: 'Convocatoria',
    title: 'Convocatoria: Fondos Culturales 2026',
    desc: 'Abierta la postulación para los fondos de apoyo a proyectos culturales del Ministerio de Cultura. CIAC ofrece acompañamiento técnico en la elaboración de propuestas.',
    date: { day: '30', month: 'Jul', year: '2026' },
    time: 'Todo el día',
    location: 'Modalidad virtual',
    attendees: 'Abierto',
    tag: 'Convocatoria',
    color: 'gold',
  },
]

const tagColors = {
  gold:   { bg: 'bg-gold-500/10',   text: 'text-gold-400',   dot: 'bg-gold-400' },
  coral:  { bg: 'bg-coral-400/10',  text: 'text-coral-400',  dot: 'bg-coral-400' },
  indigo: { bg: 'bg-indigo-400/10', text: 'text-indigo-400', dot: 'bg-indigo-400' },
}

export default function Eventos() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="eventos" ref={ref} className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_50%,rgba(200,155,60,0.05),transparent)]" />

      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-14"
        >
          <div className="flex items-center gap-3">
            <div className="gold-line" />
            <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Agenda cultural</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="heading-lg text-cream-50 max-w-xl">
              Eventos y{' '}
              <span className="text-gradient">actividades próximas</span>
            </h2>
            <a href="#contacto" className="btn-outline text-sm self-start lg:self-auto">
              Ver agenda completa
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Events list */}
        <div className="flex flex-col gap-5">
          {eventos.map((ev, i) => {
            const tc = tagColors[ev.color]
            return (
              <motion.article
                key={ev.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="card-dark p-6 lg:p-8 hover:border-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

                  {/* Date */}
                  <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-center gap-3 lg:gap-1 lg:text-center lg:min-w-[4rem]">
                    <div className="flex lg:flex-col items-baseline lg:items-center gap-1">
                      <span className="font-serif text-3xl lg:text-4xl font-medium text-cream-50">{ev.date.day}</span>
                      <span className="font-sans text-sm text-gold-400 font-medium uppercase tracking-wide">{ev.date.month}</span>
                    </div>
                    <span className="font-sans text-xs text-cream-400">{ev.date.year}</span>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block w-px self-stretch bg-white/[0.06]" />

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`flex items-center gap-1.5 font-sans text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full ${tc.bg} ${tc.text}`}>
                        <span className={`w-1 h-1 rounded-full ${tc.dot}`} />
                        {ev.tag}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg lg:text-xl text-cream-100 group-hover:text-gold-300 transition-colors duration-200">
                      {ev.title}
                    </h3>
                    <p className="font-sans text-sm text-cream-400 leading-relaxed max-w-2xl">{ev.desc}</p>

                    <div className="flex flex-wrap gap-4 mt-1">
                      <span className="flex items-center gap-1.5 font-sans text-xs text-cream-400">
                        <Clock size={12} className="text-gold-500/60" />
                        {ev.time}
                      </span>
                      <span className="flex items-center gap-1.5 font-sans text-xs text-cream-400">
                        <MapPin size={12} className="text-gold-500/60" />
                        {ev.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-sans text-xs text-cream-400">
                        <Users size={12} className="text-gold-500/60" />
                        {ev.attendees} asistentes
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 border border-white/10 hover:border-gold-500/40 text-cream-300 hover:text-gold-400 font-sans text-xs font-medium px-4 py-2.5 rounded-full transition-all duration-300"
                    >
                      Ver detalles
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 glass p-8 flex flex-col sm:flex-row items-center gap-6 justify-between"
        >
          <div className="flex flex-col gap-1">
            <h3 className="font-serif text-lg text-cream-100">No te pierdas ningún evento</h3>
            <p className="font-sans text-sm text-cream-400">Suscríbete a nuestra agenda cultural semanal.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 sm:w-56 bg-ink-800 border border-white/[0.08] text-cream-100 placeholder:text-cream-500 font-sans text-sm px-4 py-2.5 rounded-full focus:outline-none focus:border-gold-500/40 transition-colors duration-200"
            />
            <button className="btn-primary text-sm py-2.5 px-5 flex-shrink-0">
              Suscribir
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
