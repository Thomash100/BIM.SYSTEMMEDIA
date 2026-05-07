export type SiteKind = 'main' | 'bim' | 'ifc' | 'automation' | 'projects';

export function getSiteKind(hostname = window.location.hostname): SiteKind {
  const host = hostname.toLowerCase();

  if (host.startsWith('bim.')) return 'bim';
  if (host.startsWith('ifc.')) return 'ifc';
  if (host.startsWith('automation.')) return 'automation';
  if (host.startsWith('projects.')) return 'projects';

  return 'main';
}

export function getCanonicalHost(kind: SiteKind) {
  const map: Record<SiteKind, string> = {
    main: 'https://systemmedia.de',
    bim: 'https://bim.systemmedia.de',
    ifc: 'https://ifc.systemmedia.de',
    automation: 'https://automation.systemmedia.de',
    projects: 'https://projects.systemmedia.de',
  };

  return map[kind];
}
