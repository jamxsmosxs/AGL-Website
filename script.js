`use strict`

const hamburger = document.querySelector(".burgerContainer");
const navMenu = document.querySelector(".navMenu");
const brandsText = document.querySelector(".BrandsText");
const potentialText = document.querySelector(".PotentialText");
const brandsHighlight = document.querySelector(".brandsHL");
const potentialHighlight = document.querySelector(".potentialHL");
const activeNavBackground = document.querySelector(".navMenuActive");
const scrollToAbtSec = document.querySelector(".downIcon");
const abtUsSection = document.querySelector(".aboutUs");

document.querySelector(".burgerContainer").addEventListener("click", () => {
    document.querySelector(".up").classList.toggle("uprotate");
    document.querySelector(".middle").classList.toggle("middleHidden");
    document.querySelector(".bottom").classList.toggle("bottomRotate");
    navMenu.classList.toggle('showNav');
    activeNavBackground.classList.toggle('hidden');
    navMenu.classList.toggle('fixed');
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