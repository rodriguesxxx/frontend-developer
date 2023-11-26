var qtyClicks = 0;

function clicked(){
    console.clear();
    qtyClicks++;
    console.log( "LÁ ELEEEE ".concat( qtyClicks ) )
}


let botao = document.getElementById("meu-botao");

botao.addEventListener( "click", clicked );