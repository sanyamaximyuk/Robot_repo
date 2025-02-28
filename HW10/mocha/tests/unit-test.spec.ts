import { expect } from 'chai';
import { ElectricCar } from 'src/electric-car';

describe('Unit test suite', () => {
    describe('First-UT', () => {
        it('toAccelerate to 90 km/h', () => {
            const obj = new ElectricCar(90, '180:60:200');

            obj.toAccelerate();

            expect(obj.currentSpeed).to.be.equal(90);
        });

        it('adaptiveCruiseControl to 70 km/h', () => {
            const obj = new ElectricCar(70, '180:60:200');

            obj.adaptiveCruiseControl(70);

            expect(obj.currentSpeed).to.be.equal(70);
        });
    });

    describe('Second-UT-ElectricCar', () => {
        let car: ElectricCar;

        beforeEach(() => {
            car = new ElectricCar(50, '200:180:500');
        });

        it('should initialize with correct properties', () => {
            expect(car.currentSpeed).to.equal(90);
            expect(car.cruiseControl).to.equal(50);
            expect(car.engineType).to.equal('electric');
            expect(car.getDimensions()).to.equal('200:180:500');
        });

        it('should increase speed when accelerating', () => {
            car.toAccelerate();
            expect(car.currentSpeed).to.be.at.least(50);
        });

        it('should adjust speed with adaptive cruise control', () => {
            car.adaptiveCruiseControl(60);
            expect(car.currentSpeed).to.be.at.least(50);
        });

        it('should return correct dimensions', () => {
            expect(car.getDimensions()).to.equal('200:180:500');
        });
    });
});
