var form  = document.getElementById("form");

form.addEventListener("submit", (Event) => {
  Event.preventDefault();

  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;
  const ls = localStorage.getItem("usuario");

  const jsonobj = JSON.parse(ls);

  if (login == jsonobj.login && senha == jsonobj.senha) {
    alert("Login efetuado com sucesso")
    window.location.href="/index.html"
  }else{
    alert("Login ou senha Inválidos")
  }
} )