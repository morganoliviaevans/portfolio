/* 
=========================================================
MEDIA
=========================================================
*/

const lightbox = GLightbox();

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

/* 
=========================================================
EXPERIENCE ACCORDION
=========================================================
*/

const experienceCards   = document.querySelectorAll('.experience-card');
const experienceDetail  = document.getElementById('experience-detail');
const detailPanels      = document.querySelectorAll('.experience-detail-panel');

experienceCards.forEach(card => {
    card.addEventListener('click', () => {
        const targetId      = card.dataset.target;
        const targetPanel   = document.getElementById(targetId);
        const isAlreadyOpen = card.classList.contains('card-active');

        /* Reset all cards to grayscale */
        experienceCards.forEach(c => {
            c.classList.remove('card-active');
            c.classList.add('card-inactive');
        });

        /* Hide all panels */
        detailPanels.forEach(p => p.classList.remove('active'));

        if (isAlreadyOpen) {
            /* Clicking active card — collapse everything */
            experienceDetail.classList.remove('open');
            experienceCards.forEach(c => c.classList.remove('card-inactive'));
        } else {
            /* Open clicked card's panel */
            card.classList.remove('card-inactive');
            card.classList.add('card-active');
            targetPanel.classList.add('active');
            experienceDetail.classList.add('open');
        }
    });
});

/* 
=========================================================
PROJECTS ACCORDION
=========================================================
*/

const projectsCards   = document.querySelectorAll('.projects-card');
const projectsDetail  = document.getElementById('projects-detail');
const projectsDetailPanels    = document.querySelectorAll('.projects-detail-panel');

projectsCards.forEach(card => {
    card.addEventListener('click', () => {
        const targetId      = card.dataset.target;
        const targetPanel   = document.getElementById(targetId);
        const isAlreadyOpen = card.classList.contains('card-active');

        /* Reset all cards to grayscale */
        projectsCards.forEach(c => {
            c.classList.remove('card-active');
            c.classList.add('card-inactive');
        });

        /* Hide all panels */
        projectsDetailPanels.forEach(p => p.classList.remove('active'));

        if (isAlreadyOpen) {
            /* Clicking active card — collapse everything */
            projectsDetail.classList.remove('open');
            projectsCards.forEach(c => c.classList.remove('card-inactive'));
        } else {
            /* Open clicked card's panel */
            card.classList.remove('card-inactive');
            card.classList.add('card-active');
            targetPanel.classList.add('active');
            projectsDetail.classList.add('open');
        }
    });
});

/* 
=========================================================
COMPARISON SLIDER
=========================================================
*/
document.querySelectorAll('.comparison-slider').forEach(slider => {
    const range    = slider.querySelector('.comparison-range');
    const after    = slider.querySelector('.comparison-after');
    const divider  = slider.querySelector('.comparison-divider');

    range.addEventListener('input', () => {
        const val = range.value;
        after.style.clipPath  = `inset(0 ${100 - val}% 0 0)`;
        divider.style.left    = `${val}%`;
    });
});