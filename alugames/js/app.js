let botao;
let imagem;
let jogo;
//Função para alterar o status de cada botão.
function alterarStatus(id){  
    jogo = document.getElementById(`game-${id}`);
    imagem = jogo.querySelector('.dashboard__item__img');
    botao = jogo.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';

    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';

    }
     
}
