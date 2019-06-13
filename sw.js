const cacheName = 'news-v1';
self.addEventListener('install', async e => {
    console.log("Thanks for adding Ferns N Petals to your home screen!");
    return self.skipWaiting();
});
self.addEventListener('activate', e => {
    console.log("Activating Ferns N Petals screen widgit!");
    self.clients.claim();
});
self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        //e.respondWith(cacheFirst(req));
    } else {
       // e.respondWith(networkAndCache(req));
    }
});
/*async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}
async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}*/
