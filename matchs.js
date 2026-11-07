const form = document.querySelector(".form");
import {ajouter,annuler,btnX,validationformmatch} from "./function.js";
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
const errorNomÈquipe=document.querySelector("#errornomÈquipe")
const errorDatematch=document.querySelector("#errorDatematch")
const errorTimematch=document.querySelector("#errortimematch")
const errorLieumatch=document.querySelector("#errorLieumatch")
const errorLieu=document.querySelector("#errorLieu")
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
    // Validation de formulaire de match
    validationformmatch(errorNomÈquipe,errorTimematch,DateMatch,errorDatematch,errorLieumatch,nom,hours,lieuMatch,Lieu,errorLieu)
    

    const match={
        id:idmatch,
        noméquipe:"Atlas FC",
        nomadverse:nom,
        date:DateMatch,
        mois:Mois,
        jour:Jour,
        jourNb:JourNb,
        hours:hours,
        lieuMatch:lieuMatch,
        lieu:Lieu.value,
    }
    Matchs.push(match);
    localStorage.setItem("Matchs",JSON.stringify(Matchs));
    idmatch++;
    affichermatch()
    console.log(Matchs)
    formmatch.reset();
    form.classList.add("hidden");
})
function affichermatch(){
    container.innerHTML="";
    Matchs.forEach(match=>{
    const cartematch=document.createElement("div");
    cartematch.className="border-1 border-gray-950 rounded-lg p-3 pt-6 bg-slate-400/20 ml-6 mt-2 mr-6 flex justify-between px-6";
    const linge1=document.createElement("div");
    linge1.className="flex gap-4"
    const dateMatch=document.createElement("div");
    dateMatch.className="py-2 px-6 border-1 border-gray-950 bg-gray-950/25 shadow-xl/30 rounded-lg";
    const jourstring=document.createElement("p");
    jourstring.className="text-sm text-gray-500 font-medium";
    jourstring.textContent=match.jour;
    const journombre=document.createElement("p");
    journombre.className="text-lg font-medium pl-1 text-gray-50";
    journombre.textContent=match.jourNb;
    const moisstring=document.createElement("p");
    moisstring.className="text-sm text-gray-500 font-medium";
    moisstring.textContent=match.mois;
    const hoursMatch=document.createElement("p");
    hoursMatch.className="text-sm font-medium ";
    hoursMatch.textContent=match.hours;
    const informationMatch=document.createElement("div");
    informationMatch.className=""
    const lieu=document.createElement("p")
    lieu.className="px-1 bg-green-500/30 w-18 shadow-xl/30 text-green-500 rounded-sm";
    lieu.textContent=match.lieu;
    const nomMatch=document.createElement("div");
    nomMatch.className="text-lg font-semibold text-gray-50 mt-2"
    nomMatch.innerHTML=`${match.noméquipe} vs ${match.nomadverse}`;
    const lieuMatch=document.createElement("p");
    lieuMatch.className="text-gray-500 text-sm mt-4 font-meduim";
    lieuMatch.innerHTML=`<i class="fa-solid fa-location-dot"></i> ${match.lieuMatch}`;
    const linge2=document.createElement("div");
    linge2.className="flex gap-2"
    const resultat=document.createElement("p");
    resultat.className="text-3xl font-semibold bg-gray-500/50 shadow-xl/30 self-center px-2 rounded-lg mr-6 ";
    resultat.textContent="7-5";
    const actions = document.createElement("div");
        actions.className="flex gap-4"
    const btnModifier = document.createElement("button");
    btnModifier.className = "text-orange-600 hover:text-blue-600 cursor-pointer";
    btnModifier.innerHTML = '<i class="fa-solid fa-pen"></i>';
    btnModifier.title = "Modifier";
    const btnSupprimer = document.createElement("button");
    btnSupprimer.className = "text-black  hover:text-red-700 cursor-pointer";
    btnSupprimer.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnSupprimer.title = "Supprimer";

    //  supprimer le match
    console.log(Matchs)
    btnSupprimer.addEventListener("click",()=>{
        const index=Matchs.indexOf(match);
        console.log(index);
        Matchs.splice(index,1);
        cartematch.remove();
        localStorage.setItem("Matchs",JSON.stringify(Matchs));
    })
   

    dateMatch.append(jourstring,journombre,moisstring,hoursMatch);
    informationMatch.append(lieu,nomMatch,lieuMatch);
    linge1.append(dateMatch,informationMatch)
    actions.append(btnModifier,btnSupprimer)
    linge2.append(resultat,actions)
    cartematch.append(linge1,linge2);
    container.append(cartematch);
})
}
 affichermatch();