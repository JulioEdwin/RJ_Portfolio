import { useState, useCallback } from 'react'
import { copyToClipboard } from '../utils/helpers'

/**
 * Hook personnalisé pour copier du texte avec état de retour utilisateur immédiat (UX First).
 * Respecte le principe de Responsabilité Unique (SRP).
 * 
 * @param {number} resetDelayMs - Durée avant réinitialisation de l'état (défaut: 2500ms)
 * @returns {{ copied: boolean, copyText: (text: string) => Promise<boolean> }}
 */
export const useClipboard = (resetDelayMs = 2500) => {
  const [copied, setCopied] = useState(false)

  const copyText = useCallback(
    async (text) => {
      const success = await copyToClipboard(text)
      if (success) {
        setCopied(true)
        setTimeout(() => setCopied(false), resetDelayMs)
      }
      return success
    },
    [resetDelayMs]
  )

  return { copied, copyText }
}

export default useClipboard

