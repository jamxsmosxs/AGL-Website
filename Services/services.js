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

const mpCont = document.querySelector('.mediaPlacementCont');
const consultancyCont = document.querySelector('.consultancyCont');
const activationCont = document.querySelector('.activationCont');
const marketingCont = document.querySelector('.marketingCont');
const b2bCont = document.querySelector('.b2bCont');
const trainingsCont = document.querySelector('.trainingsCont');
const eventsCont = document.querySelector('.eventsCont');
const oohCont = document.querySelector('.oohCont');

const mplacementBtn = document.getElementById('mplacementBtn');
const consultancyBtn = document.getElementById('consultancyBtn');
const activationBtn =  document.getElementById('activationBtn');
const marketingBtn = document.getElementById('marketingBtn');
const b2bBtn = document.getElementById('b2bBtn');
const trainingsBtn = document.getElementById('trainingsBtn');
const eventsBtn = document.getElementById('eventsBtn');
const oohBtn = document.getElementById('oohBtn');

mplacementBtn.addEventListener('click', () => {
    mpCont.classList.add('mainActive');
    mpCont.classList.remove('inactive');
    consultancyCont.classList.remove('mainActive');
    consultancyCont.classList.add('inactive');
    activationCont.classList.remove('mainActive');
    activationCont.classList.add('inactive');
    marketingCont.classList.remove('mainActive');
    marketingCont.classList.add('inactive');
    b2bCont.classList.remove('mainActive');
    b2bCont.classList.add('inactive');
    trainingsCont.classList.remove('mainActive');
    trainingsCont.classList.add('inactive');
    eventsCont.classList.remove('mainActive');
    eventsCont.classList.add('inactive');
    oohCont.classList.remove('mainActive');
    oohCont.classList.add('inactive');


    // Buttons stylinig
    mplacementBtn.classList.add('aactive');
    consultancyBtn.classList.remove('aactive');
    activationBtn.classList.remove('aactive');
    marketingBtn.classList.remove('aactive');
    b2bBtn.classList.remove('aactive');
    trainingsBtn.classList.remove('aactive');
    eventsBtn.classList.remove('aactive');
    oohBtn.classList.remove('aactive');
})

consultancyBtn.addEventListener('click', () => {
    mpCont.classList.remove('mainActive');
    mpCont.classList.add('inactive');
    consultancyCont.classList.add('mainActive');
    consultancyCont.classList.remove('inactive');
    activationCont.classList.remove('mainActive');
    activationCont.classList.add('inactive');
    marketingCont.classList.remove('mainActive');
    marketingCont.classList.add('inactive');
    b2bCont.classList.remove('mainActive');
    b2bCont.classList.add('inactive');
    trainingsCont.classList.remove('mainActive');
    trainingsCont.classList.add('inactive');
    eventsCont.classList.remove('mainActive');
    eventsCont.classList.add('inactive');
    oohCont.classList.remove('mainActive');
    oohCont.classList.add('inactive');


    // Buttons stylinig
    mplacementBtn.classList.remove('aactive');
    consultancyBtn.classList.add('aactive');
    activationBtn.classList.remove('aactive');
    marketingBtn.classList.remove('aactive');
    b2bBtn.classList.remove('aactive');
    trainingsBtn.classList.remove('aactive');
    eventsBtn.classList.remove('aactive');
    oohBtn.classList.remove('aactive');
})

activationBtn.addEventListener('click', () => {
    mpCont.classList.remove('mainActive');
    mpCont.classList.add('inactive');
    consultancyCont.classList.remove('mainActive');
    consultancyCont.classList.add('inactive');
    activationCont.classList.add('mainActive');
    activationCont.classList.remove('inactive');
    marketingCont.classList.remove('mainActive');
    marketingCont.classList.add('inactive');
    b2bCont.classList.remove('mainActive');
    b2bCont.classList.add('inactive');
    trainingsCont.classList.remove('mainActive');
    trainingsCont.classList.add('inactive');
    eventsCont.classList.remove('mainActive');
    eventsCont.classList.add('inactive');
    oohCont.classList.remove('mainActive');
    oohCont.classList.add('inactive');


    // Buttons stylinig
    mplacementBtn.classList.remove('aactive');
    consultancyBtn.classList.remove('aactive');
    activationBtn.classList.add('aactive');
    marketingBtn.classList.remove('aactive');
    b2bBtn.classList.remove('aactive');
    trainingsBtn.classList.remove('aactive');
    eventsBtn.classList.remove('aactive');
    oohBtn.classList.remove('aactive');
})

marketingBtn.addEventListener('click', () => {
    mpCont.classList.remove('mainActive');
    mpCont.classList.add('inactive');
    consultancyCont.classList.remove('mainActive');
    consultancyCont.classList.add('inactive');
    activationCont.classList.remove('mainActive');
    activationCont.classList.add('inactive');
    marketingCont.classList.add('mainActive');
    marketingCont.classList.remove('inactive');
    b2bCont.classList.remove('mainActive');
    b2bCont.classList.add('inactive');
    trainingsCont.classList.remove('mainActive');
    trainingsCont.classList.add('inactive');
    eventsCont.classList.remove('mainActive');
    eventsCont.classList.add('inactive');
    oohCont.classList.remove('mainActive');
    oohCont.classList.add('inactive');


    // Buttons stylinig
    mplacementBtn.classList.remove('aactive');
    consultancyBtn.classList.remove('aactive');
    activationBtn.classList.remove('aactive');
    marketingBtn.classList.add('aactive');
    b2bBtn.classList.remove('aactive');
    trainingsBtn.classList.remove('aactive');
    eventsBtn.classList.remove('aactive');
    oohBtn.classList.remove('aactive');
})

b2bBtn.addEventListener('click', () => {
    mpCont.classList.remove('mainActive');
    mpCont.classList.add('inactive');
    consultancyCont.classList.remove('mainActive');
    consultancyCont.classList.add('inactive');
    activationCont.classList.remove('mainActive');
    activationCont.classList.add('inactive');
    marketingCont.classList.remove('mainActive');
    marketingCont.classList.add('inactive');
    b2bCont.classList.add('mainActive');
    b2bCont.classList.remove('inactive');
    trainingsCont.classList.remove('mainActive');
    trainingsCont.classList.add('inactive');
    eventsCont.classList.remove('mainActive');
    eventsCont.classList.add('inactive');
    oohCont.classList.remove('mainActive');
    oohCont.classList.add('inactive');


    // Buttons stylinig
    mplacementBtn.classList.remove('aactive');
    consultancyBtn.classList.remove('aactive');
    activationBtn.classList.remove('aactive');
    marketingBtn.classList.remove('aactive');
    b2bBtn.classList.add('aactive');
    trainingsBtn.classList.remove('aactive');
    eventsBtn.classList.remove('aactive');
    oohBtn.classList.remove('aactive');
})

trainingsBtn.addEventListener('click', () => {
    mpCont.classList.remove('mainActive');
    mpCont.classList.add('inactive');
    consultancyCont.classList.remove('mainActive');
    consultancyCont.classList.add('inactive');
    activationCont.classList.remove('mainActive');
    activationCont.classList.add('inactive');
    marketingCont.classList.remove('mainActive');
    marketingCont.classList.add('inactive');
    b2bCont.classList.remove('mainActive');
    b2bCont.classList.add('inactive');
    trainingsCont.classList.add('mainActive');
    trainingsCont.classList.remove('inactive');
    eventsCont.classList.remove('mainActive');
    eventsCont.classList.add('inactive');
    oohCont.classList.remove('mainActive');
    oohCont.classList.add('inactive');


    // Buttons stylinig
    mplacementBtn.classList.remove('aactive');
    consultancyBtn.classList.remove('aactive');
    activationBtn.classList.remove('aactive');
    marketingBtn.classList.remove('aactive');
    b2bBtn.classList.remove('aactive');
    trainingsBtn.classList.add('aactive');
    eventsBtn.classList.remove('aactive');
    oohBtn.classList.remove('aactive');
})

eventsBtn.addEventListener('click', () => {
    mpCont.classList.remove('mainActive');
    mpCont.classList.add('inactive');
    consultancyCont.classList.remove('mainActive');
    consultancyCont.classList.add('inactive');
    activationCont.classList.remove('mainActive');
    activationCont.classList.add('inactive');
    marketingCont.classList.remove('mainActive');
    marketingCont.classList.add('inactive');
    b2bCont.classList.remove('mainActive');
    b2bCont.classList.add('inactive');
    trainingsCont.classList.remove('mainActive');
    trainingsCont.classList.add('inactive');
    eventsCont.classList.add('mainActive');
    eventsCont.classList.remove('inactive');
    oohCont.classList.remove('mainActive');
    oohCont.classList.add('inactive');


    // Buttons stylinig
    mplacementBtn.classList.remove('aactive');
    consultancyBtn.classList.remove('aactive');
    activationBtn.classList.remove('aactive');
    marketingBtn.classList.remove('aactive');
    b2bBtn.classList.remove('aactive');
    trainingsBtn.classList.remove('aactive');
    eventsBtn.classList.add('aactive');
    oohBtn.classList.remove('aactive');
})

oohBtn.addEventListener('click', () => {
    mpCont.classList.remove('mainActive');
    mpCont.classList.add('inactive');
    consultancyCont.classList.remove('mainActive');
    consultancyCont.classList.add('inactive');
    activationCont.classList.remove('mainActive');
    activationCont.classList.add('inactive');
    marketingCont.classList.remove('mainActive');
    marketingCont.classList.add('inactive');
    b2bCont.classList.remove('mainActive');
    b2bCont.classList.add('inactive');
    trainingsCont.classList.remove('mainActive');
    trainingsCont.classList.add('inactive');
    eventsCont.classList.remove('mainActive');
    eventsCont.classList.add('inactive');
    oohCont.classList.add('mainActive');
    oohCont.classList.remove('inactive');


    // Buttons stylinig
    mplacementBtn.classList.remove('aactive');
    consultancyBtn.classList.remove('aactive');
    activationBtn.classList.remove('aactive');
    marketingBtn.classList.remove('aactive');
    b2bBtn.classList.remove('aactive');
    trainingsBtn.classList.remove('aactive');
    eventsBtn.classList.remove('aactive');
    oohBtn.classList.add('aactive');
})