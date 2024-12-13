window.onscroll = function() {
    var header = document.getElementById("header");

    // Si el scroll es mayor a 50px, cambia el fondo del encabezado
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

___

document.addEventListener('DOMContentLoaded', () => {
  const paginationLinks = document.querySelectorAll('.pagination .page-number');
  const prevButton = document.querySelector('.pagination .prev');
  const nextButton = document.querySelector('.pagination .next');

  paginationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remover la clase activa de todos los enlaces
      paginationLinks.forEach(l => l.classList.remove('active'));

      // Añadir la clase activa al enlace clicado
      e.target.classList.add('active');
    });
  });

  // Comportamiento de los botones anterior y siguiente
  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    const activePage = document.querySelector('.pagination .active');
    const prevPage = activePage.previousElementSibling;
    if (prevPage && prevPage.classList.contains('page-number')) {
      activePage.classList.remove('active');
      prevPage.classList.add('active');
    }
  });

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    const activePage = document.querySelector('.pagination .active');
    const nextPage = activePage.nextElementSibling;
    if (nextPage && nextPage.classList.contains('page-number')) {
      activePage.classList.remove('active');
      nextPage.classList.add('active');
    }
  });
});
