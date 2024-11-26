export class ContaCorrente{
    agencia;
    cliente;




    _saldo =0;  
    sacar(valor){ //Operação de sacar
        if(this._saldo >= valor){ 
            this._saldo -= valor;
            return valor; 
        }
    } 

    depositar(valor){ //Operação de depositar
        if (valor <=0){
            return;
        
        }
        this._saldo += valor; //Pega o valor, verifica se está negativo e soma o valor
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);   
    }
}
