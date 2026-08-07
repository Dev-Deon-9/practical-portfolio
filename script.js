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
// ACTIVE NAVIGATION
//
// Highlights the current section.
//
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (window.scrollY >= top - 200 &&
            window.scrollY < top + height - 200) {

            currentSection = section.id;

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});
// =====================================
//
// MOBILE NAVIGATION
//
// Opens and closes the mobile menu.
//
// =====================================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {

    if (!menuOpen) {

    mobileMenu.style.opacity = "1";

    mobileMenu.style.pointerEvents = "auto";

    mobileMenu.style.transform = "translateX(0)";

    const links = mobileMenu.querySelectorAll("a");

    links.forEach((link) => {

        link.style.opacity = "1";

        link.style.transform = "translateX(0)";

    });

    menuBtn.innerHTML = "✕";

    menuOpen = true;

    } else {

    const links = mobileMenu.querySelectorAll("a");

    links.forEach((link) => {

        link.style.opacity = "0";

        link.style.transform = "translateX(50px)";

    });

    mobileMenu.style.opacity = "0";

    mobileMenu.style.pointerEvents = "none";

    mobileMenu.style.transform = "translateX(80px)";

    menuBtn.innerHTML = "☰";

    menuOpen = false;

}

});