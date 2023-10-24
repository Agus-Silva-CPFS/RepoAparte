import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import { Persona } from "./Persona";
import * as readline from 'readline-sync';

export class Veterinaria{
    private nombreVete:string;
    private direccionVete:string;
    private idVete:number;
    private listaClientes:Cliente[];
    private listaPacientes:Paciente[];
    private listaProveedores:Proveedor[];


    constructor(nombreVete:string,direccionVete:string,idVete:number,listaClientes:Cliente[],listaPacientes:Paciente[]){
        this.nombreVete = nombreVete;
        this.direccionVete = direccionVete;
        this.idVete = idVete;
        this.listaClientes = [];
        this.listaPacientes = [];
        this.listaProveedores = [];
       
        
        
    }
    
    public getNombreVete():string{
        return this.nombreVete;
    }
    public setNombreVete(nombreVete:string){
        this.nombreVete = nombreVete;
    }

    public getDireccionVete():string{
        return this.direccionVete;
    }
    public setDireccionVete(direccionVete:string){
        this.direccionVete = direccionVete;
    }

    public getIdVete():number{
        return this.idVete;
    }
    public setIdVete(id:number){
        this.idVete = id;
    }
    public nuevoCliente(cliente:Cliente){
        cliente.setId(this.generarId(this.listaClientes,this.listaProveedores));
        this.listaClientes.push(cliente);
    }
    public nuevoProveedor(proveedor:Proveedor){
        proveedor.setId(this.generarId(this.listaProveedores,this.listaProveedores));
        this.listaProveedores.push(proveedor);
    }
    public nuevoPaciente(idDuenio:number,paciente:Paciente){
        //comprobarId();
        paciente.setId(idDuenio);
        this.listaPacientes.push(paciente);
        console.log('Paciente registrado con exito');
    }
    public bajaCliente(){
        var listaAux : Cliente[] = this.listaClientes;
        console.log(listaAux);
        var preg : number = readline.questionInt('Ingrese el id del cliente a eliminar: ');
        for(let i = 0; i<listaAux.length;i++){
            if(listaAux[i].getId() == preg){
                listaAux.splice(i,1);
                console.log('Borrado del arreglo');
                console.log(listaAux);
                this.listaClientes = listaAux;
            }
        }
    }
  
    public bajaProveedor(){
        var listaAux : Proveedor[] = this.listaProveedores;
        console.log(listaAux);
        var preg : number = readline.questionInt('Ingrese el id del proveedor a eliminar: ');
        for(let i = 0; i<listaAux.length;i++){
            if(listaAux[i].getId() == preg){
                listaAux.splice(i,1);
                console.log('Borrado del arreglo');
                console.log(listaAux);
                this.listaProveedores = listaAux;
            }
        }
    }
    public bajaPaciente(){
        var listaAux : Paciente[] = this.listaPacientes;
        console.log(listaAux);
        var preg : number = readline.questionInt('Ingrese el id del paciente a eliminar: ');
        for(let i = 0; i<listaAux.length;i++){
            if(listaAux[i].getId() == preg){
                listaAux.splice(i,1);
                console.log('Borrado del arreglo');
                console.log(listaAux);
                this.listaPacientes = listaAux;
            }
        }
    }
  

    public generarId(arrC:Persona[],arrP:Persona[]):number{ 
        var randomNum = this.generarNum();
        var i = 0;
        while(i<arrC.length&&i<arrP.length){
            if(arrC[i].getId() == randomNum || arrP[i].getId()== randomNum){
                randomNum = this.generarNum();
                i = 0;
            }
            i++;
        }
        return randomNum;
    }
    
    public generarNum():number{
        return Math.floor(Math.random()*10);
    }
    
}
