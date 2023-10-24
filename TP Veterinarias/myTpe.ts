import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import { Veterinaria } from "./Veterinaria";
import { RedVete } from "./RedVete";
import * as readline from 'readline-sync';

let primerVeterinaria: Veterinaria = new Veterinaria('Florida','AvColon',55,[],[]);


let primerCliente:Cliente = new Cliente('Agustin Silva',2983445566);

let segundoCliente:Cliente = new Cliente ('Ernesto',29833333);

let primerProveedor:Proveedor = new Proveedor('medicina canina',500,'Monarca',299999);

let primerPaciente:Paciente = new Paciente('Titan', '');

primerVeterinaria.nuevoCliente(primerCliente);
console.log('Cliente registrado con exito');

primerPaciente.setEspecieAnimal(readline.question('Ingrese la especie de su animal: '));

primerVeterinaria.nuevoCliente(segundoCliente);

primerVeterinaria.nuevoProveedor(primerProveedor);

console.log(primerVeterinaria);

primerCliente.imprimirCliente();

primerVeterinaria.nuevoPaciente(readline.questionInt('Ingrese el id de su duenio: '),primerPaciente);

primerVeterinaria.bajaCliente();

primerVeterinaria.bajaProveedor();

primerVeterinaria.bajaPaciente();

console.log(primerVeterinaria);

//Incrementar deuda
primerProveedor.incrementarDeuda(500);
console.log(primerProveedor);
//Bajar deuda
primerProveedor.vaciarDeuda();



