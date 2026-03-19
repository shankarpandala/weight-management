import React, { useState } from 'react';

function EvidenceBlock({ title, finding, study, source, details, label }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-blue-400/50 bg-blue-50/50 shadow-sm dark:border-blue-500/40 dark:bg-blue-950/20">
      <div className="flex items-center gap-3 border-b border-blue-400/30 bg-blue-100/60 px-5 py-3 dark:border-blue-500/30 dark:bg-blue-900/30">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white dark:bg-blue-600">E</div>
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{label || 'Research Evidence'}</span>
        {title && (<><span className="text-blue-400 dark:text-blue-600">·</span><span className="text-sm font-semibold text-blue-800 dark:text-blue-200">{title}</span></>)}
      </div>
      <div className="px-5 py-4">
        <p className="text-sm leading-relaxed text-gray-700 italic dark:text-gray-300">{finding}</p>
        {study && <p className="mt-2 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">Study:</span> {study}</p>}
        {source && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">Source:</span> {source}</p>}
      </div>
      {details && (
        <div className="border-t border-blue-400/20 dark:border-blue-500/20">
          <button onClick={() => setDetailsOpen((o) => !o)} className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium text-blue-700 hover:bg-blue-100/50 dark:text-blue-300 dark:hover:bg-blue-900/20 transition-colors" aria-expanded={detailsOpen}>
            <span>Study Details</span>
            <svg className={`h-4 w-4 transition-transform duration-200 ${detailsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {detailsOpen && (
            <div className="border-t border-blue-400/20 bg-white/40 px-5 pb-5 pt-4 dark:border-blue-500/20 dark:bg-gray-900/20">
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{details}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EvidenceBlock;
