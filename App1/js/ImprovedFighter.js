import { Fighter } from "./Fighter.js";

export class ImprovedFighter extends Fighter {

    DoubleHit(enemy, point) {
        this.Hit(enemy, point * 2);
    }
}