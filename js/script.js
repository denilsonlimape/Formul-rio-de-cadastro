function limparFormulario() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('dateofbirth').value = '';
    document.getElementById('email').value = '';
    
}

function enviarFormulario() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const dateofbirth = document.getElementById('dateofbirth').value;
    const email = document.getElementById('email').value;

}


function enviarFormulario(){
    alert('Cadastro realizado com sucesso');
    window.location.reload();
}




