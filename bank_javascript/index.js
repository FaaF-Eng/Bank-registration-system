//Código de Execução

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); 
cliente1.nome = "Fábio";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Jonas";
cliente2.cpf = 88822233309;



const contaCorrenteFabio = new ContaCorrente();
contaCorrenteFabio.agencia= 1001;

contaCorrenteFabio.depositar(100);

const valorSacado = contaCorrenteFabio.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteFabio);

