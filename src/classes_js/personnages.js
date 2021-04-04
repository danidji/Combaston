import { getRandomInt } from "../functions.js"

export class Personnages {
    constructor(nom, pv, attaque) {
        this.nom = nom;
        this.pv = pv;
        this.vitesse;
        this.attaque = attaque;
    }

    getPv() {
        console.log(`Moi ${this.nom}, il me reste encore ${this.pv} PV !!`);
    }
    fightTour(personnage) {
        //on enlève des pv la valeur de l'arme(si arme) + attaque - valeur de l'armure (si armure)
        let dammage = this.attaque;
        let critic = this.criticalStrike()

        if (this.arme !== undefined) {
            dammage += this.arme.degats;
        }
        if (personnage.armure !== undefined) {
            dammage -= personnage.armure.protection;
        }
        dammage *= critic;
        personnage.pv -= dammage;

        console.log(`
        ${this.nom} attaque ${personnage.nom}, 
        il lui inflige ${dammage} dégats,
        il ne reste plus que ${personnage.pv} PV à ${personnage.nom} !! `
        );
        console.log("-----------------------");
    }

    //Revoir cette fonction d'affichage des caractéritiques qui prend en compte que le combattant a une arme ou une armure

    criticalStrike() {
        //a réfléchir
        //A chaque tour le joueur qui attaque à une chance de déclencher un coup critique 
        //on génère un nb aléatoire entre 0 et 100 et si celui est au dessus de 70 
        //On multiplie les dégats par un facteur allant de 1,25 - 1,50 - 1,75 - 2 
        let criticalFacteurDammage = [1.25, 1.50, 1.75, 2];
        let chanceOfGetCritic = getRandomInt(0, 100);
        let randomIndexFacteurDammage = getRandomInt(0, criticalFacteurDammage.length - 1)

        if (chanceOfGetCritic > 75) {
            return criticalFacteurDammage[randomIndexFacteurDammage]
        } else {
            return 1;
        }
    }

}

