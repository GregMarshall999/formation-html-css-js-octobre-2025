let fenetreTest = null;

if(fenetreTest && !fenetreTest.closed) {
    alert("La fenetre est déjà ouverte");
}
else {
    fenetreTest = window.open(
        "", 
        "maFenetre", 
        "width=400,height=300,scrollbars=yes,resizable=yes,menubar=yes,toolbar=no"
    );

    if(fenetreTest) {
        fenetreTest.document.write(`
            <html>
            <head>
                <title>Fenetre de test</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    button { margin: 5px; padding: 10px; }
                </style>
            </head>
            <body>
                <h1>Fenetre ouverte!</h1>
                <p>Cette fenetre a été ouverte par javascript</p>
                <button onClick="window.close()">Fermer la fenetre</button>
                <button onClick="alert('Message depuis la fenetre enfant')">Alerte</button>
                <hr>
                <p><strong>Communication entre fenetres</strong></p>
                <button onClick="envoyerMessage()">Envoyer un message</button>
            
                <script>
                    function envoyerMessage() {
                        if(window.opener) {
                            window.opener.postMessage('Message depuis enfant', '*');
                        }
                    }
                </script>
            </body>
            </html>
        `);
    }
}
