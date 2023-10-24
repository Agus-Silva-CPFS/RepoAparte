export class Paciente{
    private nombreAnimal:string;
    private especieAnimal:string;
    private id:number;

    constructor(nombreAnimal:string,especieAnimal:string){
        this.nombreAnimal = nombreAnimal;
        this.especieAnimal = especieAnimal;
        this.id = -1;
    }

    public getNombreAnimal():string{
        return this.nombreAnimal;
    }
    public setNombreAnimal(nombreAnimal:string){
        this.nombreAnimal = nombreAnimal;
    }

    public getEspecieAnimal():string{
        return this.especieAnimal;
    }
    public setEspecieAnimal(especie:string){
        if(especie.toUpperCase() == 'PERRO'){
            this.especieAnimal = especie;
        }else if(especie.toUpperCase() == 'GATO'){
            this.especieAnimal = especie;
        }else{
            this.especieAnimal = 'Exotica';
        }
        
    }
    public getId():number{
        return this.id;
    }
    public setId(id:number){
        this.id = id;
    }

}