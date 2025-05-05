const texts = document.querySelectorAll(".logo-text");
const body = document.body;
let index = 0;

// Images de fond associées aux plateformes
const backgrounds = {
    "Pligamstag": "Photo/Pligamstag.jpg",
    "YouTube": "Photo/YTB.jpg",
    "TikTok": "Photo/TikTok.jpg",
    "Instagram": "Photo/Insta.jpg",
    "Twitch": "Photo/Twitch.jpg"
};

window.addEventListener("scroll", () => {
    texts.forEach((text) => text.classList.remove("active", "fade-out"));
    index = Math.min(Math.floor(window.scrollY / window.innerHeight), texts.length - 1);
    texts[index].classList.add("active");

    // Effet de disparition progressive pour les textes précédents
    texts.forEach((text, i) => {
        if (i < index) {
            text.classList.add("fade-out");
        }
    });

    // Changement fluide de l'image de fond
    const currentText = texts[index].textContent;
    if (backgrounds[currentText]) {
        body.style.transition = "background-image 1s ease-in-out";
        body.style.backgroundImage = `url('${backgrounds[currentText]}')`;
    }
});
