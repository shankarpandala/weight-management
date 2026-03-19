import React from 'react';

function MealPlanBlock({ title, meals = [], totalCalories, notes }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-amber-400/50 bg-amber-50/50 shadow-sm dark:border-amber-500/40 dark:bg-amber-950/20">
      <div className="flex items-center gap-3 border-b border-amber-400/30 bg-amber-100/60 px-5 py-3 dark:border-amber-500/30 dark:bg-amber-900/30">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white dark:bg-amber-600">M</div>
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Meal Plan</span>
        {title && (
          <>
            <span className="text-amber-400 dark:text-amber-600">·</span>
            <span className="text-sm font-semibold text-amber-800 dark:text-amber-200">{title}</span>
          </>
        )}
      </div>

      <div className="divide-y divide-amber-400/15 dark:divide-amber-500/15">
        {meals.map((meal, idx) => (
          <div key={idx} className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
            {/* Time */}
            <div className="flex items-center gap-2 sm:w-28 shrink-0">
              {meal.time && (
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full px-2.5 py-0.5">
                  {meal.time}
                </span>
              )}
            </div>

            {/* Meal details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{meal.name}</span>
                {meal.calories != null && (
                  <span className="shrink-0 text-sm font-bold text-amber-700 dark:text-amber-300">{meal.calories} kcal</span>
                )}
              </div>
              {meal.items && meal.items.length > 0 && (
                <ul className="mt-1.5 space-y-0.5">
                  {meal.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 dark:bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      {totalCalories != null && (
        <div className="flex items-center justify-between border-t border-amber-400/30 bg-amber-100/60 px-5 py-3 dark:border-amber-500/30 dark:bg-amber-900/30">
          <span className="text-sm font-semibold text-amber-800 dark:text-amber-200">Daily Total</span>
          <span className="text-lg font-bold text-amber-700 dark:text-amber-300">{totalCalories} kcal</span>
        </div>
      )}

      {/* Notes */}
      {notes && (
        <div className="border-t border-amber-400/20 bg-amber-50/30 px-5 py-3 dark:border-amber-500/20 dark:bg-amber-900/10">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Note:</span>
          <span className="text-sm text-gray-700 dark:text-gray-300">{notes}</span>
        </div>
      )}
    </div>
  );
}

export default MealPlanBlock;
