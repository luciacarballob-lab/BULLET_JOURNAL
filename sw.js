/* Bujo service worker. Sube VERSION en cada entrega para refrescar la caché offline. */
const VERSION = '0.2.0';
const CACHE = 'bujo-' + VERSION;
const CDN = 'bujo-cdn-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
const CDN_HOSTS = ['unpkg.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  // No se activa solo: la app muestra «Actualizar» y envía SKIP_WAITING.
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('bujo-') && k !== CACHE && k !== CDN).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (e.data?.type === 'GET_VERSION' && e.ports[0]) e.ports[0].postMessage({ version: VERSION });
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Iconos y tipografías del CDN: caché primero (funcionan sin conexión tras la primera carga).
  if (CDN_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.open(CDN).then(async c => {
      const hit = await c.match(req); if (hit) return hit;
      const res = await fetch(req); if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // HTML: red primero (recibe actualizaciones), caché si no hay conexión.
  if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('index.html')) {
    e.respondWith((async () => {
      try {
        const res = await fetch(req, { cache: 'no-store' });
        if (res.ok && req.mode === 'navigate') { const c = await caches.open(CACHE); c.put('./index.html', res.clone()); }
        return res;
      } catch (err) {
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }
  // Resto (iconos, imágenes Bristol): caché primero.
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok && url.pathname.includes('/bristol/')) caches.open(CACHE).then(c => c.put(req, res.clone()));
    return res;
  })));
});
