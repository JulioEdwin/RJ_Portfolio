import React, { useState } from 'react'
import {
  Award,
  FileText,
  ExternalLink,
  BadgeCheck,
  Download,
  Mail,
} from 'lucide-react'
import { certifications } from '../../data/certifications'
import { profile } from '../../data/profile'
import SectionHeader from '../common/SectionHeader'
import Modal from '../common/Modal'
import Card from '../common/Card'
import Button from '../common/Button'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

/**
 * Section Reconnaissances & Certifications.
 * Règle de Génie Logiciel : 3 couleurs max, A11y, support multi-formats (PDF & Images), bilingue.
 */
const Certifications = () => {
  const ref = useScrollReveal()
  const { t } = usePreferences()
  const [selectedCert, setSelectedCert] = useState(null)

  const requestUrl = (cert) =>
    `mailto:${profile.contact.email}?subject=${encodeURIComponent(
      `Demande d'attestation — ${cert.title}`
    )}&body=${encodeURIComponent(
      `Bonjour Julio Edwin,\n\nJe souhaiterais obtenir une copie de votre attestation « ${cert.title} » émise par ${cert.issuer} (${cert.date}).\n\nCordialement.`
    )}`

  const isPdf = selectedCert?.file?.toLowerCase().endsWith('.pdf')

  return (
    <section id="certifications" className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            eyebrow={t.certifications.eyebrow}
            title={t.certifications.title}
            description={t.certifications.description}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="scroll-reveal"
              style={{ transitionDelay: `${(index % 3) * 70}ms` }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                      <Award size={20} />
                    </span>

                    {cert.verified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] uppercase tracking-wider font-semibold border border-blue-500/20">
                        <BadgeCheck size={12} />
                        {t.certifications.verified}
                      </span>
                    )}
                  </div>

                  <h3 className="font-sans font-bold text-base text-white mb-1.5">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-blue-400 mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {cert.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-slate-400">
                    {cert.date}
                  </span>

                  {cert.file ? (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      <FileText size={14} className="text-blue-400" />
                      <span>{t.certifications.viewBtn}</span>
                    </button>
                  ) : (
                    <a
                      href={requestUrl(cert)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-slate-800 text-slate-400 text-xs hover:text-white hover:border-blue-500 transition-colors"
                      title="Demander une copie par email"
                    >
                      <Mail size={13} />
                      <span>{t.certifications.onRequest}</span>
                    </a>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Modale d'aperçu de certificat (PDF ou Image) */}
      {selectedCert && (
        <Modal
          isOpen={Boolean(selectedCert)}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          subtitle={`// ${selectedCert.issuer} — ${selectedCert.date}`}
          maxWidth="max-w-4xl"
        >
          <div className="space-y-4">
            <div className="w-full min-h-[50vh] max-h-[65vh] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-3">
              {isPdf ? (
                <iframe
                  src={selectedCert.file}
                  title={`Aperçu PDF de l'attestation ${selectedCert.title}`}
                  className="w-full h-[55vh] border-0"
                />
              ) : (
                <img
                  src={selectedCert.file}
                  alt={`Aperçu de l'attestation ${selectedCert.title}`}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
                  loading="lazy"
                />
              )}
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
              <span className="font-mono text-xs text-slate-400 truncate max-w-xs">
                {selectedCert.file.split('/').pop()}
              </span>

              <div className="flex items-center gap-3">
                <Button
                  href={selectedCert.file}
                  variant="primary"
                  size="sm"
                  icon={Download}
                  download
                >
                  {isPdf ? t.certifications.downloadPdf : t.certifications.downloadDoc}
                </Button>
                <Button
                  href={selectedCert.file}
                  variant="outlineLight"
                  size="sm"
                  iconRight={ExternalLink}
                  target="_blank"
                >
                  {t.certifications.fullscreen}
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default Certifications
