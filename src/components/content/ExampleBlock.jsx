import React, { useState } from 'react';

const difficultyConfig = {
  beginner: { label: 'Beginner', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  intermediate: { label: 'Intermediate', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
  advanced: { label: 'Advanced', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
};

function ExampleBlock({ title, problem, solution, difficulty }) {
  const [solutionOpen, setSolutionOpen] = useState(false);
  const diff = difficultyConfig[difficulty] || null;

  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-emerald-400/50 bg-emerald-50/50 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-950/20">
      <div className="flex items-center gap-3 border-b border-emerald-400/30 bg-emerald-100/60 px-5 py-3 dark:border-emerald-500/30 dark:bg-emerald-900/30">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white dark:bg-emerald-600">Ex</div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Worked Example</span>
        {title && (
          <>
            <span className="text-emerald-400 dark:text-emerald-600">·</span>
            <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">{title}</span>
          </>
        )}
        {diff && (
          <span className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-medium ${diff.color}`}>
            {diff.label}
          </span>
        )}
      </div>

      {/* Problem */}
      <div className="px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">Problem</p>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{problem}</p>
      </div>

      {/* Solution toggle */}
      {solution && solution.length > 0 && (
        <div className="border-t border-emerald-400/20 dark:border-emerald-500/20">
          <button
            onClick={() => setSolutionOpen((o) => !o)}
            className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium text-emerald-700 hover:bg-emerald-100/50 dark:text-emerald-300 dark:hover:bg-emerald-900/20 transition-colors"
            aria-expanded={solutionOpen}
          >
            <span>{solutionOpen ? 'Hide Solution' : 'Show Solution'}</span>
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${solutionOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {solutionOpen && (
            <div className="border-t border-emerald-400/20 bg-white/40 px-5 pb-5 pt-4 dark:border-emerald-500/20 dark:bg-gray-900/20">
              <ol className="space-y-4">
                {solution.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white dark:bg-emerald-600">
                      {idx + 1}
                    </span>
                    <div className="pt-0.5">
                      {item.step && (
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.step}</p>
                      )}
                      {item.explanation && (
                        <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.explanation}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ExampleBlock;
