class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome, 
        this.nota1 = nota1,
        this.nota2 = nota2
    }
    calcularMedia(){
        if ((this.nota1+this.nota2) / 2 >= 7){
            console.log("Aluno Aprovado")
        }else{
            console.log("Aluno Reprovado")
        }
    }
}

let aluno1 = new Aluno("Lucas", 10,5)
console.log(aluno1.calcularMedia())