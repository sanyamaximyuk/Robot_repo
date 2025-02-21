import { Car, Bike, Engine, ElectricEngine } from './abstraction';

const petrolCar = new Car(new Engine());
const electricCar = new Car(new ElectricEngine());
const sportBike = new Bike(new Engine());

console.log('object manipulations:\n');

console.log('Petrol car:');
petrolCar.startEngine();
petrolCar.move();
console.log('\n');

console.log('Electric car:');
electricCar.startEngine();
electricCar.move();
console.log('\n');

console.log('Bike:');
sportBike.startEngine();
sportBike.move();
console.log('\n');

console.log('Engine change:');
(electricCar as Car).engine = new Engine();
electricCar.startEngine();
electricCar.move();
