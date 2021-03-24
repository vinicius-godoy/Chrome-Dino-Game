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
function detectarHit(){
    // Variáveis pegam os valores de Top do Dino e de Left do Cacto (em int)
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));

    //Se o cactos e o dinossauro baterem ele reincia a posição do cacto e alerta sobre o fim do jogo
    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 95){
        cacto.classList.remove("cacto");
        alert("GAME OVER!");
        cacto.classList.add("cacto");
    }
}

// Execução do Jogo
document.addEventListener("keydown", pressionar); // Escutar teclas pressionadas
setInterval(detectarHit, 10); // Rodar a função de detecção de toque a cada 10 milisegundos