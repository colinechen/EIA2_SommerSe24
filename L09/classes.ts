namespace classes{
    window.addEventListener("load", handleLoad);
    
        export let crc2: CanvasRenderingContext2D;
        let clouds: Cloud[] = [];
        let bushes: Bush[] = [];
        let huts: Hut[] = [];
        let ducks: Duck[] = [];
        let trees: Tree[] = [];
       
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
            //Enten 
            for (let i: number = 0; i < 5; i++) {
                let duck: Duck = new Duck(Math.random() * 500, 250 + Math.random() * 200);
                ducks.push(duck);
            }
            

            //Busch
            let bush: Bush = new Bush(575, 400);
               bush.draw();
               bushes.push(bush);

            //Hütte
            let hut: Hut = new Hut(150, 200);
               hut.draw();
               huts.push(hut);

            //Enten
            let duck: Duck = new Duck(100, 500,);
               duck.draw();
               ducks.push(duck);
               

            //Bäume
            let tree: Tree = new Tree(600, 275);
               tree.draw();
               trees.push(tree); 
        
    
    
            drawBackround();
            setInterval(animate, 40);
        }   
    
        function animate(): void {
                console.log("animate");
                drawBackround();
            for (let i: number = 0; i < 6; i++) {
                clouds[i].move();
                clouds[i].draw();
            }
            for (let i: number = 0; i < 1; i++) {
                bushes[i].draw();
            }
            for (let i: number = 0; i < 1; i++) {
                huts[i].draw();
            }
            for (let i: number = 0; i < 1; i++) {
                trees[i].draw(); 
            }
            for (let i: number = 0; i < ducks.length; i++) {
                ducks[i].move();
                ducks[i].draw();
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