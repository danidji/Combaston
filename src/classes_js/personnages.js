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


/*
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

*/