import Layout from '../components/Layout';
import { useLanguage } from '../utils/language';

const copy = {
  de: {
    eyebrow: 'Rechtlicher Platzhalter',
    title: 'Impressum',
    intro:
      'Angaben gemäß § 5 TMG. Die Angaben sollten vor Veröffentlichung rechtlich geprüft werden, insbesondere falls die Website geschäftlich oder freiberuflich genutzt wird.',
    operator: 'Anbieter / Betreiber: Thomas Hofmann',
    status: 'Status: Privatperson / Freiberufler, vor Veröffentlichung final rechtlich einordnen',
    address: 'Adresse: Straße der Einheit 259, 09423 Gelenau',
    email: 'E-Mail: info@systemmedia.de',
    vat: 'Umsatzsteuer-ID / Registernummer: Nicht angegeben / falls erforderlich ergänzen',
  },
  en: {
    eyebrow: 'Legal Placeholder',
    title: 'Legal Notice',
    intro:
      'Information according to German legal notice requirements. The information should be reviewed legally before publication, especially if the website is used commercially or freelance.',
    operator: 'Provider / operator: Thomas Hofmann',
    status: 'Status: Private individual / freelancer, final legal classification required before publication',
    address: 'Address: Straße der Einheit 259, 09423 Gelenau, Germany',
    email: 'Email: info@systemmedia.de',
    vat: 'VAT ID / registration number: Not provided / add if required',
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
          <p className="mt-6 max-w-3xl leading-7 text-slate-300">{t.intro}</p>
          <div className="mt-8 space-y-3 text-slate-400">
            <p>{t.operator}</p>
            <p>{t.status}</p>
            <p>{t.address}</p>
            <p>{t.email}</p>
            <p>{t.vat}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
