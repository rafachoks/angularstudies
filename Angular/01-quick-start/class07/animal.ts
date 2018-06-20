export class Animal{
    private nome: string;

    constructor(nome: string){
        this.nome = nome;
    }


    public move(distance: number): void{
        console.log("this:" + this.nome +" move "+ distance );
    }

    public setAnimalName(name: string): string{
        this.nome = name;
        return this.nome;
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