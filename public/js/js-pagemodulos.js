// Seleciona todos os módulos
const modulos = document.querySelectorAll('.modulo');
// Seleciona a modal e seus elementos
const modal = document.getElementById('loginModal');
const closeModalBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('loginForm');

//DECLARAÇÃO DOS ID's DOS MODULOS
const pessoal     = document.getElementById('modulo-pessoal');
const fiscal      = document.getElementById('modulo-fiscal');
const contabil    = document.getElementById('modulo-contabil');
const pc          = document.getElementById('modulo-pc');
const processo    = document.getElementById('modulo-processo');
const financeiro  = document.getElementById('modulo-financeiro');
const gerencial   = document.getElementById('modulo-gerencial');
const informatica = document.getElementById('modulo-informatica');
const juridico    = document.getElementById('modulo-juridico');


// Adiciona evento de clique em cada módulo para abrir a modal
modulos.forEach(modulo => {
  modulo.addEventListener('click', () => {
    // Exibe a modal
    modal.style.display = 'block';
    // Armazena qual módulo foi clicado
    const moduloNome = modulo.querySelector('span').textContent;
    loginForm.setAttribute('data-modulo', moduloNome);
  });
});

// Fecha a modal quando o botão de fechar é clicado
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha a modal quando o usuário clica fora do conteúdo da modal
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Verifica as credenciais do formulário de login
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const usuario = document.getElementById('email').value;
  const password = document.getElementById('passwordmod').value;
  const moduloNome = loginForm.getAttribute('data-modulo');

  // Simulação de credenciais válidas
  const credenciaisValidas = {
    email: 'usuario@example.com',
    senha: '123456'
  };

  // Verifica se as credenciais estão corretas
  if (email === credenciaisValidas.email && password === credenciaisValidas.senha) {
    // Redireciona para a página específica do módulo
    window.location.href = moduloNome.toLowerCase() + '.html';
  } else {
    alert('E-mail ou senha incorretos!');
  }
});
