import StorageService from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const usuario = StorageService.getLoggedUser();

  if (!usuario) {
    window.location.href = './auth/login.html';
  } else {
    document.getElementById('user-name').textContent = usuario.nome;
    document.getElementById('user-email').textContent = usuario.email;
  }

  document.getElementById('logout').addEventListener('click', () => {
    StorageService.logout();
    window.location.href = './auth/login.html';
  });
});
