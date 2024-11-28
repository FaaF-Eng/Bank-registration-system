import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente)
            this._cliente = novoValor;
    }  


    get cliente(){
        return this._cliente;
    }

    _saldo =0;

    get saldo(){
        return this._saldo;
    }

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
