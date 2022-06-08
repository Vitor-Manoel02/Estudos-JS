function tocaSom(idTecla){
    const selecionaId = document.querySelector(idTecla);
    if(selecionaId && selecionaId.localName === 'audio'){
        document.querySelector(idTecla).play();
    }else{
        console.log("Tipo não encontrado!");
    }
}