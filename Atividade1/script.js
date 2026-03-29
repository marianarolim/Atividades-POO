class Pessoa {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
    apresentar(){
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos")
    }
}
let mari = new Pessoa("Mariana", 19);
let gio = new Pessoa("Giovanna", 24);
console.log(mari.apresentar());
console.log(gio.apresentar());