import { ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';
import { useLanguage } from '../utils/language';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [language] = useLanguage();
  const githubLabel =
    language === 'de' ? `${project.name} auf GitHub öffnen` : `Open ${project.name} on GitHub`;

  return (
    <article className="rounded-lg border border-white/10 bg-panel/80 p-6 backdrop-blur transition hover:border-cyan/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">{project.area}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
        </div>
        <a
          href={project.href}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-white/10 text-slate-300 hover:border-cyan/40 hover:text-cyan"
          aria-label={githubLabel}
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
