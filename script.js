// ========================================
// PurpleKnightASA Website
// ========================================


// ========================================
// CURRENT YEAR
// ========================================

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const header =
    document.querySelector(".header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.style.background =
                "rgba(8, 8, 13, 0.96)";

            header.style.boxShadow =
                "0 10px 35px rgba(0, 0, 0, 0.28)";

        } else {

            header.style.background =
                "rgba(8, 8, 13, 0.84)";

            header.style.boxShadow =
                "none";

        }

    }
);


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection =
        "home";


    sections.forEach(
        (section) => {

            const top =
                section.offsetTop - 160;

            const height =
                section.offsetHeight;


            if (
                window.scrollY >= top &&
                window.scrollY <
                top + height
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        (link) => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

window.addEventListener(
    "load",
    updateActiveNavigation
);


// ========================================
// SMOOTH INTERNAL LINKS
// ========================================

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            (event) => {

                const target =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !target ||
                    target === "#"
                ) {
                    return;
                }


                const section =
                    document.querySelector(
                        target
                    );


                if (section) {

                    event.preventDefault();

                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);


// ========================================
// COPY DISCORD USERNAME
// ========================================

const copyDiscord =
    document.getElementById(
        "copyDiscord"
    );

const copyMessage =
    document.getElementById(
        "copyMessage"
    );


if (copyDiscord) {

    copyDiscord.addEventListener(
        "click",
        async () => {

            const username =
                "purpleknightasa";


            try {

                await navigator.clipboard
                    .writeText(username);


                copyDiscord.textContent =
                    "Copied!";


                if (copyMessage) {

                    copyMessage.style.display =
                        "block";

                }


                setTimeout(
                    () => {

                        copyDiscord.textContent =
                            "Copy Username";


                        if (copyMessage) {

                            copyMessage.style.display =
                                "none";

                        }

                    },
                    2000
                );

            } catch (error) {

                copyDiscord.textContent =
                    username;

            }

        }
    );

}


// ========================================
// REVEAL ANIMATIONS
// ========================================

const revealItems =
    document.querySelectorAll(
        `
        .about-card,
        .info-card,
        .project-card,
        .social-card,
        .contact-box
        `
    );


revealItems.forEach(
    (item) => {

        item.style.opacity =
            "0";

        item.style.transform =
            "translateY(30px)";

        item.style.transition =
            `
            opacity 0.65s ease,
            transform 0.65s ease
            `;

    }
);


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


revealItems.forEach(
    (item) => {

        revealObserver.observe(
            item
        );

    }
);


// ========================================
// HERO LOAD ANIMATION
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