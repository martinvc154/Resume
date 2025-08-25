document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const buttons = document.querySelectorAll('.section-btn');
  const sections = document.querySelectorAll('.resume-section');
  const backButtons = document.querySelectorAll('.back-btn');
  const body = document.body;
  const themeClasses = [
    'theme-education',
    'theme-academic',
    'theme-publications',
    'theme-professional',
    'theme-leadership',
    'theme-skills'
  ];

  function resetTheme() {
    themeClasses.forEach(cls => body.classList.remove(cls));
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.section);
      if (!target) return;
      sections.forEach(sec => sec.classList.remove('active'));
      menu.classList.add('hidden');
      resetTheme();
      body.classList.add(`theme-${btn.dataset.section}`);
      target.classList.add('active');
    });
  });

  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.resume-section');
      section.classList.remove('active');
      resetTheme();
      menu.classList.remove('hidden');
    });
  });

  // Accordion interaction
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
    });
  });
});

