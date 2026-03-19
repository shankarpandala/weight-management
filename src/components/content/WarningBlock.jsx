import React from 'react';

function WarningBlock({ title, children }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-amber-400/50 bg-amber-50/50 shadow-sm dark:border-amber-500/40 dark:bg-amber-950/20">
      <div className="flex items-center gap-3 border-b border-amber-400/30 bg-amber-100/60 px-5 py-3 dark:border-amber-500/30 dark:bg-amber-900/30">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white dark:bg-amber-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Warning</span>
        <span className="text-amber-400 dark:text-amber-600">·</span>
        <span className="text-sm font-semibold text-amber-800 dark:text-amber-200">{title || 'Common Misconception'}</span>
      </div>
      <div className="px-5 py-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

export default WarningBlock;
