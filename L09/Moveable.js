"use strict";
var classes;
(function (classes) {
    class Moveable {
        x;
        y;
        speed;
        constructor(_x, _y, _speed) {
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
        }
        draw() {
        }
        move() {
        }
    }
    classes.Moveable = Moveable;
})(classes || (classes = {}));
//# sourceMappingURL=Moveable.js.map