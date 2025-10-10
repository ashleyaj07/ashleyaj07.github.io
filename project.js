const carousel = document.getElementById('projectCarousel');
const items = document.querySelectorAll('.project-item');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });

  const itemWidth = items[0].offsetWidth + 48;
  carousel.scrollTo({
    left: currentIndex * itemWidth - (carousel.offsetWidth / 2 - itemWidth / 2),
    behavior: 'smooth'
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});
