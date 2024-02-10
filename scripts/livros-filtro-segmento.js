const abrirMenuSegmento = document.getElementById('fullscreen-menu-estilos-literarios');
const fecharMenuSegmento = document.querySelector('.fechar-menu-segmento');

abrirMenuSegmento.addEventListener('click', function () {
  document.getElementById("fullscreen-menu-segmento").style.width = "100%";
})

fecharMenuSegmento.addEventListener('click', function () {
  document.getElementById("fullscreen-menu-segmento").style.width = "0%";
})