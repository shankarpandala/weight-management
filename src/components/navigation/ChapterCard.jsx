import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DifficultyBadge from './DifficultyBadge.jsx'
import ProgressBar from './ProgressBar.jsx'
import useLanguage from '../../i18n/useLanguage.js'

const CheckIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
)

export default function ChapterCard({
  chapter,
  subjectId,
  index,
  completedSections = [],
  totalSections = 0,
}) {
  const { t } = useLanguage()
  const completedCount = completedSections.length
  const progressValue = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0
  const isComplete = totalSections > 0 && completedCount === totalSections
  const sectionCount = chapter.sections?.length || totalSections || 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="h-full"
    >
      <Link
        to={`/subjects/${subjectId}/chapters/${chapter.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-gray-900/60"
        aria-label={`${chapter.title} — ${progressValue}% complete`}
      >
        <div className="flex flex-1 flex-col p-5 gap-3">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                {index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {chapter.title}
                </h3>
              </div>
            </div>
            {isComplete ? (
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                <CheckIcon />
              </span>
            ) : (
              <span className="shrink-0 text-gray-300 transition-transform group-hover:translate-x-0.5 dark:text-gray-600">
                <ChevronRightIcon />
              </span>
            )}
          </div>

          {/* Description */}
          {chapter.description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1">
              {chapter.description}
            </p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">{sectionCount}</span>{' '}
              {sectionCount === 1 ? (t.sections?.slice(0, -1) || 'section') : (t.sections || 'sections')}
            </span>
            {chapter.difficulty && (
              <>
                <span aria-hidden="true">·</span>
                <DifficultyBadge level={chapter.difficulty} size="sm" />
              </>
            )}
          </div>

          {/* Progress */}
          {totalSections > 0 && (
            <div className="space-y-1 pt-1">
              <ProgressBar value={progressValue} showPercent={false} size="sm" />
              <p className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                {completedCount} / {totalSections} {t.sectionsComplete}
              </p>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
