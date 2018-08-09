importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "jordanhinks",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.6ad197fd7957d7db32fd.js",
    "revision": "f9f4d779d1835503a9b7db62dd3f00f0"
  },
  {
    "url": "/_nuxt/layouts_default.959e1c13a8262dce2d40.js",
    "revision": "714ff2ce3abd0bce149fcc59761fc56a"
  },
  {
    "url": "/_nuxt/manifest.80538511bcf53e928c17.js",
    "revision": "e42fa36d3062f2c37fd71f06488928cb"
  },
  {
    "url": "/_nuxt/pages_index.dab96a0a5f3374e0c074.js",
    "revision": "2b9089fcbca40fbe98265f3a1293c556"
  },
  {
    "url": "/_nuxt/vendor.b5482c66b857afdc5018.js",
    "revision": "a1b834f74593ee493656b6926b4036bf"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

