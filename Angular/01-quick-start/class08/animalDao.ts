import { DaoInterface } from "./dao.interface";

export class AnimalDao implements DaoInterface {
    
    tablename: string;
    
    insert(object: any): boolean {
        throw new Error("Method not implemented.");
    }
    update(object: any, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
    find(id: number) {
        throw new Error("Method not implemented.");
    }
    findAll() {
        throw new Error("Method not implemented.");
    }
}