namespace classes {
    export class Duck {
        x: number;
        y: number;
        direction: number;
        speed: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.direction = 1; // Richtung
            this.speed = 2; // Geschwindigkeit
        }

        move(): void {
            // begrenzung Teich (x)
            let pondLeft = 175; // Links
            let pondRight = 500; // Rechts

            // Ente bewegt innerhalb teich
            if (this.x <= pondLeft || this.x >= pondRight) {
                this.direction *= -1; // Richtung umkehren
            }
            this.x += this.direction * this.speed; // Bewegung

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
            crc2.scale(this.direction, 1); // Spiegeln bei wechsel

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