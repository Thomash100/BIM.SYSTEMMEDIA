import { Github } from 'lucide-react';
import { useLanguage } from '../utils/language';

const footerCopy = {
  de: {
    claim: 'Digitale Werkzeuge für Planung, BIM, IFC, Automatisierung und technische Gebäudedaten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    copyright: 'Alle Rechte vorbehalten.',
  },
  en: {
    claim: 'Digital tools for planning, BIM, IFC, automation and technical building data.',
    imprint: 'Legal Notice',
    privacy: 'Privacy',
    terms: 'Terms',
    copyright: 'All rights reserved.',
  },
};

export default function Footer() {
  const [language] = useLanguage();
  const t = footerCopy[language];

  return (
    <footer className="relative border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo-systemmedia.png" alt="" className="h-11 w-11 rounded-full object-cover" />
            <span className="text-lg font-semibold tracking-[0.2em] text-white">SYSTEMMEDIA</span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">{t.claim}</p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a href="/impressum" className="hover:text-cyan">
            {t.imprint}
          </a>
          <a href="/datenschutz" className="hover:text-cyan">
            {t.privacy}
          </a>
          <a href="/nutzungsbedingungen" className="hover:text-cyan">
            {t.terms}
          </a>
          <a href="https://github.com/Thomash100" className="inline-flex items-center gap-2 hover:text-cyan">
            <Github size={16} /> GitHub
          </a>
        </nav>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} SYSTEMMEDIA. {t.copyright}
      </div>
    </footer>
  );
}
