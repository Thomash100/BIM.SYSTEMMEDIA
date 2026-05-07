import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../utils/language';

const Hero3D = lazy(() => import('../components/Hero3D'));

const copy = {
  de: {
    title: '3D-Revit-Planung und BIM-orientierte Modellstruktur.',
    intro:
      'TGA-Modellkoordination, Revit-Workflows, parameterbasierte Auswertung, Kollisions- und Qualitätsprüfung sowie Vorbereitung von Automatisierungen und Add-ins.',
    sectionTitle: 'Gebäudemodelle als technisches Datensystem',
    sectionText: 'Architektur, HLS, ELT und Tragwerk werden als Layer gedacht, nicht als isolierte Zeichnung.',
    topics: [
      ['3D-Revit-Planung', 'Präzise 3D-Modelle als Grundlage für Planung, Koordination und technische Auswertung.'],
      ['BIM-Modellstruktur', 'Saubere Ebenen, Bauteillogik, Kategorien und Datenfelder für belastbare Modelle.'],
      ['TGA-Koordination', 'Koordination von HLS, ELT, Architektur und Tragwerk mit klaren Modellgrenzen.'],
      [
        'Parameter, Bauteildaten und Auswertungen',
        'Parameterbasierte Strukturen für Listen, Prüfungen und Projektentscheidungen.',
      ],
      ['Revit-Automatisierung', 'Vorbereitung und Umsetzung wiederkehrender Workflows mit Add-ins und Skripten.'],
      ['Schnittstellen zu IFC', 'Modellübergabe, Klassifikationen und Datenqualität für offene Formate.'],
      ['Beispielhafte Workflows', 'Von Modellachsen über Bauteilparameter bis zur automatisierten Auswertung.'],
    ],
  },
  en: {
    title: '3D Revit planning and BIM-oriented model structure.',
    intro:
      'MEP model coordination, Revit workflows, parameter-based evaluation, clash and quality checks, plus preparation for automation and add-ins.',
    sectionTitle: 'Building models as technical data systems',
    sectionText: 'Architecture, HVAC, electrical and structural disciplines are handled as layers, not isolated drawings.',
    topics: [
      ['3D Revit planning', 'Precise 3D models as the basis for planning, coordination and technical evaluation.'],
      ['BIM model structure', 'Clean levels, component logic, categories and data fields for reliable models.'],
      ['MEP coordination', 'Coordination of HVAC, electrical, architecture and structure with clear model boundaries.'],
      [
        'Parameters, component data and schedules',
        'Parameter-based structures for schedules, checks and project decisions.',
      ],
      ['Revit automation', 'Preparation and implementation of recurring workflows with add-ins and scripts.'],
      ['Interfaces to IFC', 'Model handover, classifications and data quality for open formats.'],
      ['Example workflows', 'From model axes and component parameters to automated evaluation.'],
    ],
  },
};

export default function BimSite() {
  const [language] = useLanguage();
  const t = copy[language];

  return (
    <Layout>
      <section className="section-shell grid min-h-screen items-center gap-12 pt-32 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-cyan">BIM.SYSTEMMEDIA.DE</p>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">{t.title}</h1>
          <p className="mt-7 text-lg leading-8 text-slate-300">{t.intro}</p>
        </div>
        <Suspense fallback={<div className="min-h-[360px] rounded-lg border border-white/10 bg-panel/70" />}>
          <Hero3D />
        </Suspense>
      </section>

      <section className="section-shell">
        <SectionTitle
          eyebrow="BIM Workflows"
          title={t.sectionTitle}
          text={t.sectionText}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {t.topics.map(([title, text], index) => (
            <article key={title} className="glass-panel rounded-lg p-6">
              <p className="text-sm font-semibold text-cyan">0{index + 1}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
