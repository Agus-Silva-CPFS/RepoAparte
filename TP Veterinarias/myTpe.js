"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var Paciente_1 = require("./Paciente");
var Proveedor_1 = require("./Proveedor");
var Veterinaria_1 = require("./Veterinaria");
var readline = require("readline-sync");
var primerVeterinaria = new Veterinaria_1.Veterinaria('Florida', 'AvColon', 55, [], [], []);
var primerCliente = new Cliente_1.Cliente('Agustin Silva', 2983445566);
var segundoCliente = new Cliente_1.Cliente('Ernesto', 29833333);
var primerProveedor = new Proveedor_1.Proveedor('gaseosa', 500, 'Monarca', 299999);
var primerPaciente = new Paciente_1.Paciente('Titan', '');
primerVeterinaria.nuevoCliente(primerCliente);
console.log('Cliente registrado con exito');
primerPaciente.setEspecieAnimal(readline.question('Ingrese la especie de su animal: '));
primerVeterinaria.nuevoCliente(segundoCliente);
primerVeterinaria.nuevoProveedor(primerProveedor);
console.log(primerVeterinaria);
primerCliente.imprimirCliente();
primerVeterinaria.nuevoPaciente(readline.questionInt('Ingrese el id de su duenio: '), primerPaciente);
primerVeterinaria.bajaCliente();
primerVeterinaria.bajaProveedor();
primerVeterinaria.bajaPaciente();
console.log(primerVeterinaria);
//Incrementar deuda
primerProveedor.incrementarDeuda(500);
console.log(primerProveedor);
//Bajar deuda
primerProveedor.vaciarDeuda();
