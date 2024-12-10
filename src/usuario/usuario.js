
import menuPrincipal from "../index.js";
import prompt from "prompt-sync";
import { usuarios } from "../../data/usuarios.js";

const input = prompt();

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

export default editarUsuario;
