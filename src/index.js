import menuLivros from "./livros/livros.js";
import prompt from "prompt-sync";
import editarUsuario from "./usuario/usuario.js";
import realizarEmprestimo from "./emprestimos/emprestimos.js";

const input = prompt();

function menuPrincipal() {
    const opcoes = [
        "1 - Livros",
        "2 - Usuários",
        "3 - Empréstimos",
        "0 - Sair"
    ] 
    const menu = opcoes.join("\n");
    console.log(menu);
    let resposta = input('Escolha uma das opções acima. '); 
    if(resposta === "1") {
        menuLivros();
    }
    else if (resposta === "2") {
        editarUsuario();
    }
    else if (resposta === "3") {
        realizarEmprestimo();
    }
    else if(resposta === "0") {
        console.log(`Sistema encerrado.`);
    }
    else {
        menuPrincipal();  
    }
}

export default menuPrincipal;


console.clear()
menuPrincipal();
