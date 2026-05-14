import Layout from '../components/Layout';
import { useLanguage } from '../utils/language';

const copy = {
  de: {
    eyebrow: 'Rechtliche Angaben',
    title: 'Impressum',
    updated: 'Stand: 14. Mai 2026',
    intro:
      'Angaben nach § 5 DDG sowie ergänzende Angaben für die Website SYSTEMMEDIA. Die Angaben sollten vor endgültiger Veröffentlichung rechtlich geprüft werden, insbesondere wenn die Website freiberuflich oder geschäftlich genutzt wird.',
    sections: [
      {
        title: 'Anbieter / Betreiber',
        items: ['Thomas Hofmann', 'Straße der Einheit 259', '09423 Gelenau', 'Deutschland'],
      },
      {
        title: 'Kontakt',
        items: ['E-Mail: info@systemmedia.de'],
      },
      {
        title: 'Domain und Schreibweise',
        items: [
          'Die Website wird unter SYSTEMMEDIA / systemmedia.de betrieben.',
          'Die Schreibweise systemmedia.de ist einheitlich für Hauptseite und Subdomains zu verwenden.',
          'Eine Verwechslung mit ähnlich geschriebenen Domains oder fremden Unternehmen ist zu vermeiden.',
        ],
      },
      {
        title: 'Status / Rechtsform',
        items: [
          'Privatperson / Freiberufler, vor Veröffentlichung final rechtlich einordnen.',
          'Geschäftsführer-, Handelsregister- oder GmbH-Angaben werden nicht aufgeführt, solange sie für diesen Anbieter nicht zutreffen.',
          'Umsatzsteuer-ID / Registernummer: nicht angegeben; falls vorhanden oder erforderlich, vor Veröffentlichung ergänzen.',
        ],
      },
      {
        title: 'Verantwortlich für Inhalte nach § 18 Abs. 2 MStV',
        items: ['Thomas Hofmann', 'Straße der Einheit 259', '09423 Gelenau'],
      },
      {
        title: 'Verbraucherstreitbeilegung',
        items: [
          'Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          'Die frühere EU-Plattform zur Online-Streitbeilegung wurde zum 20. Juli 2025 eingestellt; ein veralteter OS-Plattform-Link wird deshalb nicht eingebunden.',
        ],
      },
      {
        title: 'Hinweis zu Unterdomains',
        items: [
          'Dieses Impressum gilt für systemmedia.de sowie für die Subdomains bim.systemmedia.de, ifc.systemmedia.de, automation.systemmedia.de und projects.systemmedia.de, soweit dort keine abweichenden Angaben veröffentlicht werden.',
          'Für spätere Dienste mit Nutzerkonten, Uploads, Viewer-Funktionen, Cloud-Anbindungen oder gesonderten Vertragsleistungen können ergänzende rechtliche Hinweise erforderlich werden.',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Legal Information',
    title: 'Legal Notice',
    updated: 'Last updated: May 14, 2026',
    intro:
      'Information according to § 5 German Digital Services Act (DDG) and additional legal information for the SYSTEMMEDIA website. The information should be legally reviewed before final publication, especially if the website is used commercially or freelance.',
    sections: [
      {
        title: 'Provider / operator',
        items: ['Thomas Hofmann', 'Straße der Einheit 259', '09423 Gelenau', 'Germany'],
      },
      {
        title: 'Contact',
        items: ['Email: info@systemmedia.de'],
      },
      {
        title: 'Domain and spelling',
        items: [
          'The website is operated under SYSTEMMEDIA / systemmedia.de.',
          'The spelling systemmedia.de should be used consistently for the main website and subdomains.',
          'Confusion with similarly spelled domains or third-party companies should be avoided.',
        ],
      },
      {
        title: 'Status / legal form',
        items: [
          'Private individual / freelancer, final legal classification required before publication.',
          'Managing director, commercial register or GmbH information is not listed unless it applies to this provider.',
          'VAT ID / registration number: not provided; add before publication if available or required.',
        ],
      },
      {
        title: 'Responsible for editorial content under § 18(2) MStV',
        items: ['Thomas Hofmann', 'Straße der Einheit 259', '09423 Gelenau, Germany'],
      },
      {
        title: 'Consumer dispute resolution',
        items: [
          'I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
          'The former EU Online Dispute Resolution platform was discontinued on July 20, 2025; therefore, an outdated ODR platform link is not included.',
        ],
      },
      {
        title: 'Subdomain notice',
        items: [
          'This legal notice applies to systemmedia.de and the subdomains bim.systemmedia.de, ifc.systemmedia.de, automation.systemmedia.de and projects.systemmedia.de, unless different information is published there.',
          'Future services with user accounts, uploads, viewer functions, cloud integrations or separate contractual services may require additional legal notices.',
        ],
      },
    ],
  },
};

export default function Impressum() {
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
