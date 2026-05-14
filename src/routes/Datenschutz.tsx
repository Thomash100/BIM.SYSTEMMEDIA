import Layout from '../components/Layout';
import { useLanguage } from '../utils/language';

const copy = {
  de: {
    eyebrow: 'Rechtlicher Platzhalter',
    title: 'Datenschutzerklärung',
    updated: 'Stand: 14. Mai 2026',
    intro:
      'Diese Datenschutzerklärung ist ein Platzhalter. Vor Livegang müssen Hosting, Serverlogs, Kontaktaufnahme, eingesetzte Dienste und alle weiteren Verarbeitungsvorgänge rechtlich geprüft und korrekt beschrieben werden.',
    sections: [
      {
        title: 'Verantwortlicher',
        items: [
          'Thomas Hofmann',
          'Straße der Einheit 259',
          '09423 Gelenau',
          'E-Mail: info@systemmedia.de',
        ],
      },
      {
        title: 'Hosting und Server-Logfiles',
        items: [
          'Hosting: Eigener Linux-Server / Platzhalter für genaue technische Angaben zum Anbieter und Serverstandort.',
          'Beim Aufruf der Website können technisch notwendige Server-Logfiles entstehen, zum Beispiel IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte Datei, HTTP-Statuscode, übertragene Datenmenge, Referrer, Browsertyp, Betriebssystem und User-Agent.',
          'Die Verarbeitung erfolgt zur sicheren und stabilen Bereitstellung der Website, zur Fehleranalyse und zur Abwehr missbräuchlicher Nutzung.',
          'Speicherdauer und genaue Log-Konfiguration müssen vor Veröffentlichung anhand der tatsächlichen Servereinstellungen ergänzt werden.',
        ],
      },
      {
        title: 'Kontaktaufnahme per E-Mail',
        items: [
          'Wenn Sie per E-Mail Kontakt aufnehmen, werden die übermittelten Angaben zur Bearbeitung der Anfrage verarbeitet.',
          'Eine Weitergabe an Dritte ist für diese erste Version nicht vorgesehen, sofern sie nicht zur Bearbeitung der Anfrage erforderlich oder gesetzlich vorgeschrieben ist.',
        ],
      },
      {
        title: 'Cookies, Tracking und lokale Sprachwahl',
        items: [
          'Cookies/Tracking: Für diese Version sind keine Analyse-, Marketing- oder Tracking-Cookies vorgesehen.',
          'Die gewählte Sprache wird lokal im Browser gespeichert, damit die Seiten nach der Auswahl weiterhin deutsch oder englisch angezeigt werden.',
          'Die lokale Sprachwahl dient ausschließlich der Bedienbarkeit der Website und nicht der Nutzeranalyse.',
        ],
      },
      {
        title: 'Externe Links',
        items: [
          'Die Website enthält Links zu externen Angeboten, insbesondere zu GitHub.',
          'Beim Öffnen externer Links gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
        ],
      },
      {
        title: 'Betroffenenrechte',
        items: [
          'Betroffene Personen können nach Maßgabe der DSGVO insbesondere Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch verlangen.',
          'Außerdem besteht grundsätzlich das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.',
        ],
      },
      {
        title: 'Keine Datenbank und keine Kontaktformulare',
        items: [
          'Die erste Version der Website ist als statische Website ohne eigene Datenbank umgesetzt.',
          'Ein großes Kontaktformular ist nicht vorgesehen; die Kontaktaufnahme erfolgt über die angegebene E-Mail-Adresse.',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Legal Placeholder',
    title: 'Privacy Policy',
    updated: 'Last updated: May 14, 2026',
    intro:
      'This privacy policy is a placeholder. Before launch, hosting, server logs, contact handling, third-party services and all other processing activities must be legally reviewed and described correctly.',
    sections: [
      {
        title: 'Controller',
        items: [
          'Thomas Hofmann',
          'Straße der Einheit 259',
          '09423 Gelenau, Germany',
          'Email: info@systemmedia.de',
        ],
      },
      {
        title: 'Hosting and server logs',
        items: [
          'Hosting: Own Linux server / placeholder for precise technical information about provider and server location.',
          'When accessing the website, technically necessary server log files may be created, for example IP address, date and time, requested file, HTTP status code, transferred data volume, referrer, browser type, operating system and user agent.',
          'Processing is used to provide the website securely and reliably, analyze errors and prevent abusive use.',
          'Retention period and exact log configuration must be added before publication based on the actual server settings.',
        ],
      },
      {
        title: 'Contact by email',
        items: [
          'If you contact us by email, the transmitted information will be processed to handle the request.',
          'Disclosure to third parties is not planned for this first version unless required to handle the request or by law.',
        ],
      },
      {
        title: 'Cookies, tracking and local language choice',
        items: [
          'Cookies/tracking: No analytics, marketing or tracking cookies are planned for this version.',
          'The selected language is stored locally in the browser so pages continue to appear in German or English after selection.',
          'The local language choice is used only for website usability and not for user analytics.',
        ],
      },
      {
        title: 'External links',
        items: [
          'The website contains links to external services, especially GitHub.',
          'When opening external links, the privacy policies of the respective provider apply.',
        ],
      },
      {
        title: 'Data subject rights',
        items: [
          'Under the GDPR, data subjects may in particular request access, rectification, erasure, restriction of processing, data portability and objection.',
          'There is also generally the right to lodge a complaint with a competent data protection supervisory authority.',
        ],
      },
      {
        title: 'No database and no contact forms',
        items: [
          'The first version of the website is implemented as a static website without its own database.',
          'A large contact form is not planned; contact is made via the email address provided.',
        ],
      },
    ],
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
          <p className="mt-3 text-sm text-cyan">{t.updated}</p>
          <p className="mt-6 max-w-3xl leading-7 text-slate-300">{t.intro}</p>
          <div className="mt-10 grid gap-6">
            {t.sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-white/10 bg-black/20 p-5">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <div className="mt-4 space-y-3 text-slate-400">
                  {section.items.map((item) => (
                    <p key={item} className="leading-7">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
