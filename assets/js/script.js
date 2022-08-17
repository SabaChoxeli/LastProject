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

// const progressBar = document.querySelectorAll(".skills");

// function renderSkills() {
//   progressBar.addEventListener("scroll", () => {
//     if ((window.scrollY = 570)) {
//       progressBar.classList.add("active");
//     }
//   });
// }

// renderSkills();

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

const modalOpenBtn = document.querySelector(".button"),
  modal = document.querySelector(".modal"),
  modalCloseBtn = document.querySelector(".close-modal");

// function openModal() {
//   modal.classList.add("pop-up");
// }

// function closeModal() {
//   modal.classList.remove("pop-up");
// }

function dynamicOpenModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.add("pop-up");
    const modalCloseBtn = modal.querySelector(".close-modal");
    modalCloseBtn.addEventListener("click", () => {
      dynamicCloseModal(selector);
    });
  }
}

function dynamicCloseModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.remove("pop-up");
  }
}

modalOpenBtn.addEventListener("click", () => {
  dynamicOpenModal(".modal");
});

const userUsername = document.getElementById("username"),
  userEmail = document.getElementById("useremail"),
  userWebsite = document.getElementById("userwebsite"),
  userText = document.getElementById("userText"),
  form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault;
  let userData = {
    name: userUsername.value,
    mail: userEmail.value,
    website: userWebsite.value,
    text: userText.value,
  };
  registerUser(userData);
  form.reset();
});

async function registerUser(userData) {
  try {
    const send = await fetch("http://borjomi.loremipsum.ge/api/send-message", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataFrom = await res.JSON();
    console.log(dataFrom);
    // await Response.JSON();
  } catch (e) {
    console.log("Eroor - ", e);
  }
}
