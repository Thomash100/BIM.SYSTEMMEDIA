#!/usr/bin/env bash
set -euo pipefail

APP_NAME="systemmedia-website"
APP_DIR="${APP_DIR:-/opt/systemmedia-website}"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CADDYFILE_SOURCE="${REPO_DIR}/Caddyfile.raspberrypi.example"
AUTH_CADDYFILE_SOURCE="${REPO_DIR}/Caddyfile.raspberrypi.auth.example"

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
if [[ ! -f "${AUTH_CADDYFILE_SOURCE}" && -f "${APP_DIR}/Caddyfile.raspberrypi.auth.example" ]]; then
  AUTH_CADDYFILE_SOURCE="${APP_DIR}/Caddyfile.raspberrypi.auth.example"
fi

read -r -p "Webseite mit Benutzername/Passwort schuetzen? [y/N] " ENABLE_AUTH
if [[ "${ENABLE_AUTH,,}" == "y" || "${ENABLE_AUTH,,}" == "yes" || "${ENABLE_AUTH,,}" == "j" ]]; then
  echo "Benutzername: admin"
  read -r -s -p "Passwort fuer admin: " ADMIN_PASSWORD
  echo
  if [[ -z "${ADMIN_PASSWORD}" ]]; then
    echo "Passwort darf nicht leer sein." >&2
    exit 1
  fi

  ADMIN_HASH="$(caddy hash-password --plaintext "${ADMIN_PASSWORD}")"
  sudo cp "${AUTH_CADDYFILE_SOURCE}" /etc/caddy/Caddyfile
  sudo sed -i "s|__SYSTEMMEDIA_ADMIN_HASH__|${ADMIN_HASH}|g" /etc/caddy/Caddyfile
else
  sudo cp "${CADDYFILE_SOURCE}" /etc/caddy/Caddyfile
fi
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl enable caddy
sudo systemctl restart caddy

echo "==> Fertig."
echo "Webroot: ${APP_DIR}/dist"
echo "Pruefen: curl -I http://localhost"
