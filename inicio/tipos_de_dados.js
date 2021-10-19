/*
Meu primeiro programa
Criador: Tiago Alexandre
Curso: Introdução à Linguagem JavaScript
Plataforma: Udemy
Instrutor: Diego
*/
//Conseguimos determinar o valor de uma variavel "var" atráves do seu conteúdo, caso coloquemos números basta colocar o valor numerico, não podemos colocar acentuação ou caractere especial no nome de variavel como "nÙmero" por exemplo.
//Nunca podemos começar com numero uma variavel
//Nunca separar um número com Virgula, apenas com Ponto
//Podemos fazer uma Lista de varias informações em uma única variavel, para isso depois do igual colocamos colchetes
var numero = 6; 
var decimal = 4.5; 
var texto = "Olá Mundo";
var lista = ["Laranja"," Maçã"," Banana", 1234 ];
alert(lista);

//para pegar algum elemento da lista basta você colocar após a variavel a array correspondente entre colchetes, lembrando que o primeiro valor sempre será 0
alert(lista[2]);

//para pegar todos você pode usar o laço for (te mostrando quantos itens tem em sua lista)

for (i in lista){
    alert (i);
}

//para pegar cada valor em cada posição você pode usar o laço for dessa maneira

for (i in lista){
    alert(lista[i]);
}