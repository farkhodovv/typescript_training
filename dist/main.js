/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animal.ts":
/*!***********************!*\
  !*** ./src/animal.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pet = exports.DomesticAnimal = exports.Animal = void 0;
// Животные
class Animal {
    constructor({ voice, maxLife, gender }) {
        this.voice = voice;
        this.maxLife = maxLife;
        this.gender = gender;
    }
    makeVoice() {
        return this.voice;
    }
}
exports.Animal = Animal;
// Домашние животные
class DomesticAnimal extends Animal {
    constructor(_a) {
        var args = __rest(_a, []);
        super(Object.assign({}, args));
    }
    feed(food) {
        return `Животное ${this.voice} съело еду(${food})`;
    }
}
exports.DomesticAnimal = DomesticAnimal;
// Питомцы
class Pet extends DomesticAnimal {
    constructor(_a) {
        var { name, owner = null } = _a, args = __rest(_a, ["name", "owner"]);
        super(args);
        this.commands = [];
        this.name = name;
        this.owner = owner;
    }
    get commandList() {
        return this.commands;
    }
    get getOwner() {
        if (!this.owner)
            return `нету владельца`;
        return this.owner;
    }
    setOwner(owner) {
        this.owner = owner;
    }
    addCommand(command) {
        if (this.commands.includes(command)) {
            return `${this.name} знает команду ${command}`;
        }
        this.commands.push(command);
        return `${this.name} выучил новую команду`;
    }
    doCommand(command) {
        if (!this.commands.includes(command)) {
            return `${this.name} не знает команду ${command}`;
        }
        return `${this.name} выполнил команду ${command}`;
    }
    feed(food) {
        return `${this.name} съел (${food})`;
    }
    walk() {
        return `${this.name} погулял`;
    }
}
exports.Pet = Pet;


/***/ }),

/***/ "./src/person.ts":
/*!***********************!*\
  !*** ./src/person.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PetOwner = exports.Person = void 0;
class Person {
    constructor({ name, birth }) {
        this.name = name;
        this.birth = birth;
    }
    get age() {
        const { year, month, day } = this.birth;
        const birthDate = new Date(year, month, day);
        var ageDifMs = Date.now() - birthDate.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
exports.Person = Person;
class PetOwner extends Person {
    constructor(args) {
        super(args);
        this.pets = [];
        this.lovelyPet = null;
    }
    get petsList() {
        return this.pets;
    }
    setLovelyPet(pet) {
        if (this.pets.includes(pet)) {
            this.lovelyPet = this.pets.find((el) => el === pet);
            return;
        }
        return `питомец нету в списке питомцов`;
    }
    get getlovelyPet() {
        if (this.lovelyPet)
            return this.lovelyPet;
        return "нету любимого питомца";
    }
    addPets(...petsList) {
        petsList.forEach((pet) => pet.setOwner(this.name));
        this.pets.push(...petsList);
    }
}
exports.PetOwner = PetOwner;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const animal_1 = __webpack_require__(/*! ./animal */ "./src/animal.ts");
const person_1 = __webpack_require__(/*! ./person */ "./src/person.ts");
const firstOwner = new person_1.PetOwner({
    name: "Navruz",
    birth: {
        day: 21,
        month: 3,
        year: 2000,
    },
});
const dog = new animal_1.Pet({
    name: "Casper",
    voice: "Wow",
    maxLife: 15,
    gender: 'male'
});
const cat = new animal_1.Pet({
    name: "Tom",
    voice: "Meow",
    maxLife: 8,
    gender: 'female'
});
const perrot = new animal_1.Pet({
    name: "Gosha",
    voice: "Whistle",
    maxLife: 5,
    gender: 'male'
});
dog.addCommand('sit');
dog.doCommand('sit');
dog.feed('lavash');
dog.walk();
cat.walk();
// firstOwner.addPets(dog, perrot, cat);
// firstOwner.petsList
// firstOwner.setLovelyPet(cat);
// firstOwner.getlovelyPet;

})();

/******/ })()
;