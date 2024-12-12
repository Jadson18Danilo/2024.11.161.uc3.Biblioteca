import prompt from "prompt-sync";

import menuPrincipal from "../index.js";
import { dados as emprestimos } from "../../data/emprestimos.js";
import { dados as usuarios } from "../../data/usuarios.js";
import { dados as livros } from "../../data/livros.js";

const input = prompt();

function realizarEmprestimo() {

    console.log("Realizar Empréstimo");

    let usuarioCpf = input("Digite o CPF do usuário: ");

    while (!usuarios.find(usuario => usuario.cpf === usuarioCpf)) {

        console.log("Usuário não encontrado!");

        console.log("Deseja voltar ao menu?");
        console.log("0 - Sim");
        console.log("1 - Não");

        const opcao = input("Digite a opção desejada: ");
        if (opcao === "0") menuEmprestimos();
        usuarioCpf = input("Digite o CPF do usuário: ");
    }

    const livroId = input("Digite o ID do livro: ");
    while (!livros.find(livro => livro.id === livroId)) {

        console.log("Livro não encontrado!");

        console.log("Deseja voltar ao menu?");
        console.log("0 - Sim");
        console.log("1 - Não");

        const opcao = input("Digite a opção desejada: ");
        if (opcao === "0") menuEmprestimos();
        livroId = input("Digite o ID do livro: ");
    }

    // setando propriedade emprestado do livro para true
    const livro = livros.find(livro => livro.id === livroId);
    livro.emprestado = true;

    const id = new Date().getTime().toString();

    const dataEmprestimo = new Date().toLocaleDateString();
    emprestimos.push({ id, usuarioCpf, livroId, dataEmprestimo });

    console.log("Empréstimo realizado com sucesso!");
}

function realizarDevolucao() {
    console.log("Realizar Devolução.");

const emprestimoId = input("Digite o ID do empréstimo a ser devolvido: ");
while(!livros.find(emprestimo => emprestimo.id === emprestimoId)) {

    console.log("Livro não encontrado!");

    console.log("Deseja voltar ao menu?");
    console.log("0 - Sim");
    console.log("1 - Não");

    const opcao = input("Digite a opção desejada: ");
    if (opcao === "0") menuEmprestimos();
}

// setando a propriedade emprestado do livro de volta para false
const emprestado = emprestimos.find(emprestimo => emprestimo.id === emprestimoId);
livro.emprestado = false;

const id = new Date().getTime().toString();

const dataDevolucao = new Date().toLocaleDateString() // pesquisar sobre "toLocaleDateString"

console.log("Livro devolvido com sucesso!");
}

// INICIO DE OUTRA FUNÇÃO

function listarTodosEmprestimos() {

    console.log("Todos os empréstimos");

    emprestimos.forEach(emprestimo => {
        const livro = livros.find(livro => livro.id === emprestimo.livroId);
        const usuario = usuarios.find(usuario => usuario.cpf === emprestimo.usuarioCpf);
        console.log(`Id: ${emprestimo.id} - Data de Empréstimo: ${emprestimo.dataEmprestimo}`);
    });
}



function menuEmprestimos() {
    const opcoes = 
    [
        "Menu Empréstimos",

        "1 - Realizar Empréstimo",
        "2 - Renovar Empréstimo",
        "3 - Realizar Devolução",
        "4 - Listar todos os empréstimos",
        "5 - Buscar empréstimo por ID",
        "0 - Retornar ao menu principal",
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
            realizarEmprestimo();
            menuEmprestimos();
            break;
        case "2":

            break;
        case "3":
            realizarDevolucao();
            menuEmprestimos();

            break;
        case "4":
            listarTodosEmprestimos();
            menuEmprestimos();
            break;
        case "5":

            break;
        default:
            menuEmprestimos();
    }
}

export default menuEmprestimos;
