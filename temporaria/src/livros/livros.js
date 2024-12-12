

import menuPrincipal from "../index.js";
import prompt from "prompt-sync";
import { dados } from "../../data/livros.js"

const input = prompt();

const livros = dados;

function cadastrarLivro() {
    const id = Math.floor(Math.random() * 1000000).toString();
    const titulo = input("Título: ");
    const autor = input("Autor: ");
    const editora = input("Editora: ");
    const emprestado = false;
    
    livros.push({ id, titulo, autor, editora, emprestado });

    console.log("Livro cadastrado com sucesso!")
}

function editarLivro() {
    console.log("Editar Livro.");

    const id = input(" ID do livro: ");
    const index = livros.findIndex(livro => livro.id === id);
    if (index >= 0) {
        const titulo = input("Insira o nome do novo Título: ");
        const autor = input("Insira o nome do novo Autor: ");
        const editora = input("Insira o nome da nova Editora: ");
        livros[index] = { ...livros[index], titulo, autor, editora };
        console.log("Livro editado com sucesso!");
       } else {
        console.log("Livro não encontrado!");
       }
}

function excluirLivro() {
    console.log("Excluir Livro.");

    const id = input("ID do livro: ");
    const index = livros.findIndex(livro => livro.id === id);
    if (index >= 0) {
        livros.splice(index, 1);
        console.log(" Livro excluído com sucesso!");
    } else {
        console.log("Livro não encontrado!");
    }
}

function listarTodosLivros() {
    livros.forEach(livro => console.log(`I Id: ${livro.id} - Título: ${livro.titulo}`));
}

function buscarLivroPorId() {
    console.log("Buscar livro por ID");

    const id = input(" ID do livro: ");
    const livro = livros.find(livro => livro.id === id);
    if (livro) {
        console.log(`Id: ${livro.id}`);
        console.log(`Título: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Editora: ${livro.editora}`);
        console.log(`Emprestado: ${livro.emprestado}`);
    } else {
        console.log("Livro não encontrado!");
    }
}

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
    let resposta = input('Escolha uma das opções acima. ');
    
   
        if(resposta === "0") {
            menuPrincipal();
        }
        else if(resposta === "1") {
            cadastrarLivro();
            menuLivros();
        }
        else if(resposta === "2") {
            editarLivro();
            menuLivros();
        }
        else if(resposta === "3") {
            excluirLivro();
            menuLivros();
        }
        else if(resposta === "4") {
            listarTodosLivros();
            menuLivros();
        }
        else if(resposta === "5") {
            buscarLivroPorId();
            menuLivros()
        }
        else {
            menuLivros();
        }
}

export default menuLivros;
