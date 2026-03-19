import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CURRICULUM } from '../subjects/index.js';
import DifficultyBadge from '../components/navigation/DifficultyBadge.jsx';
import useProgress from '../hooks/useProgress.js';

// ---------------------------------------------------------------------------
// Build flat search index from curriculum
// ---------------------------------------------------------------------------
function buildSearchIndex(curriculum) {
  const entries = [];

  for (const subject of curriculum) {
    entries.push({
      type: 'subject',
      id: subject.id,
      title: subject.title,
      description: subject.description || '',
      icon: subject.icon,
      difficulty: subject.difficulty,
      path: `/subject/${subject.id}`,
      subjectTitle: subject.title,
      chapterTitle: null,
      searchText: `${subject.title} ${subject.description || ''}`.toLowerCase(),
    });

    for (const chapter of subject.chapters || []) {
      entries.push({
        type: 'chapter',
        id: chapter.id,
        title: chapter.title,
        description: chapter.description || '',
        icon: chapter.icon || '📖',
        difficulty: chapter.difficulty,
        path: `/subject/${subject.id}/${chapter.id}`,
        subjectTitle: subject.title,
        chapterTitle: chapter.title,
        searchText: `${chapter.title} ${chapter.description || ''} ${subject.title}`.toLowerCase(),
      });

      for (const section of chapter.sections || []) {
        entries.push({
          type: 'section',
          id: section.id,
          title: section.title,
          description: section.description || '',
          icon: '',
          difficulty: section.difficulty,
          path: `/subject/${subject.id}/${chapter.id}/${section.id}`,
          subjectTitle: subject.title,
          chapterTitle: chapter.title,
          searchText: `${section.title} ${section.description || ''} ${chapter.title} ${subject.title}`.toLowerCase(),
        });
      }
    }
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Type Badge
// ---------------------------------------------------------------------------
function TypeBadge({ type }) {
  const styles = {
    subject: 'bg-emerald-900/30 text-emerald-400 border-emerald-800/50',
    chapter: 'bg-teal-900/30 text-teal-400 border-teal-800/50',
    section: 'bg-green-900/30 text-green-400 border-green-800/50',
  };

  return (
    <span
      className={`px-2 py-0.5 text-xs font-medium rounded-full border ${styles[type] || styles.section}`}
    >
      {type}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Search Result Item
// ---------------------------------------------------------------------------
function SearchResultItem({ item, query, index }) {
  // Highlight matching text
  const highlightText = (text, q) => {
    if (!q || q.length < 2) return text;
    const regex = new RegExp(
      `(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
      'gi'
    );
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark
          key={i}
          className="bg-emerald-500/30 text-emerald-300 rounded px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ delay: index * 0.03, duration: 0.25 }}
    >
      <Link
        to={item.path}
        className="block p-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-emerald-700/50 rounded-lg transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <div className="flex items-start gap-3">
          {item.icon && (
            <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                {highlightText(item.title, query)}
              </h3>
              <TypeBadge type={item.type} />
              {item.difficulty && (
                <DifficultyBadge level={item.difficulty} size="sm" />
              )}
            </div>
            {item.description && (
              <p className="text-gray-500 text-sm line-clamp-2">
                {highlightText(item.description, query)}
              </p>
            )}
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-600">
              <span>{item.subjectTitle}</span>
              {item.chapterTitle && (
                <>
                  <span>&rsaquo;</span>
                  <span>{item.chapterTitle}</span>
                </>
              )}
            </div>
          </div>
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors flex-shrink-0 mt-1"
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
}

// ---------------------------------------------------------------------------
// Search Page
// ---------------------------------------------------------------------------
export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const inputRef = useRef(null);

  const searchIndex = useMemo(() => buildSearchIndex(CURRICULUM), []);

  // Auto-focus search input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Filter results
  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const terms = trimmed.split(/\s+/);
    let filtered = searchIndex.filter((item) =>
      terms.every((term) => item.searchText.includes(term))
    );

    if (filterType !== 'all') {
      filtered = filtered.filter((item) => item.type === filterType);
    }

    return filtered.slice(0, 50);
  }, [query, filterType, searchIndex]);

  const handleClear = useCallback(() => {
    setQuery('');
    inputRef.current?.focus();
  }, []);

  const counts = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return { all: 0, subject: 0, chapter: 0, section: 0 };
    const terms = trimmed.split(/\s+/);
    const matched = searchIndex.filter((item) =>
      terms.every((term) => item.searchText.includes(term))
    );
    return {
      all: matched.length,
      subject: matched.filter((i) => i.type === 'subject').length,
      chapter: matched.filter((i) => i.type === 'chapter').length,
      section: matched.filter((i) => i.type === 'section').length,
    };
  }, [query, searchIndex]);

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'subject', label: 'Subjects' },
    { key: 'chapter', label: 'Chapters' },
    { key: 'section', label: 'Sections' },
  ];

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* ── Header ────────────────────────────────────────────────── */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Search
          </h1>
          <p className="text-gray-400">
            Find topics across all subjects, chapters, and sections
          </p>
        </motion.div>

        {/* ── Search Input ──────────────────────────────────────────── */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, nutrients, diets\u2026"
            className="w-full pl-12 pr-10 py-3.5 bg-gray-800/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-lg"
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* ── Filter Tabs ───────────────────────────────────────────── */}
        {query.trim() && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setFilterType(opt.key)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  filterType === opt.key
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50'
                }`}
              >
                {opt.label}
                <span className="ml-1.5 text-xs opacity-70">
                  ({counts[opt.key]})
                </span>
              </button>
            ))}
          </div>
        )}

        {/* ── Results ───────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {query.trim() ? (
            results.length > 0 ? (
              <motion.div
                key="results"
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-sm text-gray-500 mb-4">
                  {counts[filterType]} result
                  {counts[filterType] !== 1 ? 's' : ''} for &ldquo;
                  {query.trim()}&rdquo;
                </p>
                {results.map((item, idx) => (
                  <SearchResultItem
                    key={`${item.type}-${item.id}-${item.path}`}
                    item={item}
                    query={query.trim()}
                    index={idx}
                  />
                ))}
                {counts[filterType] > 50 && (
                  <p className="text-sm text-gray-500 text-center pt-4">
                    Showing first 50 results. Refine your search for more
                    specific results.
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                className="text-center py-16"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  No matches for &ldquo;{query.trim()}&rdquo;. Try different
                  keywords or check your spelling.
                </p>
              </motion.div>
            )
          ) : (
            <motion.div
              key="empty"
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-5xl mb-4">🍃</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Search the curriculum
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Start typing to search across 8 subjects, 22+ chapters, and 60+
                sections.
              </p>

              {/* Quick Links */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                  Popular Topics
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {[
                    'Protein',
                    'Calories',
                    'South Indian',
                    'Gut Health',
                    'BMR',
                    'Visceral Fat',
                  ].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setQuery(topic)}
                      className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Back Link ─────────────────────────────────────────────── */}
        <div className="mt-12">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
