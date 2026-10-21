import React from 'react'
import {
  Settings,
  Languages,
  Sun,
  Moon,
  Laptop,
  Zap,
  ZapOff,
  Maximize2,
  Minimize2,
  RotateCcw,
  Check,
  X,
} from 'lucide-react'
import { usePreferences } from '../../context/PreferencesContext'
import Modal from './Modal'
import Button from './Button'

/**
 * Boîte modale des Préférences & Paramètres utilisateur.
 * Règle de Génie Logiciel : A11y, Ergonomie (UX First) et 3 couleurs max.
 */
const SettingsModal = () => {
  const {
    language,
    theme,
    motion,
    density,
    isSettingsOpen,
    setIsSettingsOpen,
    setLanguage,
    setTheme,
    setMotion,
    setDensity,
    resetPreferences,
    t,
  } = usePreferences()

  if (!isSettingsOpen) return null

  const s = t.settings

  return (
    <Modal
      isOpen={isSettingsOpen}
      onClose={() => setIsSettingsOpen(false)}
      title={s.title}
      subtitle={s.subtitle}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-7">
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed -mt-1">
          {s.description}
        </p>

        {/* 1. SÉLECTEUR DE LANGUE */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Languages size={18} />
            </span>
            <div>
              <h4 className="font-sans font-bold text-sm text-white">
                {s.language.title}
              </h4>
              <p className="text-xs text-slate-400">{s.language.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                language === 'fr'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>🇫🇷</span>
                <span>{s.language.fr}</span>
              </span>
              {language === 'fr' && <Check size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>🇬🇧</span>
                <span>{s.language.en}</span>
              </span>
              {language === 'en' && <Check size={16} />}
            </button>
          </div>
        </div>

        {/* 2. THÈME D'APPARENCE */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Sun size={18} />
            </span>
            <div>
              <h4 className="font-sans font-bold text-sm text-white">
                {s.theme.title}
              </h4>
              <p className="text-xs text-slate-400">{s.theme.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <Moon size={18} />
              <span>{s.theme.dark}</span>
            </button>

            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                theme === 'light'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <Sun size={18} />
              <span>{s.theme.light}</span>
            </button>

            <button
              type="button"
              onClick={() => setTheme('system')}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                theme === 'system'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <Laptop size={18} />
              <span>{s.theme.system}</span>
            </button>
          </div>
        </div>

        {/* 3. ANIMATIONS & MOUVEMENTS */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Zap size={18} />
            </span>
            <div>
              <h4 className="font-sans font-bold text-sm text-white">
                {s.motion.title}
              </h4>
              <p className="text-xs text-slate-400">{s.motion.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => setMotion('full')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                motion === 'full'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Zap size={16} />
                <span>{s.motion.full}</span>
              </span>
              {motion === 'full' && <Check size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setMotion('reduced')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                motion === 'reduced'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <ZapOff size={16} />
                <span>{s.motion.reduced}</span>
              </span>
              {motion === 'reduced' && <Check size={16} />}
            </button>
          </div>
        </div>

        {/* 4. DENSITÉ D'AFFICHAGE */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Maximize2 size={18} />
            </span>
            <div>
              <h4 className="font-sans font-bold text-sm text-white">
                {s.density.title}
              </h4>
              <p className="text-xs text-slate-400">{s.density.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => setDensity('comfortable')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                density === 'comfortable'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Maximize2 size={16} />
                <span>{s.density.comfortable}</span>
              </span>
              {density === 'comfortable' && <Check size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setDensity('compact')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                density === 'compact'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Minimize2 size={16} />
                <span>{s.density.compact}</span>
              </span>
              {density === 'compact' && <Check size={16} />}
            </button>
          </div>
        </div>

        {/* PIED DE PAGE DE LA MODALE */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={resetPreferences}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>{s.reset}</span>
          </button>

          <Button
            variant="primary"
            size="md"
            onClick={() => setIsSettingsOpen(false)}
          >
            {s.close}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default SettingsModal

