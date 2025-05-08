import StorageService from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      const usuarios = StorageService.getUsers();
      const usuarioExistente = usuarios.find(u => u.email === email);

      if (usuarioExistente) {
        alert('Este email já está cadastrado!');
        return;
      }

      StorageService.saveUser({ nome, email, senha });
      alert('Conta criada com sucesso! Redirecionando para login...');
      window.location.href = 'login.html';
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      const usuarios = StorageService.getUsers();
      const usuario = usuarios.find(u => u.email === email && u.senha === senha);

      if (usuario) {
        StorageService.setLoggedUser(usuario);
        alert('Login bem-sucedido!');
        window.location.href = '../dashboard.html';
      } else {
        alert('Email ou senha incorretos!');
      }
    });
  }
});
