const container = document.querySelector('.container-livros');

const livros = [
  {livro:'De quanta terra precisa o homem?', autor:'Liev Tolstói', editora:'Companhia das Letrinhas', anoEdicao:'2009', categoria:'Literatura Russa', segmento:'Literatura Infantil', img:'../images/de-quanta-terra-precisa-o-homem.jpg'},

  {livro:'Dois fios', autor:'Pep Molist', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Espanhola', segmento:'Literatura Infantil', img:'../images/dois-fios.jpg'},

  {livro:'Ele que o abismo viu: Epopeia de Gilgámesh', autor:'Sin-léqi-unnínni', editora:'Autêntica', anoEdicao:'2023', categoria:'Literatura Mesopotâmica', segmento:'Poesia', img:'../images/epopeia-de-gilgamesh.jpg'},
  
  {livro:'Modelo vivo - natureza morta', autor:'CárcamO', editora:'Berlendis & Vertecchia', anoEdicao:'2015', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/modelo-vivo-natureza-morta.jpg'},
  
  {livro:'O gato e o Diabo', autor:'James Joyce', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Irlandesa', segmento:'Literatura Infantil', img:'../images/o-gato-e-o-diabo.jpg'},

  {livro:'Onda', autor:'Suzy Lee', editora:'Cosac Naify', anoEdicao:'2008', categoria:'Literatura Sul-Coreana', segmento:'Literatura Infantil', img:'../images/onda.jpg'},

  {livro:'Onde vivem os monstros', autor:'Maurice Sendak', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/onde-vivem-os-monstros.jpg'},
  
  {livro:'Para que serve um livro?', autor:'Chloé Legeay', editora:'Pulo do Gato', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'Literatura Infantil', img:'../images/para-que-serve-um-livro.jpg'},

  {livro:'Quem quer este rinoceronte?', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/quem-quer-este-rinoceronte.jpg'},
  
  {livro:'Thapa Kunturi: ninho do condor', autor:'CárcamO', editora:'Companhia das Letrinhas', anoEdicao:'2007', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/thapa-kunturi.jpg'}
];

// Exibir a quantidade de livro:
document.getElementById('total-livros').innerHTML = livros.length;

// Contar a quantidade de autores únicos:
const autoresUnicos = new Set(livros.map(livro => livro.autor));
document.getElementById('total-autores').innerHTML = autoresUnicos.size;

for (let i = 0; i < livros.length; i++) {

  function exibirLivros() {
    return `<p><strong>${livros[i].livro}</strong></p> <p>${livros[i].autor}</p> <p>${livros[i].editora}, ${livros[i].anoEdicao}</p>`;
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
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitEspanhola();
});

function mostrarLitEspanhola() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Espanhola') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Francesa
const litFrancesa = document.getElementById('lit-francesa');
litFrancesa.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitFrancesa();
});

function mostrarLitFrancesa() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Francesa') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Irlandesa
const litIrlandesa = document.getElementById('lit-irlandesa');
litIrlandesa.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitIrlandesa();
});

function mostrarLitIrlandesa() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Irlandesa') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Mesopotâmica
const litMesopotamica = document.getElementById('lit-mesopotamica');
litMesopotamica.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitMesopotamica();
});

function mostrarLitMesopotamica() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Mesopotâmica') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Norte-Americana
const litNorteAmericana = document.getElementById('lit-norte-americana');
litNorteAmericana.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitNorteAmericana();
});

function mostrarLitNorteAmericana() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Norte-Americana') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Russa
const litRussa = document.getElementById('lit-russa');
litRussa.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitRussa();
});

function mostrarLitRussa() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Russa') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Sul-Coreana
const litSulCoreana = document.getElementById('lit-sul-coreana');
litSulCoreana.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitSulCoreana();
});

function mostrarLitSulCoreana() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

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
  document.getElementById("fullscreen-menu-segmento").style.width = "0%";
  
  mostrarLitInfantil();
});

function mostrarLitInfantil() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.segmento === 'Literatura Infantil') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Poesia
const poesia = document.getElementById('poesia');
poesia.addEventListener('click', function() {
  document.getElementById("fullscreen-menu-segmento").style.width = "0%";
  
  mostrarPoesia();
});

function mostrarPoesia() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.segmento === 'Poesia') {
      todosLivros[index].style.display = 'block';
    }
  });
}