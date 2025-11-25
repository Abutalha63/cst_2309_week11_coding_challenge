let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// show first slide immediately
showSlide(currentSlide);

// rotate every 2 seconds
setInterval(nextSlide, 2000);
