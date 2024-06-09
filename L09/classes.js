"use strict";
var classes;
(function (classes) {
    window.addEventListener("load", handleLoad);
    let moveable = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        classes.crc2 = canvas.getContext("2d");
        // Wolken
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * 500;
            let y = Math.random() * 175;
            let speed = new classes.Vector(1, 0);
            let cloud = new classes.Cloud(x, y, speed);
            moveable.push(cloud);
        }
        // Vögel
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * 700;
            let y = Math.random() * 175 + 75;
            let speed = new classes.Vector(Math.random() * 2 + 1, 0); // zufällige Geschwindigkeit
            let bird = new classes.Bird(x, y, speed);
            moveable.push(bird);
        }
        // Enten
        for (let i = 0; i < 5; i++) {
            let x = 200 + Math.random() * 300;
            let y = 300 + Math.random() * 150;
            let direction = new classes.Vector(1, 0); // Richtung nach rechts
            let speed = new classes.Vector(2, 0); // Geschwindigkeit
            let duck = new classes.Duck(x, y, direction, speed); // Position Teich
            moveable.push(duck);
        }
        // Insekten
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * 700;
            let y = Math.random() * 450 + 200;
            let speed = new classes.Vector(Math.random() * 2 + 1, Math.random() * 2 - 1); // zufällige Geschwindigkeit
            let insect = new classes.Insect(x, y);
            insect.speed = speed;
            moveable.push(insect);
        }
        drawBackround();
        setInterval(animate, 40);
    }
    // ANIMATE FUNKTION
    function animate() {
        drawBackround();
        for (let moveables of moveable) {
            moveables.draw();
            moveables.move();
        }
    }
    //HINTERGRUND
    function drawBackround() {
        fillBackground();
        drawMountain();
        drawPond();
        drawBush(575, 400);
        drawBush(50, 300);
        drawHut();
        drawTree(600, 275);
        drawTree(275, 225);
    }
    function fillBackground() {
        let skycolor = "#48BCE1";
        classes.crc2.fillStyle = skycolor;
        classes.crc2.fillRect(0, 0, 700, 250);
        let meadowcolor = "#008000";
        classes.crc2.fillStyle = meadowcolor;
        classes.crc2.fillRect(0, 250, 700, 350);
    }
    //BERGE
    function drawMountain() {
        classes.crc2.beginPath();
        classes.crc2.moveTo(100, 250);
        classes.crc2.lineTo(250, 100);
        classes.crc2.lineTo(400, 250);
        classes.crc2.closePath();
        classes.crc2.fillStyle = "#656565";
        classes.crc2.fill();
        classes.crc2.beginPath();
        classes.crc2.moveTo(-50, 250);
        classes.crc2.lineTo(100, 150);
        classes.crc2.lineTo(250, 250);
        classes.crc2.closePath();
        classes.crc2.fillStyle = "#808080";
        classes.crc2.fill();
        classes.crc2.beginPath();
        classes.crc2.moveTo(550, 250);
        classes.crc2.lineTo(650, 100);
        classes.crc2.lineTo(750, 250);
        classes.crc2.closePath();
        classes.crc2.fillStyle = "#656565";
        classes.crc2.fill();
        classes.crc2.beginPath();
        classes.crc2.moveTo(300, 250);
        classes.crc2.lineTo(450, 50);
        classes.crc2.lineTo(600, 250);
        classes.crc2.closePath();
        classes.crc2.fillStyle = "#808080";
        classes.crc2.fill();
    }
    //TEICH
    function drawPond() {
        let centerX = 350;
        let centerY = 375;
        let radiusX = 225;
        let radiusY = 70;
        classes.crc2.beginPath();
        classes.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        classes.crc2.closePath();
        let pondcolor = "#87CEEB";
        classes.crc2.fillStyle = pondcolor;
        classes.crc2.fill();
    }
    //BUSCH
    function drawBush(_x, _y) {
        classes.crc2.save();
        classes.crc2.translate(_x, _y);
        // Busch zeichnen
        classes.crc2.beginPath();
        classes.crc2.arc(40, 30, 20, 0, Math.PI * 2); // Kreis 1
        classes.crc2.arc(55, 25, 22, 0, Math.PI * 2); // Kreis 2
        classes.crc2.arc(70, 30, 20, 0, Math.PI * 2); // Kreis 3
        classes.crc2.arc(40, 35, 20, 0, Math.PI * 2); // Kreis 4
        classes.crc2.arc(60, 35, 20, 0, Math.PI * 2); // Kreis 5
        classes.crc2.arc(65, 28, 18, 0, Math.PI * 2); // Kreis 6
        classes.crc2.arc(45, 28, 18, 0, Math.PI * 2); // Kreis 7
        classes.crc2.arc(60, 30, 20, 0, Math.PI * 2); // Kreis 8
        classes.crc2.arc(50, 25, 20, 0, Math.PI * 2); // Kreis 9
        classes.crc2.arc(65, 33, 20, 0, Math.PI * 2); // Kreis 10
        classes.crc2.arc(55, 35, 18, 0, Math.PI * 2); // Kreis 11
        let bushColor = "darkgreen";
        classes.crc2.fillStyle = bushColor;
        classes.crc2.fill();
        classes.crc2.restore();
    }
    //HÜTTE
    function drawHut() {
        classes.crc2.save();
        classes.crc2.translate(150, 200);
        let hutColor = "#553b32";
        classes.crc2.fillStyle = hutColor;
        classes.crc2.fillRect(0, 40, 70, 50); // Rechteck
        // Dach 
        classes.crc2.beginPath();
        classes.crc2.moveTo(0, 40);
        classes.crc2.lineTo(35, 0);
        classes.crc2.lineTo(70, 40);
        classes.crc2.closePath();
        let hutRoof = "#3d2b24";
        classes.crc2.fillStyle = hutRoof;
        classes.crc2.fill();
        classes.crc2.restore();
    }
    //BÄUME
    function drawTree(_x, _y) {
        classes.crc2.save();
        classes.crc2.translate(_x, _y);
        // Baumstamm 
        classes.crc2.fillStyle = "#8B4513"; // Braun
        classes.crc2.fillRect(12, 5, 15, 50);
        // Baumkrone
        classes.crc2.beginPath();
        classes.crc2.arc(10, -20, 20, 0, Math.PI * 2); // Kreis 1
        classes.crc2.arc(25, -15, 22, 0, Math.PI * 2); // Kreis 2
        classes.crc2.arc(10, -10, 20, 0, Math.PI * 2); // Kreis 3
        classes.crc2.arc(25, -25, 18, 0, Math.PI * 2); // Kreis 4
        classes.crc2.arc(17, -25, 15, 0, Math.PI * 2); // Kreis 5
        classes.crc2.closePath();
        let treeColor = "darkgreen";
        classes.crc2.fillStyle = treeColor;
        classes.crc2.fill();
        classes.crc2.restore();
    }
})(classes || (classes = {}));
//# sourceMappingURL=classes.js.map