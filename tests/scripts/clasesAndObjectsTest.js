//--------------------Object--------------------
console.log("--------------------Object--------------------");
let antColonyObj = {
    id: 1,
    health: 100,
    queenAnts: 3,
    workerAnts: 120,
    soldierAnts: 30,

    getInfo: () => {
        return `The antcolony "${antColonyObj.id}" (raw object) has ${antColonyObj.health} health and is composed by:
        - ${antColonyObj.queenAnts} Queens
        - ${antColonyObj.workerAnts} Workers
        - ${antColonyObj.soldierAnts} Soldiers`;
    }
}

console.log(antColonyObj.getInfo());
//--------------------Constructor--------------------
console.log("--------------------Constructor--------------------");
function AntColonyConstructor (id = 0, queenAnts = 1, workerAnts = 5, soldierAnts = 0) {
    this.id = id;
    this.healt = 100;
    this.queenAnts = queenAnts;
    this.workerAnts = workerAnts;
    this.soldierAnts = soldierAnts;

    this.getInfo = () => {
        return `The antcolony "${this.id}" (intantiated by constructor) has ${this.health} health and is composed by:
        - ${this.queenAnts} Queens
        - ${this.workerAnts} Workers
        - ${this.soldierAnts} Soldiers`;
    }
}

let antColony2 = new AntColonyConstructor (2);
console.log(antColony2.getInfo());

let antColony3 = new AntColonyConstructor (3, 2, 200, 10);
console.log(antColony3.getInfo());

//--------------------Prototype--------------------
console.log("--------------------Prototype--------------------");

let creature = {
    isDead: false,

    killCreature() {
        this.isDead = true;
    },
}

let colony = {
    resources: [],
    storeResource (resource) {
        this.resources = [resource];
    },
    __proto__: creature,
}
console.log("---antColonies prototypes---");
let antColony4 = new AntColonyConstructor (4);
Object.setPrototypeOf(antColony4, colony);

console.log("2. antColony2 prototype:", Object.getPrototypeOf(antColony2));
console.log("1. antColony2 prototype prototype:", Object.getPrototypeOf(antColony2.__proto__));
console.log("0. Object prototype:", Object.getPrototypeOf(antColony2.__proto__.__proto__));

console.log("3. antColony4 prototype:", Object.getPrototypeOf(antColony4));
console.log("2. antColony4 prototype prototype:", Object.getPrototypeOf(antColony4.__proto__));
console.log("1. antColony4 prototype prototype prototype:", Object.getPrototypeOf(antColony4.__proto__.__proto__));
console.log("0. Object prototype:", Object.getPrototypeOf(antColony4.__proto__.__proto__.__proto__));

Object.setPrototypeOf(antColony2, colony);
console.log("antColony2 prototype changed to colony:", Object.getPrototypeOf(antColony2));

console.log("---antColonies inherited 'isDead' property---");
antColony4.killCreature();
console.log("antColony2:",antColony2.isDead);
console.log("antColony3:",antColony3.isDead);
console.log("antColony4:",antColony4.isDead);

console.log("---antColonies inherited 'resources' property with a pushed element---");
antColony2.resources.push("gravel");
console.log("antColony2:",antColony2.resources);
console.log("antColony4:",antColony4.resources);

console.log("---antColonies inherited 'resources' property with an added element---");
antColony2.storeResource("leafs");
console.log("antColony2:",antColony2.resources);
console.log("antColony4:",antColony4.resources);

/*If you assing a prototype like PrototypeA = PrototypeB, 
you will be replacing the methods of the prototype to all sub prototypes.
with Object.setPrototypeof() every subprototype makes a copy, so yo can edit
the methods of a sub prototype without editing it for the others,
but use this method before creating any objects*/

//--------------------Class--------------------
console.log("--------------------Class--------------------");

//--------------------Factory--------------------
console.log("--------------------Factory--------------------");

