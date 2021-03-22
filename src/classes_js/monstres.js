import { Personnages } from "./personnages.js";
import { returnRandomNb } from "../fonctions.js";


export class Monstres extends Personnages {
    constructor(nom, pv, attaque) {
        super(nom, pv, attaque);

        this.armure = this.getShield();
    }
    getShield() {
        //créer un objet avec le nom et les dégats du bouclier
        //on pourra ainsi enlever l'armure du constructeur et le générer en début de combat
        let newShield;
        let shields = [
            { nom: "Sac de patate", protection: 5 },
            { nom: "gilet par balle", protection: 15 },
            { nom: "Armure en métal", protection: 30 },
            { nom: "Armure Iron MAN", protection: 75 },
        ];

        newShield = returnRandomNb(0, shields.length - 1);


        return shields[newShield]
    }
    getCaracteristique() {
        let shield = this.getShield()
        console.log(`
        Voici notre combattant : 
            - nom : ${this.nom}
            - PV : ${this.pv}
            - arme : ${shield.nom} 
            - dégats : ${this.attaque}
            `)
    }
}