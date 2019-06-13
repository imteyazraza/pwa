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
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});
