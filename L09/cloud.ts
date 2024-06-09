namespace classes {
    export class Cloud extends Moveable {

    constructor(_x: number, _y: number, _speed: Vector) {
        super(_x, _y, _speed);
        }

        move(): void {
            this.x += 1;
          //  super.move();
            if (this.x > 700) { // Canvas-Breite
                this.x = -100; // Wolke fängt links an
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Wolke zeichnen
            crc2.beginPath();
            crc2.arc(30, 20, 20, 0, Math.PI * 2); // links
            crc2.arc(60, 25, 25, 0, Math.PI * 2); // mitte
            crc2.arc(90, 20, 20, 0, Math.PI * 2); // rechts
            crc2.bezierCurveTo(100, 40, 50, 45, 30, 20);

            let cloudcolor: string = "white";
            crc2.fillStyle = cloudcolor;
            crc2.fill();

            crc2.restore();
        }
    }
}