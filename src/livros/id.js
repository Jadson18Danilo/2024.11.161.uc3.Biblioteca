
import menuPrincipal from "../index.js";
import prompt from "prompt-sync";

function menuId () {
    const input = prompt();
    const opcoes = 
    [
    "id: 1",
    "titulo: Harry Potter",
    "autor: J.K Rowling",
    "editora: Rocco",
    "emprestado: false"
    ]
const menu = opcoes.join("\n");
console.log(menu);
let test = input('Essas são as informações do livro com ID "1". Aperte 0 para retornar ao Menu Principal. ');
    if(test === "0") {
        menuPrincipal();
}
    else {
        menuId();
    }
}

export default menuId;
