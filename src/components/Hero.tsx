import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Megaphone,
  ShieldCheck,
  Palette,
  Briefcase,
  Camera,
  CheckCircle2,
  FileText,
  MapPin,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { PROFILE, CAPABILITIES } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeViewer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeViewer }) => {
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCustomAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-white">
      {/* Refined subtle background geometry & blue gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-slate-100/80 blur-2xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#0B1220 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen Hero: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker with dot separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-700 uppercase mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
              <span>Personal Portfolio & Executive Dossier</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal normal-case">Updated 2026</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight leading-[1.15] mb-4">
              {PROFILE.name}
            </h1>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl font-semibold text-blue-600 mb-6 leading-snug">
              {PROFILE.headline}
            </p>

            {/* Introduction Quote */}
            <blockquote className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 border-l-2 border-slate-200 pl-4 py-1 italic bg-slate-50/60 rounded-r-lg">
              "{PROFILE.intro}"
            </blockquote>

            {/* Quick Location & Status info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-8">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PROFILE.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Available for Strategic Roles
              </span>
              <span aria-hidden="true">·</span>
              <span>B.Tech IT (First Class)</span>
            </div>

            {/* Three Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1220] hover:bg-[#152238] rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-1">
                <a
                  href={PROFILE.resumePdfPath}
                  download="Madhavaraj.T.S_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenResumeViewer}
                  className="p-3 text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                  title="View Resume Online (PDF Modal)"
                  aria-label="View Resume Online"
                >
                  <FileText className="w-4 h-4" />
                </button>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Let's Connect</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo Placeholder with Interactive Customizer */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card frame */}
              <div className="relative bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-xl">
                {/* Profile Avatar Container */}
                <div className="relative aspect-4/5 w-full bg-linear-to-b from-slate-100 via-slate-50 to-blue-50/40 rounded-2xl overflow-hidden flex flex-col items-center justify-center border border-slate-200/60 group">
                  {customAvatar ? (
                    <img
                      src={customAvatar}
                      alt={PROFILE.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    /* Sophisticated executive profile visual placeholder */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-linear-to-b from-[#0B1220]/5 via-white to-blue-50/50">
                      <div className="relative mb-5">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-linear-to-tr from-[#0B1220] to-[#1E3A8A] text-white flex items-center justify-center text-3xl font-extrabold shadow-lg tracking-tight border-4 border-white">
                          {PROFILE.initials}
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-xs">
                          <CheckCircle2 className="w-6 h-6 text-blue-600 fill-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">
                        {PROFILE.name}
                      </h3>
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        Bengaluru & Salem, India
                      </p>

                      <div className="mt-4 px-3 py-1.5 bg-white/90 border border-slate-200 rounded-lg text-[11px] text-slate-600 font-medium">
                        Trustbridge Technology · Sun Associate Finance · Vedantu
                      </div>

                      <div className="mt-5 text-[11px] text-slate-400">
                        Profile Image Slot · Replace with custom photograph below
                      </div>
                    </div>
                  )}

                  {/* Photo Replace Floating Action */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-10">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="avatar-photo-upload"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-800 bg-white/95 hover:bg-white border border-slate-200 rounded-lg shadow-sm backdrop-blur-sm transition-all"
                      title="Replace placeholder with your own photograph"
                    >
                      <Camera className="w-3.5 h-3.5 text-blue-600" />
                      <span>{customAvatar ? 'Change Photo' : 'Upload Photo'}</span>
                    </button>
                    {customAvatar && (
                      <button
                        type="button"
                        onClick={() => setCustomAvatar(null)}
                        className="px-2 py-1.5 text-xs text-slate-600 hover:text-red-600 bg-white/95 border border-slate-200 rounded-lg shadow-sm"
                        title="Reset to default placeholder"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                {/* Recruiter Trust Footer Card */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">Direct Contact:</span>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-blue-600 hover:underline font-medium truncate max-w-[170px]"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                  <a
                    href="#contact"
                    className="text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-0.5"
                  >
                    <span>Reach out</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Capability Cards Below the Hero Section */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Four Pillars of Professional Practice
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1220] tracking-tight mt-1">
                Core Capability Areas
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              A unique interdisciplinary profile bridging marketing growth, operational rigor, creative aesthetics, and business coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((cap) => (
              <a
                key={cap.id}
                href={cap.linkAnchor}
                className="group p-5 bg-[#F1F5F9]/60 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      {getCapabilityIcon(cap.iconName)}
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cap.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-blue-600">
                  <span>Explore section</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
