/*
A forma reduzida de fazer a função document.ready é:
$(function(){
    })
*/

//Abaixo a função faz com que o botão oculte o texto "Olá Mundo"
$(document).ready(function(){
   $('#esconder').click(function(){
       $('#acolhimento').hide();//esconde rapidamente
   });
//Abaixo a função faz com que o botão mude a cor do texto "Bem vindo..."
    $('#colorir').click(function(){
        $('#unico')
            .hide() //esconde rapidamente
            .delay(2000) //faz aguardar a quantidade em milisegundos até a proxima execução
            .fadeIn() //faz reaparecer o código
            .css('color','white') //muda a cor do texto selecionado
            .css('background-color', 'black'); //muda a cor de fundo do texto selecionado
            //você pode diminuir ainda mais seu código desta forma, agrupando entre chaves
        $('#mensagem')
            .text("Cor alterada com sucesso!") //exibe ao lado do botão a mensagem
            .css({color:'blue', border:'1px solid red'}) //altera a cor e coloca uma borda na mensagem exibida;
            .addClass('green')
            .delay(3000) //faz aguardar a quantidade em milisegundos até a proxima execução
            .fadeOut('fast'); //faz desarecer a mensagem de forma rápida
    });
//Abaixo podemos ver como alterar o slide de imagens da pagina
$('#l1').click(function(){
    $('#i1').show();//mostra a imagem informada
    $('#i2').hide();//oculta a imagem informada
    $('#i3').hide();//oculta a imagem informada
    $('#i4').hide();//oculta a imagem informada
});
$('#l2').click(function(){
    $('#i1').hide();//oculta a imagem informada
    $('#i2').show();//mostra a imagem informada
    $('#i3').hide();//oculta a imagem informada
    $('#i4').hide();//oculta a imagem informada
});
$('#l3').click(function(){
    $('#i1').hide();//oculta a imagem informada
    $('#i2').hide();//oculta a imagem informada
    $('#i3').show();//mostra a imagem informada
    $('#i4').hide();//oculta a imagem informada
});
$('#l4').click(function(){
    $('#i1').hide();//oculta a imagem informada
    $('#i2').hide();//oculta a imagem informada
    $('#i3').hide();//oculta a imagem informada
    $('#i4').show();//mostra a imagem informada
});    


});