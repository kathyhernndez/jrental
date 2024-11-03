const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
    
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

// about container

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
  });


// video spaces

window.addEventListener('load', function () {
    var video = document.getElementById('myVideo');
    video.addEventListener('play', function () {
        console.log('El video está en reproducción');
    });
});

// MODALS
document.querySelectorAll('.openModalBtn').forEach(button => {
    button.onclick = function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "block";
    }
});

document.querySelectorAll('.close').forEach(span => {
    span.onclick = function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}


// CARRUSEL 
document.querySelectorAll('.carousel-container').forEach(carousel => {
    const carouselSlide = carousel.querySelector('.carousel-slide');
    const carouselItems = carousel.querySelectorAll('.carousel-slide div');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    let counter = 0;

    function updateCarousel() {
        const size = carouselItems[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    nextBtn.addEventListener('click', () => {
        counter = (counter + 1) % carouselItems.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        counter = (counter - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    window.addEventListener('resize', () => {
        updateCarousel();
    });
});


/// formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:katherineghz97@gmail.com?subject=Message of ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0A${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
});

