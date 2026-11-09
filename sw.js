// Offline support. Network first (so updates you push show up), cache as fallback.
const CACHE = 'peek-inside-v2';
const FILES = ['./', 'index.html', 'css/style.css', 'js/iso.js', 'js/app.js', 'js/things/airport.js',
  'manifest.json', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Let Safari stream the voice recordings directly (it needs partial/range requests).
  if (e.request.url.includes('/audio/')) return;
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
