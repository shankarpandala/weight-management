import React, { lazy, Suspense, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCurriculumById, getChapterById, getSectionById, getAdjacentSections, resolveBuildsOn } from '../subjects/index.js';
import DifficultyBadge from '../components/navigation/DifficultyBadge.jsx';
import ProgressBar from '../components/navigation/ProgressBar.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import PrevNextNav from '../components/navigation/PrevNextNav.jsx';
import useProgress from '../hooks/useProgress.js';

// ---------------------------------------------------------------------------
// SVG Icon Helpers
// ---------------------------------------------------------------------------
function CheckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Content Registry — maps every section path to its lazy-loaded component
// ---------------------------------------------------------------------------
const CONTENT_REGISTRY = {
  // ── Subject 01: Body Fundamentals ──────────────────────────────────────
  '01-body-fundamentals/c1-cell-biology/s1-cell-structure-energy': lazy(() => import('../subjects/01-body-fundamentals/c1-cell-biology/s1-cell-structure-energy.jsx')),
  '01-body-fundamentals/c1-cell-biology/s2-metabolic-pathways': lazy(() => import('../subjects/01-body-fundamentals/c1-cell-biology/s2-metabolic-pathways.jsx')),
  '01-body-fundamentals/c1-cell-biology/s3-anabolism-catabolism': lazy(() => import('../subjects/01-body-fundamentals/c1-cell-biology/s3-anabolism-catabolism.jsx')),
  '01-body-fundamentals/c2-digestive-system/s1-digestive-anatomy': lazy(() => import('../subjects/01-body-fundamentals/c2-digestive-system/s1-digestive-anatomy.jsx')),
  '01-body-fundamentals/c2-digestive-system/s2-enzymes-secretions': lazy(() => import('../subjects/01-body-fundamentals/c2-digestive-system/s2-enzymes-secretions.jsx')),
  '01-body-fundamentals/c2-digestive-system/s3-nutrient-absorption': lazy(() => import('../subjects/01-body-fundamentals/c2-digestive-system/s3-nutrient-absorption.jsx')),
  '01-body-fundamentals/c3-endocrine-system/s1-hunger-satiety-hormones': lazy(() => import('../subjects/01-body-fundamentals/c3-endocrine-system/s1-hunger-satiety-hormones.jsx')),
  '01-body-fundamentals/c3-endocrine-system/s2-thyroid-metabolic-rate': lazy(() => import('../subjects/01-body-fundamentals/c3-endocrine-system/s2-thyroid-metabolic-rate.jsx')),
  '01-body-fundamentals/c3-endocrine-system/s3-cortisol-stress-fat': lazy(() => import('../subjects/01-body-fundamentals/c3-endocrine-system/s3-cortisol-stress-fat.jsx')),

  // ── Subject 02: Nutrition Science ──────────────────────────────────────
  '02-nutrition-science/c1-macronutrients/s1-carbohydrates': lazy(() => import('../subjects/02-nutrition-science/c1-macronutrients/s1-carbohydrates.jsx')),
  '02-nutrition-science/c1-macronutrients/s2-proteins': lazy(() => import('../subjects/02-nutrition-science/c1-macronutrients/s2-proteins.jsx')),
  '02-nutrition-science/c1-macronutrients/s3-fats': lazy(() => import('../subjects/02-nutrition-science/c1-macronutrients/s3-fats.jsx')),
  '02-nutrition-science/c2-micronutrients/s1-vitamins': lazy(() => import('../subjects/02-nutrition-science/c2-micronutrients/s1-vitamins.jsx')),
  '02-nutrition-science/c2-micronutrients/s2-minerals': lazy(() => import('../subjects/02-nutrition-science/c2-micronutrients/s2-minerals.jsx')),
  '02-nutrition-science/c2-micronutrients/s3-water-electrolytes': lazy(() => import('../subjects/02-nutrition-science/c2-micronutrients/s3-water-electrolytes.jsx')),
  '02-nutrition-science/c3-food-energy/s1-thermic-effect': lazy(() => import('../subjects/02-nutrition-science/c3-food-energy/s1-thermic-effect.jsx')),
  '02-nutrition-science/c3-food-energy/s2-caloric-density': lazy(() => import('../subjects/02-nutrition-science/c3-food-energy/s2-caloric-density.jsx')),
  '02-nutrition-science/c3-food-energy/s3-bioavailability': lazy(() => import('../subjects/02-nutrition-science/c3-food-energy/s3-bioavailability.jsx')),

  // ── Subject 03: Energy Balance ─────────────────────────────────────────
  '03-energy-balance/c1-energy-expenditure/s1-bmr': lazy(() => import('../subjects/03-energy-balance/c1-energy-expenditure/s1-bmr.jsx')),
  '03-energy-balance/c1-energy-expenditure/s2-tdee': lazy(() => import('../subjects/03-energy-balance/c1-energy-expenditure/s2-tdee.jsx')),
  '03-energy-balance/c1-energy-expenditure/s3-neat': lazy(() => import('../subjects/03-energy-balance/c1-energy-expenditure/s3-neat.jsx')),
  '03-energy-balance/c2-body-composition/s1-body-fat-lean-mass': lazy(() => import('../subjects/03-energy-balance/c2-body-composition/s1-body-fat-lean-mass.jsx')),
  '03-energy-balance/c2-body-composition/s2-measurement-methods': lazy(() => import('../subjects/03-energy-balance/c2-body-composition/s2-measurement-methods.jsx')),
  '03-energy-balance/c2-body-composition/s3-set-point-theory': lazy(() => import('../subjects/03-energy-balance/c2-body-composition/s3-set-point-theory.jsx')),
  '03-energy-balance/c3-weight-change/s1-caloric-surplus-deficit': lazy(() => import('../subjects/03-energy-balance/c3-weight-change/s1-caloric-surplus-deficit.jsx')),
  '03-energy-balance/c3-weight-change/s2-metabolic-adaptation': lazy(() => import('../subjects/03-energy-balance/c3-weight-change/s2-metabolic-adaptation.jsx')),
  '03-energy-balance/c3-weight-change/s3-water-weight-glycogen': lazy(() => import('../subjects/03-energy-balance/c3-weight-change/s3-water-weight-glycogen.jsx')),

  // ── Subject 04: Indian Diet ────────────────────────────────────────────
  '04-indian-diet/c1-indian-food-systems/s1-indian-staples': lazy(() => import('../subjects/04-indian-diet/c1-indian-food-systems/s1-indian-staples.jsx')),
  '04-indian-diet/c1-indian-food-systems/s2-cooking-methods': lazy(() => import('../subjects/04-indian-diet/c1-indian-food-systems/s2-cooking-methods.jsx')),
  '04-indian-diet/c1-indian-food-systems/s3-ayurveda-evidence': lazy(() => import('../subjects/04-indian-diet/c1-indian-food-systems/s3-ayurveda-evidence.jsx')),
  '04-indian-diet/c2-south-indian-diet/s1-rice-based-meals': lazy(() => import('../subjects/04-indian-diet/c2-south-indian-diet/s1-rice-based-meals.jsx')),
  '04-indian-diet/c2-south-indian-diet/s2-vegetables-coconut': lazy(() => import('../subjects/04-indian-diet/c2-south-indian-diet/s2-vegetables-coconut.jsx')),
  '04-indian-diet/c2-south-indian-diet/s3-fermented-foods': lazy(() => import('../subjects/04-indian-diet/c2-south-indian-diet/s3-fermented-foods.jsx')),
  '04-indian-diet/c3-indian-dietary-patterns/s1-icmr-guidelines': lazy(() => import('../subjects/04-indian-diet/c3-indian-dietary-patterns/s1-icmr-guidelines.jsx')),
  '04-indian-diet/c3-indian-dietary-patterns/s2-high-protein-vegetarian': lazy(() => import('../subjects/04-indian-diet/c3-indian-dietary-patterns/s2-high-protein-vegetarian.jsx')),
  '04-indian-diet/c3-indian-dietary-patterns/s3-diet-myths-debunked': lazy(() => import('../subjects/04-indian-diet/c3-indian-dietary-patterns/s3-diet-myths-debunked.jsx')),

  // ── Subject 05: Weight Loss ────────────────────────────────────────────
  '05-weight-loss/c1-weight-loss-principles/s1-caloric-deficit-strategies': lazy(() => import('../subjects/05-weight-loss/c1-weight-loss-principles/s1-caloric-deficit-strategies.jsx')),
  '05-weight-loss/c1-weight-loss-principles/s2-meal-timing-fasting': lazy(() => import('../subjects/05-weight-loss/c1-weight-loss-principles/s2-meal-timing-fasting.jsx')),
  '05-weight-loss/c1-weight-loss-principles/s3-sustainable-weight-loss': lazy(() => import('../subjects/05-weight-loss/c1-weight-loss-principles/s3-sustainable-weight-loss.jsx')),
  '05-weight-loss/c2-indian-diet-weight-loss/s1-calorie-controlled-plans': lazy(() => import('../subjects/05-weight-loss/c2-indian-diet-weight-loss/s1-calorie-controlled-plans.jsx')),
  '05-weight-loss/c2-indian-diet-weight-loss/s2-south-indian-modifications': lazy(() => import('../subjects/05-weight-loss/c2-indian-diet-weight-loss/s2-south-indian-modifications.jsx')),
  '05-weight-loss/c2-indian-diet-weight-loss/s3-portion-control': lazy(() => import('../subjects/05-weight-loss/c2-indian-diet-weight-loss/s3-portion-control.jsx')),
  '05-weight-loss/c3-behavioral-aspects/s1-mindful-eating': lazy(() => import('../subjects/05-weight-loss/c3-behavioral-aspects/s1-mindful-eating.jsx')),
  '05-weight-loss/c3-behavioral-aspects/s2-emotional-eating': lazy(() => import('../subjects/05-weight-loss/c3-behavioral-aspects/s2-emotional-eating.jsx')),
  '05-weight-loss/c3-behavioral-aspects/s3-sustainable-habits': lazy(() => import('../subjects/05-weight-loss/c3-behavioral-aspects/s3-sustainable-habits.jsx')),

  // ── Subject 06: Weight Gain ────────────────────────────────────────────
  '06-weight-gain/c1-weight-gain-principles/s1-caloric-surplus-lean-mass': lazy(() => import('../subjects/06-weight-gain/c1-weight-gain-principles/s1-caloric-surplus-lean-mass.jsx')),
  '06-weight-gain/c1-weight-gain-principles/s2-protein-muscle-synthesis': lazy(() => import('../subjects/06-weight-gain/c1-weight-gain-principles/s2-protein-muscle-synthesis.jsx')),
  '06-weight-gain/c1-weight-gain-principles/s3-progressive-overload-nutrition': lazy(() => import('../subjects/06-weight-gain/c1-weight-gain-principles/s3-progressive-overload-nutrition.jsx')),
  '06-weight-gain/c2-indian-diet-weight-gain/s1-high-calorie-indian-foods': lazy(() => import('../subjects/06-weight-gain/c2-indian-diet-weight-gain/s1-high-calorie-indian-foods.jsx')),
  '06-weight-gain/c2-indian-diet-weight-gain/s2-south-indian-bulking': lazy(() => import('../subjects/06-weight-gain/c2-indian-diet-weight-gain/s2-south-indian-bulking.jsx')),
  '06-weight-gain/c2-indian-diet-weight-gain/s3-supplementation-evidence': lazy(() => import('../subjects/06-weight-gain/c2-indian-diet-weight-gain/s3-supplementation-evidence.jsx')),

  // ── Subject 07: Pot Belly ──────────────────────────────────────────────
  '07-pot-belly/c1-visceral-fat/s1-visceral-vs-subcutaneous': lazy(() => import('../subjects/07-pot-belly/c1-visceral-fat/s1-visceral-vs-subcutaneous.jsx')),
  '07-pot-belly/c1-visceral-fat/s2-abdominal-fat-causes': lazy(() => import('../subjects/07-pot-belly/c1-visceral-fat/s2-abdominal-fat-causes.jsx')),
  '07-pot-belly/c1-visceral-fat/s3-health-risks': lazy(() => import('../subjects/07-pot-belly/c1-visceral-fat/s3-health-risks.jsx')),
  '07-pot-belly/c2-dietary-strategies/s1-foods-reduce-visceral-fat': lazy(() => import('../subjects/07-pot-belly/c2-dietary-strategies/s1-foods-reduce-visceral-fat.jsx')),
  '07-pot-belly/c2-dietary-strategies/s2-indian-diet-belly-fat': lazy(() => import('../subjects/07-pot-belly/c2-dietary-strategies/s2-indian-diet-belly-fat.jsx')),
  '07-pot-belly/c2-dietary-strategies/s3-anti-inflammatory-diet': lazy(() => import('../subjects/07-pot-belly/c2-dietary-strategies/s3-anti-inflammatory-diet.jsx')),
  '07-pot-belly/c3-lifestyle-factors/s1-sleep-stress-connection': lazy(() => import('../subjects/07-pot-belly/c3-lifestyle-factors/s1-sleep-stress-connection.jsx')),
  '07-pot-belly/c3-lifestyle-factors/s2-alcohol-visceral-fat': lazy(() => import('../subjects/07-pot-belly/c3-lifestyle-factors/s2-alcohol-visceral-fat.jsx')),
  '07-pot-belly/c3-lifestyle-factors/s3-long-term-maintenance': lazy(() => import('../subjects/07-pot-belly/c3-lifestyle-factors/s3-long-term-maintenance.jsx')),

  // ── Subject 08: Gut Health ─────────────────────────────────────────────
  '08-gut-health/c1-microbiome/s1-gut-bacteria-weight': lazy(() => import('../subjects/08-gut-health/c1-microbiome/s1-gut-bacteria-weight.jsx')),
  '08-gut-health/c1-microbiome/s2-prebiotics-probiotics-indian': lazy(() => import('../subjects/08-gut-health/c1-microbiome/s2-prebiotics-probiotics-indian.jsx')),
  '08-gut-health/c1-microbiome/s3-gut-brain-axis': lazy(() => import('../subjects/08-gut-health/c1-microbiome/s3-gut-brain-axis.jsx')),
};

// ---------------------------------------------------------------------------
// Loading Spinner
// ---------------------------------------------------------------------------
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-10 w-10 border-2 border-emerald-500 border-t-transparent" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Coming Soon Placeholder
// ---------------------------------------------------------------------------
function ComingSoonPlaceholder({ section, chapter, subject }) {
  const tags = ['Research', 'Evidence', 'Indian Diet', 'Interactive Tools'];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-900/30 border border-emerald-800/50 mb-4">
          <span className="text-3xl">🌿</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          We&apos;re preparing evidence-based content with Indian dietary focus
          for this section. Check back soon for interactive lessons and
          practical meal plans.
        </p>
      </div>

      <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-3">
          {section?.title || 'This section'} will include:
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-emerald-900/20 text-emerald-400 text-sm rounded-full border border-emerald-800/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          to={`/subject/${subject?.id}/${chapter?.id}`}
          className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
        >
          &larr; Back to chapter
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Prerequisite Banner
// ---------------------------------------------------------------------------
function PrerequisiteBanner({ prerequisites, subjectId }) {
  if (!prerequisites || prerequisites.length === 0) return null;

  return (
    <div className="mb-6 p-4 bg-amber-900/20 border border-amber-800/40 rounded-lg">
      <div className="flex items-start gap-3">
        <ClockIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-amber-400 font-semibold text-sm mb-1">
            Prerequisites
          </h4>
          <ul className="text-gray-300 text-sm space-y-1">
            {prerequisites.map((prereq, i) => (
              <li key={i} className="flex items-center gap-2">
                <BookIcon className="w-3.5 h-3.5 text-gray-500" />
                <span>{prereq}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section Content Wrapper
// ---------------------------------------------------------------------------
function SectionContent({ contentKey, section, chapter, subject }) {
  const ContentComponent = CONTENT_REGISTRY[contentKey];

  if (!ContentComponent) {
    return (
      <ComingSoonPlaceholder
        section={section}
        chapter={chapter}
        subject={subject}
      />
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ContentComponent />
    </Suspense>
  );
}

// ---------------------------------------------------------------------------
// Section Page
// ---------------------------------------------------------------------------
export default function SectionPage() {
  const { subjectId, chapterId, sectionId } = useParams();
  const subject = getCurriculumById(subjectId);
  const chapter = getChapterById(subjectId, chapterId);
  const section = chapter?.sections?.find((s) => s.id === sectionId);
  const { markComplete, isComplete } = useProgress();

  const contentKey = `${subjectId}/${chapterId}/${sectionId}`;
  const done = isComplete(subjectId, chapterId, sectionId);

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subjectId, chapterId, sectionId]);

  // ── Not Found ──────────────────────────────────────────────────────────
  if (!subject || !chapter || !section) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Section Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The section you&apos;re looking for doesn&apos;t exist.
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

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: subject.title, href: `/subjects/${subjectId}` },
    { label: chapter.title, href: `/subjects/${subjectId}/${chapterId}` },
    { label: section.title },
  ];

  const { prev, next } = getAdjacentSections(subjectId, chapterId, sectionId);

  function handleMarkComplete() {
    if (!done) {
      markComplete(subjectId, chapterId, sectionId);
    }
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Section Header ────────────────────────────────────────── */}
        <motion.div
          className="mt-6 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {section.title}
          </h1>
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            {section.difficulty && (
              <DifficultyBadge level={section.difficulty} />
            )}
            {section.readingMinutes && (
              <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm">
                <ClockIcon className="w-4 h-4" />
                {section.readingMinutes} min
              </span>
            )}
            {(done || done) && (
              <span className="inline-flex items-center gap-1 text-emerald-400 text-sm font-medium">
                <CheckIcon className="w-4 h-4" />
                Completed
              </span>
            )}
          </div>
        </motion.div>

        {/* ── Prerequisites ─────────────────────────────────────────── */}
        <PrerequisiteBanner
          prerequisites={section.prerequisites}
          subjectId={subjectId}
        />

        {/* ── Content Area ──────────────────────────────────────────── */}
        <div className="prose prose-invert max-w-none">
          <SectionContent
            contentKey={contentKey}
            section={section}
            chapter={chapter}
            subject={subject}
          />
        </div>

        {/* ── Mark Complete Button ───────────────────────────────────── */}
        {!done && !done && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={handleMarkComplete}
              className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <CheckIcon className="w-5 h-5" />
              Mark as Complete
            </button>
          </motion.div>
        )}

        {done && !done && (
          <div className="mt-12 text-center">
            <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold">
              <CheckIcon className="w-5 h-5" />
              Marked Complete
            </span>
          </div>
        )}

        {/* ── Prev / Next Navigation ────────────────────────────────── */}
        <PrevNextNav prev={prev} next={next} />
      </div>
    </div>
  );
}
