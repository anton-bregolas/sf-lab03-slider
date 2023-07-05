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

let currentIndex = 0

const updateNavigation = (index) => {
  sliderTitles.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".active").classList.remove("active");
  // sliderTitles.querySelector(`.nav-title-0${index}`).classList.add("active");
  // sliderDots.querySelector(`.nav-item-0${index}`).classList.add("active");
}

const loadProject = (index, init) => {
  sliderImages.style.backgroundImage = `url(${arrProjects[index].img})`;
  detailsCity.innerHTML = arrProjects[index].city;
  detailsArea.innerHTML = arrProjects[index].area;
  detailsTime.innerHTML = arrProjects[index].time; 
  detailsCost.innerHTML = "Upon request";
  !init? updateNavigation(currentIndex) : console.log(`Slider successfully initiated.`);
}

loadProject(0, true);

sliderArrowLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    loadProject(currentIndex - 1);
    currentIndex -= 1;
  } else {
    loadProject(arrProjects.length - 1);
    currentIndex = arrProjects.length - 1;
  }
})

sliderArrowRight.addEventListener('click', () => {
  if (currentIndex < arrProjects.length - 1) {
    loadProject(currentIndex + 1);
    currentIndex += 1;
  } else {
    loadProject(0);
    currentIndex = 0;
  }
})