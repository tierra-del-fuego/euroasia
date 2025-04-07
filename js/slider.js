let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const mask = document.querySelector('.circle-mask');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  const nextIndex = (slideIndex + 1) % slides.length;
  const newBg = slides[nextIndex].style.backgroundImage;

  const newSlide = document.createElement('div');
  newSlide.className = 'new-slide';
  newSlide.style.backgroundImage = newBg;

  mask.innerHTML = '';
  mask.appendChild(newSlide);
  mask.classList.add('show');

  setTimeout(() => {
    slideIndex = nextIndex;
    showSlide(slideIndex);
  }, 800);
}

setInterval(nextSlide, 6000);
