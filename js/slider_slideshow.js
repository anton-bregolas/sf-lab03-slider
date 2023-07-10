// An array containing the collection of projects:

let projects = [{
  url: "./images/projects-admiral.png",
  mob: "./images/projects-admiral-mob.png",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don <br>LCD admiral",
  area: "81 m2",
  time: "3.5 months",
  cost: "Upon request"
}, {
  url: "./images/projects-thieves.png",
  mob: "./images/projects-thieves-mob.png",
  title: "Sochi Thieves",
  city: "Sochi <br>Thieves",
  area: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "./images/projects-patriotic.png",
  mob: "./images/projects-patriotic-mob.png",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don <br>Patriotic",
  area: "93 m2",
  time: "3 months",
  cost: "Upon request"
}];

// Main function loading the slider:

function initSlider(options) {

  let pause = options.pause;
  let interval = options.autoplayInterval;
  let playInterval = null;

  // Optimizing the selectors by limiting the scope of the search:

  const sliderRightSide = document.querySelector(".projects-column-right");
  const sliderLeftSide = document.querySelector(".projects-column-left");

  let sliderImages = sliderRightSide.querySelector(".projects-img-box");
  let sliderMobImages = sliderLeftSide.querySelector(".projects-mob-img-box");
  let sliderTitles = sliderRightSide.querySelector(".projects-nav-title");
  let sliderArrows = sliderLeftSide.querySelector(".projects-arrow-nav");
  let sliderMobArrows = sliderLeftSide.querySelector(".projects-mobile-slider");
  let sliderDots = sliderLeftSide.querySelector(".projects-bullets");

  let detailsCity = sliderLeftSide.querySelector("#city");
  let detailsArea = sliderLeftSide.querySelector("#area");
  let detailsTime = sliderLeftSide.querySelector("#time");
  let detailsCost = sliderLeftSide.querySelector("#cost");

  // List of functions to be executed:

  initImages();
  initMobImages();
  initArrows();
  initMobArrows();
  initDots();
  initTitles();
  initDetails();
  createAutoButton();

  // Setting the autoplay interval via sliderOptions:

  if (!pause) {
    playInterval = setInterval(initAutoplay, interval);
  }

  // Insert project images into the image box using innerHTML:

  // function initImages() {
  //   projects.forEach((image, index) => {
  //     let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" 
  //     style="background-image:url(${projects[index].url});
  //     "data-index="${index}"></div>`;
  //     sliderImages.innerHTML += imageDiv;
  //   });
  // }

  // Insert project images into the image box using appendChild:

  function initImages() {
    projects.forEach((image, index) => {
      let imageElement = document.createElement("div");
      imageElement.classList = `image n${index} ${index? "" : "active"}`; 
      imageElement.dataset.index = index;
      imageElement.style.backgroundImage = `url(${projects[index].url})`;
      sliderImages.appendChild(imageElement);
    });
  }

  // Insert mobile version images into the mobile image box using appendChild:

  function initMobImages() {
    projects.forEach((image, index) => {
      let imageElement = document.createElement("div");
      imageElement.classList = `image n${index} ${index? "" : "active"}`; 
      imageElement.dataset.index = index;
      imageElement.style.backgroundImage = `url(${projects[index].mob})`;
      sliderMobImages.appendChild(imageElement);
    });
  }
  
  // Set event listeners for the navigation arrows:

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

  function initMobArrows() {
    sliderMobArrows.querySelectorAll(".projects-mob-button").forEach(button => {
      button.addEventListener("click", function() {
        let curNumber = +sliderMobImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (button.classList.contains("left")) {
          nextNumber = curNumber === 0? projects.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === projects.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  // Create slider dots using innerHTML:

  // function initDots() {
  //   projects.forEach((project, index) => {
  //     let dot = `<div class="projects-bullet n${index} ${index === 0? "active" : ""}" 
  //     data-index="${index}"></div>`;
  //     sliderDots.innerHTML += dot;
  //   });
  //   sliderDots.querySelectorAll(".projects-bullet").forEach(dot => {
  //     dot.addEventListener("click", function() {
  //       moveSlider(this.dataset.index);
  //     })
  //   })
  // }

  // Create slider dots using appendChild:

  function initDots() {
    projects.forEach((project, index) => {
      let dotElement = document.createElement("div");
      dotElement.classList = `projects-bullet n${index} ${index? "" : "active"}`;
      dotElement.dataset.index = index;
      sliderDots.appendChild(dotElement);
    });
      sliderDots.querySelectorAll(".projects-bullet").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  // Create interactive project titles using innerHTML:

  // function initTitles() {
  //   projects.forEach((project, index) => {
  //     let navTitle = `<li class="title projects-nav-item">
  //     <a class="nav-link-title n${index} ${index === 0? "active" : ""}" 
  //     data-index="${index}">${project.title}</a></li>`;
  //     sliderTitles.innerHTML += navTitle;
  //   });
  //   sliderTitles.querySelectorAll(".nav-link-title").forEach(title => {
  //     title.addEventListener("click", function() {
  //       moveSlider(this.dataset.index);
  //     })
  //   })
  // }

  // Create interactive project titles using appendChild:

  function initTitles() {
    projects.forEach((project, index) => {
      let navTitleElement = document.createElement("li"); 
      navTitleElement.classList = "title projects-nav-item";
      let navTitleLink = document.createElement("a");
      navTitleLink.classList = `nav-link-title n${index} ${index? "" : "active"}`;
      navTitleLink.dataset.index = index;
      let navTitleText = document.createTextNode(`${project.title}`);
      sliderTitles.appendChild(navTitleElement).appendChild(navTitleLink).appendChild(navTitleText);
    });
    sliderTitles.querySelectorAll(".nav-link-title").forEach(title => {
      title.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  // Fill in the details cards using innerHTML:

  // function initDetails() {

  //   projects.forEach((project, index) => {

  //     let initCity = `<p class="projects-subtext text-p 
  //     n${index} ${index === 0? "active" : ""}" 
  //     data-index="${index}">${project.city}</p>`;

  //     let initArea = `<p class="projects-subtext text-p 
  //     n${index} ${index === 0? "active" : ""}" 
  //     data-index="${index}">${project.area}</p>`;

  //     let initTime = `<p class="projects-subtext text-p 
  //     n${index} ${index === 0? "active" : ""}" 
  //     data-index="${index}">${project.time}</p>`;

  //     let initCost = `<p class="projects-subtext text-p 
  //     n${index} ${index === 0? "active" : ""}" 
  //     data-index="${index}">${project.cost}</p>`;

  //     detailsCity.innerHTML += initCity;
  //     detailsArea.innerHTML += initArea;
  //     detailsTime.innerHTML += initTime;
  //     detailsCost.innerHTML += initCost;
  //   });
  // }

  // Fill in the details cards using appendChild:

  function initDetails() {

    projects.forEach((project, index) => {

      let cityText = project.city.split('<br>');
      let cityText1 = document.createTextNode(cityText[0]);
      let cityText2 = document.createTextNode(cityText[1]);
      let areaText = document.createTextNode(`${project.area}`);
      let timeText = document.createTextNode(`${project.time}`);
      let costText = document.createTextNode(`${project.cost}`);

      let textElement = document.createElement("p");
      textElement.classList = `projects-subtext text-p n${index} ${index? "" : "active"}`;
      textElement.dataset.index = index; 

      detailsCity.appendChild(textElement);
      detailsCity.lastChild.appendChild(cityText1);
      detailsCity.lastChild.appendChild(document.createElement("br"));
      detailsCity.lastChild.appendChild(cityText2);
      detailsArea.appendChild(textElement.cloneNode()).appendChild(areaText);
      detailsTime.appendChild(textElement.cloneNode()).appendChild(timeText);
      detailsCost.appendChild(textElement.cloneNode()).appendChild(costText);
    });
  }

  // Switch between the projects using css/opacity, highlight active elements:

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderMobImages.querySelector(".active").classList.remove("active");
    sliderMobImages.querySelector(".n" + num).classList.add("active");
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

  // Create the pause / play button:

  function createAutoButton() {
    let navButton = `<li class="nav-item-button-play ${pause === false? "active" : ""}">&#9658;</li>`;
    sliderTitles.insertAdjacentHTML("beforeend", navButton);
    sliderTitles.querySelector(".nav-item-button-play").addEventListener("click", toggleAutoplay);
  }

  // Initiate autoplay using moveSlider:

  function initAutoplay() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === projects.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
  }

  // Toggle autoplay on or off:

  function toggleAutoplay() {

    sliderTitles.querySelector(".nav-item-button-play").classList.toggle("active");

    if (pause === false) {
      pause = true;
      clearInterval(playInterval);
    } else {
      pause = false;
      playInterval = setInterval(initAutoplay, interval);
    }
  }
}

// Customizable autoplay options stored here:

let sliderOptions = {
  pause: false,
  autoplayInterval: 2000
};

// Load the slider on DOMContentLoaded using initSlider:

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});