const iconeMenu = document.getElementById('icone-menu');

iconeMenu.addEventListener('click', function() {
  const menuResponsivo = document.getElementById('nav-bar');

  if (menuResponsivo.className === 'menu-responsivo') {
    iconeMenu.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    iconeMenu.title = 'Fechar Menu';
    menuResponsivo.className = ' m-responsivo';
  } else {
    menuResponsivo.className = 'menu-responsivo';
    iconeMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    iconeMenu.title = 'Abrir Menu';
  }
});

