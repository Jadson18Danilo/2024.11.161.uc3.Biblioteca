import menuLivros from "./livros/livros.js";
import prompt from "prompt-sync";

function menuPrincipal() {
    const input = prompt();
    const opcoes = [
        "1 - Livros",
        "2 - Usuários",
        "3 - Empréstimos",
        "0 - Sair"
    ] 
    const menu = opcoes.join("\n");
    console.log(menu);
    let test = input('Escolha uma das opções: '); 
    switch(test) {
        case "1":
            menuLivros();
            break;
        default:
            menuPrincipal()
    }
}

export default menuPrincipal;

menuPrincipal();
