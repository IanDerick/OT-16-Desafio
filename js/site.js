let array = ["Ian", "Derick", "Silva", "Mota", 22];
function retornaArray(array) {
    return array;
}
let resultado = retornaArray(array);

console.log(resultado[1]); //Derick

function retornaValorDoIndice(array, numero) {
    return array[numero];
}

console.log(retornaValorDoIndice(array, 0)); //Ian
console.log(retornaValorDoIndice(array, 1)); //Derick
console.log(retornaValorDoIndice(array, 2)); //Silva
console.log(retornaValorDoIndice(array, 3)); //Mota
console.log(retornaValorDoIndice(array, 4)); //22

function book(nomeLivro) {
    const livros = {
        "Livro A":{
            quantidadePaginas: 200,
            autor: "Autor A",
            editora: "Editora A"
        },
        "Livro B":{
            quantidadePaginas: 300,
            autor: "Autor B",
            editora: "Editora B"
        },
        "Livro C":{
            quantidadePaginas: 400,
            autor: "Autor C",
            editora: "Editora C"
        }
    }
    if (nomeLivro) {
        return livros[nomeLivro] || "Livro não encontrado."
    }
    return livros;
}
console.log(book());
const nomeDoLivro = "Livro A";
const livroSelecionado = book(nomeDoLivro);
console.log(`O livro "${nomeDoLivro}" tem ${livroSelecionado.quantidadePaginas} páginas.`);
console.log(`O autor do livro "${nomeDoLivro}" é "${livroSelecionado.autor}".`);
console.log(`O livro "${nomeDoLivro}" foi pulicado pela editora "${livroSelecionado.editora}".`);