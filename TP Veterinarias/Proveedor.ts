import { Persona } from "./Persona"
export class Proveedor extends Persona{
    private producto:string;
    private deuda:number;
    constructor(producto:string,deuda:number,nombre:string,telefono:number){
        super(nombre,telefono)
        this.producto = producto;
        this.deuda = deuda;
    }
       public getNombreProducto(){
        return this.producto;
       }
       public setNombreProducto(nombre:string){
        this.producto = nombre;
       }
       public getDeudaProv(){
        return this.deuda;
       }
       public setDeudaProv(deuda:number){
        this.deuda = deuda;
       }
       public incrementarDeuda(cantidad:number){
        var aux = this.deuda + cantidad;
        this.deuda = aux;
       }
       public vaciarDeuda(){
        this.deuda = 0;
       }
}