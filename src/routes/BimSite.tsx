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
    deliverablesEyebrow: 'Ergebnisse',
    deliverablesTitle: 'Konkrete BIM-Leistungen für Planung und Übergabe',
    deliverablesText:
      'Die BIM-Seite ist auf TGA-nahe Modellarbeit, Revit-Struktur und verwertbare Bauteildaten ausgelegt.',
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
    deliverables: [
      ['Revit-Modellaufbau', 'Projektvorlagen, Ebenen, Ansichten, Kategorien und Bauteillogik für technische Planung.'],
      ['TGA-orientierte Koordination', 'Gewerke, Systeme, Durchbrüche, Trassen und technische Räume werden nachvollziehbar strukturiert.'],
      ['Auswertungen', 'Listen, Parameter, Mengen, Plausibilitätsprüfungen und technische Datenausgaben.'],
      ['Automatisierungsvorbereitung', 'Wiederkehrende Modell- und Parameteraufgaben werden für Add-ins oder Skripte vorbereitet.'],
    ],
    workflowEyebrow: 'Workflow',
    workflowTitle: 'Vom Revit-Modell zur prüfbaren Datenbasis',
    workflowText:
      'Der Ablauf trennt Modellstruktur, Koordination, Parameterlogik und Übergabe bewusst, damit spätere Prüfungen sauber greifen.',
    workflow: [
      ['01', 'Modellrahmen', 'Geschosse, Raster, Fachmodelle, Koordinaten und Modellgrenzen festlegen.'],
      ['02', 'Bauteildaten', 'Parameter, Benennungen, Systemzugehörigkeiten und Auswertungen sauber definieren.'],
      ['03', 'Koordination', 'TGA, Architektur, Tragwerk und relevante Kollisionen fachlich zusammenführen.'],
      ['04', 'Übergabe', 'IFC-Export, Modellprüfung, Dokumentation und nächste Automatisierungsschritte vorbereiten.'],
    ],
    ctaTitle: 'BIM-Modell, Revit-Workflow oder TGA-Koordination planen?',
    ctaText:
      'SYSTEMMEDIA kann als digitale Fachseite, Projektbasis oder technischer Einstieg für BIM-Workflows dienen.',
    ctaMail: 'BIM-Anfrage senden',
  },
  en: {
    title: '3D Revit planning and BIM-oriented model structure.',
    intro:
      'MEP model coordination, Revit workflows, parameter-based evaluation, clash and quality checks, plus preparation for automation and add-ins.',
    sectionTitle: 'Building models as technical data systems',
    sectionText: 'Architecture, HVAC, electrical and structural disciplines are handled as layers, not isolated drawings.',
    deliverablesEyebrow: 'Deliverables',
    deliverablesTitle: 'Concrete BIM services for planning and handover',
    deliverablesText:
      'The BIM site is shaped around MEP-related model work, Revit structure and usable component data.',
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
    deliverables: [
      ['Revit model setup', 'Project templates, levels, views, categories and component logic for technical planning.'],
      ['MEP-oriented coordination', 'Disciplines, systems, openings, routes and technical rooms are structured traceably.'],
      ['Evaluations', 'Schedules, parameters, quantities, plausibility checks and technical data outputs.'],
      ['Automation preparation', 'Recurring model and parameter tasks are prepared for add-ins or scripts.'],
    ],
    workflowEyebrow: 'Workflow',
    workflowTitle: 'From Revit model to verifiable data basis',
    workflowText:
      'The process separates model structure, coordination, parameter logic and handover so later checks can work cleanly.',
    workflow: [
      ['01', 'Model frame', 'Define levels, grids, discipline models, coordinates and model boundaries.'],
      ['02', 'Component data', 'Define parameters, naming, system assignments and evaluations cleanly.'],
      ['03', 'Coordination', 'Bring MEP, architecture, structure and relevant clashes together technically.'],
      ['04', 'Handover', 'Prepare IFC export, model checking, documentation and next automation steps.'],
    ],
    ctaTitle: 'Planning a BIM model, Revit workflow or MEP coordination?',
    ctaText:
      'SYSTEMMEDIA can serve as a specialist digital site, project base or technical entry point for BIM workflows.',
    ctaMail: 'Send BIM request',
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

      <section className="section-shell">
        <SectionTitle eyebrow={t.deliverablesEyebrow} title={t.deliverablesTitle} text={t.deliverablesText} />
        <div className="grid gap-4 md:grid-cols-2">
          {t.deliverables.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle eyebrow={t.workflowEyebrow} title={t.workflowTitle} text={t.workflowText} />
        <div className="grid gap-4 lg:grid-cols-4">
          {t.workflow.map(([step, title, text]) => (
            <article key={step} className="glass-panel rounded-lg p-6">
              <p className="text-sm font-semibold text-cyan">{step}</p>
              <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">BIM.SYSTEMMEDIA.DE</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">{t.ctaTitle}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">{t.ctaText}</p>
            </div>
            <a className="rounded bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-cyan" href="mailto:info@systemmedia.de">
              {t.ctaMail}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
