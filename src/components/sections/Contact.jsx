import { useRef, useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Loader2,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { profile } from '../../data/profile'
import SectionTitle from '../ui/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

const initialForm = { name: '', email: '', subject: '', message: '' }
const initialErrors = { name: '', email: '', subject: '', message: '' }

// Web3Forms : service d'envoi d'emails sans backend (doc officielle).
// La clé d'accès est publique par conception, injectée via .env.local / CI.
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const SUBMIT_TIMEOUT_MS = 15000
const NETWORK_ERROR_MESSAGE =
  'Une erreur est survenue lors de l’envoi. Vérifiez votre connexion et réessayez.'

const networks = [
  {
    label: 'Email',
    handle: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    handle: '@JulioEdwin',
    href: profile.contact.github,
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    handle: 'Julio Edwin RAZAFIMANAMPY',
    href: profile.contact.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: 'WhatsApp',
    handle: profile.contact.phone,
    href: profile.contact.whatsapp,
    icon: Phone,
  },
]

const Contact = () => {
  const ref = useScrollReveal()
  const formRef = useRef(null)
  const submittingRef = useRef(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (field) => {
    const value = form[field].trim()
    const newErrors = { ...errors }

    if (field === 'name' && !value) {
      newErrors.name = 'Votre nom est obligatoire.'
    } else if (field === 'email' && !value) {
      newErrors.email = 'Votre email est obligatoire.'
    } else if (field === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      newErrors.email = 'Veuillez saisir un email valide.'
    } else if (field === 'subject' && !value) {
      newErrors.subject = 'Le sujet est obligatoire.'
    } else if (field === 'message' && !value) {
      newErrors.message = 'Votre message est obligatoire.'
    } else if (field === 'message' && value && value.length < 10) {
      newErrors.message = 'Votre message doit contenir au moins 10 caractères.'
    } else {
      newErrors[field] = ''
    }

    setErrors(newErrors)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    validate(e.target.name)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Protection anti-doublon : garde synchrone (état React non rafraîchi encore).
    if (submittingRef.current || isSubmitting) return

    const newErrors = {}
    Object.keys(form).forEach((field) => {
      const value = form[field].trim()
      if (!value) {
        newErrors[field] =
          field === 'name'
            ? 'Votre nom est obligatoire.'
            : field === 'email'
              ? 'Votre email est obligatoire.'
              : field === 'subject'
                ? 'Le sujet est obligatoire.'
                : 'Votre message est obligatoire.'
      } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = 'Veuillez saisir un email valide.'
      } else if (field === 'message' && value.length < 10) {
        newErrors.message = 'Votre message doit contenir au moins 10 caractères.'
      }
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).some((key) => newErrors[key])) {
      setStatus({ type: 'error', message: 'Veuillez corriger les erreurs du formulaire.' })
      return
    }

    if (!ACCESS_KEY) {
      console.error(
        '[Contact] VITE_WEB3FORMS_ACCESS_KEY manquante : renseignez .env.local puis relancez le build.'
      )
      setStatus({
        type: 'error',
        message: 'L’envoi n’est pas encore configuré pour le moment. Réessayez plus tard.',
      })
      return
    }

    submittingRef.current = true
    setIsSubmitting(true)
    setStatus(null)

    const formData = new FormData(formRef.current)
    formData.set('access_key', ACCESS_KEY)
    formData.set('subject', `Nouveau message depuis le portfolio — ${form.subject}`)
    formData.set('replyto', form.email)
    formData.set('from_name', 'RJ Portfolio')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS)

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
        signal: controller.signal,
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        setStatus({
          type: 'success',
          message:
            'Message envoyé avec succès ✓ — Merci pour votre message, je reviens vers vous dès que possible.',
        })
        setForm(initialForm)
        setErrors(initialErrors)
      } else {
        // Détails techniques réservés à la console, l'utilisateur reçoit un message humain.
        console.error('[Contact] Web3Forms', response.status, data)
        setStatus({
          type: 'error',
          message:
            response.status === 429
              ? 'Trop de messages envoyés en peu de temps. Réessayez dans quelques instants.'
              : NETWORK_ERROR_MESSAGE,
        })
      }
    } catch (error) {
      console.error('[Contact] Échec de l’envoi', error)
      setStatus({ type: 'error', message: NETWORK_ERROR_MESSAGE })
    } finally {
      clearTimeout(timeoutId)
      submittingRef.current = false
      setIsSubmitting(false)
    }
  }

  const inputBase =
    'w-full px-4 py-3 rounded-lg border bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors'
  const inputNormal = 'border-slate-200 hover:border-slate-300'
  const inputError = 'border-red-400 focus:ring-red-200'

  return (
    <section id="contact" className="relative bg-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="scroll-reveal">
          <SectionTitle
            eyebrow="contact"
            title="Restons en contact"
            description="Toujours ouvert pour échanger autour de belles problématiques d'architecture, de nouveaux défis backend ou d'opportunités de collaboration."
          />
        </div>

        {/* grid-cols-1 : borne la piste mobile à 0 min, sinon le long email de la
            colonne gauche élargit la grille et fait déborder le formulaire. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="scroll-reveal space-y-8">
            <div>
              <p className="section-label text-primary mb-4">— écrivez-moi</p>
              <a
                href={`mailto:${profile.contact.email}`}
                className="block font-display font-black uppercase leading-none text-[clamp(1.5rem,4vw,2.75rem)] text-navy hover:text-primary transition-colors break-words"
              >
                {profile.contact.email}
              </a>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <a
                  href={`tel:${profile.contact.phone.replace(/[^+\d]/g, '')}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone size={15} className="text-primary" />
                  {profile.contact.phone}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-primary" />
                  {profile.contact.location}
                </span>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {networks.map(({ label, handle, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start justify-between gap-3 h-full bg-white border border-slate-200 rounded-2xl p-5 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon size={18} />
                      </span>
                      <p className="font-heading font-extrabold text-navy">{label}</p>
                      <p className="font-mono text-[11px] text-slate-400 break-all">{handle}</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-300 group-hover:text-primary transition-colors shrink-0"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 px-5 py-4 bg-white border border-slate-200 rounded-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-navy">{profile.availability}</span> — je réponds
                généralement sous 24 h.
              </p>
            </div>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: '120ms' }}>
            <form
              id="formulaire"
              ref={formRef}
              onSubmit={handleSubmit}
              aria-busy={isSubmitting}
              className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
              noValidate
            >
              {/* Honeypot Web3Forms : invisible pour les visiteurs, rempli par les bots. */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                style={{ display: 'none' }}
              />
              <div className="flex items-center justify-between mb-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  envoyons / message
                </p>
                <span className="font-display font-black text-primary/30 text-lg">01</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                    Nom <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Votre nom"
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="vous@exemple.com"
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1.5">
                  Sujet <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Objet de votre message"
                  required
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Votre message..."
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${inputBase} resize-y ${errors.message ? inputError : inputNormal}`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {status && (
                <div
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm shadow-primary/25 cursor-pointer disabled:opacity-70 disabled:cursor-wait disabled:hover:bg-primary"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
