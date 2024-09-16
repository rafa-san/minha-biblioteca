const container = document.querySelector('.container-livros');

const livros = [
  {livro:'47 contos de Juan Carlos Onetti', autor:'Juan Carlos Onetti', editora:'Companhia das Letras', anoEdicao:'2006', categoria:'Literatura Uruguaia', segmento:'Contos, Novelas e Romances', img:'../images/47-contos-de-juan-carlos-onetti.jpg'},

  {livro:'1984', autor:'George Orwell', editora:'Companhia Editora Nacional', anoEdicao:'2005', categoria:'Literatura Inglesa', segmento:'Contos, Novelas e Romances', img:'../images/1984.jpg'},

  {livro:'A árvore generosa', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2006', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-arvore-generosa.jpg'},

  {livro:'A casa das belas adormecidas', autor:'Yasunari Kawabata', editora:'Estação Liberdade', anoEdicao:'2004', categoria:'Literatura Japonesa', segmento:'Contos, Novelas e Romances', img:'../images/a-casa-das-belas-adormecidas.jpg'},

  {livro:'A civilização do espetáculo', autor:'Mario Vargas Llosa', editora:'Objetiva', anoEdicao:'2013', categoria:'Literatura Peruana', segmento:'Ensaios', img:'../images/a-civilizacao-do-espetaculo.jpg'},

  {livro:'A conferência dos pássaros', autor:'Peter Sís', editora:'Companhia das Letrinhas', anoEdicao:'2013', categoria:'Literatura Tcheca', segmento:'Literatura Juvenil', img:'../images/a-conferencia-dos-passaros.jpg'},

  {livro:'A desobediência civil', autor:'Henry David Thoreau', editora:'L&PM', anoEdicao:'2010', categoria:'Literatura Norte-Americana', segmento:'Ensaios', img:'../images/a-desobediencia-civil.jpg'},
  
  {livro:'A divina comédia', autor:'Dante Alighieri', editora:'Abril Cultural', anoEdicao:'1979', categoria:'Literatura Italiana', segmento:'Poesia', img:'../images/a-divina-comedia.jpg'},

  {livro:'A gaia ciência', autor:'Friedrich Nietzsche', editora:'Companhia de Bolso', anoEdicao:'2012', categoria:'Literatura Alemã', segmento:'Filosofia', img:'../images/a-gaia-ciencia.jpg'},

  {livro:'A hora da estrela', autor:'Clarice Lispector', editora:'Rocco', anoEdicao:'1998', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/a-hora-da-estrela.jpg'},

  {livro:'A incrível história do vinho', autor:'Benoist Simmat', editora:'L&PM', anoEdicao:'2022', categoria:'Literatura Francesa', segmento:'HQs, Mangás & Graphic Novels', img:'../images/a-incrivel-historia-do-vinho.jpg'},

  {livro:'A metamorfose', autor:'Franz Kafka', editora:'Nova Cultural', anoEdicao:'2002', categoria:'Literatura Tcheca', segmento:'Contos, Novelas e Romances', img:'../images/a-metamorfose.jpg'},

  {livro:'A narrativa de A. Gordon Pym', autor:'Edgar Allan Poe', editora:'Cosac Naify', anoEdicao:'2010', categoria:'Literatura Norte-Americana', segmento:'Contos, Novelas e Romances', img:'../images/a-narrativa-de-a-gordon-pym.jpg'},

  {livro:'A parte que falta', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-parte-que-falta.jpg'},

  {livro:'A parte que falta encontra o grande O', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/a-parte-que-falta-encontra-o-grande-o.jpg'},

  {livro:'A sangue frio', autor:'Truman Capote', editora:'Companhia das Letras', anoEdicao:'2003', categoria:'Literatura Norte-Americana', segmento:'História e Jornalismo', img:'../images/a-sangue-frio.jpg'},

  {livro:'A testemunha silenciosa', autor:'Otto Lara Resende', editora:'Companhia das Letras', anoEdicao:'2012', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/a-testemunha-silenciosa.jpg'},

  {livro:'A trilogia tebana: Édipo Rei; Édipo em Colono; Antígona', autor:'Sófocles', editora:'Jorge Zahar', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/a-trilogia-tebana.jpg'},

  {livro:'A vaca e o hipogrifo', autor:'Mario Quintana', editora:'Alfaguara', anoEdicao:'2012', categoria:'Literatura Brasileira', segmento:'Poesia', img:'../images/a-vaca-e-o-tipografo.jpg'},

  {livro:'A viagem da senhorita Timothy', autor:'Giovanna Zoboli', editora:'Pequena Zahar', anoEdicao:'2012', categoria:'Literatura Italiana', segmento:'Literatura Infantil', img:'../images/a-viagem-da-senhorita-timothy.jpg'},

  {livro:'A vida privada das árvores', autor:'Alejandro Zambra', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Chilena', segmento:'Contos, Novelas e Romances', img:'../images/a-vida-privada-das-arvores.jpg'},

  {livro:'As antenas do caracol', autor:'Dirce Waltrick do Amarante', editora:'Iluminuras', anoEdicao:'2012', categoria:'Literatura Brasileira', segmento:'Crítica, História e Teoria literária', img:'../images/as-antenas-do-caracol.jpg'},

  {livro:'As melhores seleções estrangeiras de todos os tempos', autor:'Mauro Beting', editora:'Editora Contexto', anoEdicao:'2010', categoria:'Literatura Brasileira', segmento:'Esportes, Lazer e Viagens', img:'../images/as-melhores-selecoes-estrangeiras-de-todos-os-tempos.jpg'},

  {livro:'As nuvens; Só para mulheres; Um deus chamado dinheiro', autor:'Aristófanes', editora:'Jorge Zahar', anoEdicao:'2000', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/as-nuvens-so-para-mulheres-um-deus-chamado-dinheiro.jpg'},

  {livro:'As Traquínias', autor:'Sófocles', editora:'Unicamp', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/as-traquinias.jpg'},

  {livro:'As vespas; As aves; As rãs', autor:'Aristófanes', editora:'Jorge Zahar', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/as-vespas-as-aves-as-ras.jpg'},

  {livro:'Agamêmnon - Orestéia I', autor:'Ésquilo', editora:'Iluminuras', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/agamemnon.jpg'},

  {livro:'Aias', autor:'Sófocles', editora:'Iluminuras', anoEdicao:'2008', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/aias.jpg'},

  {livro:'Antologia da literatura fantástica', autor:'Adolfo Bioy Casares, Jorge Luis Borges, Silvina Ocampo (organizadores)', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Global', segmento:'Contos, Novelas e Romances', img:'../images/antologia-da-literatura-fantastica.jpg'},

  {livro:'Antologia poética', autor:'Carlos Drummond de Andrade', editora:'Record', anoEdicao:'2009', categoria:'Literatura Brasileira', segmento:'Poesia', img:'../images/antologia-poetica.jpg'},

  {livro:'Asterios Polyp', autor:'David Mazzucchelli', editora:'Quadrinhos na Cia.', anoEdicao:'2011', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/asterios-polyp.jpg'},

  {livro:'Através do espelho e o que Alice encontrou lá', autor:'Lewis Carroll', editora:'Editora 34', anoEdicao:'2015', categoria:'Literatura Inglesa', segmento:'Literatura Juvenil', img:'../images/atraves-do-espelho-e-o-que-alice-encontrou-la.jpg'},

  {livro:'Avenida Niévski', autor:'Nikolai Gógol', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/avenida-nievski.jpg'},

  {livro:'Aventuras de Alice no país das maravilhas', autor:'Lewis Carroll', editora:'Editora 34', anoEdicao:'2015', categoria:'Literatura Inglesa', segmento:'Literatura Juvenil', img:'../images/aventuras-de-alice-no-pais-das-maravilhas.jpg'},

  {livro:'Banksy: Guerra e Spray', autor:'Banksy', editora:'Intrínseca', anoEdicao:'2012', categoria:'Literatura Inglesa', segmento:'Arte, Cinema e Fotografia', img:'../images/banksy-guerra-e-spray.jpg'},

  {livro:'Barba ensopada de sangue', autor:'Daniel Galera', editora:'Companhia das Letras', anoEdicao:'2012', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/barba-ensopada-de-sangue.jpg'},

  {livro:'Batman Begins', autor:'Dennis O\'Neil (novelization)', editora:'Del Rey Books', anoEdicao:'2005', categoria:'Literatura Norte-Americana', segmento:'Livros em Inglês', img:'../images/batman-begins.jpg'},
 
  {livro:'Bicycles: Pop-up-book', autor:'Dominique Ehrhard', editora:'Prestel', anoEdicao:'2024', categoria:'Literatura Francesa', segmento:'Literatura Infantil', img:'../images/bicycles.jpg'},

  {livro:'Bonsai', autor:'Alejandro Zambra', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Chilena', segmento:'Contos, Novelas e Romances', img:'../images/bonsai.jpg'},

  {livro:`Butcher's Crossing`, autor:'John Williams', editora:'Rádio Londres', anoEdicao:'2016', categoria:'Literatura Norte-Americana', segmento:'Contos, Novelas e Romances', img:'../images/butchers-crossing.jpg'},

  {livro:'Caminhar, uma filosofia', autor:'Frédéric Gros', editora:'Ubu', anoEdicao:'2021', categoria:'Literatura Francesa', segmento:'Filosofia', img:'../images/caminhar-uma-filosofia.jpg'},

  {livro:'Cartas a um jovem poeta e A canção de amor e de morte do porta-estandarte Cristóvão Rilke', autor:'Rainer Maria Rilke', editora:'Globo', anoEdicao:'2001', categoria:'Literatura Tcheca', segmento:'Biografias, Crônicas e Diários', img:'../images/cartas-a-um-jovem-poeta.jpg'},

  {livro:'Cem anos de solidão', autor:'Gabriel García Márquez', editora:'Record', anoEdicao:'2006', categoria:'Literatura Colombiana', segmento:'Contos, Novelas e Romances', img:'../images/cem-anos-de-solidao.jpg'},

  {livro:'Chico Bento: pavor espaciar', autor:'Gustavo Duarte', editora:'Panini', anoEdicao:'2015', categoria:'Literatura Brasileira', segmento:'HQs, Mangás & Graphic Novels', img:'../images/chico-bento-pavor-espaciar.jpg'},

  {livro:'Civilizações perdidas: Astecas - Reinado de sangue e esplendor', autor:'Dale M. Brown (editor da série)', editora:'Abril Coleções', anoEdicao:'1998', categoria:'Literatura Global', segmento:'História e Jornalismo', img:'../images/astecas-reinado-de-sangue-e-esplendor.jpg'},

  {livro:'Civilizações perdidas: Egito - Terra dos faraós', autor:'Dale M. Brown (editor da série)', editora:'Abril Coleções', anoEdicao:'1998', categoria:'Literatura Global', segmento:'História e Jornalismo', img:'../images/civilizacoes-perdidas-egito-terra-dos-faraos.jpg'},

  {livro:'Civilizações perdidas: Grécia - Templos, túmulos e tesouros', autor:'Dale M. Brown (editor da série)', editora:'Abril Coleções', anoEdicao:'1998', categoria:'Literatura Global', segmento:'História e Jornalismo', img:'../images/grecia-templos-tumulos-e-tesouros.jpg'},

  {livro:'Civilizações perdidas: O esplendor dos Maias', autor:'Dale M. Brown (editor da série)', editora:'Abril Coleções', anoEdicao:'1998', categoria:'Literatura Global', segmento:'História e Jornalismo', img:'../images/civilizacoes-perdidas-o-esplendor-dos-maias.jpg'},

  {livro:'Civilizações perdidas: O império Inca', autor:'Dale M. Brown (editor da série)', editora:'Abril Coleções', anoEdicao:'1998', categoria:'Literatura Global', segmento:'História e Jornalismo', img:'../images/civilizacoes-perdidas-imperio-inca.jpg'},

  {livro:'Có! & Birds', autor:'Gustavo Duarte', editora:'Quadrinhos na Cia.', anoEdicao:'2014', categoria:'Literatura Brasileira', segmento:'HQs, Mangás & Graphic Novels', img:'../images/co-e-birds.jpg'},

  {livro:'Coéforas - Orestéia II', autor:'Ésquilo', editora:'Iluminuras', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/coeforas.jpg'},

  {livro:'Como funciona a Contos, Novelas e Romances', autor:'James Wood', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Inglesa', segmento:'Crítica, História e Teoria literária', img:'../images/como-funciona-a-ficcao.jpg'},

  {livro:'Contos da mamãe gansa', autor:'Charles Perrault', editora:'Cosac Naify', anoEdicao:'2015', categoria:'Literatura Francesa', segmento:'Literatura Juvenil', img:'../images/contos-da-mamae-gansa.jpg'},

  {livro:'Contos de lugares distantes', autor:'Shaun Tan', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Australiana', segmento:'Literatura Juvenil', img:'../images/contos-de-lugares-distantes.jpg'},

  {livro:'Crítica, teoria e literatura infantil', autor:'Peter Hunt', editora:'Cosac Naify', anoEdicao:'2010', categoria:'Literatura Inglesa', segmento:'Crítica, História e Teoria literária', img:'../images/critica-teoria-e-literatura-intantil.jpg'},

  {livro:'De quanta terra precisa o homem?', autor:'Liev Tolstói', editora:'Companhia das Letrinhas', anoEdicao:'2009', categoria:'Literatura Russa', segmento:'Literatura Infantil', img:'../images/de-quanta-terra-precisa-o-homem.jpg'},

  {livro:'Diálogos com Leucó', autor:'Cesare Pavese', editora:'Cosac Naify', anoEdicao:'2011', categoria:'Literatura Italiana', segmento:'Contos, Novelas e Romances', img:'../images/dialogos-com-leuco.jpg'},

  {livro:'Diário de Pilar na Grécia', autor:'Flávia Lins e Silva', editora:'Pequena Zahar', anoEdicao:'2022', categoria:'Literatura Brasileira', segmento:'Literatura Juvenil', img:'../images/diario-de-pilar-na-grecia.jpg'},

  {livro:'Diários (1947-63)', autor:'Susan Sontag', editora:'Companhia das Letras', anoEdicao:'2009', categoria:'Literatura Norte-Americana', segmento:'Biografias, Crônicas e Diários', img:'../images/diarios-1947-1963.jpg'},
  
  {livro:'Dicionário Escolar Alemão', autor:'Alfred J. Keller', editora:'Melhoramentos', anoEdicao:'2009', categoria:'Obras de Referência', segmento:'Dicionários', img:'../images/dicionario-michaelis-alemao.jpg'},

  {livro:'Dois fios', autor:'Pep Molist', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Espanhola', segmento:'Literatura Infantil', img:'../images/dois-fios.jpg'},

  {livro:'Dom Casmurro', autor:'Machado de Assis', editora:'Ática', anoEdicao:'2002', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/dom-casmurro.jpg'},

  {livro:'Ecce homo', autor:'Friedrich Nietzsche', editora:'Companhia de Bolso', anoEdicao:'2008', categoria:'Literatura Alemã', segmento:'Filosofia', img:'../images/ecce-homo.jpg'},

  {livro:'Ele que o abismo viu: epopeia de Gilgámesh', autor:'Sin-léqi-unnínni', editora:'Autêntica', anoEdicao:'2023', categoria:'Literatura Mesopotâmica', segmento:'Poesia', img:'../images/epopeia-de-gilgamesh.jpg'},

  {livro:'Electra(s)', autor:'Sófocles, Eurípides', editora:'Ateliê Editorial', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/electra(s).jpg'},

  {livro:'Endurance: a lendária expedição de Shackleton à Antártida', autor:'Caroline Alexander', editora:'Companhia das Letras', anoEdicao:'1999', categoria:'Literatura Norte-Americana', segmento:'Biografias, Crônicas e Diários', img:'../images/endurance.jpg'},

  {livro:'Entregas expressas da Kiki', autor:'Eiko Kadono', editora:'Estação Liberdade', anoEdicao:'2021', categoria:'Literatura Japonesa', segmento:'Literatura Juvenil', img:'../images/entregas-expressas-da-kiki.jpg'},

  {livro:'Era uma vez uma capa', autor:'Alan Powers', editora:'Cosac Naify', anoEdicao:'2008', categoria:'Literatura Inglesa', segmento:'Crítica, História e Teoria literária', img:'../images/era-uma-vez-uma-capa.jpg'},

  {livro:'Esaú e Jacó', autor:'Machado de Assis', editora:'Ática', anoEdicao:'2005', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/esau-e-jaco.jpg'},

  {livro:'Essa mulher e outros contos', autor:'Rodolfo Walsh', editora:'Editora 34', anoEdicao:'2010', categoria:'Literatura Argentina', segmento:'Contos, Novelas e Romances', img:'../images/essa-mulher-e-outros-contos.jpg'},

  {livro:'Estrela da vida inteira', autor:'Manuel Bandeira', editora:'Nova Fronteira', anoEdicao:'2009', categoria:'Literatura Brasileira', segmento:'Poesia', img:'../images/estrela-da-vida-inteira.jpg'},

  {livro:'Eu sou um gato', autor:'Natsume Soseki', editora:'Estação Liberdade', anoEdicao:'2016', categoria:'Literatura Japonesa', segmento:'Contos, Novelas e Romances', img:'../images/eu-sou-um-gato.jpg'},

  {livro:'Eumênides - Orestéia III', autor:'Ésquilo', editora:'Iluminuras', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/eumenides.jpg'},

  {livro:'Fábulas de Esopo', autor:'Esopo', editora:'L&PM', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Contos, Novelas e Romances', img:'../images/fabulas-de-esopo.jpg'},

  {livro:'Fábulas, seguidas do Romance de Esopo', autor:'Esopo | Autoria desconhecida', editora:'Editora 34', anoEdicao:'2017', categoria:'Literatura Grega', segmento:'Contos, Novelas e Romances', img:'../images/fabulas-34.jpg'},

  {livro:'Ficando longe do fato de já estar meio que longe de tudo', autor:'David Foster Wallace', editora:'Companhia das Letras', anoEdicao:'2012', categoria:'Literatura Norte-Americana', segmento:'Ensaios', img:'../images/ficando-longe-do-fato-de-ja-estar-meio-que-longe-de-tudo.jpg'},

  {livro:'Contos, Novelas e Romances completa', autor:'Bruno Schulz', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Polonesa', segmento:'Contos, Novelas e Romances', img:'../images/ficcao-completa-bruno-schulz.jpg'},

  {livro:'Ficções', autor:'Jorge Luis Borges', editora:'Companhia das Letras', anoEdicao:'2007', categoria:'Literatura Argentina', segmento:'Contos, Novelas e Romances', img:'../images/ficcoes.jpg'},

  {livro:'Fico à espera...', autor:'Davide Cali', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Suíça', segmento:'Literatura Infantil', img:'../images/fico-a-espera.jpg'},
  
  {livro:'Filoctetes', autor:'Sófocles', editora:'Editora 34', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/filoctetes.jpg'},

  {livro:'Firmin', autor:'Sam Savage', editora:'Planeta', anoEdicao:'2008', categoria:'Literatura Norte-Americana', segmento:'Contos, Novelas e Romances', img:'../images/firmin.jpg'},

  {livro:'Formas de voltar para casa', autor:'Alejandro Zambra', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Chilena', segmento:'Contos, Novelas e Romances', img:'../images/formas-de-voltar-para-casa.jpg'},

  {livro:'Fragmentos completos', autor:'Safo', editora:'Editora 34', anoEdicao:'2017', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/fragmentos-completos-safo.jpg'},

  {livro:'Gorila', autor:'Anthony Browne', editora:'Pequena Zahar', anoEdicao:'2014', categoria:'Literatura Inglesa', segmento:'Literatura Infantil', img:'../images/gorila.jpg'},

  {livro:'Habibi', autor:'Craig Thompson', editora:'Quadrinhos na Cia.', anoEdicao:'2012', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/habibi.jpg'},

  {livro:'Heath Ledger: O astro sombrio de Hollywood', autor:'Brian J. Robb', editora:'Panini Books', anoEdicao:'2009', categoria:'Literatura Inglesa', segmento:'Biografias, Crônicas e Diários', img:'../images/heath-ledger.jpg'},

  {livro:'Helena', autor:'Eurípides', editora:'Movimento', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/helena.jpg'},

  {livro:'Héracles', autor:'Eurípides', editora:'Palas Athena', anoEdicao:'2003', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/heracles.jpg'},

  {livro:'Hinos homéricos', autor:'Autoras e autores diversos', editora:'UNESP', anoEdicao:'2010', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/hinos-homericos.jpg'},

  {livro:'História', autor:'Heródoto', editora:'Ediouro', anoEdicao:'2001', categoria:'Literatura Grega', segmento:'História e Jornalismo', img:'../images/historia.jpg'},

  {livro:'História do olho', autor:'Georges Bataille', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Francesa', segmento:'Contos, Novelas e Romances', img:'../images/historia-do-olho.jpg'},

  {livro:'Histórias de cronópios e de famas', autor:'Julio Cortázar', editora:'Civilização Brasileira', anoEdicao:'2009', categoria:'Literatura Argentina', segmento:'Contos, Novelas e Romances', img:'../images/historias-de-cronopios-e-de-famas.jpg'},

  {livro:'Histórias fantásticas', autor:'Adolfo Bioy Casares', editora:'Cosac Naify', anoEdicao:'2006', categoria:'Literatura Argentina', segmento:'Contos, Novelas e Romances', img:'../images/historias-fantasticas.jpg'},

  {livro:'Hospício é deus: Diário I', autor:'Maura Lopes Cançado', editora:'Autêntica', anoEdicao:'2016', categoria:'Literatura Brasileira', segmento:'Biografias, Crônicas e Diários', img:'../images/hospicio-e-deus.jpg'},

  {livro:'Iaiá Garcia', autor:'Machado de Assis', editora:'Ática', anoEdicao:'2002', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/iaia-garcia.jpg'},

  {livro:'Ifigênia em Áulis; As fenícias; As bacantes', autor:'Eurípides', editora:'Jorge Zahar', anoEdicao:'2005', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/ifigenia-em-aulis-as-fenicias-as-bacantes.jpg'},
  
  {livro:'Ilíada', autor:'Homero', editora:'Ediouro', anoEdicao:'2001', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/iliada.jpg'},

  {livro:'Intercâmbio, aí vou eu!', autor:'Flavia Mariano', editora:'Alaúde', anoEdicao:'2008', categoria:'Literatura Brasileira', segmento:'Educação', img:'../images/intercambio-ai-vou-eu.jpg'},

  {livro:'Introdução à história da filosofia: dos pré-socráticos a Aristóteles - Volume 1', autor:'Marilena Chaui', editora:'Companhia das Letras', anoEdicao:'2002', categoria:'Literatura Brasileira', segmento:'Filosofia', img:'../images/introducao-a-historia-da-filosofia.jpg'},

  {livro:'Jemmy Button', autor:'Jennifer Uman, Valerio Vidali, Alix Barzelay', editora:'Pequena Zahar', anoEdicao:'2012', categoria:'Literatura Global', segmento:'Literatura Infantil', img:'../images/jemmy-button.jpg'},

  {livro:'Jornalismo diário', autor:'Ana Estela de Sousa Pinto', editora:'Publifolha', anoEdicao:'2009', categoria:'Literatura Brasileira', segmento:'História e Jornalismo', img:'../images/jornalismo-diario.jpg'},
  
  {livro:'Khadji-Murát', autor:'Liev Tolstói', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/khadji-murat.jpg'},

  {livro:'Leocádio, o leão que mandava bala', autor:'Shel Silverstein', editora:'Companhia das Letrinhas', anoEdicao:'2018', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/leocadio-o-leao-que-mandava-bala.jpg'},

  {livro:'Libertinagem', autor:'Manuel Bandeira', editora:'Global', anoEdicao:'2013', categoria:'Literatura Brasileira', segmento:'Poesia', img:'../images/libertinagem.jpg'},

  {livro:'Lira grega: antologia de poesia arcaica', autor:'Autoras e autores diversos', editora:'Hedra', anoEdicao:'2013', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/lira-grega.jpg'},

  {livro:'Lisístrata e Tesmoforiantes', autor:'Aristófanes', editora:'Perspectiva', anoEdicao:'2011', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/lisistrata-e-tesmoforiantes.jpg'},

  {livro:'Livro das mil e uma noites: volume 1', autor:'Autoria desconhecida', editora:'Biblioteca Azul', anoEdicao:'2017', categoria:'Literatura Árabe', segmento:'Contos, Novelas e Romances', img:'../images/mil-e-uma-noites-volume-1.jpg'},
  
  {livro:'Livro das mil e uma noites: volume 2', autor:'Autoria desconhecida', editora:'Biblioteca Azul', anoEdicao:'2017', categoria:'Literatura Árabe', segmento:'Contos, Novelas e Romances', img:'../images/mil-e-uma-noites-volume-2.jpg'},

  {livro:'Livro das mil e uma noites: volume 3', autor:'Autoria desconhecida', editora:'Biblioteca Azul', anoEdicao:'2018', categoria:'Literatura Árabe', segmento:'Contos, Novelas e Romances', img:'../images/mil-e-uma-noites-volume-3.jpg'},

  {livro:'Livro das mil e uma noites: volume 4', autor:'Autoria desconhecida', editora:'Biblioteca Azul', anoEdicao:'2018', categoria:'Literatura Árabe', segmento:'Contos, Novelas e Romances', img:'../images/mil-e-uma-noites-volume-4.jpg'},

  {livro:'Livro das mil e uma noites: volume 5', autor:'Autoria desconhecida', editora:'Biblioteca Azul', anoEdicao:'2021', categoria:'Literatura Árabe', segmento:'Contos, Novelas e Romances', img:'../images/mil-e-uma-noites-volume-5.jpg'},

  {livro:'Livro ilustrado: palavras e imagens', autor:'Maria Nikolajeva e Carole Scott', editora:'Cosac Naify', anoEdicao:'2011', categoria:'Literatura Global', segmento:'Crítica, História e Teoria literária', img:'../images/livro-ilustrado.jpg'},

  {livro:'Lulu e o urso', autor:'Carolina Moreyra', editora:'Pequena Zahar', anoEdicao:'2018', categoria:'Literatura Brasileira', segmento:'Literatura Infantil', img:'../images/lulu-e-o-urso.jpg'},

  {livro:'Luna Clara e Apolo Onze', autor:'Adriana Falcão', editora:'Salamandra', anoEdicao:'2002', categoria:'Literatura Brasileira', segmento:'Literatura Juvenil', img:'../images/luna-clara-e-apolo-onze.jpg'},

  {livro:'Manual de manutenção e reparo de bicicletas', autor:'Chris Sidwells', editora:'Ambientes e Costumes', anoEdicao:'2012', categoria:'Literatura Inglesa', segmento:'Esportes, Lazer e Viagens', img:'../images/manual-de-manutencao-e-reparo-de-bicicletas.jpg'},

  {livro:'Marcelino Pedregulho', autor:'Sempé', editora:'Cosac Naify', anoEdicao:'2009', categoria:'Literatura Francesa', segmento:'Literatura Juvenil', img:'../images/marcelino-pedregulho.jpg'},

  {livro:'Mary Poppins', autor:'P. L. Travers', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Australiana', segmento:'Literatura Juvenil', img:'../images/mary-poppins.jpg'},

  {livro:'Medéia; Hipólito; As troianas', autor:'Eurípides', editora:'Jorge Zahar', anoEdicao:'2007', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/medeia-hipolito-as-troianas.jpg'},

  {livro:'Memorial de Aires', autor:'Machado de Assis', editora:'Galex', anoEdicao:'-', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/memorial-de-aires.jpg'},

  {livro:'Memórias do subsolo', autor:'Fiódor Dostoiévski', editora:'Editora 34', anoEdicao:'2009', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/memorias-do-subsolo.jpg'},

  {livro:'Memórias póstumas de Brás Cubas', autor:'Machado de Assis', editora:'Ática', anoEdicao:'2002', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/memorias-postumas-de-bras-cubas.jpg'},

  {livro:'Meu reino por um cavalo', autor:'Ivan Pinheiro Machado (organizador)', editora:'L&PM', anoEdicao:'2016', categoria:'Literatura Brasileira', segmento:'Citações', img:'../images/meu-reino-por-um-cavalo.jpg'},

  {livro:'Meus documentos', autor:'Alejandro Zambra', editora:'Cosac Naify', anoEdicao:'2015', categoria:'Literatura Chilena', segmento:'Contos, Novelas e Romances', img:'../images/meus-documentos.jpg'},

  {livro:'Minha luta 1: A morte do pai', autor:'Karl Ove Knausgard', editora:'Companhia das Letras', anoEdicao:'2013', categoria:'Literatura Norueguesa', segmento:'Biografias, Crônicas e Diários', img:'../images/a-morte-do-pai.jpg'},

  {livro:'Minhas viagens com Heródoto', autor:'Ryszard Kapuscinski', editora:'Companhia das Letras', anoEdicao:'2006', categoria:'Literatura Bielorrussa', segmento:'História e Jornalismo', img:'../images/minhas-viagens-com-herodoto.jpg'},

  {livro:'Mitologia grega', autor:'Pierre Grimal', editora:'L&PM', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'Mitologia', img:'../images/mitologia-grega.jpg'},

  {livro:'Mitologia grega: Volume 1', autor:'Junito de Souza Brandão', editora:'Vozes', anoEdicao:'2009', categoria:'Literatura Brasileira', segmento:'Mitologia', img:'../images/mitologia-grega-1.jpg'},

  {livro:'Mitologia grega: Volume 2', autor:'Junito de Souza Brandão', editora:'Vozes', anoEdicao:'2009', categoria:'Literatura Brasileira', segmento:'Mitologia', img:'../images/mitologia-grega-2.jpg'},

  {livro:'Mitologia grega: Volume 3', autor:'Junito de Souza Brandão', editora:'Vozes', anoEdicao:'2009', categoria:'Literatura Brasileira', segmento:'Mitologia', img:'../images/mitologia-grega-3.jpg'},
  
  {livro:'Modelo vivo - natureza morta', autor:'CárcamO', editora:'Berlendis & Vertecchia', anoEdicao:'2015', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/modelo-vivo-natureza-morta.jpg'},

  {livro:'Monstros!', autor:'Gustavo Duarte', editora:'Quadrinhos na Cia.', anoEdicao:'2012', categoria:'Literatura Brasileira', segmento:'HQs, Mangás & Graphic Novels', img:'../images/monstros.jpg'},

  {livro:'Na cozinha noturna', autor:'Maurice Sendak', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/na-cozinha-noturna.jpg'},
  
  {livro:'Na garupa do Meu tio', autor:'David Merveille', editora:'Cosac Naify', anoEdicao:'2009', categoria:'Literatura Belga', segmento:'Literatura Infantil', img:'../images/na-garupa-do-meu-tio.jpg'},

  {livro:'Nadja', autor:'André Breton', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Francesa', segmento:'Contos, Novelas e Romances', img:'../images/nadja.jpg'},

  {livro:'Não há lugar para a lógica em Kassel', autor:'Enrique Vila-Matas', editora:'Cosac Naify', anoEdicao:'2009', categoria:'Literatura Espanhola', segmento:'Biografias, Crônicas e Diários', img:'../images/nao-ha-lugar-para-a-logica-em-kassel.jpg'},

  {livro:'Nariz de vidro', autor:'Mario Quintana', editora:'Moderna', anoEdicao:'1984', categoria:'Literatura Brasileira', segmento:'Poesia', img:'../images/nariz-de-vidro.jpg'},

  {livro:'Nos penhascos de mármore', autor:'Ernst Jünger', editora:'Cosac Naify', anoEdicao:'2008', categoria:'Literatura Alemã', segmento:'Contos, Novelas e Romances', img:'../images/nos-penhascos-de-marmore.jpg'},

  {livro:'Noite no museu', autor:'Dani Choi', editora:'Camaleão', anoEdicao:'2023', categoria:'Literatura Sul-Coreana', segmento:'Literatura Infantil', img:'../images/noite-no-museu.jpg'},

  {livro:'Noites brancas', autor:'Fiódor Dostoiévski', editora:'Editora 34', anoEdicao:'2009', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/noites-brancas.jpg'},

  {livro:'Notas de Petersburgo de 1836', autor:'Nikolai Gógol', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/notas-de-petersburgo-de-1836.jpg'},

  {livro:'Notas sobre Gaza', autor:'Joe Sacco', editora:'Quadrinhos na Cia.', anoEdicao:'2010', categoria:'Literatura Maltesa', segmento:'HQs, Mangás & Graphic Novels', img:'../images/notas-sobre-gaza.jpg'},

  {livro:'O alienista', autor:'Machado de Assis', editora:'Ática', anoEdicao:'2001', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/o-alienista.jpg'},

  {livro:'O ateneu', autor:'Raul Pompéia', editora:'Ática', anoEdicao:'1996', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/o-ateneu.jpg'},

  {livro:'O assassinato e outras histórias', autor:'Anton Tchekhov', editora:'Cosac Naify', anoEdicao:'2002', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/o-assassinato-e-outras-historias.jpg'},

  {livro:'O chamado da floresta', autor:'Jack London', editora:'L&PM', anoEdicao:'2020', categoria:'Literatura Norte-Americana', segmento:'Contos, Novelas e Romances', img:'../images/o-chamado-da-floresta.jpg'},

  {livro:'O círculo do destino', autor:'Raja Mohanty, Sirish Rao', editora:'WMF Martins Fontes', anoEdicao:'2010', categoria:'Literatura Indiana', segmento:'Literatura Infantil', img:'../images/o-circulo-do-destino.jpg'},

  {livro:'O clube do filme', autor:'David Gilmour', editora:'Intrínseca', anoEdicao:'2009', categoria:'Literatura Canadense', segmento:'Biografias, Crônicas e Diários', img:'../images/o-clube-do-filme.jpg'},

  {livro:'O clube do suicídio e outras histórias', autor:'Robert Louis Stevenson', editora:'Cosac Naify', anoEdicao:'2015', categoria:'Literatura Escocesa', segmento:'Contos, Novelas e Romances', img:'../images/o-clube-do-suicidio.jpg'},

  {livro:'O futuro é... viajar, malhar, estudar, namorar e investir', autor:'Mara Luquet', editora:'Benvirá', anoEdicao:'2016', categoria:'Literatura Brasileira', segmento:'Finanças e Investimentos', img:'../images/o-futuro-e.jpg'},
  
  {livro:'O gato e o Diabo', autor:'James Joyce', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Irlandesa', segmento:'Literatura Infantil', img:'../images/o-gato-e-o-diabo.jpg'},

  {livro:'O hino homérico a Apolo', autor:'Anônimo', editora:'UNICAMP', anoEdicao:'2004', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/hino-homerico-a-apolo.jpg'},

  {livro:'O investidor inteligente', autor:'Benjamin Graham', editora:'Harper Collins', anoEdicao:'2017', categoria:'Literatura Inglesa', segmento:'Finanças e Investimentos', img:'../images/o-investidor-inteligente.jpg'},

  {livro:'O julgamento de Sócrates', autor:'I. F. Stone', editora:'Companhia de Bolso', anoEdicao:'2005', categoria:'Literatura Norte-Americana', segmento:'História e Jornalismo', img:'../images/o-julgamento-de-socrates.jpg'},

  {livro:'O livro das virtudes', autor:'William J. Bennett', editora:'Nova Fronteira', anoEdicao:'1995', categoria:'Literatura Norte-Americana', segmento:'Contos, Novelas e Romances', img:'../images/o-livro-das-virtudes.jpg'},

  {livro:'O livro de ouro da mitologia', autor:'Thomas Bulfinch', editora:'Ediouro', anoEdicao:'2006', categoria:'Literatura Norte-Americana', segmento:'Mitologia', img:'../images/o-livro-de-ouro-da-mitologia.jpg'},

  {livro:'O livro do travesseiro', autor:'Sei Shônagon', editora:'Editora 34', anoEdicao:'2013', categoria:'Literatura Japonesa', segmento:'Biografias, Crônicas e Diários', img:'../images/o-livro-do-travesseiro.jpg'},

  {livro:'O livro ilustrado dos mitos: Contos e lendas do mundo', autor:'Neil Philip', editora:'Marco Zero', anoEdicao:'1996', categoria:'Literatura Inglesa', segmento:'Mitologia', img:'../images/o-livro-ilustrado-dos-mitos.jpg'},

  {livro:'O menino maluquinho', autor:'Ziraldo', editora:'Melhoramentos', anoEdicao:'1998', categoria:'Literatura Brasileira', segmento:'Literatura Infantil', img:'../images/o-menino-maluquinho.jpg'},

  {livro:'O mistério do 5 estrelas', autor:'Marcos Rey', editora:'Global', anoEdicao:'2005', categoria:'Literatura Brasileira', segmento:'Literatura Juvenil', img:'../images/o-misterio-do-5-estrelas.jpg'},

  {livro:'O óbvio que ignoramos', autor:'Jacob Pétry', editora:'Lua de Papel', anoEdicao:'2010', categoria:'Literatura Brasileira', segmento:'Desenvolvimento Pessoal', img:'../images/o-obvio-que-ignoramos.jpg'},

  {livro:'O profeta', autor:'Kahlil Gibran', editora:'Ediouro', anoEdicao:'2001', categoria:'Literatura Libanesa', segmento:'Contos, Novelas e Romances', img:'../images/o-profeta.jpg'},

  {livro:'O senhor dos anéis', autor:'J. R. R. Tolkien', editora:'Martins Fontes', anoEdicao:'2001', categoria:'Literatura Inglesa', segmento:'Contos, Novelas e Romances', img:'../images/o-senhor-dos-aneis.jpg'},

  {livro:'O sofredor do ver', autor:'Maura Lopes Cançado', editora:'Autêntica', anoEdicao:'2016', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/o-sofredor-do-ver.jpg'},

  {livro:'O valor do riso', autor:'Virginia Woolf', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Inglesa', segmento:'Ensaios', img:'../images/o-valor-do-riso.jpg'},

  {livro:'O velho louco por desenho', autor:'François Place', editora:'Companhia das Letrinhas', anoEdicao:'2004', categoria:'Literatura Francesa', segmento:'Literatura Infantil', img:'../images/o-velho-louco-por-desenho.jpg'},

  {livro:'O vermelho e o negro', autor:'Stendhal', editora:'Cosac Naify', anoEdicao:'2010', categoria:'Literatura Francesa', segmento:'Contos, Novelas e Romances', img:'../images/o-vermelho-e-o-negro.jpg'},

  {livro:'Os cem melhores poemas brasileiros do século', autor:'Italo Moriconi (organizador)', editora:'Objetiva', anoEdicao:'2001', categoria:'Literatura Brasileira', segmento:'Poesia', img:'../images/os-cem-melhores-poemas-brasileiros-do-seculo.jpg'},

  {livro:'Os melhores contos', autor:'Rubem Braga', editora:'Global', anoEdicao:'1997', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/os-melhores-contos.jpg'},

  {livro:'Os meninos da rua Paulo', autor:'Ferenc Molnár', editora:'Cosac Naify', anoEdicao:'2005', categoria:'Literatura Húngara', segmento:'Literatura Juvenil', img:'../images/os-meninos-da-rua-paulo.jpg'},

  {livro:'Os náufragos do Wager: Uma história de motim e assassinato', autor:'David Grann', editora:'Companhia das Letras', anoEdicao:'2024', categoria:'Literatura Norte-Americana', segmento:'Biografias, Crônicas e Diários', img:'../images/os-naufragos-do-wager.jpg'},

  {livro:'Os persas; Electra; Hécuba', autor:'Ésquilo, Sófocles, Eurípides', editora:'Jorge Zahar', anoEdicao:'2007', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/os-persas-electra-hecuba.jpg'},

  {livro:'Os trabalhadores do mar', autor:'Victor Hugo', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Francesa', segmento:'Contos, Novelas e Romances', img:'../images/os-trabalhadores-do-mar.jpg'},

  {livro:'Os trabalhos e os dias', autor:'Hesíodo', editora:'Iluminuras', anoEdicao:'2006', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/os-trabalhos-e-os-dias.jpg'},

  {livro:'Oblómov', autor:'Ivan Gontcharóv', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/oblomov.jpg'},

  {livro:'Odisseia', autor:'Homero', editora:'Ediouro', anoEdicao:'2001', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/odisseia.jpg'},

  {livro:'Onda', autor:'Suzy Lee', editora:'Cosac Naify', anoEdicao:'2008', categoria:'Literatura Sul-Coreana', segmento:'Literatura Infantil', img:'../images/onda.jpg'},

  {livro:'Onde vivem os monstros', autor:'Maurice Sendak', editora:'Cosac Naify', anoEdicao:'2014', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/onde-vivem-os-monstros.jpg'},

  {livro:'Orestes', autor:'Eurípides', editora:'Universidade de Brasília', anoEdicao:'1999', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/orestes.jpg'},

  {livro:'Paideia: a formação do homem grego', autor:'Werner Jaeger', editora:'WMF Martins Fontes', anoEdicao:'2013', categoria:'Literatura Alemã', segmento:'Filosofia', img:'../images/paideia.jpg'},

  {livro:'Pais e filhos', autor:'Ivan Turguêniev', editora:'Cosac Naify', anoEdicao:'2015', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/pais-e-filhos.jpg'},

  {livro:'Para ler o livro ilustrado', autor:'Sophie Van der Linden', editora:'Cosac Naify', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'Crítica, História e Teoria literária', img:'../images/para-ler-o-livro-ilustrado.jpg'},
  
  {livro:'Para que serve um livro?', autor:'Chloé Legeay', editora:'Pulo do Gato', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'Literatura Infantil', img:'../images/para-que-serve-um-livro.jpg'},

  {livro:'Passeios na ilha', autor:'Carlos Drummond de Andrade', editora:'Cosac Naify', anoEdicao:'2011', categoria:'Literatura Brasileira', segmento:'Biografias, Crônicas e Diários', img:'../images/passeios-na-ilha.jpg'},

  {livro:'Percy Jackson & the Olympians: The lightning thief', autor:'Rick Riordan', editora:'Disney | Hyperion Books', anoEdicao:'2010', categoria:'Literatura Norte-Americana', segmento:'Livros em Inglês', img:'../images/percy-jackson-the-lightning-thief.jpg'},

  {livro:'Poemas da antologia grega ou palatina', autor:'Autoras e autores diversos', editora:'Companhia das Letras', anoEdicao:'1995', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/poemas-da-antologia-grega-ou-palatina.jpg'},

  {livro:'Prometeu acorrentado; Ájax; Alceste', autor:'Ésquilo, Sófocles, Eurípides', editora:'Jorge Zahar', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/prometeu-acorrentado-ajax-alceste.jpg'},

  {livro:'Quem quer este rinoceronte?', autor:'Shel Silverstein', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Norte-Americana', segmento:'Literatura Infantil', img:'../images/quem-quer-este-rinoceronte.jpg'},

  {livro:'Quincas Borba', autor:'Machado de Assis', editora:'Ática', anoEdicao:'1998', categoria:'Literatura Brasileira', segmento:'Contos, Novelas e Romances', img:'../images/quincas-borba.jpg'},

  {livro:'Quinoterapia', autor:'Quino', editora:'Martins Fontes', anoEdicao:'2004', categoria:'Literatura Argentina', segmento:'HQs, Mangás & Graphic Novels', img:'../images/quinoterapia.jpg'},

  {livro:'Raul Taburin', autor:'Sempé', editora:'Cosac Naify', anoEdicao:'2010', categoria:'Literatura Francesa', segmento:'Literatura Juvenil', img:'../images/raul-taburin.jpg'},

  {livro:'Repeteco', autor:`Bryan Lee O'Malley`, editora:'Quadrinhos na Cia.', anoEdicao:'2016', categoria:'Literatura Canadense', segmento:'HQs, Mangás & Graphic Novels', img:'../images/repeteco.jpg'},

  {livro:'Selma', autor:'Juta Bauer', editora:'Cosac Naify', anoEdicao:'2007', categoria:'Literatura Alemã', segmento:'Literatura Infantil', img:'../images/selma.jpg'},

  {livro:'Senhor Lambert', autor:'Sempé', editora:'Cosac Naify', anoEdicao:'2012', categoria:'Literatura Francesa', segmento:'Literatura Juvenil', img:'../images/senhor-lambert.jpg'},

  {livro:'Serrote 2', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2009', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-02.jpg'},

  {livro:'Serrote 3', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'novembro 2009', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-03.jpg'},

  {livro:'Serrote 4', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2010', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-04.jpg'},

  {livro:'Serrote 5', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2010', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-05.jpg'},

  {livro:'Serrote 6', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'novembro 2010', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-06.jpg'},

  {livro:'Serrote 7', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2011', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-07.jpg'},

  {livro:'Serrote 8', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2011', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-08.jpg'},

  {livro:'Serrote 9', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'novembro 2011', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-09.jpg'},

  {livro:'Serrote 10', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2012', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-10.jpg'},

  {livro:'Serrote 11', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2012', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-11.jpg'},

  {livro:'Serrote 12', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'novembro 2012', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-12.jpg'},

  {livro:'Serrote 13', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2013', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-13.jpg'},

  {livro:'Serrote 14', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2013', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-14.jpg'},

  {livro:'Serrote 15', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'novembro 2013', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-15.jpg'},

  {livro:'Serrote 16', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2014', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-16.jpg'},

  {livro:'Serrote 17', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2014', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-17.jpg'},

  {livro:'Serrote 18', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'novembro 2014', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-18.jpg'},

  {livro:'Serrote 19', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2015', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-19.jpg'},

  {livro:'Serrote 20', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2015', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-20.jpg'},

  {livro:'Serrote 21', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'novembro 2015', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-21.jpg'},

  {livro:'Serrote 22', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2016', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-22.jpg'},

  {livro:'Serrote 23', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2016', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-23.jpg'},

  {livro:'Serrote 24', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'novembro 2016', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-24.jpg'},

  {livro:'Serrote 25', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'março 2017', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-25.jpg'},

  {livro:'Serrote 26', autor:'Autoras e autores diversos', editora:'IMS', anoEdicao:'julho 2017', categoria:'Literatura Global', segmento:'Ensaios', img:'../images/serrote-26.jpg'},

  {livro:'Stoner', autor:'John Williams', editora:'Rádio Londres', anoEdicao:'2015', categoria:'Literatura Norte-Americana', segmento:'Contos, Novelas e Romances', img:'../images/stoner.jpg'},

  {livro:'Sua vida em movimento', autor:'Marcio Atalla', editora:'Paralela', anoEdicao:'2012', categoria:'Literatura Brasileira', segmento:'Esportes, Lazer e Viagens', img:'../images/sua-vida-em-movimento.jpg'},

  {livro:'Super-Homem versus Apocalypse: A Revanche - Parte Dois', autor:'Dan Jurgens', editora:'Abril Jovem', anoEdicao:'1995', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/super-homem-versus-apocalypse-parte2.jpg'},

  {livro:'Super-Homem versus Apocalypse: A Revanche - Parte Três', autor:'Dan Jurgens', editora:'Abril Jovem', anoEdicao:'1995', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/super-homem-versus-apocalypse-parte3.jpg'},
  
  {livro:'Teogonia: a origem dos deuses', autor:'Hesíodo', editora:'Iluminuras', anoEdicao:'2007', categoria:'Literatura Grega', segmento:'Poesia', img:'../images/teogonia.jpg'},
  
  {livro:'Thapa Kunturi: ninho do condor', autor:'CárcamO', editora:'Companhia das Letrinhas', anoEdicao:'2007', categoria:'Literatura Chilena', segmento:'Literatura Infantil', img:'../images/thapa-kunturi.jpg'},

  {livro:'The Complete Calvin and Hobbes: Book 1', autor:'Bill Watterson', editora:'Andrews McMeel Publishing', anoEdicao:'2010', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/the-complete-calvin-and-hobbes-book-1.jpg'},
  
  {livro:'The Complete Calvin and Hobbes: Book 2', autor:'Bill Watterson', editora:'Andrews McMeel Publishing', anoEdicao:'2010', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/the-complete-calvin-and-hobbes-book-2.jpg'},
  
  {livro:'The Complete Calvin and Hobbes: Book 3', autor:'Bill Watterson', editora:'Andrews McMeel Publishing', anoEdicao:'2010', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/the-complete-calvin-and-hobbes-book-3.jpg'},

  {livro:'Toda Mafalda', autor:'Quino', editora:'Martins Fontes', anoEdicao:'2010', categoria:'Literatura Argentina', segmento:'HQs, Mangás & Graphic Novels', img:'../images/toda-mafalda.jpg'},

  {livro:'Todos os belos cavalos', autor:'Cormac McCarthy', editora:'Alfaguara', anoEdicao:'2017', categoria:'Literatura Norte-Americana', segmento:'Contos, Novelas e Romances', img:'../images/todos-os-belos-cavalos.jpg'},

  {livro:'Tragédias', autor:'Ésquilo', editora:'Iluminuras', anoEdicao:'2009', categoria:'Literatura Grega', segmento:'Teatro', img:'../images/esquilo-tragedias.jpg'},

  {livro:'Tragédias gregas', autor:'Pascal Thiercy', editora:'L&PM', anoEdicao:'2009', categoria:'Literatura Francesa', segmento:'Crítica, História e Teoria literária', img:'../images/tragedias-gregas.jpg'},

  {livro:'Três contos', autor:'Gustave Flaubert', editora:'Cosac Naify', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'Contos, Novelas e Romances', img:'../images/tres-contos.jpg'},

  {livro:'Três sombras', autor:'Cyril Pedrosa', editora:'Quadrinhos na Cia.', anoEdicao:'2011', categoria:'Literatura Francesa', segmento:'HQs, Mangás & Graphic Novels', img:'../images/tres-sombras.jpg'},

  {livro:'Uma criatura dócil', autor:'Fiódor Dostoiévski', editora:'Cosac Naify', anoEdicao:'2013', categoria:'Literatura Russa', segmento:'Contos, Novelas e Romances', img:'../images/uma-criatura-docil.jpg'},

  {livro:'Variações em vermelho', autor:'Rodolfo Walsh', editora:'Editora 34', anoEdicao:'2011', categoria:'Literatura Argentina', segmento:'Contos, Novelas e Romances', img:'../images/variacoes-em-vermelho.jpg'},

  {livro:'Você é minha Mãe?', autor:'Alison Bechdel', editora:'Quadrinhos na Cia.', anoEdicao:'2012', categoria:'Literatura Norte-Americana', segmento:'HQs, Mangás & Graphic Novels', img:'../images/voce-e-minha-mae.jpg'},

  {livro:'Vozes no parque', autor:'Anthony Browne', editora:'Pequena Zahar', anoEdicao:'2014', categoria:'Literatura Inglesa', segmento:'Literatura Infantil', img:'../images/vozes-no-parque.jpg'},

  {livro:'Zazie no metrô', autor:'Raymond Queneau', editora:'Cosac Naify', anoEdicao:'2009', categoria:'Literatura Francesa', segmento:'Contos, Novelas e Romances', img:'../images/zazie-no-metro.jpg'}
];

// Exibir a quantidade de livro:
document.getElementById('total-livros').innerHTML = livros.length;

const segmentos = {
  'arte': 'Arte, Cinema e Fotografia',
  'biografia': 'Biografias, Crônicas e Diários',
  'citacoes': 'Citações',
  'critica': 'Crítica, História e Teoria literária',
  'desenvolvimento': 'Desenvolvimento Pessoal',
  'dicionarios': 'Dicionários',
  'educacao': 'Educação',
  'ensaios': 'Ensaios',
  'esporte': 'Esportes, Lazer e Viagens',
  'ficcao': 'Contos, Novelas e Romances',
  'financas': 'Finanças e Investimentos',
  'filosofia': 'Filosofia',
  'historia': 'História e Jornalismo',
  'hq': 'HQs, Mangás & Graphic Novels',
  'lit-infantil': 'Literatura Infantil',
  'lit-juvenil': 'Literatura Juvenil',
  'livros-em-ingles': 'Livros em Inglês',
  'mitologia': 'Mitologia',
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
      document.getElementById('titulo-do-segmento').innerText = segmento;
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