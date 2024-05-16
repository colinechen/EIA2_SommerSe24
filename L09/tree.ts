namespace classes {

    export class Tree {
        x: number;
        y: number;
        color: string;
     

        constructor (_x:number, _y:number){
            this.x = _x;
            this.y = _y;
        }


    draw(): void {
        console.log("tree draw")
        crc2.save();
        crc2.translate(this.x, this.y);

            // Baumstamm 
            crc2.fillStyle = "#8B4513"; // Braun
            crc2.fillRect(12, 5, 15, 50);

            // Baumkrone
            crc2.beginPath();
            crc2.arc(10, -20, 20, 0, Math.PI * 2); // Kreis 1
            crc2.arc(25, -15, 22, 0, Math.PI * 2); // Kreis 2
            crc2.arc(10, -10, 20, 0, Math.PI * 2); // Kreis 3
            crc2.arc(25, -25, 18, 0, Math.PI * 2); // Kreis 4
            crc2.arc(17, -25, 15, 0, Math.PI * 2); // Kreis 5
            crc2.closePath();

            let treeColor: string = "darkgreen";
            crc2.fillStyle = treeColor;
            crc2.fill();

            crc2.restore();
        }
    }
} 