var version = '2.1';
var amp_version = '2.1';
var NOTIFYVISITORS_BRAIND_ID = '7073';
var _nvClientConfig = {
    auth: {
        bid: '7073',
        bid_e: '6BFF3FDBE438069E70302411AEFCEC17',
        t: "420"
    },
    data: {},
    cPubKey: '',
}

importScripts('https://cdnp.notifyvisitors.com/js/brand_hosted/amp-push-worker.js');
importScripts('https://cdnp.notifyvisitors.com/js/brand_hosted/push-worker.js');
importScripts('https://s3.amazonaws.com/notifypush/cache_worker/config-7073.js');
importScripts('https://cdnp.notifyvisitors.com/js/brand_hosted/cache-worker.js');
const cacheName='news-v1';const staticAssets=[];self.addEventListener('install',async e=>{const cache=await caches.open(cacheName);await cache.addAll(staticAssets);return self.skipWaiting();});self.addEventListener('activate',e=>{self.clients.claim();});self.addEventListener('fetch',async e=>{const req=e.request;const url=new URL(req.url);if(url.origin===location.origin){e.respondWith(cacheFirst(req));}else{e.respondWith(networkAndCache(req));}});async function cacheFirst(req){const cache=await caches.open(cacheName);const cached=await cache.match(req);return cached||fetch(req);}
async function networkAndCache(req){const cache=await caches.open(cacheName);try{const fresh=await fetch(req);await cache.put(req,fresh.clone());return fresh;}catch(e){const cached=await cache.match(req);return cached;}}
