fetch("data.json")

.then(response => response.json())

.then(data => {

    let container = document.getElementById("container");

    data.inventions.forEach(item => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <h2>${item.title}</h2>

            <h3>${item.inventor}</h3>

            <img src="${item.image}" alt="${item.title}">

            <p>${item.description}</p>

            <audio controls>
                <source src="${item.audio}" type="audio/mpeg">
            </audio>

        `;

        container.appendChild(card);

    });

});



let deferredPrompt;

const installBtn = document.getElementById("installBtn");



window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    deferredPrompt = e;

    installBtn.style.display = "inline-block";

});



installBtn.addEventListener("click", async () => {

    if (deferredPrompt) {

        deferredPrompt.prompt();

        deferredPrompt = null;

        installBtn.style.display = "none";

    }

});



if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker.js")

        .then(() => {

            console.log("Service Worker Registered");

        });

    });

}