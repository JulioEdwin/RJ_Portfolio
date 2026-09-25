import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import Interests from './components/sections/Interests'
import Contact from './components/sections/Contact'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light text-navy">
      <Sidebar />
      <div className="xl:pl-64 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Services />
          <Process />
          <Interests />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App