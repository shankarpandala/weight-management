import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = {
  protein: '#3b82f6',
  carbs: '#f59e0b',
  fat: '#f43f5e',
};

const LABELS = {
  protein: 'Protein',
  carbs: 'Carbs',
  fat: 'Fat',
};

const CAL_PER_GRAM = { protein: 4, carbs: 4, fat: 9 };

function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const { name, grams, calories, percent } = payload[0].payload;
  return (
    <div className="rounded-lg bg-gray-900 px-3 py-2 text-sm text-gray-100 shadow-lg">
      <p className="font-semibold">{name}</p>
      <p>{grams}g &middot; {calories} kcal &middot; {percent}%</p>
    </div>
  );
}

export default function MacroChart({ protein = 0, carbs = 0, fat = 0, title }) {
  const data = useMemo(() => {
    const totalCalories =
      protein * CAL_PER_GRAM.protein +
      carbs * CAL_PER_GRAM.carbs +
      fat * CAL_PER_GRAM.fat;

    if (totalCalories === 0) return { items: [], totalCalories: 0 };

    const items = [
      {
        key: 'protein',
        name: LABELS.protein,
        grams: protein,
        calories: protein * CAL_PER_GRAM.protein,
        percent: Math.round((protein * CAL_PER_GRAM.protein / totalCalories) * 100),
        color: COLORS.protein,
      },
      {
        key: 'carbs',
        name: LABELS.carbs,
        grams: carbs,
        calories: carbs * CAL_PER_GRAM.carbs,
        percent: Math.round((carbs * CAL_PER_GRAM.carbs / totalCalories) * 100),
        color: COLORS.carbs,
      },
      {
        key: 'fat',
        name: LABELS.fat,
        grams: fat,
        calories: fat * CAL_PER_GRAM.fat,
        percent: Math.round((fat * CAL_PER_GRAM.fat / totalCalories) * 100),
        color: COLORS.fat,
      },
    ];

    return { items, totalCalories };
  }, [protein, carbs, fat]);

  const { items, totalCalories } = data;

  if (totalCalories === 0) {
    return (
      <div className="viz-panel rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        {title && (
          <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        )}
        <p className="text-center text-sm text-gray-400 dark:text-gray-500">
          No macro data to display.
        </p>
      </div>
    );
  }

  return (
    <div className="viz-panel rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      {title && (
        <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      )}

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        {/* Donut chart */}
        <div className="h-52 w-52 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={items}
                dataKey="calories"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                strokeWidth={0}
              >
                {items.map((entry) => (
                  <Cell key={entry.key} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend and totals */}
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.key} className="flex items-center gap-3">
              <span
                className="inline-block h-3.5 w-3.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.grams}g &middot; {item.calories} kcal &middot; {item.percent}%
                </p>
              </div>
            </div>
          ))}

          <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-600">
            <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
              Total: {totalCalories} kcal
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {protein + carbs + fat}g total macros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
