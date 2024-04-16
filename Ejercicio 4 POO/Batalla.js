"use strict";
exports.__esModule = true;
exports.Batalla = void 0;
var Batalla = /** @class */ (function () {
    function Batalla(jugadorUno, jugadorDos) {
        this.jugadorUno = jugadorUno;
        this.jugadorDos = jugadorDos;
    }
    Batalla.prototype.pelear = function (jugadorUno, jugadorDos) {
        while (jugadorDos.getEnergia() > 0 || this.jugadorUno.getEnergia() > 0) {
            jugadorDos.atacar(jugadorUno);
            jugadorDos.desgasteEnergia();
            console.log('La energia de jugador 2 bajo a: ' + jugadorDos.getEnergia());
            jugadorUno.atacar(jugadorDos);
            jugadorUno.desgasteEnergia();
            console.log('La energia de jugador 1 bajo a: ' + jugadorUno.getEnergia());
            if (jugadorUno.getVida() <= 0) {
                return console.log('Jugador Dos ha ganado la pelea');
            }
            if (jugadorDos.getVida() <= 0) {
                return console.log('Jugador Uno ha ganado la pelea');
            }
        }
        console.log('La vida de: ' + jugadorUno.getNombre() + 'es de: ' + jugadorUno.getVida());
        console.log('La vida de: ' + jugadorDos.getNombre() + 'es de: ' + jugadorDos.getVida());
        if (jugadorUno.getVida() > jugadorDos.getVida()) {
            console.log('El ganador es: ' + jugadorUno.getNombre());
        }
        else {
            console.log('El ganador es: ' + jugadorDos.getNombre());
        }
    };
    return Batalla;
}());
exports.Batalla = Batalla;
