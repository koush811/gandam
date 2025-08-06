let Swiper1 = new Swiper('.fv .swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 2000,
  effect: 'fade',
  slidesPerView: 1, 
});

let Swiper2 = new Swiper('.nennpyou_u .swiper', {
  loop: true,
  speed: 500,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
