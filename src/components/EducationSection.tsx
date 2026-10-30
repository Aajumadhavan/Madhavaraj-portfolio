import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  FileText,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

interface EducationSectionProps {
  onOpenDegreeViewer: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onOpenDegreeViewer }) => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>Academic Background</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal normal-case">Formal Technical Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight">
            Education & University Conferred Degree
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
        </div>

        {/* Education Highlight Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Degree and Institution info */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    Undergraduate Degree (4-Year B.Tech)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {EDUCATION.qualification}
                  </h3>
                </div>
              </div>

              <div className="text-base font-bold text-slate-800 mb-1">
                {EDUCATION.institution}
              </div>

              <div className="text-xs text-slate-500 font-medium mb-6">
                Affiliated to {EDUCATION.university} (Autonomous Institution)
              </div>

              {/* Meta metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Cumulative CGPA</div>
                  <div className="text-base font-bold text-blue-600 font-mono mt-0.5">
                    {EDUCATION.cgpa}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Graduation Class</div>
                  <div className="text-base font-bold text-emerald-600 mt-0.5">
                    {EDUCATION.classification}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Academic Duration</div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">
                    {EDUCATION.period}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Location</div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">
                    {EDUCATION.location}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Academic Milestones & Coursework Focus
                </div>
                {EDUCATION.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Degree Certificate Verification Card */}
            <div className="lg:col-span-4 bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Verified Recruiter Proof</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200/90 shadow-2xs mb-4">
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    Anna University Degree Certificate
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Official original degree awarded in November 2022 (Graduation ceremony August 2024). Verified First Class standing.
                  </p>
                </div>

                <div className="text-[11px] text-slate-500 space-y-1 mb-6">
                  <div>• Register No & Seal Verified</div>
                  <div>• Information & Communication Engineering</div>
                  <div>• Sona College of Technology, Salem</div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={onOpenDegreeViewer}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Degree Certificate</span>
                </button>

                <a
                  href={EDUCATION.certificatePdfPath}
                  download="Madhavaraj_TS_UG_Degree_Certificate.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  <span>Download Degree PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
