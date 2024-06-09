namespace classes {
    export class Insect extends Moveable {

        constructor(_x: number, _y: number) {
            let speed = new Vector(Math.random() * 2 + 1, Math.random() * 2 - 1); // zufällige Geschwindigkeit
            super(_x, _y, speed);
        }

        move(): void {
            console.log("insect move");
            this.x += this.speed.x;
            this.y += this.speed.y;

            if (this.x > 700 || this.y < 0 || this.y > 600) { 
                this.x = -50; // Insekt fängt links wieder an
                this.y = Math.random() * 600; // zufällige Position y
                this.speed = new Vector(Math.random() * 2 + 1, Math.random() * 2 - 1); // zufällige Geschwindigkeit
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