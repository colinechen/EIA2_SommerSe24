"use strict";
var classes;
(function (classes) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let bushes = [];
    let huts = [];
    let ducks = [];
    let trees = [];
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
        //Enten 
        for (let i = 0; i < 5; i++) {
            let duck = new classes.Duck(Math.random() * 500, 250 + Math.random() * 200);
            ducks.push(duck);
        }
        //Busch
        let bush = new classes.Bush(575, 400);
        bush.draw();
        bushes.push(bush);
        //Hütte
        let hut = new classes.Hut(150, 200);
        hut.draw();
        huts.push(hut);
        //Enten
        let duck = new classes.Duck(100, 500);
        duck.draw();
        ducks.push(duck);
        //Bäume
        let tree = new classes.Tree(600, 275);
        tree.draw();
        trees.push(tree);
        drawBackround();
        setInterval(animate, 40);
    }
    function animate() {
        console.log("animate");
        drawBackround();
        for (let i = 0; i < 6; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        for (let i = 0; i < 1; i++) {
            bushes[i].draw();
        }
        for (let i = 0; i < 1; i++) {
            huts[i].draw();
        }
        for (let i = 0; i < 1; i++) {
            trees[i].draw();
        }
        for (let i = 0; i < ducks.length; i++) {
            ducks[i].move();
            ducks[i].draw();
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
//# sourceMappingURL=classes.js.map