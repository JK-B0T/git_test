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

console.log("2. antColony2 prototype:", Object.getPrototypeOf(antColony2));
console.log("1. AntColonyConstructor prototype:", Object.getPrototypeOf(antColony2.__proto__));
console.log("0. Object prototype:", Object.getPrototypeOf(antColony2.__proto__.__proto__));

Object.setPrototypeOf(antColony2, creature);
console.log("antColony2 prototype changed to creature:", Object.getPrototypeOf(antColony2));

let antColony4 = new AntColonyConstructor (4);
Object.setPrototypeOf(antColony4, creature);
antColony4.killCreature();

console.log("antColony2 inherited 'isDead' property:", antColony2.isDead, Object.getPrototypeOf(antColony2));
console.log("antColony3 inherited 'isDead' property:", antColony3.isDead, Object.getPrototypeOf(antColony3));
console.log("antColony4 inherited 'isDead' property:", antColony4.isDead, Object.getPrototypeOf(antColony4));

//--------------------Class--------------------
console.log("--------------------Class--------------------");

//--------------------Factory--------------------
console.log("--------------------Factory--------------------");

