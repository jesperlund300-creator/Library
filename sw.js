// MyLibrary Service Worker v3
// Network first always — ensures updates are immediate
const CACHE = 'mylibrary-v3';

self.addEventListener('install', e=>{
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e=>{
  if(!e.request.url.startsWith(self.location.origin)) return;
  // Always try network first, fall back to cache only if offline
  e.respondWith(
    fetch(e.request, {cache: 'no-cache'})
      .then(res=>{
        if(res.ok){
          const clone = res.clone();
          caches.open(CACHE).then(c=>c.put(e.request, clone));
        }
        return res;
      })
      .catch(()=>caches.match(e.request))
  );
});
