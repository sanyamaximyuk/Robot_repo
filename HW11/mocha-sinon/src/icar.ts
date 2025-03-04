export interface ICar {
    cruiseControl: number;
    engineType: string;

    toAccelerate(): void;
    adaptiveCruiseControl(speed: number): void;
}
