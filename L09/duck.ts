namespace classes {
    export class Duck extends Moveable {
       direction: Vector;

        constructor(_x: number, _y: number, _direction: Vector, _speed: Vector) {
            super(_x, _y, _speed);
            this.direction = _direction;
            
        }

        move(): void {
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
            } else if (this.y > 400) { // obere Grenze
                this.y = 400;
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.scale(this.direction.x, 1); // Spiegeln bei Richtungswechsel

            // Körper
            crc2.beginPath();
            crc2.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.arc(7, -5, 4, 0, Math.PI * 2);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();

            // Schnabel
            crc2.beginPath();
            crc2.moveTo(11, -5);
            crc2.lineTo(17, -7);
            crc2.lineTo(17, -3);
            crc2.closePath();
            crc2.fillStyle = "orange";
            crc2.fill();

            // Auge
            crc2.beginPath();
            crc2.arc(9, -5, 1.5, 0, Math.PI * 2);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            // Flügel
            crc2.beginPath();
            crc2.moveTo(-3, 0);
            crc2.lineTo(2, -5);
            crc2.lineTo(7, 0);
            crc2.closePath();
            crc2.fillStyle = "orange";
            crc2.fill();

            crc2.restore();
        }
    }
}