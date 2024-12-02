const form = document.getElementById("form");
const nome = document.getElementById("nome");
const datanascimento = document.getElementById("nascimento");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");
const login = document.getElementById("login");
const senha = document.getElementById("senha");
const confirmarsenha = document.getElementById("conf-senha");
const telefone = document.getElementById("tell");
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const estado = document.getElementById("estado");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    checkform();


    // blur para tirar a Tag error quando o usuario concertar o campo
    nome.addEventListener("blur",() => {
        checkInputnome();
    })
    cpf.addEventListener("blur",() => {
        checkInputcpf();
    })
    email.addEventListener("blur",() => {
        checkInputemail();
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
    cep.addEventListener("blur",() => {
        checkInputcep();
    })
    telefone.addEventListener("blur", () =>{
        checkinputtell();
    })
    datanascimento.addEventListener("blur",()=>{
        checkInputdatanascimento();
    })
    //----------------//

} )


// checar se os inputs estão validos 
function checkInputnome(){
    const nomeValue = nome.value;

    if (nomeValue === ""){
        errorInput(nome,"Preencha seu Nome.")
    }else if(nomeValue.length < 15){
        errorInput(nome,"O nome deve conter no mínimo 15 caracteres")
    }else if (nomeValue >= 81){
        errorInput(nome,"o nome pode conter no maxímo 80 caracteres")
    }else{
        const formItem = nome.parentElement;
        formItem.className = "col-md-10"
    }
    
      
}

function checkInputcpf() {
    const cpfValue = cpf.value;

    if (cpfValue === ""){
        errorInput3(cpf,"Campo obrigatório")
    }else {
        const formItem = cpf.parentElement;
        formItem.className = "col-md-5"
    }
}

function checkInputemail() {
    const emailValue = email.value;

    if (emailValue ===""){
        errorInput3(email,"Campo obrigatório")
    }else {
        const formItem = email.parentElement;
        formItem.className = "col-md-5"
    }
}

function checkInputlogin(){
    const loginValue = login.value

    if (loginValue ===""){
        errorInput (login,"Campo obrigatório")
    }else if(loginValue.length != 6) {
        errorInput(login,"O login deve ter 6 caracteres")  
    }else {
        const formItem = login.parentElement;
        formItem.className = "col-md-10"
    }
}

function checkInputsenha(){
    const senhaValue = senha.value;

    if (senhaValue ===""){
        errorInput3(senha,"Campo obrigatório")
    }else if (senhaValue.length != 8){
        errorInput3(senha,"A senha precisa ter 8 caracteres")
    }else {
        const formItem = senha.parentElement;
        formItem.className = "col-md-5"
    }
}

function checkInputconfirmarsenha(){
    const senhaValue = senha.value;
    const confirmarsenhaValue = confirmarsenha.value;

    if (confirmarsenhaValue ===""){
        errorInput3(confirmarsenha,"por favor confirme sua senha")
    }else if(confirmarsenhaValue !== senhaValue) {
        errorInput3 (confirmarsenha,"as senhas não conferem")
    } else {
        const formItem = confirmarsenha.parentElement
        formItem.className = "col-md-5"
    }
    
}

function checkinputtell(){
    const tellValue = telefone.value;
    
    
    if(tellValue ===""){
        errorInput(telefone,"Campo obrigatório")
    }else if (tellValue.length !== 15){
        errorInput(telefone,"formato (XX)XXXXX-XXXXX")
    }
    else {
        const formItem = telefone.parentElement
        formItem.className = "col-md-10"
    }
}

function checkInputcep(){
    const cepValue = cep.value;

    if(cepValue ===""){
        errorInput4(cep,"Campo obrigatório")
    }else {
        const formItem = cep.parentElement
        formItem.className = "col-md-3"
    }
}

function checkInputdatanascimento(){
    const datanascimentoValue = datanascimento.value

    if(datanascimentoValue ===""){
        errorInput3(datanascimento,"Campo obrigatório")
    }
}
// -------------------- //

// Fução para juntar todas as validações em 1
function checkform(){
    checkInputnome()
    checkInputcpf()
    checkInputemail()
    checkInputlogin()
    checkInputsenha()
    checkInputconfirmarsenha()
    checkinputtell()
    checkInputcep()
    checkInputdatanascimento()
    validform()
    
}
// --------------- //

// Validação do formulario e salvamento no LocalServer
function validform(){
    const formItems = form.querySelectorAll(".col-md-10")
    const formItems2 = form.querySelectorAll(".col-md-7")
    const formItems3 = form.querySelectorAll(".col-md-5")
    const formItems4 = form.querySelectorAll(".col-md-3")

    const usuario = {
        nome:nome.value,
        cpf:cpf.value,
        email:email.value,
        login:login.value,
        senha:senha.value,
        telefone:telefone.value,
        cep:cep.value,
        datanascimento:datanascimento.value,
        endereco:endereco.value
    };

    const isValid = [...formItems].every((item)=>{
        return item.className === "col-md-10"
    });
    const isValid2 = [...formItems2].every((item)=>{
        return item.className === "col-md-7"
    });
    const isValid3 = [...formItems3].every((item)=>{
        return item.className === "col-md-5"
    });
    const isValid4 = [...formItems4].every((item)=>{
        return item.className === "col-md-3"
    });

    console.log(isValid)
    console.log(isValid2)
    console.log(isValid3)
    console.log(isValid4)

    if (isValid && isValid2 && isValid3 && isValid4){
        alert("Cadastrado com sucesso")
        localStorage.setItem("usuario",JSON.stringify(usuario))
        window.location.href="../login.html/login.html"
    }else {
        alert("Preencha os campos corretamente")
    }
  
}
// ----------------- //


// Funções para por a tag Error nos Imputs
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

    formItem.className = "col-md-7 error"
}

function errorInput3(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message

    formItem.className = "col-md-5 error"
}

function errorInput4(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message

    formItem.className = "col-md-3 error"
}
//-----------------//

$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro + '-' + dados.bairro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
     
  function validarCPF(cpf) {	
	cpf = cpf.value.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
    confirm("CPF inválido")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))	
    confirm("CPF inválido")	
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
  confirm("CPF inválido")
		return false;		
	return true;   
};

function ajustaNumeros(v) {
    // Remove os caracteres não numéricos
    v.value = v.value.replace(/\D/g, "");
}


function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //Adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{5})(\d)/, "$1-$2");
}


