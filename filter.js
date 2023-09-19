//FILTER => CRIA UM NOVO ARRAY COM OS ELEMENTOS, DE ACORDO COM A CONDICAO IMPLEMENTADA

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nomes = ["ana", "beatriz", "joaquim", "jose"];

const numeroEncontrado = numeros.filter((buscarNumero) => {
  return buscarNumero > 7;
});

const nomeEnontrado = nomes.filter((buscarNome) => {
  return buscarNome === "beatriz";
});

console.log(numeroEncontrado);
console.log(nomeEnontrado);
