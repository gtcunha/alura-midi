/ Função para tecla Pom /

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
} 

/ Comando para ação do botão Pom /

document.querySelector('.tecla_pom').onclick = tocaSomPom; 

const listaDeTeclas = document.querySelectorAll('.tecla');
/ const listaDeSons = document.querySelectorAll('.som_tecla_pom'); /


/*for (var cont=0; cont <9; cont++) {

}

*/
