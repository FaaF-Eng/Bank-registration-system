//Código de Execução

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Fábio",11122233309 ); 
const cliente2 = new Cliente("Jonas",88822233309 );

const contaCorrenteFabio = new ContaCorrente(1001, cliente1);


contaCorrenteFabio.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
contaCorrenteFabio.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);