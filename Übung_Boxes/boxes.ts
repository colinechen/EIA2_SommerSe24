namespace Boxes {
    debugger;
    let n: number = 5;
    let color: string;
    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50;
        x = (x + 170) % 400;
        switch (i) {
            case 0:
                color = "#ff0000"; //wenn i = 0 dann rot
                break;
            case 1:
            case 4:     //wenn i = 1 oder 4 dann grün
                color = "#00ff00";
                break;
            case 3: // Farbe wird nicht geändert und schleifendurchlauf fortgefahren
                continue;
            default:       // wenn i nicht 0,1,3,4 entspricht, dann blau
                color = "#0000ff";
        }
        
        for (let size of ["big", "medium", "small"]) {
            createBox(color, x, y, size);
            if (i == 4)
                break;
        }
    }


    function createBox(_color: string, _x: number, _y: number, _size: string): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size);
        div.style.backgroundColor = _color;
        div.style.left = _x + "px";
        div.style.top = _y + "px";
    }
}