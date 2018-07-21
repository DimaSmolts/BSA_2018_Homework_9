import { Fighter } from './Fighter.js'
import { ImprovedFighter } from './ImprovedFighter.js';


async function fight(fighter,improvedFighter,...points) {
    
    var i = 0;
    while (fighter.health > 0 && improvedFighter.health > 0 && i < points.length) {


        if (i % 2 === 0) {
            fighter.Hit(improvedFighter, points[i]);
        }
        else {
            improvedFighter.DoubleHit(fighter, points[i]);
        }       
        i++;
    }

    if (fighter.health <= 0) {
        var prom = fighter.Knockout();
        await prom
            .then(successMessage => {
                console.log("time is over");
                console.log(successMessage);
                console.log("winner is " + improvedFighter.name);
            })
    } else if (improvedFighter.health <= 0) {
                var prom = improvedFighter.Knockout();
                await prom
                    .then(successMessage => {
                    console.log("time is over");
                    console.log(successMessage);
                    console.log("winner is " + fighter.name);
                })
    } else {
        console.log("out of points");
    }

    console.log("Battle ended");
}

var f1 = new Fighter("Man", 2, 100);
var f2 = new ImprovedFighter("God", 1 , 100);


console.clear();
console.log("start");
fight(f1, f2,14,16,22,22,15,15);
