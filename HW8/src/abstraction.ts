export abstract class Vehicle {
    public engine: Engine;

    public constructor(engine: Engine) {
        this.engine = engine;
    }

    public abstract move(): void;

    public startEngine(): void {
        this.engine.start();
    }
}

export class Engine {
    public start(): void {
        console.log('Engine started');
    }
}

export class ElectricEngine extends Engine {
    public start(): void {
        console.log('Electric engine started without noise');
    }
}

export class Car extends Vehicle {
    public move(): void {
        console.log('Car drives');
    }
}

export class Bike extends Vehicle {
    public move(): void {
        console.log('Bike drives');
    }
}

const petrolCar = new Car(new Engine());
const electricCar = new Car(new ElectricEngine());
const sportBike = new Bike(new Engine());

petrolCar.startEngine();
petrolCar.move();
electricCar.startEngine();
electricCar.move();

sportBike.startEngine();
sportBike.move();
