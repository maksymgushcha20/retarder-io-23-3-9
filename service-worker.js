/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "9e840527ea873206d7cc7cfd395150f0"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "397b14c956f77a8df0317c5cfe7e2bcb"
  },
  {
    "url": "assets/css/0.styles.99ae6825.css",
    "revision": "9d09f0a8141eb9cedfa968794e9857fa"
  },
  {
    "url": "assets/img/image-1.93eeb65d.png",
    "revision": "93eeb65d63450d7ca8ab71b3d41ad90d"
  },
  {
    "url": "assets/img/image-10.2349412b.png",
    "revision": "2349412b27b5a6025f05b1bba55ddb11"
  },
  {
    "url": "assets/img/image-2.901d2bd8.png",
    "revision": "901d2bd86f99556d530917010b7b9654"
  },
  {
    "url": "assets/img/image-3.f2c737e1.png",
    "revision": "f2c737e1a440fa6aea4f000e5b4c32b7"
  },
  {
    "url": "assets/img/image-4.1469a863.png",
    "revision": "1469a86304ffa2035ce2735f1324c9ca"
  },
  {
    "url": "assets/img/image-5.74b45639.png",
    "revision": "74b456391c90e6609e57404c875a91e1"
  },
  {
    "url": "assets/img/image-6.b643cc93.png",
    "revision": "b643cc93156b8efc4fded3a45f25b8e4"
  },
  {
    "url": "assets/img/image-7.ed278ee3.png",
    "revision": "ed278ee3abcb1bafb7e8fcfbf664f90c"
  },
  {
    "url": "assets/img/image-8.c0156909.png",
    "revision": "c0156909c860d0811fb2df64e877ff52"
  },
  {
    "url": "assets/img/image-9.73363aa0.png",
    "revision": "73363aa071aef514d61780a01ef6435b"
  },
  {
    "url": "assets/img/Relation.235c8aaa.svg",
    "revision": "235c8aaa4816a3294299154ff94df419"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.969eb352.js",
    "revision": "b93f0ad6cc7fa061ebbfe4cbba60db62"
  },
  {
    "url": "assets/js/11.13ec7079.js",
    "revision": "19db36806306dd7c120e1e8206e1d65f"
  },
  {
    "url": "assets/js/12.a5329e46.js",
    "revision": "935f0c1dbb7f8da131ae30fd59bd262c"
  },
  {
    "url": "assets/js/13.1c677f04.js",
    "revision": "166ca43365c4a44065523496975355a1"
  },
  {
    "url": "assets/js/14.feec8449.js",
    "revision": "a92d34174fdfc7015174ba7721b7d889"
  },
  {
    "url": "assets/js/15.cb8ff6d3.js",
    "revision": "1b8869ed39373fa183c8762c28350b19"
  },
  {
    "url": "assets/js/16.506b8e70.js",
    "revision": "6a4f98f7640402abdd1074d8a9dd85b0"
  },
  {
    "url": "assets/js/17.cb92ddae.js",
    "revision": "2d93d723c1db234dac20d168a566aa67"
  },
  {
    "url": "assets/js/18.24c163ea.js",
    "revision": "85c37dd86961085b18c5903f8b86fe42"
  },
  {
    "url": "assets/js/19.00a49181.js",
    "revision": "d61248fda60a9f5ecfcfdc7242605fb9"
  },
  {
    "url": "assets/js/2.5cea2162.js",
    "revision": "ea577ccaa82e2d517999a3bdf16f6d07"
  },
  {
    "url": "assets/js/20.c0eb47fa.js",
    "revision": "81e4f0a9543d14c135ef0d39cbbde156"
  },
  {
    "url": "assets/js/21.8b95b46b.js",
    "revision": "aaf067b215297f80e2c7319b5e4763e9"
  },
  {
    "url": "assets/js/22.f9fb6ac0.js",
    "revision": "46131235d6e5f3bb989305bce0bf96f9"
  },
  {
    "url": "assets/js/23.f2456421.js",
    "revision": "80d00ee38fd6c8dc5ad699a1aa3cfd30"
  },
  {
    "url": "assets/js/24.c81ce379.js",
    "revision": "1ac36c46747e881199792372d87884f9"
  },
  {
    "url": "assets/js/25.0389799b.js",
    "revision": "ca686ab38b642c670e8369a5c519eb84"
  },
  {
    "url": "assets/js/27.586e392c.js",
    "revision": "2ed34c309a59c251f7089399a1c045ef"
  },
  {
    "url": "assets/js/3.6be49c33.js",
    "revision": "a71848db4fcee26bc57d217bdcbb3947"
  },
  {
    "url": "assets/js/4.f16840a6.js",
    "revision": "f2ac66f093667aa717ec887f927c3972"
  },
  {
    "url": "assets/js/5.ba388717.js",
    "revision": "8a80f1b997abebf613d6ccbe2eddba50"
  },
  {
    "url": "assets/js/6.3138ada7.js",
    "revision": "0f75011999482f098d4e81225698b23a"
  },
  {
    "url": "assets/js/7.bbbabc6e.js",
    "revision": "32cd1ea0ff8ec688370f08e0e81bbff4"
  },
  {
    "url": "assets/js/8.3ecb0a0b.js",
    "revision": "b2d126b73290941f1d2af7c38158255b"
  },
  {
    "url": "assets/js/9.b27284f8.js",
    "revision": "810bcf1f1fb3763be01117ea59c5699c"
  },
  {
    "url": "assets/js/app.ac19ad88.js",
    "revision": "3b76bdf078661d6ee394585299053766"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4ab3328147c66860d3049fae944d2820"
  },
  {
    "url": "design/index.html",
    "revision": "292505d522767f1a0020d841c41eb871"
  },
  {
    "url": "index.html",
    "revision": "86e12aaee5b20e0ef3df09bd76bcf684"
  },
  {
    "url": "intro/index.html",
    "revision": "e8ba00139ca2c6d2f784cc0e831bd12a"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8b08d3f5e79f01ef1a5dcc03c59206a8"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "837c44dd8b743da0fd6995f5e87df685"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "baed7675690cca3bda58af85e3602cbf"
  },
  {
    "url": "software/index.html",
    "revision": "335709158c68753dce552d8887667a09"
  },
  {
    "url": "test/index.html",
    "revision": "d7689c2dec31587d4a49f3d757ae6a6b"
  },
  {
    "url": "use cases/index.html",
    "revision": "3625a154f1e0dbd206fbf341ee52b2f7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
