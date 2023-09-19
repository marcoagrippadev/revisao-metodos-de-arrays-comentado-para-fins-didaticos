//SOME => RETORNA TRUE || FALSE

const letras = ["A", "B", "C", "D", "E", "F", "G"];

const letraEncontrada = letras.some((letra) => {
return letra === "C";
})


if (letraEncontrada){
    console.log("A letra foi encontrada");
} else{
    console.log("A letra buscada não existe.")
}