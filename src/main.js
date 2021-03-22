/// ajouter : 
//      - le choix de l'arme            OK
//      - le choix du bouclier          OK
//      - des coups critiques           OK
//      - affronter un autre ennemi
//      - faire un affichage avec : - ajout du dérouler du combat sur la page 
//                                  - changement du gif personnages lors d'une attaque (setInterval)
//                                  - Faire un décompte des points de vie ou ajouter une barre de vie 
//                                  - Afficher le vainqueur

import { Monstres } from "./classes_js/monstres.js"
import { Heros } from "./classes_js/heros.js"
import { Combat } from "./classes_js/combat.js"


/*******************
 * Variables globales et constantes
 */
let combattant1 = new Heros("Goku", 600, 30);
let combattant2 = new Monstres("Dark Vador", 500, 50)
let combat1 = new Combat();


/*********************
 * Main
 */

combat1.fight(combattant1, combattant2);






