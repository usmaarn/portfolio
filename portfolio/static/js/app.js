const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
  loop: true,
  effect: 'card',
  virtual: {
    enabled: true,
  },
  centeredSlides: true,
  cardsEffect: {

  },
  autoplay: {
    
  },
  freemode: {
    enabled: true
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  slidesPerView: 1,
  spaceBetween: 10,
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});