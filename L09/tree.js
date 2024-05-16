"use strict";
var classes;
(function (classes) {
    class Tree {
        x;
        y;
        color;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            console.log("tree draw");
            classes.crc2.save();
            classes.crc2.translate(this.x, this.y);
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
    }
    classes.Tree = Tree;
})(classes || (classes = {}));
//# sourceMappingURL=tree.js.map