namespace classes{
    window.addEventListener("load", handleLoad);
    
        export let crc2: CanvasRenderingContext2D;
        let clouds: Cloud[] = [];
       // let bushes:Bush[] = [];
       
        function handleLoad(_event: Event): void {

            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
                return;
            crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
            

            //Wolke zufällig
            for (let i: number = 0; i < 6; i++){
                let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200)
                clouds.push(cloud);
            }

      /*      let bush: Bush = new Bush();
        console.log(bush);
        bush.draw();
        bushes.push(bush); */
        
    
    
            drawBackround();
            setInterval(animate, 40);
        }   
    
        function animate(): void {
                console.log("animate");
                drawBackround();
            for (let i: number = 0; i < 10; i++) {
                clouds[i].move();
                clouds[i].draw();
            }
        }
    
        function drawBackround(): void {
                fillBackground();
                drawMountain();
                drawPond();
            }
    
        // Hintergrund
        function fillBackground(): void {
        
            // Himmel
            let skycolor: string = "#48BCE1"; 
            crc2.fillStyle = skycolor;
            crc2.fillRect(0, 0, 700, 250);

            // Wiese
            let meadowcolor: string = "#008000"; 
            crc2.fillStyle = meadowcolor;
            crc2.fillRect(0, 250, 700, 350);
        }
    
    
        //BERGE
        function drawMountain(): void {

            // 1. Berg
            crc2.beginPath();
            crc2.moveTo(-50, 250);
            crc2.lineTo(100, 150); // Erste Ecke 
            crc2.lineTo(250, 250); // Zweite Ecke 
            crc2.closePath();

            let mountainone: string = "#808080"; 
            crc2.fillStyle = mountainone;
            crc2.fill();

            // 2. Berg
            crc2.beginPath();
            crc2.moveTo(100, 250);
            crc2.lineTo(250, 100); // Erste Ecke 
            crc2.lineTo(400, 250); // Zweite Ecke 
            crc2.closePath();
    
            let mountaintwo: string = "#808080"; 
            crc2.fillStyle = mountaintwo;
            crc2.fill();

            // 3. Berg
            crc2.beginPath();
            crc2.moveTo(300, 250);
            crc2.lineTo(450, 50); // Erste Ecke 
            crc2.lineTo(600, 250); // Zweite Ecke 
            crc2.closePath();
        
            let mountainthree: string = "#808080"; 
            crc2.fillStyle = mountainthree;
            crc2.fill();

             // 4. Berg
             crc2.beginPath();
             crc2.moveTo(550, 250);
             crc2.lineTo(650, 100); // Erste Ecke 
             crc2.lineTo(750, 250); // Zweite Ecke 
             crc2.closePath();
         
             let mountainfour: string = "#808080"; 
             crc2.fillStyle = mountainfour;
             crc2.fill();
        }

            //TEICH
        function drawPond(): void {
            // Größe des Teichs
            let centerX: number = 350;
            let centerY: number = 375;
            let radiusX: number = 225; 
            let radiusY: number = 70;  
        
            // Teich zeichnen
            crc2.beginPath();
            crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            crc2.closePath();
        
            // Farbe
            let pondcolor: string = "#87CEEB";
            crc2.fillStyle = pondcolor;
            crc2.fill();
        }
        
    }
        
    
        
        
        
        
        
        
        
        
    












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