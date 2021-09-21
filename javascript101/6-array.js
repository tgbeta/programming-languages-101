console.log("Arrays");

const listaDeDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`,
  `Curitiba`  
);

listaDeDestinos.push(`Porto Alegre`);

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);