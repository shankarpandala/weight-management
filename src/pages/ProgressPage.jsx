import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CURRICULUM, getSubjectSectionCount } from '../subjects/index.js';
import ProgressBar from '../components/navigation/ProgressBar.jsx';
import useProgress from '../hooks/useProgress.js';

// ---------------------------------------------------------------------------
// Subject Progress Card
// ---------------------------------------------------------------------------
function SubjectProgressCard({ subject, completedSections, totalSections, index }) {
  const percent =
    totalSections > 0
      ? Math.round((completedSections / totalSections) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        to={`/subject/${subject.id}`}
        className="block p-5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-emerald-700/50 rounded-lg transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <div className="flex items-start gap-4">
          <span className="text-2xl">{subject.icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
              {subject.title}
            </h3>
            <div className="flex items-center justify-between text-sm mt-2 mb-1.5">
              <span className="text-gray-500">
                {completedSections} / {totalSections} sections
              </span>
              <span className="text-emerald-400 font-medium">{percent}%</span>
            </div>
            <ProgressBar value={percent} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Progress Page
// ---------------------------------------------------------------------------
export default function ProgressPage() {
  const { getSubjectProgress, resetProgress } = useProgress();

  // Calculate totals
  let totalCompleted = 0;
  let totalSections = 0;
  const subjectStats = CURRICULUM.map((subject) => {
    const sectionCount = getSubjectSectionCount(subject.id);
    const completed = getSubjectProgress(subject.id);
    totalCompleted += completed;
    totalSections += sectionCount;
    return { subject, completed, total: sectionCount };
  });

  const overallPercent =
    totalSections > 0
      ? Math.round((totalCompleted / totalSections) * 100)
      : 0;

  // Completion breakdown
  const completedSubjects = subjectStats.filter(
    (s) => s.total > 0 && s.completed === s.total
  ).length;
  const inProgressSubjects = subjectStats.filter(
    (s) => s.completed > 0 && s.completed < s.total
  ).length;
  const notStartedSubjects = subjectStats.filter(
    (s) => s.completed === 0
  ).length;

  const handleReset = () => {
    if (
      window.confirm(
        'Are you sure you want to reset all progress? This cannot be undone.'
      )
    ) {
      resetProgress();
    }
  };

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* ── Header ────────────────────────────────────────────────── */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Your Progress
          </h1>
          <p className="text-gray-400 mt-2">
            Track your learning journey across all subjects
          </p>
        </motion.div>

        {/* ── Overall Progress Card ──────────────────────────────────── */}
        <motion.div
          className="bg-gray-800/60 border border-gray-700/50 rounded-xl p-6 md:p-8 mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">
              Overall Progress
            </h2>
            <span className="text-3xl font-bold text-emerald-400">
              {overallPercent}%
            </span>
          </div>
          <ProgressBar value={overallPercent} size="lg" />
          <div className="flex items-center justify-between mt-3 text-sm text-gray-400">
            <span>
              {totalCompleted} of {totalSections} sections completed
            </span>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">
                {completedSubjects}
              </div>
              <div className="text-xs text-gray-500 mt-1">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {inProgressSubjects}
              </div>
              <div className="text-xs text-gray-500 mt-1">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-500">
                {notStartedSubjects}
              </div>
              <div className="text-xs text-gray-500 mt-1">Not Started</div>
            </div>
          </div>
        </motion.div>

        {/* ── Subject Progress Cards ─────────────────────────────────── */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">By Subject</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjectStats.map(({ subject, completed, total }, idx) => (
              <SubjectProgressCard
                key={subject.id}
                subject={subject}
                completedSections={completed}
                totalSections={total}
                index={idx}
              />
            ))}
          </div>
        </div>

        {/* ── Study Tips ─────────────────────────────────────────────── */}
        <motion.div
          className="bg-gray-800/40 border border-gray-700/40 rounded-xl p-6 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-white mb-4">Study Tips</h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-0.5">1.</span>
              <span>
                Follow the learning path in order for the best understanding
                of concepts.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-0.5">2.</span>
              <span>
                Complete all sections in a chapter before moving to the next
                one.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-0.5">3.</span>
              <span>
                Revisit foundational subjects when you encounter unfamiliar
                terms in advanced topics.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-0.5">4.</span>
              <span>
                Use the interactive charts and meal plans to apply knowledge
                practically.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* ── Actions ────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
          >
            &larr; Back to Home
          </Link>
          <button
            onClick={handleReset}
            className="text-sm text-red-400 hover:text-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-3 py-1.5"
          >
            Reset All Progress
          </button>
        </div>
      </div>
    </div>
  );
}
