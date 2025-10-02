//On peut appeler les function avant leur déclaration
console.log(direBonjour());

function direBonjour() {
    console.log("Bonjour");
}

function carre(nombre) {
    return nombre * nombre;
}

function calculerTTC(prixHT, tauxTVA = 0.20) {
    return prixHT * (1 + tauxTVA);
}

console.log(calculerTTC(100));

/* Fonction fléchée */

//Appel avant la déclaration de la constante!!!
//console.log(formaterPrix(100));

const formaterPrix = prix => {
    const prixFormate = prix.toFixed(2) + " €";
    console.log(prixFormate);
    return prixFormate;
}

formaterPrix(100);

const listePrix = [100, 200, 300, 400, 500];
listePrix.forEach(formaterPrix);