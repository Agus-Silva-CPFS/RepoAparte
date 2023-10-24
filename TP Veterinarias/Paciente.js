"use strict";
exports.__esModule = true;
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombreAnimal, especieAnimal) {
        this.nombreAnimal = nombreAnimal;
        this.especieAnimal = especieAnimal;
        this.id = -1;
    }
    Paciente.prototype.getNombreAnimal = function () {
        return this.nombreAnimal;
    };
    Paciente.prototype.setNombreAnimal = function (nombreAnimal) {
        this.nombreAnimal = nombreAnimal;
    };
    Paciente.prototype.getEspecieAnimal = function () {
        return this.especieAnimal;
    };
    Paciente.prototype.setEspecieAnimal = function (especie) {
        if (especie.toUpperCase() == 'PERRO') {
            this.especieAnimal = especie;
        }
        else if (especie.toUpperCase() == 'GATO') {
            this.especieAnimal = especie;
        }
        else {
            this.especieAnimal = 'Exotica';
        }
    };
    Paciente.prototype.getId = function () {
        return this.id;
    };
    Paciente.prototype.setId = function (id) {
        this.id = id;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
