import React from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * Système de Notification Toast pour retour utilisateur immédiat (UX First).
 * Règle de Génie Logiciel : Règle des 3 couleurs et clarté maximale.
 */
const Toast = ({
  show,
  message,
  type = 'success',
  onClose,
}) => {
  if (!show) return null

  const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info,
  }

  const Icon = icons[type] || Info

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl border shadow-2xl backdrop-blur-xl animate-slideUp transition-all duration-300 max-w-sm',
        type === 'success' && 'bg-slate-900/95 border-blue-500/50 text-white shadow-blue-500/10',
        type === 'error' && 'bg-slate-900/95 border-red-500/40 text-slate-100',
        type === 'info' && 'bg-slate-900/95 border-slate-700 text-white'
      )}
      role="status"
      aria-live="polite"
    >
      <Icon size={18} className="text-blue-400 shrink-0" aria-hidden="true" />
      <p className="text-xs sm:text-sm font-medium text-slate-200">{message}</p>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fermer la notification"
        >
          <X size={15} />
        </button>
      )}
    </div>
  )
}

export default Toast

