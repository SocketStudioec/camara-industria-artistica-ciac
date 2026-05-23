import { ArrowUpRight } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

const links = {
  'Institución': [
    { label: 'Quiénes somos',    href: '#nosotros' },
    { label: 'Sectores',         href: '#sectores' },
    { label: 'Directorio',       href: '#contacto' },
    { label: 'Transparencia',    href: '#contacto' },
  ],
  'Afiliados': [
    { label: 'Planes y precios', href: '#afiliacion' },
    { label: 'Servicios',        href: '#servicios' },
    { label: 'Portal del artista', href: '#contacto' },
    { label: 'Certificaciones',  href: '#contacto' },
  ],
  'Recursos': [
    { label: 'Fondos culturales', href: '#contacto' },
    { label: 'Eventos',           href: '#eventos' },
    { label: 'Noticias',          href: '#contacto' },
    { label: 'Convocatorias',     href: '#contacto' },
  ],
}

const socials = [
  { Icon: FacebookIcon,  href: 'https://www.facebook.com/ciacmanta', label: 'Facebook' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: YoutubeIcon,   href: '#', label: 'Youtube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(200,155,60,0.04),transparent)]" />

      {/* Main footer */}
      <div className="section-padding max-w-7xl mx-auto py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                <span className="font-serif text-gold-400 text-xl font-bold">C</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-cream-100 text-lg font-medium">CIAC</span>
                <span className="font-sans text-cream-400 text-[10px] tracking-[0.12em] uppercase">Manta · Ecuador</span>
              </div>
            </div>

            <p className="font-sans text-sm text-cream-400 leading-relaxed max-w-xs">
              Cámara de la Industria Artística y Cultural de Manta. Representamos,
              protegemos y fortalecemos a los creadores culturales de Manabí y Ecuador.
            </p>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/[0.08] hover:border-gold-500/40 flex items-center justify-center text-cream-400 hover:text-gold-400 transition-all duration-200"
                >
                  <s.Icon />
                </a>
              ))}
            </div>

            {/* Ministerio badge */}
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3 self-start">
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-sans text-xs text-cream-400 leading-tight">
                Reconocido por el Ministerio de<br />Cultura y Patrimonio del Ecuador
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-5">
              <h4 className="font-sans text-xs text-cream-300 font-medium tracking-[0.1em] uppercase">{category}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-sans text-sm text-cream-400 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="section-padding max-w-7xl mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream-500 text-center sm:text-left">
            © {new Date().getFullYear()} CIAC — Cámara de la Industria Artística y Cultural. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-xs text-cream-500 hover:text-gold-400 transition-colors duration-200">
              Política de privacidad
            </a>
            <span className="text-cream-600">·</span>
            <a href="#" className="font-sans text-xs text-cream-500 hover:text-gold-400 transition-colors duration-200">
              Términos de uso
            </a>
          </div>
        </div>
      </div>

      {/* Developed by Socket Studio */}
      <div className="absolute bottom-4 right-6 sm:right-8 lg:right-20 xl:right-32">
        <a
          href="https://socket-studio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[10px] text-cream-600 hover:text-cream-400 transition-colors duration-200 flex items-center gap-1"
        >
          Desarrollado por Socket Studio
          <ArrowUpRight size={9} />
        </a>
      </div>
    </footer>
  )
}
