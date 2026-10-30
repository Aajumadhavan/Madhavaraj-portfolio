import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, Heart } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Document Vault', href: '#documents' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B1220] text-slate-300 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                {PROFILE.initials}
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {PROFILE.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              {PROFILE.headline}
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div>Bengaluru & Salem, Tamil Nadu, India</div>
              <div>B.Tech Information Technology (First Class)</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Connections Column */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Direct Contact
              </h4>
              <div className="space-y-2 text-xs">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="truncate">{PROFILE.email}</span>
                </a>
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{PROFILE.phone}</span>
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Portfolio Dossier for Multinational Recruitment</span>
            <span aria-hidden="true">·</span>
            <span>Digital Marketing & Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
