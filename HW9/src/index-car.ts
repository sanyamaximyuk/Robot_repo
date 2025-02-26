import { ElectricCar } from './electric-car';
import { petrolCar } from './petrol-car';
import { ICar } from './icar';
import { ICarBox } from './icar-box';

const tesla = new ElectricCar(20, '350:180:300');

tesla.toAccelerate();

console.log('Current speed is: ' + tesla.currentSpeed);

function adaptiveCruiseControl(car: ICar): void {
    car.adaptiveCruiseControl(90);
}

const bmw = new petrolCar(110, '240:250:600');

adaptiveCruiseControl(tesla);
console.log('Tesla speed is: ' + tesla.currentSpeed);

adaptiveCruiseControl(bmw);
console.log('BMW speed is: ' + bmw.currentSpeed);

// ICP
console.log('-----ICP-----');
function getCarDimensions(car: ICarBox): void {
    console.log(car.getDimensions());
}

getCarDimensions(tesla);
getCarDimensions(bmw);
