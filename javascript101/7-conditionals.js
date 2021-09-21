console.log("Conditionals");

const listaDeDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`,
  `Curitiba`  
);

listaDeDestinos.push(`Porto Alegre`);


const clientAge = 17;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

// if(clientAge >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1);
// } else if(estaAcompanhado == true){
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1,1);
// } else {
//     console.log("Comprador nao e maior de idade.");
// }
    
if(clientAge >= 18 || estaAcompanhado == true){
    console.log("Boa viagem!");
    listaDeDestinos.splice(1,1);
} else {
    console.log("Comprador nao e maior de idade.");
}

console.log("Embarque: \n\n");
if (clientAge >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Voce nao pode embarcar");
}

console.log(listaDeDestinos);