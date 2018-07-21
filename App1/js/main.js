// Место для кода.
import { Fighter } from './Fighter.js'
import { ImprovedFighter } from './ImprovedFighter.js';



var f1 = new Fighter("dima", 2, 100);
var f2 = new ImprovedFighter("im_dima", 2, 100);

f1.Hit(f2, 10);
f2.DoubleHit(f1, 10);
