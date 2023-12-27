`use strict`

const showGreeting = document.querySelector(".xmasGreeting");
const xmasContainer = document.querySelector(".xmasCont");

function unhideCard() {
    showGreeting.classList.remove("hide");
};

// window.onload = unhideCard();

const closeGreetingBtn = document.querySelector('.closeGreetingBtn');

closeGreetingBtn.addEventListener("click", () => {
    showGreeting.classList.add("hide");
})

xmasContainer.addEventListener("click", () => {
    showGreeting.classList.add("hide");
})


const hamburger = document.querySelector(".burgerContainer");
const navMenu = document.querySelector(".navMenu");
const brandsText = document.querySelector(".brandsText");
const potentialText = document.querySelector(".potentialText");
const brandsHighlight = document.querySelector(".br");
const potentialHighlight = document.querySelector(".pt");
const activeNavBackground = document.querySelector(".navMenuActive");
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
})

// Brand's Potential Text on Home page highlight hover
brandsText.addEventListener("mouseover", () => {
    brandsHighlight.style.height = "10px";
})

brandsText.addEventListener("mouseout", () => {
    brandsHighlight.style.height = "40px";
})

potentialText.addEventListener("mouseover", () => {
    potentialHighlight.style.height = "10px";
})

potentialText.addEventListener("mouseout", () => {
    potentialHighlight.style.height = "40px";
})

mediaPlacementBtn.addEventListener("click", () => {
    moreMediaPlacement.classList.remove("mediaPlacement");   
})

closeMediaPlacement.addEventListener("click", () => {
    moreMediaPlacement.classList.add("mediaPlacement");
})

const viewAllBrands = document.getElementById('moreBrands');

viewAllBrands.addEventListener('click', () => {
    document.querySelector(".allBrands").classList.remove("hiddenn");
})

const closeAllBrands = document.getElementById("closeAllBrands");

closeAllBrands.addEventListener('click', () => {
    document.querySelector(".allBrands").classList.add("hiddenn");
})