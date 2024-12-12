
import menuPrincipal from "../index.js";
import prompt from "prompt-sync";
import { dados } from "../../data/usuarios.js";

const input = prompt();

function cadastrarUsuario() {

    console.log("Cadastro de Usuário");

    const cpf = input("CPF: ");
    const nome = input("Nome: ");
    const email = input("E-mail: ");
    const telefone = input("Telefone: ");
    usuarios.push({ cpf, nome, email, telefone });

    console.log("Usuário cadastrado com sucesso");

}

function listarTodosUsuarios() {

    console.log("Todos os usuários");
   
    usuarios.forEach(usuarios => console.log(`Id: ${usuarios.cpf} - Título: ${usuarios.nome}`)); // pesquisar sobre forEach
    
}

function editarUsuario() {
    console.log("Editar Usuário.");

    const id = input("Buscar usuário por ID para efetuar as alterações: ");
    const index = usuarios.findIndex(usuario => usuario.id === id);
    if (index >= 0) {
        const cpf = input("Insira o novo CPF ou o mesmo para manter: ");
        const nome = input("Insira um novo nome ou o mesmo para manter: ");
        const telefone = input("Insira um novo telefone ou o mesmo para manter: ");
        const email = input("Insira um novo e-mail ou o mesmo para manter: ");
    } else {
        console.log("ALERTA: Usuário não encontrado!");
    }
}

function menuUsuarios() {
    const opcoes = [
        
        "Menu Usuários",
    
        "1 - Cadastrar Usuário",
        "2 - Editar Usuário",
        "3 - Excluir Usuário",
        "4 - Listar todos os usuários",
        "5 - Buscar usuário por CPF",
        "0 - Retornar ao menu principal"

    ]
    const menu = opcoes.join("\n");
    console.log(menu);
    let opcao = input("Digite a opção desejada: ");
    console.clear();
    switch (opcao) {     
        case "0":
            menuPrincipal();
            break;
        case "1":
            cadastrarUsuario();
            menuUsuarios();
            break;
        case "2":

            break;
        case "3":

            break;
        case "4":
            listarTodosUsuarios();
            menuUsuarios();
            break;
        case "5":

            break;
        default:
            menuUsuarios();
    }
}

export default menuUsuarios;