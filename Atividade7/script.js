class Livro{
    constructor(titulo, autor){
        this.titulo = titulo, 
        this.autor = autor
    }
}


const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("Os Canibais da Rua do Alvoreso", "Tailor Diniz")
const livro3 = new Livro("1984", "George Orwell")

const listaLivros = [livro1, livro2, livro3];

for (let i = 0; 1<listaLivros.length; i++){
    console.log(`Livro: ${listaLivros[i].titulo} - Autor: ${listaLivros[i].autor}`);
}

