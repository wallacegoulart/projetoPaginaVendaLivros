const elementoParaInserirLivros = document.getElementById('livros');
const somaDoValorDosLivros = document.getElementById("valor");

function exibirLivrosNaTela(listaDeLivros){
   elementoParaInserirLivros.innerHTML ="";
    listaDeLivros.forEach((livro)=>{
        const quantidadeD2Livros = verificaDisponibilidade(livro);
        elementoParaInserirLivros.innerHTML +=`
        <div class="livro">
            <img class="livro__imagens ${quantidadeD2Livros}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
    `
    });

    let somaDeLivros = listaDeLivros.reduce((acc,livro) => acc + livro.preco , 0);
    somaDoValorDosLivros.innerHTML = somaDeLivros.toFixed(2);
};
 
function verificaDisponibilidade(livro) {
  return livro.quantidade === 0 ? 'indisponivel' : '';
}