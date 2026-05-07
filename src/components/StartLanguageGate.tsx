import { lazy, Suspense } from 'react';

const Hero3D = lazy(() => import('./Hero3D'));

type StartLanguageGateProps = {
  onSelect: (language: 'de' | 'en') => void;
};

export default function StartLanguageGate({ onSelect }: StartLanguageGateProps) {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-ink px-4 py-4 text-white sm:px-6 md:py-6">
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,151,205,0.28)_0%,rgba(5,7,13,0.72)_48%,#05070d_100%)]" />
      <section className="relative z-10 grid w-full max-w-5xl place-items-center gap-4 text-center md:gap-6">
        <div className="w-full max-w-[min(94vw,820px)]">
          <Suspense fallback={<div className="h-[min(76vw,560px)] rounded-lg border border-white/10 bg-panel/70" />}>
            <Hero3D compact />
          </Suspense>
        </div>

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan">SYSTEMMEDIA</p>
        </div>

        <div className="grid w-full max-w-md grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onSelect('de')}
            className="min-h-14 rounded border border-cyan/40 bg-cyan px-4 py-4 text-base font-semibold text-ink transition hover:bg-white"
          >
            Deutsch
          </button>
          <button
            type="button"
            onClick={() => onSelect('en')}
            className="min-h-14 rounded border border-white/15 bg-white/[0.06] px-4 py-4 text-base font-semibold text-white transition hover:border-cyan/50 hover:text-cyan"
          >
            English
          </button>
        </div>
      </section>
    </main>
  );
}
