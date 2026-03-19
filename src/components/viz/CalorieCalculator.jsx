import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ACTIVITY_LEVELS = [
  { label: 'Sedentary (little or no exercise)', value: 1.2 },
  { label: 'Lightly active (1-3 days/week)', value: 1.375 },
  { label: 'Moderately active (3-5 days/week)', value: 1.55 },
  { label: 'Very active (6-7 days/week)', value: 1.725 },
  { label: 'Extra active (very hard exercise)', value: 1.9 },
];

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 ' +
  'focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 ' +
  'dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-400';

const labelClass = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1';

export default function CalorieCalculator() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState(1.55);

  const { bmr, tdee, lossTarget, gainTarget } = useMemo(() => {
    const bmr =
      gender === 'male'
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = Math.round(bmr * activity);
    return {
      bmr: Math.round(bmr),
      tdee,
      lossTarget: Math.max(1200, tdee - 500),
      gainTarget: tdee + 500,
    };
  }, [age, gender, height, weight, activity]);

  const chartData = [
    { name: 'Weight Loss', calories: lossTarget, fill: '#06b6d4' },
    { name: 'Maintenance', calories: tdee, fill: '#22c55e' },
    { name: 'Weight Gain', calories: gainTarget, fill: '#8b5cf6' },
  ];

  return (
    <div className="viz-panel rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">
        BMR &amp; TDEE Calculator
      </h2>

      {/* Input form */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Age */}
        <div>
          <label htmlFor="calc-age" className={labelClass}>
            Age (years)
          </label>
          <input
            id="calc-age"
            type="number"
            min={1}
            max={120}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="calc-gender" className={labelClass}>
            Gender
          </label>
          <select
            id="calc-gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={inputClass}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Height */}
        <div>
          <label htmlFor="calc-height" className={labelClass}>
            Height (cm)
          </label>
          <input
            id="calc-height"
            type="number"
            min={50}
            max={300}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* Weight */}
        <div>
          <label htmlFor="calc-weight" className={labelClass}>
            Weight (kg)
          </label>
          <input
            id="calc-weight"
            type="number"
            min={10}
            max={500}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* Activity Level */}
        <div className="sm:col-span-2 lg:col-span-2">
          <label htmlFor="calc-activity" className={labelClass}>
            Activity Level
          </label>
          <select
            id="calc-activity"
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
            className={inputClass}
          >
            {ACTIVITY_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results summary */}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            BMR
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {bmr}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">kcal/day</p>
        </div>

        <div className="rounded-xl bg-green-50 p-4 text-center dark:bg-green-900/30">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600 dark:text-green-400">
            TDEE
          </p>
          <p className="mt-1 text-2xl font-bold text-green-700 dark:text-green-300">
            {tdee}
          </p>
          <p className="text-xs text-green-600 dark:text-green-400">kcal/day</p>
        </div>

        <div className="rounded-xl bg-cyan-50 p-4 text-center dark:bg-cyan-900/30">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
            Weight Loss
          </p>
          <p className="mt-1 text-2xl font-bold text-cyan-700 dark:text-cyan-300">
            {lossTarget}
          </p>
          <p className="text-xs text-cyan-600 dark:text-cyan-400">kcal/day</p>
        </div>

        <div className="rounded-xl bg-violet-50 p-4 text-center dark:bg-violet-900/30">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">
            Weight Gain
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-700 dark:text-violet-300">
            {gainTarget}
          </p>
          <p className="text-xs text-violet-600 dark:text-violet-400">kcal/day</p>
        </div>
      </div>

      {/* Bar chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-600" />
            <XAxis
              dataKey="name"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
              label={{
                value: 'kcal/day',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#9ca3af', fontSize: 12 },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#f3f4f6',
              }}
              formatter={(value) => [`${value} kcal`, 'Calories']}
            />
            <Bar dataKey="calories" radius={[6, 6, 0, 0]} barSize={60}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
        Based on the Mifflin-St Jeor equation. Weight loss target has a 1200 kcal minimum floor.
      </p>
    </div>
  );
}
