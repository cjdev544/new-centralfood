if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const d=e=>a(e,t),r={module:{uri:t},exports:n,require:d};s[t]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/100-70b99413df730d45.js",revision:"70b99413df730d45"},{url:"/_next/static/chunks/100-70b99413df730d45.js.map",revision:"cf901ff49f14245660df7b7d42582411"},{url:"/_next/static/chunks/146.5b172d9547513494.js",revision:"5b172d9547513494"},{url:"/_next/static/chunks/146.5b172d9547513494.js.map",revision:"cf106019a773d5e571a73279c66d91c5"},{url:"/_next/static/chunks/183.28b20d9ea3fd69d7.js",revision:"28b20d9ea3fd69d7"},{url:"/_next/static/chunks/183.28b20d9ea3fd69d7.js.map",revision:"908d78470627c2ba8058737a3ae9fbff"},{url:"/_next/static/chunks/21.84c246b05b804fe7.js",revision:"84c246b05b804fe7"},{url:"/_next/static/chunks/21.84c246b05b804fe7.js.map",revision:"4642d88706c6e5c56d2fc65d08421cf5"},{url:"/_next/static/chunks/238.5770c6e959d7f528.js",revision:"5770c6e959d7f528"},{url:"/_next/static/chunks/238.5770c6e959d7f528.js.map",revision:"f71260af49c2775d690c88d44e26577a"},{url:"/_next/static/chunks/253-15a800b9073d4eb6.js",revision:"15a800b9073d4eb6"},{url:"/_next/static/chunks/253-15a800b9073d4eb6.js.map",revision:"fd9c0e91f637ea0f491a3a23cae9d71b"},{url:"/_next/static/chunks/264.74dd5d5db6adb8ad.js",revision:"74dd5d5db6adb8ad"},{url:"/_next/static/chunks/264.74dd5d5db6adb8ad.js.map",revision:"e73d5cfe541285573436a00b242fd64a"},{url:"/_next/static/chunks/277.7924423316d9fedc.js",revision:"7924423316d9fedc"},{url:"/_next/static/chunks/277.7924423316d9fedc.js.map",revision:"bcfaee89d81f0bb95f1d61ede105937a"},{url:"/_next/static/chunks/285.0f2539d62c4890aa.js",revision:"0f2539d62c4890aa"},{url:"/_next/static/chunks/285.0f2539d62c4890aa.js.map",revision:"a53dd4f9ec1c222202f1eeb4bad25ff0"},{url:"/_next/static/chunks/298-82f321f7fa850941.js",revision:"82f321f7fa850941"},{url:"/_next/static/chunks/298-82f321f7fa850941.js.map",revision:"9ce46d695db89d570f80efce5d641b86"},{url:"/_next/static/chunks/316.9189c4604130c5ea.js",revision:"9189c4604130c5ea"},{url:"/_next/static/chunks/316.9189c4604130c5ea.js.map",revision:"da88e8b888ca7846c82f02d616af11ea"},{url:"/_next/static/chunks/37.8cff731c7951bca0.js",revision:"8cff731c7951bca0"},{url:"/_next/static/chunks/37.8cff731c7951bca0.js.map",revision:"1f7baa928ac7eaefe6bda2913fb863f5"},{url:"/_next/static/chunks/406.56556d5039914584.js",revision:"56556d5039914584"},{url:"/_next/static/chunks/406.56556d5039914584.js.map",revision:"c360281dff7ac8a8d7ae3b03e844f39c"},{url:"/_next/static/chunks/459.3e32b8f1389bd8f2.js",revision:"3e32b8f1389bd8f2"},{url:"/_next/static/chunks/459.3e32b8f1389bd8f2.js.map",revision:"57059ceaa5bf3affe6788ac986a1076c"},{url:"/_next/static/chunks/512-54e1c346e7f1e380.js",revision:"54e1c346e7f1e380"},{url:"/_next/static/chunks/512-54e1c346e7f1e380.js.map",revision:"d86e77e536a4ff05b961025696378759"},{url:"/_next/static/chunks/553.d185a6d95d0ad429.js",revision:"d185a6d95d0ad429"},{url:"/_next/static/chunks/553.d185a6d95d0ad429.js.map",revision:"cd74f0b23b47be317c8bd9fb85e04b3a"},{url:"/_next/static/chunks/648.d5120f9558ea81e1.js",revision:"d5120f9558ea81e1"},{url:"/_next/static/chunks/648.d5120f9558ea81e1.js.map",revision:"ba17ba1591020d69f88506b32c8de15a"},{url:"/_next/static/chunks/675-096f5af9b624f46c.js",revision:"096f5af9b624f46c"},{url:"/_next/static/chunks/675-096f5af9b624f46c.js.map",revision:"727e13cba15089148407e94ab8de7c30"},{url:"/_next/static/chunks/769-5580eaa03ecfb87d.js",revision:"5580eaa03ecfb87d"},{url:"/_next/static/chunks/769-5580eaa03ecfb87d.js.map",revision:"0129024878fd3c174ee193f1ee357bfb"},{url:"/_next/static/chunks/821.868a444920366126.js",revision:"868a444920366126"},{url:"/_next/static/chunks/821.868a444920366126.js.map",revision:"7a1548b4a9341482e69ca266edfc6cae"},{url:"/_next/static/chunks/881-de3940be781427ee.js",revision:"de3940be781427ee"},{url:"/_next/static/chunks/924.88ae5bcfda49ca7a.js",revision:"88ae5bcfda49ca7a"},{url:"/_next/static/chunks/924.88ae5bcfda49ca7a.js.map",revision:"d672093f43656ae606641638044e8235"},{url:"/_next/static/chunks/framework-04549d2825545de6.js",revision:"04549d2825545de6"},{url:"/_next/static/chunks/framework-04549d2825545de6.js.map",revision:"d68fb1d274a66a4514e3ffcc82772144"},{url:"/_next/static/chunks/main-b0a973ec7749da57.js",revision:"b0a973ec7749da57"},{url:"/_next/static/chunks/main-b0a973ec7749da57.js.map",revision:"a360a2495785f3e3ac65e72d4d66a19f"},{url:"/_next/static/chunks/pages/%5Brestaurant%5D-a2fb7eb208e5603f.js",revision:"a2fb7eb208e5603f"},{url:"/_next/static/chunks/pages/%5Brestaurant%5D-a2fb7eb208e5603f.js.map",revision:"c9cc24b246c98221f98ffa80d5e43f07"},{url:"/_next/static/chunks/pages/_app-b724dd35a82234e8.js",revision:"b724dd35a82234e8"},{url:"/_next/static/chunks/pages/_error-8424de76bcca9f83.js",revision:"8424de76bcca9f83"},{url:"/_next/static/chunks/pages/_error-8424de76bcca9f83.js.map",revision:"d36f12481a86b20a2035327b74bc4f3f"},{url:"/_next/static/chunks/pages/carrito-e77c3202ab15fb2d.js",revision:"e77c3202ab15fb2d"},{url:"/_next/static/chunks/pages/carrito-e77c3202ab15fb2d.js.map",revision:"924e6aebcf5cabc7c237bee76fae7431"},{url:"/_next/static/chunks/pages/cuenta-415431d39b9d393a.js",revision:"415431d39b9d393a"},{url:"/_next/static/chunks/pages/cuenta-415431d39b9d393a.js.map",revision:"7a8273edb884f0e6681afff4b8db5dab"},{url:"/_next/static/chunks/pages/derecho-desistimiento-7eb2b163085fa813.js",revision:"7eb2b163085fa813"},{url:"/_next/static/chunks/pages/derecho-desistimiento-7eb2b163085fa813.js.map",revision:"e54837b8fa2f183070fb34d7703775cf"},{url:"/_next/static/chunks/pages/index-46b9a4a23a72f869.js",revision:"46b9a4a23a72f869"},{url:"/_next/static/chunks/pages/index-46b9a4a23a72f869.js.map",revision:"aac6704384d6e98bde4d770148ef5fee"},{url:"/_next/static/chunks/pages/pedidos-5d82d7b4be3b3ec3.js",revision:"5d82d7b4be3b3ec3"},{url:"/_next/static/chunks/pages/pedidos-5d82d7b4be3b3ec3.js.map",revision:"aa0785995ef3b8b57dfb835dfa03f5b2"},{url:"/_next/static/chunks/pages/politica-cookies-66f2cb3419d1c17f.js",revision:"66f2cb3419d1c17f"},{url:"/_next/static/chunks/pages/politica-cookies-66f2cb3419d1c17f.js.map",revision:"b6f763b21377c2a9261026fe89213a5f"},{url:"/_next/static/chunks/pages/politica-privacidad-ad42af25a77c4fb4.js",revision:"ad42af25a77c4fb4"},{url:"/_next/static/chunks/pages/politica-privacidad-ad42af25a77c4fb4.js.map",revision:"901392a56c99b4f7f1620b08eb78d4e7"},{url:"/_next/static/chunks/pages/restaurantes-2cf84716753adc8e.js",revision:"2cf84716753adc8e"},{url:"/_next/static/chunks/pages/restaurantes-2cf84716753adc8e.js.map",revision:"4ab5a4ed8ce7c290c030f08e99e2ce56"},{url:"/_next/static/chunks/pages/terminos-condiciones-44b7ab0e1bd308e9.js",revision:"44b7ab0e1bd308e9"},{url:"/_next/static/chunks/pages/terminos-condiciones-44b7ab0e1bd308e9.js.map",revision:"927605acd28fa75653eff4bd7a5fe25c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-78ecd725dc32e875.js",revision:"78ecd725dc32e875"},{url:"/_next/static/chunks/webpack-78ecd725dc32e875.js.map",revision:"1afd7d0da2eca7ff787704caae5c76cb"},{url:"/_next/static/css/0d477b7aa6461b0a.css",revision:"0d477b7aa6461b0a"},{url:"/_next/static/css/0d477b7aa6461b0a.css.map",revision:"5b380425b55bf28cb286aaea59d97e72"},{url:"/_next/static/css/1998f71b3aeb9a9c.css",revision:"1998f71b3aeb9a9c"},{url:"/_next/static/css/1998f71b3aeb9a9c.css.map",revision:"79d038b2b7ce203bab9c725636995e91"},{url:"/_next/static/css/1c0727c5618a8bb9.css",revision:"1c0727c5618a8bb9"},{url:"/_next/static/css/1c0727c5618a8bb9.css.map",revision:"0ed44416641b2d87eb903864915ad5fa"},{url:"/_next/static/css/1dc5d0e19c679e06.css",revision:"1dc5d0e19c679e06"},{url:"/_next/static/css/1dc5d0e19c679e06.css.map",revision:"8a286ecf9b672efcb2f20d5cf7f9ffc9"},{url:"/_next/static/css/448533a20caafb64.css",revision:"448533a20caafb64"},{url:"/_next/static/css/448533a20caafb64.css.map",revision:"6de27e4e36cc0e07dd5229fcdaef96de"},{url:"/_next/static/css/567d4df31b92ace5.css",revision:"567d4df31b92ace5"},{url:"/_next/static/css/567d4df31b92ace5.css.map",revision:"5a0ba4e82996c4993e240a6ec20856be"},{url:"/_next/static/css/764b42e97e13e1e2.css",revision:"764b42e97e13e1e2"},{url:"/_next/static/css/764b42e97e13e1e2.css.map",revision:"1cc42f13ee10954d4cf58621ea8bdbe8"},{url:"/_next/static/css/813d4dad44e3ad7d.css",revision:"813d4dad44e3ad7d"},{url:"/_next/static/css/813d4dad44e3ad7d.css.map",revision:"dfb6ca77c9ee2f95bcc2211d0d694339"},{url:"/_next/static/css/90df9dccb9b5ef97.css",revision:"90df9dccb9b5ef97"},{url:"/_next/static/css/90df9dccb9b5ef97.css.map",revision:"5d4f849245b22ddf1afa7b3dbaed9c53"},{url:"/_next/static/css/99508cec8171bb4c.css",revision:"99508cec8171bb4c"},{url:"/_next/static/css/99508cec8171bb4c.css.map",revision:"a595baed316ad70af72c35e2c9ded067"},{url:"/_next/static/css/9e29cc010223ddc6.css",revision:"9e29cc010223ddc6"},{url:"/_next/static/css/9e29cc010223ddc6.css.map",revision:"ab0992717378d1386259e67ea25469de"},{url:"/_next/static/css/ad52934df7998fa8.css",revision:"ad52934df7998fa8"},{url:"/_next/static/css/ad52934df7998fa8.css.map",revision:"51787bbbc838f6da91ede879ca77727e"},{url:"/_next/static/css/ae7508a42c1d27a2.css",revision:"ae7508a42c1d27a2"},{url:"/_next/static/css/ae7508a42c1d27a2.css.map",revision:"8b8dd6a3647bb6bd2966f9818cdf3413"},{url:"/_next/static/css/b6917036cb7a0e07.css",revision:"b6917036cb7a0e07"},{url:"/_next/static/css/b6917036cb7a0e07.css.map",revision:"4e212039c074391f0d59f577250208f2"},{url:"/_next/static/css/c72179e10b3ddb23.css",revision:"c72179e10b3ddb23"},{url:"/_next/static/css/c72179e10b3ddb23.css.map",revision:"3b18bac52b09740a3a8434121298ae31"},{url:"/_next/static/css/ed1d1996e50fc80e.css",revision:"ed1d1996e50fc80e"},{url:"/_next/static/css/ed1d1996e50fc80e.css.map",revision:"7fa0a48bc0ffd3c0e2dc3497defac9f3"},{url:"/_next/static/css/f212d1c7dbb4474c.css",revision:"f212d1c7dbb4474c"},{url:"/_next/static/css/f212d1c7dbb4474c.css.map",revision:"b209343804634368aaf1bf9f014451a7"},{url:"/_next/static/css/f34df884a53a016b.css",revision:"f34df884a53a016b"},{url:"/_next/static/css/f34df884a53a016b.css.map",revision:"7ff82d4c4df00ef7ec56439bab960414"},{url:"/_next/static/media/arepa2.15e27f7c.jpg",revision:"7d31c52adea39e94706aced3906a6a1a"},{url:"/_next/static/media/cachapa.39316ab7.jpg",revision:"e618e5cac3aa3c01378cd94ebcf3d7dc"},{url:"/_next/static/media/centralfood.14fe8591.svg",revision:"1889fff407934a467b0be1f973d75c4d"},{url:"/_next/static/media/centralfood10.ddd10436.svg",revision:"5fd9da877c54165c0231bf0a3b5fa584"},{url:"/_next/static/media/fondo.7f508796.jpg",revision:"7f508796"},{url:"/_next/static/media/logo-guaywok.3cad408c.svg",revision:"8333dfb078ef28f4100f40b70fc265e0"},{url:"/_next/static/media/logo-hamburgueseria.78d60b97.svg",revision:"3877129f2c1cc03e0b5df9103fb8b7dd"},{url:"/_next/static/media/logo-sabor.a05c8486.svg",revision:"b858903b39330a764a7d452da6ec3763"},{url:"/_next/static/media/logo-sushi.5515ac05.svg",revision:"9045d61ad137f5d92445bb72ed6685c9"},{url:"/_next/static/media/menu-ley.d749c9b1.png",revision:"ecde1a4fa72342454cc25caabc03544a"},{url:"/_next/static/media/moto.9f94a4a0.svg",revision:"b8a91e87106315bf949a016aed5dbfb4"},{url:"/_next/static/media/no-image.6622adbb.png",revision:"08441b705aab86a94ad6e4f1293d43c5"},{url:"/_next/static/vPlKNJ0TdTA1ed01cpagb/_buildManifest.js",revision:"bbfeb78e992dbf2a491808e3a49d5b49"},{url:"/_next/static/vPlKNJ0TdTA1ed01cpagb/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/arepa2.jpg",revision:"7d31c52adea39e94706aced3906a6a1a"},{url:"/cachapa.jpg",revision:"e618e5cac3aa3c01378cd94ebcf3d7dc"},{url:"/centralfood.svg",revision:"1889fff407934a467b0be1f973d75c4d"},{url:"/centralfood10.svg",revision:"5fd9da877c54165c0231bf0a3b5fa584"},{url:"/favicon.ico",revision:"2cfe2ba4946328ec3707e84ca2dd0144"},{url:"/fondo.jpg",revision:"a8c2c774683222f609e18dbce9e2f836"},{url:"/icon.png",revision:"d0e34ff97c139fa49ce1261587f666fe"},{url:"/icons/icon-192x192.png",revision:"5173aca044ab0db53220d61c57bec8ee"},{url:"/icons/icon-384x384.png",revision:"2b7cfbc4fa57eb8944aae87c1dcc45b3"},{url:"/icons/icon-512x512.png",revision:"7d7770371006ee8117252561a05d2928"},{url:"/logo-guaywok.svg",revision:"8333dfb078ef28f4100f40b70fc265e0"},{url:"/logo-hamburgueseria.svg",revision:"3877129f2c1cc03e0b5df9103fb8b7dd"},{url:"/logo-sabor.svg",revision:"b858903b39330a764a7d452da6ec3763"},{url:"/logo-sushi.svg",revision:"9045d61ad137f5d92445bb72ed6685c9"},{url:"/manifest.json",revision:"d6277305aefe10020860366b13149d12"},{url:"/menu-ley.png",revision:"ecde1a4fa72342454cc25caabc03544a"},{url:"/moto.svg",revision:"b8a91e87106315bf949a016aed5dbfb4"},{url:"/no-image.png",revision:"08441b705aab86a94ad6e4f1293d43c5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
