import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  filepath: string;
  fileType: 'pdf' | 'png' | 'image' | string;
  category?: string;
  description?: string;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  isOpen,
  onClose,
  title,
  filepath,
  fileType,
  category,
  description,
}) => {
  const [zoomLevel, setZoomLevel] = React.useState<number>(1);

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

  const isPdf = fileType.toLowerCase().includes('pdf') || filepath.toLowerCase().endsWith('.pdf');

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span>{category || 'Document Viewer'}</span>
                <span aria-hidden="true">·</span>
                <span>Verified Asset</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                {title}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {!isPdf && (
              <div className="hidden sm:flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 mr-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(0.5, z - 0.25))}
                  className="p-1.5 text-slate-600 hover:text-slate-900 rounded hover:bg-slate-100"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-1 text-slate-500">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                  className="p-1.5 text-slate-600 hover:text-slate-900 rounded hover:bg-slate-100"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="p-1.5 text-slate-600 hover:text-slate-900 rounded hover:bg-slate-100"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            )}

            <a
              href={filepath}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <a
              href={filepath}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
              title="Open raw document in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-1"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Description Banner if available */}
        {description && (
          <div className="px-6 py-2 bg-slate-100/70 border-b border-slate-200 text-xs text-slate-600 shrink-0">
            {description}
          </div>
        )}

        {/* Modal Content Preview Area */}
        <div className="flex-1 overflow-auto bg-slate-900/5 p-4 flex items-center justify-center min-h-0">
          {isPdf ? (
            <div className="w-full h-full bg-white rounded-lg shadow-inner overflow-hidden border border-slate-200">
              <iframe
                src={`${filepath}#toolbar=1&navpanes=1`}
                title={title}
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="overflow-auto max-w-full max-h-full flex items-center justify-center p-4">
              <img
                src={filepath}
                alt={title}
                referrerPolicy="no-referrer"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-md transition-transform duration-150"
              />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-700">Official Profile Asset</span>
            <span aria-hidden="true">·</span>
            <span>Madhavaraj T.S Portfolio</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-medium text-slate-600 hover:text-slate-900"
          >
            Close Viewer (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
