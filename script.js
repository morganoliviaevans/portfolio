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

const about             = document.querySelector('#about');
const experienceLanding = document.querySelector('#experience-landing');
const projectsLanding   = document.querySelector('#projects-landing');

const navLinks = {
    about:      document.querySelector('a[href="#about"]'),
    experience: document.querySelector('a[href="#experience-landing"]'),
    projects:   document.querySelector('a[href="#projects-landing"]'),
};

const landingScrollIndicator   = document.querySelector('.landing-scroll-indicator');
const aboutScrollIndicator     = document.querySelector('.about-scroll-indicator');
const navHome                  = document.querySelector('.nav-home a');
const OFFSET                   = 200; // How many pixels before a section top to trigger nav-active 

const experienceClickIndicator = document.querySelector('.experience-click-indicator');
const projectsClickIndicator   = document.querySelector('.projects-click-indicator');

let lastScroll   = 0;
let ignoreScroll = false; // Suppress scroll logic after a click

// Remove nav-active from all links, then apply to the current one
function setActiveLink(active) {
    Object.values(navLinks).forEach(link => link.classList.remove('nav-active'));
    if (active && navLinks[active]) {
        navLinks[active].classList.add('nav-active');
    }
}

// On click — show nav immediately and suppress scroll logic briefly
document.querySelectorAll('nav ul li a').forEach(link => {

    link.addEventListener('click', () => {
        /* Set nav-active based on which link was clicked */
        const href = link.getAttribute('href');

        if (href === '#about') {
            setActiveLink('about');
        } else if (href === '#experience-landing') {
            setActiveLink('experience');
        } else if (href === '#projects-landing') {
            setActiveLink('projects');
        } else { setActiveLink(null); }

        setTimeout(() => { ignoreScroll = false; }, 800);
    });
});

/* 
=========================================================
SCROLL INDICATOR
=========================================================
*/

window.addEventListener('scroll', () => {

    if (ignoreScroll) return;

    const currentScroll = window.scrollY;
    const aboutTop      = about.offsetTop;
    const experienceTop = experienceLanding.offsetTop;
    const projectsTop   = projectsLanding.offsetTop;

    // Separately, nav-active based on section
    if (currentScroll >= projectsTop - OFFSET) {
        setActiveLink('projects');
        navHome.classList.add('nav-home-inactive');      // Muted home icon
    } else if (currentScroll >= experienceTop - OFFSET) {
        setActiveLink('experience');
        navHome.classList.add('nav-home-inactive');      // Muted home icon
    } else if (currentScroll >= aboutTop - OFFSET) {
        setActiveLink('about');
        navHome.classList.add('nav-home-inactive');      // Muted home icon
    } else {
        setActiveLink(null);
        navHome.classList.remove('nav-home-inactive');   // On landing — back to gold home icon
    }
    lastScroll = currentScroll;

    // Landing scroll indicator
    if (currentScroll > 100) {
        landingScrollIndicator.classList.add('hidden');
    } else {
        landingScrollIndicator.classList.remove('hidden');
    }

    // About scroll indicator
    const aboutHeight = about.offsetHeight;

    if (currentScroll > experienceTop - 600) {           // If we are past the About section
        aboutScrollIndicator.classList.add('hidden');    // Hide the scroll feature
    } else if (currentScroll > aboutTop) {               // If we are in the About section
        aboutScrollIndicator.classList.remove('hidden'); // Show the scroll feature
    } else {
        aboutScrollIndicator.classList.add('hidden');    // Else, if we are anywhere else, hide it
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

        // Reset all cards to grayscale
        experienceCards.forEach(c => {
            c.classList.remove('card-active');
            c.classList.add('card-inactive');
        });

        // Hide all panels
        detailPanels.forEach(p => p.classList.remove('active'));

        if (isAlreadyOpen) {
            // Clicking active card — collapse everything
            experienceDetail.classList.remove('open');
            experienceCards.forEach(c => c.classList.remove('card-inactive'));
            experienceClickIndicator.classList.remove('hidden'); // Show click indicator when collapsed
        } else {
            // Open clicked card's panel
            card.classList.remove('card-inactive');
            card.classList.add('card-active');
            targetPanel.classList.add('active');
            experienceDetail.classList.add('open');
            experienceClickIndicator.classList.add('hidden'); // Hide click indicator when a card is opened
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

        // Reset all cards to grayscale
        projectsCards.forEach(c => {
            c.classList.remove('card-active');
            c.classList.add('card-inactive');
        });

        // Hide all panels
        projectsDetailPanels.forEach(p => p.classList.remove('active'));

        if (isAlreadyOpen) {
            // Clicking active card — collapse everything
            projectsDetail.classList.remove('open');
            projectsCards.forEach(c => c.classList.remove('card-inactive'));
            projectsClickIndicator.classList.remove('hidden'); // Show click indicator when collapsed
        } else {
            // Open clicked card's panel
            card.classList.remove('card-inactive');
            card.classList.add('card-active');
            targetPanel.classList.add('active');
            projectsDetail.classList.add('open');
            projectsClickIndicator.classList.add('hidden'); // Hide click indicator when a card is opened
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

// // Save for DEBUG
// // About scroll indicator
// console.log('scrollY:', currentScroll, 'aboutTop:', aboutTop, 'aboutBottom:', aboutTop + about.offsetHeight);