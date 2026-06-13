const CACHE_NAME = "pwa-cache-v5";

const FILES_TO_CACHE = [

    "/",
    "index.html",
    "style.css",
    "script.js",
    "data.json",
    "manifest.json",

    "images/thomas.png",
    "images/alexG.png",
    "images/nikolaT.png",
    "images/wrightBrothers.png",
    "images/bernersl.png",

    "audio/bulb.mp3",
    "audio/telephone.mp3",
    "audio/ac.mp3",
    "audio/airplane.mp3",
    "audio/web.mp3",

    "icons/icon.png"
];



self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then((cache) => {

            return cache.addAll(FILES_TO_CACHE);

        })

    );

});



self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request)

        .then((response) => {

            return response || fetch(event.request);

        })

    );

});