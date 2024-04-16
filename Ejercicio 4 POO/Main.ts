import {Personaje} from './Personaje';
import { Mago } from './Mago';
import { Guerrero } from './Guerrero';
import { Batalla } from './Batalla';
import * as readline from 'readline-sync';


let personajeUno:Personaje = crearPersonaje();
let personajeDos:Personaje = crearPersonaje();


console.log('Personaje creado correctamente: ')
console.log(personajeUno);
console.log('Personaje creado correctamente: ')
console.log(personajeDos);

function crearPersonaje():Personaje{
    let inputNombre = readline.question('Indica el nombre de tu personaje: ');
    let inputClase = readline.questionInt('Indica la clase de tu preferencia: 1-Mago / 2-Guerrero: ');
    if(inputClase == 1){
        let postulante:Mago = new Mago('',1110,0,20,0);
        postulante.setters(postulante,inputNombre);
        return postulante;
    }else if(inputClase == 2){
        let postulante:Guerrero = new Guerrero('',1234,0,20,0)
        postulante.setters(postulante,inputNombre);
        return postulante;
    }
    throw new Error('Undefined');
}
let primerRound:Batalla = new Batalla(personajeUno,personajeDos); 
primerRound.pelear(personajeUno,personajeDos);