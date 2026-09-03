// ========================================
// PURPLEKNIGHTASA WEBSITE
// script.js
// ========================================


// ========================================
// CURRENT YEAR
// ========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const header = document.querySelector(".header");

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 40) {

        header.style.background =
            "rgba(8, 8, 13, 0.97)";

        header.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.30)";

    } else {

        header.style.background =
            "rgba(8, 8, 13, 0.88)";

        header.style.boxShadow =
            "none";
    }
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);


// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-links a"
);


function updateNavigation() {

    let currentSection = "home";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.id;
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateNavigation
);

window.addEventListener(
    "load",
    updateNavigation
);


// ========================================
// SMOOTH SCROLLING
// ========================================

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetID =
                link.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const targetSection =
                document.querySelector(targetID);


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
// COPY DISCORD USERNAME
// ========================================

const copyDiscordButton =
    document.getElementById("copyDiscord");

const copyMessage =
    document.getElementById("copyMessage");

const discordUsername =
    "purpleknightasa";


if (copyDiscordButton) {

    copyDiscordButton.addEventListener(
        "click",
        async () => {

            try {

                await navigator.clipboard.writeText(
                    discordUsername
                );


                copyDiscordButton.textContent =
                    "Copied!";


                if (copyMessage) {
                    copyMessage.style.display =
                        "block";
                }


                setTimeout(() => {

                    copyDiscordButton.textContent =
                        "Copy Discord Username";


                    if (copyMessage) {
                        copyMessage.style.display =
                            "none";
                    }

                }, 2000);


            } catch (error) {

                /*
                Fallback for browsers where
                navigator.clipboard doesn't work.
                */

                const textArea =
                    document.createElement("textarea");

                textArea.value =
                    discordUsername;

                document.body.appendChild(
                    textArea
                );

                textArea.select();

                document.execCommand("copy");

                textArea.remove();


                copyDiscordButton.textContent =
                    "Copied!";


                if (copyMessage) {
                    copyMessage.style.display =
                        "block";
                }


                setTimeout(() => {

                    copyDiscordButton.textContent =
                        "Copy Discord Username";


                    if (copyMessage) {
                        copyMessage.style.display =
                            "none";
                    }

                }, 2000);

            }

        }
    );

}


// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const revealItems = document.querySelectorAll(
    `
    .about-card,
    .project-card,
    .contact-box
    `
);


revealItems.forEach((item) => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(30px)";

    item.style.transition =
        "opacity 0.65s ease, transform 0.65s ease";

});


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealItems.forEach((item) => {

    revealObserver.observe(item);

});


// ========================================
// HERO ENTRANCE ANIMATION
// ========================================

const heroContent =
    document.querySelector(".hero-content");


if (heroContent) {

    heroContent.style.opacity = "0";

    heroContent.style.transform =
        "translateY(25px)";


    window.addEventListener(
        "load",
        () => {

            setTimeout(() => {

                heroContent.style.transition =
                    "opacity 0.8s ease, transform 0.8s ease";

                heroContent.style.opacity =
                    "1";

                heroContent.style.transform =
                    "translateY(0)";

            }, 150);

        }
    );

}


// ========================================
// PROJECT CARD EFFECT
// ========================================

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.boxShadow =
                "0 20px 55px rgba(139, 92, 246, 0.18)";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.boxShadow = "";

        }
    );

});


// ========================================
// WEBSITE READY
// ========================================

console.log(
    "%cpurpleknightasa",
    "color: #a78bfa; font-size: 20px; font-weight: bold;"
);

console.log(
    "Website loaded successfully."
);