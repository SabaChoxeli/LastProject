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

const squareButton = document.querySelectorAll(".square-button"),
  profiles = document.querySelectorAll(".recom-profiles");

squareButton.forEach((el, i) => {
  el.addEventListener("click", () => {
    changeSquare(i);
  });
});

function changeSquare(nextIndex) {
  activeIndex = nextIndex;
  renderButtons();
}

function renderButtons() {
  profiles.forEach((el, i) => {
    if (activeIndex === i) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  squareButton.forEach((el, i) => {
    if (activeIndex === i) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

console.log("sqd");
