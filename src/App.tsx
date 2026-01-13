import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-sans text-black bg-gradient-to-b from-primary-50 via-primary-100 to-cream">
      <Navbar />

      <main className="overflow-hidden">
        <section className="animate-fade-in">
          <Hero />
        </section>

        <section className="py-24">
          <Services />
        </section>

        <section className="bg-white py-24">
          <About />
        </section>

        <section className="py-24">
          <Gallery />
        </section>

        <section className="bg-primary-100 py-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App