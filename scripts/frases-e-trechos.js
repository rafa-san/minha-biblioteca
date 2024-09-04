const selecao = [
  {frase: "Um livro pode ajudar você a entender melhor a vida.", autor: "Chloé Legeay", livro: "Para que serve um livro?"},

  {frase: "O menino baixou a cabeça, desolado. Sua memória o levou de volta à aldeia em torno do lago, onde tinha sido tão feliz, onde tivera a breve companhia de khuna. Lembrou o momento em que salvou a vida da sua inseparável Wintata, tingindo a face do filhote logo após o nascimento com corante de tecido para evitar que integrasse o rebanho de lhamas brancas, reservadas como oferenda aos deuses. Fez isso porque nunca assimilara muito bem o princípio dos rituais com sacrifícios.", autor: "CárcamO", livro: "Thapa Kunturi"},

  {frase: "O mundo é um círculo infinito, em que tudo tem um tempo e um lugar. Mesmo algo de extrema beleza chega necessariamente a um fim e renasce como algo diferente. Existe uma ordem. Se você quiser mudá-la, será preciso agir de acordo com o que seu coração dita. Mas, no fim, é você que pertence à ordem. Ela não pertence a você.", autor: "Raja Mohanty, Sirish Rao", livro: "O círculo do destino"},

  {frase: "Nós, os pintores, os poetas, os escritores, os gravuristas, os atores, formávamos um mundo à parte. Éramos os representantes do 'mundo das nuvens', de tudo o que é vivo e se move.", autor: "François Place", livro: "O velho louco por desenho"},

  {frase: "Aprenda a olhar em silêncio se você não quiser que o barulho espante, diante de seus olhos, a beleza das coisas frágeis.", autor: "François Place", livro: "O velho louco por desenho"},

  {frase: "O que eu penso da Mafalda não importa. Importante mesmo é o que a Mafalda pensa de mim", autor: "Julio Cortázar", livro: "Toda Mafalda"},

  {frase: `<strong>Mafalda: </strong>Como foi na escola, Filipe? Já te ensinaram a escrever?<br>
  <strong>Filipe:</strong> E você queria que me ensinassem a escrever numa aula só?<br>
  <strong>Mafalda:</strong> Mas... você ficou lá o dia inteiro!<br>
  <strong>Filipe:</strong> É, mas antes a gente tem que fazer traços, letras, sílabas e um monte de outras coisas e... leva meses pra ensinarem a gente a escrever!<br>
  <strong>Mafalda:</strong> <strong>MESES?! MALDITOS BUROCRATAS!</strong>`, autor: "Quino", livro: "Toda Mafalda"},

  {frase: "Viver (na minha compreensão) é existir dentro de um conceito de tempo. Mas relembrar é cancelar a própria noção de tempo. Toda lembrança, não importa o quão remota, acontece 'agora', no momento em que é convocada à mente. Quanto mais algo é relembrado, mais vezes o cérebro tem chance de aprimorar a experiência original, porque toda lembrança é uma recriação, não uma reprodução.", autor: "David Mazzucchelli", livro: "Asterios Polyp"},

  {frase: "A beleza será CONVULSIVA, ou não será", autor: "André Breton", livro: "Nadja"},

  {frase: "Observo os carros, conto os carros. Me parece triste pensar que nos assentos traseiros vão meninos dormindo, e que cada um desses meninos recordará, alguma vez, o antigo carro em que anos atrás viajava com seus pais.", autor: "Alejandro Zambra", livro: "Formas de voltar para casa"},

  // {frase: "Julio fugia dos relacionamentos sérios, não se escondia das mulheres, mas da seriedade, pois sabia que a seriedade era tanto ou mais perigosa que as mulheres. Julio sabia que estava condenado à seriedade, e tentava, obstinadamente, torcer seu destino sério, passar o tempo na estoica espera daquele espantoso e inevitável dia em que a seriedade chegaria para se instalar para sempre na sua vida.", autor: "Alejandro Zambra", livro: "Bonsai"}

  {frase: "Temos que resolver o seu problema, ele havia me dito aquela manhã, enquanto caminhávamos até o ponto. Perguntei qual, porque eu pensava que tinha muitos problemas, e não apenas um. Sua timidez, me respondeu, as mulheres não gostam dos tímidos. E claro que eu era tímido na época; falo de uma timidez genuína, verdadeira, não como hoje em dia que todo mundo é tímido, chega ser engraçado. Se alguém não te cumprimenta, dizem que é por timidez, e se matou a mulher, foi porque era tímido, se enganou um povo inteiro, se se candidatou a deputado, se comeu o resto de nutella do pote sem perguntar a ninguém: tímido. Falo de outra coisa: gagueira, insegurança, introspecção.", autor: "Alejandro Zambra", livro: "Meus documentos"},

  {frase: "Gostou do fato de no estádio as pessoas gritarem e reclamarem, mas ficou surpreso quando notou a raiva dirigida ao árbitro, de modo que resolveu defendê-lo, e ainda que no começo as pessoas tenham levado a mal, também era engraçado ver o Camilo, a cada vez que o árbitro marcava uma falta ou dava um cartão, ficar de pé e dizer em voz alta: muito bem, senhor juiz, ótima decisão.", autor: "Alejandro Zambra", livro: "Meus documentos"},

  {frase: `a poesia mora <br> nos dias habita as frestas <br> das calçadas adormece no canto <br> entre cama e parede <br> e insiste <br> escorregando pelas sombras <br> dos sapatos apressados pelo sorriso preso <br> no canto do rosto <br> nos teus <br> e meus <br> olhos d'água`, autor: "Aline Miranda", livro: "..."},

  {frase: `Quase falara com ela mas aqueles olhos haviam alterado o mundo para sempre no espaço de uma batida do coração.`, autor: "Cormac McCarthy", livro: "Todos os belos cavalos"}
];

function gerarSelecao() {
  const randomQuote = selecao[Math.floor(Math.random() * selecao.length)];
  document.getElementById('texto').innerHTML = '<i class="fa fa-quote-left"></i> ' + randomQuote.frase + '<i class="fa fa-quote-right"></i>';
  document.getElementById('livro').innerHTML = `<strong><cite>${randomQuote.livro}</cite></strong>`;
  document.getElementById('autor').textContent = randomQuote.autor;
}

document.addEventListener('DOMContentLoaded', function() {
  gerarSelecao(); // Chamar a função ao carregar a página

  document.getElementById('nova-selecao').addEventListener('click', function() {
    gerarSelecao(); // Chamar a função ao clicar no botão
  });
});