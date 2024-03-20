const container = document.querySelector('.container-livros');

const livros = [
  {livro:'A árvore generosa', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2006', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-arvore-generosa.jpg'},

  {livro:'A incrível história do vinho', autor:'Benoist Simmat', editora:'L&PM', anoEdicao:'2022', categoria:'Literatura Francesa', segmento:'HQs, Mangás & Graphic Novels', img:'../images/a-incrivel-historia-do-vinho.jpg'},

  {livro:'A parte que falta', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-parte-que-falta.jpg'},

  {livro:'A parte que falta encontra o grande O', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-parte-que-falta-encontra-o-grande-o.jpg'},

  {livro:'A trilogia tebana: Édipo Rei, Édipo em Colono, Antígona', autor:'Sófocles', editora:'Jorge Zahar', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'A viagem da senhorita Timothy', autor:'Giovanna Zoboli', editora:'Pequena Zahar', anoEdicao:'2012', categoria:'Literatura Italiana', segmento:'Literatura Infantil', img:'../images/a-viagem-da-senhorita-timothy.jpg'},

  {livro:'As Traquínias', autor:'Sófocles', editora:'Unicamp', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'As vespas; As aves; As rãs', autor:'Aristófanes', editora:'Jorge Zahar', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Agamêmnon - Orestéia I', autor:'Ésquilo', editora:'Iluminuras', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Aias', autor:'Sófocles', editora:'Iluminuras', anoEdicao:'2008', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Asterios Polyp', autor:'David Mazzucchelli', editora:'Quadrinhos na Cia.', anoEdicao:'2011', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/asterios-polyp.jpg'},

  {livro:'Caminhar, uma filosofia', autor:'Frédéric Gros', editora:'Ubu', anoEdicao:'2021', categoria:'Literatura Francesa', segmento:'Filosofia', img:'../images/caminhar-uma-filosofia.jpg'},

  {livro:'Chico Bento: pavor espaciar', autor:'Gustavo Duarte', editora:'Panini', anoEdicao:'2015', categoria:'Literatura Brasileira', segmento:'HQs, Mangás & Graphic Novels', img:'../images/chico-bento-pavor-espaciar.jpg'},

  {livro:'Có! & Birds', autor:'Gustavo Duarte', editora:'Quadrinhos na Cia.', anoEdicao:'2014', categoria:'Literatura Brasileira', segmento:'HQs, Mangás & Graphic Novels', img:'../images/co-e-birds.jpg'},

  {livro:'Coéforas - Orestéia II', autor:'Ésquilo', editora:'Iluminuras', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'De quanta terra precisa o homem?', autor:'Liev Tolstói', editora:'Companhia das Letrinhas', anoEdicao:'2009', categoria:'Literatura Russa', segmento:'Literatura Infantil', img:'../images/de-quanta-terra-precisa-o-homem.jpg'},

  {livro:'Dois fios', autor:'Pep Molist', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Espanhola', segmento:'Literatura Infantil', img:'../images/dois-fios.jpg'},

  {livro:'Ele que o abismo viu: Epopeia de Gilgámesh', autor:'Sin-léqi-unnínni', editora:'Autêntica', anoEdicao:'2023', categoria:'Literatura Mesopotâmica', segmento:'Poesia', img:'../images/epopeia-de-gilgamesh.jpg'},

  {livro:'Electra(s)', autor:'Sófocles, Eurípides', editora:'Ateliê Editorial', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Eumênides - Orestéia III', autor:'Ésquilo', editora:'Iluminuras', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Fábulas, seguidas do Romance de Esopo', autor:'Esopo | autoria anônima', editora:'Editora 34', anoEdicao:'2017', categoria:'Literatura Grega', segmento:'Ficção', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Fico à espera...', autor:'Davide Cali', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Suíça', segmento:'Literatura Infantil', img:'../images/fico-a-espera.jpg'},
  
  {livro:'Filoctetes', autor:'Sófocles', editora:'Editora 34', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/filoctetes.jpg'},

  {livro:'Fragmentos completos', autor:'Safo', editora:'Editora 34', anoEdicao:'2017', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Gorila', autor:'Anthony Browne', editora:'Pequena Zahar', anoEdicao:'2014', categoria:'Literatura Inglesa', segmento:'Literatura Infantil', img:'../images/gorila.jpg'},

  {livro:'Habibi', autor:'Craig Thompson', editora:'Quadrinhos na Cia.', anoEdicao:'2012', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/habibi.jpg'},

  {livro:'Helena', autor:'Eurípides', editora:'Movimento', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Héracles', autor:'Eurípides', editora:'Palas Athena', anoEdicao:'2003', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/heracles.jpg'},

  {livro:'Hinos Homéricos', autor:'Autoras e autores diversos', editora:'UNESP', anoEdicao:'2010', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/imagem-indisponivel.jpg'},

  {livro:'História', autor:'Heródoto', editora:'Ediouro', anoEdicao:'2001', categoria:'Literatura Grega', segmento:'História', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Ifigênia em Áulis, As fenícias, As bacantes', autor:'Eurípides', editora:'Jorge Zahar', anoEdicao:'2005', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},
  
  {livro:'Ilíada', autor:'Homero', editora:'Ediouro', anoEdicao:'2001', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/iliada.jpg'},

  {livro:'Jemmy Button', autor:'Jennifer Uman, Valerio Vidali, Alix Barzelay', editora:'Pequena Zahar', anoEdicao:'2012', categoria:'Literatura Global', segmento:'Literatura Infantil', img:'../images/jemmy-button.jpg'},

  {livro:'Lisístrata e Tesmoforiantes', autor:'Aristófanes', editora:'Perspectiva', anoEdicao:'2011', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/lisistrata-e-tesmoforiantes.jpg'},

  {livro:'Lulu e o urso', autor:'Carolina Moreyra', editora:'Pequena Zahar', anoEdicao:'2018', categoria:'Literatura Brasileira', segmento:'Literatura Infantil', img:'../images/lulu-e-o-urso.jpg'},

  {livro:'Medéia, Hipólito, As troianas', autor:'Eurípides', editora:'Jorge Zahar', anoEdicao:'2007', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},
  
  {livro:'Modelo vivo - natureza morta', autor:'CárcamO', editora:'Berlendis & Vertecchia', anoEdicao:'2015', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/modelo-vivo-natureza-morta.jpg'},

  {livro:'Monstros!', autor:'Gustavo Duarte', editora:'Quadrinhos na Cia.', anoEdicao:'2012', categoria:'Literatura Brasileira', segmento:'HQs, Mangás & Graphic Novels', img:'../images/monstros.jpg'},

  {livro:'Na cozinha noturna', autor:'Maurice Sendak', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/na-cozinha-noturna.jpg'},
  
  {livro:'Na garupa do Meu tio', autor:'David Merveille', editora:'Cosac Naify', anoEdicao:'2009', categoria:'Literatura Belga', segmento:'Literatura Infantil', img:'../images/na-garupa-do-meu-tio.jpg'},

  {livro:'Notas sobre Gaza', autor:'Joe Sacco', editora:'Quadrinhos na Cia.', anoEdicao:'2010', categoria:'Literatura Maltesa', segmento:'HQs, Mangás & Graphic Novels', img:'../images/notas-sobre-gaza.jpg'},

  {livro:'O círculo do destino', autor:'Raja Mohanty, Sirish Rao', editora:'WMF Martins Fontes', anoEdicao:'2010', categoria:'Literatura Indiana', segmento:'Literatura Infantil', img:'../images/o-circulo-do-destino.jpg'},
  
  {livro:'O gato e o Diabo', autor:'James Joyce', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Irlandesa', segmento:'Literatura Infantil', img:'../images/o-gato-e-o-diabo.jpg'},

  {livro:'O hino homérico a Apolo', autor:'Anônimo', editora:'UNICAMP', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/imagem-indisponivel.jpg'},

  {livro:'O velho louco por desenho', autor:'François Place', editora:'Companhia das Letrinhas', anoEdicao:'2004', categoria:'Literatura Francesa', segmento:'Literatura Infantil', img:'../images/o-velho-louco-por-desenho.jpg'},

  {livro:'Os persas; Electra; Hécuba', autor:'Ésquilo, Sófocles, Eurípides', editora:'Jorge Zahar', anoEdicao:'2007', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Os Trabalhos e os Dias', autor:'Hesíodo', editora:'Iluminuras', anoEdicao:'2006', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/os-trabalhos-e-os-dias.jpg'},

  {livro:'Odisseia', autor:'Homero', editora:'Ediouro', anoEdicao:'2001', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/odisseia.jpg'},

  {livro:'Onda', autor:'Suzy Lee', editora:'Cosac Naify', anoEdicao:'2008', categoria:'Literatura Sul-Coreana', segmento:'Literatura Infantil', img:'../images/onda.jpg'},

  {livro:'Onde vivem os monstros', autor:'Maurice Sendak', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/onde-vivem-os-monstros.jpg'},

  {livro:'Orestes', autor:'Eurípides', editora:'Universidade de Brasília', anoEdicao:'1999', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},
  
  {livro:'Para que serve um livro?', autor:'Chloé Legeay', editora:'Pulo do Gato', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'Literatura Infantil', img:'../images/para-que-serve-um-livro.jpg'},

  {livro:'Prometeu Acorrentado; Ájax; Alceste', autor:'Ésquilo, Sófocles, Eurípides', editora:'Jorge Zahar', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/imagem-indisponivel.jpg'},

  {livro:'Quem quer este rinoceronte?', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/quem-quer-este-rinoceronte.jpg'},

  {livro:'Quinoterapia', autor:'Quino', editora:'Martins Fontes', anoEdicao:'2004', categoria:'Literatura Argentina', segmento:'HQs, Mangás & Graphic Novels', img:'../images/quinoterapia.jpg'},

  {livro:'Repeteco', autor:`Bryan Lee O'Malley`, editora:'Quadrinhos na Cia.', anoEdicao:'2016', categoria:'Literatura Canadense', segmento:'HQs, Mangás & Graphic Novels', img:'../images/repeteco.jpg'},

  {livro:'Selma', autor:'Juta Bauer', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Alemã', segmento:'Literatura Infantil', img:'../images/selma.jpg'},

  {livro:'Serrote 22', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2016', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-22.jpg'},

  {livro:'Serrote 23', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2016', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-23.jpg'},

  {livro:'Super-Homem versus Apocalypse: A Revanche - Parte Dois', autor:'Dan Jurgens', editora:'Abril Jovem', anoEdicao:'1995', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/super-homem-versus-apocalypse-parte2.jpg'},

  {livro:'Super-Homem versus Apocalypse: A Revanche - Parte Três', autor:'Dan Jurgens', editora:'Abril Jovem', anoEdicao:'1995', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/super-homem-versus-apocalypse-parte3.jpg'},
  
  {livro:'Teogonia: a origem dos deuses', autor:'Hesíodo', editora:'Iluminuras', anoEdicao:'2007', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/teogonia.jpg'},
  
  {livro:'Thapa Kunturi: ninho do condor', autor:'CárcamO', editora:'Companhia das Letrinhas', anoEdicao:'2007', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/thapa-kunturi.jpg'},

  {livro:'Toda Mafalda', autor:'Quino', editora:'Martins Fontes', anoEdicao:'2010', categoria:'Literatura Argentina', segmento:'HQs, Mangás & Graphic Novels', img:'../images/toda-mafalda.jpg'},

  {livro:'Tragédias', autor:'Ésquilo', editora:'Iluminuras', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/esquilo-tragedias.jpg'},

  {livro:'Três Sombras', autor:'Cyril Pedrosa', editora:'Quadrinhos na Cia.', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'HQs, Mangás & Graphic Novels', img:'../images/tres-sombras.jpg'},

  {livro:'Você é minha Mãe?', autor:'Alison Bechdel', editora:'Quadrinhos na Cia.', anoEdicao:'2012', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/voce-e-minha-mae.jpg'},

  {livro:'Vozes no parque', autor:'Anthony Browne', editora:'Pequena Zahar', anoEdicao:'2014', categoria:'Literatura Inglesa', segmento:'Literatura Infantil', img:'../images/vozes-no-parque.jpg'}
];

// Exibir a quantidade de livro:
document.getElementById('total-livros').innerHTML = livros.length;

const segmentos = {
  'ensaios': 'Ensaios',
  'ficcao': 'Ficção',
  'filosofia': 'Filosofia',
  'historia': 'História',
  'hq': 'HQs, Mangás & Graphic Novels',
  'lit-infantil': 'Literatura Infantil',
  'poesia': 'Poesia',
  'teatro': 'Teatro'
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