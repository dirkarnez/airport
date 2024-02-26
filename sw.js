importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');


workbox.core.clientsClaim();

self.addEventListener('install', (event) => {
  self.skipWaiting();
  // Additional custom logic if required
});

// self.addEventListener('activate', (event) => {
//     event.waitUntil(self.clients.claim());
//     console.log('Service Worker activated');
// });

// class CustomCacheFirst extends workbox.strategies.CacheFirst {
//   // Override the handle method to handle opaque responses
//   async handle({ event }) {
//     const response = await super.handle({ event });

//     // Check if the response is opaque
//     if (response && response.type === 'opaque') {
//       // Handle the opaque response here
//       // You can choose to cache it or handle it in a different way
//     }

//     return response;
//   }
// }

// registerRoute(
//   ({url}) =>
//     url.origin === 'https://third-party.example.com' &&
//     url.pathname.startsWith('/images/'),
//   new CacheFirst({
//     cacheName: 'image-cache',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );

workbox.routing.registerRoute(
  new RegExp('https://api\.github\.com/repos/'),
  new workbox.strategies.CacheFirst({
    cacheName: 'my-cache',
    plugins: [
      // 0 is for opaque response
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);


// self.addEventListener('message', (event) => {
//   // if (event.data && event.data.type === 'EVAL') {
//   //   event.ports[0].postMessage();
//   // }
//   if (event.data.type === 'CACHE_CACHEFIRST') {
//     pattern = event.data.regexPattern;

//     event.source.postMessage("ok");
//   }
// });

// self.addEventListener('fetch', event => {
//     debugger;
//   // Check if the requested URL matches the pattern
//   if (event.request.url.match(urlPattern)) {
//     event.respondWith(
//       caches.open('my-cache').then(cache => {
//         return cache.match(event.request).then(response => {
//           return response || fetchAndCache(event.request, cache);
//         });
//       })
//     );
//   }
// });


// function fetchAndCache(request, cache) {
//   return fetch(request).then(response => {
//     if (response.status === 200) {
//       cache.put(request, response.clone());
//     }
//     return response;
//   });
// }

