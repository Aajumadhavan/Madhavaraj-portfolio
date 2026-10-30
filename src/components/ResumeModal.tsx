import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  ExternalLink,
  Printer,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';
import { PROFILE, EXPERIENCES, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide">
                Executive Resume Dossier
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {PROFILE.name} — Curriculum Vitae
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-slate-200/80 p-0.5 rounded-lg mr-2 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Web Document
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Raw PDF Sheet
              </button>
            </div>

            <a
              href={PROFILE.resumePdfPath}
              download="Madhavaraj.T.S_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-slate-100/60 p-4 sm:p-8">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full min-h-[550px] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <iframe
                src={`${PROFILE.resumePdfPath}#toolbar=1`}
                title="Madhavaraj T.S Resume PDF"
                className="w-full h-full border-0 min-h-[600px]"
              />
            </div>
          ) : (
            /* Pristine Recruiter Web Resume Layout */
            <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-200 text-slate-900 font-sans">
              {/* Header */}
              <div className="border-b border-slate-200 pb-6 text-center">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] tracking-tight">
                  {PROFILE.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
                  {PROFILE.headline}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 mt-3 font-mono">
                  <span>{PROFILE.phone}</span>
                  <span aria-hidden="true">|</span>
                  <a href={`mailto:${PROFILE.email}`} className="text-blue-600 hover:underline">
                    {PROFILE.email}
                  </a>
                  <span aria-hidden="true">|</span>
                  <span>{PROFILE.location}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="py-5 border-b border-slate-200">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                  Executive Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Creative Digital Marketer and Payment Operations Executive with hands-on experience in SEO, social media marketing, Meta Ads campaigns, and lead generation, alongside medical billing operations, insurance approval verification, and payment processing. Proficient in Canva, Adobe Photoshop, WordPress, Shopify, and analytics tools, combining creative thinking with a strong eye for accuracy and documentation.
                </p>
              </div>

              {/* Digital Stack */}
              <div className="py-5 border-b border-slate-200">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                  Core Competencies & Tool Stack
                </h2>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div>
                    <span className="font-bold text-slate-900">Digital Marketing:</span> SEO (On-page, Off-page, Technical, Local), Social Media Marketing, Meta Ads Manager, SEM, Amazon Ads, Content Writing, Campaign Management.
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Payment & Operations:</span> Medical Billing Operations, Insurance Pre-Auth & Approvals, Patient Payable Calculations, Limit Validations, Discrepancy Audits.
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Design & Platforms:</span> Canva, Figma, Adobe Photoshop, WordPress, Shopify, Google Analytics Tools, Microsoft Excel.
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Languages:</span> Tamil (Native), English (Fluent), Kannada (Basic), Hindi (Basic).
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="py-5 border-b border-slate-200">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                  Professional Experience
                </h2>

                <div className="space-y-6">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                        <div>
                          <span className="font-bold text-sm text-slate-900">{exp.company}</span>
                          <span className="text-xs text-slate-500 ml-2">({exp.location})</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 font-mono">{exp.period}</span>
                      </div>
                      <div className="text-xs font-semibold text-blue-600 mb-2">
                        {exp.designation}
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="py-5 border-b border-slate-200">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Education
                </h2>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-sm text-slate-900">{EDUCATION.institution}</span>
                    <div className="text-xs text-slate-600">{EDUCATION.qualification} · {EDUCATION.classification}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-500 font-mono">{EDUCATION.period}</span>
                    <div className="text-xs font-bold text-blue-600">CGPA: {EDUCATION.cgpa}</div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="pt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Certifications
                </h2>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.id} className="flex items-start justify-between gap-2">
                      <span>• <span className="font-bold text-slate-800">{cert.title}</span> — {cert.institution}</span>
                      <span className="text-slate-400 font-mono text-[11px] shrink-0">{cert.period}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <span>Verified Document</span>
            <span aria-hidden="true">·</span>
            <span>Madhavaraj T.S</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.resumePdfPath}
              download="Madhavaraj.T.S_Resume.pdf"
              className="text-blue-600 hover:underline font-semibold"
            >
              Direct PDF Download
            </a>
            <button
              type="button"
              onClick={onClose}
              className="font-medium text-slate-700 hover:text-slate-900"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
