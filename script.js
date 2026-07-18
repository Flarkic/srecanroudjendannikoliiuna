
const razlozi = [
    "Tvoj osmeh koji popravi i najgori dan.",
    "To što si uvek pozitivna i posebna.",
    "Tvoj smisao za humor.",
    "Kad cemo da napravimo galeriju nasih slika? 😉",
    "Najlepša si 🥰",

];

const jos = [
    "Hocu jos!!",
    "JOS",
    "daj mi jos komplimenata"
]

function kliknuo() {
    let kartica = document.querySelector(".card");
    kartica.classList.add("hidden");
    let karticav2 = document.querySelector(".cardv2");
    karticav2.classList.remove("hidden");
}

function random() {
    let poruka;
    let randomIndex = Math.floor(Math.random() * razlozi.length);
    poruka = razlozi[randomIndex];
    let randomIndex2 = Math.floor(Math.random() * jos.length);
    let tekst2 = jos[randomIndex2];
    let tekst = document.querySelector(".cardv2 .poruka");
    let dugme = document.querySelector(".cardv2 button");
    tekst.innerHTML = poruka;
    dugme.innerText = tekst2;
}