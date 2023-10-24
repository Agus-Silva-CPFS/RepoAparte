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
exports.Proveedor = void 0;
var Persona_1 = require("./Persona");
var Proveedor = /** @class */ (function (_super) {
    __extends(Proveedor, _super);
    function Proveedor(producto, deuda, nombre, telefono) {
        var _this = _super.call(this, nombre, telefono) || this;
        _this.producto = producto;
        _this.deuda = deuda;
        return _this;
    }
    Proveedor.prototype.getNombreProducto = function () {
        return this.producto;
    };
    Proveedor.prototype.setNombreProducto = function (nombre) {
        this.producto = nombre;
    };
    Proveedor.prototype.getDeudaProv = function () {
        return this.deuda;
    };
    Proveedor.prototype.setDeudaProv = function (deuda) {
        this.deuda = deuda;
    };
    Proveedor.prototype.incrementarDeuda = function (cantidad) {
        var aux = this.deuda + cantidad;
        this.deuda = aux;
    };
    Proveedor.prototype.vaciarDeuda = function () {
        this.deuda = 0;
    };
    return Proveedor;
}(Persona_1.Persona));
exports.Proveedor = Proveedor;
