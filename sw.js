const CACHE_NAME = 'miu33-v3.3-nexus'; // Version bumped for clinical sync
const ASSETS = [
  '/',
  '/index.html',
  '/main.js',
  '/images/icon-512.png', // Crucial for PWA identity
  'https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js',
  'https://cdn.tailwindcss.com' // Cached for mobile speed
];

// 1. INSTALL: Archiving the Core Infrastructure
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Forces the new version to take over immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. ACTIVATE: Deleting Legacy Nodes (Zero-Waste Protocol)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('SW: Purging Legacy Cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH: Sovereign Resilience Protocol
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cache if exists, else fetch from network
      return response || fetch(event.request);
    })
  );
});
