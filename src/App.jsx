import Header          from './components/Header'
import Hero            from './components/Hero'
import SobreNosotros   from './components/SobreNosotros'
import Sectores        from './components/Sectores'
import GaleriaArtistas from './components/GaleriaArtistas'
import Servicios       from './components/Servicios'
import Afiliacion      from './components/Afiliacion'
import Eventos         from './components/Eventos'
import Testimonios     from './components/Testimonios'
import Contacto        from './components/Contacto'
import Footer          from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-cream-100">
      <Header />
      <main>
        <Hero />
        <SobreNosotros />
        <Sectores />
        <GaleriaArtistas />
        <Servicios />
        <Afiliacion />
        <Eventos />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
