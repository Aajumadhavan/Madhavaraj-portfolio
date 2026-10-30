import React, { useState } from 'react';
import {
  Eye,
  ArrowRight,
  CheckCircle2,
  X,
  Palette,
  Search,
  Download,
  ShieldCheck,
  Sparkles,
  Layers,
  Sliders,
  Sun,
  Moon,
  Info,
} from 'lucide-react';
import {
  PROJECTS,
  ALL_CREATIVE_POSTERS,
  ALL_BRAND_LOGOS,
  ProjectItem,
  CreativePoster,
  BrandLogo,
} from '../data/portfolioData';

interface ProjectsSectionProps {
  onOpenDocumentViewer: (doc: {
    title: string;
    filepath: string;
    fileType: string;
    category?: string;
    description?: string;
  }) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDocumentViewer }) => {
  // Navigation filter: 'all-creative' | 'logos' | 'posters' | 'digital-marketing' | 'operations' | 'all'
  const [mainFilter, setMainFilter] = useState<'all-creative' | 'logos' | 'posters' | 'digital-marketing' | 'operations' | 'all'>('all-creative');
  const [posterGroupFilter, setPosterGroupFilter] = useState<string>('all');
  const [logoGroupFilter, setLogoGroupFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedPoster, setSelectedPoster] = useState<CreativePoster | null>(null);
  const [selectedLogo, setSelectedLogo] = useState<BrandLogo | null>(null);
  const [logoModalCanvasBg, setLogoModalCanvasBg] = useState<'light' | 'dark'>('light');

  const mainCategories = [
    { id: 'all-creative', label: `Creative Design & Branding (${ALL_CREATIVE_POSTERS.length + ALL_BRAND_LOGOS.length})`, count: ALL_CREATIVE_POSTERS.length + ALL_BRAND_LOGOS.length },
    { id: 'logos', label: `Brand Logos & Emblems (${ALL_BRAND_LOGOS.length})`, count: ALL_BRAND_LOGOS.length },
    { id: 'posters', label: `Commercial Posters (${ALL_CREATIVE_POSTERS.length})`, count: ALL_CREATIVE_POSTERS.length },
    { id: 'digital-marketing', label: 'Digital Marketing Campaigns (1)', count: 1 },
    { id: 'operations', label: 'Business Operations & Guides (1)', count: 1 },
    { id: 'all', label: 'Full Portfolio Overview', count: PROJECTS.length + ALL_CREATIVE_POSTERS.length + ALL_BRAND_LOGOS.length },
  ];

  const posterGroups = [
    { id: 'all', label: `All Posters (${ALL_CREATIVE_POSTERS.length})` },
    { id: 'Financial Services', label: 'Financial Services (5)' },
    { id: 'Travel & Tourism', label: 'Travel & Tourism (4)' },
    { id: 'FMCG & Food', label: 'FMCG & Food (2)' },
    { id: 'EdTech & Workshops', label: 'EdTech & Workshops (3)' },
    { id: 'Industrial & Roofing', label: 'Industrial & Roofing (1)' },
    { id: 'Cultural & Logistics', label: 'Cultural & Logistics (2)' },
  ];

  const logoGroups = [
    { id: 'all', label: `All Brand Logos (${ALL_BRAND_LOGOS.length})` },
    { id: 'Logistics & Transport', label: 'Logistics & Transport (2)' },
    { id: 'Financial & Corporate', label: 'Financial & Corporate (1)' },
    { id: 'Agri & Organic Foods', label: 'Agri & Organic Foods (2)' },
    { id: 'Industrial & Roofing', label: 'Industrial & Roofing (1)' },
    { id: 'Travel & Tourism', label: 'Travel & Tourism (1)' },
    { id: 'Lifestyle & Apparel', label: 'Lifestyle & Apparel (1)' },
  ];

  const filteredLogos = ALL_BRAND_LOGOS.filter((logo) => {
    if (logoGroupFilter !== 'all' && logo.category !== logoGroupFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        logo.name.toLowerCase().includes(q) ||
        logo.brand.toLowerCase().includes(q) ||
        (logo.slogan && logo.slogan.toLowerCase().includes(q)) ||
        logo.concept.toLowerCase().includes(q) ||
        logo.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const filteredPosters = ALL_CREATIVE_POSTERS.filter((poster) => {
    if (posterGroupFilter !== 'all' && poster.categoryGroup !== posterGroupFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        poster.title.toLowerCase().includes(q) ||
        poster.brand.toLowerCase().includes(q) ||
        poster.headline.toLowerCase().includes(q) ||
        poster.description.toLowerCase().includes(q) ||
        poster.language.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const showLogos = mainFilter === 'all-creative' || mainFilter === 'logos' || mainFilter === 'all';
  const showPosters = mainFilter === 'all-creative' || mainFilter === 'posters' || mainFilter === 'all';
  const showCaseStudies = mainFilter === 'digital-marketing' || mainFilter === 'operations' || mainFilter === 'all';

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              <Palette className="w-4 h-4" />
              <span>Creative Design & Branding Portfolio</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal normal-case">8 Brand Logos & 17 Commercial Posters</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight">
              Creative Design, Branding & Visual Portfolio
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
          </div>

          <p className="text-xs text-slate-500 max-w-md">
            Complete creative showcase featuring all 8 authentic brand logos & corporate emblems, plus 17 commercial advertising posters and strategic case studies designed by Madhavaraj T.S.
          </p>
        </div>

        {/* Primary Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-8 w-fit overflow-x-auto max-w-full">
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setMainFilter(cat.id as any);
                setSearchQuery('');
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                mainFilter === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Global Search Bar (when searching across creative assets) */}
        {(showLogos || showPosters) && (
          <div className="bg-[#F1F5F9]/70 p-4 sm:p-5 rounded-2xl border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Filter & Search Verified Design Assets ({filteredLogos.length} Logos · {filteredPosters.length} Posters)</span>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by brand, slogan, concept or tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 1: BRAND LOGOS & EMBLEMS SHOWCASE (ALL 8 AUTHENTIC LOGOS)        */}
        {/* ========================================================================= */}
        {showLogos && (
          <div className="mb-20">
            {/* Subsection Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] tracking-tight">
                    Brand Identity, Emblems & Logo Marks
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200/60">
                    All 8 Verified Logos
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Original vector emblems, corporate badges, and brand identities crafted across Logistics, Finance, Industrial Roofing, Organic FMCG, and Tourism.
                </p>
              </div>

              {/* Logo Category Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5">
                {logoGroups.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setLogoGroupFilter(group.id)}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                      logoGroupFilter === group.id
                        ? 'bg-blue-600 text-white shadow-2xs font-semibold'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Logo Visual Presentation Container */}
                    <div
                      onClick={() => setSelectedLogo(logo)}
                      className="relative h-56 bg-slate-50/80 border-b border-slate-100 flex items-center justify-center p-6 cursor-pointer overflow-hidden transition-colors group-hover:bg-blue-50/20"
                    >
                      {/* Subtle Grid / Texture for visual contrast */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />

                      {/* Vector or Badge Pill */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded bg-white/90 text-slate-700 border border-slate-200/80 shadow-2xs backdrop-blur-xs">
                        <ShieldCheck className="w-3 h-3 text-blue-600" />
                        <span>{logo.vectorAvailable ? 'SVG Vector / Scalable' : 'Brand Emblem'}</span>
                      </div>

                      <div className="absolute top-3 right-3 z-10">
                        <span className="text-[10px] font-medium text-slate-500 bg-white/90 px-2 py-0.5 rounded border border-slate-200">
                          {logo.aspect}
                        </span>
                      </div>

                      {/* Actual Logo Image */}
                      <img
                        src={logo.imagePath}
                        alt={logo.name}
                        referrerPolicy="no-referrer"
                        className="max-h-40 max-w-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                      />

                      {/* Quick Inspect Hover Overlay */}
                      <div className="absolute inset-0 bg-[#0B1220]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
                        <span className="px-3 py-1.5 bg-white text-slate-900 text-xs font-semibold rounded-lg shadow-md flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-blue-600" />
                          <span>Inspect Logo Details</span>
                        </span>
                      </div>
                    </div>

                    {/* Logo Metadata & Description */}
                    <div className="p-5">
                      <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-1">
                        {logo.category}
                      </div>

                      <h4
                        onClick={() => setSelectedLogo(logo)}
                        className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-1"
                        title={logo.name}
                      >
                        {logo.name}
                      </h4>

                      {logo.slogan && (
                        <div className="text-xs font-medium text-slate-500 italic mt-0.5 mb-2.5">
                          "{logo.slogan}"
                        </div>
                      )}

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {logo.concept}
                      </p>

                      {/* Color Palette Dots */}
                      <div className="mb-4">
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                          Color Palette
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {logo.colors.map((c, idx) => {
                            const hexMatch = c.match(/#[0-9A-Fa-f]{6}/);
                            const hex = hexMatch ? hexMatch[0] : '#2563EB';
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-slate-50 border border-slate-200 text-slate-700"
                                title={c}
                              >
                                <span
                                  className="w-2.5 h-2.5 rounded-full shrink-0 border border-slate-300"
                                  style={{ backgroundColor: hex }}
                                />
                                <span className="truncate max-w-[80px]">{c.split(' ')[0]}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Tools Stack */}
                      <div className="flex flex-wrap items-center gap-1">
                        {logo.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-600 rounded font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedLogo(logo)}
                      className="text-xs font-semibold text-slate-800 hover:text-blue-600 flex items-center gap-1"
                    >
                      <span>Design Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={logo.imagePath}
                        download
                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Download Logo Asset"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          onOpenDocumentViewer({
                            title: logo.name,
                            filepath: logo.imagePath,
                            fileType: 'image',
                            category: 'Brand Logo',
                            description: `${logo.concept} Slogan: "${logo.slogan || ''}"`,
                          })
                        }
                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Open Fullscreen Viewer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredLogos.length === 0 && (
              <div className="p-10 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <p className="text-sm text-slate-600 font-medium">No brand logos match "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setLogoGroupFilter('all');
                  }}
                  className="mt-2 text-xs font-semibold text-blue-600 hover:underline"
                >
                  Reset logo filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2: COMMERCIAL POSTERS GALLERY (ALL 17 VERIFIED POSTERS)          */}
        {/* ========================================================================= */}
        {showPosters && (
          <div className="mb-20">
            {/* Subsection Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] tracking-tight">
                    Commercial Advertising Posters & Promotional Flyers
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200/60">
                    All 17 Verified Posters
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  High-converting bilingual flyers, loan promotion campaigns, workshop announcements, travel brochures, and FMCG advertisements.
                </p>
              </div>

              {/* Poster Category Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5">
                {posterGroups.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setPosterGroupFilter(group.id)}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                      posterGroupFilter === group.id
                        ? 'bg-blue-600 text-white shadow-2xs font-semibold'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Posters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPosters.map((poster) => (
                <div
                  key={poster.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Poster Image Frame */}
                    <div
                      onClick={() => setSelectedPoster(poster)}
                      className="relative h-64 bg-slate-900/5 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={poster.imagePath}
                        alt={poster.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Full Poster & Copy</span>
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-white/95 text-slate-800 shadow-2xs backdrop-blur-xs">
                          {poster.language}
                        </span>
                      </div>
                    </div>

                    {/* Poster Details */}
                    <div className="p-4 sm:p-5">
                      <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-1">
                        {poster.categoryGroup}
                      </div>

                      <h4
                        onClick={() => setSelectedPoster(poster)}
                        className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-1"
                        title={poster.title}
                      >
                        {poster.title}
                      </h4>

                      <div className="text-xs text-slate-700 font-medium italic mt-1 line-clamp-2">
                        "{poster.headline}"
                      </div>

                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {poster.description}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-1">
                        {poster.tools.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-600 rounded font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Poster Actions Footer */}
                  <div className="px-4 py-2.5 sm:px-5 sm:py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedPoster(poster)}
                      className="text-xs font-semibold text-slate-800 hover:text-blue-600 flex items-center gap-1"
                    >
                      <span>Full Spec</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={poster.imagePath}
                        download
                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Download Poster Image"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          onOpenDocumentViewer({
                            title: poster.title,
                            filepath: poster.imagePath,
                            fileType: 'image',
                            category: poster.categoryGroup,
                            description: poster.description,
                          })
                        }
                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Open Fullscreen Viewer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosters.length === 0 && (
              <div className="p-10 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <p className="text-sm text-slate-600 font-medium">No posters match "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setPosterGroupFilter('all');
                  }}
                  className="mt-2 text-xs font-semibold text-blue-600 hover:underline"
                >
                  Reset poster search
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 3: CASE STUDIES & OPERATIONS GUIDES (DIGITAL MARKETING & OPS)   */}
        {/* ========================================================================= */}
        {showCaseStudies && (
          <div className="mb-12">
            <div className="mb-6 pb-4 border-b border-slate-200">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] tracking-tight">
                Specialized Case Studies & Operations Guides
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Detailed breakdowns of digital marketing acquisition performance and structured business reference publications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {PROJECTS.filter((p) => {
                if (mainFilter === 'digital-marketing') return p.category === 'Digital Marketing';
                if (mainFilter === 'operations') return p.category === 'Business Operations';
                return p.id !== 'creative-design-full-portfolio'; // avoid duplicate in all view
              }).map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-blue-600">{project.category}</span>
                      <span>{project.period}</span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {project.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {project.performanceMetrics && (
                      <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        {project.performanceMetrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="text-sm font-extrabold text-blue-600 font-mono">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-slate-500 truncate">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {project.tools.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[11px] bg-slate-100 text-slate-700 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-slate-800 hover:text-blue-600 flex items-center gap-1.5"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.originalAssetPath && (
                      <button
                        type="button"
                        onClick={() =>
                          onOpenDocumentViewer({
                            title: project.title,
                            filepath: project.originalAssetPath!,
                            fileType: project.isPdf ? 'pdf' : 'png',
                            category: project.category,
                            description: project.description,
                          })
                        }
                        className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Document</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL 1: BRAND LOGO INSPECTION & CANVAS TESTER MODAL                     */}
        {/* ========================================================================= */}
        {selectedLogo && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          >
            <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
                <div className="min-w-0 pr-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-blue-600 font-semibold">{selectedLogo.brand}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedLogo.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedLogo.vectorAvailable ? 'Scalable SVG' : 'Emblem PNG'}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate mt-0.5">
                    {selectedLogo.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedLogo.imagePath}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Logo</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedLogo(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100/50 flex flex-col lg:flex-row gap-6 items-stretch">
                {/* Visual Canvas with Light/Dark Background Switcher */}
                <div className="w-full lg:w-3/5 flex flex-col">
                  {/* Canvas Background Controls */}
                  <div className="flex items-center justify-between px-3 py-2 bg-white rounded-t-xl border border-b-0 border-slate-200 text-xs text-slate-600">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-blue-600" />
                      <span>Canvas Background Mode:</span>
                    </span>
                    <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setLogoModalCanvasBg('light')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                          logoModalCanvasBg === 'light'
                            ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Sun className="w-3 h-3 text-amber-500" />
                        <span>Light</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setLogoModalCanvasBg('dark')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                          logoModalCanvasBg === 'dark'
                            ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Moon className="w-3 h-3 text-indigo-400" />
                        <span>Dark</span>
                      </button>
                    </div>
                  </div>

                  {/* Canvas Viewport */}
                  <div
                    className={`flex-1 flex items-center justify-center p-8 rounded-b-xl border border-slate-200 transition-colors duration-200 min-h-[300px] ${
                      logoModalCanvasBg === 'light'
                        ? 'bg-white'
                        : 'bg-[#0B1220]'
                    }`}
                  >
                    <img
                      src={selectedLogo.imagePath}
                      alt={selectedLogo.name}
                      referrerPolicy="no-referrer"
                      className="max-h-72 max-w-full object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Narrative & Technical Specs */}
                <div className="w-full lg:w-2/5 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    {selectedLogo.slogan && (
                      <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Brand Slogan / Trademark Motto
                        </div>
                        <div className="text-base font-extrabold text-[#0B1220] italic">
                          "{selectedLogo.slogan}"
                        </div>
                      </div>
                    )}

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-blue-600" />
                        <span>Concept & Creative Symbolism</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {selectedLogo.concept}
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Official Brand Color Codes
                      </div>
                      <div className="space-y-1.5">
                        {selectedLogo.colors.map((c, i) => {
                          const hexMatch = c.match(/#[0-9A-Fa-f]{6}/);
                          const hex = hexMatch ? hexMatch[0] : '#2563EB';
                          return (
                            <div key={i} className="flex items-center justify-between text-xs p-1.5 bg-slate-50 rounded border border-slate-100">
                              <div className="flex items-center gap-2">
                                <span
                                  className="w-4 h-4 rounded border border-slate-300"
                                  style={{ backgroundColor: hex }}
                                />
                                <span className="font-medium text-slate-800">{c}</span>
                              </div>
                              <span className="font-mono text-[11px] text-slate-500">{hex}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Design Tools & Execution
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {selectedLogo.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded-lg font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const targetLogo = selectedLogo;
                        setSelectedLogo(null);
                        onOpenDocumentViewer({
                          title: targetLogo.name,
                          filepath: targetLogo.imagePath,
                          fileType: 'image',
                          category: 'Brand Logo',
                          description: `${targetLogo.concept} Slogan: "${targetLogo.slogan || ''}"`,
                        });
                      }}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Full-Screen Viewer</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLogo(null)}
                      className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL 2: COMMERCIAL POSTER ZOOM & DETAIL MODAL                           */}
        {/* ========================================================================= */}
        {selectedPoster && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          >
            <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
                <div className="min-w-0 pr-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-blue-600 font-semibold">{selectedPoster.brand}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedPoster.categoryGroup}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedPoster.language}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate mt-0.5">
                    {selectedPoster.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedPoster.imagePath}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Image</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedPoster(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100/50 flex flex-col lg:flex-row gap-6 items-center">
                <div className="w-full lg:w-3/5 flex items-center justify-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm max-h-[65vh] overflow-hidden">
                  <img
                    src={selectedPoster.imagePath}
                    alt={selectedPoster.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] max-w-full object-contain rounded"
                  />
                </div>

                <div className="w-full lg:w-2/5 space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Creative Headline
                    </div>
                    <div className="text-sm font-bold text-slate-900 leading-snug">
                      "{selectedPoster.headline}"
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Commercial Objective & Concept
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {selectedPoster.description}
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Tools & Design Stack
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {selectedPoster.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded-lg font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedPoster(null)}
                      className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL 3: CASE STUDY DETAIL MODAL                                         */}
        {/* ========================================================================= */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
                <div className="min-w-0 pr-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-blue-600 font-semibold">{selectedProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.clientOrOrg}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.performanceMetrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.performanceMetrics.map((m, i) => (
                      <div key={i} className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                        <div className="text-xl font-extrabold text-blue-600 font-mono">{m.value}</div>
                        <div className="text-xs font-bold text-slate-800 mt-1">{m.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{m.context}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Deliverables & Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.verifiedOutcomes.map((v, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
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
