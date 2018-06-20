"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.move = function (distance) {
        console.log("this:" + this.nome + " move " + distance);
    };
    Animal.prototype.setAnimalName = function (name) {
        this.nome = name;
        return this.nome;
    };
    Animal.prototype.isDangerousAnimal = function (specie) {
        if (specie == 'predator') {
            return true;
        }
        else {
            return false;
        }
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map