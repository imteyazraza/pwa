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
}else{
    console.log('innnn3333')
sself.addEventListener('install', async e => {
    
    return null;
});
self.addEventListener('activate', e => {
    return null;
});
self.addEventListener('fetch', async e => {
    
});
}
