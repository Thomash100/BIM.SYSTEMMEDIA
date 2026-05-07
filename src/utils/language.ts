import { useEffect, useState } from 'react';

export type Language = 'de' | 'en';

const STORAGE_KEY = 'systemmedia-language';
export const LANGUAGE_EVENT = 'systemmedia-language-change';

function normalizeLanguage(value: string | null | undefined): Language {
  return value?.toLowerCase().startsWith('en') ? 'en' : 'de';
}

function readCookieLanguage(): Language | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${STORAGE_KEY}=`))
    ?.split('=')[1];

  return match ? normalizeLanguage(decodeURIComponent(match)) : null;
}

export function getLanguagePreference(): Language {
  if (typeof window === 'undefined') return 'de';

  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  if (queryLanguage) return normalizeLanguage(queryLanguage);

  const cookieLanguage = readCookieLanguage();
  if (cookieLanguage) return cookieLanguage;

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (storedLanguage) return normalizeLanguage(storedLanguage);

  return 'de';
}

export function setLanguagePreference(language: Language) {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(STORAGE_KEY, language);
  document.documentElement.lang = language;

  const host = window.location.hostname;
  const domain = host === 'systemmedia.de' || host.endsWith('.systemmedia.de') ? '; domain=.systemmedia.de' : '';
  document.cookie = `${STORAGE_KEY}=${language}; path=/; max-age=31536000; SameSite=Lax${domain}`;

  window.dispatchEvent(new CustomEvent<Language>(LANGUAGE_EVENT, { detail: language }));
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => getLanguagePreference());

  useEffect(() => {
    document.documentElement.lang = language;

    const onLanguageChange = (event: Event) => {
      const nextLanguage = (event as CustomEvent<Language>).detail;
      if (nextLanguage === 'de' || nextLanguage === 'en') setLanguage(nextLanguage);
    };

    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) setLanguage(normalizeLanguage(event.newValue));
    };

    window.addEventListener(LANGUAGE_EVENT, onLanguageChange);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(LANGUAGE_EVENT, onLanguageChange);
      window.removeEventListener('storage', onStorage);
    };
  }, [language]);

  return [language, setLanguagePreference] as const;
}
