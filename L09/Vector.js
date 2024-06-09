"use strict";
var classes;
(function (classes) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        normalize() {
            let length = Math.sqrt(this.x * this.x + this.y * this.y);
            this.x /= length;
            this.y /= length;
            return this;
        }
    }
    classes.Vector = Vector;
})(classes || (classes = {}));
//# sourceMappingURL=Vector.js.map