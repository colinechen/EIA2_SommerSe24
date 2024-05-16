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
    
                // Körper der Hütte
                let hutColor: string = "#8B4513";
                crc2.fillStyle = hutColor; // Braun
                crc2.fillRect(0, 40, 70, 50); // Rechteck
    
                // Dach der Hütte
                crc2.beginPath();
                crc2.moveTo(0, 40); // Linke Ecke 
                crc2.lineTo(35, 0); // Spitze 
                crc2.lineTo(70, 40); // Rechte 
                crc2.closePath();

                let hutRoof: string = "#A52A2A";
                crc2.fillStyle = hutRoof; // Dunkleres Braun
                crc2.fill();
    
                crc2.restore();
            }
        }
}