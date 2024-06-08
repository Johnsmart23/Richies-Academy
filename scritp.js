let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.top = '-60px';
    } else {
        // Scroll up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
