console.log('self>>>>',self)
let urlParams = new URLSearchParams(self.location.search);
let myParam = urlParams.get('pagename');
console.log('myParam',myParam);

self.addEventListener('install', async e => {
    
    return self.skipWaiting();
});
self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('message', ({ data }) => {
    console.log('data>>>>>>>>>>>>>>>>>>>>>.');
  if (data == 'remove-fetch-event') {
    self.removeEventListener('fetch', fetchHandler);
  }else{
    self.addEventListener('fetch', fetchHandler);
  }
});

function fetchHandler(){

}
