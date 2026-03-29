class Carro {
    constructor(marca, modelo, velocidade){
        this.marca = marca,
        this.modelo = modelo,
        this.velocidade = velocidade
    }
    acelerar(){
        console.log("A velocidade do " + this.marca + ' ' + this.modelo + ' ' + "acelerando é de: " +(this.velocidade +=5) + "km/h")

    }
    frear(){
        console.log("A velocidade do " + this.marca + ' ' + this.modelo + ' ' + "freando é de: " +(this.velocidade -=5) + "km/h")
    }
    mostrarVelocidade(){
        console.log("A velocidade atual do " + this.marca + ' ' + this.modelo + ' ' + "é de: " +this.velocidade + "km/h")
    }
}
let ford = new Carro("Ford", "Ka", 50);
let bmw = new Carro("BMW", "X1", 87);
let porsche = new Carro("Porsche", "Cayenne", 124);

console.log(ford.mostrarVelocidade());
console.log(bmw.acelerar());
console.log(porsche.frear());


