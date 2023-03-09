const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeBtn = document.querySelector('.menu__close'),
      menuLink = document.querySelectorAll('.menu__link');

const addActive = () => menu.classList.add('active');
const removeActive = () => menu.classList.remove('active');


hamburger.addEventListener('click', addActive);

closeBtn.addEventListener('click', removeActive);

menu.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('menu__overlay')) {
        removeActive();
    }
});

menuLink.forEach(item => {
    item.addEventListener('click', removeActive);
});


const counters = document.querySelectorAll('.skills__grade-lvl'),
      lines = document.querySelectorAll('.skills__grade-inline');
      
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
}); 



