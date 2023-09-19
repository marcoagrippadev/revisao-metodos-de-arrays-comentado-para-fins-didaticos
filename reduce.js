//O MÉTODO  .REDUCE()  EM JAVASCRIPT É UTILIZADO PARA REDUZIR UM ARRAY A UM ÚNICO VALOR,
//APLICANDO UMA FUNÇÃO A CADA ELEMENTO DO ARRAY.
//ELE RECEBE UMA FUNÇÃO DE CALLBACK COMO ARGUMENTO, QUE É EXECUTADA PARA CADA ELEMENTO DO ARRAY.

//FUNCOES PRATICAS DO METODO

//SOMAR TODOS OS ELEMENTOS DE UM ARRAY:

const arrayUm = [1, 2, 3, 4, 5];
const soma = array.reduce((total, elemento) => total + elemento, 0);
console.log(soma); // SAIDA: 15

//ENCONTRAR O VALOR MÁXIMO OU MÍNIMO EM UM ARRAY:

const arrayDois = [10, 5, 20, 15, 30];

// LEMBRANDO QUE "?" && ":" FAZEM PARTE DO OPERADOR TERNARIO!

const maximo = array.reduce((max, elemento) =>
  elemento > max ? elemento : max
);
console.log(maximo); // SAIDA: 30

// LEMBRANDO QUE "?" && ":" FAZEM PARTE DO OPERADOR TERNARIO!

const minimo = array.reduce((min, elemento) =>
  elemento < min ? elemento : min
);
console.log(minimo); // SAIDA: 5

//CONCATENAR STRINGS DE UM ARRAY:

const arrayTres = ["Olá", "como", "vai"];
const cumprimentar = array.reduce(
  (acumulador, palavra) => acumulador + " " + palavra
);
console.log(cumprimentar); // SAIDA: "OLÁ COMO VAI"
