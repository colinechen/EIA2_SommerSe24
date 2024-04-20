"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    document.addEventListener('DOMContentLoaded', () => {
        //  'neu'ausgewählen und Variable zuweisen
        const neuButton = document.querySelector('.neu');
        //  Event-Listener reagiert auf Klicks auf Button 
        neuButton.addEventListener('click', neuesProdukt);
        function neuesProdukt() {
            // Kommentar in Konsole, wenn neues Produkt hinzugefügt wird
            console.log("Ein neues Produkt wird hinzugefügt");
            // Hauptcontainer wird Variable zugewiesen
            const container = document.querySelector('main');
            // Neues div-Element 
            const neuesDiv = document.createElement('div');
            neuesDiv.className = 'box';
            // Formularfelder für neues div-Element
            neuesDiv.innerHTML = `
                <form>
                    Ware
                    <br>
                    <input type="text" name="Ware" id="Ware">
                    <br>
                    Menge
                    <br>
                    <input type="number" name="Menge" id="Menge">
                    <br>
                    Einheit
                    <br>
                    <input type="text" name="Einheit" id="Einheit">
                    <br>
                    Kommentar
                    <br>
                    <input type="text" name="kommentar" id="kommentar">
                    <br>
                    letzter Kauf
                    <br>
                    <input type="date" name="letzter Kauf" id="letzter Kauf">
                    <br>
                    gekauft
                    <input type="checkbox" name="gekauft" id="gekauft">
                    löschen
                    <input type="button" name="löschen" class="loeschen">
                </form>
            `;
            // div-Element wird Hauptcontainer hinzugefügt
            if (container) {
                container.appendChild(neuesDiv);
            }
            // Event-Listener für den Löschen-Button
            const loeschenButton = neuesDiv.querySelector('.loeschen');
            loeschenButton.addEventListener('click', () => {
                // Kommentar in Konsole, wenn Produkt gelöscht wird
                console.log("Das Produkt wird gelöscht");
                // Produkt-Element aus Hauptcontainer entfernen (-> beide vorhanden)
                if (container && neuesDiv) {
                    container.removeChild(neuesDiv);
                }
            });
            // Event-Listener für Eingabefelder
            const inputs = neuesDiv.querySelectorAll('input, select');
            inputs.forEach(input => {
                // Event-Listener für jedes Eingabefeld
                input.addEventListener('input', () => {
                    // Kommentar in Konsole, Wenn Eingabe im Feld
                    console.log(`Eingabe in Feld ${input.id}: Wurde hinzugefügt`);
                });
            });
        }
    });
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=formElement.js.map