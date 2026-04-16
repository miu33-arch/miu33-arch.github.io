const CACHE_NAME = 'miu33-v1';
const ASSETS = [
  '/',
  '/index.html',
  'https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js',
  // Add paths to your logo or main CSS if they are local files
];

// Install: Saving the assets to the browser's memory
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate: Cleaning up old versions
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Fetch: Serving the "Cached" version if the internet fails
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
