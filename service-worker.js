importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script' ||
                     request.destination === 'style'||
                     request.destination === 'image',
    new workbox.strategies.CacheFirst()
)
