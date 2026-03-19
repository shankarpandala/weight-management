import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAppStore from '../../store/appStore.js'
import { CURRICULUM } from '../../subjects/index.js'

const FIRST_SIX = CURRICULUM.slice(0, 6)

/* ------------------------------------------------------------------ */
/*  SVG Icon Components                                               */
/* ------------------------------------------------------------------ */

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                            */
/* ------------------------------------------------------------------ */

export default function Navbar({ onToggleSidebar, sidebarOpen }) {
  const theme = useAppStore((s) => s.theme)
  const toggleTheme = useAppStore((s) => s.toggleTheme)
  const navigate = useNavigate()

  return (
    <header
      className="sticky top-0 z-50 h-14 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80"
      role="banner"
    >
      <div className="flex h-full items-center justify-between px-4 gap-3">
        {/* Left: hamburger + logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden rounded-md p-1.5 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            aria-expanded={sidebarOpen}
          >
            <HamburgerIcon />
          </button>

          <a
            href="https://www.pandala.in"
            className="flex items-center font-mono text-sm text-gray-500 dark:text-gray-500 hover:opacity-80 transition-opacity select-none"
          >
            ~/<span className="text-[#5ce0d8]">pandala.in</span>
          </a>

          <span className="text-gray-300 dark:text-[#2d3a4d] select-none" aria-hidden="true">|</span>

          <Link
            to="/"
            className="flex items-center gap-1.5 font-bold text-lg tracking-tight select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent" aria-hidden="true">
              &#x1F33F;
            </span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              WeightWise
            </span>
          </Link>
        </div>

        {/* Center: subject quick-nav (desktop only) */}
        <nav
          className="hidden lg:flex items-center gap-1 flex-1 justify-center"
          aria-label="Subject quick navigation"
        >
          {FIRST_SIX.map((subject) => (
            <Link
              key={subject.id}
              to={`/subjects/${subject.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-transparent px-3 py-1 text-xs font-medium text-gray-600 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-800/60 dark:hover:text-gray-100"
            >
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: subject.colorHex }}
                aria-hidden="true"
              />
              <span className="truncate max-w-[100px]">
                {subject.title.split(' ')[0]}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right: search, theme, social */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => navigate('/search')}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Open search"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="https://shankarpandala.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            aria-label="Shankar Pandala's portfolio"
          >
            <UserIcon />
            <span>Shankar Pandala</span>
          </a>

          <a
            href="https://shankarpandala.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Shankar Pandala's portfolio"
          >
            <UserIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/shankarpandala/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://github.com/shankarpandala/weight-management"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="View on GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  )
}
