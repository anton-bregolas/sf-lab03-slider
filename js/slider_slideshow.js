let projects = [{
  url: "./images/projects-admiral.png",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don<br> LCD admiral",
  area: "81 m2",
  time: "3.5 months",
  cost: "Upon request"
}, {
  url: "./images/projects-thieves.png",
  title: "Sochi Thieves",
  city: "Sochi<br> Thieves",
  area: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "./images/projects-patriotic.png",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don<br> Patriotic",
  area: "93 m2",
  time: "3 months",
  cost: "Upon request"
}];

function initSlider() {
  // if (!projects || !projects.length) return;

  // options = options || {
  //   titles: false,
  //   dots: true,
  //   autoplay: true
  // };

  let sliderImages = document.querySelector(".projects-img-box");
  let sliderArrows = document.querySelector(".projects-arrow-nav");
  let sliderDots = document.querySelector(".projects-bullets");

  // const sliderWrapper = document.querySelector(".projects");

  // let sliderImages = sliderWrapper.querySelector(".projects-img-box");
  // let sliderArrows = sliderWrapper.querySelector(".projects-arrow");
  // let sliderDots = sliderWrapper.querySelector(".projects-bullet");
  // let sliderTitle = sliderWrapper.querySelector(".projects-nav-item");

  // let detailsCity = sliderWrapper.querySelector("#city");
  // let detailsArea = sliderWrapper.querySelector("#area");
  // let detailsTime = sliderWrapper.querySelector("#time");
  // let detailsCost = sliderWrapper.querySelector("#cost");

  initImages();
  initArrows();
  initAutoplay();
  initDots();

  // if (options.dots) {
  // initDots();
  // }
  
  // if (options.titles) {
  //   initTitles();
  // }
  
  // if (options.autoplay) {
  //   initAutoplay();
  // }

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
      let dot = `<div class="projects-bullet n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".projects-bullet").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    // if (options.dots) {
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    // }
    // if (options.titles) changeTitle(num);
  }
  
  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === projects.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, 5000);
    
    // options.autoplayInterval);
  }

}

// let sliderOptions = {
//   dots: true,
//   titles: false,
//   autoplay: true,
//   autoplayInterval: 5000
// };

// document.addEventListener("DOMContentLoaded", function() {
//   initSlider(sliderOptions);
// });

document.addEventListener("DOMContentLoaded", function() {
  initSlider();
});