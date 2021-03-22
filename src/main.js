/// ajouter : 
//      - le choix de l'arme            OK
//      - le choix du bouclier          OK
//      - des coups critiques           OK
//      - affronter un autre ennemi
//      - faire un affichage

import { Monstres } from "./classes_js/monstres.js"
import { Heros } from "./classes_js/heros.js"
import { fight } from "./fonctions.js"


/*******************
 * Variables globales et constantes
 */
let combattant1 = new Heros("Goku", 600, 30);
let combattant2 = new Monstres("Dark Vador", 500, 50)


/*********************
 * Main
 */

fight(combattant1, combattant2);






