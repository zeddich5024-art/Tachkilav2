import { Joueurs } from "./data.js";
console.log(Joueurs)
const liste = document.querySelector("#liste-joueurs");
const messageVide = document.querySelector("#message-vide");
const nombreJoueurs = document.querySelector("#nombre-joueurs");
const nombreTerrain = document.querySelector("#nombre-terrain");
import {validationposte,afficherTerrain,compterJoueursTerrain} from "./function.js";
function afficherJoueurs() {

    liste.innerHTML = " ";
    Joueurs.forEach((joueur) => {
        const carte2 = document.createElement("div");
        const carte1 = document.createElement("div");
        carte1.className="border-l-4 rounded-lg border-green-500 bg-slate-900 w-78 m-2 shadow-xl/30 flex gap-2"
        
        const informations = document.createElement("div");
        informations.className="flex gap-3 p-3"
        const numero = document.createElement("p");
        numero.className="rounded-full  border-2 border-green-600 self-center text-green-600 font-medium   text-sm py-2 px-4";
        numero.textContent = joueur.numero;
        const details = document.createElement("div");
        details.className="flex justify-between w-50"
        const nom = document.createElement("p");
        nom.className="text-xl font-medium text-gray-50"
        nom.textContent=joueur.nom;
        const poste = document.createElement("p");
        poste.className="bg-green-500/30 pl-1 text-green-500 rounded-lg w-8 h-5 font-medium text-sm";
        poste.textContent=joueur.poste;

        const status=document.createElement("p")
        status.className="bg-green-500/30 pl-1 text-green-500 w-17 rounded-lg text-sm font-medium";
        status.textContent = joueur.status;
        const ligne=document.createElement("div");
        ligne.className=" rounded-lg  bg-slate-900 w-78 m-2 shadow-xl/30"
        const listposition = document.createElement("select");
        listposition.className = " w-1/1  border-1 border-gray-500 shadow-xl/30 bg-gray-400/8 h-8  rounded-lg";
        listposition.innerHTML = `
            <option value="banc">Sur le banc</option>
            <option value="DG" >DG-Défenseur gauche</option>
            <option value="DC1" >DC-Défenseur central 1</option>
            <option value="DC2" >DC-Défenseur central 2</option>
            <option value="DD" >DD-Défenseur droit</option>
                `;


        if(joueur.poste ==="GB"){
            carte1.className="border-l-4 rounded-lg border-orange-400 w-78 m-2 bg-slate-900 shadow-xl/30 gap-2"
            numero.className="rounded-full  border-2 border-orange-400 self-center text-orange-400 font-medium   text-sm py-2 px-4";
            poste.className="bg-orange-400/30 pl-1 text-orange-400 rounded-lg w-8 h-5 font-medium text-sm";
            listposition.innerHTML = `
            <option value="banc">Sur le banc</option>
            <option value="GB" >GB-Gardien</option> `;
        }
        else if(joueur.poste ==="MIL"){
            carte1.className="border-l-4 rounded-lg border-blue-500 w-78 m-2 bg-slate-900 shadow-xl/30 gap-2"
            numero.className="rounded-full  border-2 border-blue-500 self-center text-blue-500 font-medium   text-sm py-2 px-4";
            poste.className="bg-blue-500/30 pl-1 text-blue-500 rounded-lg w-8 h-5 font-medium text-sm";
            listposition.innerHTML = `
            <option value="banc" >Sur le banc</option>
            <option value="MG" id="MG" >MG-Milieu gauche</option>
            <option value="MC1" >MC-Milieu central 1</option>
            <option value="MC2" >MC-Milieu central 2</option>
            <option value="MD" >MD-Milieu droit</option>`;
        }
        else if(joueur.poste ==="ATT"){
            carte1.className="border-l-4 rounded-lg border-red-600 w-78 m-2  bg-slate-900 shadow-xl/30 gap-2"
            numero.className="rounded-full  border-2 border-red-600 self-center text-red-600 font-medium   text-sm py-2 px-4";
            poste.className="bg-red-600/30 pl-1 text-red-600 rounded-lg w-8 h-5 font-medium text-sm";
            listposition.innerHTML = `
            <option value="banc" >Sur le banc</option>
            <option value="BU1"  >BU-Buteur 1</option>
            <option value="BU2" >BU-Buteur 2</option>
                `;
        }
        if(joueur.status==="Blessé"){
            status.className="bg-red-600/30 pl-1 text-red-600 w-13 h-5 rounded-lg text-sm font-medium";
            listposition.innerHTML = `
            <option value="banc" disabled selected hidden > Indisponible</option>`;
            carte2.className="opacity-75"
        }
        else{
            status.classList.add("hidden")
        }
        
 
       
        
        listposition.value =joueur.position || "banc";
        listposition.addEventListener("change",()=>{
            validationposte(listposition,joueur,Joueurs);
            afficherJoueurs();
            afficherTerrain(Joueurs);
        })
       
        
        compterJoueursTerrain(nombreTerrain,Joueurs);
        position_Occupe();
        
        details.append(nom, poste);
        informations.append(numero, details ,status);
        ligne.append(listposition)
        carte1.append(informations);
        carte2.append(carte1,ligne)
        liste.append(carte2);
    });
    
    nombreJoueurs.textContent = Joueurs.length;
    messageVide.classList.toggle("hidden", Joueurs.length > 0);
}
function position_Occupe(){
            let joueurposte=Joueurs.filter((joueur)=>joueur.position !== "banc" )
            joueurposte.forEach((joueur)=>{
                    const options=document.querySelectorAll(`option[value="${joueur.position}"]`);
                    options.forEach(option=>{
                    option.disabled=true;})
    })
}


afficherJoueurs();
afficherTerrain(Joueurs);
compterJoueursTerrain(nombreTerrain,Joueurs);
position_Occupe();