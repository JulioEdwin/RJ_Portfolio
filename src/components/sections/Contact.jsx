import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { profile } from '../../data/profile'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import useScrollReveal from '../../hooks/useScrollReveal'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const initialErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const ref = useScrollReveal()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState(null)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: profile.contact.phone,
      href: `tel:${profile.contact.phone.replace(/[^+\d]/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: profile.contact.location,
      href: null,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'github.com/JulioEdwin',
      href: profile.contact.github,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: profile.contact.linkedin,
      href: profile.contact.linkedin,
    },
  ]

  const validate = (field) => {
    const value = form[field].trim()
    const newErrors = { ...errors }

    if (field === 'name' && !value) {
      newErrors.name = 'Votre nom est obligatoire.'
    } else if (field === 'email' && !value) {
      newErrors.email = "Votre email est obligatoire."
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

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(form).forEach((field) => {
      const value = form[field].trim()
      if (!value) {
        newErrors[field] =
          field === 'name' ? 'Votre nom est obligatoire.'
          : field === 'email' ? "Votre email est obligatoire."
          : field === 'subject' ? 'Le sujet est obligatoire.'
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

    setStatus({ type: 'success', message: 'Votre message a bien été envoyé. Merci !' })
    setForm(initialForm)
    setErrors(initialErrors)
  }

  const inputBase =
    'w-full px-4 py-3 rounded-lg border bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors'

  const inputNormal = 'border-slate-200 hover:border-slate-300'
  const inputError = 'border-red-400 focus:ring-red-200'

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={10}
            eyebrow="contact"
            title="Travaillons ensemble"
            subtitle="Vous avez un projet, une opportunité de stage, un emploi ou simplement une idée à discuter ? N'hésitez pas à me contacter."
            align="left"
          />
        </div>

        <div className="scroll-reveal grid md:grid-cols-2 gap-5 mb-14">
          <a
            href={`mailto:${profile.contact.email}`}
            className="group bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-6">
              discutons / email
            </p>
            <h3 className="font-display font-bold text-4xl md:text-5xl text-navy group-hover:text-primary transition-colors mb-3 tracking-tight">
              Discuter
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Une question, une idée, une opportunité ? Écrivez-moi, je réponds dès que possible.
            </p>
          </a>

          <button
            type="button"
            onClick={() =>
              document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
            className="group text-left bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-6">
              envoyons / message
            </p>
            <h3 className="font-display font-bold text-4xl md:text-5xl text-navy group-hover:text-primary transition-colors mb-3 tracking-tight">
              Nous écrire
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Prêt à lancer un projet ? Envoyez-moi les détails via le formulaire de contact.
            </p>
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          <div className="scroll-reveal lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-navy mb-1">Mes coordonnées</h3>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href || '#'}
                target={href && href.startsWith('http') ? '_blank' : undefined}
                rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 transition-all duration-200 ${
                  href ? 'hover:border-primary hover:shadow-sm' : 'cursor-default'
                }`}
              >
                <span className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-medium text-navy break-all">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="scroll-reveal lg:col-span-3">
            <form id="formulaire" onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-5" noValidate>
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
                >
                  {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  {status.message}
                </div>
              )}

              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                <Send size={18} />
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact