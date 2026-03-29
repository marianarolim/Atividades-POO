class Animal{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log("O animal fez barulho")
    }
}

class Cachorro extends Animal {
    falar(){
        console.log("O cachorro está latindo Au Au")
    }
}
class Gato extends Animal {
    falar(){
        console.log("O gato está miando Miau")
    }
}
let cachorro = new Cachorro("Bob");
let gato = new Gato("Nino");

cachorro.falar();
gato.falar();