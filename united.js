
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
    behavior: 'smooth',
  });
}

// Flèches
nextBtn.addEventListener('click', () => goToSlide(index + 1));
prevBtn.addEventListener('click', () => goToSlide(index - 1));

// Défilement automatique
setInterval(() => {
  goToSlide(index + 1);
}, 4000); // toutes les 4 secondes

