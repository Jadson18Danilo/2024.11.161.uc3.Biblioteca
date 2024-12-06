

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

function listarTodosLivros() {
    livros.forEach(livro => console.log(`I Id: ${livro.id} - Título: ${livro.titulo}`));
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
    
    switch(resposta) {
        case "1":
    }
        if(resposta === "0") {
            menuPrincipal();
    }
        else if(resposta === "1") {
            cadastrarLivro();
        }
        else if(resposta === 4) {
            listarTodosLivros();
            menuLivros();
            //break em switch
        //default:
            //menuLivros();
        }
        else if(resposta === "5") {
            //menuId();
        }
        else {
            menuLivros(); 
    }
}

export default menuLivros;
