// Toggle dark/light theme
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('open');
  });
});

// Reveal sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.content-section').forEach(section => {
  observer.observe(section);
});

// Scroll spy for navigation
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 60;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (!section) return;
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
