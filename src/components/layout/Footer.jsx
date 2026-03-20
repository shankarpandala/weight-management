import { Link } from 'react-router-dom'
import useLanguage from '../../i18n/useLanguage.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer
      className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-bold text-lg tracking-tight select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              <span
                className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
                aria-hidden="true"
              >
                &#x1F33F;
              </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                WeightWise
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
              {t.footerDesc}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              {t.resources}
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://github.com/shankarpandala/weight-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  {t.githubRepo}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shankarpandala/weight-management/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  {t.mitLicense}
                </a>
              </li>
              <li>
                <Link
                  to="/progress"
                  className="text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  {t.myProgress}
                </Link>
              </li>
            </ul>
          </div>

          {/* Author */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              {t.author}
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://www.pandala.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  pandala.in
                </a>
              </li>
              <li>
                <a
                  href="https://shankarpandala.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  {t.portfolio}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shankarpandala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Built With */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              {t.builtWith}
            </h3>
            <ul className="mt-3 space-y-2">
              <li className="text-sm text-gray-500 dark:text-gray-400">React 19</li>
              <li className="text-sm text-gray-500 dark:text-gray-400">Recharts</li>
              <li className="text-sm text-gray-500 dark:text-gray-400">Tailwind CSS</li>
              <li className="text-sm text-gray-500 dark:text-gray-400">Framer Motion</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="text-center text-xs text-gray-400 dark:text-gray-500">
            &copy; {year} Shankar Pandala. {t.openSource}{' '}
            <a
              href="https://github.com/shankarpandala/weight-management/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {t.mitLicense}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
