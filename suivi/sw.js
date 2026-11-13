// Service worker minimal : permet l'installation. Toujours le réseau d'abord.
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>self.clients.claim());
self.addEventListener("fetch",e=>{});
