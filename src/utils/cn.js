/**
 * Utilitaire pour combiner conditionnellement des classes CSS (équivalent léger de clsx).
 * Respecte la règle DRY et évite la répétition de ternaires de chaînes complexes.
 * 
 * @param  {...any} classes - Liste de classes, conditions ou objets de classes
 * @returns {string} - Chaîne de classes concaténées et nettoyées
 */
export const cn = (...classes) => {
  return classes
    .flat(Infinity)
    .filter((c) => typeof c === 'string' && c.trim().length > 0)
    .join(' ')
}

export default cn

