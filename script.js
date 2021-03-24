// Variáveis
const jogo  = document.getElementById("jogo");
const dino  = document.getElementById("dino");
const cacto = document.getElementById("cactos");
let pontuacao = 0, recorde = 0;

// Funções
function pular(){
    if(dino.classList != "pulo"){
        dino.classList.add("pulo");

        setTimeout(function () {
            dino.classList.remove("pulo");
        }, 500);
    }
}
function pressionar(event){
    pular();
}

// Execução do Jogo
document.addEventListener("keydown", pressionar); //Escutar teclas pressionadas