import React, { useState } from 'react';

const typeConfig = {
  foundational: { label: 'Research Papers', icon: '\uD83D\uDCC4', order: 1 },
  textbook: { label: 'Textbooks', icon: '\uD83D\uDCDA', order: 2 },
  guideline: { label: 'Clinical Guidelines', icon: '\uD83D\uDCCB', order: 3 },
  review: { label: 'Reviews & Meta-Analyses', icon: '\uD83D\uDD2C', order: 4 },
};

function ReferenceList({ references = [] }) {
  const [open, setOpen] = useState(false);

  // Group references by type
  const grouped = references.reduce((acc, ref) => {
    const type = ref.type || 'foundational';
    if (!acc[type]) acc[type] = [];
    acc[type].push(ref);
    return acc;
  }, {});

  // Sort groups by configured order
  const sortedGroups = Object.entries(grouped).sort(
    ([a], [b]) => (typeConfig[a]?.order || 99) - (typeConfig[b]?.order || 99)
  );

  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-gray-300/50 bg-gray-50/50 shadow-sm dark:border-gray-600/40 dark:bg-gray-900/20">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-3 text-left hover:bg-gray-100/50 dark:hover:bg-gray-800/30 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white dark:bg-gray-600">R</div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">References</span>
          <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            {references.length}
          </span>
        </div>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-gray-300/30 px-5 pb-5 pt-4 dark:border-gray-600/30">
          {sortedGroups.map(([type, refs]) => {
            const config = typeConfig[type] || { label: type, icon: '\uD83D\uDCC4' };
            return (
              <div key={type} className="mb-4 last:mb-0">
                <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <span>{config.icon}</span>
                  <span>{config.label}</span>
                </h4>
                <ul className="space-y-2 pl-1">
                  {refs.map((ref, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">{ref.authors}</span>
                      {ref.year && <span className="text-gray-500 dark:text-gray-400"> ({ref.year})</span>}
                      {ref.title && <span>. {ref.title}</span>}
                      {ref.source && <span className="italic text-gray-500 dark:text-gray-400">. {ref.source}</span>}
                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          [link]
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ReferenceList;
