import { Boxes, CircuitBoard, Gauge, GitBranch, Home, Layers3, ScanSearch } from 'lucide-react';

export const services = [
  {
    title: 'BIM & 3D-Revit-Planung',
    text: 'Modellbasierte Planung, TGA-Struktur, Koordination und auswertbare Bauteildaten.',
    icon: Boxes,
    href: 'https://bim.systemmedia.de',
  },
  {
    title: 'IFC-Prüfung & Modellqualität',
    text: 'Analyse von Klassen, Property Sets, Geometrien und falsch klassifizierten Bauteilen.',
    icon: ScanSearch,
    href: 'https://ifc.systemmedia.de',
  },
  {
    title: 'Revit-Add-ins & Planungstools',
    text: 'Werkzeuge für wiederkehrende Workflows, Parameterpflege und technische Auswertung.',
    icon: CircuitBoard,
    href: 'https://bim.systemmedia.de',
  },
  {
    title: 'Home Assistant & Gebäudeautomation',
    text: 'Lokale Steuerung, MQTT-Architekturen, Dashboards und robuste Automationslogik.',
    icon: Home,
    href: 'https://automation.systemmedia.de',
  },
  {
    title: 'Energie-/PV-Steuerung',
    text: 'PV-Optimierung, dynamische Lasten, Eigenverbrauch und datenbasierte Entscheidungen.',
    icon: Gauge,
    href: 'https://automation.systemmedia.de',
  },
  {
    title: 'Datenvisualisierung & Weboberflächen',
    text: 'Technische Frontends für Modelle, Sensordaten, Integrationen und Projektübersichten.',
    icon: Layers3,
    href: 'https://projects.systemmedia.de',
  },
  {
    title: 'Öffentliche Entwicklungsprojekte',
    text: 'GitHub-Repositories als offene Bausteine für Automation, Energie und Datenflüsse.',
    icon: GitBranch,
    href: 'https://projects.systemmedia.de',
  },
];
