import { Link } from 'react-router-dom'

const ArrowLeftIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
)

/**
 * PrevNextNav — navigation between sections with subject-transition awareness.
 *
 * Props:
 *   prev  — { to, title, subtitle?, isNewSubject? } | null
 *   next  — { to, title, subtitle?, isNewSubject? } | null
 */
export default function PrevNextNav({ prev, next }) {
  if (!prev && !next) return null

  return (
    <nav
      className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:items-stretch sm:justify-between dark:border-gray-800"
      aria-label="Section navigation"
    >
      {/* Previous link */}
      {prev ? (
        <Link
          to={prev.to}
          className="group flex flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-emerald-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-700/60"
          aria-label={`Previous: ${prev.title}`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-400 transition-colors group-hover:border-emerald-300 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:group-hover:border-emerald-700/60 dark:group-hover:bg-emerald-900/30 dark:group-hover:text-emerald-400">
            <ArrowLeftIcon />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
              {prev.isNewSubject ? 'Previous subject' : 'Previous'}
            </p>
            <p className="truncate text-sm font-semibold text-gray-700 group-hover:text-emerald-600 dark:text-gray-300 dark:group-hover:text-emerald-400 transition-colors">
              {prev.title}
            </p>
            {prev.subtitle && (
              <p className="truncate text-xs text-gray-400 dark:text-gray-500">
                {prev.subtitle}
              </p>
            )}
          </div>
        </Link>
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}

      {/* Next link */}
      {next ? (
        <Link
          to={next.to}
          className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-gray-200 bg-white p-4 text-right transition-all hover:border-emerald-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-700/60"
          aria-label={`Next: ${next.title}`}
        >
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
              {next.isNewSubject ? 'Next subject' : 'Next'}
            </p>
            <p className="truncate text-sm font-semibold text-gray-700 group-hover:text-emerald-600 dark:text-gray-300 dark:group-hover:text-emerald-400 transition-colors">
              {next.title}
            </p>
            {next.subtitle && (
              <p className="truncate text-xs text-gray-400 dark:text-gray-500">
                {next.subtitle}
              </p>
            )}
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-400 transition-colors group-hover:border-emerald-300 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:group-hover:border-emerald-700/60 dark:group-hover:bg-emerald-900/30 dark:group-hover:text-emerald-400">
            <ArrowRightIcon />
          </span>
        </Link>
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}
    </nav>
  )
}
