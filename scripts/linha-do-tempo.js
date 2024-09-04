document.addEventListener('DOMContentLoaded', function() {
  const abrirMenuBtn = document.getElementById('abrir-fullscreen-menu');
  const fecharMenuBtn = document.querySelector('.fechar-menu');
  const fullscreenMenu = document.getElementById('fullscreen-menu');
  const tags = document.querySelectorAll('.tag');
  const timelines = document.querySelectorAll('.timeline');
  const heading = document.querySelector('#titulo-do-seculo');

  // Função para adicionar o heading dinâmico
  function adicionarHeading(tag) {
    // Definir o texto do heading com base na tag escolhida
    heading.textContent = tag.textContent;
  }

  // Adicionar evento de clique para abrir o menu fullscreen
  abrirMenuBtn.addEventListener('click', function() {
    fullscreenMenu.style.width = '100%';
    // Adicionar classe para indicar que o menu está aberto
    document.body.classList.add('menu-aberto');
  });

  // Adicionar evento de clique para fechar o menu fullscreen
  fecharMenuBtn.addEventListener('click', function() {
    fullscreenMenu.style.width = '0';
    // Remover classe quando o menu é fechado
    document.body.classList.remove('menu-aberto');
  });

  // Adicionar o event listener a todas as tags
  tags.forEach(tag => {
    tag.addEventListener('click', function() {
      // Remover a classe ativa de todas as tags
      tags.forEach(tag => tag.classList.remove('active'));

      // Adicionar o heading dinâmico
      adicionarHeading(this);

      // Obter o século correspondente ao clicar na tag
      const centuryId = this.getAttribute('data-century');

      // Ocultar todas as timelines
      timelines.forEach(timeline => timeline.style.display = 'none');

      // Exibir somente a timeline correspondente ao século clicado
      document.getElementById(centuryId).style.display = 'block';

      // Fechar o menu fullscreen ao selecionar uma opção
      fullscreenMenu.style.width = '0';
      
      // Remover classe quando o menu é fechado
      document.body.classList.remove('menu-aberto');
    });
  });
});