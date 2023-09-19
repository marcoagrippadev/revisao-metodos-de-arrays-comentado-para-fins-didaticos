//SORT => ORDENA OS ELEMENTOS DE ACORDO COM O FORMATO UNICODE
//OU SEGUNDO O PADRÂO DIRECIONADO NA FUNCAO CALLBACK

//EXEMPLO1 => PADRAO UNICODE
// const arrayDeNumeros = [9, 55, 97, 54, 33, 40, 2, 3, 5, 20, 23, 28];

// arrayDeNumeros.sort();

// console.log(arrayDeNumeros)
//
//
//
//EXEMPLO2 => PASSANDO PARAMETRO DE COMPARACAO
//
//ORDENACAO CRESCENTE COM NUMEROS
//
const arrayDeNumeros = [9, 55, 97, 54, 33, 40, 2, 3, 5, 20, 0, 23, 28];
//
//
arrayDeNumeros.sort((a, b) => {
  return a - b;
});

console.log(arrayDeNumeros);
//
//
//ORDENACAO DECRESCENTE COM NUMEROS
//
arrayDeNumeros.sort((b, a) => {
  return a - b;
});

console.log(arrayDeNumeros);
//
//
//
//FUNCAO PARA CONVERTER PRIMEIRA LETRA PARA MAIUSCULA
function imprimirNomesComLetrasMaiusculas(nomes) {
  return nomes.map((nome) => {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
  });
}
//
//
//ORDENAÇÂO DE STRINGS => ORDEM ALFABETICA CRESCENTE => NECESSARIO UTILIZAR METODO "LOCALECOMPARE"
//
//UTILIZAÇÂO DO METODO .localeCompare();
//
const listaDeNomes = ["Ana", "beatriz", "João", "renato", "Alan", "alex"];

listaDeNomes.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(listaDeNomes);
//
//
//

console.log(imprimirNomesComLetrasMaiusculas(listaDeNomes));
//
//
//
//ORDENAÇÂO DE STRINGS => ORDEM ALFABETICA DECRESCENTE => NECESSARIO UTILIZAR METODO "LOCALECOMPARE"
//
//UTILIZAÇÂO DO METODO .locateCompare();
//

listaDeNomes.sort((b, a) => {
  return a.localeCompare(b);
});

console.log(listaDeNomes);
console.log(imprimirNomesComLetrasMaiusculas(listaDeNomes));
//
//
//
//FUNCAO DE ORDENACAO DINAMICA => PARA UTILIZACAO COM ARRAY DE OBJETOS

const ordenacaoDinamica = (arrayQueSeraOrdenado, campoDeOrdenacao) => {
  arrayQueSeraOrdenado.sort((primeiro, segundo) => {
    return primeiro[campoDeOrdenacao].localeCompare(segundo[campoDeOrdenacao]);
  });
  console.log(arrayQueSeraOrdenado);
};
//
//
//
//EXEMPLO COM ORDENACAO UTILIZANDO A FUNCAO DE ORDENACAO DINAMICA
//
const exemploArray = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  },
  {
    color: "blue",
    type: "sedan",
    registration: new Date("2015-05-10"),
    capacity: 5,
  },
  {
    color: "red",
    type: "SUV",
    registration: new Date("2018-09-20"),
    capacity: 5,
  },
  {
    color: "green",
    type: "hatchback",
    registration: new Date("2019-11-15"),
    capacity: 4,
  },
  {
    color: "silver",
    type: "convertible",
    registration: new Date("2020-07-30"),
    capacity: 2,
  },
];

ordenacaoDinamica(exemploArray, "type");
