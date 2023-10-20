`use strict`

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const brandsText = document.querySelector(".BrandsText");
const potentialText = document.querySelector(".PotentialText");
const brandsHighlight = document.querySelector(".brandsHL");
const potentialHighlight = document.querySelector(".potentialHL");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('rotate');
    navMenu.classList.toggle('showNav');
})

brandsText.addEventListener("mouseover", () => {
    brandsHighlight.classList.add("hlHeight");
})

brandsText.addEventListener("mouseout", () => {
    brandsHighlight.classList.remove("hlHeight");
})

potentialText.addEventListener("mouseover", () => {
    potentialHighlight.classList.add("hlHeight");
})

potentialText.addEventListener("mouseout", () => {
    potentialHighlight.classList.remove("hlHeight");
})