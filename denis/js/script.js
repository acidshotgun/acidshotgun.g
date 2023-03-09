const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -400],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
      },
    },
    autoplay: {
        delay: 4000,
    },
});


const btn = document.querySelector('.main__info_hamburger'),
      windowLeft = document.querySelector('.window'),
      link = document.querySelectorAll('.window__links');


btn.addEventListener('click', () => {
  btn.classList.toggle('main__info_hamburger_active');
  windowLeft.classList.toggle('window_active');
});

link.forEach((item) => {
  item.addEventListener('click', () => {
    windowLeft.classList.toggle('window_active');
    btn.classList.toggle('main__info_hamburger_active');
  });
});