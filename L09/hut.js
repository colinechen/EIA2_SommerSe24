"use strict";
var classes;
(function (classes) {
    class Hut {
        x;
        y;
        color;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            console.log("hut draw");
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
            // Hütte zeichnen
            // Körper 
            let hutColor = "#553b32";
            classes.crc2.fillStyle = hutColor;
            classes.crc2.fillRect(0, 40, 70, 50); // Rechteck
            // Dach 
            classes.crc2.beginPath();
            classes.crc2.moveTo(0, 40); // Linke Ecke 
            classes.crc2.lineTo(35, 0); // Spitze 
            classes.crc2.lineTo(70, 40); // Rechte 
            classes.crc2.closePath();
            let hutRoof = "#3d2b24";
            classes.crc2.fillStyle = hutRoof;
            classes.crc2.fill();
            classes.crc2.restore();
        }
    }
    classes.Hut = Hut;
})(classes || (classes = {}));
//# sourceMappingURL=hut.js.map