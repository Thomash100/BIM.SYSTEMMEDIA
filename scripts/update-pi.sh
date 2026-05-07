#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/systemmedia-website}"
BRANCH="${BRANCH:-main}"

if [[ ! -d "${APP_DIR}" ]]; then
  echo "APP_DIR existiert nicht: ${APP_DIR}" >&2
  exit 1
fi

cd "${APP_DIR}"

echo "==> Hole aktuelle Version von GitHub"
git fetch origin "${BRANCH}"
git checkout "${BRANCH}"
git pull --ff-only origin "${BRANCH}"

echo "==> Installiere npm-Abhaengigkeiten"
npm ci

echo "==> Baue statische Website"
npm run build

echo "==> Pruefe Caddy und lade neu"
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy

echo "==> Update fertig."
echo "Webroot: ${APP_DIR}/dist"
