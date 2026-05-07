import { ArrowRight, Github } from 'lucide-react';
import { lazy, Suspense, useMemo } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import StartLanguageGate from '../components/StartLanguageGate';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { setLanguagePreference, useLanguage, type Language } from '../utils/language';

const Hero3D = lazy(() => import('../components/Hero3D'));

const copy = {
  de: {
    heroTitle: 'Digitale Werkzeuge für Planung, BIM, IFC, Automation und technische Gebäudedaten.',
    heroText:
      'SYSTEMMEDIA verbindet modellbasierte Gebäudeplanung, Softwareentwicklung und lokale Automatisierung zu belastbaren Workflows für technische Daten.',
    ctaServices: 'Leistungen ansehen',
    ctaProjects: 'Projekte ansehen',
    ctaGithub: 'GitHub öffnen',
    servicesEyebrow: 'Leistungsbereiche',
    servicesTitle: 'Technische Plattform statt Portfolio',
    servicesText:
      'Fachliche Planung, Modellqualität, Automatisierung und Weboberflächen greifen in einem System ineinander.',
    featureItems: [
      {
        label: 'BIM / Revit',
        title: 'Modellbasierte Planung mit technischer Tiefe',
        text: 'Digitale 3D-Planung, modellbasierte Koordination, Revit-Workflows, TGA-orientierte Modellstruktur und Automatisierung von wiederkehrenden Planungsprozessen.',
        href: 'https://bim.systemmedia.de',
      },
      {
        label: 'IFC / Modellprüfung',
        title: 'Modelle prüfbar und auswertbar machen',
        text: 'Prüfung, Analyse und Korrektur von IFC-Modellen, Klassifikation von Bauteilen, Datenqualität, Auswertbarkeit und modellbasierte Übergabe.',
        href: 'https://ifc.systemmedia.de',
      },
      {
        label: 'Automation / Energie',
        title: 'Lokale Steuerung für technische Systeme',
        text: 'Lokale Datenverarbeitung, MQTT, Home Assistant, PV-Optimierung, dynamische Steuerung und Visualisierung technischer Systeme.',
        href: 'https://automation.systemmedia.de',
      },
    ],
    projectsEyebrow: 'Projekte / GitHub',
    projectsTitle: 'Öffentliche Entwicklungsbausteine',
    projectsText: 'Startdaten für Automatisierung, Energieoptimierung und Home-Assistant-Workflows.',
    projectDescriptions: projects.map((project) => project.description),
    githubProfile: 'GitHub-Profil öffnen',
    contactEyebrow: 'Kontakt',
    contactTitle: 'Technische Idee, Modell oder Automation?',
    contactText: 'Kontakt per E-Mail ist für die erste Version vorbereitet. Das Kontaktformular bleibt bewusst draußen.',
  },
  en: {
    heroTitle: 'Digital tools for planning, BIM, IFC, automation and technical building data.',
    heroText:
      'SYSTEMMEDIA connects model-based building planning, software development and local automation into resilient workflows for technical data.',
    ctaServices: 'View services',
    ctaProjects: 'View projects',
    ctaGithub: 'Open GitHub',
    servicesEyebrow: 'Service Areas',
    servicesTitle: 'A technical platform, not a portfolio',
    servicesText: 'Planning, model quality, automation and web interfaces work together as one technical system.',
    featureItems: [
      {
        label: 'BIM / Revit',
        title: 'Model-based planning with technical depth',
        text: 'Digital 3D planning, model-based coordination, Revit workflows, MEP-oriented model structure and automation of recurring planning processes.',
        href: 'https://bim.systemmedia.de',
      },
      {
        label: 'IFC / Model checking',
        title: 'Making models checkable and usable',
        text: 'Review, analysis and correction of IFC models, component classification, data quality, evaluability and model-based handover.',
        href: 'https://ifc.systemmedia.de',
      },
      {
        label: 'Automation / Energy',
        title: 'Local control for technical systems',
        text: 'Local data processing, MQTT, Home Assistant, PV optimization, dynamic control and visualization of technical systems.',
        href: 'https://automation.systemmedia.de',
      },
    ],
    projectsEyebrow: 'Projects / GitHub',
    projectsTitle: 'Open development building blocks',
    projectsText: 'Starter projects for automation, energy optimization and Home Assistant workflows.',
    projectDescriptions: [
      'Local data and control concept for Growatt components with a focus on self-consumption, local analysis, MQTT and Home Assistant.',
      'Aquarium lighting control for Home Assistant with automation logic.',
      'Home Assistant HACS integration for electricity-price-aware refrigerator and freezer control with Tibber, Shelly and cockpit dashboards.',
    ],
    githubProfile: 'Open GitHub profile',
    contactEyebrow: 'Contact',
    contactTitle: 'Technical idea, model or automation?',
    contactText: 'Contact by email is prepared for the first version. A large contact form is intentionally left out.',
  },
};

const englishServiceText = [
  {
    title: 'BIM & 3D Revit planning',
    text: 'Model-based planning, MEP structure, coordination and evaluable component data.',
  },
  {
    title: 'IFC checking & model quality',
    text: 'Analysis of classes, property sets, geometries and incorrectly classified components.',
  },
  {
    title: 'Revit add-ins & planning tools',
    text: 'Tools for recurring workflows, parameter maintenance and technical evaluation.',
  },
  {
    title: 'Home Assistant & building automation',
    text: 'Local control, MQTT architectures, dashboards and robust automation logic.',
  },
  {
    title: 'Energy / PV control',
    text: 'PV optimization, dynamic loads, self-consumption and data-based decisions.',
  },
  {
    title: 'Data visualization & web interfaces',
    text: 'Technical frontends for models, sensor data, integrations and project overviews.',
  },
];

function CtaLink({ href, children, primary = false }: { href: string; children: string; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold transition ${
        primary
          ? 'bg-cyan text-ink hover:bg-white'
          : 'border border-white/15 bg-white/[0.04] text-white hover:border-cyan/50 hover:text-cyan'
      }`}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

export default function MainSite() {
  const [entered, setEntered] = useState(false);
  const [language] = useLanguage();
  const t = copy[language];

  const localizedServices = useMemo(
    () =>
      language === 'de'
        ? services
        : services.slice(0, 6).map((service, index) => ({
            ...service,
            title: englishServiceText[index].title,
            text: englishServiceText[index].text,
          })),
    [language],
  );

  const localizedProjects = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        description: t.projectDescriptions[index] ?? project.description,
      })),
    [t],
  );

  function enterHomepage(language: 'de' | 'en') {
    setLanguagePreference(language);
    setEntered(true);
  }

  if (!entered) {
    return <StartLanguageGate onSelect={enterHomepage} />;
  }

  return (
    <Layout>
      <section className="section-shell grid min-h-screen items-center gap-12 pt-32 lg:grid-cols-[1fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-cyan">SYSTEMMEDIA</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-white md:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink href="#leistungen" primary>
              {t.ctaServices}
            </CtaLink>
            <CtaLink href="#projekte">{t.ctaProjects}</CtaLink>
            <CtaLink href="https://github.com/Thomash100">{t.ctaGithub}</CtaLink>
          </div>
        </motion.div>
        <Suspense fallback={<div className="min-h-[360px] rounded-lg border border-white/10 bg-panel/70" />}>
          <Hero3D />
        </Suspense>
      </section>

      <section id="leistungen" className="section-shell">
        <SectionTitle
          eyebrow={t.servicesEyebrow}
          title={t.servicesTitle}
          text={t.servicesText}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {localizedServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-5 lg:grid-cols-3">
        {t.featureItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-lg p-7 transition hover:border-cyan/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan">{item.label}</p>
            <h2 className="mt-5 text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
          </motion.a>
        ))}
      </section>

      <section id="projekte" className="section-shell">
        <SectionTitle
          eyebrow={t.projectsEyebrow}
          title={t.projectsTitle}
          text={t.projectsText}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {localizedProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://github.com/Thomash100"
            className="inline-flex items-center gap-2 rounded border border-cyan/30 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan hover:bg-cyan/20"
          >
            <Github size={18} /> {t.githubProfile}
          </a>
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">{t.contactEyebrow}</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">{t.contactTitle}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">{t.contactText}</p>
            </div>
            <a className="rounded bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-cyan" href="mailto:info@systemmedia.de">
              info@systemmedia.de
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
