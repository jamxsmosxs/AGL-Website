`use strict`

const teamShowNav = document.querySelector('.teamShowNav');
const hamburger = document.querySelector(".burgerContainer");
const navMenu = document.querySelector(".navMenu");
const downloadProfile = document.getElementById('contactBtn');


downloadProfile.addEventListener('click', () => {
    window.location.href = 'https://download1073.mediafire.com/lk6n0jn3fjggrb6Gq-J474tJWJnQPQhH3PpLtArHKhmamab5x-vNYSw22twxkDnwQT81vjTgsTqaAJIz2ezrdVjho3lRS9etpu4IfiJbbZ5MzgDHdGoxlKEYqWlNbATR2IIhRoKPNeSY_-Q9OU7GDysk6z4w-EMo4hA7a-5HI9K1LQ/zjkfvpxp72drtuc/AGL+Profile+NEW1.pdf'
})

document.querySelector(".burgerContainer").addEventListener("click", () => {
    document.querySelector(".up").classList.toggle("uprotate");
    document.querySelector(".middle").classList.toggle("middleHidden");
    document.querySelector(".bottom").classList.toggle("bottomRotate");
    navMenu.classList.toggle('showNav');
    navMenu.classList.toggle('fixed');
    teamShowNav.classList.toggle('hideTeamNav');
    document.querySelector('body').classList.toggle("noScroll");
})