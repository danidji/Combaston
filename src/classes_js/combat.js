import { Personnages } from "./personnages.js"
import { getRandomInt } from "../functions.js"

export class Combat extends Personnages {


    //Détermine l'ordre des joueurs
    startFight(perso1, perso2) {
        let playerOrder = {};

        // Attribution aléatoire de la vitesse des 2 joueurs
        perso1.vitesse = getRandomInt(1, 50);
        perso2.vitesse = getRandomInt(1, 50);

        // Gestion de l'ordre d'attaque des joueurs
        if (perso1.vitesse > perso2.vitesse) {
            playerOrder.player1 = perso1;
            playerOrder.player2 = perso2;
            console.log("-----------------------");
            console.log(`${perso1.nom} est plus rapide que ${perso2.nom}`);
            return playerOrder;

        } else {

            playerOrder.player1 = perso2;
            playerOrder.player2 = perso1;
            console.log("-----------------------");
            console.log(`${perso2.nom} est plus rapide que ${perso1.nom}`);
            return playerOrder;
        }
    }
    // Gestion d'un combat entier
    fight(perso1, perso2) {
        let end = false;

        perso1.getCaracteristique();
        perso2.getCaracteristique();


        while (!end) {
            let firstPlayer = this.startFight(perso1, perso2);

            let player1 = firstPlayer.player1;
            let player2 = firstPlayer.player2;


            player1.fightTour(player2);

            end = this.endGame(player1, player2);
        }
    }
    //Gestion de la fin du jeu
    endGame(player1, player2) {
        let end = false;

        if (player1.pv <= 0) {
            end = true;
            console.log(`${player1.nom} est mort !!!!!!!!! `);
        } else if (player2.pv <= 0) {
            end = true;
            console.log(`${player2.nom} est mort !!!!!!!!! `);
        }
        return end;
    }
}