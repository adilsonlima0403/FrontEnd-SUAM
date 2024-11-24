const ls = localStorage.getItem("usuario");
const jsonobj = JSON.parse(ls);

const nomeusuario = document.getElementById("usuario-navbar");
const Textnomeusuario = document.querySelector("h3")

Textnomeusuario.innerText = jsonobj.nome
