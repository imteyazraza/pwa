console.log('self>>>>',self)
let urlParams = new URLSearchParams(self.location.search);
let myParam = urlParams.get('pagename');
console.log('myParadasdm',myParam);

self.addEventListener('install', async e => {
    
    return self.skipWaiting();
});
self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('message', ({ data }) => {
    console.log('data>>>>>>>>>>>>>>>>>>>>>.');
  if (data == 'remove-fetch-event') {
      self.removeEventListener('fetch', async e => {

    });
  }else{
    self.addEventListener('fetch', async e => {

    });
  }
});

function fetchHandler(){

}
