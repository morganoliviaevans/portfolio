/* 
=========================================================
NAV
=========================================================
*/

/* 
TODO: Adjust logic to keep Nav visible when Nav sections are clicked.
    e.g. If user clicks straight from Nav bar without scrolling up or down, Nav stays viewable. Maybe adjust opacity?
*/

const header = document.querySelector('header');
const landing = document.querySelector('#landing');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const landingHeight = landing ? landing.offsetHeight : 0;

    // At the very top — show nav, but hide name (we're still on landing)
    if (currentScroll <= 0) {
        header.classList.remove('nav-hidden');
        header.classList.remove('nav-scrolled');
        return;
    }
    if (currentScroll > lastScroll) {
        // Scrolling down — always hide
        header.classList.add('nav-hidden');
    } else {
        // Scrolling up — show nav
        header.classList.remove('nav-hidden');

        // Only show the name once we've passed the landing section
        if (currentScroll > landingHeight * 0.9) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    }

    lastScroll = currentScroll;
});