`use strict`

const showGreeting = document.querySelector(".xmasGreeting");
const xmasContainer = document.querySelector(".xmasCont");

function unhideCard() {
    showGreeting.classList.remove("hide");
};

window.onload = unhideCard();

const closeGreetingBtn = document.querySelector('.closeGreetingBtn');

closeGreetingBtn.addEventListener("click", () => {
    showGreeting.classList.add("hide");
})

xmasContainer.addEventListener("click", () => {
    showGreeting.classList.add("hide");
})


const hamburger = document.querySelector(".burgerContainer");
const navMenu = document.querySelector(".navMenu");
const brandsText = document.querySelector(".BrandsText");
const potentialText = document.querySelector(".PotentialText");
const brandsHighlight = document.querySelector(".brandsHL");
const potentialHighlight = document.querySelector(".potentialHL");
const activeNavBackground = document.querySelector(".navMenuActive");
const showNav = document.querySelector('teamShowNav');
const scrollToAbtSec = document.querySelector(".downIcon");
const abtUsSection = document.querySelector(".aboutUs");
const mediaPlacementBtn = document.getElementById("mediaPlcment");
const moreMediaPlacement = document.querySelector(".mediaPlacement");
const closeMediaPlacement = document.getElementById("closeMediaPlacement");


document.querySelector(".burgerContainer").addEventListener("click", () => {
    document.querySelector(".up").classList.toggle("uprotate");
    document.querySelector(".middle").classList.toggle("middleHidden");
    document.querySelector(".bottom").classList.toggle("bottomRotate");
    navMenu.classList.toggle('showNav');
    activeNavBackground.classList.toggle('hidden');
    navMenu.classList.toggle('fixed');
    showNav.classList.toggle('hidden');
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

mediaPlacementBtn.addEventListener("click", () => {
    moreMediaPlacement.classList.remove("mediaPlacement");   
})

closeMediaPlacement.addEventListener("click", () => {
    moreMediaPlacement.classList.add("mediaPlacement");
})