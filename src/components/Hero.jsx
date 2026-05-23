import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Artistas afiliados' },
  { value: '12',   label: 'Sectores creativos' },
  { value: '8',    label: 'Años de trayectoria' },
  { value: '1.7%', label: 'del PIB nacional' },
]

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">

      {/* Background layers */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(200,155,60,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(139,111,204,0.06),transparent)]" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(248,243,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,243,232,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[12%] w-72 h-72 rounded-full bg-gold-500/[0.05] blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 14, 0], scale: [1, 0.97, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 left-[8%] w-56 h-56 rounded-full bg-indigo-500/[0.04] blur-3xl pointer-events-none"
      />

      <div className="relative section-padding max-w-7xl mx-auto w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text content */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-sans font-medium tracking-[0.1em] uppercase px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
                Manta, Manabí · Ecuador
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div {...fadeUp(0.2)} className="flex flex-col gap-2">
              <h1 className="heading-xl text-cream-50">
                La voz de la{' '}
                <em className="text-gradient not-italic block">industria creativa</em>
                de Manabí
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.3)} className="text-muted text-lg max-w-xl leading-relaxed">
              Somos la Cámara que representa, protege y fortalece a artistas, músicos,
              actores, diseñadores y creadores culturales del Ecuador. Juntos impulsamos
              una economía creativa próspera y sostenible.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
              <a href="#afiliacion" className="btn-primary group">
                Únete a CIAC
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="#nosotros" className="btn-outline group">
                <Play size={14} className="text-gold-500" />
                Conoce más
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p {...fadeUp(0.5)} className="font-sans text-xs text-cream-400/60 tracking-wide">
              Reconocidos por el Ministerio de Cultura y Patrimonio del Ecuador
            </motion.p>
          </div>

          {/* Right: Stats card + floating elements */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main card */}
            <div className="relative w-full max-w-sm">
              <div className="glass p-8 glow-gold">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <span className="font-serif text-gold-400 font-bold">C</span>
                  </div>
                  <div>
                    <p className="font-serif text-cream-100 font-medium text-sm">CIAC</p>
                    <p className="font-sans text-cream-400 text-xs">Industria Artística y Cultural</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <span className="font-serif text-3xl font-medium text-gradient">{stat.value}</span>
                      <span className="font-sans text-xs text-cream-400 leading-snug">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="font-sans text-xs text-cream-400 leading-relaxed">
                    "La cultura es el motor de identidad y desarrollo económico de nuestro pueblo."
                  </p>
                </div>
              </div>

              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-coral-400 text-white font-sans text-xs font-medium px-4 py-2 rounded-full shadow-xl shadow-coral-400/20"
              >
                Sector Cultural ↗ 1.7% PIB
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-6 glass px-4 py-2.5 shadow-xl"
              >
                <p className="font-sans text-xs text-cream-300">152,000+ empleos culturales</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row (mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/[0.06]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-2xl font-medium text-gradient">{stat.value}</span>
              <span className="font-sans text-xs text-cream-400">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] text-cream-400/50 tracking-[0.15em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-gold-500/60 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
