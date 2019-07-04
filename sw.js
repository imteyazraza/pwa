console.log('self>>>>',self)
let str = self.location.search;
console.log('str',str);

let urlParams = new URLSearchParams(self.location.search);
console.log('urlParams',urlParams);
let myParam = urlParams.get('myParam');


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
