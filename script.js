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
            "rgba(6, 6, 9, 0.97)";

        header.style.boxShadow =
            "0 12px 35px rgba(0, 0, 0, 0.35)";

    } else {

        header.style.background =
            "rgba(6, 6, 9, 0.82)";

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
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(function (section) {

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

    });


    navLinks.forEach(function (link) {

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
    updateActiveNavigation
);

window.addEventListener(
    "load",
    updateActiveNavigation
);


// ========================================
// SMOOTH SCROLLING
// ========================================

const pageLinks =
    document.querySelectorAll('a[href^="#"]');

pageLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetID =
                link.getAttribute("href");

            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetID);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


// ========================================
// COPY DISCORD USERNAME
// ========================================

const copyButton =
    document.getElementById("copyDiscord");

const copyMessage =
    document.getElementById("copyMessage");

const discordUsername =
    "purpleknightasa";


if (copyButton) {

    copyButton.addEventListener(
        "click",
        function () {

            if (
                navigator.clipboard &&
                navigator.clipboard.writeText
            ) {

                navigator.clipboard
                    .writeText(discordUsername)
                    .then(function () {

                        showCopySuccess();

                    })
                    .catch(function () {

                        fallbackCopy();

                    });

            } else {

                fallbackCopy();

            }

        }
    );

}


// ========================================
// FALLBACK COPY
// ========================================

function fallbackCopy() {

    const textArea =
        document.createElement("textarea");

    textArea.value =
        discordUsername;

    textArea.style.position =
        "fixed";

    textArea.style.opacity =
        "0";

    document.body.appendChild(
        textArea
    );

    textArea.focus();
    textArea.select();

    document.execCommand("copy");

    textArea.remove();

    showCopySuccess();

}


// ========================================
// COPY SUCCESS MESSAGE
// ========================================

function showCopySuccess() {

    if (!copyButton) {
        return;
    }

    copyButton.textContent =
        "Copied!";

    if (copyMessage) {

        copyMessage.style.display =
            "block";

    }

    setTimeout(function () {

        copyButton.textContent =
            "Copy Discord Username";

        if (copyMessage) {

            copyMessage.style.display =
                "none";

        }

    }, 2200);

}


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
    document.querySelectorAll(
        ".about-card, " +
        ".info-card, " +
        ".vantacrest-main-card, " +
        ".feature-card, " +
        ".founder-section, " +
        ".skill-card, " +
        ".project-card, " +
        ".contact-box"
    );


revealElements.forEach(function (element) {

    element.style.opacity =
        "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

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
                threshold: 0.10
            }

        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        function (element) {

            element.style.opacity =
                "1";

            element.style.transform =
                "translateY(0)";

        }
    );

}


// ========================================
// HERO ANIMATION
// ========================================

const heroContent =
    document.querySelector(".hero-content");

if (heroContent) {

    heroContent.style.opacity =
        "0";

    heroContent.style.transform =
        "translateY(25px)";

    window.addEventListener(
        "load",
        function () {

            setTimeout(
                function () {

                    heroContent.style.transition =
                        "opacity 0.9s ease, transform 0.9s ease";

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
// VANTACREST LOGO HOVER
// ========================================

const vantacrestLogo =
    document.querySelector(".vantacrest-logo");

if (vantacrestLogo) {

    vantacrestLogo.addEventListener(
        "mouseenter",
        function () {

            vantacrestLogo.style.transform =
                "rotate(0deg) scale(1.05)";

        }
    );


    vantacrestLogo.addEventListener(
        "mouseleave",
        function () {

            vantacrestLogo.style.transform =
                "rotate(6deg) scale(1)";

        }
    );

}


// ========================================
// WEBSITE LOADED
// ========================================

console.log(
    "PurpleKnightASA website loaded successfully."
);

console.log(
    "Founder of Vantacrest SMP"
);