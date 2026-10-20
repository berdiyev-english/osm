/* BeMem Service Worker v7
 * Что нового:
 *  — memes.json: stale-while-revalidate → мгновенная загрузка + мемы работают офлайн
 *  — картинки мемов: cache-first с ограничением кэша → лента грузится мгновенно при повторных визитах
 *  — страницы (about и др.) кэшируются и доступны офлайн
 *  — Font Awesome (cdnjs) кэшируется → иконки работают офлайн
 */
const CACHE_NAME = 'bemem-v7';
const IMG_CACHE = 'bemem-img-v1';
const IMG_LIMIT = 400;

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/offline.html',
    '/about.html',
    '/404.html',
    '/manifest.json',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
    '/icons/apple-touch-icon.png',
    '/icons/favicon.ico',
    '/icons/favicon.svg',
    '/icons/favicon-96x96.png',
    '/bemem-404.png',
    // Font Awesome — чтобы иконки работали офлайн
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/webfonts/fa-solid-900.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/webfonts/fa-regular-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/webfonts/fa-brands-400.woff2'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            // addAll падал целиком, если хотя бы одного файла не было на сервере.
            // Грузим по одному — отсутствующие файлы не ломают установку SW.
            .then(cache => Promise.allSettled(STATIC_ASSETS.map(u => cache.add(u))))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME && key !== IMG_CACHE)
                    .map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

// Ограничение кэша картинок — удаляем самые старые записи
async function trimImgCache() {
    const cache = await caches.open(IMG_CACHE);
    const keys = await cache.keys();
    if (keys.length > IMG_LIMIT) {
        await Promise.all(keys.slice(0, keys.length - IMG_LIMIT).map(k => cache.delete(k)));
    }
}

async function cacheImage(request) {
    try {
        const response = await fetch(request);
        if (response.ok || response.type === 'opaque') {
            const cache = await caches.open(IMG_CACHE);
            cache.put(request, response.clone());
            trimImgCache();
        }
        return response;
    } catch (e) {
        return new Response('', { status: 503 });
    }
}

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const dest = event.request.destination;

    // Только GET
    if (event.request.method !== 'GET') return;

    // ─── memes.json — stale-while-revalidate: мгновенно из кэша + свежее в фоне ───
    if (url.pathname === '/memes.json') {
        event.respondWith(
            caches.open(CACHE_NAME).then(async cache => {
                const cached = await cache.match('/memes.json');
                const network = fetch(event.request).then(res => {
                    if (res.ok) cache.put('/memes.json', res.clone());
                    return res;
                }).catch(() => null);

                if (cached) {
                    // Кэш есть — отдаём сразу; свежая версия уходит в кэш
                    // и будет показана при следующем открытии приложения
                    network.catch(() => {});
                    return cached;
                }
                const res = await network;
                if (res) return res;
                return new Response(JSON.stringify({ error: 'offline' }), {
                    status: 503,
                    headers: { 'Content-Type': 'application/json' }
                });
            })
        );
        return;
    }

    // ─── Картинки — cache-first (работают офлайн, лента грузится мгновенно) ───
    if (dest === 'image') {
        event.respondWith(
            caches.match(event.request).then(cached =>
                cached || cacheImage(event.request)
            )
        );
        return;
    }

    // ─── Google TTS — только сеть ───
    if (url.hostname.includes('translate.google.com')) {
        event.respondWith(
            fetch(event.request).catch(() => new Response('', { status: 503 }))
        );
        return;
    }

    // ─── Google Fonts / cdnjs (Font Awesome) — кэш-first ───
    if (url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com') ||
        url.hostname.includes('cdnjs.cloudflare.com')) {
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

    // ─── Навигация — сеть, затем кэш, затем offline-страница ───
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(res => {
                    // Кэшируем успешные HTML-страницы своего сайта
                    if (res.ok && url.origin === self.location.origin) {
                        const clone = res.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return res;
                })
                .catch(() =>
                    caches.match(event.request)
                        .then(cached => cached || caches.match('/offline.html'))
                )
        );
        return;
    }

    // ─── Статика нашего сайта — cache-first ───
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
        fetch(event.request).catch(() => new Response('', { status: 503 }))
    );
});
