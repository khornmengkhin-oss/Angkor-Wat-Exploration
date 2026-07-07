const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: false,
  speed: 800,

  // Enable swiping
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  allowTouchMove: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    scale: 0.85,
    slideShadows: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
  0: {
    coverflowEffect: {
      depth: 40,
      scale: 0.9,
    },
  },
  768: {
    coverflowEffect: {
      depth: 100,
      scale: 0.85,
    },
  },
},
});
