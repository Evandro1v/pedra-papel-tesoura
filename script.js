var elementos = document.querySelectorAll('.player-opcao button');
var playeropt = '';
var enemyopt = '';
const enemyoptions = document.querySelectorAll('.enemy-opcao button');


function validarvitoria() {
    var quemganhou = document.querySelector(".quemganhou");
    if (playeropt == "rock" && enemyopt == "rock") {
        quemganhou.innerHTML = "EMPATE";
    }
    if (playeropt == "rock" && enemyopt == "paper") {
        quemganhou.innerHTML = "INIMIGO GANHOU";
    }
    if (playeropt == "rock" && enemyopt == "scisor") {
        quemganhou.innerHTML = "VOCÊ GANHOU";

    }
    if (playeropt == "paper" && enemyopt == "rock") {
        quemganhou.innerHTML = "VOCÊ GANHOU";
    }
    if (playeropt == "paper" && enemyopt == "paper") {
        quemganhou.innerHTML = "EMPATE";
    }
    if (playeropt == "paper" && enemyopt == "scisor") {
        quemganhou.innerHTML = "INIMIGO GANHOU";


    }
    if (playeropt == "scisor" && enemyopt == "rock") {
        quemganhou.innerHTML = "INIMIGO GANHOU";
    }
    if (playeropt == "scisor"&& enemyopt == "paper") {
        quemganhou.innerHTML = "VOCÊ GANHOU";
    }
    if (playeropt == "scisor"&& enemyopt == "scisor") {
        quemganhou.innerHTML = "EMPATE";


    }
}

//reseta a cor do inimigo
function resetacorini() {
    for (var i = 0; i < enemyoptions.length; i++) {
        enemyoptions[i].style.backgroundColor = 'white';
    }
}

//inimigo joga
function inimigojogar() {
    //numeros aleatorio para usar no inimigo
    let rand = Math.floor(Math.random() * 3);
    //chamando a função para resetar a cor do inimigo
    resetacorini();
    for (var i = 0; i < enemyoptions.length; i++) {
        if (i == rand) {
            enemyoptions[i].style.backgroundColor = 'blue';
            enemyopt = enemyoptions[i].getAttribute('attr');
        }
    }

}
//reseta a cor
function resetacor() {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = 'white';
    }
}
//player joga
for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function (t) {
        //função deixa tudo branco antes
        resetacor();
        //chama a função para o inimigo jogar
        inimigojogar();
        //muda o clicado para vermelho
        t.target.style.backgroundColor = 'red';
        playeropt = t.target.getAttribute('attr');
        //chama função validar vitoria
        validarvitoria();
    })
}

