# SYSTEMMEDIA Website

Neue statische React/Vite-Website fuer `systemmedia.de` und die Subdomains `bim`, `ifc`, `automation` und `projects`.

Die App nutzt einen Codebestand und erkennt ueber den Hostnamen, welche Landingpage angezeigt wird. Sie ist fuer den Betrieb auf einem eigenen Linux-Server vorbereitet, zum Beispiel unter `/opt/systemmedia-website`.

## Lokale Entwicklung

```bash
npm ci
npm run dev
```

Vite startet lokal. Die Hauptseite ist unter `http://localhost:5173` erreichbar. Subdomains werden in Produktion per Hostname erkannt; lokal kann die Hauptnavigation genutzt werden.

## Build

```bash
npm run build
```

Das statische Ergebnis liegt danach in `dist/`.

## Deployment per GitHub Actions

Der Workflow `.github/workflows/deploy.yml` baut bei Push auf `main` und synchronisiert `dist/` per SSH/rsync auf den Server.

Erforderliche GitHub Secrets:

- `SERVER_HOST`
- `SERVER_USER`
- `SERVER_SSH_KEY`
- `SERVER_PORT`
- `DEPLOY_PATH` mit Standardwert `/opt/systemmedia-website`

Es werden keine Passwoerter, Tokens oder SSH-Schluessel im Repository gespeichert.

## Serverpfad

Empfohlener Pfad:

```bash
/opt/systemmedia-website
```

Die Webserver-Konfigurationen zeigen auf:

```bash
/opt/systemmedia-website/dist
```

## Backup vor Ersetzen der bestehenden Website

Vor dem Deployment auf `systemmedia.de` sollte die bestehende Website gesichert werden.

Beispiel fuer Plesk/klassische Webroots:

```bash
sudo mkdir -p /opt/backups/systemmedia
sudo rsync -a /var/www/vhosts/systemmedia.de/httpdocs/ /opt/backups/systemmedia/httpdocs-$(date +%Y%m%d-%H%M%S)/
```

Falls die alte Website eine Datenbank verwendet, diese separat sichern, zum Beispiel per Plesk-Backup oder `mysqldump`.

## DNS

Alle Domains/Subdomains sollen auf die Server-IP zeigen:

- A-Record `systemmedia.de` auf Server-IP
- A-Record `www.systemmedia.de` auf Server-IP oder CNAME auf `systemmedia.de`
- A-Record `bim.systemmedia.de` auf Server-IP
- A-Record `ifc.systemmedia.de` auf Server-IP
- A-Record `automation.systemmedia.de` auf Server-IP
- A-Record `projects.systemmedia.de` auf Server-IP

## Caddy

Siehe `Caddyfile.example`. Caddy kann HTTPS automatisch bereitstellen, sofern DNS korrekt zeigt und Ports 80/443 erreichbar sind.

```bash
sudo cp Caddyfile.example /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

## Raspberry Pi

Für den Betrieb auf einem Raspberry Pi mit eigenem Webserver siehe:

```txt
docs/RASPBERRY_PI.md
```

Die passende Caddy-Konfiguration liegt hier:

```txt
Caddyfile.raspberrypi.example
```

Direkte Installation aus einem GitHub-Repository auf dem Pi:

```bash
sudo mkdir -p /opt/systemmedia-website
sudo chown -R $USER:www-data /opt/systemmedia-website
git clone https://github.com/Thomash100/systemmedia-web.git /opt/systemmedia-website
cd /opt/systemmedia-website
bash scripts/install-pi.sh
```

Spätere Updates:

```bash
bash scripts/update-pi.sh
```

Das Install-Script kann die Website optional mit HTTP Basic Auth schuetzen. Der vorbereitete Benutzername lautet:

```txt
admin
```

Das Passwort wird beim Installieren auf dem Raspberry Pi abgefragt und nicht im Repository gespeichert.

## Nginx

Siehe `nginx.conf.example`. Fuer HTTPS sollte zusaetzlich Certbot, Plesk oder eine bestehende TLS-Verwaltung genutzt werden.

React-Fallback:

```nginx
try_files $uri $uri/ /index.html;
```

## Docker

Optional kann die Website als Container gebaut werden:

```bash
docker compose up -d --build
```

Der Container liefert die gebaute Website intern ueber Caddy aus.

## Rechtliches

`/impressum` und `/datenschutz` sind bewusst als Platzhalter angelegt. Vor Livegang muessen echte, rechtlich korrekte Inhalte ergaenzt werden.

## Wartung

- Projekt- und Leistungsdaten liegen in `src/data`.
- Subdomain-Routing liegt in `src/utils/hostname.ts`.
- SEO-Metadaten werden domainabhaengig in `src/App.tsx` gesetzt.
- Das Logo liegt unter `public/logo-systemmedia.svg` und kann durch ein finales SVG ersetzt werden.
