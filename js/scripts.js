function entrar() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  if (login == "rafasimashm@gmail.com" && senha == 123) {
    alert("logado com sucesso");
  } else {
    alert("login ou senha inválidos");
  }
}
