import React, { useRef, useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons'
import { profile } from '../../data/profile'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import Button from '../common/Button'
import Toast from '../common/Toast'
import { useClipboard } from '../../hooks/useClipboard'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

const initialForm = { name: '', email: '', subject: '', message: '' }
const initialErrors = { name: '', email: '', subject: '', message: '' }

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const SUBMIT_TIMEOUT_MS = 15000

/**
 * Section Contact & Échanges Professionnels.
 * Règle de Génie Logiciel : Ergonomie UX (copie 1-clic avec Toast), Programmation défensive, bilingue.
 */
const Contact = () => {
  const ref = useScrollReveal()
  const { t, language } = usePreferences()
  const isEn = language === 'en'

  const formRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Toast feedback
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)

  const { copied: emailCopied, copyText: copyEmail } = useClipboard(2500)
  const { copied: phoneCopied, copyText: copyPhone } = useClipboard(2500)

  const triggerToast = (msg) => {
    setToastMessage(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleCopyEmail = async () => {
    const ok = await copyEmail(profile.contact.email)
    if (ok) triggerToast(t.contact.copyEmailToast)
  }

  const handleCopyPhone = async () => {
    const ok = await copyPhone(profile.contact.phone)
    if (ok) triggerToast(t.contact.copyPhoneToast)
  }

  const validate = (field) => {
    const value = form[field].trim()
    const newErrors = { ...errors }

    if (field === 'name' && !value) {
      newErrors.name = isEn ? 'Your full name is required.' : 'Votre nom est requis.'
    } else if (field === 'email' && !value) {
      newErrors.email = isEn ? 'Your email address is required.' : 'Votre e-mail est requis.'
    } else if (field === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      newErrors.email = isEn ? 'Please enter a valid email address.' : 'Veuillez saisir une adresse e-mail valide.'
    } else if (field === 'subject' && !value) {
      newErrors.subject = isEn ? 'Subject is required.' : 'Le sujet est requis.'
    } else if (field === 'message' && !value) {
      newErrors.message = isEn ? 'Message is required.' : 'Votre message est requis.'
    } else if (field === 'message' && value && value.length < 10) {
      newErrors.message = isEn ? 'Message must be at least 10 characters.' : 'Le message doit contenir au moins 10 caractères.'
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fields = ['name', 'email', 'subject', 'message']
    const newErrors = {}
    let hasError = false

    fields.forEach((field) => {
      const val = form[field].trim()
      if (!val) {
        newErrors[field] = isEn ? 'This field is required.' : 'Ce champ est obligatoire.'
        hasError = true
      }
    })

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = isEn ? 'Invalid email address.' : 'Adresse e-mail invalide.'
      hasError = true
    }

    if (hasError) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    if (!ACCESS_KEY) {
      const mailtoUrl = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
        `[Portfolio] ${form.subject}`
      )}&body=${encodeURIComponent(
        `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`
      )}`
      window.location.href = mailtoUrl
      setIsSubmitting(false)
      setSubmitStatus('success')
      setForm(initialForm)
      triggerToast(isEn ? 'Redirecting to your email client...' : 'Redirection vers votre messagerie en cours...')
      return
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS)

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: `${form.name} (via Portfolio)`,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setForm(initialForm)
        triggerToast(isEn ? 'Message sent successfully!' : 'Message transmis avec succès !')
      } else {
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi :", err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Colonne Gauche : Coordonnées Directes & Copie 1-Clic */}
          <div className="lg:col-span-5 space-y-4">
            {/* Carte Email */}
            <div className="scroll-reveal p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Mail size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="font-sans font-bold text-sm text-white hover:text-blue-400 truncate block transition-colors"
                  >
                    {profile.contact.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                title={t.contact.emailLabel}
                aria-label={t.contact.emailLabel}
              >
                {emailCopied ? (
                  <Check size={16} className="text-blue-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Carte Téléphone / WhatsApp */}
            <div className="scroll-reveal p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Phone size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href={profile.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-bold text-sm text-white hover:text-blue-400 truncate block transition-colors"
                  >
                    {profile.contact.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                title={t.contact.phoneLabel}
                aria-label={t.contact.phoneLabel}
              >
                {phoneCopied ? (
                  <Check size={16} className="text-blue-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Carte Localisation */}
            <div className="scroll-reveal p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3.5">
              <span className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  {t.contact.locationLabel}
                </p>
                <p className="font-sans font-bold text-sm text-white">
                  {profile.location}
                </p>
              </div>
            </div>

            {/* Réseaux Professionnels */}
            <div className="scroll-reveal p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-blue-400">
                {t.contact.networksLabel}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/50 transition-all"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="ml-auto text-slate-500" />
                </a>

                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/50 transition-all"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="ml-auto text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire de Contact */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-slate-900/90 border-slate-800">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={18} className="text-blue-400" />
                <h3 className="font-sans font-bold text-lg text-white">
                  {t.contact.formTitle}
                </h3>
              </div>

              {submitStatus === 'success' && (
                <div className="contact-status-success p-4 mb-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-200 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">{t.contact.successMsgTitle}</p>
                    <p className="mt-0.5 text-blue-300">
                      {t.contact.successMsgText}
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact-status-error p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">{t.contact.errorMsgTitle}</p>
                    <p className="mt-0.5 text-red-300">
                      {t.contact.errorMsgText}
                    </p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={() => validate('name')}
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-blue-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.contact.emailInputLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={() => validate('email')}
                      placeholder={t.contact.emailPlaceholder}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-blue-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={() => validate('subject')}
                    placeholder={t.contact.subjectPlaceholder}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-blue-400 mt-1 font-mono">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={() => validate('message')}
                    placeholder={t.contact.messagePlaceholder}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-blue-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  icon={Send}
                  className="w-full sm:w-auto"
                >
                  {t.contact.sendBtn}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />
    </section>
  )
}

export default Contact
