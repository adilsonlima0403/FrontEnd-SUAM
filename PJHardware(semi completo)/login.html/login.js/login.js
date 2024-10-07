function validateForm() {
      let passwordInput = document.getElementById("password").value;

      // Verifica se o campo de senha está vazio
      if (passwordInput === "") {
        alert ("Por favor, insira sua senha.");
        return false; // Impede o envio do formulário
      }

      // Verifica se a senha contém apenas números (usando regex)
      let regex = /^[0-9]{8}$/;
      if (!regex.test(passwordInput)) {
        alert("A senha deve conter apenas números e ter 8 dígitos.");
        return false; // Impede o envio do formulário
      }

      return true; // Permite o envio do formulário se tudo estiver correto 
    }