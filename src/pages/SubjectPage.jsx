import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getSubjectSectionCount, getLocalizedSubject, getLocalizedChapter } from '../subjects/index.js';
import ChapterCard from '../components/navigation/ChapterCard.jsx';
import DifficultyBadge from '../components/navigation/DifficultyBadge.jsx';
import ProgressBar from '../components/navigation/ProgressBar.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import useProgress from '../hooks/useProgress.js';
import useLanguage from '../i18n/useLanguage.js';

// ---------------------------------------------------------------------------
// Subject Page
// ---------------------------------------------------------------------------
export default function SubjectPage() {
  const { subjectId } = useParams();
  const { lang, t } = useLanguage();
  const subject = getLocalizedSubject(subjectId, lang);
  const { getSubjectProgress, getChapterProgress } = useProgress();

  // ── Not Found ──────────────────────────────────────────────────────────
  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t.subjectNotFound}</h1>
          <p className="text-gray-400 mb-8">
            {t.subjectNotFoundDesc}
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {t.backToHome}
          </Link>
        </div>
      </div>
    );
  }

  const totalSections = getSubjectSectionCount(subjectId);
  const progress = getSubjectProgress(subjectId);
  const progressPercent =
    totalSections > 0 ? Math.round((progress / totalSections) * 100) : 0;

  const breadcrumbs = [
    { label: lang === 'te' ? 'హోమ్' : 'Home', href: '/' },
    { label: subject.title },
  ];

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Subject Header ────────────────────────────────────────── */}
        <motion.div
          className="mt-6 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">{subject.icon}</span>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {subject.title}
              </h1>
              {subject.difficulty && (
                <div className="mt-2">
                  <DifficultyBadge level={subject.difficulty} />
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            {subject.description}
          </p>

          {/* ── Health Relevance ────────────────────────────────────── */}
          {subject.healthRelevance && (
            <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-800/40 rounded-lg">
              <h3 className="text-emerald-400 font-semibold text-sm uppercase tracking-wide mb-2">
                {t.healthRelevance}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {subject.healthRelevance}
              </p>
            </div>
          )}

          {/* ── Progress ───────────────────────────────────────────── */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">
                {progress} / {totalSections} {t.sectionsCompleted}
              </span>
              <span className="text-emerald-400 font-medium">
                {progressPercent}%
              </span>
            </div>
            <ProgressBar value={progressPercent} />
          </div>
        </motion.div>

        {/* ── Chapters ──────────────────────────────────────────────── */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">
            {t.chaptersCount} ({subject.chapters?.length || 0})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subject.chapters?.map((chapter, index) => {
              const chapterProgress = getChapterProgress(subjectId, chapter.id);
              const chapterSections = chapter.sections?.length || 0;
              return (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  subjectId={subjectId}
                  index={index}
                  completedSections={
                    Array.isArray(chapterProgress)
                      ? chapterProgress
                      : []
                  }
                  totalSections={chapterSections}
                />
              );
            })}
          </div>
        </div>

        {/* ── Navigation ────────────────────────────────────────────── */}
        <div className="mt-12 flex items-center justify-between">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
          >
            &larr; {t.backToHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
