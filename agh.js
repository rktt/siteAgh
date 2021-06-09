
// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

//validaçao de e-mail
function verifica() {
  if (document.forms[0].email.value.length == 0) {
    alert('Por favor, informe o seu EMAIL.');
	document.frmEnvia.email.focus();
    return false;
  }
  return true;
}
 
function checarEmail(){
if( document.forms[0].email.value=="" 
   || document.forms[0].email.value.indexOf('@')==-1 
     || document.forms[0].email.value.indexOf('.')==-1 )
	{
	   alert( "Por favor, informe um E-MAIL válido!" );
	   return false;
	}
}

function alertaEnviado(){
    if (document.forms = true) {
        alert('seu e-mail foi enviado com sucesso')
    }       
}