// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Modal – remplir les infos depuis le bouton "Voir détails"
document.querySelectorAll(".voir-detail").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("carTitle").textContent = btn.dataset.nom || "";
    document.getElementById("carImage").src = btn.dataset.image || "";
    document.getElementById("carPrix").textContent = btn.dataset.prix || "—";
    document.getElementById("carAnnee").textContent = btn.dataset.annee || "—";
    document.getElementById("carKm").textContent = btn.dataset.km || "—";
    document.getElementById("carPuissance").textContent = btn.dataset.puissance || "—";
    document.getElementById("carOptions").textContent = btn.dataset.options || "—";
    new bootstrap.Modal(document.getElementById("carModal")).show();
  });
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

// Fonction pour défiler vers une slide
function goToSlide(i) {
  index = (i + slides.length) % slides.length; // boucle
  slider.scrollTo({
    left: slides[index].offsetLeft,
    behavior: 'smooth'
  });
}

// Flèches
nextBtn.addEventListener('click', () => goToSlide(index + 1));
prevBtn.addEventListener('click', () => goToSlide(index - 1));

// Défilement automatique
setInterval(() => {
  goToSlide(index + 1);
}, 4000); // toutes les 4 secondes


