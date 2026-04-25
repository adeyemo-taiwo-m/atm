@import "tailwindcss";

@theme {
/_ Breakpoints _/
--breakpoint-\*: initial;
--breakpoint-tab: 40rem;
--breakpoint-lap: 64rem;
--breakpoint-desk: 80rem;

/_ ===================================================== _/
/_ 🎨 COLOR SYSTEM _/
/_ ===================================================== _/

/_ Gradient Start (Purple-Blue) _/
--color-primary: #5b3cf2;
--color-primary-hover: #4a39e0;
--color-primary-active: #3a31cc;

/_ Divider (Black) _/
--color-divider: #000000;

/_ Medium Blue _/
--color-secondary: #347cff;
--color-secondary-hover: #2e6fde;
--color-secondary-active: #265fbd;

/_ Sky Blue _/
--color-accent: #4db7ff;
--color-accent-hover: #45a4e6;
--color-accent-active: #3a8fc9;

/_ Light Cyan _/
--color-light: #c8f2ff;
--color-light-hover: #b3e8ff;
--color-light-active: #9edfff;

/_ SUCCESS (Green) _/
--color-success: #17b890;
--color-success-hover: #129d7b;
--color-success-active: #0e8367;

--color-green-light: #e6f6f4;
--color-green-light-hover: #d9f2ef;
--color-green-light-active: #b0e4dd;

/_ WARNING (Yellow / Orange) _/
--color-warning: #f5a623;
--color-warning-hover: #e29412;
--color-warning-active: #cc830f;

--color-yellow-light: #fff9e6;
--color-yellow-light-hover: #fff6da;
--color-yellow-light-active: #ffecb2;

/_ ERROR (Red) _/
--color-error: #e63946;
--color-error-hover: #cf2e3b;
--color-error-active: #b92433;

--color-red-light: #ffdadc;
--color-red-light-hover: #ffc9cd;
--color-red-light-active: #ffb3b8;

/_ NEUTRALS _/
/_ --color-neutral-100: #f6f6f6;
--color-neutral-200: #eaeaea;
--color-neutral-300: #d2d3d3;
--color-neutral-400: #b1b2b2;
--color-neutral-500: #8e9090;
--color-neutral-600: #797a7b;
--color-neutral-700: #57595a;
--color-neutral-800: #363939;
--color-neutral-900: #1f2223;
--color-white: #ffffff; _/

/_ Neutral Gradient (Gray → Charcoal) _/
/_ --gradient-neutral: linear-gradient(90deg, #b1b2b2 0%, #363939 100%); _/

/_ LIGHTS & BACKGROUND _/
--color-light: #e5f6fb;
--color-light-hover: #d7e2ee;
--color-light-active: #b2c8de;

--color-white: #ffffff;
--color-white-hover: #f3f6fa;

/_ DARKS & TEXT _/
--color-dark: #0f1e33;
--color-dark-hover: #0b182a;
--color-dark-active: #080f1f;

--color-black: #000000;
--color-black-hover: #0b0b0b;

/_ BRAND NEUTRAL TONES _/
--color-content-bg: #f8f8f8;
--color-border: #e0e0e0;
--color-shadow: rgba(0, 0, 0, 0.08);

/_ GOLD / HIGHLIGHT _/
--color-gold: #ffe393;
--color-gold-hover: #ffd970;
--color-gold-active: #ffc94c;

/_ anination _/
--animate-star-movement-bottom: star-movement-bottom linear infinite alternate;
--animate-star-movement-top: star-movement-top linear infinite alternate;

@keyframes star-movement-bottom {
0% {
transform: translate(0%, 0%);
opacity: 1;
}
100% {
transform: translate(-100%, 0%);
opacity: 0;
}
}

@keyframes star-movement-top {
0% {
transform: translate(0%, 0%);
opacity: 1;
}
100% {
transform: translate(100%, 0%);
opacity: 0;
}
}
}

/_ Dark _/
.dark {
/_ Breakpoints remain the same _/
--breakpoint-mob: initial;
--breakpoint-tab: 40rem;
--breakpoint-lap: 64rem;
--breakpoint-desk: 80rem;

/_ Primary (Purple-Blue) — Darker, deeper tones _/
--color-primary: #7866ff;
--color-primary-hover: #6a59f3;
--color-primary-active: #5c4bdd;

/_ Divider _/
--color-divider: #ffffff1a;

/_ Secondary (Blue) _/
--color-secondary: #4d8aff;
--color-secondary-hover: #4179e6;
--color-secondary-active: #3568c7;

/_ Accent (Sky Blue) _/
--color-accent: #67c9ff;
--color-accent-hover: #56b4eb;
--color-accent-active: #4699cb;

/_ Light Cyan → Soft blue highlights _/
--color-light: #2a3f4a;
--color-light-hover: #314954;
--color-light-active: #395462;

/_ SUCCESS (Green) _/
--color-success: #1ad1a5;
--color-success-hover: #16b38e;
--color-success-active: #129778;

--color-green-light: #1f3b35;
--color-green-light-hover: #24433d;
--color-green-light-active: #2c4e48;

/_ WARNING (Yellow / Orange) _/
--color-warning: #ffb545;
--color-warning-hover: #e79f34;
--color-warning-active: #c98b2c;

--color-yellow-light: #4a3b1f;
--color-yellow-light-hover: #554528;
--color-yellow-light-active: #665331;

/_ ERROR (Red) _/
--color-error: #ff5a67;
--color-error-hover: #e84855;
--color-error-active: #cc3945;

--color-red-light: #4d2326;
--color-red-light-hover: #59282b;
--color-red-light-active: #632e31;

/_ NEUTRALS _/
--color-neutral-100: #1e1f22;
--color-neutral-200: #26272b;
--color-neutral-300: #323337;
--color-neutral-400: #46474c;
--color-neutral-500: #5b5d62;
--color-neutral-600: #707276;
--color-neutral-700: #8b8d91;
--color-neutral-800: #b4b6ba;
--color-neutral-900: #e1e2e5;
--color-white: #000000;

/_ Light/Background (dark mode versions) _/
--color-light: #1f2a32;
--color-light-hover: #243039;
--color-light-active: #2a3842;

--color-white: #1b1c1f;
--color-white-hover: #222327;

/_ Dark & Text _/
--color-dark: #e8edf7;
--color-dark-hover: #d4dae7;
--color-dark-active: #c1c8d7;

--color-black: #ffffff;
--color-black-hover: #f0f0f0;

/_ BRAND NEUTRAL TONES _/
--color-content-bg: #121417;
--color-border: #2b2d31;
--color-shadow: rgba(0, 0, 0, 0.4);

/_ Gold _/
--color-gold: #f6d17a;
--color-gold-hover: #e5c06a;
--color-gold-active: #d1aa55;

/_ Animations stay unchanged _/
--animate-star-movement-bottom: star-movement-bottom linear infinite alternate;
--animate-star-movement-top: star-movement-top linear infinite alternate;
}
/_ Keyframes remain the same _/
@keyframes star-movement-bottom {
0% {
transform: translate(0%, 0%);
opacity: 1;
}
100% {
transform: translate(-100%, 0%);
opacity: 0;
}
}

@keyframes star-movement-top {
0% {
transform: translate(0%, 0%);
opacity: 1;
}
100% {
transform: translate(100%, 0%);
opacity: 0;
}
}

body {
font-family: "Inter", sans-serif;
background-color: var(--color-white);
color: var(--color-dark);
overflow-x: hidden;
}

h1,
h2,
h3,
h4,
.heading {
font-family: "Syne", sans-serif;
font-weight: 800;
letter-spacing: -0.02em;
}

.font-stylish {
font-family: "Syne", sans-serif;
}

.cursor-glow {
pointer-events: none;
position: fixed;
width: 800px;
height: 800px;
background: radial-gradient(
circle at center,
rgba(91, 60, 242, 0.05) 0%,
transparent 70%
);
z-index: 9999;
transform: translate(-50%, -50%);
transition: opacity 0.3s ease;
}

.beams-container {
position: relative;
width: 100%;
height: 100%;
}

.custom-rays {
background: linear-gradient(
to bottom,
rgba(255, 255, 255, 0.15),
rgba(255, 255, 255, 0)
);
}

:root {
/_ NEUTRAL GRADIENT (moved to :root so it exists at runtime) _/
--gradient-neutral: linear-gradient(90deg, #b1b2b2 0%, #363939 100%);
}

/_ Gradient text helper _/
.gradient-text {
display: inline-block; /_ prevents some clipping issues _/
background-image: var(--gradient-neutral);
background-repeat: no-repeat;
background-size: 100% 100%;
-webkit-background-clip: text; /_ Chrome / Safari _/
background-clip: text; /_ Firefox (behind a flag older) _/
-webkit-text-fill-color: transparent; /_ make text transparent for webkit _/
color: transparent; /_ fallback _/
}
