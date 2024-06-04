const container = document.querySelector('.container-livros');

const livros = [
  {livro:'O Estado de S. Paulo', autor:'Quarta-Feira, 13 de setembro de 2001', editora:'Companhia Editora Nacional', anoEdicao:'2005', categoria:'Literatura Inglesa', segmento:'Jornais', img:'../images/estadao-2001-09-12.jpg'}
];

// Exibir a quantidade de livro:
document.getElementById('total-livros').innerHTML = livros.length;

const segmentos = {
  'jornais': 'Jornais'
};

for (const id in segmentos) {
  const segmento = document.getElementById(id);
  segmento.addEventListener('click', function() {
    document.getElementById("fullscreen-menu").style.width = "0%";
    mostrarLivrosPorSegmento(segmentos[id]);
  });
}

function mostrarLivrosPorSegmento(segmento) {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.segmento === segmento) {
      document.getElementById('titulo-teste').innerText = segmento;
      todosLivros[index].style.display = 'block';
    }
  });
}

livros.forEach(livro => {
  const figure = document.createElement('div');
  figure.className = 'itens';
  figure.style.display = 'none';
  container.appendChild(figure);
    
  const img = document.createElement('img');
  img.setAttribute('src', livro.img);
  figure.appendChild(img);
  
  const figCaption = document.createElement('div');
  figCaption.innerHTML = `
    <p><span>${livro.categoria}</span></p>
    <p><strong>${livro.livro}</strong></p>
    <p>${livro.autor}</p>
    <p>${livro.editora}, ${livro.anoEdicao}</p>`;
  figCaption.className = 'detalhes';
  figure.appendChild(figCaption);
});