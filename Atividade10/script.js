class Produto{
    constructor(nome, preco){
        this.nome = nome, 
        this.preco = preco
    }
}

class Carrinho{
    constructor(){
        this.produtos =[] 
    }
    adicionarProduto(produto){
        this.produtos.push(produto)
    }
    mostrarCarrinho(){
        this.produtos.forEach(produto => {
            console.log(`Produto: ${produto.nome} - ${produto.preco}`)
        });
    }
calcularTotal(){
    let total =0;
    this.produtos.forEach(produto => {
        total += produto.preco;
    });
    console.log(`Total da compra: ${total}`);
}
}
const produto1 = new Produto("Camisa", 50);
const produto2 = new Produto("Moleton", 250);

const carrinho = new Carrinho();

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

carrinho.mostrarCarrinho();
carrinho.calcularTotal();


