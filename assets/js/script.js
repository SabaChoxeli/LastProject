const sliders = document.querySelectorAll(".slider-item");
let activeIndex = 0,
  autoSlidingId = null,
  isImgsSliding = true;

function renderSlides() {
  sliders.forEach((el, i) => {
    if (i === activeIndex) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function nextSlide() {
  if (activeIndex === sliders.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  renderSlides();
}

function startSliding() {
  autoSlidingId = setInterval(nextSlide, 5000);
  isImgsSliding = true;
}

startSliding();

// const progressBar = document.getElementById("skills");

// progressBar.addEventListener("click", () => {
//   progressBar.classList.add("active");
// });
