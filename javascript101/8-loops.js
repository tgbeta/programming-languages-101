console.log("Loops");

const listaDeDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`,
  `Curitiba`  
);

const clientAge = 17;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = clientAge >= 18 || estaAcompanhado == true;

let count = 0;
let destinoExiste = false;

while (count < 4){  
    if(listaDeDestinos[count] == destino) {
        destinoExiste = true;
        break;
    } else {
        destinoExiste = false;
    }
    count +=1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe, ocorreu algum erro.");
}

for (let i = 0 ; i < 4; i++){  
    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}