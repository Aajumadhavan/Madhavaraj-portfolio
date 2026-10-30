import React, { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  FileCheck,
  Search,
  Filter,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { DOCUMENTS, DocumentAsset, PROFILE } from '../data/portfolioData';

interface DocumentCentreProps {
  onOpenViewer: (doc: { title: string; filepath: string; fileType: string; category?: string; description?: string }) => void;
}

export const DocumentCentre: React.FC<DocumentCentreProps> = ({ onOpenViewer }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'Resume', label: 'Resume' },
    { id: 'Academic', label: 'Academic & Degree' },
    { id: 'Creative Design', label: 'Creative Design Assets' },
    { id: 'Publications & Reports', label: 'Publications & Reports' },
  ];

  const filteredDocs = DOCUMENTS.filter((doc) => {
    if (selectedCategory !== 'all' && doc.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section id="documents" className="py-20 sm:py-28 bg-[#F1F5F9]/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              <span>Document Centre</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal normal-case">Verified Portfolio Files & Proof</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight">
              Resume & Credential Document Vault
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.resumePdfPath}
              download="Madhavaraj.T.S_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Latest Resume</span>
            </a>
          </div>
        </div>

        {/* Filter Navigation & Search */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs mb-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Documents Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className={`bg-white rounded-2xl border transition-all duration-200 p-6 flex flex-col justify-between ${
                doc.featured
                  ? 'border-blue-300 shadow-sm ring-1 ring-blue-50'
                  : 'border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div>
                {/* Header tag */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    {doc.fileType === 'png' && (
                      <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                        <img
                          src={doc.filepath}
                          alt={doc.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {doc.sizeFormatted}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-blue-600 mb-1">
                  {doc.category}
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {doc.description}
                </p>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{doc.verifiedSource}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() =>
                    onOpenViewer({
                      title: doc.title,
                      filepath: doc.filepath,
                      fileType: doc.fileType,
                      category: doc.category,
                      description: doc.description,
                    })
                  }
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-600" />
                  <span>View Online</span>
                </button>

                <a
                  href={doc.filepath}
                  download
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
