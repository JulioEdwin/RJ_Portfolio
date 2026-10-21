import React from 'react'
import { PreferencesProvider } from './context/PreferencesContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Marquee from './components/common/Marquee'
import SettingsModal from './components/common/SettingsModal'
import Hero from './components/sections/Hero'
import Manifesto from './components/sections/Manifesto'
import SoftwareEngineering from './components/sections/SoftwareEngineering'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Parcours from './components/sections/Parcours'
import Certifications from './components/sections/Certifications'
import Interests from './components/sections/Interests'
import Contact from './components/sections/Contact'
import { MARQUEE_TECH_ITEMS } from './constants/navigation'

/**
 * Composant racine de l'application Portfolio.
 * Architecture conforme aux normes de Génie Logiciel :
 * - Gestion centralisée des préférences (langue FR/EN, thèmes sombre/clair/système, animations)
 * - Séparation des préoccupations (SoC)
 * - Accessibilité (A11y, balise sémantique <main>)
 * - Palette strictement limitée à 3 couleurs informatiques :
 *   1. Bleu Cyber Tech (#2563eb / #60a5fa)
 *   2. Obsidian Dark (#090d16 / #0f172a)
 *   3. Blanc Pur / Gris Slate (#ffffff / #f8fafc)
 */
const App = () => {
  return (
    <PreferencesProvider>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased transition-colors duration-300">
        {/* En-tête de navigation flottant */}
        <Navbar />

        {/* Contenu principal sémantique */}
        <main className="flex-1 w-full" id="main-content">
          <Hero />
          <Manifesto />
          <About />
          <SoftwareEngineering />
          <Skills />
          <Services />
          <Projects />
          <Parcours />
          <Certifications />
          <Interests />
          <Marquee items={MARQUEE_TECH_ITEMS} className="border-t border-slate-900" />
          <Contact />
        </main>

        {/* Pied de page & utilitaires */}
        <Footer />
        <ScrollToTop />

        {/* Boîte modale des Préférences & Paramètres */}
        <SettingsModal />
      </div>
    </PreferencesProvider>
  )
}

export default App
