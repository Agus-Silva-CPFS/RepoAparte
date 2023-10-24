"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = -1;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombrepersona) {
        this.nombre = nombrepersona;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Persona.prototype.getId = function () {
        return this.id;
    };
    Persona.prototype.setId = function (id) {
        this.id = id;
    };
    return Persona;
}());
exports.Persona = Persona;
