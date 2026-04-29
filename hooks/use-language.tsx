'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Lang, translations } from '@/lib/i18n';

type Ctx = { lang: Lang; setLang: (lang: Lang) => void; t: typeof translations.en };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'bn') setLangState(saved);
    else setLangState(navigator.language.toLowerCase().startsWith('bn') ? 'bn' : 'en');
  }, []);
  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem('lang', next);
  };
  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
