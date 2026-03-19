import React from 'react';

function NutritionFactBlock({ food, serving, calories, protein, carbs, fat, fiber, highlights }) {
  const totalMacroGrams = (protein || 0) + (carbs || 0) + (fat || 0);
  const proteinPct = totalMacroGrams > 0 ? ((protein || 0) / totalMacroGrams) * 100 : 0;
  const carbsPct = totalMacroGrams > 0 ? ((carbs || 0) / totalMacroGrams) * 100 : 0;
  const fatPct = totalMacroGrams > 0 ? ((fat || 0) / totalMacroGrams) * 100 : 0;

  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-emerald-400/50 bg-emerald-50/50 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-950/20">
      <div className="flex items-center gap-3 border-b border-emerald-400/30 bg-emerald-100/60 px-5 py-3 dark:border-emerald-500/30 dark:bg-emerald-900/30">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white dark:bg-emerald-600">N</div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Nutrition Facts</span>
        <span className="text-emerald-400 dark:text-emerald-600">·</span>
        <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">{food}</span>
      </div>

      <div className="px-5 py-4">
        {/* Serving and Calories */}
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-xs text-gray-500 dark:text-gray-400">Serving: <span className="font-medium text-gray-700 dark:text-gray-300">{serving}</span></span>
          <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{calories} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">kcal</span></span>
        </div>

        {/* Macro bar */}
        <div className="mb-3 h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 flex">
          {proteinPct > 0 && (
            <div
              className="h-full bg-blue-500 dark:bg-blue-400 transition-all"
              style={{ width: `${proteinPct}%` }}
              title={`Protein ${proteinPct.toFixed(0)}%`}
            />
          )}
          {carbsPct > 0 && (
            <div
              className="h-full bg-amber-500 dark:bg-amber-400 transition-all"
              style={{ width: `${carbsPct}%` }}
              title={`Carbs ${carbsPct.toFixed(0)}%`}
            />
          )}
          {fatPct > 0 && (
            <div
              className="h-full bg-rose-500 dark:bg-rose-400 transition-all"
              style={{ width: `${fatPct}%` }}
              title={`Fat ${fatPct.toFixed(0)}%`}
            />
          )}
        </div>

        {/* Macro numbers */}
        <div className="grid grid-cols-3 gap-4 text-center mb-2">
          <div>
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Protein</span>
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{protein}g</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500 dark:bg-amber-400" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Carbs</span>
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{carbs}g</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500 dark:bg-rose-400" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Fat</span>
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{fat}g</span>
          </div>
        </div>

        {/* Fiber */}
        {fiber != null && (
          <div className="mt-3 flex items-center justify-between border-t border-emerald-400/20 pt-3 dark:border-emerald-500/20">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Fiber</span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{fiber}g</span>
          </div>
        )}
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="border-t border-emerald-400/20 bg-emerald-100/30 px-5 py-3 dark:border-emerald-500/20 dark:bg-emerald-900/15">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Highlights:</span>
          <ul className="mt-1.5 space-y-1">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NutritionFactBlock;
