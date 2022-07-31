/* 
1° Objetivo - Clicar na seta de avaçar, mostrar o próximo cartão da lista
    Passo 1 - Pegar o elemento HTML da seta avançar
    Passo 2 - Identificar o clique do usuário na seta
    Passo 3 - Fazer aparecer o próximo cartão da lista
    Passo 4 - Buscar o cartão antigo e fazer desaparecer

2° Objetivo - Clicar na seta de voltar, mostrar o cartão anterior da lista
    Passo 1 - Pegar o elemento HTML da seta voltar
    Passo 2 - Identificar o clique do usuário na seta
    Passo 3 - Fazer aparecer o cartão anterior da lista
    Passo 4 - Buscar o cartão antigo e fazer desaparecer
*/
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function esconderCartao(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function selecionarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
    if(cartaoAtual === cartoes.length - 1) return
    esconderCartao();
    cartaoAtual++;
    selecionarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    esconderCartao();
    cartaoAtual--;
    selecionarCartao(cartaoAtual);
});