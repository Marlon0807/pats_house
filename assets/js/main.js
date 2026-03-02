// Mark JS as loaded for progressive enhancement
document.documentElement.classList.add('js-loaded');

// Sticky header scroll behavior
const header = document.getElementById('site-header');
let lastScrollY = 0;

function updateHeader() {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations (progressive enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Only animate elements — content stays visible without JS
document.querySelectorAll('section, .feature-card, .gallery-item, .accommodation-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});
