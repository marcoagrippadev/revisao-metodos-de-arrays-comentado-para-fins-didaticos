//FIND => RETORNA O PRIMEIRO ELEMENTO ENCONTRADO DE ACORDO COM A CONDICAO
// SE NAO ENCONTRA RETORNA -1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nomes = ["ana", "beatriz", "joaquim", "jose"];

const numeroEncontrado = numeros.find((buscarNumero) => {
   return buscarNumero > 7;
})

const nomeEnontrado = nomes.find((buscarNome) => {
  return buscarNome === "beatriz";
});

console.log(nomeEnontrado)
console.log(nomeEnontrado);
