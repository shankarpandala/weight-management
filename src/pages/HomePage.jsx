import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CURRICULUM, getSubjectSectionCount } from '../subjects/index.js';
import SubjectCard from '../components/navigation/SubjectCard.jsx';
import useProgress from '../hooks/useProgress.js';

// ---------------------------------------------------------------------------
// Floating health-themed symbols
// ---------------------------------------------------------------------------
const FLOATING_SYMBOLS = ['🫀', '🥗', '⚖️', '🍛', '📉', '📈', '🎯', '🦠'];

function FloatingSymbol({ symbol, style }) {
  return (
    <div
      className="absolute text-2xl md:text-3xl opacity-10 animate-float pointer-events-none select-none"
      style={style}
    >
      {symbol}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stat Card
// ---------------------------------------------------------------------------
function StatCard({ value, label }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-emerald-400">{value}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Learning Path Phase
// ---------------------------------------------------------------------------
function LearningPathPhase({ number, title, subjects, color, index }) {
  return (
    <motion.div
      className="relative flex items-start gap-4 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {subjects.map((s) => (
            <span
              key={s}
              className="px-2.5 py-0.5 text-xs rounded-full border"
              style={{
                color: color,
                borderColor: `${color}44`,
                backgroundColor: `${color}11`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Home Page
// ---------------------------------------------------------------------------
export default function HomePage() {
  const { getSubjectProgress } = useProgress();
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      symbol: FLOATING_SYMBOLS[i % FLOATING_SYMBOLS.length],
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${8 + Math.random() * 12}s`,
      },
    }));
    setSymbols(generated);
  }, []);

  const phases = [
    {
      number: 1,
      title: 'Foundations',
      subjects: ['Body Fundamentals', 'Nutrition Science'],
      color: '#ef4444',
    },
    {
      number: 2,
      title: 'Core Concepts',
      subjects: ['Energy Balance', 'Indian Diet & Nutrition'],
      color: '#22c55e',
    },
    {
      number: 3,
      title: 'Applied',
      subjects: ['Weight Loss', 'Weight Gain'],
      color: '#06b6d4',
    },
    {
      number: 4,
      title: 'Special Topics',
      subjects: ['Pot Belly Reduction', 'Gut Health'],
      color: '#8b5cf6',
    },
  ];

  const tags = [
    'ICMR Guidelines',
    'Research Citations',
    'Interactive Tools',
    'Indian Diet Focus',
    'Progress Tracking',
  ];

  return (
    <div className="min-h-screen">
      {/* ----------------------------------------------------------------- */}
      {/* Hero Section                                                       */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0">
          {symbols.map((s, i) => (
            <FloatingSymbol key={i} symbol={s.symbol} style={s.style} />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Evidence-Based
            </span>
            <br />
            <span className="text-white">Weight Management</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A comprehensive, research-quality interactive web book covering body
            fundamentals, nutrition science, Indian &amp; South Indian diet, and
            evidence-based weight management strategies.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <a
              href="#subjects"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Start Learning &rarr;
            </a>
            <Link
              to="/progress"
              className="px-8 py-3 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View Progress
            </Link>
          </motion.div>

          <div className="mt-16 flex items-center justify-center gap-12 md:gap-20">
            <StatCard value="8" label="Subjects" />
            <StatCard value="22+" label="Chapters" />
            <StatCard value="60+" label="Interactive Sections" />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Learning Path                                                      */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Learning Path
          </motion.h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A structured journey from foundational biology to practical dietary
            strategies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {phases.map((phase, idx) => (
              <LearningPathPhase key={phase.number} {...phase} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Subjects Grid                                                      */}
      {/* ----------------------------------------------------------------- */}
      <section id="subjects" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Explore Subjects
          </motion.h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Dive into any subject at your own pace
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CURRICULUM.map((subject, idx) => {
              const progress = getSubjectProgress(subject.id);
              const totalSections = getSubjectSectionCount(subject.id);
              return (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                >
                  <SubjectCard
                    subject={subject}
                    completedCount={progress}
                    totalCount={totalSections}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* About Section                                                      */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Research-Quality Content
          </motion.h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Every topic is grounded in peer-reviewed research and evidence-based
            guidelines. Our content bridges the gap between academic nutrition
            science and practical Indian dietary wisdom, with special emphasis on
            South Indian food traditions and ICMR recommendations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-emerald-900/30 text-emerald-400 text-sm font-medium rounded-full border border-emerald-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
