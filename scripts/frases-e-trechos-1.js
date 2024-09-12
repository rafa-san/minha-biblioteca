const selecao = [
  {frase: "Um livro pode ajudar você a entender melhor a vida.", autor: "Chloé Legeay", livro: "Para que serve um livro?"},

  {frase: "O mundo é um círculo infinito, em que tudo tem um tempo e um lugar. Mesmo algo de extrema beleza chega necessariamente a um fim e renasce como algo diferente. Existe uma ordem. Se você quiser mudá-la, será preciso agir de acordo com o que seu coração dita. Mas, no fim, é você que pertence à ordem. Ela não pertence a você.", autor: "Raja Mohanty, Sirish Rao", livro: "O círculo do destino"},

  {frase: "Aprenda a olhar em silêncio se você não quiser que o barulho espante, diante de seus olhos, a beleza das coisas frágeis.", autor: "François Place", livro: "O velho louco por desenho"},

  {frase: `<strong>Mafalda: </strong>Como foi na escola, Filipe? Já te ensinaram a escrever?<br>
  <strong>Filipe:</strong> E você queria que me ensinassem a escrever numa aula só?<br>
  <strong>Mafalda:</strong> Mas... você ficou lá o dia inteiro!<br>
  <strong>Filipe:</strong> É, mas antes a gente tem que fazer traços, letras, sílabas e um monte de outras coisas e... leva meses pra ensinarem a gente a escrever!<br>
  <strong>Mafalda:</strong> <strong>MESES?! MALDITOS BUROCRATAS!</strong>`, autor: "Quino", livro: "Toda Mafalda"},

  {frase: "A beleza será CONVULSIVA, ou não será", autor: "André Breton", livro: "Nadja"},

  // {frase: "Julio fugia dos relacionamentos sérios, não se escondia das mulheres, mas da seriedade, pois sabia que a seriedade era tanto ou mais perigosa que as mulheres. Julio sabia que estava condenado à seriedade, e tentava, obstinadamente, torcer seu destino sério, passar o tempo na estoica espera daquele espantoso e inevitável dia em que a seriedade chegaria para se instalar para sempre na sua vida.", autor: "Alejandro Zambra", livro: "Bonsai"}

  {frase: "Temos que resolver o seu problema, ele havia me dito aquela manhã, enquanto caminhávamos até o ponto. Perguntei qual, porque eu pensava que tinha muitos problemas, e não apenas um. Sua timidez, me respondeu, as mulheres não gostam dos tímidos. E claro que eu era tímido na época; falo de uma timidez genuína, verdadeira, não como hoje em dia que todo mundo é tímido, chega ser engraçado. Se alguém não te cumprimenta, dizem que é por timidez, e se matou a mulher, foi porque era tímido, se enganou um povo inteiro, se se candidatou a deputado, se comeu o resto de nutella do pote sem perguntar a ninguém: tímido. Falo de outra coisa: gagueira, insegurança, introspecção.", autor: "Alejandro Zambra", livro: "Meus documentos"},

  {frase: `a poesia mora <br> nos dias habita as frestas <br> das calçadas adormece no canto <br> entre cama e parede <br> e insiste <br> escorregando pelas sombras <br> dos sapatos apressados pelo sorriso preso <br> no canto do rosto <br> nos teus <br> e meus <br> olhos d'água`, autor: "Aline Miranda", livro: "..."},

  {frase: "Olha maninho, o essencial é fazermo-nos hábeis, e não úteis.", autor: "Mario Quintana", livro: "Nariz de vidro"},

  {frase: "...E como se reconhece, no fundo, a vida que vingou? Um homem que vingou faz bem a nossos sentidos: (...) Inventa meios de cura para injúrias, utiliza acasos ruins em seu proveito; o que não o mata o fortalece. De tudo o que vê, ouve e vive forma instintivamente sua soma. Ele é um princípio relativo, muito deixa de lado. Está sempre em sua companhia, lide com homens, livros ou paisagens: (...) Reage lentamente a toda sorte de estímulo, com aquela lentidão que uma larga previdência e um orgulho conquistado nele cultivaram - interroga o estímulo que se aproxima, está longe de ir ao seu encontro. Descrê de \"infortúnio\" como de culpa: acerta contas consigo, com os outros, sabe esquecer - é forte o bastante para que tudo tenha de resultar no melhor para ele.", autor: "Friedrich Nietzsche", livro:"Ecce homo"},

  {frase:"Seu coração batia forte. Ah, como batia.", autor:"Karl Ove Knausgard", livro:"Minha luta 1: A morte do pai"},

  {frase:"Tudo que não é funcional é meramente decorativo.", autor:"David Mazzucchelli", livro:"Asterios Polyp"},

  {frase:"Mas lembre-se para sempre de que os monstros não morrem. O que morre é o medo que eles incutem em você. Assim o é com os deuses. Quando os mortais não tiverem mais medo, os deuses desaparecerão.", autor:"Cesare Pavese", livro:"Diálogos com Leucó"},

  {frase:"Observe o rapaz que toma banho no Asopo. Manhã de verão. O rapaz sai da água, torna a entrar, mergulha e volta a mergulhar. Passa mal e se afoga. O que têm os deuses a ver com isso? Deverá atribuir o seu fim aos deuses ou então ao prazer desfrutado? Nem uma coisa nem outra. Aconteceu algo - que não é bom nem mau, alguma coisa que não tem nome -, depois os deuses lhe darão um nome.", autor:"Cesare Pavese", livro:"Diálogos com Leucó"},

  {frase:"Jamais para mim a bandeira abaixada, jamais a última tentativa.", autor:"Sir Ernest Shackleton", livro:"Endurance: a lendária expedição de Shackleton à Antártida"},

  {frase:"Meu coração ventava forçando o peito", autor:"Maura Lopes Cançado", livro:"O sofredor do ver"},

  {frase:"Tu, que me lês, estás seguro de entender minha linguagem?", autor:"Jorge Luis Borges", livro:"Ficções"}
];

function gerarSelecao() {
  const randomQuote = selecao[Math.floor(Math.random() * selecao.length)];
  document.getElementById('texto').innerHTML = randomQuote.frase;
  document.getElementById('livro').innerHTML = `<strong><cite>${randomQuote.livro}</cite></strong>`;
  document.getElementById('autor').textContent = randomQuote.autor;
}

document.addEventListener('DOMContentLoaded', function() {
  gerarSelecao(); // Chamar a função ao carregar a página

  document.getElementById('nova-selecao').addEventListener('click', function() {
    gerarSelecao(); // Chamar a função ao clicar no botão
  });
});