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

// Activation du système de scroll
window.addEventListener("scroll", () => {
    texts.forEach((text) => text.classList.remove("active"));
    index = Math.min(Math.floor(window.scrollY / window.innerHeight), texts.length - 1);
    texts[index].classList.add("active");

    // Changement fluide de l'image de fond
    const currentText = texts[index].textContent;
    if (backgrounds[currentText]) {
        body.style.transition = "background-image 1s ease-in-out";
        body.style.backgroundImage = `url('${backgrounds[currentText]}')`;
    }
});
