document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  const closeMenu = document.getElementById('close-menu');
  const slides = document.querySelectorAll('.slide');
  const form = document.getElementById('contactForm');

  // Menú hamburguesa
  if (menuToggle && sideMenu) {
    menuToggle.addEventListener('click', () => {
      sideMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
  }

  if (closeMenu && sideMenu) {
    closeMenu.addEventListener('click', () => {
      sideMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  }

  if (sideMenu) {
    sideMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        sideMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // Slider automático
  if (slides.length) {
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 4000);
  }

  // Validación del formulario de contacto (demo, sin envío real)
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Por favor, ingrese un email válido.');
        return;
      }

      alert('¡Gracias por escribirnos! Este formulario es una demostración; para contactarnos usa el correo o teléfono indicados abajo.');
      form.reset();
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
