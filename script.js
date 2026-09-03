// ========================================
// PurpleKnightASA - Official Website
// script.js
// ========================================


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(9, 9, 15, 0.96)";

        header.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.background =
            "transparent";

        header.style.boxShadow =
            "none";
    }

});


// ========================================
// ACTIVE NAVIGATION LINK
// Turns the current section purple
// ========================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let currentSection = "home";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (
            linkTarget ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

window.addEventListener(
    "load",
    updateActiveNav
);


// ========================================
// SMOOTH SCROLLING
// ========================================

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetID =
                link.getAttribute("href");


            // Ignore placeholder links
            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const targetSection =
                document.querySelector(
                    targetID
                );


            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const revealElements =
    document.querySelectorAll(
        `
        .about-card,
        .stat-card,
        .project-card,
        .social-card,
        .contact-box
        `
    );


revealElements.forEach(
    (element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            `
            opacity 0.65s ease,
            transform 0.65s ease
            `;

    }
);


// Watch elements as user scrolls

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


// ========================================
// HERO ENTRANCE ANIMATION
// ========================================

const heroContent =
    document.querySelector(
        ".hero-content"
    );


if (heroContent) {

    heroContent.style.opacity =
        "0";

    heroContent.style.transform =
        "translateY(25px)";


    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    heroContent.style.transition =
                        `
                        opacity 0.8s ease,
                        transform 0.8s ease
                        `;

                    heroContent.style.opacity =
                        "1";

                    heroContent.style.transform =
                        "translateY(0)";

                },

                150
            );

        }
    );

}


// ========================================
// PROJECT CARD PURPLE GLOW
// ========================================

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    (card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.boxShadow =
                    `
                    0 20px 55px
                    rgba(139, 92, 246, 0.20)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.boxShadow =
                    "";

            }
        );

    }
);


// ========================================
// SOCIAL CARD ARROWS
// ========================================

const socialCards =
    document.querySelectorAll(
        ".social-card"
    );


socialCards.forEach(
    (card) => {

        const arrow =
            card.querySelector(
                ".social-arrow"
            );


        if (!arrow) {
            return;
        }


        card.addEventListener(
            "mouseenter",
            () => {

                arrow.style.transform =
                    "translateX(7px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                arrow.style.transform =
                    "translateX(0)";

            }
        );

    }
);


// ========================================
// CURRENT YEAR
// ========================================

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(
    (element) => {

        element.textContent =
            new Date().getFullYear();

    }
);


// ========================================
// WEBSITE LOADED
// ========================================

console.log(
    "%cPurpleKnightASA",
    `
    color: #a78bfa;
    font-size: 22px;
    font-weight: bold;
    `
);


console.log(
    "%cOfficial Website Loaded Successfully",
    `
    color: white;
    font-size: 14px;
    `
);