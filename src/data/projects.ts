export type Project = {
  name: string;
  href: string;
  description: string;
  tags: string[];
  area: 'Automation' | 'Home Assistant' | 'Energy' | 'Software';
};

export const projects: Project[] = [
  {
    name: 'Growatt_Dat',
    href: 'https://github.com/Thomash100/Growatt_Dat',
    description:
      'Lokales Daten- und Steuerungskonzept für Growatt-Komponenten mit Fokus auf Eigenverbrauch, lokale Auswertung, MQTT und Home Assistant.',
    tags: ['Growatt', 'MQTT', 'PV', 'Home Assistant', 'Local First'],
    area: 'Energy',
  },
  {
    name: 'HA-Aquarium-',
    href: 'https://github.com/Thomash100/HA-Aquarium-',
    description: 'Aquarium-Lichtsteuerung für Home Assistant mit Automatisierungslogik.',
    tags: ['Home Assistant', 'Lighting', 'Automation', 'YAML'],
    area: 'Home Assistant',
  },
  {
    name: 'ha-kuehlgeraet-cockpit',
    href: 'https://github.com/Thomash100/ha-kuehlgeraet-cockpit',
    description:
      'Home Assistant HACS-Integration für strompreisbewusste Kühlschrank- und Kühltruhensteuerung mit Tibber, Shelly und Cockpit-Dashboards.',
    tags: ['HACS', 'Tibber', 'Shelly', 'Energy', 'Dashboard'],
    area: 'Automation',
  },
  {
    name: 'Projektverwaltung_WTF',
    href: 'https://github.com/Thomash100/Projektverwaltung_WTF',
    description:
      'Developer-Beta einer lokalen Projektverwaltungsplattform für Architektur- und Ingenieurbüros mit Windows-App, Web-Demo und Raspberry-Pi-Sync.',
    tags: ['Project Management', 'Windows App', 'Raspberry Pi', 'Sync', 'BIM'],
    area: 'Software',
  },
];
