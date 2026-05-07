# SYSTEMMEDIA auf Raspberry Pi installieren

Empfohlenes Setup: Raspberry Pi OS Lite 64-bit, Caddy als Webserver, statischer Build aus `dist/`.

Die Website braucht keine Datenbank und keinen dauerhaft laufenden Node-Prozess. Node.js ist auf dem Pi nur nötig, wenn du den Build direkt auf dem Pi erzeugen willst. Einfacher ist: lokal oder per GitHub Actions bauen und nur `dist/` auf den Pi kopieren.

## 1. Voraussetzungen

- Raspberry Pi mit Raspberry Pi OS Lite 64-bit
- feste lokale IP oder DHCP-Reservierung im Router
- Portweiterleitung im Router:
  - TCP 80 auf den Pi
  - TCP 443 auf den Pi
- DNS zeigt auf deine öffentliche IP:
  - `systemmedia.de`
  - `www.systemmedia.de`
  - `bim.systemmedia.de`
  - `ifc.systemmedia.de`
  - `automation.systemmedia.de`
  - `projects.systemmedia.de`

Wenn deine Internet-IP regelmäßig wechselt, brauchst du zusätzlich Dynamic DNS oder musst die DNS-A-Records aktualisieren.

## 2. Raspberry Pi vorbereiten

Auf dem Pi einloggen:

```bash
ssh pi@<pi-ip>
```

System aktualisieren:

```bash
sudo apt update
sudo apt full-upgrade -y
sudo reboot
```

Nach dem Neustart wieder einloggen.

## 3. Installation direkt aus GitHub-Repository

Wenn dein Repository öffentlich ist:

```bash
sudo mkdir -p /opt/systemmedia-website
sudo chown -R $USER:www-data /opt/systemmedia-website
git clone https://github.com/Thomash100/systemmedia-web.git /opt/systemmedia-website
cd /opt/systemmedia-website
bash scripts/install-pi.sh
```

Das Install-Script fragt, ob die Website per Benutzername/Passwort geschuetzt werden soll.
Wenn du bestaetigst, wird dieser Benutzer verwendet:

```txt
admin
```

Das Passwort wird nur auf dem Raspberry Pi abgefragt und als Caddy-Hash in `/etc/caddy/Caddyfile` eingetragen. Es wird nicht im GitHub-Repository gespeichert.

Wenn dein Repository privat ist, nutze stattdessen SSH mit Deploy Key:

```bash
sudo mkdir -p /opt/systemmedia-website
sudo chown -R $USER:www-data /opt/systemmedia-website
git clone git@github.com:Thomash100/systemmedia-web.git /opt/systemmedia-website
cd /opt/systemmedia-website
bash scripts/install-pi.sh
```

Spätere Updates:

```bash
cd /opt/systemmedia-website
bash scripts/update-pi.sh
```

Die Skripte verwenden standardmäßig:

```bash
APP_DIR=/opt/systemmedia-website
BRANCH=main
```

Bei Bedarf überschreiben:

```bash
APP_DIR=/srv/systemmedia BRANCH=main bash scripts/update-pi.sh
```

## 4. Caddy manuell installieren

Caddy bringt automatische HTTPS-Zertifikate mit. Für Raspberry Pi OS/Debian kann das offizielle Caddy-APT-Repository genutzt werden.

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install -y caddy
```

Prüfen:

```bash
caddy version
systemctl status caddy --no-pager
```

## 5. Website-Verzeichnis anlegen

```bash
sudo mkdir -p /opt/systemmedia-website/dist
sudo chown -R $USER:www-data /opt/systemmedia-website
sudo chmod -R 755 /opt/systemmedia-website
```

## 6. Website bauen und auf den Pi kopieren

Auf deinem Entwicklungsrechner im Projektordner:

```bash
cd systemmedia-website
npm ci
npm run build
```

Dann den Inhalt von `dist/` auf den Pi kopieren:

```bash
scp -r dist/* pi@<pi-ip>:/opt/systemmedia-website/dist/
```

Alternativ sauber synchronisieren, falls `rsync` verfügbar ist:

```bash
rsync -az --delete dist/ pi@<pi-ip>:/opt/systemmedia-website/dist/
```

Wichtig: Auf dem Server muss der Inhalt aus `dist/` liegen. Nicht den ungebaute Vite-Quellcode als Webroot ausliefern.

## 7. Caddy konfigurieren

Diese Datei aus dem Repository verwenden:

```txt
Caddyfile.raspberrypi.example
```

Mit Passwortschutz fuer den Benutzer `admin`:

```txt
Caddyfile.raspberrypi.auth.example
```

Auf den Pi kopieren:

```bash
scp Caddyfile.raspberrypi.example pi@<pi-ip>:/tmp/Caddyfile
ssh pi@<pi-ip>
sudo cp /tmp/Caddyfile /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

## 8. Testen

Auf dem Pi:

```bash
curl -I http://localhost
```

Von außen:

```bash
curl -I https://systemmedia.de
curl -I https://bim.systemmedia.de
curl -I https://ifc.systemmedia.de
curl -I https://automation.systemmedia.de
curl -I https://projects.systemmedia.de
```

Die HTML-Datei muss gebaute Assets referenzieren, zum Beispiel:

```html
<script type="module" src="/assets/index-....js"></script>
```

Wenn dort `/src/main.tsx` steht, wird der falsche Ordner ausgeliefert.

## 9. Aktualisieren

Bei jeder Änderung:

```bash
npm run build
rsync -az --delete dist/ pi@<pi-ip>:/opt/systemmedia-website/dist/
```

Caddy muss danach normalerweise nicht neu gestartet werden, weil nur statische Dateien geändert wurden.

## 10. Sicherheit

- SSH nur mit Schlüssel verwenden
- Standardpasswort ändern
- Router nur Ports 80 und 443 weiterleiten
- Caddy aktuell halten:

```bash
sudo apt update
sudo apt upgrade -y
```
