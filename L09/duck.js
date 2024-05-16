"use strict";
var classes;
(function (classes) {
    class Duck {
        x;
        y;
        direction;
        speed;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.direction = 1; // Richtung
            this.speed = 1;
        }
        move() {
            // Ente bewegt sich innerhalb bestimmten Bereichs
            if (this.x <= 300 || this.x >= 400) {
                this.direction *= -1; // Richtung umkehren, wenn Bereich erreicht
            }
            this.x += this.direction * this.speed; // Bewegung 
            // Zufällige änderung y-Position
            let randomYChange = Math.random() * 2 - 1;
            this.y += randomYChange;
            // Begrenzung Bewegung y Richtung
            if (this.y < 300) { // untere Grenze
                this.y = 300;
            }
            else if (this.y > 400) { // obere grenze
                this.y = 400;
            }
        }
        draw() {
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
            // Körper der Ente
            classes.crc2.beginPath();
            classes.crc2.ellipse(15, 15, 10, 5, 0, 0, Math.PI * 2);
            classes.crc2.fillStyle = "yellow";
            classes.crc2.fill();
            classes.crc2.closePath();
            // Kopf der Ente
            classes.crc2.beginPath();
            classes.crc2.arc(22, 10, 4, 0, Math.PI * 2);
            classes.crc2.fillStyle = "yellow";
            classes.crc2.fill();
            classes.crc2.closePath();
            // Schnabel der Ente
            classes.crc2.beginPath();
            classes.crc2.moveTo(26, 10);
            classes.crc2.lineTo(32, 8);
            classes.crc2.lineTo(32, 12);
            classes.crc2.closePath();
            classes.crc2.fillStyle = "orange";
            classes.crc2.fill();
            // Flügel der Ente
            classes.crc2.beginPath();
            classes.crc2.moveTo(12, 12);
            classes.crc2.lineTo(17, 8);
            classes.crc2.lineTo(22, 12);
            classes.crc2.closePath();
            classes.crc2.fillStyle = "yellow";
            classes.crc2.fill();
            classes.crc2.restore();
        }
    }
    classes.Duck = Duck;
})(classes || (classes = {}));
//# sourceMappingURL=duck.js.map