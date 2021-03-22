import { Personnages } from "./personnages.js";
import { returnRandomNb } from "../fonctions.js";


export class Heros extends Personnages {
    constructor(nom, pv, attaque) {
        super(nom, pv, attaque);

        this.arme = this.getWeapon();
    }
    getWeapon() {
        //Créer un objet avec le nom est les dégats d'une arme
        //on pourra ainsi enlever l'arme du constructeur et le générer en début de combat
        let newWeapon;
        let weapons = [
            { nom: "bout de bois", degats: 1 },
            { nom: "couteau", degats: 10 },
            { nom: "épée de la mort qui tue", degats: 20 },
            { nom: "Super Kamehameha", degats: 50 },
        ];

        newWeapon = returnRandomNb(0, weapons.length - 1);

        return weapons[newWeapon]
    }
    getCaracteristique() {
        let weapon = this.getWeapon()
        console.log(`
        Voici notre combattant : 
            - nom : ${this.nom}
            - PV : ${this.pv}
            - arme : ${weapon.nom} 
            - dégats : ${weapon.degats + this.attaque}
            `)
    }

}
