// Dark mode toggle
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.querySelector('.theme-toggle');
    if (html.dataset.theme === 'light') {
        html.removeAttribute('data-theme');
        btn.textContent = 'Light';
    } else {
        html.dataset.theme = 'light';
        btn.textContent = 'Dark';
    }
}