const selecao = [
  {frase:"Dois metros de terra, da cabeça aos pés, foi tudo de que Pahkóm precisou.", autor:"Liev Tolstói", img:'../images/de-quanta-terra-precisa-o-homem.jpg'},

  {frase:"Um livro pode ajudar você a entender melhor a vida.", autor:"Chloé Legeay", img:'../images/para-que-serve-um-livro.jpg'},

  {frase:"O menino baixou a cabeça, desolado. Sua memória o levou de volta à aldeia em torno do lago, onde tinha sido tão feliz, onde tivera a breve companhia de khuna. Lembrou o momento em que salvou a vida da sua inseparável Wintata, tingindo a face do filhote logo após o nascimento com corante de tecido para evitar que integrasse o rebanho de lhamas brancas, reservadas como oferenda aos deuses. Fez isso porque nunca assimilara muito bem o princípio dos rituais com sacrifícios.", autor:"CárcamO", img:'../images/thapa-kunturi.jpg'},

  {frase:"O mundo é um círculo infinito, em que tudo tem um tempo e um lugar. Mesmo algo de extrema beleza chega necessariamente a um fim e renasce como algo diferente. Existe uma ordem. Se você quiser mudá-la, será preciso agir de acordo com o que seu coração dita. Mas, no fim, é você que pertence à ordem. Ela não pertence a você.", autor:"Raja Mohanty, Sirish Rao", img:'../images/o-circulo-do-destino.jpg'}
];

function gerarSelecao() {
  const randomQuote = selecao[Math.floor(Math.random() * selecao.length)];
  document.getElementById('imagem-livro').src = randomQuote.img;
  document.getElementById('texto').textContent = randomQuote.frase;
  document.getElementById('autor').textContent = randomQuote.autor;
}

document.addEventListener('DOMContentLoaded', function() {
  gerarSelecao(); // Chame a função ao carregar a página

  document.getElementById('nova-selecao').addEventListener('click', function() {
    gerarSelecao(); // Chame a função ao clicar no botão
  });
});