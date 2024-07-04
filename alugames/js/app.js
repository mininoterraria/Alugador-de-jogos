let botao;
let imagem;
let jogoId;
let nomeJogo;
let jogosAlugados = 0;

//Função para alterar o status de cada botão.
function alterarStatus(id){  
    jogoId = document.getElementById(`game-${id}`);
    imagem = jogoId.querySelector('.dashboard__item__img');
    botao = jogoId.querySelector('.dashboard__item__button');
    nomeJogo = jogoId.querySelector('.dashboard__item__name').textContent;
    if(imagem.classList.contains('dashboard__item__img--rented')){

        if(confirm(`Você quer devolver o jogo: ${nomeJogo}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    }else{ 
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;

    }
     exibirJogosAlugados();
}

//Esse código irá fazer com que o DOM do HTML seja carregado, já emitindo a quantidade de jogos alugados sem ter feito antes alguma alteração.
function exibirJogosAlugados(){
    console.log(`Jogos alugados: ${jogosAlugados}`)
}

document.addEventListener('DOMContentLoaded',function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirJogosAlugados();
})
