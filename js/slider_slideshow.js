let projects = [{
  url: "./images/projects-admiral.png",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don <br>LCD admiral",
  area: "81 m2",
  time: "3.5 months",
  cost: "Upon request"
}, {
  url: "./images/projects-thieves.png",
  title: "Sochi Thieves",
  city: "Sochi <br>Thieves",
  area: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "./images/projects-patriotic.png",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don <br>Patriotic",
  area: "93 m2",
  time: "3 months",
  cost: "Upon request"
}];

function initSlider(options) {

  let pause = options.pause;
  let interval = options.autoplayInterval;
  let playInterval = null;

  const sliderWrapper = document.querySelector(".projects");

  let sliderImages = sliderWrapper.querySelector(".projects-img-box");
  let sliderArrows = sliderWrapper.querySelector(".projects-arrow-nav");
  let sliderDots = sliderWrapper.querySelector(".projects-bullets");
  let sliderTitles = sliderWrapper.querySelector(".projects-nav-title");

  let detailsCity = sliderWrapper.querySelector("#city");
  let detailsArea = sliderWrapper.querySelector("#area");
  let detailsTime = sliderWrapper.querySelector("#time");
  let detailsCost = sliderWrapper.querySelector("#cost");

  initImages();
  initArrows();
  initDots();
  initTitles();
  initDetails();
  createAutoButton();

  if (!pause) {
    playInterval = setInterval(initAutoplay, interval);
  }

  function initImages() {
    projects.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" 
      style="background-image:url(${projects[index].url});
      "data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".projects-arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("arrow-left")) {
          nextNumber = curNumber === 0? projects.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === projects.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    projects.forEach((project, index) => {
      let dot = `<div class="projects-bullet n${index} ${index === 0? "active" : ""}" 
      data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".projects-bullet").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  function initTitles() {
    projects.forEach((project, index) => {
      let navTitle = `<li class="title projects-nav-item">
      <a class="nav-item-title n${index} ${index === 0? "active" : ""}" 
      data-index="${index}">${project.title}</a></li>`;
      sliderTitles.innerHTML += navTitle;
    });
    sliderTitles.querySelectorAll(".nav-item-title").forEach(title => {
      title.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  function initDetails() {

    projects.forEach((project, index) => {

      let initCity = `<p class="projects-subtext text-p 
      n${index} ${index === 0? "active" : ""}" 
      data-index="${index}">${project.city}</p>`;

      let initArea = `<p class="projects-subtext text-p 
      n${index} ${index === 0? "active" : ""}" 
      data-index="${index}">${project.area}</p>`;

      let initTime = `<p class="projects-subtext text-p 
      n${index} ${index === 0? "active" : ""}" 
      data-index="${index}">${project.time}</p>`;

      let initCost = `<p class="projects-subtext text-p 
      n${index} ${index === 0? "active" : ""}" 
      data-index="${index}">${project.cost}</p>`;

      detailsCity.innerHTML += initCity;
      detailsArea.innerHTML += initArea;
      detailsTime.innerHTML += initTime;
      detailsCost.innerHTML += initCost;
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderTitles.querySelector(".active").classList.remove("active");
    sliderTitles.querySelector(".n" + num).classList.add("active");

    detailsCity.querySelector(".active").classList.remove("active");
    detailsCity.querySelector(".n" + num).classList.add("active");
    detailsArea.querySelector(".active").classList.remove("active");
    detailsArea.querySelector(".n" + num).classList.add("active");
    detailsTime.querySelector(".active").classList.remove("active");
    detailsTime.querySelector(".n" + num).classList.add("active");
    detailsCost.querySelector(".active").classList.remove("active");
    detailsCost.querySelector(".n" + num).classList.add("active");
  }

  function createAutoButton() {
    let navButton = `<li class="nav-item-button-play ${pause === false? "active" : ""}">&#9658;</li>`;
    sliderTitles.insertAdjacentHTML("beforeend", navButton);
    sliderTitles.querySelector(".nav-item-button-play").addEventListener("click", toggleAutoplay);
  }

  function initAutoplay() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === projects.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
  }

  function toggleAutoplay() {
    if (pause === false) {
      pause = true;
      clearInterval(playInterval);
      sliderTitles.querySelector(".nav-item-button-play").classList.remove("active");
    } else {
      pause = false;
      sliderTitles.querySelector(".nav-item-button-play").classList.add("active");
      playInterval = setInterval(initAutoplay, interval);
    }
  }
}

let sliderOptions = {
  pause: false,
  autoplayInterval: 2000
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});