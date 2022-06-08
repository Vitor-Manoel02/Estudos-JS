const teclasSelecionadas = document.querySelectorAll('.tecla')

for(index = 0; index < teclasSelecionadas.length; index++) {
    const teclas = teclasSelecionadas[index];

    const instrumentos = teclas.classList[1]; //classList = lista de classes, retorna o valor do numero da classe

    const idAudio = `#som_${instrumentos}`; //template semelhante php

    teclas.onclick = function(){ // função anonima
        tocaSom(idAudio); 
    }

    teclas.onkeydown = function(event){
        console.log(event.code);
        if(event.code === "Enter" || event.code === "space"){
            teclas.classList.add('ativa');
        }
    }
    teclas.onkeyup = function(){
        teclas.classList.remove('ativa')
    }
}