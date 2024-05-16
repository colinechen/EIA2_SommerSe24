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
            this.speed = 1; 
        }

        move(): void {
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
            } else if (this.y > 400) { // obere grenze
                this.y = 400;
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Körper der Ente
            crc2.beginPath();
            crc2.ellipse(15, 15, 10, 5, 0, 0, Math.PI * 2);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();

            // Kopf der Ente
            crc2.beginPath();
            crc2.arc(22, 10, 4, 0, Math.PI * 2);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();

            // Schnabel der Ente
            crc2.beginPath();
            crc2.moveTo(26, 10);
            crc2.lineTo(32, 8);
            crc2.lineTo(32, 12);
            crc2.closePath();
            crc2.fillStyle = "orange";
            crc2.fill();

            // Flügel der Ente
            crc2.beginPath();
            crc2.moveTo(12, 12);
            crc2.lineTo(17, 8);
            crc2.lineTo(22, 12);
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.fill();

            crc2.restore();
            }

           
        }
    }
