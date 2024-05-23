"use strict";
var classes;
(function (classes) {
    class Bird {
        x;
        y;
        speed;
        constructor(_x, _y, _speed) {
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
        }
        move() {
            console.log("bird move");
            this.x += this.speed; // Geschwindigkeit
            if (this.x > 700) { // Canvas-Breite 
                this.x = -100; // Vogel auf linker seite
                this.y = Math.random() * 150 + 50; // zufällige Positionierung
            }
        }
        draw() {
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
            // Körper
            classes.crc2.beginPath();
            classes.crc2.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
            classes.crc2.fillStyle = "#92664A";
            classes.crc2.fill();
            classes.crc2.closePath();
            // Kopf 
            classes.crc2.beginPath();
            classes.crc2.arc(7, -5, 4, 0, Math.PI * 2);
            classes.crc2.fillStyle = "#92664A";
            classes.crc2.fill();
            classes.crc2.closePath();
            // Schnabel 
            classes.crc2.beginPath();
            classes.crc2.moveTo(11, -5);
            classes.crc2.lineTo(17, -7);
            classes.crc2.lineTo(17, -3);
            classes.crc2.closePath();
            classes.crc2.fillStyle = "orange";
            classes.crc2.fill();
            // Auge 
            classes.crc2.beginPath();
            classes.crc2.arc(9, -5, 1.5, 0, Math.PI * 2);
            classes.crc2.fillStyle = "black";
            classes.crc2.fill();
            classes.crc2.closePath();
            // Flügel 
            classes.crc2.beginPath();
            classes.crc2.moveTo(-3, 0);
            classes.crc2.lineTo(2, -5);
            classes.crc2.lineTo(7, 0);
            classes.crc2.closePath();
            classes.crc2.fillStyle = "#5A270F";
            classes.crc2.fill();
            classes.crc2.restore();
        }
    }
    classes.Bird = Bird;
})(classes || (classes = {}));
//# sourceMappingURL=bird.js.map