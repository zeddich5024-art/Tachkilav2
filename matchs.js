const form = document.querySelector(".form");
import {ajouter,annuler,btnX} from "./function.js";
ajouter(form);
annuler(form);
btnX(form);

const formmatch = document.querySelector("#form-joueur");
const container=document.querySelector("#Container");
const nomÈquipe=document.querySelector("#nomÈquipe");
const lieumatch=document.querySelector("#lieumatch");
const datematch=document.querySelector("#Date");
const Timematch=document.querySelector("#time-match");
formmatch.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nom = nomÈquipe.value.trim();
    console.log(nom)
    const lienMatch=lieumatch.value.trim();
    console.log(lienMatch)
    const DateMatch=datematch.value;
    console.log(DateMatch)
    const saintValentin = new Date(DateMatch);
    const mois = saintValentin.getMonth();
    const nomsMois = ["Jan", "Fév", "Mar" ,"Avr" , "Mai" ,"Juin","Juil","Aout","Sep","Oct","Nov","Déc"];
    const Mois=nomsMois[mois];
    console.log(Mois); 
    const saintValentin1 = new Date(DateMatch);
    const jour = saintValentin1.getDay();
    const nomsJours = ["DIM", "LUN", "MAR","MER","JEU","VEN","SAM"];
    const Jour=nomsJours[jour];
    console.log(Jour); 
    
    
})