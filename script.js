// Sélection des éléments du carrousel
const carousel = document.querySelector('.carousel');
const carouselContent = carousel.querySelector('.carousel-content');
const carouselItems = carousel.querySelectorAll('.carousel-item');

// Sélection des boutons de navigation
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Largeur d'un élément du carrousel (à ajuster selon les besoins)
const carouselItemWidth = carouselItems[0].offsetWidth;

// Nombre d'éléments visibles à la fois dans le carrousel (à ajuster selon les besoins)
const visibleItems = 3;

// Nombre total d'éléments dans le carrousel
const totalItems = carouselItems.length;

// Index du premier élément visible dans le carrousel
let startIndex = 0;

// Fonction pour déplacer le carrousel vers la gauche
function moveCarouselLeft() {
  if (startIndex > 0) {
    startIndex--;
    carouselContent.style.transform = `translateX(-${startIndex * carouselItemWidth}px)`;
  }
}

// Fonction pour déplacer le carrousel vers la droite
function moveCarouselRight() {
  if (startIndex < totalItems - visibleItems) {
    startIndex++;
    carouselContent.style.transform = `translateX(-${startIndex * carouselItemWidth}px)`;
  }
}

// Ajout des écouteurs d'événements pour les boutons de navigation
prevButton.addEventListener('click', moveCarouselLeft);
nextButton.addEventListener('click', moveCarouselRight);
