export class Persona{
    private nombre:string;
    private telefono:number;
    private id:number;
    
    constructor(nombre:string,telefono:number){
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = -1;
    }

    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombrepersona:string){
        this.nombre = nombrepersona;
    }

    public getTelefono():number{
        return this.telefono;
    }
    public setTelefono(telefono:number){
        this.telefono = telefono;
    }

    public getId():number{
        return this.id;
    }
    public setId(id:number){
        this.id = id;
    }



}