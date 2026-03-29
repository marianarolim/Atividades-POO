class Veiculo{
    constructor(marca, ano){
        this.marca = marca, 
        this.ano = ano
    }
    info(){
        console.log(`Marca: ${this.marca} - Ano: ${this.ano}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, ano, portas){
        super(marca, ano);
        this.portas = portas;
    }
info(){
        console.log(`Marca: ${this.marca} - Ano: ${this.ano} - Portas: ${this.portas}`);
}
}
class Moto extends Veiculo {
    constructor(marca, ano, cilindrada){
        super(marca, ano);
        this.cilindrada = cilindrada;
    }
info(){
        console.log(`Marca: ${this.marca} - Ano: ${this.ano} - Portas: ${this.cilindrada}`);
}
}

let carro1 = new Carro("Honda", 2006, 4);
let moto1 = new Moto("Royal Enfield", 2022, 350)

carro1.info();
moto1.info()