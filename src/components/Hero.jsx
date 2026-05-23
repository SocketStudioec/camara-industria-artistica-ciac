import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Artistas afiliados' },
  { value: '12',   label: 'Sectores creativos' },
  { value: '8',    label: 'Años de trayectoria' },
  { value: '1.7%', label: 'del PIB nacional' },
]

/* Collage of real artist photos from Unsplash */
const collageImages = [
  {
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop&q=80',
    alt: 'Músico tocando guitarra',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=400&fit=crop&q=80',
    alt: 'Bailarina en escena',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop&q=80',
    alt: 'Artista pintando',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop&q=80',
    alt: 'Producción audiovisual',
    span: '',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Full-bleed background: concert photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=1080&fit=crop&q=85"
          alt="Concierto en vivo"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/30" />
        {/* Gold atmospheric tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(200,155,60,0.08),transparent)]" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto w-full py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/25 text-gold-300 text-xs font-sans font-medium tracking-[0.1em] uppercase px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
                Manta, Manabí · Ecuador
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-white"
            >
              La voz de la{' '}
              <em className="not-italic text-gradient">industria<br />creativa</em>{' '}
              de Manabí
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-sans text-lg text-white/70 max-w-lg leading-relaxed"
            >
              Representamos a músicos, actores, bailarines, artistas visuales,
              cineastas y creadores culturales. Somos la cámara gremial que protege
              y potencia el talento artístico del Ecuador.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#afiliacion" className="btn-primary group">
                Únete a CIAC
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="#sectores" className="btn-outline backdrop-blur-sm group">
                Ver sectores
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-4 gap-4 pt-6 mt-2 border-t border-white/10"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-serif text-2xl md:text-3xl font-medium text-gradient">{s.value}</span>
                  <span className="font-sans text-[11px] text-white/50 leading-tight">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:grid grid-cols-2 grid-rows-2 gap-3 h-[480px]"
          >
            {collageImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl ${img.span} group`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 font-sans text-[11px] text-white/70 tracking-wide">
                  {img.alt}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-gold-400 transition-colors duration-300"
      >
        <span className="font-sans text-[10px] tracking-[0.18em] uppercase">Descubrir</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}
