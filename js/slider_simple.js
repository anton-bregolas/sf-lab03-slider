// An array containing the collection of projects:

let arrProjects = [{
  img: "./images/projects-admiral.png",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don <br>LCD admiral",
  area: "81 m2",
  time: "3.5 months"
}, {
  img: "./images/projects-thieves.png",
  title: "Sochi Thieves",
  city: "Sochi <br>Thieves",
  area: "105 m2",
  time: "4 months"
}, {
  img: "./images/projects-patriotic.png",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don <br>Patriotic",
  area: "93 m2",
  time: "3 months"
}];

// Setting wrappers for querySelectors:

const sectionProjectsSlider = document.querySelector(".projects");

let sliderImages = sectionProjectsSlider.querySelector(".projects-img-box");
let sliderTitles = sectionProjectsSlider.querySelector(".projects-nav-title");
let sliderArrowLeft = sectionProjectsSlider.querySelector(".arrow-left");
let sliderArrowRight = sectionProjectsSlider.querySelector(".arrow-right");
let sliderDots = sectionProjectsSlider.querySelector(".projects-bullets");
let detailsCity = sectionProjectsSlider.querySelector("#city");
let detailsArea = sectionProjectsSlider.querySelector("#area");
let detailsTime = sectionProjectsSlider.querySelector("#time");
let detailsCost = sectionProjectsSlider.querySelector("#cost");

// Set initial project to be loaded (0-2):

let currentIndex = 0

// Main slider loading function:

function initSimpleSlider() {
  
  loadProject(0, true);
  loadArrows();
  loadDots();
  loadTitles();

}

// Move dots and navigation titles:

function updateNavigation() {

  sliderTitles.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".active").classList.remove("active");
  sliderTitles.querySelector(`#nav-title-0${currentIndex}`).classList.add("active");
  sliderDots.querySelector(`#nav-item-0${currentIndex}`).classList.add("active");
}

// Load images and insert descriptions:

function loadProject (index, init) {

  sliderImages.style.backgroundImage = `url(${arrProjects[index].img})`;
  detailsCity.innerHTML = arrProjects[index].city;
  detailsArea.innerHTML = arrProjects[index].area;
  detailsTime.innerHTML = arrProjects[index].time; 
  detailsCost.innerHTML = "Upon request";
  !init? updateNavigation() : console.log(`Slider successfully initiated.`);
}

// Set event listeners for arrows:

function loadArrows() {

  sliderArrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;

    } else {
      currentIndex = arrProjects.length - 1;
    }
    loadProject(currentIndex);
  });

  sliderArrowRight.addEventListener('click', () => {
    if (currentIndex < (arrProjects.length - 1)) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    loadProject(currentIndex);
  });
}

// Set event listeners for dots:

function loadDots() {

  sliderDots.querySelectorAll(".projects-bullet").forEach((dot) => {
    dot.addEventListener('click', () => {
      let dotIndex = dot.id.slice(-1);
      currentIndex = dotIndex;
      loadProject(currentIndex);
    });
  });
}

// Set event listeners for navigation titles:

function loadTitles() {
  
  sliderTitles.querySelectorAll(".projects-nav-link").forEach((title) => {
    title.addEventListener('click', () => {
      let titleIndex = title.id.slice(-1);
      currentIndex = titleIndex;
      loadProject(currentIndex);
    });
  });
}

// Load the slider right after HTML is parsed: 

document.addEventListener("DOMContentLoaded", function() {
  initSimpleSlider();
});