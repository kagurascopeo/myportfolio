const swiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 3000
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: false
    }
});
$(document).ready(function () {
    $('body').ripples({
        resolution: 400,
        dropRadius: 20,
        perturbance: 0.04,
    });
});
const button = document.querySelector('.page-top');

button.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        button.classList.add('is-active');
    } else {
        button.classList.remove('is-active');
    }
});
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle('active');


    const icon = document.querySelector(".hamburger-icon");
    const body = document.body;

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    body.classList.toggle("no-scroll");
}
