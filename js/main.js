var LIMITE_DER = 73;  /* ha de tener la misma que el incial en css */
var LIMITE_IZ = -27; 

var porcentaje = 95;
var direccion = "izquierda";
var aparecidos = false;
var asustados = false;
function principal() {
    setInterval('moverte();', 1);
}
    
function moverte() {
    aparcerTiempo();
    dejarPaso();
    
    /* hay que moverse a la izquierda bichos y despues a la izquierda bichos2 y desaparecerlos */
    // if (aparecidos) {
    // if(!alcanzadaIzquierda() && direccion == "izquierda") {
    //     moverIzquierda();
    // } else {
    //     direccion = "derecha"
    // }
    // if(!alcanzadaDerecha() && direccion == "derecha") {
    //     moverDerecha();
    // } else {
    //     direccion = "izquierda";
    // }
    // }
    // if(!asustados)
    //     document.getElementById("bichos").style.left = porcentaje + "%";
    // else
    //     document.getElementById("bichos2").style.left = porcentaje + "%";
}

function aparcerTiempo() {
    var N = 5; /*numero imagenes de pacman*/
    for(var i = 1; i <= N; i++)
       setTimeout('aparcer(' + i  + ');', 240 * i);

}

function aparcer(n) {
    document.getElementById("img" + n).style.display = "inline";
}

function dejarPaso() {
    if(porcentaje > 73)
        moverIzquierda()
    else 
        aparecidos = true;
    
    
}



function moverIzquierda() {
    porcentaje-=0.1;
}

function moverDerecha() {
    porcentaje+=0.1;
}

function alcanzadaDerecha() {
    return LIMITE_DER < porcentaje;
}

function alcanzadaIzquierda() {
    return LIMITE_IZ > porcentaje;
}