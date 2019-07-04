console.log('self>>>>',self)
let urlParams = new URLSearchParams(self.location.search);
let myParam = urlParams.get('pagename');
console.log('myParam2',myParam);

self.addEventListener('install', async e => {
    
    return self.skipWaiting();
});
self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('message', function(event){
    console.log("SW Received Message: " + event.data);
});
