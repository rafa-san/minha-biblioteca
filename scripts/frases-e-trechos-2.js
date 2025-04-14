const selecao = [
  { frase: "O menino baixou a cabeça, desolado. Sua memória o levou de volta à aldeia em torno do lago, onde tinha sido tão feliz, onde tivera a breve companhia de khuna. Lembrou o momento em que salvou a vida da sua inseparável Wintata, tingindo a face do filhote logo após o nascimento com corante de tecido para evitar que integrasse o rebanho de lhamas brancas, reservadas como oferenda aos deuses. Fez isso porque nunca assimilara muito bem o princípio dos rituais com sacrifícios.", autor: "CárcamO", livro: "Thapa Kunturi" },

  { frase: "Nós, os pintores, os poetas, os escritores, os gravuristas, os atores, formávamos um mundo à parte. Éramos os representantes do 'mundo das nuvens', de tudo o que é vivo e se move.", autor: "François Place", livro: "O velho louco por desenho" },

  { frase: "O que eu penso da Mafalda não importa. Importante mesmo é o que a Mafalda pensa de mim", autor: "Julio Cortázar", livro: "Toda Mafalda" },

  { frase: "Viver (na minha compreensão) é existir dentro de um conceito de tempo. Mas relembrar é cancelar a própria noção de tempo. Toda lembrança, não importa o quão remota, acontece 'agora', no momento em que é convocada à mente. Quanto mais algo é relembrado, mais vezes o cérebro tem chance de aprimorar a experiência original, porque toda lembrança é uma recriação, não uma reprodução.", autor: "David Mazzucchelli", livro: "Asterios Polyp" },

  { frase: "Observo os carros, conto os carros. Me parece triste pensar que nos assentos traseiros vão meninos dormindo, e que cada um desses meninos recordará, alguma vez, o antigo carro em que anos atrás viajava com seus pais.", autor: "Alejandro Zambra", livro: "Formas de voltar para casa" },

  { frase: "Gostou do fato de no estádio as pessoas gritarem e reclamarem, mas ficou surpreso quando notou a raiva dirigida ao árbitro, de modo que resolveu defendê-lo, e ainda que no começo as pessoas tenham levado a mal, também era engraçado ver o Camilo, a cada vez que o árbitro marcava uma falta ou dava um cartão, ficar de pé e dizer em voz alta: muito bem, senhor juiz, ótima decisão.", autor: "Alejandro Zambra", livro: "Meus documentos" },

  { frase: `Quase falara com ela mas aqueles olhos haviam alterado o mundo para sempre no espaço de uma batida do coração.`, autor: "Cormac McCarthy", livro: "Todos os belos cavalos" },

  { frase: "Coragem, não é cedendo ao ócio nem refestelando-se sobre plumas que se conquistam os prêmios ao valor. Aquele que à inatividade se entregar, de si deixará sobre a terra memória igual ao traço que o fumo risca no ar e a espuma traça na onda. Supera a fadiga, vence o torpor, recobra o ânimo, que das vitórias sobre os perigos, a primeira é a da vontade sobre o corpo.", autor: "Dante Alighieri", livro: "A divina comédia" },

  { frase: "Falando simples, odeio a todos os Deuses que bem tratados afligem-me sem justiça.", autor: "Ésquilo", livro: "Prometeu acorrentado" },

  { frase: `(...) que enquanto vagueio pelas cinzas do mundo <br /> com inúteis pés fixados, enquanto sofro <br /> e sofrendo me solto e me recomponho <br /> e torno a viver e ando (...)`, autor: "Carlos Drummond de Andrade", livro: "Antologia poética" },

  { frase: "A que serve viver os dias se eles não são recordados?", autor: "Cesare Pavese", livro: "Diálogos com Leucó" },

  { frase: "Peço para viver, não para ser feliz.", autor: "Cesare Pavese", livro: "Diálogos com Leucó" },

  { frase: "Ela deu-lhe a mão e mencionou numa pergunta o tédio e a solidão.", autor: "Juan Carlos Onetti", livro: "47 contos de Juan Carlos Onetti" },

  { frase: "Rendo-me. Que aconteça o que tiver que acontecer. Não vou mais me agarrar a nada.", autor: "Natsume Soseki", livro: "Eu sou um gato" },

  { frase: "Só é verdade o que acontece a cada trezentas noites.", autor: "Jorge Luis Borges", livro: "Ficções" },

  { frase: "(...) tinha vivido como quem sonha: olhava sem ver, ouvia sem ouvir, esquecia-se de tudo, de quase tudo.", autor: "Jorge Luis Borges", livro: "Ficções" },

  { frase: "O impossível é uma fronteira que sempre recua um pouco.", autor: "Victor Hugo", livro: "Os trabalhadores do mar" },
]

console.log(selecao.length);

function gerarSelecao() {
  const randomQuote = selecao[Math.floor(Math.random() * selecao.length)];
  document.getElementById('texto').innerHTML = randomQuote.frase;
  document.getElementById('livro').innerHTML = `<strong><cite>${randomQuote.livro}</cite></strong>`;
  document.getElementById('autor').textContent = randomQuote.autor;
}

document.addEventListener('DOMContentLoaded', function () {
  gerarSelecao(); // Chamar a função ao carregar a página
});