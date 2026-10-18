/* Bujo service worker. Sube VERSION en cada entrega para refrescar la caché offline. */
const VERSION = '0.3.0';
const CACHE = 'bujo-' + VERSION;
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  // No se activa solo: la app muestra «Actualizar» y envía SKIP_WAITING.
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    // Borra cachés de versiones anteriores y la antigua caché del CDN (ya no se usa: fuentes e iconos van embebidos).
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('bujo-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (e.data?.type === 'GET_VERSION' && e.ports[0]) e.ports[0].postMessage({ version: VERSION });
});

async function cachedShell() {
  return (await caches.match('./index.html')) || (await caches.match('./'));
}

self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  // HTML: red primero (recibe actualizaciones). Si no hay red o el servidor responde con error
  // (p. ej. 404 mientras el repo no existe), se sirve la copia guardada: la app abre igual.
  if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('index.html')) {
    e.respondWith((async () => {
      try {
        const res = await fetch(req, { cache: 'no-store' });
        if (res.ok) {
          if (req.mode === 'navigate') { const c = await caches.open(CACHE); c.put('./index.html', res.clone()); }
          return res;
        }
        return (await cachedShell()) || res;
      } catch (err) {
        return (await cachedShell()) || Response.error();
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
