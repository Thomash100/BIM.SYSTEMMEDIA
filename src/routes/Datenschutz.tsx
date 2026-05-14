import Layout from '../components/Layout';
import { useLanguage } from '../utils/language';

const copy = {
  de: {
    eyebrow: 'Rechtlicher Platzhalter',
    title: 'Datenschutzerklärung',
    intro:
      'Diese Datenschutzerklärung ist ein Platzhalter. Vor Livegang müssen Hosting, Serverlogs, Kontaktaufnahme, eingesetzte Dienste und alle weiteren Verarbeitungsvorgänge rechtlich geprüft und korrekt beschrieben werden.',
    controller: 'Verantwortlicher: Thomas Hofmann, Straße der Einheit 259, 09423 Gelenau',
    hosting: 'Hosting: Eigener Linux-Server / Platzhalter für genaue Angaben',
    contact: 'Kontakt: info@systemmedia.de',
    tracking: 'Cookies/Tracking: Für diese Version nicht vorgesehen; Sprachwahl wird lokal im Browser gespeichert.',
  },
  en: {
    eyebrow: 'Legal Placeholder',
    title: 'Privacy Policy',
    intro:
      'This privacy policy is a placeholder. Before launch, hosting, server logs, contact handling, third-party services and all other processing activities must be legally reviewed and described correctly.',
    controller: 'Controller: Thomas Hofmann, Straße der Einheit 259, 09423 Gelenau, Germany',
    hosting: 'Hosting: Own Linux server / placeholder for precise details',
    contact: 'Contact: info@systemmedia.de',
    tracking: 'Cookies/tracking: Not planned for this version; language choice is stored locally in the browser.',
  },
};

export default function Datenschutz() {
  const [language] = useLanguage();
  const t = copy[language];

  return (
    <Layout>
      <section className="section-shell min-h-screen pt-32">
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">{t.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold text-white">{t.title}</h1>
          <p className="mt-6 max-w-3xl leading-7 text-slate-300">{t.intro}</p>
          <div className="mt-8 space-y-3 text-slate-400">
            <p>{t.controller}</p>
            <p>{t.hosting}</p>
            <p>{t.contact}</p>
            <p>{t.tracking}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
