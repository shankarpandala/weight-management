import React from 'react';

function ComparisonTable({ title, headers = [], rows = [], highlightColumn }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-gray-300/50 bg-gray-50/50 shadow-sm dark:border-gray-600/40 dark:bg-gray-900/20">
      {title && (
        <div className="flex items-center gap-3 border-b border-gray-300/30 bg-gray-100/60 px-5 py-3 dark:border-gray-600/30 dark:bg-gray-800/30">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white dark:bg-gray-600">C</div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Comparison</span>
          <span className="text-gray-400 dark:text-gray-600">·</span>
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{title}</span>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {headers.length > 0 && (
            <thead>
              <tr className="border-b border-gray-300/30 bg-gray-100/40 dark:border-gray-600/30 dark:bg-gray-800/20">
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 ${
                      highlightColumn === idx
                        ? 'bg-blue-50/60 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                        : ''
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={rowIdx % 2 === 1 ? 'bg-gray-50/40 dark:bg-gray-800/10' : ''}
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`px-5 py-3 text-gray-700 dark:text-gray-300 ${
                      cellIdx === 0
                        ? 'font-medium text-gray-800 dark:text-gray-200'
                        : ''
                    } ${
                      highlightColumn === cellIdx
                        ? 'bg-blue-50/40 font-medium text-blue-800 dark:bg-blue-900/10 dark:text-blue-300'
                        : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;
