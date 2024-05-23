namespace classes {
    export class Bird {
        x: number;
        y: number;
        speed: number;

        constructor(_x: number, _y: number, _speed: number) {
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
        }

        move(): void {
            console.log("bird move");
            this.x += this.speed; // Geschwindigkeit

           
            if (this.x > 700) { // Canvas-Breite 
                this.x = -100; // Vogel auf linker seite
                this.y = Math.random() * 150 + 50; // zufällige Positionierung
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

           // Körper
           crc2.beginPath();
           crc2.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
           crc2.fillStyle = "#92664A";
           crc2.fill();
           crc2.closePath();

           // Kopf 
           crc2.beginPath();
           crc2.arc(7, -5, 4, 0, Math.PI * 2);
           crc2.fillStyle = "#92664A";
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
           crc2.fillStyle = "#5A270F";
           crc2.fill();

            crc2.restore();
        }
    }
}
