console.log('self>>>>',self)
let urlParams = new URLSearchParams(self.location.search);
let myParam = urlParams.get('pagename');
console.log('myParam',myParam);
if(myParam != 'about.html'){
    console.log('innnn')
self.addEventListener('install', async e => {
    
    return self.skipWaiting();
});
self.addEventListener('activate', e => {
    self.clients.claim();
});
self.addEventListener('fetch', async e => {
    
});
}
