import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  // Keep all cards expanded by default for recruiter scannability, with individual toggle option
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    trustbridge: true,
    'sun-associate': true,
    vedantu: true,
    nireekshan: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    setExpandedIds({
      trustbridge: true,
      'sun-associate': true,
      vedantu: true,
      nireekshan: true,
    });
  };

  const collapseAll = () => {
    setExpandedIds({
      trustbridge: true, // keep current open
      'sun-associate': false,
      vedantu: false,
      nireekshan: false,
    });
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              <span>Work Experience</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal normal-case">Professional Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight">
              Interactive Career & Operational Experience
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <button
              type="button"
              onClick={expandAll}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
            >
              Compact View
            </button>
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <div
                key={exp.id}
                className={`bg-white rounded-2xl border transition-all duration-200 ${
                  exp.isCurrent
                    ? 'border-blue-300 shadow-md ring-1 ring-blue-100'
                    : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                {/* Card Main Bar */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(exp.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl shrink-0 mt-0.5 ${
                        exp.isCurrent
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-blue-600">
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <>
                            <span aria-hidden="true" className="text-slate-300">·</span>
                            <span className="text-xs font-semibold text-emerald-700">
                              Active Current Role
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {exp.designation}
                      </h3>

                      <div className="text-sm font-semibold text-slate-700 mt-0.5">
                        {exp.company}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle button */}
                  <div className="flex items-center justify-between lg:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <span className="text-xs font-medium text-slate-500">
                      {isExpanded ? 'Hide Details' : 'View Responsibilities'}
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content Area */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                    {/* Impact highlight callout */}
                    {exp.impactHighlight && (
                      <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl mb-5 flex items-start gap-2.5 text-xs text-blue-900">
                        <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Key Operational Impact: </span>
                          <span>{exp.impactHighlight}</span>
                        </div>
                      </div>
                    )}

                    {/* Detailed Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Core Responsibilities & Deliverables
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Skills */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                        Demonstrated Professional Competencies
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-md border border-slate-200/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
