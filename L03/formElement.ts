namespace Einkaufsliste {
   

    document.addEventListener('DOMContentLoaded', () => {
        const neuButton = document.querySelector('.neu') as HTMLButtonElement;
        neuButton.addEventListener('click', neuesProdukt); 
        generateContent(data);  
        //Event Listener click erstellt neues Produkt wenn aktiviert

        function neuesProdukt() {
            const container = document.querySelector('main');
            const neuesDiv = document.createElement('div');
            neuesDiv.className = 'box';
            // Auswahl Containers, in den neues Div erstellt wird wenn event listener auslöst
            neuesDiv.innerHTML = `
                <form>
                    Ware<br>
                    <input type="text" name="Ware" id="Ware"><br>
                    Menge<br>
                    <input type="number" name="Menge" id="Menge"><br>
                    Einheit<br>
                    <input type="text" name="Einheit" id="Einheit"><br>
                    Kommentar<br>
                    <input type="text" name="kommentar" id="kommentar"><br>
                    letzter Kauf<br>
                    <input type="date" name="letzter Kauf" id="letzterKauf"><br>
                    gekauft<input type="checkbox" name="gekauft" id="gekauft">
                    löschen<input type="button" name="löschen" class="loeschen">
                </form>
            `;  //Bestimmung der inneren HTML der neuen Div 

            if (container) {
                container.appendChild(neuesDiv);
            }//neuer container wird maincontainer zugewiesen

            const loeschenButton = neuesDiv.querySelector('.loeschen') as HTMLButtonElement;
            loeschenButton.addEventListener('click', () => {
                console.log("Das Produkt wird gelöscht");
                if (container && neuesDiv) {
                    container.removeChild(neuesDiv);
                }// funktion hinzugefügt -> divs gelöscht
            });

            const inputs = neuesDiv.querySelectorAll('input, select') as NodeListOf<HTMLInputElement | HTMLSelectElement>;
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    console.log(`Eingabe in Feld ${input.id}: Wurde hinzugefügt`);
                });//event handler für eingaben ins neue div
            });
        }
    });

    //Funktion und Schleife, um Produkt in Liste/Container hinzuzufügen
    function generateContent(_data: Produkt[]) {
        const container = document.getElementById("Produkt");
    if (container) {
        for (let Produkt of _data){
            addEintrag(Produkt)                   
        }
    }
        //Eintrag in Liste erstellen
        function addEintrag(_data: Produkt) {
        const EintragDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("Produkt");

        //ID für neuen Eintrag
        const eintragId: string = "Eintrag_" + Date.now();

        //HTML für neuen Eintrag
        const newEintrag: string = `
            <div class="Ware" id=${eintragId}>
                <span class="Produkt">${_data.Ware}</span>
                <div class="MengeDiv">
                    <label for="Menge${eintragId}">Menge</label>
                    <input type="number" name="Ware" id="Menge${eintragId}" list="numbers" class="smallerInput" value="${_data.Menge}">
                </div>
                <div class="letzterKaufDiv">
                    <span> </span>
                    <span id="letzterKauf${eintragId}">${_data.letzterKauf}</span>
                </div>
                <div class="KommentarDiv">
                    <label for="Kommentar${eintragId}">Kommentar</label>
                    <input type="textarea" name="Kommentar" id="Kommentar${eintragId}" value="${_data.Kommentar}">
                </div>
                <div class="gekauftDiv">
                    <label for="gekauft${eintragId}">gekauft</label>
                    <input type="checkbox" name="gekauft" id="gekauft${eintragId}" ${_data.gekauft ? "gekauft": ""}>
                </div>
                <button type="button" class="löschen" id="löschen${eintragId}">-</button>
            </div>
        `;

        //Eintrag in DOM einfügen
        EintragDiv.insertAdjacentHTML("beforeend", newEintrag);

        //LÖschen-Button auswählen + Event Handling für Click
        let newEintragButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#löschen" + eintragId);

        function deleteEintrag(_event: MouseEvent): void {
            let newEntry: HTMLDivElement = <HTMLDivElement>document.querySelector("#" + eintragId);
            newEntry.remove();
        }

        newEintragButton.addEventListener("click", deleteEintrag);
    }
} 
}

