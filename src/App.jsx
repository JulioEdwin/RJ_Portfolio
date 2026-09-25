import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import Marquee from './components/ui/Marquee'
import Hero from './components/sections/Hero'
import Manifesto from './components/sections/Manifesto'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Parcours from './components/sections/Parcours'
import Certifications from './components/sections/Certifications'
import Interests from './components/sections/Interests'
import Contact from './components/sections/Contact'

const contactMarquee = [
  'Développeur Full Stack',
  'React',
  'TypeScript',
  'Next.js',
  'Spring Boot',
  'PostgreSQL',
  'Flutter',
  'Docker',
  'Disponible pour stage',
]

const App = () => {
  return (
    <div className="portfolio-background portfolio-light min-h-screen flex flex-col text-navy">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Parcours />
        <Certifications />
        <Interests />
        <Marquee dark items={contactMarquee} />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
