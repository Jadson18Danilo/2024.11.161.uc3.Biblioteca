

import menuPrincipal from "../index.js";
import menuId from "./id.js";
import prompt from "prompt-sync";

function menuLivros() {
    const input = prompt();
    const opcoes = 
    [
        "1 - Cadastrar livro",
        "2 - Editar livros",
        "3 - Excluir livros",
        "4 - Listar todos os livros",
        "5 - Buscar livro por ID",
        "0 - Retornar ao Menu Principal"
    ] 
    const menu = opcoes.join("\n");
    console.log(menu);
    let test = input('Escolha uma das opções acima. ');
        if(test === "0") {
            menuPrincipal();
    }
        else if(test === "5") {
            menuId();
        }
        else {
            menuLivros(); 
    }
}

export default menuLivros;
