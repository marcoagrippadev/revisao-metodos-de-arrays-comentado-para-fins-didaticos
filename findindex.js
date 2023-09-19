//FINDINDEX => IMPRIME O **INDICE** DO ELEMENTO ENCONTRADO DE ACORDO COM A CONDICAO
// SE NAO ENCONTRA RETORNA -1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numeroEncontrado = numeros.findIndex((numero) => {
  return numero === 9;
});

if (nomeEnontrado === -1) {
  console.log("Número não encontrado.");
  return;
}

return console.log(
  `O número pedido foi encontrado. Esse número é o ${nomeEnontrado + 1}`
);
