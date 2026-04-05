
// sw.js - MIU_33 MATRIX // V1.3 MASTER // FINAL LOCK
// AUTHOR: Miu Lián Ruì // PROJECT: OMISSION
const CACHE_NAME = 'miu33_matrix_v1_locked';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/images/MIU_DATA_VILLA_BLUEPRINT.jpg',
  '/images/MIU_EXPERIMENT_LOG_PHOENIX.jpg',
  '/images/MIU_COMMAND_POSTER_V2.jpg',
  '/images/MIU_HUD_INTERFACE_ALFA.jpg',
  '/videos/MIU_HERO_SYSTEM_BYPASS_V1.mp4',
  '/videos/MODULE_01_CHRONOS_PRECISION.mp4',
  '/videos/MODULE_02_VELOCITY_CARBON.mp4',
  '/videos/MODULE_03_ARMANI_PRIVE_SYNC.mp4',
  '/videos/MODULE_04_AURELIA_SENSORY.mp4'
];

// 1. INSTALL: Resilient caching of the Carbon ecosystem
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('⚡ SW: IGNITING_VAULT_CACHE');
      // allSettled prevents one missing video from breaking the entire installation
      return Promise.allSettled(
        CORE_ASSETS.map(url => cache.add(url))
      );
    }).then(() => self.skipWaiting())
  );
});

// 2. ACTIVATE: Omission of old system fragments
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('🗑️ SW: OMITTING_OLD_SYSTEM_CACHE:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH: Velocity-First Strategy
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Special Handling for Heavy Media (.mp4 / .jpg)
  if (url.pathname.endsWith('.mp4') || url.pathname.endsWith('.jpg')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Return from cache, or fetch and cache on the fly
        return cachedResponse || fetch(event.request).then((networkResponse) => {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cacheCopy));
          return networkResponse;
        });
      })
    );
  } else {
    // Standard Network-First for Logic (main.js / html) to ensure latest system updates
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});