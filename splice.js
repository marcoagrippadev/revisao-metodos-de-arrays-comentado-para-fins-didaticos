//SPLICE

const array = ["a", "b", "c", "d", "e", "f", "g", "h"];

const letraEncontrada = (retirarLetra) => {
  const letra = array.indexOf(retirarLetra);

  if (letra === -1) {
    console.log("A letra não foi encontrada.");
  } else {
    array.splice(letra, 1);
    console.log(`A letra foi encontrada e retirada da fila: ${array}`);
  }
};

letraEncontrada("d");
