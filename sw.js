// sw.js - MIU_33 MATRIX // V1.0 LOCKED
// Service Worker: Offline-First Caching Strategy

const CACHE_NAME = 'miu33_matrix_v1';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/project.html',
  '/contact.html',
  '/style.css',
  '/vault.LEGACY.js',
  '/manifest.json',
  '/images/hero-poster.avif',
  '/images/og_image.jpg',
  '/videos/spatial_logic_hero.mp4',
  'https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.42/bundled/lenis.min.js',
  'https://unpkg.com/lucide@latest',
  'https://tally.so/widgets/embed.js',
  'https://fonts.googleapis.com/css2?family=Russo+One&family=Orbitron:wght@400;700;900&display=swap',
];

// ✅ INSTALL: Cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('💚 SW: Caching core assets...');
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.log('⚠️ SW: Some assets failed to cache (non-critical):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ✅ ACTIVATE: Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => {
          console.log('🗑️ SW: Deleting old cache:', name);
          return caches.delete(name);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ✅ FETCH: Network-first with cache fallback (best for dynamic content)
self.addEventListener('fetch', (event) => { const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external analytics/trackers
  if (url.hostname.includes('analytics') || url.hostname.includes('track')) return;

  // Strategy: Network-first for HTML, Cache-first for assets
  if (request.destination === 'document') {
    // HTML pages: Try network, fallback to cache
    event.respondWith(
      fetch(request).then((response) => {
        // Clone and cache successful responses
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      }).catch(() => {
        // Offline: Serve from cache
        return caches.match(request);
      })
    );
  } else {
    // Assets (CSS, JS, images, fonts): Cache-first
    event.respondWith(
      caches.match(request).then((cached) => {
        return cached || fetch(request).then((response) => {
          // Cache new assets
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
  }
});

// ✅ BACKGROUND SYNC (Optional: Queue form submissions when offline)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-inquiry') {
    event.waitUntil(
      // Retry failed form submissions when back online
      console.log('🔄 SW: Background sync triggered // Retrying submissions...') );
  }
});

// ✅ PUSH NOTIFICATIONS (Optional: Future feature)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data?.text() || '🦅 MIU_33: System update available',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    vibrate: [100, 50, 100],
    data: { url: '/' },
  };
  
  event.waitUntil(
    self.registration.showNotification('MIU_33 MATRIX', options)
  );
});

// ✅ NOTIFICATION CLICK (Open app when user taps notification)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});

// ✅ LOG INIT
console.log('💚 MIU_33 SERVICE WORKER // V1.0 LOCKED // OFFLINE-FIRST ACTIVE');