namespace classes {
    export class Insect {
        x: number;
        y: number;
        speedX: number;
        speedY: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.speedX = Math.random() * 2 + 1; // zufällige Geschwindigkeit x
            this.speedY = Math.random() * 2 - 1; // Zufällige Geschwindigkeit y
        }

        move(): void {
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

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Insekt zeichnen
            // Rechter Flügel
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(5, -10);
            crc2.lineTo(10, 0);
            crc2.closePath();
            crc2.fillStyle = "lightblue";
            crc2.fill();

            // Linker Flügel 
            crc2.save();
            crc2.scale(-1, 1); 
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(5, -10);
            crc2.lineTo(10, 0);
            crc2.closePath();
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.restore(); 

            // Körper
            crc2.beginPath();
            crc2.arc(0, 0, 3, 0, Math.PI * 2);
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.restore();
        }
    }
}
