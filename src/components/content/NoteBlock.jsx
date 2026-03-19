import React from 'react';

const typeConfig = {
  note: {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Note',
    border: 'border-sky-400/50 dark:border-sky-500/40',
    bg: 'bg-sky-50/50 dark:bg-sky-950/20',
    headerBg: 'bg-sky-100/60 dark:bg-sky-900/30',
    headerBorder: 'border-sky-400/30 dark:border-sky-500/30',
    iconBg: 'bg-sky-500 dark:bg-sky-600',
    text: 'text-sky-600 dark:text-sky-400',
    titleText: 'text-sky-800 dark:text-sky-200',
  },
  historical: {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Historical Context',
    border: 'border-amber-400/50 dark:border-amber-500/40',
    bg: 'bg-amber-50/50 dark:bg-amber-950/20',
    headerBg: 'bg-amber-100/60 dark:bg-amber-900/30',
    headerBorder: 'border-amber-400/30 dark:border-amber-500/30',
    iconBg: 'bg-amber-500 dark:bg-amber-600',
    text: 'text-amber-600 dark:text-amber-400',
    titleText: 'text-amber-800 dark:text-amber-200',
  },
  intuition: {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: 'Intuition',
    border: 'border-violet-400/50 dark:border-violet-500/40',
    bg: 'bg-violet-50/50 dark:bg-violet-950/20',
    headerBg: 'bg-violet-100/60 dark:bg-violet-900/30',
    headerBorder: 'border-violet-400/30 dark:border-violet-500/30',
    iconBg: 'bg-violet-500 dark:bg-violet-600',
    text: 'text-violet-600 dark:text-violet-400',
    titleText: 'text-violet-800 dark:text-violet-200',
  },
  tip: {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    label: 'Tip',
    border: 'border-teal-400/50 dark:border-teal-500/40',
    bg: 'bg-teal-50/50 dark:bg-teal-950/20',
    headerBg: 'bg-teal-100/60 dark:bg-teal-900/30',
    headerBorder: 'border-teal-400/30 dark:border-teal-500/30',
    iconBg: 'bg-teal-500 dark:bg-teal-600',
    text: 'text-teal-600 dark:text-teal-400',
    titleText: 'text-teal-800 dark:text-teal-200',
  },
};

function NoteBlock({ type = 'note', title, children }) {
  const config = typeConfig[type] || typeConfig.note;

  return (
    <div className={`my-6 overflow-hidden rounded-xl border-2 ${config.border} ${config.bg} shadow-sm`}>
      <div className={`flex items-center gap-3 border-b ${config.headerBorder} ${config.headerBg} px-5 py-3`}>
        <div className={`flex h-7 w-7 items-center justify-center rounded-full ${config.iconBg} text-white`}>
          {config.icon}
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wider ${config.text}`}>{config.label}</span>
        {title && (
          <>
            <span className={config.text}>·</span>
            <span className={`text-sm font-semibold ${config.titleText}`}>{title}</span>
          </>
        )}
      </div>
      <div className="px-5 py-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

export default NoteBlock;
