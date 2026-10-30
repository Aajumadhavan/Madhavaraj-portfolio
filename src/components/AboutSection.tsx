import React from 'react';
import {
  Lightbulb,
  BarChart3,
  Target,
  CheckCircle2,
  Users2,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { PROFILE, STRENGTHS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'Target':
        return <Target className="w-5 h-5 text-rose-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'Users2':
        return <Users2 className="w-5 h-5 text-indigo-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-cyan-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  const careerSteps = [
    {
      year: '2018 – 2022',
      title: 'Engineering Foundation (B.Tech IT)',
      org: 'Sona College of Technology, Salem',
      desc: 'Graduated First Class in Information Technology, mastering data systems, web platforms, and analytical foundations.',
    },
    {
      year: '2023 – 2024',
      title: 'Operations & Documentation Trainee',
      org: 'Nireekshan Group of Companies, Chennai',
      desc: 'Structured import/export compliance records, generated commercial quotations, and coordinated client communications.',
    },
    {
      year: '2024 – 2025',
      title: 'Academic Operations & Content DTP',
      org: 'Vedantu Innovation, Tiruchirappalli',
      desc: 'Formatted educational modules, managed course operations, and delivered digital typesetting with rigorous accuracy.',
    },
    {
      year: '2025',
      title: 'Digital Marketing Specialization & Campaigns',
      org: 'Sun Associate Finance & IPCS Global',
      desc: 'Spearheaded Meta Ads campaigns, bilingual copywriting, audience targeting, and earned the Professional Diploma in Digital Marketing.',
    },
    {
      year: '2026 – Present',
      title: 'Payment Operations Executive',
      org: 'Trustbridge Technology Pvt Ltd, Bengaluru',
      desc: 'Driving medical billing accuracy, insurance pre-authorization validation, patient payable calculations, and case resolution.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F1F5F9]/40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>About Me</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal normal-case">Professional Background & Strengths</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight">
            Versatile Professional Driven by Precision & Growth
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
        </div>

        {/* Bio Narrative Box */}
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Executive Profile Summary
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {PROFILE.aboutBio}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-5">
                <div>
                  <span className="font-semibold text-slate-800">Native Language:</span> Tamil
                </div>
                <span aria-hidden="true">·</span>
                <div>
                  <span className="font-semibold text-slate-800">Professional Fluency:</span> English
                </div>
                <span aria-hidden="true">·</span>
                <div>
                  <span className="font-semibold text-slate-800">Working Knowledge:</span> Kannada, Hindi
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F1F5F9] p-6 rounded-xl border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                Core Value Proposition
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Dual Mindset:</strong> Creative marketing strategist paired with operational documentation discipline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Zero-Error Focus:</strong> Proven track record in insurance calculations and high-stakes medical billing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Regional Resonance:</strong> Native Tamil and fluent English communication for targeted market penetration.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Six Professional Strengths Cards */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">
              Six Key Professional Strengths
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Attributes consistently validated across marketing campaigns and financial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div className="p-2.5 w-fit rounded-lg bg-slate-50 border border-slate-200/80 mb-4">
                  {getStrengthIcon(strength.iconName)}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {strength.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Career Progression Timeline */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">
              Career Progression Timeline
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              A structured progression illustrating growth from technical education to digital marketing and enterprise operations.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
            {careerSteps.map((step, idx) => (
              <div key={step.title} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 border-white transition-colors ${
                    idx === careerSteps.length - 1
                      ? 'bg-blue-600 ring-4 ring-blue-100'
                      : 'bg-slate-400 group-hover:bg-blue-600'
                  }`}
                />

                <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-blue-600 font-mono tracking-tight">
                      {step.year}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {step.org}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
