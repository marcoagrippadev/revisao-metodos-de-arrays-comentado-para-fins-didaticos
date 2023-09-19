//EVERY => VERIFICA ELEMENTO POR ELEMENTO
//E RETORNA BOOLEANO DE ACORDO COM A CONDIÇÂO PASSADA EM "RETURN" NA FUNCAO CALLBACK
//
//
//
//EXEMPLO1
//
// const frutas = [
//   "abacaxi",
//   "melão",
//   "acabate",
//   "banana",
//   "kiwi",
//   "uva",
//   "melancia",
// ];

// const resultado = frutas.every((fruta) => {
//   return fruta !== "morango"; // !== É IGUAL A NÃO TER
// });

// console.log(resultado);
//
//
//
//EXEMPLO2
//
const festaRave = [
  { nome: "Ruli", idade: 22 },
  { nome: "Roberta", idade: 38 },
  { nome: "Rodrigo", idade: 49 },
  { nome: "Raul", idade: 55 },
];

const festaLapa = [
  { nome: "Ruli", idade: 22 },
  { nome: "Roberta", idade: 38 },
  { nome: "Rodrigo", idade: 49 },
  { nome: "Leandro", idade: 14 },
  { nome: "Agigail", idade: 75 },
  { nome: "Joaquina", idade: 58 },
  { nome: "Dayse", idade: 13 },
  { nome: "Tati", idade: 23 },
];

const fiscalizarFesta = (dados) => {
  const verificarIdade = dados.every((usuario) => {
    return usuario.idade >= 18;
  });

  if (verificarIdade) {
    console.log("FESTA LIBERADA!");
  } else {
    console.log("POSSUI MENOR DE IDADE NO LOCAL.");
  }
};

fiscalizarFesta(festaRave);
fiscalizarFesta(festaLapa);
