/*
Meu primeiro programa
Criador: Tiago Alexandre
Curso: Introdução à Linguagem JavaScript
Plataforma: Udemy
Instrutor: Diego
*/
var a = 6
var b = 3
var c ="Olá Mundo"

var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

//condição para verificar se a variavel "b" é impar
if (c%2 == 1){
    alert("Número Ímpar");
}

//condição para verificar caso if seja falso (você pode colocar mais de uma vez)
else if (c%2 == 0){
    alert("Número par");
}

//condição final quando não tem outras condiçoes para serem avaliadas
else {
    alert("Valor Inválido")
}