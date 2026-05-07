import { useEffect } from 'react';
import AutomationSite from './routes/AutomationSite';
import BimSite from './routes/BimSite';
import Datenschutz from './routes/Datenschutz';
import IfcSite from './routes/IfcSite';
import Impressum from './routes/Impressum';
import MainSite from './routes/MainSite';
import ProjectsSite from './routes/ProjectsSite';
import { getCanonicalHost, getSiteKind, type SiteKind } from './utils/hostname';
import { useLanguage, type Language } from './utils/language';

const seo: Record<Language, Record<SiteKind, { title: string; description: string }>> = {
  de: {
    main: {
      title: 'SYSTEMMEDIA | BIM, IFC, Automation und technische Software',
      description:
        'SYSTEMMEDIA entwickelt digitale Werkzeuge für Planung, BIM, IFC, Automatisierung und technische Gebäudedaten.',
    },
    bim: {
      title: 'SYSTEMMEDIA BIM | 3D-Revit-Planung und Modellkoordination',
      description:
        'BIM-orientierte 3D-Revit-Planung, TGA-Modellkoordination, Parameterdaten, Revit-Workflows und Automatisierung.',
    },
    ifc: {
      title: 'SYSTEMMEDIA IFC | IFC-Prüfung, Modellanalyse und Qualität',
      description:
        'IFC-Dateien prüfen, Klassen, Property Sets und Geometrien analysieren und Modelle auswertbar machen.',
    },
    automation: {
      title: 'SYSTEMMEDIA Automation | Home Assistant, MQTT und PV-Steuerung',
      description:
        'Lokale Gebäudeautomation mit Home Assistant, MQTT, Growatt, PV-Optimierung und Webvisualisierung.',
    },
    projects: {
      title: 'SYSTEMMEDIA Projekte | GitHub-Repositories und Entwicklung',
      description:
        'Öffentliche SYSTEMMEDIA Entwicklungsprojekte rund um Home Assistant, Energieautomation, MQTT und Dashboards.',
    },
  },
  en: {
    main: {
      title: 'SYSTEMMEDIA | BIM, IFC, Automation and technical software',
      description: 'SYSTEMMEDIA develops digital tools for planning, BIM, IFC, automation and technical building data.',
    },
    bim: {
      title: 'SYSTEMMEDIA BIM | 3D Revit planning and model coordination',
      description: 'BIM-oriented 3D Revit planning, MEP model coordination, parameter data, workflows and automation.',
    },
    ifc: {
      title: 'SYSTEMMEDIA IFC | IFC checking, model analysis and quality',
      description: 'Check IFC files, analyze classes, property sets and geometries, and make models evaluable.',
    },
    automation: {
      title: 'SYSTEMMEDIA Automation | Home Assistant, MQTT and PV control',
      description: 'Local building automation with Home Assistant, MQTT, Growatt, PV optimization and web visualization.',
    },
    projects: {
      title: 'SYSTEMMEDIA Projects | GitHub repositories and development',
      description:
        'Public SYSTEMMEDIA development projects around Home Assistant, energy automation, MQTT and dashboards.',
    },
  },
};

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    if (property) tag.setAttribute('property', name);
    else tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function useSeo(kind: SiteKind, language: Language) {
  useEffect(() => {
    const data = seo[language][kind];
    const url = getCanonicalHost(kind);
    document.title = data.title;
    setMeta('description', data.description);
    setMeta('og:title', data.title, true);
    setMeta('og:description', data.description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', url, true);
    setMeta('og:image', `${url}/preview.jpg`, true);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [kind, language]);
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const kind = getSiteKind();
  const [language] = useLanguage();
  useSeo(kind, language);

  if (path === '/impressum') return <Impressum />;
  if (path === '/datenschutz') return <Datenschutz />;

  if (kind === 'bim') return <BimSite />;
  if (kind === 'ifc') return <IfcSite />;
  if (kind === 'automation') return <AutomationSite />;
  if (kind === 'projects') return <ProjectsSite />;

  return <MainSite />;
}
