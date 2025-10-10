const text = "the portfolio of a 21-year-old visual designer";
const typedText = document.getElementById("typed-text");
const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enter-btn");

let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 60); 
  } else {
    setTimeout(() => {
      enterBtn.classList.remove("hidden");
      enterBtn.style.opacity = "0";
      enterBtn.style.transition = "opacity 1s ease";
      setTimeout(() => {
        enterBtn.style.opacity = "1";
      }, 50);
    }, 500);
  }
}

window.addEventListener("load", () => {
  typedText.textContent = "";
  index = 0;
  type();
});

enterBtn.addEventListener("click", () => {
  enterBtn.style.opacity = "0";
  intro.style.opacity = "0";
  intro.style.transition = "opacity 1s ease";
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000);
});

const cards = document.querySelectorAll('.project-card');
const title = document.getElementById('projectTitle');
const desc = document.getElementById('projectDesc');

const projectData = {
  p1: {
    title: 'Brand Identity',
    desc: 'A vibrant brand system built for a sustainable fashion start-up. Includes logo, palette, typography, and web mockups.'
  },
  p2: {
    title: 'UI Dashboard',
    desc: 'An analytics dashboard with clean data visualization, minimal colors, and responsive layout.'
  },
  p3: {
    title: 'Motion Design',
    desc: 'A series of animated micro-interactions and loading states designed for a mobile fintech app.'
  },
  p4: {
    title: '3D Visualization',
    desc: 'Product renders and lighting compositions built in Blender for modern advertising campaigns.'
  }
};

cards.forEach(card => {
  card.addEventListener('click', () => {
    document.querySelector('.project-card.active')?.classList.remove('active');
    card.classList.add('active');

    const id = card.dataset.content;
    title.textContent = projectData[id].title;
    desc.textContent = projectData[id].desc;
  });
});
