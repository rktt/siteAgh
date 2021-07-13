
/* Validação do formulario e-mail*/

function validar() {
	var nome = frmEnvia.name.value;
	var email = frmEnvia.email.value;
	var assunto = frmEnvia.subject.value;
	var mensagem = frmEnvia.message.value;
	
	if(nome == "" || nome.length < 3) {
		alert('Preencha o campo nome');
		frmEnvia.name.focus();
		return false;
	}

    if(email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
		alert('Preencha o campo com um e-mail válido');
		frmEnvia.email.focus();
		return false;
        }
		
	if(assunto == "") {
		alert('Preencha o campo assunto');
		frmEnvia.subject.focus();
		return false;
	}

    if(mensagem == "" || mensagem.length <= 10) {
		alert('Preencha no mínimo com 20(vinte) caracteres');
		frmEnvia.message.focus();
		return false;
	} 
    
    else {
        alert('Sua mensagem foi enviada com sucesso');
		return true;
    }
}





/*
function checarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    
    if(email.checkValidity()){
      error.innerHTML = "Email invalido";  
    }
     
  }
  
  function redefinirMsg(){
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email invalido"){
      error.innerHTML = "";
    }
  }
  */