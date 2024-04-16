import { Personaje } from "./Personaje";
export class Guerrero extends Personaje{
    private DanioCritico:number;
    constructor(nombre:string,vida:number,danio:number,energia:number,DanioCritico:number){
        super(nombre,vida,danio,energia);
        this.DanioCritico = Math.random() * (5500 - 15) + 15;
    }
    public atacar(enemigo:Personaje){
        let calcularDanio = super.setDanio() + this.DanioCritico;
        let enemigoVida = enemigo.getVida();
        enemigoVida -= calcularDanio;
        enemigo.setVida(enemigoVida);
        console.log(enemigo.getNombre()+' ha recibido ' + calcularDanio + ' pts de daño')
    }
}