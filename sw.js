
//INSTALACION DEL SERVICE WORKER
self.addEventListener('install', () =>{
 cvonsole.log('Service Worker install');
});


//ACTIVACION DE NUESTRO SERVICE WORKER
self.addEventListener('activate', () => {
    console.log('Service Worker activate');
});

//CACHE ONLY 
self.addEventListener('fetch', event =>{
    //VERIFICAMOS SI ES IGUAL ALGUN RECURSO EN CACHE
    event.respondWith(caches.match(event.request));
});

//NETWORK ONLY
self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
  });