import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Nosotros',  href: '#nosotros' },
  { label: 'Sectores',  href: '#sectores' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Eventos',   href: '#eventos' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10">
            <div className="absolute inset-0 bg-gold-500/20 rounded-lg group-hover:bg-gold-500/30 transition-colors duration-300" />
            <span className="relative font-serif text-gold-400 text-xl font-bold leading-none">C</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-cream-100 text-lg font-medium tracking-wide">CIAC</span>
            <span className="font-sans text-cream-400 text-[10px] font-light tracking-[0.12em] uppercase">Manta · Ecuador</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-sans text-sm text-cream-300 hover:text-gold-400 px-4 py-2 rounded-full transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-1.5 left-4 right-4 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#afiliacion" className="btn-primary text-sm py-2.5 px-6">
            Afíliate
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-cream-200 hover:border-gold-500/40 hover:text-gold-400 transition-colors duration-200"
          aria-label="Menú"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-ink-900/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="section-padding py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-cream-200 hover:text-gold-400 py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a href="#afiliacion" onClick={() => setOpen(false)} className="btn-primary w-full justify-center text-sm">
                  Afíliate ahora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
