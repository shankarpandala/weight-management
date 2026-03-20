import useAppStore from '../store/appStore.js';
import translations from './translations.js';

/**
 * Hook to access the current language and translation strings.
 * Returns { lang, t, setLanguage, toggleLanguage }
 */
export default function useLanguage() {
  const lang = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);

  const t = translations[lang] || translations.en;

  const toggleLanguage = () => {
    setLanguage(lang === 'en' ? 'te' : 'en');
  };

  return { lang, t, setLanguage, toggleLanguage };
}
