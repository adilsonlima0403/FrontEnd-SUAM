const ls = localStorage.getItem("usuario");
const jsonobj = JSON.parse(ls);

const nomeusuario = document.getElementById("usuario-navbar");
const Textnomeusuario = document.querySelector("h3")

Textnomeusuario.innerText = jsonobj.nome

function desconectar() {
    localStorage.clear();  // Limpa todos os dados armazenados no localStorage
    confirm("você desconectou com sucesso!");
    location.reload();  
}
