import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDir = resolve('dist');
const routes = ['impressum', 'datenschutz'];

await Promise.all(
  routes.map(async (route) => {
    const routeDir = resolve(distDir, route);
    await mkdir(routeDir, { recursive: true });
    await copyFile(resolve(distDir, 'index.html'), resolve(routeDir, 'index.html'));
  }),
);
