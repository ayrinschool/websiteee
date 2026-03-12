// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'shadow-xl');
        nav.classList.remove('py-4');
    } else {
        nav.classList.remove('py-2', 'shadow-xl');
        nav.classList.add('py-4');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileClose = document.getElementById('mobile-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });
}

if (mobileClose) {
    mobileClose.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// Reveal on Scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
// Initial check
window.onload = reveal;

// Active Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});