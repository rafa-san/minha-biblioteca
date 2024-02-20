$(document).ready(function(){
  $('.container-carrossel-livros').slick({
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1250,
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