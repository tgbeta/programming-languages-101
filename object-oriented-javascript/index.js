import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente('Bob', 11122233309);
const cliente2 = new Cliente('Alice', 88822233309);

const contaCorrenteBob = new ContaCorrente(1001, cliente1);
contaCorrenteBob.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteBob.transferir(valor, conta2);

console.log(conta2.saldo);
console.log(contaCorrenteBob);
console.log(ContaCorrente.numeroDeContas);
