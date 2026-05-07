import { Github } from 'lucide-react';
import DomainSwitcher from './DomainSwitcher';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <a href="https://systemmedia.de" className="flex items-center gap-3" aria-label="SYSTEMMEDIA Startseite">
          <img src="/logo-systemmedia.png" alt="" className="h-11 w-11 rounded-full object-cover" />
          <span className="hidden text-lg font-semibold tracking-[0.2em] text-white sm:block">SYSTEMMEDIA</span>
        </a>
        <div className="hidden items-center gap-4 lg:flex">
          <DomainSwitcher />
          <LanguageSelector />
          <a
            href="https://github.com/Thomash100"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-cyan/30 bg-cyan/10 text-cyan transition hover:bg-cyan/20"
            aria-label="GitHub öffnen"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
