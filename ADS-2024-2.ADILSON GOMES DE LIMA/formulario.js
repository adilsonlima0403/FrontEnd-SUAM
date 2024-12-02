const form = document.getElementById("form");
const nome = document.getElementById("nome");
const datanascimento = document.getElementById("nascimento");
const login = document.getElementById("login");
const senha = document.getElementById("senha");
const confirmarsenha = document.getElementById("conf-senha");
const endereco = document.getElementById("endereco");
const materno = document.getElementById("materno")
const cpf = document.getElementById("cpf")
const tellcelular = document.getElementById("tell")
const tellfixo = document.getElementById("tellfixo")

form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    checkform();

    nome.addEventListener("blur",() => {
        checkInputnome();
    })   
    login.addEventListener("blur", () => {
        checkInputlogin();
    })
    senha.addEventListener("blur",() => {
        checkInputsenha();
    })
    confirmarsenha.addEventListener("blur",() => {
        checkInputconfirmarsenha();
    })
    endereco.addEventListener("blur",() => {
        checkInputendereco();
    })
    datanascimento.addEventListener("blur",() => {
        checkInputdatanascimento();
    })
    materno.addEventListener("blur",() => {
        checkInputmaterno();
    })
    cpf.addEventListener("blur",() => {
        checkInputcpf();
    })
    tellcelular.addEventListener("blur",() => {
        checkInputtellcelular();
    })
    tellfixo.addEventListener("blur",() => {
        checkInputtellfixo();
    })
    
    
} )


function checkform(){
    checkInputconfirmarsenha()
    checkInputnome()
    checkInputsenha()
    checkInputlogin()
    checkInputdatanascimento()
    checkInputconfirmarsenha()
    checkInputendereco()
    checkInputmaterno()
    checkInputcpf()
    checkInputtellcelular()
    checkInputtellfixo()
    validform()
    
    
}

function checkInputnome(){
    const nomeValue = nome.value;

    const regex = /^[A-Z][a-zA-Z\s]{9,}$/;
    
    if (!regex.test(nomeValue)) {
        errorInput(nome,"O campo deve ter pelo menos 10 caracteres , e começar com letra maiúscula.");
        
    }else {
        const formItem = nome.parentElement;
        formItem.className = "col-md-10"
    }
}

function checkInputlogin(){
    const loginValue = login.value;
    const regex = /^[A-Z]{5}$/;

    if (!regex.test(loginValue)) {
        errorInput(login,"O Login deve ter exatamente 5 caracteres alfabéticos, todos em letras maiúsculas.");  
    }else {
        const formItem = login.parentElement;
        formItem.className = "col-md-10"
    }

    
}

function checkInputsenha(){
    const senhaValue = senha.value

    if (senhaValue ===""){
        errorInput2(senha,"A senha é obrigatória")
    }else if (senhaValue.length != 7){
        errorInput2(senha,"A senha precisa ter 7 caracteres")
    }else {
        const formItem = senha.parentElement;
        formItem.className = "col-md-5"
    }
}

function checkInputconfirmarsenha(){
    const senhaValue = senha.value;
    const confirmarsenhaValue = confirmarsenha.value;

    if (confirmarsenhaValue ===""){
        errorInput2(confirmarsenha,"porfavor confirme sua senha")
    }else if(confirmarsenhaValue !== senhaValue) {
        errorInput2 (confirmarsenha,"as senhas não conferem")
    } else {
        const formItem = confirmarsenha.parentElement;
        formItem.className = "col-md-5"
    }
    
}

function checkInputdatanascimento(){
    const datanascimentoValue = datanascimento.value;

    if(datanascimentoValue ===""){
        errorInput(datanascimento,"Campo obrigatório")
    }else {
        const formItem = datanascimento.parentElement;
        formItem.className = "col-md-10"
    }
}

function checkInputendereco(){
    const enderecoValue = endereco.value;
    const regex = /^(Rua|Avenida|Travessa|Av\.)\s+[a-zA-Z0-9\s]{10,}$/i;

    if (!regex.test(enderecoValue)) {
        errorInput(endereco,"O campo deve começar com 'Rua','Avenida','Travessa' ou 'Av.', e conter pelo menos 10 caracteres.");
    }else {
        const formItem = endereco.parentElement;
        formItem.className = "col-md-10"
    }
}

function checkInputmaterno(){
    const maternoValue = materno.value;

    const regex = /^[A-Z][a-zA-Z\s]{9,}$/;

    if (!regex.test(maternoValue)) {
        errorInput(materno,"O campo deve ter pelo menos 10 caracteres , e começar com letra maiúscula.");
        
    }else {
        const formItem = materno.parentElement;
        formItem.className = "col-md-10"
    }

}

function checkInputcpf() {
    const cpfValue = cpf.value;
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!regex.test(cpfValue)) {
        errorInput(cpf,"O CPF deve estar no formato: xxx.xxx.xxx-xx");       
    }else {
        const formItem = cpf.parentElement;
        formItem.className = "col-md-10"
    }
  
}

function checkInputtellcelular(){
    const celularValue = tellcelular.value
    const regex = /^\+55\(\d{2}\)\d{5}-\d{4}$/;

    if (!regex.test(celularValue)) {
        errorInput2(tellcelular,"formato obrigatório: +55(xx)xxxxx-xxxx");       
    }else {
        const formItem = tellcelular.parentElement;
        formItem.className = "col-md-5"
    }
}

function checkInputtellfixo(){
    const fixoValue = tellfixo.value
    const regex = /^\+55\(\d{2}\)[2-5]{1}\d{4}-\d{4}$/;

    if (!regex.test(fixoValue)) {
        errorInput2(tellfixo,"formato obrigatório: +55(xx)xxxxx-xxxx, primeiro digito deve ser 2,3,4 ou 5");       
    }else {
        const formItem = tellfixo.parentElement;
        formItem.className = "col-md-5"
    }
}


function validform(){
    const formItems = form.querySelectorAll(".col-md-10")
    const formItems2 = form.querySelectorAll(".col-md-5")

    const isValid = [...formItems].every((item)=>{
        return item.className === "col-md-10"
    });
    const isValid2 = [...formItems2].every((item)=>{
        return item.className === "col-md-5"
    });

    console.log(isValid)
    

    if (isValid&&isValid2){
        alert("Cadastrado com sucesso")
    }else {
        alert("Preencha os campos corretamente")
    }
  
}

function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message

    formItem.className = "col-md-10 error"
}

function errorInput2(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message

    formItem.className = "col-md-5 error"
}





