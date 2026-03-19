import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CURRICULUM } from '../../subjects/index.js'
import useProgress from '../../hooks/useProgress.js'

/* ------------------------------------------------------------------ */
/*  SVG Icon helpers                                                  */
/* ------------------------------------------------------------------ */

function ChevronIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-emerald-500"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function CircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-300 dark:text-gray-600"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Sidebar content (shared between desktop & mobile)                 */
/* ------------------------------------------------------------------ */

function SidebarContent({ closeSidebar }) {
  const { subjectId, chapterId } = useParams()
  const location = useLocation()
  const { isChapterComplete } = useProgress()
  const activeRef = useRef(null)

  // Track which subjects are expanded
  const expandedSubjects = useMemo(() => {
    const set = new Set()
    if (subjectId) set.add(subjectId)
    return set
  }, [subjectId])

  // Scroll active item into view
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [subjectId, chapterId])

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          Topics
        </h2>
        <Link
          to="/progress"
          onClick={closeSidebar}
          className="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
        >
          View My Progress &rarr;
        </Link>
      </div>

      {/* Curriculum list */}
      <nav className="flex-1 overflow-y-auto px-2 py-2" aria-label="Topic navigation">
        <ul className="space-y-0.5">
          {CURRICULUM.map((subject) => {
            const isExpanded = expandedSubjects.has(subject.id)
            const isActiveSubject = subjectId === subject.id

            return (
              <SubjectItem
                key={subject.id}
                subject={subject}
                isExpanded={isExpanded || isActiveSubject}
                isActiveSubject={isActiveSubject}
                activeChapterId={chapterId}
                activeRef={activeRef}
                isChapterComplete={isChapterComplete}
                closeSidebar={closeSidebar}
              />
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Subject accordion item                                            */
/* ------------------------------------------------------------------ */

function SubjectItem({
  subject,
  isExpanded,
  isActiveSubject,
  activeChapterId,
  activeRef,
  isChapterComplete,
  closeSidebar,
}) {
  const [open, setOpen] = useState(isExpanded)

  useEffect(() => {
    if (isExpanded) setOpen(true)
  }, [isExpanded])

  const completedCount = subject.chapters
    ? subject.chapters.filter((ch) => isChapterComplete(subject.id, ch.id)).length
    : 0
  const totalCount = subject.chapters ? subject.chapters.length : 0

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
          isActiveSubject
            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50'
        }`}
        aria-expanded={open}
      >
        <span
          className="h-2.5 w-2.5 rounded-full shrink-0"
          style={{ backgroundColor: subject.colorHex }}
          aria-hidden="true"
        />
        <span className="flex-1 truncate font-medium">{subject.title}</span>
        {totalCount > 0 && (
          <span className="text-[10px] tabular-nums text-gray-400 dark:text-gray-500">
            {completedCount}/{totalCount}
          </span>
        )}
        <ChevronIcon open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && subject.chapters && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {subject.chapters.map((chapter) => {
              const isActive =
                isActiveSubject && activeChapterId === chapter.id
              const completed = isChapterComplete(subject.id, chapter.id)

              return (
                <li key={chapter.id}>
                  <Link
                    ref={isActive ? activeRef : null}
                    to={`/subjects/${subject.id}/chapters/${chapter.id}`}
                    onClick={closeSidebar}
                    className={`flex items-center gap-2 rounded-md py-1.5 pl-8 pr-3 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                      isActive
                        ? 'bg-emerald-100 font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/40 dark:hover:text-gray-200'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {completed ? <CheckCircleIcon /> : <CircleIcon />}
                    <span className="truncate">{chapter.title}</span>
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Sidebar export                                               */
/* ------------------------------------------------------------------ */

export default function Sidebar({ open, onClose }) {
  const overlayRef = useRef(null)

  const closeSidebar = useCallback(() => {
    if (onClose) onClose()
  }, [onClose])

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeSidebar()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, closeSidebar])

  return (
    <>
      {/* Desktop sidebar — always visible on lg+ */}
      <aside
        className="hidden lg:flex lg:flex-col lg:w-72 lg:shrink-0 lg:border-r lg:border-gray-200 lg:bg-white lg:dark:border-gray-800 lg:dark:bg-gray-950 h-[calc(100vh-3.5rem)] sticky top-14"
        aria-label="Main navigation"
      >
        <SidebarContent closeSidebar={() => {}} />
      </aside>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              ref={overlayRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={closeSidebar}
              aria-hidden="true"
            />

            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl dark:bg-gray-950 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Close button */}
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
                <span className="text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  WeightWise
                </span>
                <button
                  type="button"
                  onClick={closeSidebar}
                  className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800"
                  aria-label="Close navigation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <SidebarContent closeSidebar={closeSidebar} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
