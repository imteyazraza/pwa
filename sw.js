console.log('self>>>>',self)
const urlParams = new URLSearchParams(self.location.search);
const myParam = urlParams.get('pagename');
if(myParam != 'about.html'){
self.addEventListener('install', async e => {
    
    return self.skipWaiting();
});
self.addEventListener('activate', e => {
    self.clients.claim();
});
self.addEventListener('fetch', async e => {
    
});
}
