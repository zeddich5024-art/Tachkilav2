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
const ageJoueur =document.querySelector("#age-joueur")
let idjoueur = Joueurs.length;
const container=document.querySelector("#Container");
import { supprimer,validationform } from "./function.js";
formJoueur.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = nomJoueur.value.trim();
    const numero = Number(numeroJoueur.value);
    const age = Number(ageJoueur.value);
    const posteJoueur = document.querySelector("#poste-joueur");
    const statue=document.querySelector("#status-joueur")
    // Validation de Form
    const errorNom = document.querySelector("#errornom");
    const errorNumber = document.querySelector("#errornumber");
    const errorPoste = document.querySelector("#errorposte")
    const errorAge =document.querySelector("#errorage");
    if(!validationform(errorNom,errorNumber,errorPoste,nom,numero,age,posteJoueur,errorAge,Joueurs)){
        return;
    };

    

    const nouveauJoueur = {
        id: idjoueur,
        nom: nom,
        poste: posteJoueur.value,
        numero: numero,
        age: age,
        status: statue.value,  
        position: ""
    };

    Joueurs.push(nouveauJoueur);
    localStorage.setItem("joueurs", JSON.stringify(Joueurs));
    idjoueur++;
    console.log(Joueurs);
    formJoueur.reset();

    form.classList.add("hidden");
});
