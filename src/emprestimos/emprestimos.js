import prompt from "prompt-sync";

import menuPrincipal from "../index.js";
import { emprestimos } from "../../data/emprestimos.js";
import { dados } from "../../data/livros.js";
import { usuarios } from "../../data/usuarios.js";

const input = prompt();

function realizarEmprestimo() {
    console.log("Relizar Empréstimo.");

    const id = input("Insira o ID: ");
    const index = emprestimos.find(emprestimo => emprestimo.id === id);
    if(index >= 0) {
        console.log(emprestimo.usuarioId);
        console.log(emprestimo.livroId);
        console.log(emprestimo.dataEmprestimo);
        emprestimos.dataDevolucao = true
        console.log(emprestimo.dataDevolucao);
    } else {
        console.log("ALERTA: ID não encontrado!")
    }
}

export default realizarEmprestimo;

function listarTodosEmprestimos() {
    console.log("Todos os Empréstimos");
    emprestimos.forEach(emprestimo => {
        const usuario = usuarios.find(usuario => usuario.cpf === emprestimo.usuarioCpf);
        const livro = livros.find(livro => livro.id === emprestimo.livroId);
        console.log(`Id: ${emprestimo.id} - Data de Empréstimo: ${emprestimo.dataEmprestimo}`);
        console.log(`Usuário: ${usuario.nome} - Livro: ${livro.titulo}\n`);
    });
}