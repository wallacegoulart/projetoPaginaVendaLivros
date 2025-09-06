let btnOrdenarDisponivel = document.getElementById("btnLivrosDisponiveis");

btnOrdenarDisponivel.addEventListener('click', ordenarLivrosDisponivel);

function ordenarLivrosDisponivel(){
    let livrosDisponivel = livros.filter((livro) => livro.quantidade != 0);
    exibirLivrosNaTela(livrosDisponivel);
}