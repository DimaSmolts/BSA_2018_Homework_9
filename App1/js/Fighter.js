export class Fighter {
    constructor(name = "DefaultName", power = 1, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }


    SetDamage(damage) {
        this.health = this.health - damage;
        console.log(`${ this.name } has ${ this.health } health now`)
    }

    Hit(enemy, point) {
        enemy.SetDamage(point * this.power)
    }

    // later
    Knockout() { }

}