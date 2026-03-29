class Usuario{
    constructor(nome, senha){
        this.nome = nome, 
        this.#senha = senha
    }
    #senha;
    verificarSenha(senhaDigitada){
        if (senhaDigitada === this.#senha){
            console.log("Acesso Permitido")
        } else{
            console.log("Senha Incorreta")
        }
    }
}

const usuario1 = new Usuario("Laura", "1234")
usuario1.verificarSenha("1234");
