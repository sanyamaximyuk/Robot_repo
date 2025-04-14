import { BeforeAll } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/rd-world.ts';

export function globalContextHook(): void {
    BeforeAll(async function() {
        RobotDreamsWorld.globalContext = new Map();
    });
}
