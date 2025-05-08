class StorageService {
  static getUsers() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
  }

  static saveUser(user) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('usuarios', JSON.stringify(users));
  }

  static setLoggedUser(user) {
    sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
  }

  static getLoggedUser() {
    return JSON.parse(sessionStorage.getItem('usuarioLogado'));
  }

  static logout() {
    sessionStorage.removeItem('usuarioLogado');
  }
}
