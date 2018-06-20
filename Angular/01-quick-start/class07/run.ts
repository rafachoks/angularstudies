import { Animal } from "./animal";
import { Horse } from "./Horse";
import { DaoInterface } from "../class08/dao.interface";
import { AnimalDao } from "../class08/animalDao";

let a = new Animal('Rex');
a.move(5);

let h = new Horse('Power')
h.move(100);


let dao: DaoInterface = new AnimalDao();
let animal = new Animal('Rex');

dao.insert(animal)