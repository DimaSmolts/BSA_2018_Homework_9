import { Fighter } from "./Fighter.js";

export class ImprovedFighter extends Fighter {

    constructor(name, health, power) {
        super(name, health, power);
    }

    DoubleHit(enemy, point) {
        this.Hit(enemy, point * 2);
    }
}