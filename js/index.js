document.addEventListener("scroll", function () {
  const logo = document.querySelector(".logo");
  if (window.scrollY > 50) {
    logo.classList.add("scrolled");
  } else {
    logo.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelectorAll(".carousel-inner");
  carouselInner.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelectorAll(".carousel-inner");
  carouselInner.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000);
  });
});
