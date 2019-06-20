const cacheName = 'news-v1';
self.addEventListener('install', async e => {
    
    return self.skipWaiting();
});
self.addEventListener('activate', e => {
    self.clients.claim();
});
self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        
    } else {
       
    }
});
