import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCurriculumById, getChapterById } from '../subjects/index.js';
import DifficultyBadge from '../components/navigation/DifficultyBadge.jsx';
import ProgressBar from '../components/navigation/ProgressBar.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import useProgress from '../hooks/useProgress.js';

// ---------------------------------------------------------------------------
// Chapter Page
// ---------------------------------------------------------------------------
export default function ChapterPage() {
  const { subjectId, chapterId } = useParams();
  const subject = getCurriculumById(subjectId);
  const chapter = getChapterById(subjectId, chapterId);
  const { getSectionProgress, getChapterProgress } = useProgress();

  // ── Not Found ──────────────────────────────────────────────────────────
  if (!subject || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Chapter Not Found</h1>
          <p className="text-gray-400 mb-8">
            The chapter you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const sections = chapter.sections || [];
  const totalSections = sections.length;
  const completedSections = getChapterProgress(subjectId, chapterId);
  const completedCount = typeof completedSections === 'number'
    ? completedSections
    : Array.isArray(completedSections)
      ? completedSections.length
      : 0;
  const progressPercent =
    totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0;

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: subject.title, to: `/subject/${subjectId}` },
    { label: chapter.title },
  ];

  // Prev / Next chapter navigation
  const chapterIndex =
    subject.chapters?.findIndex((c) => c.id === chapterId) ?? -1;
  const prevChapter =
    chapterIndex > 0 ? subject.chapters[chapterIndex - 1] : null;
  const nextChapter =
    chapterIndex < (subject.chapters?.length || 0) - 1
      ? subject.chapters[chapterIndex + 1]
      : null;

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Chapter Header ────────────────────────────────────────── */}
        <motion.div
          className="mt-6 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl">{chapter.icon || '📖'}</span>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {chapter.title}
              </h1>
              {chapter.difficulty && (
                <div className="mt-2">
                  <DifficultyBadge level={chapter.difficulty} />
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            {chapter.description}
          </p>

          {/* ── Progress ───────────────────────────────────────────── */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">
                {completedCount} of {totalSections} sections completed
              </span>
              <span className="text-emerald-400 font-medium">
                {progressPercent}%
              </span>
            </div>
            <ProgressBar value={progressPercent} />
          </div>
        </motion.div>

        {/* ── Sections List ─────────────────────────────────────────── */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white mb-4">
            Sections ({totalSections})
          </h2>
          {sections.map((section, index) => {
            const isCompleted = getSectionProgress(
              subjectId,
              chapterId,
              section.id
            );
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
              >
                <Link
                  to={`/subject/${subjectId}/${chapterId}/${section.id}`}
                  className="block p-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-emerald-700/50 rounded-lg transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        isCompleted
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-700 text-gray-400 group-hover:bg-gray-600'
                      }`}
                    >
                      {isCompleted ? '✓' : index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium group-hover:text-emerald-400 transition-colors truncate">
                        {section.title}
                      </h3>
                      {section.description && (
                        <p className="text-gray-500 text-sm mt-1 truncate">
                          {section.description}
                        </p>
                      )}
                    </div>
                    {section.difficulty && (
                      <DifficultyBadge
                        level={section.difficulty}
                        size="sm"
                      />
                    )}
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Chapter Navigation ────────────────────────────────────── */}
        <div className="mt-12 flex items-center justify-between">
          {prevChapter ? (
            <Link
              to={`/subject/${subjectId}/${prevChapter.id}`}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              &larr; {prevChapter.title}
            </Link>
          ) : (
            <Link
              to={`/subject/${subjectId}`}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              &larr; Back to Subject
            </Link>
          )}
          {nextChapter && (
            <Link
              to={`/subject/${subjectId}/${nextChapter.id}`}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              {nextChapter.title} &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
