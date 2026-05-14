import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';
import { useLanguage } from '../utils/language';

const tags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

const copy = {
  de: {
    title: 'Öffentliche GitHub-Projekte',
    text: 'Filterbare Projektübersicht für Automation, Energie, Home Assistant und technische Weboberflächen.',
    search: 'Projekte suchen',
    all: 'Alle',
    countLabel: 'Projekte',
    tagsLabel: 'Technologien',
    areasLabel: 'Fachbereiche',
    filterTitle: 'Repositorys durchsuchen',
    filterText:
      'Die Übersicht ist als Startpunkt für öffentliche Entwicklung gedacht. Später können weitere Repositories oder Live-Daten ergänzt werden.',
    focusEyebrow: 'Projektlogik',
    focusTitle: 'Offene Bausteine für lokale Systeme',
    focusText:
      'Die Projekte zeigen konkrete technische Ansätze für Home Assistant, Energieautomation und visuelle Cockpits.',
    focus: [
      ['Local First', 'Kernlogik und Messwerte bleiben lokal verfügbar und nachvollziehbar.'],
      ['Home Assistant', 'Integrationen, Automationen und Dashboards werden projektbezogen dokumentiert.'],
      ['Energie', 'PV, Strompreise, Verbraucher und Betriebszustände werden datenbasiert betrachtet.'],
      ['GitHub', 'Quellcode, Issues und Versionen liegen offen nachvollziehbar in Repositories.'],
    ],
    roadmapEyebrow: 'Ausbau',
    roadmapTitle: 'Vorbereitet für mehr Projekte',
    roadmapText:
      'Die Seite ist statisch, aber strukturell bereit für spätere GitHub-API-Daten, Releases, Screenshots oder technische Dokumentation.',
    roadmap: [
      'Weitere öffentliche Repositories ergänzen',
      'Screenshots, Architekturdiagramme und Release-Hinweise je Projekt aufnehmen',
      'Technologie-Tags und Statusangaben erweitern',
      'Optional später GitHub API oder Headless CMS anbinden',
    ],
    descriptions: projects.map((project) => project.description),
  },
  en: {
    title: 'Public GitHub projects',
    text: 'Filterable project overview for automation, energy, Home Assistant and technical web interfaces.',
    search: 'Search projects',
    all: 'All',
    countLabel: 'Projects',
    tagsLabel: 'Technologies',
    areasLabel: 'Areas',
    filterTitle: 'Search repositories',
    filterText:
      'The overview is intended as a starting point for public development. More repositories or live data can be added later.',
    focusEyebrow: 'Project Logic',
    focusTitle: 'Open building blocks for local systems',
    focusText:
      'The projects show concrete technical approaches for Home Assistant, energy automation and visual cockpits.',
    focus: [
      ['Local First', 'Core logic and measurements remain locally available and traceable.'],
      ['Home Assistant', 'Integrations, automations and dashboards are documented per project.'],
      ['Energy', 'PV, electricity prices, consumers and operating states are treated data-based.'],
      ['GitHub', 'Source code, issues and versions are traceable in public repositories.'],
    ],
    roadmapEyebrow: 'Expansion',
    roadmapTitle: 'Prepared for more projects',
    roadmapText:
      'The site is static, but structurally ready for later GitHub API data, releases, screenshots or technical documentation.',
    roadmap: [
      'Add more public repositories',
      'Add screenshots, architecture diagrams and release notes per project',
      'Expand technology tags and status information',
      'Optionally connect GitHub API or a headless CMS later',
    ],
    descriptions: [
      'Local data and control concept for Growatt components with a focus on self-consumption, local analysis, MQTT and Home Assistant.',
      'Aquarium lighting control for Home Assistant with automation logic.',
      'Home Assistant HACS integration for electricity-price-aware refrigerator and freezer control with Tibber, Shelly and cockpit dashboards.',
    ],
  },
};

export default function ProjectsSite() {
  const [language] = useLanguage();
  const t = copy[language];
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('all');

  const localizedProjects = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        description: t.descriptions[index] ?? project.description,
      })),
    [t],
  );

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return localizedProjects.filter((project) => {
      const matchesQuery =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((projectTag) => projectTag.toLowerCase().includes(q));
      const matchesTag = tag === 'all' || project.tags.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [localizedProjects, query, tag]);

  const areas = Array.from(new Set(localizedProjects.map((project) => project.area))).sort();

  return (
    <Layout>
      <section className="section-shell min-h-screen pt-32">
        <SectionTitle
          eyebrow="PROJECTS.SYSTEMMEDIA.DE"
          title={t.title}
          text={t.text}
        />
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            [localizedProjects.length, t.countLabel],
            [tags.length, t.tagsLabel],
            [areas.length, t.areasLabel],
          ].map(([value, label]) => (
            <article key={label} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 text-center">
              <p className="text-3xl font-semibold text-white">{value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan">{label}</p>
            </article>
          ))}
        </div>
        <div className="glass-panel mb-8 grid gap-4 rounded-lg p-4 md:grid-cols-[1fr_auto]">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-white">{t.filterTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{t.filterText}</p>
          </div>
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.search}
              className="h-12 w-full rounded border border-white/10 bg-black/30 pl-11 pr-4 text-sm text-white outline-none focus:border-cyan/60"
            />
          </label>
          <select
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            className="h-12 rounded border border-white/10 bg-black/30 px-4 text-sm text-white outline-none focus:border-cyan/60"
          >
            <option value="all">{t.all}</option>
            {tags.map((tagName) => (
              <option key={tagName} value={tagName}>
                {tagName}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle eyebrow={t.focusEyebrow} title={t.focusTitle} text={t.focusText} />
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
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan">{t.roadmapEyebrow}</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">{t.roadmapTitle}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">{t.roadmapText}</p>
            </div>
            <div className="grid gap-3">
              {t.roadmap.map((item) => (
                <div key={item} className="rounded border border-white/10 bg-black/20 px-4 py-4 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
