const CACHE_NAME = 'miu33-v4-cache';
const ASSETS = [
  '/',
  '/index.html',
  '/images/favicon-512.png',
  '/images/og_image.jpg',
  '/videos/homepage_preview.mp4',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js'
];

// INSTALLATION: PRE-CACHE ASSETS
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Forces the new version to take over immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// ACTIVATION: PURGE OLD LOGIC
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// FETCH: SERVE FROM CACHE OR NETWORK
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cache if exists, else fetch from network
      return response || fetch(event.request);
    })
  );
});
