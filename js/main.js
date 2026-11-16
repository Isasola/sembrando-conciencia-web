// Menú móvil
const btn = document.querySelector('.nav__menu-btn');
const links = document.querySelector('.nav__links');
if (btn && links) {
  btn.addEventListener('click', () => {
    links.classList.toggle('abierto');
  });
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('abierto');
    }
  });
}

// Marcar enlace activo
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a => {
  if (a.getAttribute('href') === path || a.getAttribute('href') === '../' + path) {
    a.classList.add('activo');
  }
});

// Aparición suave al hacer scroll
const observador = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.area-card, .cifra, .blog-card, .area-detalle, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observador.observe(el);
});
