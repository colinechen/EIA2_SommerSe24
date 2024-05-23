namespace classes {
    export class Hut {
        x: number;
        y: number;
        color: string;
     

        constructor (_x:number, _y:number){
            this.x = _x;
            this.y = _y;
        }


    draw(): void {
        console.log("hut draw")
        crc2.save();
        crc2.translate(this.x, this.y);
    
                // Hütte zeichnen
    
                // Körper 
                let hutColor: string = "#553b32";
                crc2.fillStyle = hutColor;
                crc2.fillRect(0, 40, 70, 50); // Rechteck
    
                // Dach 
                crc2.beginPath();
                crc2.moveTo(0, 40); // Linke Ecke 
                crc2.lineTo(35, 0); // Spitze 
                crc2.lineTo(70, 40); // Rechte 
                crc2.closePath();

                let hutRoof: string = "#3d2b24";
                crc2.fillStyle = hutRoof;
                crc2.fill();
    
                crc2.restore();
            }
        }
}