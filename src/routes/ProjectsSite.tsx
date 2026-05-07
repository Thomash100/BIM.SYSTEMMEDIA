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
    descriptions: projects.map((project) => project.description),
  },
  en: {
    title: 'Public GitHub projects',
    text: 'Filterable project overview for automation, energy, Home Assistant and technical web interfaces.',
    search: 'Search projects',
    all: 'All',
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

  return (
    <Layout>
      <section className="section-shell min-h-screen pt-32">
        <SectionTitle
          eyebrow="PROJECTS.SYSTEMMEDIA.DE"
          title={t.title}
          text={t.text}
        />
        <div className="glass-panel mb-8 grid gap-4 rounded-lg p-4 md:grid-cols-[1fr_auto]">
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
    </Layout>
  );
}
