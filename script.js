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
// Replays every time a section
// enters the screen.
//
// =====================================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

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
// Replays every time Skills
// enters the screen.
//
// =====================================

const bars = document.querySelectorAll(".progress-bar");

const skillSection = document.querySelector("#skills");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            bars.forEach((bar) => {

                // Reset the bar
                bar.style.width = "0%";

            });

            // Small delay so the reset is visible
            setTimeout(() => {

                bars.forEach((bar) => {

                    bar.style.width = bar.dataset.width;

                });

            }, 100);

        }

    });

});

skillObserver.observe(skillSection);

// =====================================
//
// PROJECT CARD ANIMATION
//
// Replays every time Projects
// enters the screen.
//
// =====================================

const cards = document.querySelectorAll(".hidden-card");

const projectsSection = document.querySelector("#projects");

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            // Reset all cards
            cards.forEach((card) => {

                card.classList.remove("show-card");

            });

            // Replay cards one after another
            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show-card");

                }, index * 250);

            });

        }

    });

});

cardObserver.observe(projectsSection);

/* =====================================
//
// MOBILE NAVIGATION
//
// Opens and closes the mobile menu.
//
// =====================================*/
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