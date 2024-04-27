namespace Einkaufsliste {
    export interface Produkt {
        Ware: string;
        Menge: number;
        Einheit: string;
        Kommentar: string;
        letzterKauf: string;
        gekauft: boolean;
    }

    export let data: Produkt[] = [
        {Ware: "Brot", Menge: 2, Einheit: "Stück", Kommentar: "Glutenfrei", letzterKauf: "21-04-2024", gekauft: true},
        {Ware: "Milch", Menge: 3, Einheit: "Packungen", Kommentar: "Hafermilch", letzterKauf: "", gekauft: false},
        {Ware: "Tomaten", Menge: 1, Einheit: "Packungen", Kommentar: "Bio", letzterKauf: "", gekauft: false},
    ];

    
}