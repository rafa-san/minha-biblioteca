const abrirMenu = document.getElementById('abrir-fullscreen-menu');
const fecharMenu = document.querySelector('.fechar-menu');

abrirMenu.addEventListener('click', function () {
  document.getElementById("fullscreen-menu").style.width = "100%";
})

fecharMenu.addEventListener('click', function () {
  document.getElementById("fullscreen-menu").style.width = "0%";
})