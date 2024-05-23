"use strict";
var classes;
(function (classes) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let huts = [];
    let bushes = [];
    let ducks = [];
    let trees = [];
    let insects = [];
    let birds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        classes.crc2 = canvas.getContext("2d");
        // Wolke zufällig
        for (let i = 0; i < 6; i++) {
            let cloud = new classes.Cloud(Math.random() * 500, Math.random() * 175);
            clouds.push(cloud);
        }
        // Vögel
        for (let i = 0; i < 5; i++) {
            let bird = new classes.Bird(Math.random() * 700, Math.random() * 175 + 75, Math.random() * 2 + 1); // zufällige Positionierung/Geschwindigkeit
            birds.push(bird);
        }
        // Enten
        for (let i = 0; i < 5; i++) {
            let duck = new classes.Duck(200 + Math.random() * 300, 300 + Math.random() * 150); // Position im pond
            ducks.push(duck);
        }
        // Insekten
        for (let i = 0; i < 10; i++) {
            let insect = new classes.Insect(Math.random() * 700, Math.random() * 450 + 200); // Position auf Wiese
            insects.push(insect);
        }
        // Busch
        let bush = new classes.Bush(575, 400);
        bush.draw();
        bushes.push(bush);
        // Busch 2
        let bush2 = new classes.Bush(50, 300);
        bush2.draw();
        bushes.push(bush2);
        // Hütte
        let hut = new classes.Hut(150, 200);
        hut.draw();
        huts.push(hut);
        // Baum
        let tree = new classes.Tree(600, 275);
        tree.draw();
        trees.push(tree);
        // Baum 2
        let tree2 = new classes.Tree(275, 225);
        tree.draw();
        trees.push(tree2);
        drawBackround();
        setInterval(animate, 40);
    }
    //ANIMATE FUNKTION
    function animate() {
        drawBackround();
        for (let i = 0; i < clouds.length; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        //busch, hütte, baum
        bushes.forEach(bush => bush.draw());
        huts.forEach(hut => hut.draw());
        trees.forEach(tree => tree.draw());
        //enten
        for (let i = 0; i < ducks.length; i++) {
            ducks[i].move();
            ducks[i].draw();
        }
        //insekten
        for (let i = 0; i < insects.length; i++) {
            insects[i].move();
            insects[i].draw();
        }
        //vögel
        for (let i = 0; i < birds.length; i++) {
            birds[i].move();
            birds[i].draw();
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
    // BERGE
    function drawMountain() {
        // 2. Berg
        classes.crc2.beginPath();
        classes.crc2.moveTo(100, 250);
        classes.crc2.lineTo(250, 100); // Erste Ecke 
        classes.crc2.lineTo(400, 250); // Zweite Ecke 
        classes.crc2.closePath();
        let mountaintwo = "#656565";
        classes.crc2.fillStyle = mountaintwo;
        classes.crc2.fill();
        // 1. Berg
        classes.crc2.beginPath();
        classes.crc2.moveTo(-50, 250);
        classes.crc2.lineTo(100, 150); // Erste Ecke 
        classes.crc2.lineTo(250, 250); // Zweite Ecke 
        classes.crc2.closePath();
        let mountainone = "#808080";
        classes.crc2.fillStyle = mountainone;
        classes.crc2.fill();
        // 4. Berg
        classes.crc2.beginPath();
        classes.crc2.moveTo(550, 250);
        classes.crc2.lineTo(650, 100); // Erste Ecke 
        classes.crc2.lineTo(750, 250); // Zweite Ecke 
        classes.crc2.closePath();
        let mountainfour = "#656565";
        classes.crc2.fillStyle = mountainfour;
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
    }
    // TEICH
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
        let pondcolor = "#87CEEB";
        classes.crc2.fillStyle = pondcolor;
        classes.crc2.fill();
    }
})(classes || (classes = {}));
/*
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
        
    }  */ 
//# sourceMappingURL=classes.js.map