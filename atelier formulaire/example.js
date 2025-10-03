console.log("Example chargé");

function buttonClicked() {
    console.log("You clicked me!");
}

function logger() {
    let paragraph = document.getElementById("paragraph");
    console.log(paragraph.textContent);
}

function changeColor() {
    let paragraph = document.getElementById("paragraph");
    paragraph.style.color = "blue";
}

function toggleBorder(button) {
    let paragraph = document.getElementById("paragraph");

    if(paragraph.classList.contains("border")) {
        paragraph.classList.remove("border");
        button.textContent = "Ajouter la bordure au paragraphe";
    } else {
        paragraph.classList.add("border");
        button.textContent = "Retirer la bordure du paragraphe";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM chargé");

    let form = document.querySelector("form");
    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
            const texte = formData.get("texte");

            let result = document.getElementById("result");

            result.innerHTML = `
                <p style="color: rgb(7, 78, 37);">
                    ${texte}
                </p>
            `;
        })
    }
})

let email = "jean@dupont.com";
function checkEmail(email) {
    return email.toLowerCase().match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
}
console.log(checkEmail(email));