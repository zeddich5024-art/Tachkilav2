
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
    else if(age<14){
        errorAge.textContent="l'age trée petit";
        valide=false;
    }
    else if(age>50){
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


