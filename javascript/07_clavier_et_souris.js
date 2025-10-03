document.addEventListener("DOMContentLoaded", () => {
    const zoneSouris = document.getElementById("zone-souris");
    const infoSouris = document.getElementById("info-souris");

    if(zoneSouris && infoSouris) {
        let compteurClics = 0;
        let dernierePosition = { x: 0, y: 0 };

        zoneSouris.addEventListener("mouseenter", _ => {
            infoSouris.innerHTML += '<p style="color: green;">Souris entrée dans la zone</p>';
        });

        zoneSouris.addEventListener("mouseleave", _ => infoSouris.innerHTML += '<p style="color: red;">Souris sortie de la zone</p>');
    
        zoneSouris.addEventListener("mousemove", e => {
            const rect = zoneSouris.getBoundingClientRect();
            const x = Math.round(e.clientX - rect.left);
            const y = Math.round(e.clientY - rect.top);

            if(Math.abs(x - dernierePosition.x) > 5 || Math.abs(y - dernierePosition.y) > 5) {
                dernierePosition = { x, y };
                infoSouris.innerHTML = `<p>Position: (${x}, ${y})</p>`;
            }
        });

        zoneSouris.addEventListener("mousedown", e => {
            let bouton;

            if(e.button === 0) {
                bouton = "Gauche";
            }
            else if(e.button === 2) {
                bouton = "Droite";
            }
            else {
                bouton = "Milieu";
            }

            infoSouris.innerHTML += `<p style="color: blue;">Bouton ${bouton} Enfoncé</p>`;
        });

        zoneSouris.addEventListener("mouseup", e => {
            let bouton;

            if(e.button === 0) {
                bouton = "Gauche";
            }
            else if(e.button === 2) {
                bouton = "Droite";
            }
            else {
                bouton = "Milieu";
            }

            infoSouris.innerHTML += `<p style="color: blue;">Bouton ${bouton} Relaché</p>`;
        });

        zoneSouris.addEventListener("click", _ => {
            compteurClics++;
            infoSouris.innerHTML += `<p style="color: orange;">Clic ${compteurClics} effectué</p>`;
        });

        zoneSouris.addEventListener("dblclick", _ => {
            infoSouris.innerHTML += `<p style="color: darkorange;">Double clic effectué</p>`;
        });

        zoneSouris.addEventListener("contextmenu", e => {
            e.preventDefault();
            infoSouris.innerHTML += `<p style="color: darkred;">Menu contextuel désactivé</p>`;
        });
    }
});