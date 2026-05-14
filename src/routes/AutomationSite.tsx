import { Activity, BatteryCharging, Cpu, Home, RadioTower } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../utils/language';

const copy = {
  de: {
    title: 'Home Assistant, MQTT und Energieautomation.',
    intro:
      'Lokale Datenverarbeitung, Growatt, PV-Optimierung, dynamische Steuerung und Visualisierung über Weboberflächen für technische Systeme.',
    sectionTitle: 'Steuerung dort, wo die Daten entstehen',
    sectionText:
      'MQTT, Home Assistant und lokale Logik machen technische Anlagen nachvollziehbar und reaktionsfähig.',
    architectureEyebrow: 'Architektur',
    architectureTitle: 'Lokale Datenflüsse statt Cloud-Abhängigkeit',
    architectureText:
      'Automation.systemmedia.de bündelt Energie, Messwerte, Geräte, Regeln und Webvisualisierung in einer nachvollziehbaren Struktur.',
    architecture: [
      ['Sensorik', 'Shelly, Wechselrichter, Strompreise, Statuswerte und technische Messpunkte liefern die Datenbasis.'],
      ['MQTT / Broker', 'Messwerte und Schaltzustände werden lokal verteilt und für weitere Systeme verfügbar gemacht.'],
      ['Home Assistant', 'Automationen, HACS-Integrationen, Dashboards und Szenarien laufen auf der lokalen Steuerung.'],
      ['Weboberfläche', 'Betriebszustände, Energieflüsse und Projektmodule werden verständlich visualisiert.'],
    ],
    scenariosEyebrow: 'Anwendungsfälle',
    scenariosTitle: 'Automation für Energie, Geräte und technische Zustände',
    scenariosText:
      'Die Fachseite ist auf reale lokale Steuerungsszenarien ausgelegt, nicht auf abstrakte Smart-Home-Demos.',
    scenarios: [
      ['PV-Eigenverbrauch', 'Growatt-Daten lokal auswerten, Lasten dynamisch verschieben und Eigenverbrauch erhöhen.'],
      ['Strompreislogik', 'Tibber-Preise, Gerätezustände und Komfortgrenzen in robuste Regeln übersetzen.'],
      ['Cockpit-Dashboards', 'Technische Zustände als klare, schnelle Webansichten für Alltag und Wartung darstellen.'],
      ['Automationsmodule', 'Wiederverwendbare Logik für Home Assistant, MQTT und spätere Repository-Bausteine.'],
    ],
    projectEyebrow: 'GitHub-Basis',
    projectTitle: 'Öffentliche Projekte als Bausteine',
    projectText:
      'Growatt_Dat, HA-Aquarium- und ha-kuehlgeraet-cockpit liefern konkrete Startpunkte für weitere Automation.',
    ctaTitle: 'Automation lokal aufbauen oder Energieflüsse sichtbar machen?',
    ctaText: 'SYSTEMMEDIA kann Logik, Visualisierung und Repository-Struktur für lokale Anlagen zusammenführen.',
    ctaMail: 'Automation anfragen',
    services: [
      {
        title: 'Home Assistant',
        text: 'Lokale Automationen, HACS-Integrationen, Dashboards und regelbasierte Steuerung.',
        icon: Home,
      },
      {
        title: 'MQTT',
        text: 'Robuste Datenflüsse zwischen Sensoren, Wechselrichtern, Aktoren und Weboberflächen.',
        icon: RadioTower,
      },
      {
        title: 'PV-Steuerung & Growatt',
        text: 'Eigenverbrauch optimieren, lokale Daten auswerten und dynamische Betriebsstrategien abbilden.',
        icon: BatteryCharging,
      },
      {
        title: 'Lokale Datenverarbeitung',
        text: 'Kein Cloud-Zwang für technische Kernlogik, Messwerte und Steuerentscheidungen.',
        icon: Cpu,
      },
      {
        title: 'Visualisierung',
        text: 'Weboberflächen für Energie, Status, Prognosen und technische Betriebszustände.',
        icon: Activity,
      },
    ],
  },
  en: {
    title: 'Home Assistant, MQTT and energy automation.',
    intro:
      'Local data processing, Growatt, PV optimization, dynamic control and visualization through web interfaces for technical systems.',
    sectionTitle: 'Control where the data is created',
    sectionText: 'MQTT, Home Assistant and local logic make technical systems transparent and responsive.',
    architectureEyebrow: 'Architecture',
    architectureTitle: 'Local data flows instead of cloud dependency',
    architectureText:
      'Automation.systemmedia.de combines energy, measurements, devices, rules and web visualization in a traceable structure.',
    architecture: [
      ['Sensors', 'Shelly, inverters, electricity prices, status values and technical measuring points provide the data basis.'],
      ['MQTT / Broker', 'Measurements and switching states are distributed locally and made available for other systems.'],
      ['Home Assistant', 'Automations, HACS integrations, dashboards and scenarios run on the local controller.'],
      ['Web interface', 'Operating states, energy flows and project modules are visualized clearly.'],
    ],
    scenariosEyebrow: 'Use Cases',
    scenariosTitle: 'Automation for energy, devices and technical states',
    scenariosText:
      'The specialist site is built for real local control scenarios, not abstract smart-home demos.',
    scenarios: [
      ['PV self-consumption', 'Evaluate Growatt data locally, shift loads dynamically and increase self-consumption.'],
      ['Electricity price logic', 'Translate Tibber prices, device states and comfort limits into robust rules.'],
      ['Cockpit dashboards', 'Show technical states as clear, fast web views for daily use and maintenance.'],
      ['Automation modules', 'Reusable logic for Home Assistant, MQTT and future repository building blocks.'],
    ],
    projectEyebrow: 'GitHub Basis',
    projectTitle: 'Public projects as building blocks',
    projectText:
      'Growatt_Dat, HA-Aquarium- and ha-kuehlgeraet-cockpit provide concrete starting points for further automation.',
    ctaTitle: 'Build local automation or visualize energy flows?',
    ctaText: 'SYSTEMMEDIA can connect logic, visualization and repository structure for local technical systems.',
    ctaMail: 'Request automation',
    services: [
      {
        title: 'Home Assistant',
        text: 'Local automations, HACS integrations, dashboards and rule-based control.',
        icon: Home,
      },
      {
        title: 'MQTT',
        text: 'Robust data flows between sensors, inverters, actuators and web interfaces.',
        icon: RadioTower,
      },
      {
        title: 'PV control & Growatt',
        text: 'Optimize self-consumption, evaluate local data and model dynamic operating strategies.',
        icon: BatteryCharging,
      },
      {
        title: 'Local data processing',
        text: 'No cloud dependency for technical core logic, measurements and control decisions.',
        icon: Cpu,
      },
      {
        title: 'Visualization',
        text: 'Web interfaces for energy, status, forecasts and technical operating states.',
        icon: Activity,
      },
    ],
  },
};

export default function AutomationSite() {
  const [language] = useLanguage();
  const t = copy[language];

  return (
    <Layout>
      <section className="section-shell min-h-screen pt-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-cyan">AUTOMATION.SYSTEMMEDIA.DE</p>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">{t.title}</h1>
          <p className="mt-7 text-lg leading-8 text-slate-300">{t.intro}</p>
        </div>
        <div className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{t.sectionTitle}</h2>
          <p className="mt-3 leading-7 text-slate-400">{t.sectionText}</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionTitle
          eyebrow={t.architectureEyebrow}
          title={t.architectureTitle}
          text={t.architectureText}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.architecture.map(([title, text]) => (
            <article key={title} className="glass-panel rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle eyebrow={t.scenariosEyebrow} title={t.scenariosTitle} text={t.scenariosText} />
        <div className="grid gap-4 md:grid-cols-2">
          {t.scenarios.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">{t.projectEyebrow}</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">{t.projectTitle}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">{t.projectText}</p>
            </div>
            <a className="rounded border border-cyan/40 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan hover:bg-cyan/20" href="https://projects.systemmedia.de">
              projects.systemmedia.de
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">AUTOMATION.SYSTEMMEDIA.DE</p>
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
