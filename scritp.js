



let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides li').length;
const slidesToShow = 4; // Number of images to show at a time

function updateSlides() {
    const slideWidth = slides.querySelector('li').clientWidth;
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function plusSlides(n) {
    slideIndex = Math.min(Math.max(slideIndex + n, 0), totalSlides - slidesToShow);
    updateSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlides();
});
