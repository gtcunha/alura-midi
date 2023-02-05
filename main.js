// Arquivo da Branch desenvolvimento.

// Função para reproduzir o som das teclas.

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
} 

//Montando um lista com a classe .tecla do html.
const listaDeTeclas = document.querySelectorAll('.tecla');


//Declarando o contador da estrutura de acesso a lista.
let contador = 0;


//Acesso a lista de teclas:

//While para iniciar a estrutura de repetição enquanto o contador for menor que o tamanho da lista.
while (contador < listaDeTeclas.length) {

//Constante declarada para armazenar o valor dentro da posição referente ao contador. Serve para deixar o código mais limpo.
    const tecla = listaDeTeclas[contador];

//Constante declarada para informar a posição da segunda classe dos botões no html.
    const instrumento = tecla.classList[1];

//Constante declarada para atribuir o valor inicial fixo do ID com o valor variável do instrumento.
    const idAudio = `#som_${instrumento}`;

//Função para execução a tag de áudio de acordo com o seu ID.
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
//Contador para atualização da posição na lista.
    contador++;

    
}



