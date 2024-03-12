


// 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

function somme(a, b){
    return a + b;
}
let result = somme(1, 8);
console.log(result);

// 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
function findHighest(table) {
    if (!Array.isArray(table) || table.length === 0) {
        return null;
    }
    
    return Math.max(...table);
}


let numbers = [15, 1515];
console.log(findHighest(numbers)); 



// 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

function extractvoyelles(inputString) {

    const voyellesRegex = /[aeiou]/gi;
    const voyellesArray = inputString.match(voyellesRegex);
    const voyellesString = voyellesArray ? voyellesArray.join("") : "";
    return voyellesString;
}
const input = "EL MALIKI Anas"; 
console.log(extractvoyelles(input));


// 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
export function trierParOrdreAlphabétique(tableau) {
    return tableau.sort(function(a, b) {
        const chaineA = a.toLowerCase();
        const chaineB = b.toLowerCase();
        
        if (chaineA < chaineB) {
            return -1;
        }
        if (chaineA > chaineB) {
            return 1;
        }
        return 0;
    });
}

const tableauNonTrie = ["Banane", "pomme", "Orange", "fraise", "Anas"];
const tableauTrie = trierParOrdreAlphabétique(tableauNonTrie);
console.log(tableauTrie);

// 5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

function nombreEnMots(nombre) {
    const unite = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    const dizaine = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];

    if (nombre < 10) {
        return unite[nombre];
    } else if (nombre < 20) {
        switch (nombre) {
            case 10: return 'dix';
            case 11: return 'onze';
            case 12: return 'douze';
            case 13: return 'treize';
            case 14: return 'quatorze';
            case 15: return 'quinze';
            case 16: return 'seize';
            default: return dizaine[Math.floor(nombre % 10)] + '-dix';
        }
    } else if (nombre < 100) {
        return dizaine[Math.floor(nombre / 10)] + (nombre % 10 !== 0 ? '-' + unite[nombre % 10] : '');
    } else {
        return "Nombre non pris en charge";
    }
}

console.log(nombreEnMots(42)); 


// 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

function getPropValues(arr, propName) {
    return arr.map(obj => obj[propName]);
}


const objects = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

const propValues = getPropValues(objects, 'age');
console.log(propValues); 

// 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
function triDecroissant(tableau) {
    return tableau.sort((a, b) => b - a);
}

const tableauInitial = [3, 1, 5, 2, 4];
const tableauTrié = triDecroissant(tableauInitial);
console.log(tableauTrié); // Output: [5, 4, 3, 2, 1]

// 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

function voyellesEnMajuscules(chaine) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

    let chaineTableau = chaine.split('');

    for (let i = 0; i < chaineTableau.length; i++) {
        if (voyelles.includes(chaineTableau[i])) {
            chaineTableau[i] = chaineTableau[i].toUpperCase();
        }
    }

    return chaineTableau.join('');
}


let chaine = "Bonjour, comment ça va ?";
console.log(voyellesEnMajuscules(chaine));


// 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

function compterVoyelles(chaine) {
    chaine = chaine.toLowerCase();
    
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    
    let compteur = 0;
    
    for (let i = 0; i < chaine.length; i++) {
        if (voyelles.includes(chaine[i])) {
            compteur++;
        }
    }
    
    return compteur;
}

const chaineTest = "Bonjour, comment ça va ?";
console.log("Nombre de voyelles dans la chaîne:", compterVoyelles(chaineTest));
// 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.


export function majusculesConsonnes(chaine) {
    const consonnes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let nouvelleChaine = '';

    for (let i = 0; i < chaine.length; i++) {
        let caractere = chaine[i];

        if (consonnes.includes(caractere)) {
            nouvelleChaine += caractere.toUpperCase();
        } else {
            nouvelleChaine += caractere;
        }
    }

    return nouvelleChaine;
}

let chaineOriginale = "Bonjour le monde";
let chaineModifiee = majusculesConsonnes(chaineOriginale);
console.log(chaineModifiee); 
