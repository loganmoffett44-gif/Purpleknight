/* ========================================
   PURPLEKNIGHTASA WEBSITE
======================================== */


/* RESET */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 75px;
}

body {
    min-height: 100vh;

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    background: #08080d;
    color: #ffffff;

    line-height: 1.6;

    overflow-x: hidden;
}


/* COLORS */

:root {
    --purple: #8b5cf6;
    --purple-light: #a78bfa;
    --purple-dark: #6d28d9;

    --background: #08080d;
    --background-two: #0f0f17;

    --card: #15151f;

    --text: #ffffff;
    --muted: #aaaab6;

    --border:
        rgba(255, 255, 255, 0.08);
}


/* GENERAL */

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}

.section {
    padding: 110px 8%;
}

.dark-section {
    background: var(--background-two);
}

.eyebrow {
    margin-bottom: 12px;

    color: var(--purple-light);

    font-size: 12px;
    font-weight: 800;

    letter-spacing: 4px;

    text-transform: uppercase;
}

.section-header {
    max-width: 750px;

    margin: 0 auto 55px;

    text-align: center;
}

.section-header h2 {
    margin-bottom: 14px;

    font-size:
        clamp(36px, 5vw, 52px);

    line-height: 1.1;
}

.section-header > p:last-child {
    color: var(--muted);

    font-size: 17px;
}


/* NAVBAR */

.header {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    background:
        rgba(8, 8, 13, 0.88);

    backdrop-filter:
        blur(16px);

    border-bottom:
        1px solid var(--border);

    transition:
        background 0.25s ease,
        box-shadow 0.25s ease;
}

.navbar {
    width: 100%;
    max-width: 1250px;

    min-height: 74px;

    margin: auto;

    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: white;

    font-size: 23px;
    font-weight: 900;

    letter-spacing: -0.5px;
}

.logo span {
    color: var(--purple-light);

    text-shadow:
        0 0 15px
        rgba(167, 139, 250, 0.35);
}

.nav-links {
    display: flex;
    align-items: center;

    gap: 30px;
}

.nav-links a {
    position: relative;

    padding: 8px 0;

    color: var(--muted);

    font-size: 14px;
    font-weight: 600;

    transition: 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--purple-light);
}

.nav-links a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 2px;

    width: 0;
    height: 2px;

    background: var(--purple-light);

    border-radius: 20px;

    transition: width 0.2s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}


/* HERO */

.hero {
    position: relative;

    min-height: 100vh;

    padding:
        120px 30px 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    overflow: hidden;
}

.hero-glow {
    position: absolute;

    inset: 0;

    background:
        radial-gradient(
            circle at 50% 35%,
            rgba(139, 92, 246, 0.30),
            transparent 32%
        ),
        radial-gradient(
            circle at 15% 80%,
            rgba(109, 40, 217, 0.12),
            transparent 25%
        ),
        radial-gradient(
            circle at 85% 75%,
            rgba(167, 139, 250, 0.08),
            transparent 25%
        );

    pointer-events: none;
}

.hero-content {
    position: relative;

    z-index: 2;

    max-width: 950px;
}

.hero h1 {
    margin-bottom: 25px;

    font-size:
        clamp(52px, 9vw, 100px);

    line-height: 0.95;

    letter-spacing: -3px;
}

.hero h1 span {
    color: var(--purple-light);

    text-shadow:
        0 0 25px
        rgba(139, 92, 246, 0.50),
        0 0 55px
        rgba(139, 92, 246, 0.20);
}

.hero-text {
    max-width: 700px;

    margin: auto;

    color: var(--muted);

    font-size: 18px;
}

.hero-buttons {
    margin-top: 35px;

    display: flex;
    justify-content: center;

    gap: 14px;
}


/* BUTTONS */

.button {
    min-width: 145px;

    padding:
        13px 22px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 9px;

    font-size: 14px;
    font-weight: 800;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
}

.primary-button {
    color: white;

    background:
        linear-gradient(
            135deg,
            var(--purple-dark),
            var(--purple)
        );

    box-shadow:
        0 0 25px
        rgba(139, 92, 246, 0.28);
}

.primary-button:hover {
    transform:
        translateY(-3px);

    box-shadow:
        0 0 35px
        rgba(139, 92, 246, 0.45);
}

.secondary-button {
    color: white;

    background:
        rgba(255, 255, 255, 0.03);

    border:
        1px solid
        rgba(255, 255, 255, 0.14);
}

.secondary-button:hover {
    transform:
        translateY(-3px);

    background:
        rgba(255, 255, 255, 0.08);
}


/* ABOUT */

.about-layout {
    width: 100%;
    max-width: 1150px;

    margin: auto;

    display: grid;

    grid-template-columns:
        1.2fr 1fr;

    gap: 25px;

    align-items: stretch;
}

.about-card {
    padding: 40px;

    border-radius: 20px;

    background:
        linear-gradient(
            145deg,
            #171721,
            #101017
        );

    border:
        1px solid var(--border);

    box-shadow:
        0 20px 50px
        rgba(0, 0, 0, 0.18);
}

.profile-badge {
    width: 70px;
    height: 70px;

    margin-bottom: 22px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

    background:
        linear-gradient(
            135deg,
            var(--purple-dark),
            var(--purple)
        );

    font-size: 22px;
    font-weight: 900;

    box-shadow:
        0 0 30px
        rgba(139, 92, 246, 0.30);
}

.about-card h3 {
    margin-bottom: 14px;

    font-size: 30px;
}

.about-card p {
    margin-bottom: 15px;

    color: var(--muted);
}

.about-card p:last-child {
    margin-bottom: 0;
}


/* STATUS CARDS */

.status-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 15px;
}

.status-card {
    position: relative;

    min-height: 145px;

    padding: 23px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 16px;

    background:
        linear-gradient(
            145deg,
            #171721,
            #101017
        );

    border:
        1px solid var(--border);

    overflow: hidden;

    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
}

.status-card::before {
    content: "";

    position: absolute;

    width: 100px;
    height: 100px;

    top: -60px;
    right: -60px;

    border-radius: 50%;

    background:
        rgba(139, 92, 246, 0.22);

    filter: blur(25px);
}

.status-card:hover {
    transform:
        translateY(-5px);

    border-color:
        rgba(167, 139, 250, 0.40);

    box-shadow:
        0 15px 35px
        rgba(0, 0, 0, 0.25);
}

.status-label {
    position: relative;

    z-index: 2;

    margin-bottom: 7px;

    color: var(--purple-light);

    font-size: 10px;
    font-weight: 900;

    letter-spacing: 2px;
}

.status-card strong {
    position: relative;

    z-index: 2;

    margin-bottom: 4px;

    color: white;

    font-size: 18px;
}

.status-card p {
    position: relative;

    z-index: 2;

    color: #858590;

    font-size: 12px;
}


/* PROJECTS */

.project-grid {
    width: 100%;
    max-width: 1150px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 22px;
}

.project-card {
    min-height: 290px;

    padding: 32px;

    border-radius: 18px;

    background:
        linear-gradient(
            145deg,
            #171720,
            #101017
        );

    border:
        1px solid var(--border);

    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
}

.project-card:hover {
    transform:
        translateY(-7px);

    border-color:
        rgba(139, 92, 246, 0.45);

    box-shadow:
        0 20px 50px
        rgba(0, 0, 0, 0.30);
}

.project-icon {
    margin-bottom: 22px;

    font-size: 36px;
}

.project-card h3 {
    margin-bottom: 10px;

    font-size: 24px;
}

.project-card p {
    margin-bottom: 22px;

    color: var(--muted);
}

.project-status {
    display: inline-block;

    padding:
        6px 10px;

    border-radius: 999px;

    color: var(--purple-light);

    background:
        rgba(139, 92, 246, 0.12);

    font-size: 10px;
    font-weight: 900;

    letter-spacing: 1px;
}


/* CONTACT */

.contact-section {
    padding: 110px 8%;

    background:
        radial-gradient(
            circle at center,
            rgba(139, 92, 246, 0.17),
            transparent 50%
        );
}

.contact-box {
    width: 100%;
    max-width: 900px;

    margin: auto;

    padding:
        65px 35px;

    text-align: center;

    border-radius: 22px;

    background:
        linear-gradient(
            145deg,
            #27123d,
            #100b19
        );

    border:
        1px solid
        rgba(139, 92, 246, 0.28);

    box-shadow:
        0 25px 65px
        rgba(0, 0, 0, 0.25);
}

.contact-box h2 {
    margin-bottom: 14px;

    font-size:
        clamp(38px, 5vw, 52px);
}

.contact-text {
    max-width: 650px;

    margin:
        0 auto 30px;

    color: #c2c2cc;

    font-size: 17px;
}


/* DISCORD */

.discord-box {
    width: 100%;
    max-width: 430px;

    margin: auto;

    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;

    border-radius: 15px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid
        rgba(167, 139, 250, 0.30);
}

.discord-box span {
    color: #aaaab4;

    font-size: 10px;
    font-weight: 800;

    letter-spacing: 2px;
}

.discord-box strong {
    color: var(--purple-light);

    font-size: 25px;

    text-shadow:
        0 0 15px
        rgba(167, 139, 250, 0.25);
}

.discord-box button {
    width: 100%;

    margin-top: 10px;

    padding:
        12px 18px;

    border: none;
    border-radius: 9px;

    cursor: pointer;

    color: white;

    background:
        linear-gradient(
            135deg,
            var(--purple-dark),
            var(--purple)
        );

    font-size: 13px;
    font-weight: 800;

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.discord-box button:hover {
    transform:
        translateY(-2px);

    box-shadow:
        0 0 25px
        rgba(139, 92, 246, 0.35);
}

.copy-message {
    display: none;

    margin-top: 15px;

    color: var(--purple-light);

    font-size: 14px;
    font-weight: 600;
}


/* FOOTER */

.footer {
    min-height: 130px;

    padding:
        30px 8%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    background: #060609;

    border-top:
        1px solid var(--border);
}

.footer-logo {
    color: white;

    font-size: 21px;
    font-weight: 900;
}

.footer-logo span {
    color: var(--purple-light);
}

.footer div p,
.footer > p {
    margin-top: 4px;

    color: #777781;

    font-size: 13px;
}


/* SCROLLBAR */

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #08080d;
}

::-webkit-scrollbar-thumb {
    background: #3f2a67;

    border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--purple-dark);
}


/* MOBILE */

@media (max-width: 900px) {

    .nav-links {
        display: none;
    }

    .about-layout {
        grid-template-columns: 1fr;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }

}


@media (max-width: 600px) {

    .navbar {
        min-height: 68px;

        padding: 0 20px;
    }

    .logo {
        font-size: 18px;
    }

    .hero {
        min-height: 100svh;

        padding:
            110px 20px 60px;
    }

    .hero h1 {
        font-size:
            clamp(42px, 13vw, 65px);

        letter-spacing: -2px;
    }

    .hero-text {
        font-size: 16px;
    }

    .hero-buttons {
        max-width: 290px;

        margin:
            30px auto 0;

        flex-direction: column;
    }

    .button {
        width: 100%;
    }

    .section,
    .contact-section {
        padding:
            85px 20px;
    }

    .about-card {
        padding: 27px;
    }

    .status-grid {
        grid-template-columns: 1fr;
    }

    .status-card {
        min-height: 125px;
    }

    .project-card {
        padding: 27px;
    }

    .contact-box {
        padding:
            50px 20px;
    }

    .discord-box strong {
        font-size: 21px;
    }

    .footer {
        flex-direction: column;

        text-align: center;
    }

}