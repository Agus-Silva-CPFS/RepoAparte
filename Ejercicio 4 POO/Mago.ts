import { Personaje } from "./Personaje";
export class Mago extends Personaje{
    private habilidadEspecial:number;
    constructor(nombre:string,vida:number,danio:number,energia:number,habilidadEspecial:number){
        super(nombre,vida,danio,energia)
        this.habilidadEspecial = Math.random() * (1500 - 15) + 15;
    }
    public atacar(enemigo:Personaje){
       let calcularDanio = super.setDanio() + this.habilidadEspecial;
       let enemigoVida = enemigo.getVida();
       enemigoVida -= calcularDanio;
       enemigo.setVida(enemigoVida);
       console.log(enemigo.getNombre()+' ha recibido ' + calcularDanio + ' pts de daño')
    }
}