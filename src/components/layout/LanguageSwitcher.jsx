import useLanguage from '../../i18n/useLanguage.js';

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        onClick={() => setLanguage(lang === 'en' ? 'te' : 'en')}
        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
        aria-label={lang === 'en' ? 'Switch to Telugu' : 'Switch to English'}
        title={lang === 'en' ? 'తెలుగులో చదవండి' : 'Read in English'}
      >
        <GlobeIcon />
        <span className="hidden sm:inline text-xs font-semibold">
          {lang === 'en' ? 'తెలుగు' : 'EN'}
        </span>
      </button>
    </div>
  );
}
