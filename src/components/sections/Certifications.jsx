import { useState, useEffect } from 'react'
import { Award, FileText, ExternalLink, BadgeCheck, X, Download, Mail } from 'lucide-react'
import { certifications } from '../../data/certifications'
import { profile } from '../../data/profile'
import SectionTitle from '../ui/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

const CertModal = ({ cert, onClose }) => {
  // Verrouille le scroll uniquement quand la modale est réellement ouverte :
  // sans ce garde-fou, body.overflow: hidden bloquerait le scroll du site entier.
  useEffect(() => {
    if (!cert) return undefined

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [cert, onClose])

  if (!cert) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificat : ${cert.title}`}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-ink-soft w-full sm:max-w-4xl max-h-[92vh] sm:rounded-2xl rounded-t-2xl overflow-hidden shadow-2xl modal-content border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-white/10">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-1 truncate">
              {cert.issuer} — {cert.date}
            </p>
            <h3 className="font-heading font-extrabold text-base sm:text-lg text-white truncate">
              {cert.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 min-h-0 bg-black/40">
          <iframe
            src={cert.file}
            title={`Aperçu du certificat : ${cert.title}`}
            className="w-full h-full min-h-[52vh] border-0"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 border-t border-white/10">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 truncate">
            {cert.file.split('/').pop()}
          </span>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={cert.file}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              <Download size={14} />
              Télécharger
            </a>
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-white/25 text-white hover:bg-white/10 transition-all"
            >
              Nouvel onglet
              <ExternalLink size={13} className="opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Certifications = () => {
  const ref = useScrollReveal()
  const [selectedCert, setSelectedCert] = useState(null)

  const requestUrl = (cert) =>
    `mailto:${profile.contact.email}?subject=${encodeURIComponent(
      `Demande d'attestation — ${cert.title}`
    )}&body=${encodeURIComponent(
      `Bonjour,\n\nJe souhaiterais recevoir une copie de mon attestation « ${cert.title} » (${cert.issuer}, ${cert.date}).\n\nMerci d'avance.`
    )}`

  return (
    <section id="certifications" className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
      <div
        className="absolute top-20 -right-40 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="scroll-reveal">
          <SectionTitle
            dark
            eyebrow="certifications & attestations"
            title="Reconnaissances"
            description="Des certifications et attestations obtenues auprès d'organismes reconnus — Codefinity, Orange Digital Center, X-Road® et Forage."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="scroll-reveal"
              style={{ transitionDelay: `${(index % 3) * 70}ms` }}
            >
              <article className="group h-full bg-ink-card border border-white/10 rounded-2xl p-6 flex flex-col hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <span className="w-11 h-11 bg-primary/20 text-primary-light rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Award size={22} />
                  </span>
                  {cert.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.14em]">
                      <BadgeCheck size={13} />
                      Vérifié
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-base text-white leading-snug mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary-light mb-3">{cert.issuer}</p>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">{cert.detail}</p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    {cert.date}
                  </span>

                  {cert.file ? (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-white/25 text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <FileText size={14} />
                      Voir le certificat
                      <ExternalLink size={12} className="opacity-70" />
                    </button>
                  ) : (
                    <a
                      href={requestUrl(cert)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-dashed border-white/25 text-slate-400 hover:text-white hover:border-primary transition-all"
                      title="Demander une copie de l'attestation par e-mail"
                    >
                      <Mail size={14} />
                      copie sur demande
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  )
}

export default Certifications
