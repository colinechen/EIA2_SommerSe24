"use strict";
var classes;
(function (classes) {
    class Insect extends classes.Moveable {
        constructor(_x, _y) {
            let speed = new classes.Vector(Math.random() * 2 + 1, Math.random() * 2 - 1); // zufällige Geschwindigkeit
            super(_x, _y, speed);
        }
        move() {
            console.log("insect move");
            this.x += this.speed.x;
            this.y += this.speed.y;
            if (this.x > 700 || this.y < 0 || this.y > 600) {
                this.x = -50; // Insekt fängt links wieder an
                this.y = Math.random() * 600; // zufällige Position y
                this.speed = new classes.Vector(Math.random() * 2 + 1, Math.random() * 2 - 1); // zufällige Geschwindigkeit
            }
        }
        draw() {
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
            // Insekt zeichnen
            // Rechter Flügel
            classes.crc2.beginPath();
            classes.crc2.moveTo(0, 0);
            classes.crc2.lineTo(5, -10);
            classes.crc2.lineTo(10, 0);
            classes.crc2.closePath();
            classes.crc2.fillStyle = "lightblue";
            classes.crc2.fill();
            // Linker Flügel 
            classes.crc2.save();
            classes.crc2.scale(-1, 1);
            classes.crc2.beginPath();
            classes.crc2.moveTo(0, 0);
            classes.crc2.lineTo(5, -10);
            classes.crc2.lineTo(10, 0);
            classes.crc2.closePath();
            classes.crc2.fillStyle = "lightblue";
            classes.crc2.fill();
            classes.crc2.restore();
            // Körper
            classes.crc2.beginPath();
            classes.crc2.arc(0, 0, 3, 0, Math.PI * 2);
            classes.crc2.fillStyle = "black";
            classes.crc2.fill();
            classes.crc2.restore();
        }
    }
    classes.Insect = Insect;
})(classes || (classes = {}));
//# sourceMappingURL=Insect.js.map