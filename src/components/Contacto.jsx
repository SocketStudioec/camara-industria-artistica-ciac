import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Phone, Mail, Send, ExternalLink } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

const contactInfo = [
  { icon: MapPin, label: 'Dirección', value: 'Av. 4 de Noviembre y Malecón, Manta, Manabí, Ecuador' },
  { icon: Phone, label: 'Teléfono',  value: '+593 5 262-0000' },
  { icon: Mail,  label: 'Email',     value: 'info@ciacmanta.org.ec' },
]

const socials = [
  { Icon: FacebookIcon,  label: 'Facebook',  href: 'https://www.facebook.com/ciacmanta' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: YoutubeIcon,   label: 'Youtube',   href: '#' },
]

export default function Contacto() {
  const { ref, inView } = useInView(0.1)
  const [form, setForm] = useState({ nombre: '', email: '', sector: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" ref={ref} className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_80%,rgba(200,155,60,0.06),transparent)]" />

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
            <span className="font-sans text-gold-500 text-xs font-medium tracking-[0.12em] uppercase">Contacto</span>
          </div>
          <h2 className="heading-lg text-cream-50 max-w-xl">
            Hablemos sobre tu{' '}
            <span className="text-gradient">carrera artística</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="glass p-12 flex flex-col items-center text-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Send size={22} className="text-gold-400" />
                </div>
                <h3 className="font-serif text-2xl text-cream-100">¡Mensaje enviado!</h3>
                <p className="font-sans text-sm text-cream-400 max-w-sm">
                  Gracias por contactarnos. Nuestro equipo responderá en un plazo de 24 a 48 horas hábiles.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline text-sm mt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs text-cream-300 tracking-wide">Nombre completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="bg-ink-800 border border-white/[0.08] focus:border-gold-500/40 text-cream-100 placeholder:text-cream-500 font-sans text-sm px-4 py-3 rounded-xl outline-none transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs text-cream-300 tracking-wide">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-ink-800 border border-white/[0.08] focus:border-gold-500/40 text-cream-100 placeholder:text-cream-500 font-sans text-sm px-4 py-3 rounded-xl outline-none transition-colors duration-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs text-cream-300 tracking-wide">Sector creativo</label>
                  <select
                    name="sector"
                    value={form.sector}
                    onChange={handleChange}
                    className="bg-ink-800 border border-white/[0.08] focus:border-gold-500/40 text-cream-100 font-sans text-sm px-4 py-3 rounded-xl outline-none transition-colors duration-200 cursor-pointer"
                  >
                    <option value="">Selecciona tu sector</option>
                    <option value="musica">Música</option>
                    <option value="teatro">Artes Escénicas / Teatro</option>
                    <option value="audiovisual">Audiovisual / Cine</option>
                    <option value="artes_visuales">Artes Visuales</option>
                    <option value="diseno">Diseño & Publicidad</option>
                    <option value="literatura">Literatura</option>
                    <option value="artesania">Artesanía</option>
                    <option value="gastronomia">Gastronomía Cultural</option>
                    <option value="digital">Media Digital</option>
                    <option value="gestion">Gestión Cultural</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs text-cream-300 tracking-wide">Mensaje *</label>
                  <textarea
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre ti, tu proyecto o consulta..."
                    className="bg-ink-800 border border-white/[0.08] focus:border-gold-500/40 text-cream-100 placeholder:text-cream-500 font-sans text-sm px-4 py-3 rounded-xl outline-none transition-colors duration-200 resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary self-start">
                  Enviar mensaje
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <c.icon size={16} className="text-gold-400" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans text-xs text-cream-400 tracking-wide">{c.label}</span>
                    <span className="font-sans text-sm text-cream-100 leading-snug">{c.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Horario */}
            <div className="glass p-5 flex flex-col gap-3">
              <h4 className="font-serif text-base text-cream-100">Horario de atención</h4>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="font-sans text-sm text-cream-400">Lunes – Viernes</span>
                  <span className="font-sans text-sm text-cream-200">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans text-sm text-cream-400">Sábado</span>
                  <span className="font-sans text-sm text-cream-200">09:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans text-sm text-cream-400">Domingo</span>
                  <span className="font-sans text-sm text-cream-400">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs text-cream-400 tracking-wide uppercase">Síguenos</span>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-gold-500/40 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-all duration-200"
                  >
                    <s.Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* FB link */}
            <a
              href="https://www.facebook.com/ciacmanta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-sans text-sm transition-colors duration-200 group"
            >
              <FacebookIcon />
              Visita nuestra página de Facebook
              <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
