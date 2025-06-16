// This is to practice the OOP principles in JavaScript.
// OOP : Class, Encapsulation, Inheritance, Polymoprphism

export class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo() {
        console.log(`${this.#brand} ${this.#model} ${this.isTrunkOpen}`);
    }

    go() {
        if (this.isTrunkOpen) {
            return;
        }

        this.speed += 5;

        if (this.speed > 200) {
            this.speed = 200;
        }
    }

    brake() {
        this.speed -= 5;

        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk() {
        this.isTrunkOpen = true;

        if (this.speed > 0) {
            this.isTrunkOpen = false;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

export class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }
    go() {

        this.speed += this.acceleration;

        if (this.speed > 300) {
            this.speed = 300;
        }
    }

    openTrunk() {
        return '';
    }

    closeTrunk() {
        return '';
    }
}

const type1 = new Car({ brand: 'Toyota', model: 'Corolla' });
const type2 = new Car({ brand: 'Tesla', model: 'Model 3' });
console.log(type1);
console.log(type2);

type1.displayInfo();
type2.displayInfo();


type1.go();
type1.go();
type1.brake();
console.log(type1);


const type3 = new RaceCar({ brand: 'McLaren', model: "F1", acceleration: 20 });
console.log(type3);

type3.go();
type3.go();
type3.go();
type3.go();
type3.brake();
console.log(type3);

