function demoVar() {
    console.log(x); //undefined
    
    var x = 5;

    if(true) {
        var x = 10; //redéfinition de la variable x
    }

    console.log(x); //10 
    //la référence pour x reste la même
    //on perd l'information initiale de x
}

function demoLet() {
    console.log(y);

    let y = 5;

    if(true) {
        let y = 10;
    }

    console.log(y); //5
}