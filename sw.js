const CACHE_NAME = 'bemem-v2';

// Кешируем только самое необходимое для офлайн работы
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/memes.js',
  '/manifest.json',
  '/icon/icon-192.png',
  '/icon/icon-512.png',
  '/icon/apple-touch-icon.png',
  '/icon/favicon.ico',
  '/icon/favicon.svg',
  '/icon/favicon-96x96.png'
];

// Установка — кешируем статику
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Активация — чистим старые кеши
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch — главная логика
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Картинки мемов — ТОЛЬКО сеть, не кешируем
  // Если нет сети — просто 503, overlay покажет JS
  const isMemeImage =
    url.hostname.includes('imgur') ||
    url.hostname.includes('i.redd.it') ||
    url.hostname.includes('preview.redd.it') ||
    url.hostname.includes('external-preview.redd.it') ||
    url.hostname.includes('i.ibb.co') ||
    url.hostname.includes('imgflip.com');

  if (isMemeImage) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('', { status: 503 }))
    );
    return;
  }

  // Google TTS — только сеть, не кешируем (звук онлайн)
  if (url.hostname.includes('translate.google.com')) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('', { status: 503 }))
    );
    return;
  }

  // Google Fonts — сеть + кеш
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        }).catch(() => new Response('', { status: 503 }));
      })
    );
    return;
  }

  // Всё остальное (HTML, JS, иконки) — Cache first
  // Если офлайн и нет кеша — возвращаем index.html
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Офлайн — отдаём главную страницу
        // JS на странице сам покажет overlay
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        return new Response('', { status: 503 });
      });
    })
  );
});
