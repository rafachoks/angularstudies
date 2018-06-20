import { Animal } from "./animal";

export class Horse extends Animal{
    constructor(nome: string){
        super(nome);
    }


    public move(distance: number):void{
        console.log('galopando');
        super.move(50);
    }

    public setAnimalName(name: string): string{
        return 'Parthunax'
    }

    public isDangerousAnimal(specie: string): boolean{
        if(specie == 'predator')
        {
            return true;
        }else{
            return false;
        }
    }
}
