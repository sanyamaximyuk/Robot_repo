import { petrolCar } from 'src/petrol-car';

describe('PetrolCar class', () => {
    let car: petrolCar;
    beforeEach(() => {
        car = new petrolCar(90, '150:220:600');
    });

    test('should initialize with correct properties', () => {
        expect(car.currentSpeed).toBe(110);
        expect(car.cruiseControl).toBe(90);
        expect(car.engineType).toBe('petrol');
        expect(car.getDimensions()).toBe('150:220:600');
    });

    test('should increase speed when accelerating', () => {
        car.toAccelerate();
        expect(car.currentSpeed).toBeGreaterThanOrEqual(90);
    });

    test('should adjust speed with adaptive cruise control', () => {
        car.adaptiveCruiseControl(100);
        expect(car.currentSpeed).toBeGreaterThanOrEqual(100);
    });

    test('should return correct dimensions', () => {
        expect(car.getDimensions()).toBe('150:220:600');
    });
});
