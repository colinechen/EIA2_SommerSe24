"use strict";
var classes;
(function (classes) {
    class Duck extends classes.Moveable {
        direction;
        constructor(_x, _y, _direction, _speed) {
            super(_x, _y, _speed);
            this.direction = _direction;
        }
        move() {
            // Begrenzung Teich
            let pondLeft = 185;
            let pondRight = 500;
            // Ente bewegt innerhalb teich
            if (this.x <= pondLeft || this.x >= pondRight) {
                this.direction.x *= -1; // Richtung umkehren
            }
            this.x += this.direction.x * this.speed.x; // Bewegung in x-Richtung
            // Begrenzung y-Richtung
            if (this.y < 325) { // untere Grenze
                this.y = 325;
            }
            else if (this.y > 400) { // obere Grenze
                this.y = 400;
            }
        }
        draw() {
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
            classes.crc2.scale(this.direction.x, 1); // Spiegeln bei Richtungswechsel
            // Körper
            classes.crc2.beginPath();
            classes.crc2.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
            classes.crc2.fillStyle = "yellow";
            classes.crc2.fill();
            classes.crc2.closePath();
            // Kopf
            classes.crc2.beginPath();
            classes.crc2.arc(7, -5, 4, 0, Math.PI * 2);
            classes.crc2.fillStyle = "yellow";
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
            classes.crc2.fillStyle = "orange";
            classes.crc2.fill();
            classes.crc2.restore();
        }
    }
    classes.Duck = Duck;
})(classes || (classes = {}));
//# sourceMappingURL=Duck.js.map