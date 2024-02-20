const container = document.querySelector('.container-livros');

const livros = [
  {livro:'A árvore generosa', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2006', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-arvore-generosa.jpg'},

  {livro:'A parte que falta', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-parte-que-falta.jpg'},

  {livro:'A parte que falta encontra o grande O', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-parte-que-falta-encontra-o-grande-o.jpg'},

  {livro:'A viagem da senhorita Timothy', autor:'Giovanna Zoboli', editora:'Pequena Zahar', anoEdicao:'2012', categoria:'Literatura Italiana', segmento:'Literatura Infantil', img:'../images/a-viagem-da-senhorita-timothy.jpg'},

  {livro:'De quanta terra precisa o homem?', autor:'Liev Tolstói', editora:'Companhia das Letrinhas', anoEdicao:'2009', categoria:'Literatura Russa', segmento:'Literatura Infantil', img:'../images/de-quanta-terra-precisa-o-homem.jpg'},

  {livro:'Dois fios', autor:'Pep Molist', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Espanhola', segmento:'Literatura Infantil', img:'../images/dois-fios.jpg'},

  {livro:'Ele que o abismo viu: Epopeia de Gilgámesh', autor:'Sin-léqi-unnínni', editora:'Autêntica', anoEdicao:'2023', categoria:'Literatura Mesopotâmica', segmento:'Poesia', img:'../images/epopeia-de-gilgamesh.jpg'},

  {livro:'Fico à espera...', autor:'Davide Cali', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Suíça', segmento:'Literatura Infantil', img:'../images/fico-a-espera.jpg'},

  {livro:'Gorila', autor:'Anthony Browne', editora:'Pequena Zahar', anoEdicao:'2014', categoria:'Literatura Inglesa', segmento:'Literatura Infantil', img:'../images/gorila.jpg'},

  {livro:'Jemmy Button', autor:'Jennifer Uman, Valerio Vidali, Alix Barzelay', editora:'Pequena Zahar', anoEdicao:'2012', categoria:'Literatura Global', segmento:'Literatura Infantil', img:'../images/jemmy-button.jpg'},

  {livro:'Lulu e o urso', autor:'Carolina Moreyra', editora:'Pequena Zahar', anoEdicao:'2018', categoria:'Literatura Brasileira', segmento:'Literatura Infantil', img:'../images/lulu-e-o-urso.jpg'},
  
  {livro:'Modelo vivo - natureza morta', autor:'CárcamO', editora:'Berlendis & Vertecchia', anoEdicao:'2015', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/modelo-vivo-natureza-morta.jpg'},

  {livro:'Na cozinha noturna', autor:'Maurice Sendak', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/na-cozinha-noturna.jpg'},
  
  {livro:'Na garupa do Meu tio', autor:'David Merveille', editora:'Cosac Naify', anoEdicao:'2009', categoria:'Literatura Belga', segmento:'Literatura Infantil', img:'../images/na-garupa-do-meu-tio.jpg'},

  {livro:'O círculo do destino', autor:'Raja Mohanty, Sirish Rao', editora:'WMF Martins Fontes', anoEdicao:'2010', categoria:'Literatura Indiana', segmento:'Literatura Infantil', img:'../images/o-circulo-do-destino.jpg'},
  
  {livro:'O gato e o Diabo', autor:'James Joyce', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Irlandesa', segmento:'Literatura Infantil', img:'../images/o-gato-e-o-diabo.jpg'},

  {livro:'O velho louco por desenho', autor:'François Place', editora:'Companhia das Letrinhas', anoEdicao:'2004', categoria:'Literatura Francesa', segmento:'Literatura Infantil', img:'../images/o-velho-louco-por-desenho.jpg'},

  {livro:'Onda', autor:'Suzy Lee', editora:'Cosac Naify', anoEdicao:'2008', categoria:'Literatura Sul-Coreana', segmento:'Literatura Infantil', img:'../images/onda.jpg'},

  {livro:'Onde vivem os monstros', autor:'Maurice Sendak', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/onde-vivem-os-monstros.jpg'},
  
  {livro:'Para que serve um livro?', autor:'Chloé Legeay', editora:'Pulo do Gato', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'Literatura Infantil', img:'../images/para-que-serve-um-livro.jpg'},

  {livro:'Quem quer este rinoceronte?', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/quem-quer-este-rinoceronte.jpg'},

  {livro:'Selma', autor:'Juta Bauer', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Alemã', segmento:'Literatura Infantil', img:'../images/selma.jpg'},

  {livro:'Serrote 22', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2016', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-22.jpg'},
  
  {livro:'Thapa Kunturi: ninho do condor', autor:'CárcamO', editora:'Companhia das Letrinhas', anoEdicao:'2007', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/thapa-kunturi.jpg'},

  {livro:'Vozes no parque', autor:'Anthony Browne', editora:'Pequena Zahar', anoEdicao:'2014', categoria:'Literatura Inglesa', segmento:'Literatura Infantil', img:'../images/vozes-no-parque.jpg'}
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


// Visualizar Literatura Alemã
const litAlema = document.getElementById('lit-alema');
litAlema.addEventListener('click', function() {
  // Esconder o menu de tela cheia
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitAlema();
});

function mostrarLitAlema() {
  // Esconder todos os livros
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  // Exibir apenas os livros da categoria "Literatura Alemã"
  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Alemã') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Belga
const litBelga = document.getElementById('lit-belga');
litBelga.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitBelga();
});

function mostrarLitBelga() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Belga') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Brasileira
const litBrasileira = document.getElementById('lit-brasileira');
litBrasileira.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitBrasileira();
});

function mostrarLitBrasileira() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Brasileira') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Chilena
const litChilena = document.getElementById('lit-chilena');
litChilena.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitChilena();
});

function mostrarLitChilena() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

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


// Visualizar Literatura Global
const litGlobal = document.getElementById('lit-global');
litGlobal.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitGlobal();
});

function mostrarLitGlobal() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Global') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Indiana
const litIndiana = document.getElementById('lit-indiana');
litIndiana.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitIndiana();
});

function mostrarLitIndiana() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Indiana') {
      todosLivros[index].style.display = 'block';
    }
  });
}


// Visualizar Literatura Inglesa
const litInglesa = document.getElementById('lit-inglesa');
litInglesa.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitInglesa();
});

function mostrarLitInglesa() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Inglesa') {
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


// Visualizar Literatura Italiana
const litItaliana = document.getElementById('lit-italiana');
litItaliana.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitItaliana();
});

function mostrarLitItaliana() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Italiana') {
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


// Visualizar Literatura Suíça
const litSuica = document.getElementById('lit-suica');
litSuica.addEventListener('click', function() {
  document.getElementById("fullscreen-menu").style.width = "0%";
  
  mostrarLitSuica();
});

function mostrarLitSuica() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.categoria === 'Literatura Suíça') {
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

// Visualizar Ensaios
const ensaios = document.getElementById('ensaios');
ensaios.addEventListener('click', function() {
  document.getElementById("fullscreen-menu-segmento").style.width = "0%";
  
  mostrarEnsaios();
});

function mostrarEnsaios() {
  const todosLivros = document.querySelectorAll('.itens');
  todosLivros.forEach(livro => {
    livro.style.display = 'none';
  });

  livros.forEach((livro, index) => {
    if (livro.segmento === 'Ensaios') {
      todosLivros[index].style.display = 'block';
    }
  });
}


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