class Cliente{
    nome;
    cpf;
}
class contaCorrente{
    agencia;
    saldo;  
    sacar(valor){ //Operação de sacar
        if(this.saldo >= valor){ 
            this.saldo -= valor; 
        }
    } 

    depositar(valor){ //Operação de depositar
        if (valor >0){
            this.saldo += valor; //Pega o valor, verifica se está negativo e soma o valor
        }

    }

}

const cliente1 = new Cliente();
cliente1.nome = "Fábio";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Jonas";
cliente2.cpf = 88822233309;



const contaCorrenteFabio = new contaCorrente();
contaCorrenteFabio.saldo = 0;
contaCorrenteFabio.agencia= 1001;


contaCorrenteFabio.depositar (100); 
contaCorrenteFabio.sacar(50);

console.log(contaCorrenteFabio);



