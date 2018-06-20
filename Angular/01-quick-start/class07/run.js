"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var Horse_1 = require("./Horse");
var animalDao_1 = require("../class08/animalDao");
var a = new animal_1.Animal('Rex');
a.move(5);
var h = new Horse_1.Horse('Power');
h.move(100);
var dao = new animalDao_1.AnimalDao();
var animal = new animal_1.Animal('Rex');
dao.insert(animal);
//# sourceMappingURL=run.js.map