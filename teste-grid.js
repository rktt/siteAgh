/*===========================================*/
let ligado = true;

const seçaoMenu = document.querySelector('.seçao-Menu')
const menuAlternar = seçaoMenu.querySelector('.menuAlternancia')

menuAlternar.addEventListener('click', () => {

	document.body.style.overflow = ligado ? 'hidden' : 'initial'

	seçaoMenu.classList.toggle('on', ligado)
	ligado = !ligado;
})

/*===========================================*/
function validar() {
	var nome = frmEnvia.name.value;
	var email = frmEnvia.email.value;
	var assunto = frmEnvia.subject.value;
	var mensagem = frmEnvia.message.value;

	if (nome == "" || nome.length < 3) {
		alert('Preencha o campo nome');
		frmEnvia.name.focus();
		return false;
	}

	if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
		alert('Preencha o campo com um e-mail válido');
		frmEnvia.email.focus();
		return false;
	}

	if (assunto == "") {
		alert('Preencha o campo assunto');
		frmEnvia.subject.focus();
		return false;
	}

	if (mensagem == "" || mensagem.length <= 10) {
		alert('Preencha no mínimo com 20(vinte) caracteres');
		frmEnvia.message.focus();
		return false;
	}

	else {
		alert('Sua mensagem foi enviada com sucesso');
		return true;
	}
}


/*==================== F I M =======================*/
