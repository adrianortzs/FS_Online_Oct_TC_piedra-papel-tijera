
let opciones=['piedra','papel','tijera'];

let ptsuser = document.querySelector('.contador-usuario');;
let cuser = 0;
let cpc = 0;
let ptspc =document.querySelector('.contador-ordenador'); ;

let boton=document.querySelector('.boton-jugada');
var valorBoton = boton.getAttribute("data-jugada")
let usuario=document.getElementById("contador-usuario");
let ordenador=document.getElementById("contador-ordenador");
let resultados=document.getElementById("resultados");


function jugadaOrdenador (){
    const jugadaAleatoria = Math.floor(Math.random()*3) /* numero aleatorio entero 0,1 o 2 */
    return opciones[jugadaAleatoria]
}

boton.forEach(botoncito => {
    botoncito.addEventListener("click", function(){
    const nuestraJugada = this.dataset.jugada;
    juego(nuestraJugada)
})
})
function juego(nuestraJugada) {
    const jugadaOrdenador = jugadaOrdenador();

    switch (nuestraJugada + jugadaOrdenador) {
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            draw(nuestraJugada, jugadaOrdenador);
            break;
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            win(nuestraJugada, jugadaOrdenador);
            break;
        default:
            lose(nuestraJugada, jugadaOrdenador);
            break;
    }
}

function win(nuestraJugada, jugadaOrdenador) {
    cuser++;
    actualizarResultados(nuestraJugada, jugadaOrdenador, 'Ganaste!');
}

function lose(nuestraJugada, jugadaOrdenador) {
    cpc++;
    actualizarResultados(nuestraJugada, jugadaOrdenador, 'Perdiste!');
}

function draw(nuestraJugada, jugadaOrdenador) {
    actualizarResultados(nuestraJugada, jugadaOrdenador, 'Empate!');
}

function actualizarResultados(nuestraJugada, jugadaOrdenador, resultados){
    document.getElementById('contador-usuario').textContent = `Tus puntos: ${cuser}`;
    document.getElementById('contador-ordenador').textContent = `Tus puntos: ${cpc}`;
    document.getElementById('resultados').textContent = `Usuario eligió ${nuestraJugada}, Ordenador eligió ${jugadaOrdenador}. ${resultados}`;
}

// function resultados(ptsuser,ptspc){
//     ptsuser.innerHTLM=`Tus puntos:${cuser}`;
//     ptspc.innerHTLM=`Tus puntos:${cpc}`;
// }
