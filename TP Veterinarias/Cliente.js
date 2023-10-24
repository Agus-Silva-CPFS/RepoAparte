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
exports.Cliente = void 0;
var Persona_1 = require("./Persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, telefono) {
        var _this = _super.call(this, nombre, telefono) || this;
        _this.vipCliente = false;
        _this.visitasCliente = 0;
        return _this;
    }
    Cliente.prototype.aumentarVisita = function () {
        this.visitasCliente++;
        console.log('Gracias por su visita');
        if (this.visitasCliente > 5) {
            this.vipCliente = true;
            console.log('Felicidades se convirtio en Vip');
        }
    };
    Cliente.prototype.imprimirCliente = function () {
        console.log('nombre:' + _super.prototype.getNombre.call(this) + '\n' + 'telefono: ' + _super.prototype.getTelefono.call(this) + '\n' + 'id: ' + _super.prototype.getId.call(this));
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
