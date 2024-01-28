document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");
  let isTransparent = false;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const headerHeight = header.clientHeight;

    if (scrollPosition > headerHeight && !isTransparent) {
      header.style.backgroundColor = "rgba(29, 29, 29, 0.9)";
      isTransparent = true;
    } else if (scrollPosition <= headerHeight && isTransparent) {
      header.style.backgroundColor = "rgba(29, 29, 29, 1)";
      isTransparent = false;
    }
  });

  var collapsibleContainers = document.querySelectorAll(
    ".collapsible-container"
  );

  // Iterate through each collapsible container
  collapsibleContainers.forEach(function (container, index) {
    var collapsibleContent = container.querySelector(".collapsible-content");
    var collapseBtn = container.querySelector(".down");

    container.addEventListener("click", function () {
      // Toggle the visibility of the collapsible content
      if (collapsibleContent.style.maxHeight) {
        collapsibleContent.style.maxHeight = null;
        container.style.gap = null; 
        collapseBtn.classList.remove("up"); 
        collapseBtn.classList.add("down");
      } else {
        // Set max-height to the scrollHeight to reveal the content
        collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
        container.style.gap = `25px`;
        collapseBtn.classList.remove("down");
        collapseBtn.classList.add("up");
      }
      // Close other collapsible sections when one is opened
      closeOtherCollapsibles(index);
    });
  });

  function closeOtherCollapsibles(currentIndex) {
    // Close other collapsibles except the one at the currentIndex
    collapsibleContainers.forEach(function (container, index) {
      if (index !== currentIndex) {
        var otherCollapsibleContent = container.querySelector(
          ".collapsible-content"
        );
        var collapseBtn = container.querySelector(".up");
        if(collapseBtn){
          otherCollapsibleContent.style.maxHeight = null;        
          collapseBtn.classList.remove("up");
          collapseBtn.classList.add("down");
        }
      }
    });
  }

  //   burger menu
  const burger = document.querySelector(".burger");
  const navContent = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    navContent.classList.toggle("active");
    burger.classList.toggle("active");
  });
  //   slider

  const sliderContent = [
    {
      img1: "images/sliderImgs/usaid.png",
      img2: "images/sliderImgs/spaceint.png",
      img3: "images/sliderImgs/tnet.png",
    },
    {
      img1: "images/sliderImgs/tegeta.png",
      img2: "images/sliderImgs/spectre.png",
      img3: "images/sliderImgs/tbc_lizing.png",
    },
    {
      img1: "images/sliderImgs/ufc.png",
    },
  ];

  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let currentState = 0;

  let loop = setInterval(loopSlider, 2500);
  function loopSlider() {
    slides.classList.add("enter");
    setTimeout(() => {
      currentState != 2 ? currentState++ : (currentState = 0);
      slides.classList.remove("enter");
      slides.innerHTML = Object.keys(sliderContent[currentState]).map(
        (e, i) => `<img src=${sliderContent[currentState][e]} />`
      );
    }, 500);
  }

  function stopLoop() {
    clearInterval(loop);
    setTimeout(() => {
      loop = setInterval(loopSlider, 2500);
    }, 500);
  }
  dots.forEach((e, i) => {
    e.addEventListener("click", () => {
      slides.classList.add("enter");
      setTimeout(() => {
        currentState = i;
        slides.classList.remove("enter");
        slides.innerHTML = Object.keys(sliderContent[currentState]).map(
          (e, i) => `<img src=${sliderContent[currentState][e]} />`
        );
      }, 500);
      stopLoop();
    });
  });

  nextBtn.addEventListener("click", () => {
    slides.classList.add("enter");
    setTimeout(() => {
      currentState != 2 ? currentState++ : (currentState = 0);
      slides.classList.remove("enter");
      slides.innerHTML = Object.keys(sliderContent[currentState]).map(
        (e, i) => `<img src=${sliderContent[currentState][e]} />`
      );
    }, 500);
    stopLoop();
  });

  prevBtn.addEventListener("click", () => {
    slides.classList.add("enter");
    setTimeout(() => {
      currentState != 0 ? currentState-- : (currentState = 2);
      slides.classList.remove("enter");
      slides.innerHTML = Object.keys(sliderContent[currentState]).map(
        (e, i) => `<img src=${sliderContent[currentState][e]} />`
      );
    }, 500);
    stopLoop();
  });

  slides.innerHTML = Object.keys(sliderContent[currentState]).map(
    (e, i) => `<img src=${sliderContent[currentState][e]} />`
  );
});
