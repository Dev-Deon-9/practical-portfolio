/* =====================================

   JAVASCRIPT

   This file controls the interactive
   parts of the website.

   We haven't added any functionality
   yet.

====================================== */

/* =====================================

   TYPEWRITER EFFECT

   This makes the heading appear
   one letter at a time.

====================================== */

const text = "Hi, I'm DevDeon 👋";

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,100);

    }

}

typeWriter();
// =====================================
//
// SCROLL REVEAL ANIMATION
//
// Shows sections as they enter
// the screen.
//
// =====================================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element) => {

    observer.observe(element);

});
// =====================================
//
// SKILL BAR ANIMATION
//
// Runs only once.
//
// =====================================

const bars = document.querySelectorAll(".progress-bar");

let animated = false;

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting && !animated){

            bars.forEach((bar)=>{

                bar.style.width = bar.dataset.width;

            });

            animated = true;

        }

    });

});

skillObserver.observe(document.querySelector("#skills"));

// =====================================
//
// PROJECT CARD ANIMATION
//
// Cards appear one after another.
//
// =====================================

const cards = document.querySelectorAll(".hidden-card");

const cardObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            cards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show-card");

                },index*250);

            });

        }

    });

});

cardObserver.observe(document.querySelector("#projects"));

// =====================================
//
// MOBILE NAVIGATION
//
// =====================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {

    if (!menuOpen) {

        mobileMenu.classList.add("active");

        menuBtn.innerHTML = "✕";

        menuOpen = true;

    } else {

        mobileMenu.classList.remove("active");

        menuBtn.innerHTML = "☰";

        menuOpen = false;

    }

});

// Close menu when a link is clicked

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuBtn.innerHTML = "☰";

        menuOpen = false;

    });

});