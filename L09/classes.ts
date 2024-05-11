namespace classes {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        
        let canvas = document.querySelector<HTMLCanvasElement>("canvas");

        // überprüfen, ob Canvas gefunden wurde
        if (!canvas) {
            console.error("Canvas-Element wurde nicht gefunden!");
            return;
        }

        let crc2 = canvas.getContext("2d");

        if (!crc2) {
            console.error("2D-Kontext konnte nicht initialisiert werden");
            return;
        }

        // Wiese
        crc2.fillStyle = "#008000"; //grün
        crc2.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

        //Himmel
        crc2.fillStyle = "#87CEEB"; //blau
        crc2.fillRect(0, 0, canvas.width, canvas.height / 2);

        // Berge zeichnen
        drawMountain(crc2, -50, canvas.height / 2, 350, 250);
        drawMountain(crc2, 200, canvas.height / 2, 250, 225);
        drawMountain(crc2, 400, canvas.height / 2, 300, 150);
        drawMountain(crc2, 575, canvas.height / 2, 300, 250);

        function drawMountain(crc2: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
            crc2.fillStyle = "#808080"; // Grau
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + width / 2, y - height);
            crc2.lineTo(x + width, y);
            crc2.closePath();
            crc2.fill();
        }

        //Teich zeichnen
        drawPond(crc2, canvas.width / 2, (canvas.height / 2) + (canvas.height / 4));

        function drawPond(crc2: CanvasRenderingContext2D, centerX: number, centerY: number) {
            crc2.fillStyle = "#74D0f1"; // blau
            let radiusX = 350;
            let radiusY = 100;
            crc2.beginPath();
            crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
        }
    }

    

   

}