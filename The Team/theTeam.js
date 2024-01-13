`use strict`


window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;
        
        if(revealtop < ((windowheight - revealpoint) + 200)) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
    
}


const teamShowNav = document.querySelector('.teamShowNav');
const hamburger = document.querySelector(".burgerContainer");
const navMenu = document.querySelector(".navMenu");

document.querySelector(".burgerContainer").addEventListener("click", () => {
    document.querySelector(".up").classList.toggle("uprotate");
    document.querySelector(".middle").classList.toggle("middleHidden");
    document.querySelector(".bottom").classList.toggle("bottomRotate");
    navMenu.classList.toggle('showNav');
    navMenu.classList.toggle('fixed');
    teamShowNav.classList.toggle('hideTeamNav');
})

const staffImgs = document.querySelectorAll('.staffImg');
const staffContacts = document.querySelectorAll('.staffContact');

function showStaffContact() {
    staffImgs[0].addEventListener('mouseover', () => {
        staffContacts[0].classList.add('staffCnctSlide');
    })

    staffImgs[0].addEventListener('mouseout', () => {
        staffContacts[0].classList.remove('staffCnctSlide');
    })

    staffImgs[1].addEventListener('mouseover', () => {
        staffContacts[1].classList.add('staffCnctSlide')
    })

    staffImgs[1].addEventListener('mouseout', () => {
        staffContacts[1].classList.remove('staffCnctSlide');
    })

    staffImgs[2].addEventListener('mouseover', () => {
        staffContacts[2].classList.add('staffCnctSlide');
    })

    staffImgs[2].addEventListener('mouseout', () => {
        staffContacts[2].classList.remove('staffCnctSlide');
    })

    staffImgs[3].addEventListener('mouseover', () => {
        staffContacts[3].classList.add('staffCnctSlide');
    })

    staffImgs[3].addEventListener('mouseout', () => {
        staffContacts[3].classList.remove('staffCnctSlide');
    })

    staffImgs[4].addEventListener('mouseover', () => {
        staffContacts[4].classList.add('staffCnctSlide');
    })

    staffImgs[4].addEventListener('mouseout', () => {
        staffContacts[4].classList.remove('staffCnctSlide');
    })

    staffImgs[5].addEventListener('mouseover', () => {
        staffContacts[5].classList.add('staffCnctSlide');
    })

    staffImgs[5].addEventListener('mouseout', () => {
        staffContacts[5].classList.remove('staffCnctSlide');
    })

    staffImgs[6].addEventListener('mouseover', () => {
        staffContacts[6].classList.add('staffCnctSlide');
    })

    staffImgs[6].addEventListener('mouseout', () => {
        staffContacts[6].classList.remove('staffCnctSlide');
    })

    staffImgs[7].addEventListener('mouseover', () => {
        staffContacts[7].classList.add('staffCnctSlide');
    })

    staffImgs[7].addEventListener('mouseout', () => {
        staffContacts[7].classList.remove('staffCnctSlide');
    })

    staffImgs[8].addEventListener('mouseover', () => {
        staffContacts[8].classList.add('staffCnctSlide');
    })

    staffImgs[8].addEventListener('mouseout', () => {
        staffContacts[8].classList.remove('staffCnctSlide');
    })

    staffImgs[9].addEventListener('mouseover', () => {
        staffContacts[9].classList.add('staffCnctSlide');
    })

    staffImgs[9].addEventListener('mouseout', () => {
        staffContacts[9].classList.remove('staffCnctSlide');
    })

    staffImgs[10].addEventListener('mouseover', () => {
        staffContacts[10].classList.add('staffCnctSlide');
    })

    staffImgs[10].addEventListener('mouseout', () => {
        staffContacts[10].classList.remove('staffCnctSlide');
    })

    staffImgs[11].addEventListener('mouseover', () => {
        staffContacts[11].classList.add('staffCnctSlide');
    })

    staffImgs[11].addEventListener('mouseout', () => {
        staffContacts[11].classList.remove('staffCnctSlide');
    })
}

showStaffContact();