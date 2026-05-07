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
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionTitle
          eyebrow={language === 'de' ? 'Energieoptimierung' : 'Energy Optimization'}
          title={t.sectionTitle}
          text={t.sectionText}
        />
      </section>
    </Layout>
  );
}
