import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const sectores = [
  { emoji: '🎵', title: 'Música',            desc: 'Músicos, compositores, productores y técnicos de sonido que crean y difunden el talento sonoro manabita.' },
  { emoji: '🎭', title: 'Artes Escénicas',   desc: 'Teatro, danza, circo y performance. Profesionales que llevan la expresión viva a escenarios de todo el país.' },
  { emoji: '🎬', title: 'Audiovisual',        desc: 'Cine, televisión, producción digital y fotografía. Creadores de la imagen que cuenta nuestras historias.' },
  { emoji: '🎨', title: 'Artes Visuales',     desc: 'Pintores, escultores, ilustradores y artistas plásticos que dan forma a la identidad visual ecuatoriana.' },
  { emoji: '✏️', title: 'Diseño & Publicidad',desc: 'Diseñadores gráficos, directores de arte y creativos publicitarios que comunican con belleza y estrategia.' },
  { emoji: '📚', title: 'Literatura',          desc: 'Escritores, poetas, periodistas culturales y editores que preservan y enriquecen la lengua y la memoria.' },
  { emoji: '🏺', title: 'Artesanía',           desc: 'Artesanos y maestros de oficios tradicionales que transmiten el patrimonio material de Manabí.' },
  { emoji: '🍽️', title: 'Gastronomía Cultural',desc: 'Chefs, cocineros tradicionales y gestores culinarios que elevan la gastronomía manabita como patrimonio.' },
  { emoji: '🎮', title: 'Media & Digital',      desc: 'Creadores de contenido, animadores, desarrolladores de videojuegos y artistas digitales de nueva generación.' },
  { emoji: '🏛️', title: 'Gestión Cultural',     desc: 'Curadores, gestores, promotores y educadores que sostienen el ecosistema cultural desde adentro.' },
  { emoji: '🎪', title: 'Eventos & Festivales', desc: 'Productores de eventos culturales, festivales y espectáculos que dinamizan la vida cultural regional.' },
  { emoji: '📡', title: 'Medios Culturales',    desc: 'Periodistas, locutores, bloggers y comunicadores especializados en cultura y entretenimiento.' },
]

export default function Sectores() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="sectores" ref={ref} className="py-28 lg:py-36 relative overflow-hidden bg-ink-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(200,155,60,0.05),transparent)]" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />

      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="gold-line" />
            <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Sectores creativos</span>
            <div className="gold-line" />
          </div>
          <h2 className="heading-lg text-cream-50 max-w-2xl">
            Doce industrias creativas,{' '}
            <span className="text-gradient">una sola voz</span>
          </h2>
          <p className="text-muted text-base max-w-xl">
            CIAC agrupa a los profesionales de todas las ramas de la industria artística y cultural,
            representando la riqueza y diversidad del talento manabita.
          </p>
        </motion.div>

        {/* Sectors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sectores.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group card-dark p-5 hover:border-gold-500/25 hover:bg-ink-700 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl leading-none mt-0.5 group-hover:scale-110 transition-transform duration-200 select-none">
                  {s.emoji}
                </span>
                <div className="flex flex-col gap-1.5 min-w-0">
                  <h3 className="font-serif text-base text-cream-100 group-hover:text-gold-300 transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="font-sans text-xs text-cream-400 leading-relaxed line-clamp-3">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-sans text-sm text-cream-400">
            ¿Tu sector no está aquí?{' '}
            <a href="#contacto" className="text-gold-400 hover:text-gold-300 underline underline-offset-4 transition-colors duration-200">
              Contáctanos
            </a>{' '}
            — estamos en constante expansión.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
