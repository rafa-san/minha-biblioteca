const livros = [
  {livro:'Elegância do Ouriço, A', autor:'Muriel Barbery', ano:2006},
  {livro:'Virgens Suicidas, As', autor:'Jeffrey Eugenides', ano:1993},
  {livro:'Dois Irmãos', autor:'Milton Hatoum', ano:2001},
  {livro:'Nada a Dizer', autor:'Elvira Vigna', ano:2010}
];

const livrosPorPagina = 2;
let paginaAtual = 1;

function exibirLivros() {
  const indiceInicial = (paginaAtual - 1) * livrosPorPagina;
  const indiceFinal = indiceInicial + livrosPorPagina;
  const livrosPagina = livros.slice(indiceInicial, indiceFinal);

  let texto = '';
  for (let i = 0; i < livrosPagina.length; i++) {
    texto += `<p> <strong>${livrosPagina[i].livro}</strong> (${livrosPagina[i].ano}) <br> ${livrosPagina[i].autor} </p>`;
  } 
  document.getElementById('itens-lista').innerHTML = texto;
}

function renderizarPaginacao() {
  const totalPaginas = Math.ceil(livros.length / livrosPorPagina);
  const paginacao = document.getElementById("paginacao");
  paginacao.innerHTML = "";

  for (let i = 1; i <= totalPaginas; i++) {
    const botaoPagina = document.createElement("span");
    botaoPagina.textContent = i;
    botaoPagina.classList.add("botao-pagina");
    botaoPagina.addEventListener("click", () => {
      paginaAtual = i;
      exibirLivros();
      renderizarPaginacao();
    });
    if (i === paginaAtual) {
      botaoPagina.classList.add("ativo");
    }
    paginacao.appendChild(botaoPagina);
  }
}

document.getElementById('total-livros').innerHTML = livros.length;

const autoresUnicos = new Set(livros.map(livro => livro.autor));
document.getElementById('total-autores').innerHTML = autoresUnicos.size;

exibirLivros();
renderizarPaginacao();

function alfa() {
  livros.sort(function(a, b) {
    let x = a.livro.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'');
    let y = b.livro.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'');
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  paginaAtual = 1; // Resetar a página para 1 ao reordenar
  exibirLivros();
  renderizarPaginacao();
};

function cron() {
  livros.sort(function(a, b) {return a.ano - b.ano});
  paginaAtual = 1; // Resetar a página para 1 ao reordenar
  exibirLivros();
  renderizarPaginacao();
};

function dire() {
  livros.sort(function(a, b) {
    let m = a.autor.toLowerCase();
    let n = b.autor.toLowerCase();
    if (m < n) {return -1;}
    if (m > n) {return 1;}
    return 0;
  });
  paginaAtual = 1; // Resetar a página para 1 ao reordenar
  exibirLivros();
  renderizarPaginacao();
}
