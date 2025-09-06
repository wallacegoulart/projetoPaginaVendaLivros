const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', () => filtrarLivros(btn.value)) );

function filtrarLivros(categoria){
    let livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
    exibirLivrosNaTela(livrosFiltrados);
}
