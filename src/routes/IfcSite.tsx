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
          eyebrow={t.sectionEyebrow}
          title={t.sectionTitle}
          text={t.sectionText}
        />
      </section>
    </Layout>
  );
}
