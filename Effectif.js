const form = document.querySelector(".form");
import { Joueurs } from "./data.js";
console.log(Joueurs)
import {ajouter,annuler,btnX} from "./function.js";
ajouter(form);
annuler(form);
btnX(form);
const formJoueur = document.querySelector("#form-joueur");
const nomJoueur = document.querySelector("#nom-joueur");
const numeroJoueur = document.querySelector("#numero-joueur");
let idjoueur = Joueurs.length;
const container=document.querySelector("#Container");
import { creatCart,supprimer,validationform } from "./function.js";
formJoueur.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = nomJoueur.value.trim();
    const numero = Number(numeroJoueur.value);

    const posteJoueur = document.querySelector('input[name="poste"]:checked');
    // Validation de Form
    const errorNom = document.querySelector("#errornom");
    const errorNumber = document.querySelector("#errornumber");
    const errorPoste = document.querySelector("#errorposte")
    validationform(errorNom,errorNumber,errorPoste,nom,numero,posteJoueur);

    const numeroExiste = joueurs.some((joueur) => joueur.numero === numero);
    if (numeroExiste) {
        alert("Ce numéro est déjà utilisé!:")
        return;
    }

    const nouveauJoueur = {
        id: idjoueur,
        nom: nom,
        poste: posteJoueur.value,
        numero: numero,
        position: ""
    };

    Joueurs.push(nouveauJoueur);
    localStorage.setItem("joueurs", JSON.stringify(Joueurs));
    idjoueur++;
    console.log(joueurs);
    formJoueur.reset();
    afficherJoueurs();
    form.classList.add("hidden");
});
