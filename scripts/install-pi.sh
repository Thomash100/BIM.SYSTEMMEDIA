#!/usr/bin/env bash
set -euo pipefail

APP_NAME="systemmedia-website"
APP_DIR="${APP_DIR:-/opt/systemmedia-website}"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CADDYFILE_SOURCE="${REPO_DIR}/Caddyfile.raspberrypi.example"

if ! command -v sudo >/dev/null 2>&1; then
  echo "sudo wird benoetigt." >&2
  exit 1
fi

echo "==> Installiere Systempakete"
sudo apt update
sudo apt install -y git rsync curl ca-certificates nodejs npm caddy

echo "==> Erzeuge Zielverzeichnis: ${APP_DIR}"
sudo mkdir -p "${APP_DIR}"
sudo chown -R "${USER}:www-data" "${APP_DIR}"
sudo chmod -R 755 "${APP_DIR}"

if [[ "${REPO_DIR}" != "${APP_DIR}" ]]; then
  echo "==> Synchronisiere Repository nach ${APP_DIR}"
  rsync -az --delete \
    --exclude node_modules \
    --exclude dist \
    "${REPO_DIR}/" "${APP_DIR}/"
fi

cd "${APP_DIR}"

echo "==> Installiere npm-Abhaengigkeiten"
npm ci

echo "==> Baue statische Website"
npm run build

echo "==> Installiere Caddy-Konfiguration"
if [[ ! -f "${CADDYFILE_SOURCE}" && -f "${APP_DIR}/Caddyfile.raspberrypi.example" ]]; then
  CADDYFILE_SOURCE="${APP_DIR}/Caddyfile.raspberrypi.example"
fi

sudo cp "${CADDYFILE_SOURCE}" /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl enable caddy
sudo systemctl reload caddy

echo "==> Fertig."
echo "Webroot: ${APP_DIR}/dist"
echo "Pruefen: curl -I http://localhost"
