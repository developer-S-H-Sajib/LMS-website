'use client';
import { useEffect, useState } from 'react';
import { Lang } from '@/lib/i18n';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('en');
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved) setLang(saved);
    else {
      const browserLang = navigator.language.startsWith('bn') ? 'bn' : 'en';
      setLang(browserLang);
    }
  }, []);
  const switchLang = (next: Lang) => {
    setLang(next);
    localStorage.setItem('lang', next);
  };
  return { lang, switchLang };
}
