"use strict";
var classes;
(function (classes) {
    class Bush {
        x;
        y;
        color;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            console.log("bush draw");
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
            // Busch zeichnen
            classes.crc2.beginPath();
            classes.crc2.arc(40, 30, 20, 0, Math.PI * 2); // Kreis 1
            classes.crc2.arc(55, 25, 22, 0, Math.PI * 2); // Kreis 2
            classes.crc2.arc(70, 30, 20, 0, Math.PI * 2); // Kreis 3
            classes.crc2.arc(40, 35, 20, 0, Math.PI * 2); // Kreis 4
            classes.crc2.arc(60, 35, 20, 0, Math.PI * 2); // Kreis 5
            classes.crc2.arc(65, 28, 18, 0, Math.PI * 2); // Kreis 6
            classes.crc2.arc(45, 28, 18, 0, Math.PI * 2); // Kreis 7
            classes.crc2.arc(60, 30, 20, 0, Math.PI * 2); // Kreis 8
            classes.crc2.arc(50, 25, 20, 0, Math.PI * 2); // Kreis 9
            classes.crc2.arc(65, 33, 20, 0, Math.PI * 2); // Kreis 10
            classes.crc2.arc(55, 35, 18, 0, Math.PI * 2); // Kreis 11
            let bushColor = "darkgreen";
            classes.crc2.fillStyle = bushColor;
            classes.crc2.fill();
            classes.crc2.restore();
        }
    }
    classes.Bush = Bush;
})(classes || (classes = {}));
//# sourceMappingURL=bush.js.map