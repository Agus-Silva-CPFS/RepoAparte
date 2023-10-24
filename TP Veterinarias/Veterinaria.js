"use strict";
exports.__esModule = true;
exports.Veterinaria = void 0;
var readline = require("readline-sync");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombreVete, direccionVete, idVete, listaClientes, listaPacientes, listaVeterinarias) {
        this.nombreVete = nombreVete;
        this.direccionVete = direccionVete;
        this.idVete = idVete;
        this.listaClientes = [];
        this.listaPacientes = [];
        this.listaProveedores = [];
        this.listaVeterinarias = [];
    }
    Veterinaria.prototype.nuevoCliente = function (cliente) {
        cliente.setId(this.generarId(this.listaClientes, this.listaProveedores));
        this.listaClientes.push(cliente);
    };
    Veterinaria.prototype.nuevoProveedor = function (proveedor) {
        proveedor.setId(this.generarId(this.listaProveedores, this.listaProveedores));
        this.listaProveedores.push(proveedor);
    };
    Veterinaria.prototype.nuevoPaciente = function (idDuenio, paciente) {
        //comprobarId();
        paciente.setId(idDuenio);
        this.listaPacientes.push(paciente);
        console.log('Paciente registrado con exito');
    };
    Veterinaria.prototype.bajaCliente = function () {
        var listaAux = this.listaClientes;
        console.log(listaAux);
        var preg = readline.questionInt('Ingrese el id del cliente a eliminar: ');
        for (var i = 0; i < listaAux.length; i++) {
            if (listaAux[i].getId() == preg) {
                listaAux.splice(i, 1);
                console.log('Borrado del arreglo');
                console.log(listaAux);
                this.listaClientes = listaAux;
            }
        }
    };
    Veterinaria.prototype.bajaProveedor = function () {
        var listaAux = this.listaProveedores;
        console.log(listaAux);
        var preg = readline.questionInt('Ingrese el id del proveedor a eliminar: ');
        for (var i = 0; i < listaAux.length; i++) {
            if (listaAux[i].getId() == preg) {
                listaAux.splice(i, 1);
                console.log('Borrado del arreglo');
                console.log(listaAux);
                this.listaProveedores = listaAux;
            }
        }
    };
    Veterinaria.prototype.bajaPaciente = function () {
        var listaAux = this.listaPacientes;
        console.log(listaAux);
        var preg = readline.questionInt('Ingrese el id del paciente a eliminar: ');
        for (var i = 0; i < listaAux.length; i++) {
            if (listaAux[i].getId() == preg) {
                listaAux.splice(i, 1);
                console.log('Borrado del arreglo');
                console.log(listaAux);
                this.listaPacientes = listaAux;
            }
        }
    };
    Veterinaria.prototype.nuevaVeterinaria = function (vete) {
        this.listaVeterinarias.push(vete);
    };
    Veterinaria.prototype.getNombreVete = function () {
        return this.nombreVete;
    };
    Veterinaria.prototype.setNombreVete = function (nombreVete) {
        this.nombreVete = nombreVete;
    };
    Veterinaria.prototype.getDireccionVete = function () {
        return this.direccionVete;
    };
    Veterinaria.prototype.setDireccionVete = function (direccionVete) {
        this.direccionVete = direccionVete;
    };
    Veterinaria.prototype.getIdVete = function () {
        return this.idVete;
    };
    Veterinaria.prototype.setIdVete = function (id) {
        this.idVete = id;
    };
    Veterinaria.prototype.generarId = function (arrC, arrP) {
        var randomNum = this.generarNum();
        var i = 0;
        while (i < arrC.length && i < arrP.length) {
            if (arrC[i].getId() == randomNum || arrP[i].getId() == randomNum) {
                randomNum = this.generarNum();
                i = 0;
            }
            i++;
        }
        return randomNum;
    };
    Veterinaria.prototype.generarNum = function () {
        return Math.floor(Math.random() * 10);
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
