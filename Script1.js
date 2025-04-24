// Mobile Nav Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll Reveal Animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;
    if (sectionTop < triggerPoint) {
      section.classList.add('active');
    }
  });
});

// Contact Form Handler
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! We’ll get back to you shortly.');
});
