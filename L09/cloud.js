"use strict";
var classes;
(function (classes) {
    class Cloud extends classes.Moveable {
        constructor(_x, _y, _speed) {
            super(_x, _y, _speed);
        }
        move() {
            this.x += 1;
            //  super.move();
            if (this.x > 700) { // Canvas-Breite
                this.x = -100; // Wolke fängt links an
            }
        }
        draw() {
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
            // Wolke zeichnen
            classes.crc2.beginPath();
            classes.crc2.arc(30, 20, 20, 0, Math.PI * 2); // links
            classes.crc2.arc(60, 25, 25, 0, Math.PI * 2); // mitte
            classes.crc2.arc(90, 20, 20, 0, Math.PI * 2); // rechts
            classes.crc2.bezierCurveTo(100, 40, 50, 45, 30, 20);
            let cloudcolor = "white";
            classes.crc2.fillStyle = cloudcolor;
            classes.crc2.fill();
            classes.crc2.restore();
        }
    }
    classes.Cloud = Cloud;
})(classes || (classes = {}));
//# sourceMappingURL=Cloud.js.map