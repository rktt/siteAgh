
/* -------------Menu Hamburger--------------*/
const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event) {
	if (event.type === 'touchstart') event.preventDefault();
	const nav = document.getElementById('nav');
	nav.classList.toggle('active');

	const active = nav.classList.contains('active');
	event.currentTarget.setAttribute('aria-expanded', 'active');

	if (active) {
		event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
		} else {
		event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
		}
}

/* -----------------Validação do formulario e-mail-----------------*/
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
/* -----------------F I M-----------------*/