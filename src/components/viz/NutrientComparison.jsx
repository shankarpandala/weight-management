import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const METRICS = [
  { key: 'calories', label: 'Calories', unit: 'kcal', color: '#22c55e' },
  { key: 'protein', label: 'Protein', unit: 'g', color: '#3b82f6' },
  { key: 'carbs', label: 'Carbs', unit: 'g', color: '#f59e0b' },
  { key: 'fat', label: 'Fat', unit: 'g', color: '#f43f5e' },
  { key: 'fiber', label: 'Fiber', unit: 'g', color: '#8b5cf6' },
];

const tabBase =
  'rounded-lg px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none';
const tabActive =
  'bg-gray-900 text-white shadow dark:bg-gray-100 dark:text-gray-900';
const tabInactive =
  'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200';

export default function NutrientComparison({
  title = 'Nutrient Comparison',
  foods = [],
  metric: defaultMetric = 'calories',
}) {
  const [metric, setMetric] = useState(defaultMetric);

  const activeMetric = useMemo(
    () => METRICS.find((m) => m.key === metric) || METRICS[0],
    [metric],
  );

  const chartData = useMemo(
    () =>
      foods.map((food) => ({
        name: food.name,
        value: food[metric] ?? 0,
      })),
    [foods, metric],
  );

  const maxValue = useMemo(
    () => Math.max(0, ...chartData.map((d) => d.value)),
    [chartData],
  );

  if (!foods.length) {
    return (
      <div className="viz-panel rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-center text-sm text-gray-400 dark:text-gray-500">
          No food data to display.
        </p>
      </div>
    );
  }

  return (
    <div className="viz-panel rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>

      {/* Metric selector tabs */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {METRICS.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setMetric(m.key)}
            className={`${tabBase} ${metric === m.key ? tabActive : tabInactive}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Horizontal bar chart */}
      <div style={{ height: Math.max(200, foods.length * 50 + 40) }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="#e5e7eb"
              className="dark:stroke-gray-600"
            />
            <XAxis
              type="number"
              domain={[0, Math.ceil(maxValue * 1.15) || 10]}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
              label={{
                value: activeMetric.unit,
                position: 'insideBottomRight',
                offset: -5,
                style: { fill: '#9ca3af', fontSize: 11 },
              }}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={100}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#f3f4f6',
              }}
              formatter={(value) => [
                `${value} ${activeMetric.unit}`,
                activeMetric.label,
              ]}
            />
            <Bar
              dataKey="value"
              fill={activeMetric.color}
              radius={[0, 6, 6, 0]}
              barSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-center text-xs text-gray-400 dark:text-gray-500">
        Comparing {activeMetric.label.toLowerCase()} ({activeMetric.unit}) across{' '}
        {foods.length} food{foods.length !== 1 ? 's' : ''}
      </p>
    </div>
  );
}
