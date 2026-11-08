const form = document.querySelector(".form");
import {ajouter,annuler,btnX,validationformmatch} from "./function.js";
import { Matchs } from "./data.js";
ajouter(form);
annuler(form);
btnX(form);
const annulerscore=document.querySelector("#annulerscore");
annulerscore.addEventListener("click",()=>{
    saisiscore.classList.add("hidden");
})
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
const atlas=document.querySelector("#atlas");
const club =document.querySelector("#club");
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
    
    if(editingId !== null){

    const matchModifier = Matchs.find(m => m.id === editingId);

    matchModifier.nomadverse = nom;
    matchModifier.lieuMatch = lieuMatch;
    matchModifier.date = DateMatch;
    matchModifier.mois = Mois;
    matchModifier.jour = Jour;
    matchModifier.jourNb = JourNb;
    matchModifier.hours = hours;
    matchModifier.lieu = Lieu.value;

    editingId = null;

   }else{
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
        scorAtlas:"",
        scorclub:""
    }
    Matchs.push(match);
    idmatch++;
    }
    localStorage.setItem("Matchs",JSON.stringify(Matchs));
    
    affichermatch()
    console.log(Matchs)
    formmatch.reset();
    form.classList.add("hidden");
})
const saisiscore=document.querySelector("#modifier-score");
const nomclub=document.querySelector("#nomclub");
const formscore=document.querySelector("#formscore")
let matchSelectionne=null;
let editingId = null;

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
    
    
    const actions = document.createElement("div");
    actions.className="flex gap-4"
    
    const btnSupprimer = document.createElement("button");
    btnSupprimer.className = "text-black  hover:text-red-700 cursor-pointer";
    btnSupprimer.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnSupprimer.title = "Supprimer";
    const resul=document.createElement("div")
    resul.className="flex flex-col justify-between"
    const composition=document.createElement("button");
    composition.className="px-2 h-10 bg-gray-500/50 text-gray-50 self-end mr-5 rounded-lg shadow-xl/30 cursor:pointer hover:bg-green-500"
    composition.textContent="Voir la composition"
    composition.addEventListener("click",()=>{
        window.location.href="composition.html";
    })
    const saisirscore=document.createElement("button");
    saisirscore.className="px-2 h-10 bg-blue-500 text-gray-50 self-end mr-5 rounded-lg shadow-xl/30 cursor:pointer hover:bg-blue-500/50"
    saisirscore.textContent="Saisir le score"
    if(!estPassee(match)){
        linge2.append(composition,actions);
    }
    else if(match.scorAtlas==="" && match.scorclub===""){
        resul.append(saisirscore,composition);
        linge2.append(resul,actions)
    }else{
        resultat.textContent=`${match.scorAtlas} - ${match.scorclub}`;
        resul.append(resultat,composition)
        // modifier le score
        const Modifierscore= document.createElement("button");
        Modifierscore.className = "text-gray-800 hover:text-red-500  text-sm font-meduim  cursor-pointer";
        Modifierscore.textContent = "Modifier le score";
        actions.append(Modifierscore);
        Modifierscore.addEventListener("click",()=>{
            saisiscore.classList.remove("hidden");
            nomclub.textContent=match.nomadverse;
            atlas.value=match.scorAtlas;
            club.value=match.scorclub;
            matchSelectionne=match;
        });
        linge2.append(resul,actions)
    }
    //  supprimer le match
    console.log(Matchs)
    btnSupprimer.addEventListener("click",()=>{
        const index=Matchs.indexOf(match);
        console.log(index);
        Matchs.splice(index,1);
        cartematch.remove();
        localStorage.setItem("Matchs",JSON.stringify(Matchs));
        résulte();
        score();
    })
    
    saisirscore.addEventListener("click",()=>{
        matchSelectionne=match;
        saisiscore.classList.remove("hidden");
        nomclub.textContent=match.nomadverse;
        atlas.value="";
        club.value="";
    });
    const btnModifier = document.createElement("button");
        btnModifier.className = "text-orange-600 hover:text-blue-600 cursor-pointer";
        btnModifier.innerHTML = '<i class="fa-solid fa-pen"></i>';
        btnModifier.title = "Modifier";
    btnModifier.addEventListener("click", ()=>{
    editingId = match.id;
    nomÈquipe.value = match.nomadverse;
    lieumatch.value = match.lieuMatch;
    datematch.value = match.date;
    Timematch.value = match.hours;
    const radio = document.querySelector(
        `input[name="Lieu"][value="${match.lieu}"]`
    );
    if(radio){
        radio.checked = true;
    }
    form.classList.remove("hidden");
    });
    

    dateMatch.append(jourstring,journombre,moisstring,hoursMatch);
    informationMatch.append(lieu,nomMatch,lieuMatch);
    linge1.append(dateMatch,informationMatch)
    actions.append(btnModifier,btnSupprimer)
    
    linge2.append(resul,actions)
    cartematch.append(linge1,linge2);
    container.append(cartematch);
})
}
formscore.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!matchSelectionne) return;
    matchSelectionne.scorAtlas=atlas.value;
    matchSelectionne.scorclub=club.value;
    localStorage.setItem("Matchs",JSON.stringify(Matchs));
    saisiscore.classList.add("hidden");
    formscore.reset();
    matchSelectionne=null;
    résulte();
    score();
    affichermatch();
    
})
const estPassee =(match)=>{
    const dateHeure=new Date(`${match.date}T${match.hours}`);
    const maintenant=Date.now();
    if(dateHeure.getTime() > maintenant){
        setTimeout(()=>{
            affichermatch();},dateHeure.getTime()-maintenant);
    }
    return dateHeure.getTime()<=maintenant;
};
function résulte(){
    let victoire=0;
    let nuls=0;
    let defaite=0;
    Matchs.forEach((match)=>{
        if(match.scorAtlas === "" || match.scorclub === "") return;
        else if(Number(match.scorAtlas) > Number(match.scorclub)){
             victoire++;
             console.log("victoire");
        }
        else if(Number(match.scorAtlas) == Number(match.scorclub)){
             nuls++;
             console.log("nuls");
        }
        else{
             defaite++;
             console.log("defaite")
        }
    })
    const nombrevictoire=document.querySelector("#nombre-victoires");
    nombrevictoire.textContent=victoire;
    const nombrenuls=document.querySelector("#nombre-nuls");
    nombrenuls.textContent=nuls;
    const nombredefaite=document.querySelector("#nombre-defaites");
    nombredefaite.textContent=defaite;
}
function score(){
    let ScorAtlas=0;
    let ScorClub=0;
    Matchs.forEach((match)=>{
        if(match.scorAtlas === "" || match.scorclub === "") return;
        else{
            ScorAtlas = ScorAtlas + Number(match.scorAtlas);
            ScorClub =ScorClub + Number(match.scorclub);
        }
    })
    const scoratlas=document.querySelector("#scoratlas")
    scoratlas.textContent=ScorAtlas;
    const scorclub=document.querySelector("#scorclub")
    scorclub.textContent=ScorClub
}











 affichermatch();
 résulte();
 score();
