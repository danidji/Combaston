// import { Heros } from "./heros.js"
// import { Monstres } from "./monstres.js"

export const MIN = 1;
export const MAX = 50;

/********************
 * Fonctions de gestion du jeu
 */

//Détermine l'ordre des joueurs
export function startFight(perso1, perso2) {
    let playerOrder = {};

    // Attribution aléatoire de la vitesse des 2 joueurs
    perso1.vitesse = returnRandomNb(MIN, MAX);
    perso2.vitesse = returnRandomNb(MIN, MAX);

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

export function returnRandomNb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Gestion d'un combat entier
export function fight(perso1, perso2) {
    let end = false;

    perso1.getCaracteristique();
    perso2.getCaracteristique();


    while (!end) {
        let firstPlayer = startFight(perso1, perso2);

        let player1 = firstPlayer.player1;
        let player2 = firstPlayer.player2;


        player1.fightTour(player2);

        end = endGame(player1, player2);
    }
}
//Gestion de la fin du jeu
export function endGame(player1, player2) {
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