"use strict";
exports.__esModule = true;
var Mago_1 = require("./Mago");
var Guerrero_1 = require("./Guerrero");
var Batalla_1 = require("./Batalla");
var readline = require("readline-sync");
var personajeUno = crearPersonaje();
var personajeDos = crearPersonaje();
console.log('Personaje creado correctamente: ');
console.log(personajeUno);
console.log('Personaje creado correctamente: ');
console.log(personajeDos);
function crearPersonaje() {
    var inputNombre = readline.question('Indica el nombre de tu personaje: ');
    var inputClase = readline.questionInt('Indica la clase de tu preferencia: 1-Mago / 2-Guerrero: ');
    if (inputClase == 1) {
        var postulante = new Mago_1.Mago('', 1110, 0, 20, 0);
        postulante.setters(postulante, inputNombre);
        return postulante;
    }
    else if (inputClase == 2) {
        var postulante = new Guerrero_1.Guerrero('', 1234, 0, 20, 0);
        postulante.setters(postulante, inputNombre);
        return postulante;
    }
    throw new Error('Undefined');
}
var primerRound = new Batalla_1.Batalla(personajeUno, personajeDos);
primerRound.pelear(personajeUno, personajeDos);
