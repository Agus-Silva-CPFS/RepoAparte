"use strict";
exports.__esModule = true;
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, danio, energia) {
        this.nombre = nombre;
        this.vida = vida;
        this.danio = danio;
        this.energia = energia;
    }
    Personaje.prototype.setters = function (postulante, inputNombre) {
        postulante.setNombre(inputNombre);
        postulante.setDanio();
        postulante.setVida();
    };
    Personaje.prototype.atacar = function (enemigo) {
        var calcularDanio = this.setDanio();
        enemigo.vida = enemigo.vida - calcularDanio;
    };
    Personaje.prototype.curar = function () {
        return this.vida = this.vida + (this.vida * 100 / 10);
    };
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personaje.prototype.setDanio = function () {
        this.danio = Math.floor(Math.random() * (150 - 70) + 70);
        return this.danio;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.setVida = function (vida) {
        this.vida = Math.floor(Math.random() * (2000 - 1000) + 1000);
    };
    Personaje.prototype.getEnergia = function () {
        return this.energia;
    };
    Personaje.prototype.desgasteEnergia = function () {
        if (this.energia > 0) {
            this.energia--;
        }
    };
    return Personaje;
}());
exports.Personaje = Personaje;
