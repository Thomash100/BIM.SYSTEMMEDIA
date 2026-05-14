import { domainLinks } from '../data/navigation';
import { useLanguage } from '../utils/language';

const labels = {
  de: ['Portal', 'BIM', 'IFC', 'Automation', 'Projekte'],
  en: ['Portal', 'BIM', 'IFC', 'Automation', 'Projects'],
};

export default function DomainSwitcher() {
  const [language] = useLanguage();

  return (
    <nav className="flex min-w-max items-center gap-1 rounded border border-white/10 bg-white/[0.03] p-1">
      {domainLinks.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          {labels[language][index] ?? link.label}
        </a>
      ))}
    </nav>
  );
}
