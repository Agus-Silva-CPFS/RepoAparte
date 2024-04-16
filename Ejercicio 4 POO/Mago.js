"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, vida, danio, energia, habilidadEspecial) {
        var _this = _super.call(this, nombre, vida, danio, energia) || this;
        _this.habilidadEspecial = Math.random() * (1500 - 15) + 15;
        return _this;
    }
    Mago.prototype.atacar = function (enemigo) {
        var calcularDanio = _super.prototype.setDanio.call(this) + this.habilidadEspecial;
        var enemigoVida = enemigo.getVida();
        enemigoVida -= calcularDanio;
        enemigo.setVida(enemigoVida);
        console.log(enemigo.getNombre() + ' ha recibido ' + calcularDanio + ' pts de daño');
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
