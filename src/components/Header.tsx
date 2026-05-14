import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import DomainSwitcher from './DomainSwitcher';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../utils/language';

const labels = {
  de: {
    home: 'SYSTEMMEDIA Startseite',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    github: 'GitHub öffnen',
  },
  en: {
    home: 'SYSTEMMEDIA homepage',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    github: 'Open GitHub',
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [language] = useLanguage();
  const t = labels[language];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <a href="https://systemmedia.de" className="flex items-center gap-3" aria-label={t.home}>
          <img src="/logo-systemmedia.png" alt="" className="h-11 w-11 rounded-full object-cover" />
          <span className="hidden text-lg font-semibold tracking-[0.2em] text-white sm:block">SYSTEMMEDIA</span>
        </a>
        <div className="hidden items-center gap-4 lg:flex">
          <DomainSwitcher />
          <LanguageSelector />
          <a
            href="https://github.com/Thomash100"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-cyan/30 bg-cyan/10 text-cyan transition hover:bg-cyan/20"
            aria-label={t.github}
          >
            <Github size={18} />
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/10 bg-white/[0.05] text-white lg:hidden"
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            <div className="overflow-x-auto pb-1">
              <DomainSwitcher />
            </div>
            <div className="flex items-center justify-between gap-3">
              <LanguageSelector />
              <a
                href="https://github.com/Thomash100"
                className="inline-flex h-10 w-10 items-center justify-center rounded border border-cyan/30 bg-cyan/10 text-cyan transition hover:bg-cyan/20"
                aria-label={t.github}
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
