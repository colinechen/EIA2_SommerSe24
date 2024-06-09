namespace classes {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let moveable: Moveable[] = [];
    

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // Wolken
        for (let i: number = 0; i < 6; i++) {
            let x = Math.random() * 500;
            let y = Math.random() * 175;
            let speed = new Vector(1, 0);
            let cloud: Cloud = new Cloud(x, y, speed);
            moveable.push(cloud);
        }

        // Vögel
        for (let i: number = 0; i < 5; i++) {
            let x = Math.random() * 700;
            let y = Math.random() * 175 + 75;
            let speed = new Vector(Math.random() * 2 + 1, 0); // zufällige Geschwindigkeit
            let bird: Bird = new Bird(x, y, speed);
            moveable.push(bird);
        }

        // Enten
        for (let i: number = 0; i < 5; i++) {
            let x = 200 + Math.random() * 300;
            let y = 300 + Math.random() * 150;
            let direction = new Vector(1, 0); // Richtung nach rechts
            let speed = new Vector(2, 0); // Geschwindigkeit
            let duck: Duck = new Duck(x, y, direction, speed); // Position Teich
            moveable.push(duck);
        }

        // Insekten
        for (let i: number = 0; i < 10; i++) { 
            let x = Math.random() * 700;
            let y = Math.random() * 450 + 200;
            let speed = new Vector(Math.random() * 2 + 1, Math.random() * 2 - 1); // zufällige Geschwindigkeit
            let insect: Insect = new Insect(x, y);
            insect.speed = speed;
            moveable.push(insect);
        }

        drawBackround();
        setInterval(animate, 40);
    }


    // ANIMATE FUNKTION
    function animate(): void {
        drawBackround();

        for (let moveables of moveable){
            moveables.draw();
            moveables.move();
        }
    }

    //HINTERGRUND
    function drawBackround(): void {
        fillBackground();
        drawMountain();
        drawPond();
        drawBush(575, 400);
        drawBush(50, 300);
        drawHut();
        drawTree(600, 275);
        drawTree(275, 225);
        
    }

    function fillBackground(): void {
        let skycolor: string = "#48BCE1";
        crc2.fillStyle = skycolor;
        crc2.fillRect(0, 0, 700, 250);

        let meadowcolor: string = "#008000";
        crc2.fillStyle = meadowcolor;
        crc2.fillRect(0, 250, 700, 350);
    }

    //BERGE
    function drawMountain(): void {
        crc2.beginPath();
        crc2.moveTo(100, 250);
        crc2.lineTo(250, 100);
        crc2.lineTo(400, 250);
        crc2.closePath();
        crc2.fillStyle = "#656565";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(-50, 250);
        crc2.lineTo(100, 150);
        crc2.lineTo(250, 250);
        crc2.closePath();
        crc2.fillStyle = "#808080";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(550, 250);
        crc2.lineTo(650, 100);
        crc2.lineTo(750, 250);
        crc2.closePath();
        crc2.fillStyle = "#656565";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(300, 250);
        crc2.lineTo(450, 50);
        crc2.lineTo(600, 250);
        crc2.closePath();
        crc2.fillStyle = "#808080";
        crc2.fill();
    }


    //TEICH
    function drawPond(): void {
        let centerX: number = 350;
        let centerY: number = 375;
        let radiusX: number = 225;
        let radiusY: number = 70;

        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();
        let pondcolor: string = "#87CEEB";
        crc2.fillStyle = pondcolor;
        crc2.fill();
    }

    //BUSCH
    function drawBush(_x: number, _y: number): void {
        crc2.save();
        crc2.translate(_x, _y);
    
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

    //HÜTTE
    function drawHut(): void {
        crc2.save();
        crc2.translate(150, 200);
    
            
                let hutColor: string = "#553b32";
                crc2.fillStyle = hutColor;
                crc2.fillRect(0, 40, 70, 50); // Rechteck
    
                // Dach 
                crc2.beginPath();
                crc2.moveTo(0, 40); 
                crc2.lineTo(35, 0); 
                crc2.lineTo(70, 40);
                crc2.closePath();

                let hutRoof: string = "#3d2b24";
                crc2.fillStyle = hutRoof;
                crc2.fill();
    
                crc2.restore();
    }

    //BÄUME
    function drawTree(_x: number, _y: number): void {
        crc2.save();
        crc2.translate(_x, _y);

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