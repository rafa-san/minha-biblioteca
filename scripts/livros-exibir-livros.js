const container = document.querySelector('.container-livros');

const livros = [
  {livro:'Dois Fios', autor:'Pep Molist | Ilustrações de Emilio Urberuaga', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Espanhola', segmento:'Literatura Infantil', img:'../images/dois-fios-2.jpg'},
  
  {livro:'Modelo Vivo Natureza Morta', autor:'CárcamO', editora:'Berlendis & Vertecchia', anoEdicao:'2015', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/modelo-vivo-natureza-morta.jpg'},

  {livro:'Onda', autor:'Suzy Lee', editora:'Cosac Naify', anoEdicao:'2008', categoria:'Literatura Sul-Coreana', segmento:'Literatura Infantil', img:'../images/onda.jpg'}
];

for (let i = 0; i < livros.length; i++) {

  function exibirLivros() {
    return `<p><strong>${livros[i].livro}</strong></p> <p>${livros[i].autor}</p> <p>Editora ${livros[i].editora}</p> <p> Ano da edição: ${livros[i].anoEdicao}`;
  };

  const figure = document.createElement('div');
  figure.className = 'itens';
  figure.style.display = 'none';
  container.appendChild(figure);
    
  const img = document.createElement('img');
  img.setAttribute('src', `${livros[i].img}`);
  figure.appendChild(img);
  
  const figCaption = document.createElement('div');
  figCaption.innerHTML = exibirLivros();
  figCaption.className = 'detalhes';
  figure.appendChild(figCaption);
}


// EXIBIR POR CATEGORIA/LITERATURA

// Visualizar Literatura Chilena
const litChilena = document.getElementById('lit-chilena');
litChilena.addEventListener('click', function() {
  // Esconder o menu de tela cheia
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitChilena();
});

function mostrarLitChilena() {
  // Esconder todos os livros
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  // Exibir apenas os livros da categoria "Literatura Chilena"
  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Chilena') {
      todosLivros[index].style.display = 'block';
    }
  });
}

// Visualizar Literatura Espanhola
const litEspanhola = document.getElementById('lit-espanhola');
litEspanhola.addEventListener('click', function() {
  // Esconder o menu de tela cheia
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitEspanhola();
});

function mostrarLitEspanhola() {
  // Esconder todos os livros
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  // Exibir apenas os livros da categoria "Literatura Espanhola"
  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Espanhola') {
      todosLivros[index].style.display = 'block';
    }
  });
}

// Visualizar Literatura Sul-Coreana
const litSulCoreana = document.getElementById('lit-sul-coreana');
litSulCoreana.addEventListener('click', function() {
  // Esconder o menu de tela cheia
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitSulCoreana();
});

function mostrarLitSulCoreana() {
  // Esconder todos os livros
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  // Exibir apenas os livros da categoria "Literatura Sul-Coreana"
  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Sul-Coreana') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// EXIBIR POR SEGMENTO
// Visualizar Literatura Infantil
const litInfantil = document.getElementById('lit-infantil');
litInfantil.addEventListener('click', function() {
  // Esconder o menu de tela cheia
  document.getElementById("fullscreen-menu-segmento").style.width = "0%";
  
  mostrarLitInfantil();
});

function mostrarLitInfantil() {
  // Esconder todos os livros
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  // Exibir apenas os livros da categoria "Literatura Chilena"
  livros.forEach((livro, index) => {
    if (livro.segmento === 'Literatura Infantil') {
      todosLivros[index].style.display = 'block';
    }
  });
}