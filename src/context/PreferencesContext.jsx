import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import { TRANSLATIONS } from '../constants/translations'

const STORAGE_KEYS = {
  LANGUAGE: 'rj_portfolio_language',
  THEME: 'rj_portfolio_theme',
  MOTION: 'rj_portfolio_motion',
  DENSITY: 'rj_portfolio_density',
}

const DEFAULT_PREFERENCES = {
  language: 'fr',
  theme: 'dark', // 'dark' | 'light' | 'system'
  motion: 'full', // 'full' | 'reduced'
  density: 'comfortable', // 'comfortable' | 'compact'
}

const PreferencesContext = createContext(null)

/**
 * Safe localStorage accessor to prevent crashes in private/incognito browsing.
 */
const safeStorage = {
  getItem: (key, fallback) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const val = window.localStorage.getItem(key)
        return val !== null ? val : fallback
      }
    } catch {
      // Storage blocked or unavailable
    }
    return fallback
  },
  setItem: (key, value) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value)
      }
    } catch {
      // Storage blocked
    }
  },
  removeItem: (key) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key)
      }
    } catch {
      // Storage blocked
    }
  },
}

/**
 * Fournisseur de contexte pour les préférences utilisateur (Paramètres).
 * Règle de Génie Logiciel : SoC, Programmation défensive & Accessibilité.
 */
export const PreferencesProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() =>
    safeStorage.getItem(STORAGE_KEYS.LANGUAGE, DEFAULT_PREFERENCES.language)
  )

  const [theme, setThemeState] = useState(() =>
    safeStorage.getItem(STORAGE_KEYS.THEME, DEFAULT_PREFERENCES.theme)
  )

  const [motion, setMotionState] = useState(() =>
    safeStorage.getItem(STORAGE_KEYS.MOTION, DEFAULT_PREFERENCES.motion)
  )

  const [density, setDensityState] = useState(() =>
    safeStorage.getItem(STORAGE_KEYS.DENSITY, DEFAULT_PREFERENCES.density)
  )

  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [systemIsDark, setSystemIsDark] = useState(false)

  // Détecte les préférences du système d'exploitation
  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemIsDark(mediaQuery.matches)

    const handler = (e) => setSystemIsDark(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Thème effectif résolu (Dark ou Light)
  const resolvedTheme = useMemo(() => {
    if (theme === 'system') {
      return systemIsDark ? 'dark' : 'light'
    }
    return theme === 'light' ? 'light' : 'dark'
  }, [theme, systemIsDark])

  // Application des classes sur le document racine
  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement

    // 1. Thème
    if (resolvedTheme === 'light') {
      root.classList.add('theme-light')
      root.classList.remove('theme-dark')
      root.style.colorScheme = 'light'
    } else {
      root.classList.add('theme-dark')
      root.classList.remove('theme-light')
      root.style.colorScheme = 'dark'
    }

    // 2. Mouvement & animations
    if (motion === 'reduced') {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // 3. Densité
    if (density === 'compact') {
      root.classList.add('density-compact')
    } else {
      root.classList.remove('density-compact')
    }

    // 4. Attribut de langue
    root.setAttribute('lang', language)
  }, [resolvedTheme, motion, density, language])

  // Setters avec persistance
  const setLanguage = useCallback((newLang) => {
    const valid = newLang === 'en' ? 'en' : 'fr'
    setLanguageState(valid)
    safeStorage.setItem(STORAGE_KEYS.LANGUAGE, valid)
  }, [])

  const setTheme = useCallback((newTheme) => {
    const valid = ['dark', 'light', 'system'].includes(newTheme) ? newTheme : 'dark'
    setThemeState(valid)
    safeStorage.setItem(STORAGE_KEYS.THEME, valid)
  }, [])

  const setMotion = useCallback((newMotion) => {
    const valid = newMotion === 'reduced' ? 'reduced' : 'full'
    setMotionState(valid)
    safeStorage.setItem(STORAGE_KEYS.MOTION, valid)
  }, [])

  const setDensity = useCallback((newDensity) => {
    const valid = newDensity === 'compact' ? 'compact' : 'comfortable'
    setDensityState(valid)
    safeStorage.setItem(STORAGE_KEYS.DENSITY, valid)
  }, [])

  const resetPreferences = useCallback(() => {
    setLanguageState(DEFAULT_PREFERENCES.language)
    setThemeState(DEFAULT_PREFERENCES.theme)
    setMotionState(DEFAULT_PREFERENCES.motion)
    setDensityState(DEFAULT_PREFERENCES.density)
    Object.values(STORAGE_KEYS).forEach((k) => safeStorage.removeItem(k))
  }, [])

  // Dictionnaire de traduction actif
  const t = useMemo(() => {
    return TRANSLATIONS[language] || TRANSLATIONS.fr
  }, [language])

  const value = useMemo(
    () => ({
      language,
      theme,
      resolvedTheme,
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
    }),
    [
      language,
      theme,
      resolvedTheme,
      motion,
      density,
      isSettingsOpen,
      setLanguage,
      setTheme,
      setMotion,
      setDensity,
      resetPreferences,
      t,
    ]
  )

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  )
}

/**
 * Hook personnalisé pour accéder facilement aux préférences globales.
 */
export const usePreferences = () => {
  const context = useContext(PreferencesContext)
  if (!context) {
    throw new Error('usePreferences doit être utilisé à l’intérieur d’un PreferencesProvider')
  }
  return context
}

export default PreferencesContext

