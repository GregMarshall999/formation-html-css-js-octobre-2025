let nom = "Jean Dupont"; // String
let age = 30; // Number
let estActif = true; // Boolean
let salaire = 2500.50; // Number (decimal)
let hobbies = ["lecture", "sport", "cinéma"]; // Array

let personne = {
    nom: "Marie", 
    age: 25, 
    ville: "Paris"
}; // Object

/* 
======================
Changer les variables 
======================
*/

estActif = !estActif; // Inversion

age = 60; // Réafectation
// voir la variable en console
console.log(age); // 60
console.log(age++); // Post-incrémentation 60
console.log(++age); // Pré-incrémentation 62

salaire = salaire * 2; // Multiplication

hobbies.push("voyage"); // Ajout d'un élément
let removed = hobbies.splice(1, 1); // Suppression de sport

personne.ville = "Lyon"; // Modification d'une propriété
personne.pays = "France"; // Ajout d'une propriété
delete personne.nom; // Suppression d'une propriété

/* 
======================
Autre déclaration 
======================
*/

var prenom = "Jean"; // Déclaration d'une variable
const toulouse = "Ville de la semaine"; // Déclaration d'une constante

const radarRoutier = "Radar"; // Convention de nommage