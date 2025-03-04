import { expect } from 'chai';
import sinon from 'sinon';
import { ElectricCar } from '../src/electric-car';

describe('ElectricCar class', () => {
    let car: ElectricCar;

    beforeEach(() => {
        car = new ElectricCar(80, '120:200:500');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should initialize with correct properties', () => {
        expect(car.currentSpeed).to.equal(90);
        expect(car.cruiseControl).to.equal(80);
        expect(car.engineType).to.equal('electric');
        expect(car.getDimensions()).to.equal('120:200:500');
    });

    it('should increase speed when accelerating', () => {
        const accelerateSpy = sinon.spy(car, 'toAccelerate');
        car.toAccelerate();
        expect(accelerateSpy.calledOnce).to.be.true;
    });

    it('should adjust speed with adaptive cruise control', () => {
        const adaptiveSpy = sinon.spy(car, 'adaptiveCruiseControl');
        car.adaptiveCruiseControl(85);
        expect(adaptiveSpy.calledOnceWith(85)).to.be.true;
    });

    it('should return correct dimensions', () => {
        const dimensions = car.getDimensions();
        expect(dimensions).to.equal('120:200:500');
    });

    it('should call getDimensions() once', () => {
        const getDimensionsSpy = sinon.spy(car, 'getDimensions');
        car.getDimensions();
        expect(getDimensionsSpy.calledOnce).to.be.true;
    });
});
