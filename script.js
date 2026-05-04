/* 
=========================================================
NAV
=========================================================
*/

const about               = document.querySelector('#about');
const experienceLanding   = document.querySelector('#experience-landing');
const projectsLanding     = document.querySelector('#projects-landing');
const publications        = document.querySelector('#work-in-progress');

const navLinks = {
    about:        document.querySelector('a[href="#about"]'),
    experience:   document.querySelector('a[href="#experience-landing"]'),
    projects:     document.querySelector('a[href="#projects-landing"]'),
    publications: document.querySelector('a[href="#work-in-progress"]')
};

let lastScroll = 0;
let ignoreScroll = false; // Suppress scroll logic after a click

// Remove nav-active from all links, then apply to the current one
function setActiveLink(active) {
    Object.values(navLinks).forEach(link => link.classList.remove('nav-active'));
    if (active && navLinks[active]) {
        navLinks[active].classList.add('nav-active');
    }
}

/* On click — show nav immediately and suppress scroll logic briefly */
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        ignoreScroll = true;
        showNav();
        setTimeout(() => { ignoreScroll = false; }, 800);
    });
});

// Note: We are only allowed one 'scroll' event listener
window.addEventListener('scroll', () => {

    if (ignoreScroll) return;

    const currentScroll   = window.scrollY;
    const aboutTop        = about.offsetTop;
    const experienceTop   = experienceLanding.offsetTop;
    const projectsTop     = projectsLanding.offsetTop;
    const publicationsTop = publications.offsetTop;

    // On a section landing — always show nav
    const onSectionLanding = (
        (currentScroll >= experienceTop && currentScroll < experienceTop + experienceLanding.offsetHeight) ||
        (currentScroll >= projectsTop   && currentScroll < projectsTop   + projectsLanding.offsetHeight)
    );

    // Separately, nav-active based on section
    if (currentScroll >= publicationsTop) {
        setActiveLink('publications');
    } else if (currentScroll >= projectsTop) {
        setActiveLink('projects');
    } else if (currentScroll >= experienceTop) {
        setActiveLink('experience');
    } else if (currentScroll >= aboutTop) {
        setActiveLink('about');
    } else {
        setActiveLink(null);
    }
    lastScroll = currentScroll;
});

/* 
=========================================================
LANDING
=========================================================
*/

const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollIndicator.classList.add('hidden');
    } else {
        scrollIndicator.classList.remove('hidden');
    }
});