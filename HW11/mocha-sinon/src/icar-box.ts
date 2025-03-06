export interface ICarBox {
    power: number;
    maxSpeed: number;
    kmsPerFullTank: number;

    getDimensions(): string;
}
