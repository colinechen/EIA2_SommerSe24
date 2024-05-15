namespace classes {
    export class Cloud {
        x: number;
        y: number;

        constructor(_x: number, _y: number){
            this.x = _x;
            this.y = _y;
        }

        

        move():void{
            console.log("cloud move");
            this.x +=1;
        }
        
        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);
        
            // Wolke zeichnen
            crc2.beginPath();
            crc2.arc(30, 20, 20, 0, Math.PI * 2); // Links
            crc2.arc(60, 25, 25, 0, Math.PI * 2); // Mitte
            crc2.arc(90, 20, 20, 0, Math.PI * 2); // Rechts
            crc2.bezierCurveTo(100, 40, 50, 45, 30, 20);
        
            let cloudcolor: string = "white";
            crc2.fillStyle = cloudcolor;
            crc2.fill();
        
            crc2.restore();
        }

        
        
        }
    }


