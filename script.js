// Script para alternar entre tema claro e escuro
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const themeButton = document.getElementById('theme-button');
  if (document.body.classList.contains('dark-theme')) {
      themeButton.textContent = 'Tema Claro';
  } else {
      themeButton.textContent = 'Tema Escuro';
  }
}

// Função de rolagem suave
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
  });
}

// Exibe mensagem de boas-vindas na primeira visita
window.addEventListener('load', function() {
  if (!localStorage.getItem('visited')) {
      alert("Bem-vindo ao nosso site sobre Aquecimento Global!");
      localStorage.setItem('visited', 'true');
  }
});
