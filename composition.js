import { Joueurs } from "./data.js";
console.log(Joueurs)
const liste = document.querySelector("#liste-joueurs");

function afficherJoueurs() {

    liste.innerHTML = " ";
    Joueurs.forEach((joueur) => {
        const carte = document.createElement("div");
        carte.className="border-l-4 rounded-lg border-green-500 bg-slate-900 w-82 m-2 shadow-xl/30 flex gap-2"
        
        const informations = document.createElement("div");
        informations.className="flex gap-3 m-3"
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

        const linge=document.createElement("div")
        linge.className="m-3 flex justify-between"
        const status=document.createElement("p")
        status.className="bg-green-500/30 pl-1 text-green-500 w-17 rounded-lg text-sm font-medium";
        status.textContent = joueur.status;

        if(joueur.poste ==="GB"){
            carte.className="border-l-4 rounded-lg border-orange-400 w-82  bg-slate-900 shadow-xl/30"
            numero.className="rounded-full  border-2 border-orange-400 self-center text-orange-400 font-medium   text-sm py-2 px-4";
            poste.className="bg-orange-400/30 pl-1 text-orange-400 rounded-lg w-8 h-5 font-medium text-sm";
        }
        else if(joueur.poste ==="MIL"){
            carte.className="border-l-4 rounded-lg border-blue-500 w-82  bg-slate-900 shadow-xl/30"
            numero.className="rounded-full  border-2 border-blue-500 self-center text-blue-500 font-medium   text-sm py-2 px-4";
            poste.className="bg-blue-500/30 pl-1 text-blue-500 rounded-lg w-8 h-5 font-medium text-sm";
        }
        else if(joueur.poste ==="ATT"){
            carte.className="border-l-4 rounded-lg border-red-600 w-82  bg-slate-900 shadow-xl/30"
            numero.className="rounded-full  border-2 border-red-600 self-center text-red-600 font-medium   text-sm py-2 px-4";
            poste.className="bg-red-600/30 pl-1 text-red-600 rounded-lg w-8 h-5 font-medium text-sm";
        }
        if(joueur.status==="Blessé"){
            status.className="bg-red-600/30 pl-1 text-red-600 w-13 rounded-lg text-sm font-medium";
        }
        else{
            status.classList.add("hidden")
        }
       
       
        
        
      
        details.append(nom, poste);
        informations.append(numero, details);
       
        linge.append(status)
        carte.append(informations,linge);
        liste.append(carte);
    });
    nombreJoueurs.textContent = Joueurs.length;
}
afficherJoueurs();