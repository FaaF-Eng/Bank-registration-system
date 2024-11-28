//Código de Execução

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); 
cliente1.nome = "Fábio";
cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();
// cliente2.nome = "Jonas";
// cliente2.cpf = 88822233309;



const contaCorrenteFabio = new ContaCorrente();
contaCorrenteFabio.agencia= 1001;
contaCorrenteFabio.cliente = cliente1;
contaCorrenteFabio.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;

contaCorrenteFabio.transferir(valor,conta2);
console.log(conta2.saldo);



