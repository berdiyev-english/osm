const CACHE_NAME = 'bemem-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/memes.js',
  '/manifest.json',
  '/icon/favicon.ico',
  '/icon/favicon.svg',
  '/icon/favicon-96x96.png',
  '/icon/icon-192.png',
  '/icon/icon-512.png',
  '/icon/apple-touch-icon.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Картинки мемов — только network
  if (
    url.hostname.includes('imgur') ||
    url.hostname.includes('i.redd') ||
    url.hostname.includes('reddit') ||
    url.pathname.includes('/meme-img/')
  ) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('', { status: 503 }))
    );
    return;
  }

  // Всё остальное — Cache first, потом network
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
