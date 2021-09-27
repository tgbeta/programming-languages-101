import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

/* const cliente1 = new Cliente('Bob', 11122233309);

const contaCorrenteBob = new ContaCorrente(cliente1, 1001);
contaCorrenteBob.depositar(500);
contaCorrenteBob.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
console.log(contaCorrenteBob);
console.log(contaPoupanca); */

const diretor = new Diretor("Anna", 10000, 12345678900);
diretor.cadastrarSenha("987654");
const gerente = new Gerente("John", 5000, 12345695400);
gerente.cadastrarSenha("123456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "987654");

const cliente = new Cliente("Mary", 789456123, "435")
const clienteEstaLogado =SistemaAutenticacao.login(cliente, "435");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
