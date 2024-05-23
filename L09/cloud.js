"use strict";
var classes;
(function (classes) {
    class Cloud {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            console.log("cloud move");
            this.x += 1;
            if (this.x > 700) { // Canvas-Breite
                this.x = -100; // Wolke fängt links an
            }
        }
        draw() {
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
            // Wolke zeichnen
            classes.crc2.beginPath();
            classes.crc2.arc(30, 20, 20, 0, Math.PI * 2); // Links
            classes.crc2.arc(60, 25, 25, 0, Math.PI * 2); // Mitte
            classes.crc2.arc(90, 20, 20, 0, Math.PI * 2); // Rechts
            classes.crc2.bezierCurveTo(100, 40, 50, 45, 30, 20);
            let cloudcolor = "white";
            classes.crc2.fillStyle = cloudcolor;
            classes.crc2.fill();
            classes.crc2.restore();
        }
    }
    classes.Cloud = Cloud;
})(classes || (classes = {}));
//# sourceMappingURL=cloud.js.map