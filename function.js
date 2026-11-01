
// create les carts des joueurs
export function creatCart(carte,ligne,informations,numero,nom,poste,actions,btnModifier,btnSupprimer,btnCaptain,joueur){
        
        carte.className = "p-3 border-1 border-gray-800 shadow-xl/30 bg-green-600/8 rounded-lg mb-4";

    
        ligne.className = "flex gap-5 justify-between";

       
        informations.className = "flex gap-5";

        
        numero.className = "bg-slate-900 text-orange-600 border border-orange-600 px-5 py-3 rounded-full font-medium";
        numero.textContent = joueur.numero;

        
        
        nom.className = "font-medium text-gray-50";
        nom.textContent = joueur.nom;

        
        poste.className = "font-medium text-orange-600";
        poste.textContent = joueur.poste;
        // Icônes Modifier et Supprimer
        
        actions.className = "flex gap-3 items-start";

        
        btnModifier.className = "text-orange-600 hover:text-blue-600 cursor-pointer";
        btnModifier.innerHTML = '<i class="fa-solid fa-pen"></i>';
        btnModifier.title = "Modifier";

        
        btnSupprimer.className = "text-black  hover:text-red-700 cursor-pointer";
        btnSupprimer.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btnSupprimer.title = "Supprimer";
          

        btnCaptain.className ="text-white cursor-pointer rounded-full hover:bg-purple-800 "
        btnCaptain.textContent = "C";
        
}

// validation de form ajouter
export function validationform(errorNom,errorNumber,errorPoste,nom,numero,age,posteJoueur,errorAge,Joueurs){
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
    const numeroExiste = Joueurs.some((joueur) => joueur.numero === numero);
        if (numeroExiste) {
            alert("Ce numéro est déjà utilisé!:")
            return false;
        }else{return true;}
        
}

// button ajouter
export function ajouter(form){
    const afficherform = document.querySelector(".ajouter");
    afficherform.addEventListener("click", () => {
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

// modifier form des joueurs 
export function modifiction(){
formModifier.addEventListener("submit", (e) => {
    e.preventDefault();
    if (joueurModifier === null) return;
    const nom = nomModifier.value.trim();
    const numero = Number(numeroModifier.value);
    const poste = formModifier.querySelector('input[name="posteModifier"]:checked');
    if (nom.length < 3 || !poste || numero < 1 || numero > 99) {
        console.log("jfido")
        alert("Veuillez vérifier les informations.");
        return;
    }
    const numeroExiste = joueurs.some(
        joueur => joueur.numero === numero && joueur.id !== joueurModifier.id
    );
    if (numeroExiste) {
        alert("Ce numéro est déjà utilisé !");
        return;
    }
    joueurModifier.nom = nom;
    joueurModifier.numero = numero;
    joueurModifier.poste = poste.value.trim();
    localStorage.setItem("joueurs",JSON.stringify(joueurs));
    containerModifier.classList.add("hidden");
    joueurModifier = null;
    afficherJoueurs();
});
}

// bottun modifier
export function btnmodifier(){
    joueurs.forEach((joueur)=>{
        joueurModifier = joueur;
        nomModifier.value = joueur.nom;
        numeroModifier.value = joueur.numero;
        formModifier.querySelector(`input[name="posteModifier"][value="${joueur.poste}"]`).checked = true;
        containerModifier.classList.remove("hidden");
    })
}

// bottun supprimer
export function supprimer(carte) {
    joueurs.forEach((joueur)=>{
        const index = joueurs.indexOf(joueur);
        joueurs.splice(index, 1);
        carte.remove();
        localStorage.setItem("joueurs", JSON.stringify(joueurs));
      })
}
