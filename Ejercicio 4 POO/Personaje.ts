import * as readline from 'readline-sync';
export class Personaje{
    private nombre:string;
    private vida:number;
    private danio:number;
    private energia:number;
    constructor(nombre:string,vida:number,danio:number,energia:number){
        this.nombre = nombre;
        this.vida = vida;
        this.danio = danio;
        this.energia = energia;
    }
    public setters(postulante,inputNombre){
        postulante.setNombre(inputNombre);
        postulante.setDanio();
        postulante.setVida();
        
    }
    public atacar(enemigo:Personaje){
        let calcularDanio = this.setDanio();
        enemigo.vida = enemigo.vida - calcularDanio;        
    }
    
    public getNombre(){
        return this.nombre;
    }
    
    public setNombre(nombre:string){
        this.nombre = nombre;
    }
    public setDanio(){
        this.danio = Math.floor(Math.random() * (150 - 70) + 70);
        return this.danio;
    }
    public getVida():number{
        return this.vida;
    }
    public setVida(vida:number):void{
        this.vida = Math.floor(Math.random() * (2000 - 1000) + 1000);
    }
    public getEnergia():number{
        return this.energia;
    }
    public desgasteEnergia(){
        if(this.energia>0){
            this.energia--;
        }
    }
    
}