const CACHE_NAME = 'bememes-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/memes.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

// Устанавливаем SW и кешируем статику
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Чистим старые кеши
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

// Стратегия: Network first для мемов, Cache first для статики
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Картинки мемов — только network (не кешируем, они тяжёлые)
  if (url.hostname.includes('imgur') || 
      url.hostname.includes('i.redd') ||
      url.pathname.includes('/meme-img/')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response('', { status: 503 });
      })
    );
    return;
  }

  // Статические файлы — Cache first
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
        // Если офлайн и нет кеша — возвращаем главную
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
