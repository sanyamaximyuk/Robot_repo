import { ICar } from './icar';
import { ICarBox } from './icar-box';

export class petrolCar implements ICar, ICarBox {
    private startSpeed: number;
    private finishSpeed: number;

    public get currentSpeed(): number {
        return this.finishSpeed;
    }

    public cruiseControl: number;
    public engineType: string;

    // ICarBox
    public power: number;
    public maxSpeed: number;
    public kmsPerFullTank: number;

    public constructor(speed: number, characteristics: string) {
        this.startSpeed = 40;
        this.finishSpeed = 110;
        this.cruiseControl = speed;
        this.engineType = 'petrol';
        const dimensions = characteristics.split(':');
        this.power = Number(dimensions[0]);
        this.maxSpeed = Number(dimensions[1]);
        this.kmsPerFullTank = Number(dimensions[2]);
    }

    public toAccelerate(): void {
        for (let i = this.startSpeed; i < 150; i += 5) {
            if (i < this.cruiseControl) {
                this.startSpeed += 5;
            }
        }

    }

    public adaptiveCruiseControl(speed: number): void {
        for (let i = this.startSpeed; i < 150; i += 5) {
            if (i < speed) {
                this.startSpeed += 5;
            }
        }
    }

    public getDimensions(): string {
        return `${this.power}:${this.maxSpeed}:${this.kmsPerFullTank}`;
    }
}
