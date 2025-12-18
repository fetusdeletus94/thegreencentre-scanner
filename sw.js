self.addEventListener('install', function(event) {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', function(event) {
  // We can cache requests later; for now just fetch normally
  event.respondWith(fetch(event.request));
});
