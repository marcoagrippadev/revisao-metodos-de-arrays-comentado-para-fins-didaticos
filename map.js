//MAP => CRIA UM NOVO ARRAY REALIZANDO O QUE FOR INDICADO NA FUNCAO CALLBACK

//EXEMPLO1
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const aoQuadrado = numeros.map((numerosMultiplicar) => {
// return numerosMultiplicar * 2
// });

// console.log(aoQuadrado);
//
//
//EXEMPLO02
// const usuarios = [
//     { nome: "Joaquim", sobrenome: "Jose", idade: 30},
//     { nome: "Rafael", sobrenome: "Leonardo", idade: 45 },
//     { nome: "Ruli", sobrenome: "Raissa", idade: 23 }
// ];

// const novaFormatacao = usuarios.map((usuario) => {
// return {nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade}
// });

// console.log(novaFormatacao);

const produtos = [
  { nome: "arroz", preco: 500 },
  { nome: "carne", preco: 3200 },
  { nome: "biscoito", preco: 450 },
  { nome: "banana", preco: 320 },
];

const novoFormato = produtos.map((produto) => {
//   const desconto = (produto.preco * 10) / 100;
  return {
    nome: produto.nome,
    preco: produto.preco,
    desconto: produto.preco * 0.1,
  };
});

console.log(novoFormato);
