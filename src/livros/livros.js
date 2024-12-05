

import menuPrincipal from "../index.js";
import prompt from "prompt-sync";

function menuLivros() {
    const input = prompt();
    const opcoes = [
        "1 - Cadastrar livro",
        "2 - Editar livros",
        "3 - Excluir livros",
        "4 - Listar todos os livros",
        "5 - Buscar livro por ID",
        "0 - Retornar ao Menu Principal"
    ] 
    const menu = opcoes.join("\n");
    console.log(menu);
    switch(opcoes) {
        case "0":
            menuPrincipal();
            break;
        default:
            menuLivros() 
    }
}

export default menuLivros;


/*
{
    id: 1,
    titulo: "Harry Potter",
    autor: "J.K Rowling,
    editora: "Rocco",
    emprestado: false
};
*/
