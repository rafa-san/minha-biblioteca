const tags = document.querySelectorAll('.tag-cloud');
const timelines = document.querySelectorAll('.timeline');

// Exibir a timeline inicial (século XIII) e manter as outras ocultas
// document.getElementById('seculo-xiii').classList.add('active');

// Adicionar o event listener a todas as tags
tags.forEach(tag => {
  tag.addEventListener('click', function() {
    // Remover a classe ativa de todas as tags
    tags.forEach(tag => tag.classList.remove('active'));

    // Adicionar a classe ativa apenas à tag clicada
    this.classList.add('active');

    // Obter o século correspondente ao clicar na tag
    const centuryId = this.getAttribute('data-century');

    // Ocultar todas as timelines
    timelines.forEach(timeline => timeline.style.display = 'none');

    // Exibir somente a timeline correspondente ao século clicado
    document.getElementById(centuryId).style.display = 'block';
  });
});

