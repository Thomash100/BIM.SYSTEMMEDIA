import Layout from '../components/Layout';
import { useLanguage } from '../utils/language';

const copy = {
  de: {
    eyebrow: 'Rechtliche Hinweise',
    title: 'Nutzungsbedingungen und Haftungsausschluss',
    updated: 'Stand: 14. Mai 2026',
    intro:
      'Diese Hinweise gelten für über SYSTEMMEDIA bereitgestellte Softwareanwendungen, Skripte, Plug-ins, Tools, Bibliotheken, Konfigurationen, Dokumentationen und sonstige digitale Inhalte, insbesondere in öffentlichen GitHub-Repositories.',
    sections: [
      {
        title: 'Allgemeine Hinweise',
        items: [
          'Die über die GitHub-Repositories von SYSTEMMEDIA bereitgestellten Softwareanwendungen, Skripte, Plug-ins, Tools, Bibliotheken und sonstigen digitalen Inhalte dienen ausschließlich Test-, Entwicklungs-, Demonstrations- und Evaluierungszwecken.',
          'Sämtliche bereitgestellten Anwendungen befinden sich, sofern nicht ausdrücklich anders gekennzeichnet, im Entwicklungsstatus und gelten als Testversion, Beta-Version, experimentelle Software oder nicht produktiv freigegebene Software.',
          'Eine Nutzung erfolgt ausschließlich auf eigene Verantwortung und eigenes Risiko des Nutzers.',
        ],
      },
      {
        title: 'Nutzungsumfang',
        items: [
          'Die Nutzung der bereitgestellten Software für private, nicht kommerzielle Zwecke ist grundsätzlich kostenfrei gestattet.',
          'Eine kommerzielle Nutzung, Weiterverbreitung, Veränderung oder Integration in produktive Systeme ist ohne ausdrückliche schriftliche Zustimmung des Rechteinhabers nicht gestattet, sofern im jeweiligen Repository keine abweichende Lizenz angegeben ist.',
          'Soweit in einem einzelnen Repository eine eigene Lizenz, README-Datei oder gesonderte Nutzungsregel veröffentlicht ist, hat diese projektspezifische Regelung Vorrang.',
        ],
      },
      {
        title: 'Keine Gewährleistung',
        items: [
          'Die Software wird „wie besehen“ („as is“) ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt.',
          'Insbesondere wird keine Gewähr übernommen für Funktionsfähigkeit, Verfügbarkeit, Fehlerfreiheit, Aktualität, Kompatibilität, Datensicherheit, Wirtschaftlichkeit, Eignung für einen bestimmten Zweck sowie rechtliche oder normative Konformität.',
          'Es besteht kein Anspruch auf Fehlerbehebung, Updates, Weiterentwicklung, Support, Dokumentation oder dauerhafte Bereitstellung.',
        ],
      },
      {
        title: 'Haftungsausschluss',
        items: [
          'Die Nutzung sämtlicher Software, Skripte, Plug-ins, Konfigurationen und bereitgestellter Inhalte erfolgt vollständig auf eigene Gefahr.',
          'Jegliche Haftung für Schäden wird ausgeschlossen, soweit gesetzlich zulässig. Zwingende gesetzliche Haftungstatbestände bleiben unberührt.',
          'Dies gilt insbesondere für Datenverlust, Systemfehler, Softwarefehler, Planungsfehler, Berechnungsfehler, Modellierungsfehler, Projektverzögerungen, Folgeschäden, direkte oder indirekte Schäden, Vermögensschäden, Betriebsunterbrechungen, Schäden an Hard- oder Software, fehlerhafte IFC-, BIM- oder CAD-Daten sowie Schäden durch Inkompatibilitäten oder Fehlfunktionen.',
          'Die bereitgestellten Anwendungen sind nicht für sicherheitskritische, produktive oder haftungsrelevante Einsatzzwecke freigegeben.',
        ],
      },
      {
        title: 'Fachliche Verantwortung',
        items: [
          'Die Nutzung der Software ersetzt keine fachtechnische Prüfung, Plausibilitätskontrolle oder qualifizierte Ingenieurleistung.',
          'Insbesondere bei BIM-Projekten, IFC-Daten, CAD-/Revit-Modellen, TGA-Planungen, Berechnungen, Ausschreibungen und technischen Nachweisen liegt die vollständige Verantwortung für Prüfung, Validierung und Freigabe ausschließlich beim jeweiligen Anwender.',
        ],
      },
      {
        title: 'Externe Plattformen und Dienste',
        items: [
          'Für Inhalte, Verfügbarkeit und Sicherheit externer Plattformen, insbesondere GitHub, Cloud-Dienste, APIs, Drittanbieter-Bibliotheken, Plug-ins und Open-Source-Komponenten, wird keine Haftung übernommen.',
          'Beim Aufruf externer Plattformen gelten die jeweiligen Nutzungsbedingungen und Datenschutzbestimmungen der Anbieter.',
        ],
      },
      {
        title: 'Änderungen und Entfernung',
        items: [
          'Der Betreiber behält sich das Recht vor, Inhalte, Funktionen, Repositories oder Anwendungen jederzeit ohne Vorankündigung zu ändern, einzuschränken oder zu entfernen.',
        ],
      },
      {
        title: 'Salvatorische Klausel',
        items: [
          'Sollten einzelne Bestimmungen dieser Nutzungsbedingungen ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Legal Information',
    title: 'Terms of Use and Disclaimer',
    updated: 'Last updated: May 14, 2026',
    intro:
      'These notices apply to software applications, scripts, plug-ins, tools, libraries, configurations, documentation and other digital content provided through SYSTEMMEDIA, especially in public GitHub repositories.',
    sections: [
      {
        title: 'General notes',
        items: [
          'Software applications, scripts, plug-ins, tools, libraries and other digital content provided through SYSTEMMEDIA GitHub repositories are intended exclusively for testing, development, demonstration and evaluation purposes.',
          'Unless expressly marked otherwise, all provided applications are in development status and are considered test versions, beta versions, experimental software or software not released for production use.',
          'Use is entirely at the user’s own responsibility and risk.',
        ],
      },
      {
        title: 'Scope of use',
        items: [
          'Use of the provided software for private, non-commercial purposes is generally permitted free of charge.',
          'Commercial use, redistribution, modification or integration into production systems is not permitted without the express written consent of the rights holder, unless a different license is specified in the respective repository.',
          'If an individual repository contains its own license, README file or separate usage rule, that project-specific rule takes precedence.',
        ],
      },
      {
        title: 'No warranty',
        items: [
          'The software is provided “as is” without any express or implied warranty.',
          'In particular, no warranty is given for functionality, availability, freedom from errors, timeliness, compatibility, data security, economic viability, fitness for a particular purpose or legal or normative conformity.',
          'There is no entitlement to bug fixes, updates, further development, support, documentation or permanent availability.',
        ],
      },
      {
        title: 'Disclaimer of liability',
        items: [
          'Use of all software, scripts, plug-ins, configurations and provided content is entirely at the user’s own risk.',
          'Any liability for damages is excluded to the extent permitted by law. Mandatory statutory liability remains unaffected.',
          'This applies in particular to data loss, system errors, software errors, planning errors, calculation errors, modeling errors, project delays, consequential damages, direct or indirect damages, financial losses, business interruptions, damage to hardware or software, incorrect IFC, BIM or CAD data and damage caused by incompatibilities or malfunctions.',
          'The provided applications are not approved for safety-critical, production or liability-relevant use cases.',
        ],
      },
      {
        title: 'Professional responsibility',
        items: [
          'Use of the software does not replace technical review, plausibility checks or qualified engineering services.',
          'Especially for BIM projects, IFC data, CAD/Revit models, MEP planning, calculations, tenders and technical evidence, full responsibility for review, validation and approval remains exclusively with the respective user.',
        ],
      },
      {
        title: 'External platforms and services',
        items: [
          'No liability is accepted for the content, availability or security of external platforms, especially GitHub, cloud services, APIs, third-party libraries, plug-ins and open-source components.',
          'When accessing external platforms, the respective provider’s terms of use and privacy policies apply.',
        ],
      },
      {
        title: 'Changes and removal',
        items: [
          'The operator reserves the right to change, restrict or remove content, functions, repositories or applications at any time without prior notice.',
        ],
      },
      {
        title: 'Severability',
        items: [
          'If individual provisions of these terms of use are or become invalid in whole or in part, the validity of the remaining provisions remains unaffected.',
        ],
      },
    ],
  },
};

export default function Nutzungsbedingungen() {
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
