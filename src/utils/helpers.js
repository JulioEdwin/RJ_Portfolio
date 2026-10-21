/**
 * Utilitaires généraux de l'application
 * Règle de Génie Logiciel : Séparation de la logique pure des composants d'affichage.
 */

/**
 * Copie une chaîne dans le presse-papier de manière sécurisée et robuste.
 * Utilise l'API moderne navigator.clipboard avec repli legacy si nécessaire.
 * 
 * @param {string} text - Texte à copier
 * @returns {Promise<boolean>} - Succès ou échec
 */
export const copyToClipboard = async (text) => {
  if (!text) return false

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch (err) {
    console.warn('Clipboard API non disponible, tentative de repli :', err)
  }

  // Repli défensif pour navigateurs sans permissions directes
  try {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.top = '-9999px'
    textArea.style.left = '-9999px'
    textArea.setAttribute('aria-hidden', 'true')
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    const successful = document.execCommand('copy')
    document.body.removeChild(textArea)
    return successful
  } catch (err) {
    console.error('Échec de la copie dans le presse-papier :', err)
    return false
  }
}

/**
 * Formate un index numérique sur 2 chiffres (ex: 1 -> "01").
 * @param {number} num
 * @returns {string}
 */
export const formatNumber = (num) => String(num).padStart(2, '0')

/**
 * Extrait les initiales d'un nom complet.
 * @param {string} name
 * @param {number} max
 * @returns {string}
 */
export const getInitials = (name = '', max = 2) => {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, max)
    .join('')
    .toUpperCase()
}

