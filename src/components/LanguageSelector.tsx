import { Languages } from 'lucide-react';
import { useLanguage, type Language } from '../utils/language';

const languages = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
] satisfies { code: Language; label: string }[];

const labels = {
  de: 'Sprache auswählen',
  en: 'Choose language',
};

export default function LanguageSelector() {
  const [language, setLanguage] = useLanguage();
  const label = labels[language];

  return (
    <label className="inline-flex h-10 items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-3 text-sm text-slate-300">
      <Languages size={16} className="text-cyan" />
      <span className="sr-only">{label}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value === 'en' ? 'en' : 'de')}
        className="bg-transparent text-sm font-semibold text-white outline-none"
        aria-label={label}
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code} className="bg-ink text-white">
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
