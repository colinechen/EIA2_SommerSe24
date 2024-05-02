"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    document.addEventListener('DOMContentLoaded', () => {
        const neuButton = document.querySelector('.neu');
        neuButton.addEventListener('click', neuesProdukt);
        generateContent(Einkaufsliste.data);
        //Event Listener click erstellt neues Produkt wenn aktiviert
        function neuesProdukt() {
            const container = document.getElementById('neuesProdukt');
            const neuesDiv = document.createElement('div');
            neuesDiv.className = 'box';
            // Auswahl Containers, in den neues Div erstellt wird wenn event listener auslöst
            neuesDiv.innerHTML = `
                <form>
                    Ware<br>
                    <input type="text" name="Ware" id="box"><br>
                    Menge<br>
                    <input type="number" name="Menge" id="box"><br>
                    Einheit<br>
                    <input type="text" name="Einheit" id="box"><br>
                    Kommentar<br>
                    <input type="text" name="kommentar" id="box"><br>
                    letzter Kauf<br>
                    <input type="date" name="letzter Kauf" id="box"><br>
                    gekauft<input type="checkbox" name="gekauft" id="box">
                    löschen<input type="button" name="löschen" id="box">
                </form>
            `; //Bestimmung der inneren HTML der neuen Div 
            if (container) {
                container.appendChild(neuesDiv);
            } //neuer container wird maincontainer zugewiesen
            const loeschenButton = neuesDiv.querySelector('.loeschen');
            loeschenButton.addEventListener('click', () => {
                console.log("Das Produkt wird gelöscht");
                if (container && neuesDiv) {
                    container.removeChild(neuesDiv);
                } // funktion hinzugefügt -> divs gelöscht
            });
            const inputs = neuesDiv.querySelectorAll('input, select');
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    console.log(`Eingabe in Feld ${input.id}: Wurde hinzugefügt`);
                }); //event handler für eingaben ins neue div
            });
        }
    });
    //Funktion und Schleife, um Produkt in Liste/Container hinzuzufügen
    function generateContent(_data) {
        const container = document.getElementById("Produkt");
        if (container) {
            for (let Produkt of _data) {
                addEintrag(Produkt);
            }
        }
        //Eintrag in Liste erstellen
        function addEintrag(_data) {
            const EintragDiv = document.getElementById("Produkt");
            //ID für neuen Eintrag
            const eintragId = "Eintrag_" + Date.now();
            //HTML für neuen Eintrag
            const newEintrag = `
            <div class="box" id=${eintragId}>
                <span class="box">${_data.Ware}</span>
                <div class="box">
                    <label for="Menge${eintragId}">Menge</label>
                    <input type="number" name="Ware" id="Menge${eintragId}" list="numbers" class="smallerInput" value="${_data.Menge}">
                </div>
                <div class="box">
                    <span> </span>
                    <span id="letzterKauf${eintragId}">${_data.letzterKauf}</span>
                </div>
                <div class="box">
                    <label for="Kommentar${eintragId}">Kommentar</label>
                    <input type="textarea" name="Kommentar" id="Kommentar${eintragId}" value="${_data.Kommentar}">
                </div>
                <div class="box">
                    <label for="gekauft${eintragId}">gekauft</label>
                    <input type="checkbox" name="gekauft" id="gekauft${eintragId}" ${_data.gekauft ? "gekauft" : ""}>
                </div>
                <button type="button" class="neu" id="löschen${eintragId}">-</button>
            </div>
        `;
            let testDiv = document.createElement("div");
            EintragDiv.appendChild(testDiv);
            //Eintrag in DOM einfügen
            testDiv.insertAdjacentHTML("beforeend", newEintrag);
            //LÖschen-Button auswählen + Event Handling für Click
            let newEintragButton = document.querySelector("#löschen" + eintragId);
            function deleteEintrag(_event) {
                let newEntry = document.querySelector("#" + eintragId);
                newEntry.remove();
            }
            newEintragButton.addEventListener("click", deleteEintrag);
        }
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=formElement.js.map