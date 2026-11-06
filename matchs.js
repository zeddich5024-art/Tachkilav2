const form = document.querySelector(".form");
import {ajouter,annuler,btnX} from "./function.js";
import { Matchs } from "./data.js";
ajouter(form);
annuler(form);
btnX(form);
let idmatch=Matchs.length;
console.log(idmatch)
const formmatch = document.querySelector("#form-joueur");
const container=document.querySelector("#Container");
const nomÈquipe=document.querySelector("#nomÈquipe");
const lieumatch=document.querySelector("#lieumatch");
const datematch=document.querySelector("#Date");
const Timematch=document.querySelector("#time-match");
formmatch.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nom = nomÈquipe.value.trim();
    const lieuMatch=lieumatch.value.trim();
    const DateMatch=datematch.value;
    const saintValentin = new Date(DateMatch);
    const mois = saintValentin.getMonth();
    const nomsMois = ["Jan", "Fév", "Mar" ,"Avr" , "Mai" ,"Juin","Juil","Aout","Sep","Oct","Nov","Déc"];
    const Mois=nomsMois[mois];
    const jour = saintValentin.getDay();
    const nomsJours = ["DIM", "LUN", "MAR","MER","JEU","VEN","SAM"];
    const Jour=nomsJours[jour];
    const JourNb=saintValentin.getDate();
    const hours=Timematch.value;
    const Lieu=document.querySelector(`input[name="Lieu"]:checked`);
    

    const match={
        id:idmatch,
        nom:nom,
        date:DateMatch,
        mois:Mois,
        jour:Jour,
        jourNb:JourNb,
        hours:hours,
        lieuMatch:lieuMatch,
        lieu:Lieu
    }
    Matchs.push(match);
    localStorage.setItem("Matchs",JSON.stringify(Matchs));
    idmatch++;
    console.log(Matchs)
    formmatch.reset();
    form.classList.add("hidden");
})