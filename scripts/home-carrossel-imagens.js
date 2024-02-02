$(document).ready(function(){
  $('.carrossel-livros').slick({
    autoplay: false,
    autoplaySpeed: 2000, // Tempo em milissegundos
    dots: true,
    infinite: false,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // tela menor que 768 pixels
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992, // tela menor que 992 pixels
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200, // tela menor que 1200 pixels
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });
});