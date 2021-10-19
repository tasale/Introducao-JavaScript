function valida (){
    var nome = document.getElementById('nome');
//colocando o ".value" ele vai imprimir o valor digitado no formulario
    if (nome.value ==""){
        alert("Campo nome não pode ser enviado em branco.");
    } 
    else {
        alert("Nenhum problema foi detectado. Seu formulário pode ser enviado com sucesso.");
    }
}