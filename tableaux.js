// Créer un tableau contenant les nombres de 1 à 10
var tableau = [];

for (var i = 1; i <= 10; i++) {
    tableau.push(i);
}

for (var j = 0; j < tableau.length; j++) {
    console.log(tableau[j]);
}

// Créer un tableau contenant les jours de la semaine

var jourDelasemain = ["lundi", " mardi", " mercredi"," jeudi", " vendredit", " samedi", " dimanche"];
console.log("le premier jour de la semain et " + jourDelasemain[0] + "le dernier jour de la semain et" + jourDelasemain[6])

// Créez un tableau contenant les nombres pairs de 2 à 10.+
var tableuPair = [2, 4, 6, 8, 10];
var num1 = tableuPair[0];
var num2 = tableuPair[1];
var num3 = tableuPair[2];
var num4 = tableuPair[3];
var num5 = tableuPair[4];
var result = num1+num2+num3+num4+num5;
console.log(result);

// créez un tableau contenant les noms de cinq fruits
var fruitTable = ["pomme", "orange", "peche", "mangue", "kiwi"];
fruitTable.push("fraise");
console.log(fruitTable);

// Créez un tableau contenant les notes de cinq étudiants

var noteEtufiant = [14, 5, 17, 15, 20];

var note1 = noteEtufiant[0];
var note2 = noteEtufiant[1];
var note3 = noteEtufiant[2];
var note4 = noteEtufiant[3];
var note5 = noteEtufiant[4];

var sommeNote = note1 + note2 + note3 + note4 + note5;
var moyenne = sommeNote / 5;

console.log(moyenne);

// Créez un tableau contenant des noms d'oiseaux.
var nomsOiseaux = ['Moineau', 'Corbeau', 'Merle', 'Pigeon', 'Hirondelle'];

var nomRecherche = 'Corbeau';

var lookup = nomsOiseaux.includes(nomRecherche);

if (lookup){
    console.log("le Oiseaux " +  nomRecherche + " et dans le tableaux" );
}else {
    console.log("le nom de oiseaux" + nomRecherche + " n'est pas dans le tableaux.");
}


//Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console.



var nomsPays = ["France", "Epagne", "Maroc", "Japon", "Itally", "États-Unis"];


nomsPays.sort();

console.log(nomsPays);


// Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau.

var moisAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

var _3emeMois = moisAnnee[2];

console.log (_3emeMois)

// Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console.



const numAlio = [10, 50, 848, 4, 45, 23, 98, 45, 12]

const numMax = Math.max(...numAlio)
const numMin = Math.min(...numAlio)

console.log("num MAX : " + numMax)
console.log("num Min : " + numMin)

