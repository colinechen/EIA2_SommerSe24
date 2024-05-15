"use strict";
var classes;
(function (classes) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    // let bushes:Bush[] = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        classes.crc2 = canvas.getContext("2d");
        //Wolke zufällig
        for (let i = 0; i < 6; i++) {
            let cloud = new classes.Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        /*      let bush: Bush = new Bush();
          console.log(bush);
          bush.draw();
          bushes.push(bush); */
        drawBackround();
        setInterval(animate, 40);
    }
    function animate() {
        console.log("animate");
        drawBackround();
        for (let i = 0; i < 10; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
    }
    function drawBackround() {
        fillBackground();
        drawMountain();
        drawPond();
    }
    // Hintergrund
    function fillBackground() {
        // Himmel
        let skycolor = "#48BCE1";
        classes.crc2.fillStyle = skycolor;
        classes.crc2.fillRect(0, 0, 700, 250);
        // Wiese
        let meadowcolor = "#008000";
        classes.crc2.fillStyle = meadowcolor;
        classes.crc2.fillRect(0, 250, 700, 350);
    }
    //BERGE
    function drawMountain() {
        // 1. Berg
        classes.crc2.beginPath();
        classes.crc2.moveTo(-50, 250);
        classes.crc2.lineTo(100, 150); // Erste Ecke 
        classes.crc2.lineTo(250, 250); // Zweite Ecke 
        classes.crc2.closePath();
        let mountainone = "#808080";
        classes.crc2.fillStyle = mountainone;
        classes.crc2.fill();
        // 2. Berg
        classes.crc2.beginPath();
        classes.crc2.moveTo(100, 250);
        classes.crc2.lineTo(250, 100); // Erste Ecke 
        classes.crc2.lineTo(400, 250); // Zweite Ecke 
        classes.crc2.closePath();
        let mountaintwo = "#808080";
        classes.crc2.fillStyle = mountaintwo;
        classes.crc2.fill();
        // 3. Berg
        classes.crc2.beginPath();
        classes.crc2.moveTo(300, 250);
        classes.crc2.lineTo(450, 50); // Erste Ecke 
        classes.crc2.lineTo(600, 250); // Zweite Ecke 
        classes.crc2.closePath();
        let mountainthree = "#808080";
        classes.crc2.fillStyle = mountainthree;
        classes.crc2.fill();
        // 4. Berg
        classes.crc2.beginPath();
        classes.crc2.moveTo(550, 250);
        classes.crc2.lineTo(650, 100); // Erste Ecke 
        classes.crc2.lineTo(750, 250); // Zweite Ecke 
        classes.crc2.closePath();
        let mountainfour = "#808080";
        classes.crc2.fillStyle = mountainfour;
        classes.crc2.fill();
    }
    //TEICH
    function drawPond() {
        // Größe des Teichs
        let centerX = 350;
        let centerY = 375;
        let radiusX = 225;
        let radiusY = 70;
        // Teich zeichnen
        classes.crc2.beginPath();
        classes.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        classes.crc2.closePath();
        // Farbe
        let pondcolor = "#87CEEB";
        classes.crc2.fillStyle = pondcolor;
        classes.crc2.fill();
    }
})(classes || (classes = {}));
/*

    window.addEventListener("load", handleLoad);
    
        export let crc2: CanvasRenderingContext2D;
        let clouds: Cloud[] = [];
       
        function handleLoad(_event: Event): void {
    
            // Zugriff auf das Canvas-Element
            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
                return;
            crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
            
            //Cloud random auf x und y zeichnen
            for (let i: number = 0; i < 10; i++){
                let cloud: Cloud = new Cloud(Math.random() * 500, 50 + Math.random() * 200)
                clouds.push(cloud);
            }

        
        setInterval(animate, 40);

        function animate(): void {
            console.log("animate");
            
        for (let i: number = 0; i < 10; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
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

    
} */ 
//# sourceMappingURL=classes.js.map