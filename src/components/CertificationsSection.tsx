import React, { useState } from 'react';
import {
  Award,
  Calendar,
  Building2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  X,
} from 'lucide-react';
import { CERTIFICATIONS, CertificationItem } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-[#F1F5F9]/40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>Credentials</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal normal-case">Continuous Learning & Professional Development</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight">
            Certifications & Industry Credentials
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
          <p className="text-xs text-slate-500 mt-3 max-w-2xl">
            Formal qualifications earned from premier institutions including IPCS Global, IIT Kharagpur, and engineering colleges.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-200 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-100 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 inline-block">
                      {cert.credentialBadge}
                    </span>
                    <div className="text-[11px] text-slate-400 font-mono mt-1">
                      {cert.completionDate}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug mb-1">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-3">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{cert.institution}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Topics summary list */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Syllabus & Curriculum Focus:
                  </div>
                  {cert.topicsCovered.slice(0, 3).map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {cert.period}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Certification Detail Dialog */}
        {activeCert && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600">Verified Credential</span>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {activeCert.title}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Awarding Institution</div>
                  <div className="text-sm font-bold text-slate-800">{activeCert.institution}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Duration</div>
                    <div className="text-xs font-semibold text-slate-700">{activeCert.period}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Completion Date</div>
                    <div className="text-xs font-semibold text-slate-700">{activeCert.completionDate}</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1">Curriculum & Skills Mastered</div>
                  <ul className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    {activeCert.topicsCovered.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic bg-blue-50/60 p-3 rounded-lg border border-blue-100">
                  {activeCert.description}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
