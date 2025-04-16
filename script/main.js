let menuItems = document.querySelectorAll('.primary-nav li')
let body = document.querySelector('body')

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header"); // Sostituisci con il selettore della tua header

    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }
    });

});

function menuBtnFunction(menuBtn = burgerIcon) {
    let header = document.querySelector('header');
    body.classList.toggle("body-block");
    header.classList.toggle('menu-on');
    menuBtn.classList.toggle("active");
    setTimeout(() => {
        menuItems.forEach(el => {
            animateMenu(el);
        });
    }, 800);
}

function animateMenu(item) {
    item.classList.toggle('tracking-in-contract')
}

let arrow = document.querySelector('.arrow');
arrow.addEventListener('click', (e) => {
    e.preventDefault
    let info = document.querySelector('.hero')
    info.classList.toggle('open')
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('bounce-in-bottom');
        observer.unobserve(entry.target); // Rimuove l'osservazione dopo l'ingresso nella viewport
      }
    });
  });
  
  document.querySelectorAll('section').forEach(el => observer.observe(el));