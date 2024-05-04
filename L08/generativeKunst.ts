namespace GenerativeKunst {
  
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        // canvas finden
        let canvas = document.querySelector<HTMLCanvasElement>("canvas");
        // Überprüft ob canvas gefunden wurde
        if (!canvas) {
            console.error("Canvas-Element wurde nicht gefunden!");
            return;
        }
        // 2D kontext finden
        let crc2 = canvas.getContext("2d");
       
        if (!crc2) {
            console.error("2D-Kontext konnte nicht initialisiert werden");
            return;
        }

        // generierung der Kunst
        generateArt(crc2, canvas);
    }

    // wählt zufällig zwischen lila und türkis
    function getRandomColor(): string {
        let colors = ['#c084fc', '#5ce1e6']; //Lila/Türkis
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Zeichnet zufällige Linie 
    function drawLine(crc2: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        // zufällige Start- und Endpunkte
        let x0 = Math.random() * canvas.width;
        let y0 = Math.random() * canvas.height;
        let x1 = Math.random() * canvas.width;
        let y1 = Math.random() * canvas.height;
        // Linienfarbe u. -breite
        crc2.strokeStyle = getRandomColor();
        crc2.lineWidth = Math.random() * 10;
        // zeichnung der linien
        crc2.beginPath();
        crc2.moveTo(x0, y0);
        crc2.lineTo(x1, y1);
        crc2.stroke();
    }

    // Zeichnet zufälligen Kreis
    function drawCircle(crc2: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        // zufällige Position und Radius
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 100;
        //Füllfarbe
        crc2.fillStyle = getRandomColor();
        // zeichnung von Kreis
        crc2.beginPath();
        crc2.arc(x, y, radius, 0, Math.PI * 2, false);
        crc2.fill();
    }

    // zufällige Kunst
    function generateArt(crc2: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        // Löscht für neue zeichnung bei aktualisierung
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        // Anzahl von Elementen
        let elementsCount = Math.floor(Math.random() * 100) + 50;
        // zufällige Mischung aus Linien u. Kreisen
        for (let i = 0; i < elementsCount; i++) {
            Math.random() > 0.5 ? drawLine(crc2, canvas) : drawCircle(crc2, canvas);
        }
    }
}
