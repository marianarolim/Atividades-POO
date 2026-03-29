class contaBancaria {
    constructor(titulo, saldo){
        this.titulo = titulo,
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado`)
    }
    sacar(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        } else {
            console.log(`Saque de R$${valor} realizado`);
        }
        }
    verSaldo(){
        console.log(`Saldo atual: R$${this.saldo}`)
    }
}
let conta1 = new contaBancaria("Conta Privada", 1900);
console.log(conta1.verSaldo());
