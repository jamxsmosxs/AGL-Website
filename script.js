`use strict`

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('rotate');
    navMenu.classList.toggle('showNav');
})