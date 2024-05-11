const icone = document.getElementById('menu-icone');
const menu = document.getElementById('nav-bar');
const menuItems = document.querySelectorAll('.menu-responsivo li');

icone.addEventListener('click', menuResponsivo);

function menuResponsivo() {
  menu.classList.toggle('responsivo');
  icone.classList.toggle("mudar");

  if (menu.classList.contains('responsivo')) {
    // Abrindo o menu
    setTimeout(() => {
      menuItems.forEach(item => item.style.opacity = 1);
    }, 10); // Adicionando um pequeno atraso para garantir que a transição ocorra suavemente
  } else {
    // Fechando o menu
    menuItems.forEach(item => item.style.opacity = 0.7);
  }

  // Alternando o título do ícone
  icone.title = menu.classList.contains('responsivo') ? 'Fechar Menu' : 'Abrir Menu';
}
