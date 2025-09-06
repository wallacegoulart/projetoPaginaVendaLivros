function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosComDescontos = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * 0,3)  }
    });

    return livrosComDescontos
};