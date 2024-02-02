const livros = [
  {livro:'A Casa das Belas Adormecidas', autor:'Yasunari Kawabata', editora:'Estação Liberdade', secao:'Ficção', literatura:'Japão', img:'imagens/a-casa-das-belas-adormecidas-edit.jpg'},

  {livro:'A Narrativa de A. Gordon Pym', autor:'Edgar Allan Poe', editora:'Cosac Naify', secao:'Ficção', literatura:'Estados Unidos', img:'imagens/a-narrativa-de-a-gordon-pym.jpg'},

  {livro:'Eu Sou um Gato', autor:'Natsume Soseki', editora:'Estação Liberdade', secao:'Ficção', literatura:'Japão', img:'imagens/eu-sou-um-gato-edit.jpg'},

  {livro:'Todos os Belos Cavalos', autor:'Cormac McCarthy', editora:'Alfaguara', secao:'Ficção', literatura:'Estados Unidos', img:'imagens/todos-os-belos-cavalos-edit.jpg'},

  {livro:'O Clube do Suicídio', autor:'Robert Louis Stevenson', editora:'Cosac Naify', secao:'Ficção', literatura:'Escócia', img:'imagens/o-clube-do-suicidio-edit.jpg'},

  {livro:'Oblómov', autor:'Ivan Gontcharóv', editora:'Cosac Naify', secao:'Ficção', literatura:'Rússia', img:'imagens/oblomov-edit.jpg'},

  {livro:'Pais e Filhos', autor:'Ivan Turguêniev', editora:'Cosac Naify', secao:'Ficção', literatura:'Rússia', img:'imagens/pais-e-filhos.jpg'},

  {livro:'Os Trabalhadores do Mar', autor:'Victor Hugo', editora:'Cosac Naify', secao:'Ficção', literatura:'França', img:'imagens/os-trabalhadores-do-mar-edit.jpg'},
  {livro:'Livro das Mil e Uma Noites - Volume 1', autor:'Anônimo', editora:'Biblioteca Azul', secao:'Ficção', literatura:'Árabe', img:'imagens/livro-das-mil-e-uma-noites-1-edit.jpg'},
  {livro:'Livro das Mil e Uma Noites - Volume 2', autor:'Anônimo', editora:'Biblioteca Azul', secao:'Ficção', literatura:'Árabe', img:'imagens/livro-das-mil-e-uma-noites-2.jpg'},
  {livro:'Ilíada', autor:'Homero', editora:'Ediouro', secao:'Poesia', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'Barba Ensopada de Sangue', autor:'Daniel Galera', editora:'Companhia das Letras', secao:'Ficção', literatura:'Brasil', img:'imagens/barba-ensopada-de-sangue-edit.jpg'},
  {livro:'Odisseia', autor:'Homero', editora:'Ediouro', secao:'Poesia', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'O Valor do Riso e Outros Ensaios', autor:'Virginia Woolf', editora:'Cosac Naify', secao:'Ensaios', literatura:'Inglaterra', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'A Divina Comédia', autor:'Dante Alighieri', editora:'Editora 34', secao:'Poesia', literatura:'Itália', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'Essa Mulher e Outros Contos', autor:'Rodolfo Walsh', editora:'Editora 34', secao:'Contos', literatura:'Argentina', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'47 Contos de Juan Carlos Onetti', autor:'Juan Carlos Onetti', editora:'Companhia das Letras', secao:'Contos', literatura:'Uruguai', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'Não Há Lugar para a Lógica em Kassel', autor:'Enrique Vila-Matas', editora:'Cosac Naify', secao:'?', literatura:'Espanha', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'Cartas a um Jovem Poeta', autor:'Rainer Maria Rilke', editora:'Editora Globo', secao:'Ficção', literatura:'Alemanha', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'Cem Anos de Solidão', autor:'Gabriel García Márquez', editora:'Editora Record', secao:'Ficção', literatura:'Colômbia', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'Minha Luta 1: A Morte do Pai', autor:'Karl Ove Knausgard', editora:'Editora Companhia das Letras', secao:'Romance Autobiográfico', literatura:'Noruega', img:'imagens/imagem-indisponivel.jpg'},
  {livro:'Bonsai', autor:'Alejandro Zambra', editora:'Editora Cosac Naify', secao:'Romance', literatura:'Chile', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Tragédias: Teatro Completo', autor:'William Shakespeare', editora:'Editora Agir', secao:'Teatro', literatura:'Inglaterra', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Novelas Exemplares', autor:'Miguel de Cervantes', editora:'Editora Cosac Naify', secao:'Novelas', literatura:'Espanha', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Anna Kariênina', autor:'Liev Tolstói', editora:'Editora Cosac Naify', secao:'Romance', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'O Idiota', autor:'Fiódor Dostoiévski', editora:'Editora 34', secao:'Ficção', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Crime e Castigo', autor:'Fiódor Dostoiévski', editora:'Editora 34', secao:'Ficção', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Os Demônios', autor:'Fiódor Dostoiévski', editora:'Editora 34', secao:'Ficção', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Contos Reunidos', autor:'Fiódor Dostoiévski', editora:'Editora 34', secao:'Ficção', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Os Irmãos Karamázov', autor:'Fiódor Dostoiévski', editora:'Editora 34', secao:'Ficção', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Amores & Arte de Amar', autor:'Ovídio', editora:'Penguin/Companhia das Letras', secao:'Poesia', literatura:'Latina', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Gente Pobre', autor:'Fiódor Dostoiévski', editora:'Editora 34', secao:'Ficção', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'As Rãs', autor:'Aristófanes', editora:'Editora Cosac Naify', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Os Sertões', autor:'Euclides da Cunha', editora:'Editora Ubu', secao:'Crítica', literatura:'Brasil', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Dom Quixote', autor:'Miguel de Cervantes', editora:'Editora Penguin/Companhia das Letras', secao:'?', literatura:'Espanha', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Metamorfoses', autor:'Ovídio', editora:'Editora 34', secao:'Poesia', literatura:'Latina', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Eneida', autor:'Virgílio', editora:'Editora 34', secao:'Poesia', literatura:'Latina', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Fragmentos Completos', autor:'Safo', editora:'Editora 34', secao:'Poesia', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Minha Luta 2: Um Outro Amor', autor:'Karl Ove Knausgard', editora:'Editora Companhia das Letras', secao:'Romance Autobiográfico', literatura:'Noruega', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Nova Antologia do Conto Russo', autor:'Fiódor Dostoiévski', editora:'Editora 34', secao:'Contos', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Fábulas', autor:'Esopo', editora:'Editora 34', secao:'Ficção-Fábulas', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Guerra e Paz', autor:'Liev Tolstói', editora:'Editora Cosac Naify', secao:'Romance', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Contos Completos', autor:'Liev Tolstói', editora:'Editora Cosac Naify', secao:'Romance', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'O Primo Basílio', autor:'Eça de Queirós', editora:'Editora Penguin / Companhia das Letras', secao:'Romance', literatura:'Portugal', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'David Copperfield', autor:'Charles Dickens', editora:'Editora Cosac Naify', secao:'Ficção', literatura:'Inglaterra', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Terra Sonâmbula', autor:'Mia Couto', editora:'Editora Companhia das Letras', secao:'Ficção', literatura:'Moçambique', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Odisseia', autor:'Homero', editora:'Ediouro', secao:'Poesia', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Hinos Homéricos', autor:'Anônimo', editora:'Editora Unesp', secao:'Poesia', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Teogonia: a Origem dos Deuses', autor:'Hesíodo', editora:'Editora Iluminuras', secao:'Poesia', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Os Trabalhos e os Dias', autor:'Hesíodo', editora:'Editora Iluminuras', secao:'Poesia', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Tragédias', autor:'Ésquilo', editora:'Editora Iluminuras', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Orestéia', autor:'Ésquilo', editora:'Editora Iluminuras', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Aias', autor:'Sófocles', editora:'Editora Iluminuras', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'A Trilogia Tebana', autor:'Sófocles', editora:'Editora Zahar', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'As Traquínias', autor:'Sófocles', editora:'Editora Unicamp', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Filoctetes', autor:'Sófocles', editora:'Editora 34', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Medéia, Hipólito, As Troianas', autor:'Eurípides', editora:'Editora Zahar', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Ifigênia em Áulis, As Fenícias, As Bacantes', autor:'Eurípides', editora:'Editora Zahar', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Héracles', autor:'Eurípides', editora:'Editora Palas Athena', secao:'Teatro', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'História', autor:'Heródoto', editora:'Editora Prestígio Editorial', secao:'História', literatura:'Grécia', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'O Vermelho e o Negro', autor:'Stendhal', editora:'Editora Cosac Naify', literatura:'França', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Três Contos', autor:'Gustave Flaubert', editora:'Editora Cosac Naify', literatura:'França', img:'imagens/imagem-indisponivel.jpg'},

  {livro:'Noites Brancas', autor:'Fiódor Dostoiévski', editora:'Editora Cosac Naify', literatura:'Rússia', img:'imagens/imagem-indisponivel.jpg'},
  
];


const container = document.querySelector('.livros');

for (let i = 0; i < livros.length; i++) {

  alfa();

  // Exibir em ordem alfabética:
function alfa() {
  livros.sort(function(a, b) {
    let x = a.livro.toLowerCase()
    let y = b.livro.toLowerCase()
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  return `${livros[i].livro} <br> ${livros[i].autor} <br> ${livros[i].editora}`;
}


  const div = document.createElement('div');
  div.className = 'books';
  container.appendChild(div);
    
  const img = document.createElement('img');
  img.setAttribute('src', `${livros[i].img}`);
  div.appendChild(img);
  
  const div2 = document.createElement('div');
  div2.innerHTML = alfa();
  div2.className = 'detalhes';
  div.appendChild(div2);



 // Visualizar Todos
 const btnTodos = document.getElementById('todos');
 btnTodos.addEventListener('click', mostrarTodos);
 function mostrarTodos() {
   if (livros[i].literatura !== '') {
     div.style.display = 'block';
   }
 }


 // Visualizar Lit. Alemã
 const btnAlemanha = document.getElementById('alemanha');
 btnAlemanha.addEventListener('click', mostrarAlemanha);
 function mostrarAlemanha() {
   if (livros[i].literatura !== 'Alemanha') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Lit. Árabe
 const btnArabe = document.getElementById('arabe');
 btnArabe.addEventListener('click', mostrarArabe);
 function mostrarArabe() {
   if (livros[i].literatura !== 'Árabe') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Lit. Argentina
 const btnArgentina = document.getElementById('argentina');
 btnArgentina.addEventListener('click', mostrarArgentina);
 function mostrarArgentina() {
   if (livros[i].literatura !== 'Argentina') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Lit. Brasileira
 const btnBrasil = document.getElementById('brasil');
 btnBrasil.addEventListener('click', mostrarBrasil);
 function mostrarBrasil() {
   if (livros[i].literatura !== 'Brasil') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Lit. Chilena
 const btnChile = document.getElementById('chile');
 btnChile.addEventListener('click', mostrarChile);
 function mostrarChile() {
   if (livros[i].literatura !== 'Chile') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Lit. Colombiana
 const btnColombia = document.getElementById('colombia');
 btnColombia.addEventListener('click', mostrarColombia);
 function mostrarColombia() {
   if (livros[i].literatura !== 'Colômbia') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Lit. Norte-Americana
 const btnEua = document.getElementById('eua');
 btnEua.addEventListener('click', mostrarEua);
 function mostrarEua() {
   if (livros[i].literatura !== 'Estados Unidos') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Escocesa
 const btnEscocia = document.getElementById('escocia');
 btnEscocia.addEventListener('click', mostrarEscocia);
 function mostrarEscocia() {
   if (livros[i].literatura !== 'Escócia') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }

 // Visualizar Literatura Espanhola
 const btnEspanha = document.getElementById('espanha');
 btnEspanha.addEventListener('click', mostrarEspanha);
 function mostrarEspanha() {
   if (livros[i].literatura !== 'Espanha') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Francesa
 const btnFranca = document.getElementById('franca');
 btnFranca.addEventListener('click', mostrarFranca);
 function mostrarFranca() {
   if (livros[i].literatura !== 'França') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Grega
 const btnGrecia = document.getElementById('grecia');
 btnGrecia.addEventListener('click', mostrarGrecia);
 function mostrarGrecia() {
   if (livros[i].literatura !== 'Grécia') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Inglesa
 const btnInglesa = document.getElementById('inglaterra');
 btnInglesa.addEventListener('click', mostrarInglaterra);
 function mostrarInglaterra() {
   if (livros[i].literatura !== 'Inglaterra') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Italiana
 const btnItaliana = document.getElementById('italia');
 btnItaliana.addEventListener('click', mostrarItalia);
 function mostrarItalia() {
   if (livros[i].literatura !== 'Itália') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Japonesa
 const btnJapao = document.getElementById('japao');
 btnJapao.addEventListener('click', mostrarJapao);
 function mostrarJapao() {
   if (livros[i].literatura !== 'Japão') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Latina
 const btnLatina = document.getElementById('latina');
 btnLatina.addEventListener('click', mostrarLatina);
 function mostrarLatina() {
   if (livros[i].literatura !== 'Latina') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Moçambicana
 const btnMocambique = document.getElementById('mocambique');
 btnMocambique.addEventListener('click', mostrarMocambique);
 function mostrarMocambique() {
   if (livros[i].literatura !== 'Moçambique') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Norueguesa
 const btnNoruega = document.getElementById('noruega');
 btnNoruega.addEventListener('click', mostrarNoruega);
 function mostrarNoruega() {
   if (livros[i].literatura !== 'Noruega') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Portuguesa
 const btnPortugal = document.getElementById('portugal');
 btnPortugal.addEventListener('click', mostrarPortugal);
 function mostrarPortugal() {
   if (livros[i].literatura !== 'Portugal') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Russa
 let btnRussia = document.getElementById('russia');
 btnRussia.addEventListener('click', mostrarRussia);
 function mostrarRussia() {
   if (livros[i].literatura !== 'Rússia') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }


 // Visualizar Literatura Uruguaia
 let btnUruguai = document.getElementById('uruguai');
 btnUruguai.addEventListener('click', mostrarUruguai);
 function mostrarUruguai() {
   if (livros[i].literatura !== 'Uruguai') {
     div.style.display = 'none';
   } else {
     div.style.display = 'block';
   }
 }







}










