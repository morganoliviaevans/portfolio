/* 
=========================================================
NAV
=========================================================
*/

const header = document.querySelector('header');
const hero = document.querySelector('#hero');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const heroHeight = hero ? hero.offsetHeight : 0;

    if (currentScroll <= 0) {
        header.classList.remove('nav-hidden');
        return;
    }
    if (currentScroll > lastScroll) {
        // Scrolling down — always hide
        header.classList.add('nav-hidden');
    } else {
        // Scrolling up — only show if back over the hero image
        if (currentScroll < heroHeight * 0.2) {    // Wait to pop up until we are close to the top
            header.classList.remove('nav-hidden');
        }
    }

    lastScroll = currentScroll;
});