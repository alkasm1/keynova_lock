self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("keynova-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/bg2.png",
        "/icon.png",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
