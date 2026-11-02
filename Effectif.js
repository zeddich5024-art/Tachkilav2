const form = document.querySelector(".form");
import { Joueurs } from "./data.js";

import {ajouter,annuler,btnX} from "./function.js";
ajouter(form);
annuler(form);
btnX(form);
const formJoueur = document.querySelector("#form-joueur");
const nomJoueur = document.querySelector("#nom-joueur");
const numeroJoueur = document.querySelector("#numero-joueur");
const ageJoueur =document.querySelector("#age-joueur")
const posteJoueur = document.querySelector("#poste-joueur");
const statue=document.querySelector("#status-joueur")
const nombreJoueurs = document.querySelector("#nombre-joueurs");
let idJoueur = Joueurs.length;
let editingId=null;
const container=document.querySelector("#Container");
import {validationform } from "./function.js";
formJoueur.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = nomJoueur.value.trim();
    const numero = Number(numeroJoueur.value);
    const age = Number(ageJoueur.value);
   
    // Validation de Form
    const errorNom = document.querySelector("#errornom");
    const errorNumber = document.querySelector("#errornumber");
    const errorPoste = document.querySelector("#errorposte")
    const errorAge =document.querySelector("#errorage");
    if(!validationform(errorNom,errorNumber,errorPoste,nom,numero,age,posteJoueur,errorAge,Joueurs,editingId)){
        return;
    };
    
    if(editingId !== null){
        // mode Modifiction
        const index =Joueurs.findIndex(joueur =>joueur .id === editingId);
        Joueurs[index]={
            ...Joueurs[index],
            nom:nom,
            numero:numero,
            age:age,
            poste:posteJoueur.value,
            status:statue.value,
            
        };
        editingId=null;
    }
    else{
        // Mode Ajouter
        const nouveauJoueur = {
        id: idJoueur,
        nom: nom,
        poste: posteJoueur.value,
        numero: numero,
        age: age,
        status: statue.value,  
        position: "",
        capitaine:false
    };

    Joueurs.push(nouveauJoueur);
     idJoueur++;
}
    

    
    localStorage.setItem("Joueurs", JSON.stringify(Joueurs));
   
    formJoueur.reset();
    afficherJoueurs();
    En_forme();
    moyenage();
    form.classList.add("hidden");
    
});
function En_forme(){
    let blesse=0;
    let forme=0;
    Joueurs.forEach((joueur)=>{
        if(joueur.status === "Blessé"){
             blesse++;
        }
        else{
            forme++;
        }
    })
    const nomberBlessé=document.querySelector("#nomber-blessé");
    nomberBlessé.textContent=blesse;
    const nomberForme=document.querySelector("#nomber-forme");
    nomberForme.textContent=forme;
}
function moyenage(){
    let somme=0;
    let moyen=0;
    let n=0;
    Joueurs.forEach((joueur)=>{
        somme=somme + joueur.age;
        n++;
    })
    if(n==0){
        moyen=0;
    }
    else{
        moyen=somme/n;
    }
    const moyenAge=document.querySelector("#moyen-age");
    moyenAge.textContent=moyen.toFixed(2);
    
}
function afficherJoueurs(joueursPage = Joueurs) {

    container.innerHTML = " ";
    joueursPage.forEach((joueur) => {
        const carte = document.createElement("div");
        carte.className="border-l-4 rounded-lg border-green-500 bg-slate-900 shadow-xl/30"
        
        const informations = document.createElement("div");
        informations.className="flex gap-3 m-3"
        const numero = document.createElement("p");
        numero.className="rounded-full  border-2 border-green-600 self-center text-green-600 font-medium   text-xl py-2 px-4";
        numero.textContent = joueur.numero;
        const details = document.createElement("div");
        const nom = document.createElement("p");
        nom.className="text-xl font-medium text-gray-50"
        nom.textContent=joueur.nom;
        const poste = document.createElement("p");
        poste.className="bg-green-500/30 pl-1 text-green-500 rounded-lg w-8 font-medium text-sm";
        poste.textContent=joueur.poste;


        const Age =document.createElement("p")
        Age.className="ml-3 font-medium text-gray-500 text-sm"
        Age.innerHTML=`age <span></span> ans`
        const age=Age.querySelector("span");
        age.textContent=joueur.age;
        const linge=document.createElement("div")
        linge.className="m-3 flex justify-between"
        const status=document.createElement("p")
        status.className="bg-green-500/30 pl-1 text-green-500 w-17 rounded-lg text-sm font-medium";
        status.textContent = joueur.status;

        const actions = document.createElement("div");
        actions.className="flex gap-2"
        const btnCaptain=document.createElement("button");
        btnCaptain.className="border-1 rounded-lg  border-gray-50 w-7"
        btnCaptain.innerHTML=`<span class="text-gray-400 font-medium">C</span>`;
        const btnModifier = document.createElement("button");
        btnModifier.className = "text-orange-600 hover:text-blue-600 cursor-pointer";
        btnModifier.innerHTML = '<i class="fa-solid fa-pen"></i>';
        btnModifier.title = "Modifier";
        const btnSupprimer = document.createElement("button");
        btnSupprimer.className = "text-black  hover:text-red-700 cursor-pointer";
        btnSupprimer.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btnSupprimer.title = "Supprimer";
         if(joueur.poste ==="GB"){
             carte.className="border-l-4 rounded-lg border-orange-400 bg-slate-900 shadow-xl/30"
             numero.className="rounded-full  border-2 border-orange-400 self-center text-orange-400 font-medium   text-xl py-2 px-4";
             poste.className="bg-orange-400/30 pl-1 text-orange-400 rounded-lg w-8 font-medium text-sm";
        }
        else if(joueur.poste ==="MIL"){
            carte.className="border-l-4 rounded-lg border-blue-500 bg-slate-900 shadow-xl/30"
            numero.className="rounded-full  border-2 border-blue-500 self-center text-blue-500 font-medium   text-xl py-2 px-4";
            poste.className="bg-blue-500/30 pl-1 text-blue-500 rounded-lg w-8 font-medium text-sm";
        }
        else if(joueur.poste ==="ATT"){
            carte.className="border-l-4 rounded-lg border-red-600 bg-slate-900 shadow-xl/30"
            numero.className="rounded-full  border-2 border-red-600 self-center text-red-600 font-medium   text-xl py-2 px-4";
            poste.className="bg-red-600/30 pl-1 text-red-600 rounded-lg w-8 font-medium text-sm";
        }
        if(joueur.status==="Blessé"){
            status.className="bg-red-600/30 pl-1 text-red-600 w-13 rounded-lg text-sm font-medium";
        }
        if(joueur.capitaine){
            btnCaptain.classList.add("bg-purple-700","text-white")
            carte.classList.add("border-y-2","border-r-2","border-purple-700")
        }
        btnSupprimer.addEventListener("click", () => {
                const index = Joueurs.indexOf(joueur);
                Joueurs.splice(index, 1);
                carte.remove();
                localStorage.setItem("Joueurs", JSON.stringify(Joueurs));
                nombreJoueurs.textContent = Joueurs.length;
                paginate(Joueurs, afficherJoueurs)
        });
        btnModifier.addEventListener("click", ()=>{
            editingId=joueur.id;
            nomJoueur.value = joueur.nom;
            numeroJoueur.value = joueur.numero;
            posteJoueur.value=joueur.poste;
            ageJoueur.value=joueur.age;
            statue.value=joueur.status;
            form.classList.remove("hidden");
        })
        
        btnCaptain.addEventListener("click",()=>{
            Joueurs.forEach((joueur)=>{
                joueur.capitaine=false;
            });
            joueur.capitaine=true;
            localStorage.setItem("Joueurs",JSON.stringify(Joueurs));
            paginate(Joueurs,afficherJoueurs);
        })
        details.append(nom, poste);
        informations.append(numero, details);
        actions.append(btnCaptain,btnModifier, btnSupprimer);
        linge.append(status,actions)
        carte.append(informations,Age,linge);
        container.append(carte);
    });
    nombreJoueurs.textContent = Joueurs.length;
}
const itemsPerPage = 8;
let currentPage = 1;

function paginate(Joueurs, afficherJoueurs) {

    const pagination = document.querySelector("#pagination");

    const totalPages = Math.ceil(Joueurs.length / itemsPerPage);

    // Vérifier la page actuelle
    if (currentPage > totalPages) {
        currentPage = Math.max(1, totalPages);
    }

    // Afficher les joueurs de la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const joueursPage = Joueurs.slice(startIndex, endIndex);

    afficherJoueurs(joueursPage);

    // Créer les boutons
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {

        const button = document.createElement("button");

        button.textContent = i;

        button.className = "px-4 py-2 rounded-lg border border-gray-500";

        if (i === currentPage) {
            button.classList.add("bg-green-500", "text-white");
        }

        button.addEventListener("click", () => {
            currentPage = i;
            paginate(Joueurs, afficherJoueurs);
        });

        pagination.appendChild(button);
    }
}



// RECHERCHE
const searchtext=document.querySelector("#text-search");
searchtext.addEventListener("input",function(){
    let searchValue=this.value.toLowerCase();
    let filteredJoueur=Joueurs.filter(joueur=>joueur.nom.toLowerCase().includes(searchValue));
    afficherJoueurs(filteredJoueur);
})














paginate(Joueurs, afficherJoueurs);
En_forme();
moyenage();
