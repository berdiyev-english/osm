const CACHE_NAME = 'bemem-v5';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/offline.html',
    '/manifest.json',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
    '/icons/apple-touch-icon.png',
    '/icons/favicon.ico',
    '/icons/favicon.svg',
    '/icons/favicon-96x96.png',
    '/bemem-404.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

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

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const dest = event.request.destination;

    // ─── memes.json — ВСЕГДА только сеть, никогда не кэшируем ───
    if (url.pathname === '/memes.json') {
        event.respondWith(
            fetch(event.request)
                .catch(() => new Response(
                    JSON.stringify({ error: 'offline' }),
                    { status: 503, headers: { 'Content-Type': 'application/json' } }
                ))
        );
        return;
    }

    // ─── Картинки — только сеть ───
    if (dest === 'image') {
        event.respondWith(
            fetch(event.request)
                .catch(() => new Response('', { status: 503 }))
        );
        return;
    }

    // ─── Google TTS — только сеть ───
    if (url.hostname.includes('translate.google.com')) {
        event.respondWith(
            fetch(event.request)
                .catch(() => new Response('', { status: 503 }))
        );
        return;
    }

    // ─── Google Fonts — сеть + кэш ───
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

    // ─── Навигация — если офлайн показываем offline.html ───
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .catch(() => caches.match('/offline.html'))
        );
        return;
    }

    // ─── Статика нашего сайта — Cache first ───
    if (url.origin === self.location.origin) {
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) return cached;
                return fetch(event.request).then(response => {
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                }).catch(() => new Response('', { status: 503 }));
            })
        );
        return;
    }

    // ─── Всё остальное — только сеть ───
    event.respondWith(
        fetch(event.request)
            .catch(() => new Response('', { status: 503 }))
    );
});
