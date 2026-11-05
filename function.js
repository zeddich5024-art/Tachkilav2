
// validation de form ajouter
export function validationform(errorNom,errorNumber,errorPoste,nom,numero,age,posteJoueur,errorAge,Joueurs,editingId){
      let valide = true;
    if (nom.length == 0) {
        errorNom.textContent = "Le nom est requis.";
        valide = false;
    }
    else if (nom.length < 3) {
        errorNom.textContent = "Le nom doit contenir au moins 3 caractères.";
        valide = false;
    } else {
        errorNom.textContent = "";
    }
    if (numero == "") {
        errorNumber.textContent = "Le numero est requis.";
        valide = false;
    }
    else if(numero<1){
        errorNumber.textContent="Le numero doit étre supérieure ou égale 1";
        valide=false;
    }
    else if(numero>99){
        errorNumber.textContent="Le numero doit étre inférieure ou égale 99";
        valide=false;
    }
    else{
        errorNumber.textContent = "";
    }
    if (age == "") {
        errorAge.textContent = "L'age est requis.";
        valide = false;
    }
    else if(age<18){
        errorAge.textContent="l'age trée petit";
        valide=false;
    }
    else if(age>39){
        errorAge.textContent="l'age trée ground ";
        valide=false;
    }
    else{
        errorAge.textContent = "";
    }
    if(posteJoueur.value == ""){
        errorPoste.textContent ="Veuillez choisir un poste";
        valide=false;
    }
    else{
        errorPoste.textContent="";
    }
    if (!valide) {
        return false;;
    }
    const numeroExiste = Joueurs.some((joueur) => joueur.numero === numero && joueur.id !== editingId);
        if (numeroExiste) {
            alert("Ce numéro est déjà utilisé!:")
            return false;
        }else{return true;}
        
}

// button ajouter
export function ajouter(form){
    const formJoueur=document.querySelector("#form-joueur")
    const afficherform = document.querySelector(".ajouter");
    afficherform.addEventListener("click", () => {
    formJoueur.reset();
    form.classList.remove("hidden");
})
}

// button annuler
export function annuler(form){
    const annulerForm = document.querySelector("#annuler")
    annulerForm.addEventListener("click", () => {
    form.classList.add("hidden");
    })
    
}

// button X
export function btnX(form){
    const btnX = document.querySelector("#btnX");
    btnX.addEventListener("click", () => {
    form.classList.add("hidden");
    })
} 

// validation de poste
export function validationposte(listposition,joueur,Joueurs){
        
            const nouvellePosition = listposition.value;
            
            const positionOccupee = Joueurs.some(autreJoueur =>
                autreJoueur.id !== joueur.id && autreJoueur.position == nouvellePosition && nouvellePosition !== "banc"
            )
            if (positionOccupee) {
                alert("Ce poste est déjaà occupé !")
                listposition.value = joueur.position || "banc";
                return;
            }
            joueur.position = nouvellePosition;
            localStorage.setItem("Joueurs", JSON.stringify(Joueurs));
}
// affichage des joueurs dans terrain
export function afficherTerrain(Joueurs) {
    console.log("zakaria")
    const positions = ["GB", "DG", "DC1", "DC2", "DD", "MG", "MC1", "MC2", "MD", "BU1", "BU2"];
    positions.forEach(position => {
        const caseTerrain = document.querySelector(`.position-joueur .${position}`);
        if (!caseTerrain) {
            console.error("Centre introuvable:", position);
            return
        }
        const joueur = Joueurs.find(joueur => joueur.position === position);
        if (joueur) {
            caseTerrain.innerHTML = "";

            const numero = document.createElement("span");
            numero.className = "numero-terrain";
            numero.textContent = `#${joueur.numero}`;
            const poste = document.createElement("span");
            poste.className = "poste-terrain"
            poste.textContent = position;
            const nom = document.createElement("span");
            nom.className = "nom-terrain";
            nom.textContent = joueur.nom;

            caseTerrain.append(numero, poste, nom);

        }
        else{
            caseTerrain.innerHTML=position;
        }

    });
}
// compter Joueurs Terrain
export function compterJoueursTerrain(nombreTerrain,Joueurs) {
    const total = Joueurs.filter(joueur => joueur.position !== "banc" && joueur.position !== "").length;
    nombreTerrain.textContent = total;
    localStorage.setItem("Joueurs", JSON.stringify(Joueurs));
}