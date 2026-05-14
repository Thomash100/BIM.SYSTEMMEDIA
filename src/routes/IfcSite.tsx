import { ScanSearch } from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../utils/language';

const copy = {
  de: {
    title: 'IFC-Prüfung, Modellanalyse und Bearbeitung.',
    intro:
      'IFC-Dateien werden auf Klassifikation, Property Sets, Geometrien und Auswertbarkeit untersucht, damit Modelle nicht nur sichtbar, sondern technisch nutzbar sind.',
    checks: [
      'Erkennung falsch klassifizierter Bauteile',
      'Analyse von IFC-Klassen, Property Sets und Geometrien',
      'Prüfung von Wänden, Türen, Räumen und TGA-Objekten',
      'Vorbereitung für Windows-Anwendungen auf Basis xBIM / IfcOpenShell',
      'Auswertbare, verwertbare und prüfbare Modelle',
    ],
    sectionEyebrow: 'Modellqualität',
    sectionTitle: 'Von IFC-Rohdaten zu belastbarer Übergabe',
    sectionText:
      'Klassen, Eigenschaften und Geometrien werden so analysiert, dass Fehler sichtbar und Korrekturen nachvollziehbar werden.',
    focusEyebrow: 'Prüfschwerpunkte',
    focusTitle: 'IFC-Modelle technisch lesbar machen',
    focusText:
      'Die Fachseite richtet sich auf Modellqualität, Bauteilklassifikation, Property Sets und verwertbare Übergaben aus.',
    focus: [
      ['Klassifikation', 'Falsch erkannte Wände, Türen, Räume oder TGA-Objekte werden sichtbar gemacht.'],
      ['Property Sets', 'Eigenschaften, Parametergruppen und projektspezifische Daten werden strukturiert geprüft.'],
      ['Geometrie', 'Geometrische Auffälligkeiten, fehlende Körper und prüfbare Modellbereiche werden eingeordnet.'],
      ['Auswertung', 'Bauteile werden für Listen, Filter, Qualitätssicherung und weitere Verarbeitung vorbereitet.'],
    ],
    workflowEyebrow: 'Prüfablauf',
    workflowTitle: 'Vom Import bis zur Modellkorrektur',
    workflowText:
      'Der Ablauf ist auf nachvollziehbare Analyse, reproduzierbare Regeln und spätere Windows-Werkzeuge mit xBIM oder IfcOpenShell vorbereitet.',
    workflow: [
      ['01', 'IFC einlesen', 'Datei, Schema, Projektstruktur, Einheiten und grundlegende Modellbereiche erkennen.'],
      ['02', 'Klassen prüfen', 'IfcWall, IfcDoor, IfcSpace, TGA-Klassen und Ersatzklassifikationen bewerten.'],
      ['03', 'Eigenschaften analysieren', 'Property Sets, Werte, fehlende Angaben und verwendbare Parameter vergleichen.'],
      ['04', 'Ergebnis ableiten', 'Fehlerliste, Korrekturhinweise, Datenexport und Übergabestatus erzeugen.'],
    ],
    toolsEyebrow: 'Tool-Roadmap',
    toolsTitle: 'Vorbereitung eigener IFC-Werkzeuge',
    toolsText:
      'Die Inhalte sind bewusst so formuliert, dass daraus später eine Windows-Anwendung, Prüfroutinen oder Web-Dashboards entstehen können.',
    tools: [
      'xBIM / IfcOpenShell als mögliche Analysebasis',
      'Regelbasierte Prüfung von Klassen und Eigenschaften',
      'Exportierbare Prüfergebnisse für Modellqualität',
      'Optionale Korrektur- und Bearbeitungsfunktionen',
    ],
    ctaTitle: 'IFC-Datei prüfen oder Modellqualität verbessern?',
    ctaText: 'Für die erste Version ist der Kontakt per E-Mail vorbereitet; echte Projektdateien bleiben bewusst extern.',
    ctaMail: 'IFC-Anfrage senden',
  },
  en: {
    title: 'IFC checking, model analysis and editing.',
    intro:
      'IFC files are checked for classification, property sets, geometries and evaluability so models are not only visible, but technically usable.',
    checks: [
      'Detection of incorrectly classified components',
      'Analysis of IFC classes, property sets and geometries',
      'Checking walls, doors, rooms and MEP objects',
      'Preparation for Windows applications based on xBIM / IfcOpenShell',
      'Evaluable, usable and verifiable models',
    ],
    sectionEyebrow: 'Model Quality',
    sectionTitle: 'From raw IFC data to reliable handover',
    sectionText:
      'Classes, properties and geometries are analyzed so errors become visible and corrections remain traceable.',
    focusEyebrow: 'Check Focus',
    focusTitle: 'Make IFC models technically readable',
    focusText:
      'The specialist site focuses on model quality, component classification, property sets and usable handovers.',
    focus: [
      ['Classification', 'Incorrectly detected walls, doors, rooms or MEP objects become visible.'],
      ['Property sets', 'Properties, parameter groups and project-specific data are checked structurally.'],
      ['Geometry', 'Geometric anomalies, missing solids and verifiable model areas are categorized.'],
      ['Evaluation', 'Components are prepared for schedules, filters, quality assurance and further processing.'],
    ],
    workflowEyebrow: 'Check Process',
    workflowTitle: 'From import to model correction',
    workflowText:
      'The workflow is prepared for traceable analysis, reproducible rules and later Windows tools with xBIM or IfcOpenShell.',
    workflow: [
      ['01', 'Read IFC', 'Detect file, schema, project structure, units and basic model areas.'],
      ['02', 'Check classes', 'Evaluate IfcWall, IfcDoor, IfcSpace, MEP classes and fallback classifications.'],
      ['03', 'Analyze properties', 'Compare property sets, values, missing information and usable parameters.'],
      ['04', 'Derive result', 'Create issue list, correction hints, data export and handover status.'],
    ],
    toolsEyebrow: 'Tool Roadmap',
    toolsTitle: 'Preparation for custom IFC tools',
    toolsText:
      'The content is intentionally shaped so it can later become a Windows application, check routines or web dashboards.',
    tools: [
      'xBIM / IfcOpenShell as possible analysis foundation',
      'Rule-based checking of classes and properties',
      'Exportable check results for model quality',
      'Optional correction and editing features',
    ],
    ctaTitle: 'Check an IFC file or improve model quality?',
    ctaText: 'For the first version, contact is prepared by email; real project files intentionally stay external.',
    ctaMail: 'Send IFC request',
  },
};

export default function IfcSite() {
  const [language] = useLanguage();
  const t = copy[language];

  return (
    <Layout>
      <section className="section-shell min-h-screen pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-cyan">IFC.SYSTEMMEDIA.DE</p>
            <h1 className="text-4xl font-semibold text-white md:text-6xl">{t.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{t.intro}</p>
          </div>
          <div className="glass-panel rounded-lg p-8">
            <ScanSearch className="text-cyan" size={42} />
            <h2 className="mt-6 text-2xl font-semibold text-white">{t.sectionTitle}</h2>
            <p className="mt-3 leading-7 text-slate-400">{t.sectionText}</p>
            <div className="mt-8 space-y-4">
              {t.checks.map((item) => (
                <div key={item} className="border-l border-cyan/40 pl-4 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell">
        <SectionTitle
          eyebrow={t.focusEyebrow}
          title={t.focusTitle}
          text={t.focusText}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.focus.map(([title, text]) => (
            <article key={title} className="glass-panel rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle eyebrow={t.workflowEyebrow} title={t.workflowTitle} text={t.workflowText} />
        <div className="grid gap-4 lg:grid-cols-4">
          {t.workflow.map(([step, title, text]) => (
            <article key={step} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <p className="text-sm font-semibold text-cyan">{step}</p>
              <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionTitle eyebrow={t.toolsEyebrow} title={t.toolsTitle} text={t.toolsText} />
        <div className="glass-panel rounded-lg p-7">
          <div className="grid gap-3">
            {t.tools.map((item) => (
              <div key={item} className="rounded border border-white/10 bg-black/20 px-4 py-4 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">IFC.SYSTEMMEDIA.DE</p>
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
