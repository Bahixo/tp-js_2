//function que je déclare et dont je vais me servir
function logFruits(x) {
  let i = 0;
  let tabFruits = [];
  while (i < fruits.length) {
    tabFruits.push(fruits[i]);
    i++;
  }
  console.log("->Etat fruits _ " + x + "↓");
  console.log(tabFruits);
}

let bFruits = [];
function save() {
  while (bFruits.length < fruits.length) {
    bFruits.push(fruits[bFruits.length]);
  }
}

function backup() {
  fruits.splice(0);
  while (bFruits.length > fruits.length) {
    fruits.push(bFruits[fruits.length]);
  }
}
//------------------fin déclaration function

const fruits = ["oranges", "pommes", "citrons"];

// pas besoin de la partie browser, ouvrez la partie console en grand ;)

// Part 1 : consulter les donnéees
// démo : pour voir ce que contient un tableau

logFruits("part1");

// les tableaux possèdent une propriété length, qui donne la taille.
// Pour y accéder, on le fait de la même manière qu'avec un objet
// logger la taille du tableau !
console.log(fruits.length);
// chaque élément dans un tableau possède une position. On appelle ça comment ?
//L'INDEX

// logger l'objet en première position
let posUn = fruits[0];
console.log(posUn);

// logger l'objet en troisième position
console.log(fruits[2]);

// Part 2 : modifier les données.
// pratique : cette partie manipulera aussi les fonctions

// Un tableau, c'est juste une liste.
// Elle mérite d'avoir le droit d'être mise à jour !

// Démo : pour ajouter un élément à la suite des autres, c'est la méthode push qu'on va utiliser.
fruits.push("poires");
// on peut aussi pusher une variable plutot qu'une valeur directement, c'est sa valeur qui atterrit dans le tableu
const prunes = "prunes";
fruits.push(prunes);
logFruits("part2");
// maintenant, on 5 fruits dans notre tableau.

// remplacez les pommes par des fraises.
let posPom = fruits.indexOf("pommes");
fruits[posPom] = "fraises";
console.log(fruits[posPom]);
// attention, il existe plusieurs façons de faire, j'en veux au moins une ;)

// comme la méthode push est évidemment susceptible d'être souvent utilisée
// il y a aussi d'autres méthodes toutes aussi pratiques qui couvrent les usages courants.
// pour les prochaines instructions, il faudra :
// 1) trouver dans la doc la méthode qui permet de réaliser l'instruction le plus simplement possible
// 2) l'utiliser sur le tableau
// 3) logger le tableau pour vérifier

// ajoutez des bananes au tout début de votre tableau
fruits.unshift("bananes");
logFruits("banane");
// retirez le premier élément dans votre tableau
fruits.splice(0, 1);
// retirez le dernier élément de votre tableau
fruits.splice(fruits.length - 1, 1);
logFruits("splice last");
// conservez uniquement les deux premiers éléments de votre tableau

save();
fruits.splice(2); // OU fruits.length=2;
logFruits("2 premiers");
backup();

// effacez l'instruction précédente pour retrouver le tableau dans son état d'avant
// conservez uniquement les trois premiers éléments du tableau en partant du deuxième élément

fruits.splice(0, 1);
fruits.splice(4);
logFruits("3 seconds");

// Part 3 : plusieurs tableaux !
const legumes = ["carottes", "patates"];
// un tableau peut contenir n'importe quel type de donnée, y compris un ou des tableaux
const frigo = [fruits, legumes];
// logger le premier fruit en passant via le frigo
console.log(frigo[0][0]);
// logger le premier légume en passant via le frigo
console.log(frigo[1][0]);
// aplatir un tableau : trouver la méthode qui permet de concaténer deux tableaux

// sans passer par frigo
let fusion = [];
let limit = 0;
while (fruits.length + legumes.length > limit) {
  if (fruits[limit]) {
    fusion[limit] = fruits[limit];
  }
  if (legumes[limit]) {
    fusion[fruits.length + limit] = legumes[limit];
  }
  limit++;
} //OU let fruitsLegumes= fruits.concat(legumes); mais c'est moins drôle
console.log(fusion);
// en passant par frigo
let fusionFrigo = frigo[0].concat(frigo[1]);
console.log(fusionFrigo);

// Part 4 : exploration
// comme les events qu'on a vu hier, vous voyez qu'il existe plein de méthodes
// si vous allez sur la doc
// 1) sélectionnez deux méthodes
// faites en un exemple qui fonctionne.

// =========
// =========
// Part 5 : différentes méthodes souvent utilisées
// *je cherche un élément en particulier basé sur un critère de mon choix.
const agesDeLaFamille = [1, 3, 34, 30];
// trouvez la méthode qui permet de chercher un élément.
// cherchez 3 dans le tableau, stockez le, loggez le
let where3 = agesDeLaFamille.indexOf(3); //a refaire
//console.log(where3); // OU console.log(agesDeLaFamille.indexOf(3));

// cherchez 5 dans le tableau, stockez le, loggez le
let where5 = agesDeLaFamille.indexOf(5);
//console.log(where5);
//console.log(agesDeLaFamille[where5]);

// d'après les deux résultats, que déduisez-vous du fonctionnement de la méthode ?
//LORSQUE UNDEFINED ALORS RENVOIE -1

// exemple avec objets :
const personNames = [{ name: "William" }, { name: "Toto" }];

// cherchez quelqu'un dans le tableau dont le name correspond à William, stockez le, loggez le
// cherchez quelqu'un dans le tableau dont le name correspond à Jo, stockez le, loggez le
// d'après ces deux résultats et les deux précédents, qu'en déduisez-vous ?
// *est-ce que mon tableau contient ou pas ( et les deux résultats sont ok) une valeur en particulier ?
const names = ["Jo", "Lou"];
// trouver la méthode qui demande au tableau s'il possède un élément

// demandez au tableau s'il possède 'Jo'

// demandez au tableau s'il possède 'Dassin'

// * est-ce qu'ils sont tous sympas ici ?
const notesDeMaths = [1, 4, 6];
// trouvez la méthode qui permet de vérifier si tous les éléments du tableau satisfont une condition
// utilisez la méthode en utilisant la condition suivante :
// est-ce que toutes les notesDeMaths sont inférieures à 10 ?
// et stockez le résultat

// qu'en déduisez-vous en loggant la résultat ?

//* est-ce que certains ont un iphone ?
// mêmes instructions que juste au dessus, SAUF qu'ici on veut juste vérifier qu'au moins une note est supérieure à 2

// * filter un tableau
const notesDeGeo = [12, 11, 7, 8, 10];
// trouvez la méthode qui permet de filtrer un tableau

// filtrez votre tableau pour avoir un tableau qui ne contient que les notes supérieures ou égales à la moyenne.

// * transformer un tableau
const noms = ["toto", "bernard"];
// trouver la méthode qui permet de transformer un tableau en un autre avec un process de transformation.

// le nouveau tableau doit contenir des éléments tranformés sous la forme: 'je suis' + le prenom dans le tableau de base
