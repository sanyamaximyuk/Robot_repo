import { describe, it, expect, vi, beforeEach } from 'vitest';
import { petrolCar } from '../src/petrol-car';

describe('petrolCar class', () => {
    let car: petrolCar;

    beforeEach(() => {
        car = new petrolCar(90, '150:220:600');
    });

    it('should initialize with correct properties', () => {
        expect(car.currentSpeed).toBe(110);
        expect(car.cruiseControl).toBe(90);
        expect(car.engineType).toBe('petrol');
        expect(car.getDimensions()).toBe('150:220:600');
    });

    it('should increase speed when accelerating', () => {
        const spy = vi.spyOn(car, 'toAccelerate');
        car.toAccelerate();
        expect(spy).toHaveBeenCalled();
    });

    it('should adjust speed with adaptive cruise control', () => {
        const spy = vi.spyOn(car, 'adaptiveCruiseControl');
        car.adaptiveCruiseControl(100);
        expect(spy).toHaveBeenCalledWith(100);
    });

    it('should return correct dimensions', () => {
        const spy = vi.spyOn(car, 'getDimensions').mockReturnValue('150:220:600');
        expect(car.getDimensions()).toBe('150:220:600');
        expect(spy).toHaveBeenCalled();
    });

    it('should call adaptiveCruiseControl with the correct speed', () => {
        const mockFn = vi.fn();
        car.adaptiveCruiseControl = mockFn;
        car.adaptiveCruiseControl(120);
        expect(mockFn).toHaveBeenCalledWith(120);
    });
});
