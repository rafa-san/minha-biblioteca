const btn = document.getElementById('pageUpBtn');

// Mostra/esconde o botão ao rolar a página
window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Rola suavemente até o topo ao clicar no botão
btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});