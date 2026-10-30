import React from 'react';
import {
  FileText,
  Clock,
  Briefcase,
  GraduationCap,
  Languages,
  CheckCircle,
  Download,
  Mail,
  Phone,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface RecruiterSnapshotProps {
  onOpenResumeViewer: () => void;
}

export const RecruiterSnapshot: React.FC<RecruiterSnapshotProps> = ({ onOpenResumeViewer }) => {
  return (
    <section className="bg-slate-900 text-white py-10 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter 15-Second Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Recruiter Fast-Track Scan · 15-Second Overview</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Executive Candidate Summary
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenResumeViewer}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-lg transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Inspect Resume (PDF)</span>
            </button>
            <a
              href={PROFILE.resumePdfPath}
              download="Madhavaraj.T.S_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* 4-Column Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {/* Card 1: Current Employment */}
          <div className="bg-slate-800/60 p-4.5 rounded-xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Current Position</span>
            </div>
            <div className="font-bold text-white text-sm">
              Payment Operations Executive
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Trustbridge Technology Pvt Ltd
            </div>
            <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
              <span>Bengaluru, India</span>
              <span aria-hidden="true">·</span>
              <span>Apr 2026 – Present</span>
            </div>
          </div>

          {/* Card 2: Highest Qualification */}
          <div className="bg-slate-800/60 p-4.5 rounded-xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Degree</span>
            </div>
            <div className="font-bold text-white text-sm">
              B.Tech Information Technology
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Sona College of Tech (Anna Univ)
            </div>
            <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
              <span>First Class · CGPA 7.6/10</span>
              <span aria-hidden="true">·</span>
              <span>Conferred 2022</span>
            </div>
          </div>

          {/* Card 3: Dual-Core Specialization */}
          <div className="bg-slate-800/60 p-4.5 rounded-xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>Dual Core Domain Focus</span>
            </div>
            <div className="font-bold text-white text-sm">
              Digital Marketing & Operations
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Meta Ads, SEO, Medical Billing, Canva
            </div>
            <div className="text-[11px] text-slate-400 mt-2">
              IPCS Global Certified in Digital Marketing
            </div>
          </div>

          {/* Card 4: Languages & Availability */}
          <div className="bg-slate-800/60 p-4.5 rounded-xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-xs text-purple-400 font-semibold mb-2">
              <Languages className="w-4 h-4" />
              <span>Languages & Contact</span>
            </div>
            <div className="text-xs text-white font-medium">
              Tamil (Native) · English (Fluent) · Kannada & Hindi (Basic)
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px]">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                <span>stmmadhavaraj07</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={`tel:${PROFILE.phone}`}
                className="text-slate-300 hover:text-white flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>+91 9042350440</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
