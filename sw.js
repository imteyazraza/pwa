console.log('self>>>>',self)
let str = self.location.pathname.split('/')[2];
console.log('str',str);
if(str != 'about.html'){
self.addEventListener('install', async e => {
    
    return self.skipWaiting();
});
self.addEventListener('activate', e => {
    self.clients.claim();
});
self.addEventListener('fetch', async e => {
    
});
}
