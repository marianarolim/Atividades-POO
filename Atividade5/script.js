class Produto{
    constructor(nome, preço, quantidade){
        this.nome = nome, 
        this.preço = preço,
        this.quantidade = quantidade
    }
    calcularTotal(){
        console.log("O valor da compra de " + this.nome +" é de "+ this.preço * this.quantidade)
    }
}

let produto1 = new Produto("Lápis", 4,5)
console.log(produto1.calcularTotal())