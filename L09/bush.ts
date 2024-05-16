namespace classes {
    export class Bush {
        x: number;
        y: number;
        color: string;
     

        constructor (_x:number, _y:number){
            this.x = _x;
            this.y = _y;
        }


    draw(): void {
        console.log("bush draw")
        crc2.save();
        crc2.translate(this.x, this.y);
    
        // Busch zeichnen
        crc2.beginPath();
        crc2.arc(40, 30, 20, 0, Math.PI * 2); // Kreis 1
        crc2.arc(55, 25, 22, 0, Math.PI * 2); // Kreis 2
        crc2.arc(70, 30, 20, 0, Math.PI * 2); // Kreis 3
        crc2.arc(40, 35, 20, 0, Math.PI * 2); // Kreis 4
        crc2.arc(60, 35, 20, 0, Math.PI * 2); // Kreis 5
        crc2.arc(65, 28, 18, 0, Math.PI * 2); // Kreis 6
        crc2.arc(45, 28, 18, 0, Math.PI * 2); // Kreis 7
        crc2.arc(60, 30, 20, 0, Math.PI * 2); // Kreis 8
        crc2.arc(50, 25, 20, 0, Math.PI * 2); // Kreis 9
        crc2.arc(65, 33, 20, 0, Math.PI * 2); // Kreis 10
        crc2.arc(55, 35, 18, 0, Math.PI * 2); // Kreis 11
    
        let bushColor: string = "darkgreen";
        crc2.fillStyle = bushColor;
        crc2.fill();
    
        crc2.restore();
    }
}

} 