// MyLibrary Service Worker
const CACHE = 'mylibrary-v1';
const ASSETS = ['/', '/MyLibrary.html', '/manifest.json', '/icon-192.png', '/icon-512.png'];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e=>{
  // Network first for HTML (get latest), cache fallback for offline
  if(e.request.url.endsWith('.html') || e.request.url.endsWith('/')){
    e.respondWith(
      fetch(e.request)
        .then(res=>{ caches.open(CACHE).then(c=>c.put(e.request,res.clone())); return res; })
        .catch(()=>caches.match(e.request))
    );
    return;
  }
  // Cache first for everything else
  e.respondWith(
    caches.match(e.request).then(cached=>cached||fetch(e.request))
  );
});
