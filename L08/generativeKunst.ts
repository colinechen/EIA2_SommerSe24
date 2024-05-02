namespace GenerativeKunst {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        const canvas = document.querySelector<HTMLCanvasElement>("canvas");
        if (!canvas) {
            console.error("Canvas-Element wurde nicht gefunden!");
            return;
        }
        const crc2 = canvas.getContext("2d");
        if (!crc2) {
            console.error("2D-Kontext konnte nicht initialisiert werden");
            return;
        }

        generateArt(crc2, canvas);
    }

    function getRandomColor(): string {
        const colors = ['#c084fc', '#5ce1e6']; // Lilan und Türkis
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function drawLine(crc2: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        const x0 = Math.random() * canvas.width;
        const y0 = Math.random() * canvas.height;
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        crc2.strokeStyle = getRandomColor();
        crc2.lineWidth = Math.random() * 10;
        crc2.beginPath();
        crc2.moveTo(x0, y0);
        crc2.lineTo(x1, y1);
        crc2.stroke();
    }

    function drawCircle(crc2: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 100;
        crc2.fillStyle = getRandomColor();
        crc2.beginPath();
        crc2.arc(x, y, radius, 0, Math.PI * 2, false);
        crc2.fill();
    }

    function generateArt(crc2: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        const elementsCount = Math.floor(Math.random() * 100) + 50;
        for (let i = 0; i < elementsCount; i++) {
            Math.random() > 0.5 ? drawLine(crc2, canvas) : drawCircle(crc2, canvas);
        }
    }
}
