
//INSTALACION DEL SERVICE WORKER
self.addEventListener('install', () =>{
 console.log('Service Worker install');

 const _FILES = ["index.html", "style.css", "index,js"];

 const _APP_SHELL = caches
 .open(_CACHE_NAME)
 .then((cache) => cache.addAll(_FILES));

 event.waitUntil(_APP_SHELL);
});


//ACTIVACION DE NUESTRO SERVICE WORKER
self.addEventListener('activate', () => {
    console.log('Service Worker activate');
});

//CACHE ONLY 
/*self.addEventListener('fetch', event =>{
    //VERIFICAMOS SI ES IGUAL ALGUN RECURSO EN CACHE
    event.respondWith(caches.match(event.request));
}); */

//NETWORK ONLY
/*self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
  });*/


  self.addEventListener("fetch", (event) =>{
     /*
    
    //cache firts 

      const response = caches.match(event.request).then( res => {
          console.log('Existe el request  '+ event.request)
          console.log(res);
      })
       
    .catch( res => {
    console.log('No existe el request  '+ event-request)
    console.log(res);
    }); */


    event.respondWith(
        caches.match(event.request).then(cacheResponse   => {
            return cacheResponse || fetch(event.request)
        })
    );


    //network first

    self.addEventListener('fetch' , event =>  {
        event.respondWith(
            fetch(event.request).then(networkResponse => {
                return networkResponse  || caches.match(event.request)
            })
        );
    })

  });  


 


