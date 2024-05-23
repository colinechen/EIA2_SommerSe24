"use strict";
var classes;
(function (classes) {
    class Insect {
        x;
        y;
        speedX;
        speedY;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.speedX = Math.random() * 2 + 1; // zufällige Geschwindigkeit x
            this.speedY = Math.random() * 2 - 1; // Zufällige Geschwindigkeit y
        }
        move() {
            console.log("insect move");
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > 700 || this.y < 0 || this.y > 600) {
                this.x = -50; // insekt fängt links wieder an
                this.y = Math.random() * 600; // zufällige Position y
                this.speedX = Math.random() * 2 + 1; //zufällige Geschwindigkeit x
                this.speedY = Math.random() * 2 - 1; // zufällige Geschwindigkeit y
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
//# sourceMappingURL=insect.js.map