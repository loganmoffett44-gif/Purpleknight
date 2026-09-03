// ========================================
// PURPLEKNIGHTASA
// OFFICIAL WEBSITE
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
// HEADER SCROLL EFFECT
// ========================================

const header =
    document.querySelector(".header");


function updateHeader() {

    if (!header) {
        return;
    }


    if (window.scrollY > 40) {

        header.style.background =
            "rgba(7, 7, 12, 0.97)";

        header.style.boxShadow =
            "0 12px 35px rgba(0, 0, 0, 0.35)";

    } else {

        header.style.background =
            "rgba(7, 7, 12, 0.82)";

        header.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


window.addEventListener(
    "load",
    updateHeader
);


// ========================================
// ACTIVE NAVIGATION
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
        section => {

            const sectionTop =
                section.offsetTop - 170;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + currentSection
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
// SMOOTH SCROLLING
// ========================================

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute(
                        "href"
                    );


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


                if (!targetSection) {

                    return;

                }


                event.preventDefault();


                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    }
);


// ========================================
// COPY DISCORD USERNAME
// ========================================

const copyDiscordButton =
    document.getElementById(
        "copyDiscord"
    );


const copyMessage =
    document.getElementById(
        "copyMessage"
    );


const discordUsername =
    "purpleknightasa";


if (copyDiscordButton) {

    copyDiscordButton.addEventListener(
        "click",
        async () => {

            try {

                await navigator.clipboard
                    .writeText(
                        discordUsername
                    );


                showCopiedMessage();


            } catch (error) {

                fallbackCopyDiscord();

            }

        }
    );

}


// ========================================
// FALLBACK COPY
// ========================================

function fallbackCopyDiscord() {

    const textArea =
        document.createElement(
            "textarea"
        );


    textArea.value =
        discordUsername;


    textArea.style.position =
        "fixed";


    textArea.style.opacity =
        "0";


    document.body.appendChild(
        textArea
    );


    textArea.select();


    document.execCommand(
        "copy"
    );


    textArea.remove();


    showCopiedMessage();

}


// ========================================
// COPY MESSAGE
// ========================================

function showCopiedMessage() {

    if (!copyDiscordButton) {
        return;
    }


    copyDiscordButton.textContent =
        "Copied!";


    if (copyMessage) {

        copyMessage.style.display =
            "block";

    }


    setTimeout(
        () => {

            copyDiscordButton.textContent =
                "Copy Username";


            if (copyMessage) {

                copyMessage.style.display =
                    "none";

            }

        },

        2200
    );

}


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
    document.querySelectorAll(
        `
        .main-about-card,
        .info-card,
        .vantacrest-card,
        .skill-card,
        .contact-box
        `
    );


revealElements.forEach(
    element => {

        element.style.opacity =
            "0";


        element.style.transform =
            "translateY(35px)";


        element.style.transition =
            `
            opacity 0.7s ease,
            transform 0.7s ease
            `;

    }
);


// ========================================
// REVEAL OBSERVER
// ========================================

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

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
    element => {

        revealObserver.observe(
            element
        );

    }
);


// ========================================
// HERO ENTRANCE
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
                        opacity 0.9s ease,
                        transform 0.9s ease
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
// INFO CARD STAGGER
// ========================================

const infoCards =
    document.querySelectorAll(
        ".info-card"
    );


infoCards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 0.05}s`;

    }
);


// ========================================
// SKILL CARD GLOW
// ========================================

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillCards.forEach(
    card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.boxShadow =
                    `
                    0 22px 55px
                    rgba(139, 92, 246, 0.15)
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
// VANTACREST SYMBOL EFFECT
// ========================================

const vantacrestSymbol =
    document.querySelector(
        ".vantacrest-symbol"
    );


if (vantacrestSymbol) {

    vantacrestSymbol.addEventListener(
        "mouseenter",
        () => {

            vantacrestSymbol.style.transform =
                "rotate(0deg) scale(1.05)";

        }
    );


    vantacrestSymbol.addEventListener(
        "mouseleave",
        () => {

            vantacrestSymbol.style.transform =
                "rotate(6deg) scale(1)";

        }
    );


    vantacrestSymbol.style.transition =
        "transform 0.25s ease";

}


// ========================================
// WEBSITE LOADED
// ========================================

console.log(
    "%cpurpleknightasa",
    `
    color: #a78bfa;
    font-size: 22px;
    font-weight: bold;
    `
);


console.log(
    "%cFounder of Vantacrest SMP",
    `
    color: #c4b5fd;
    font-size: 14px;
    `
);


console.log(
    "%cWebsite loaded successfully.",
    `
    color: white;
    font-size: 12px;
    `
);