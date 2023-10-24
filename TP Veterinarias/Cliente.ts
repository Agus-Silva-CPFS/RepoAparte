import { Persona } from "./Persona";

export class Cliente extends Persona{
    private vipCliente:boolean;
    private visitasCliente:number;

    constructor(nombre:string,telefono:number){
        super(nombre,telefono);
        this.vipCliente = false;
        this.visitasCliente = 0;
    }
    public aumentarVisita(){
        this.visitasCliente++; 
        console.log('Gracias por su visita');
        if(this.visitasCliente>= 5){
            this.vipCliente = true;
            console.log('Felicidades se convirtio en Vip');
        }
    }
    public imprimirCliente(){
        console.log('nombre:' + super.getNombre()+ '\n' +  'telefono: '+super.getTelefono() + '\n' + 'id: '+super.getId());
    }
}