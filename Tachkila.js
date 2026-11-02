// ajouter les joueurs
const formJoueur = document.querySelector("#form-joueur");
const nomJoueur = document.querySelector("#nom-joueur");
const numeroJoueur = document.querySelector("#numero-joueur")
let joueurs = JSON.parse(localStorage.getItem("joueurs")) || [];
let idjoueur = joueurs.length;
function validationform(errorNom,errorNumber,errorPoste,nom,numero,posteJoueur){
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
    else if (numero < 1) {
        errorNumber.textContent = "Le numero doit étre supérieure ou égale 1";
        valide = false;
    }
    else if (numero > 99) {
        errorNumber.textContent = "Le numero doit étre inférieure ou égale 99";
        valide = false;
    }
    else {
        errorNumber.textContent = "";
    }
    if (!posteJoueur) {
        errorPoste.textContent = "Veuillez choisir un poste";
        valide = false;
    }
    else {
        errorPoste.textContent = "";
    }
    if (!valide) {
        return;
    }

}
formJoueur.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = nomJoueur.value.trim();
    const numero = Number(numeroJoueur.value);

    const posteJoueur = document.querySelector('input[name="poste"]:checked');
    // Validation de Form
    const errorNom = document.querySelector("#errornom");
    const errorNumber = document.querySelector("#errornumber");
    const errorPoste = document.querySelector("#errorposte")
    validationform(errorNom,errorNumber,errorPoste,nom,numero,posteJoueur);

    const numeroExiste = joueurs.some((joueur) => joueur.numero === numero);
    if (numeroExiste) {
        alert("Ce numéro est déjà utilisé!:")
        return;
    }

    const nouveauJoueur = {
        id: idjoueur,
        nom: nom,
        poste: posteJoueur.value,
        numero: numero,
        position: ""
    };

    joueurs.push(nouveauJoueur);
    localStorage.setItem("joueurs", JSON.stringify(joueurs));
    idjoueur++;
    console.log(joueurs);
    formJoueur.reset();
    afficherJoueurs();
    form.classList.add("hidden");
});
const liste = document.querySelector("#liste-joueurs");
const messageVide = document.querySelector("#message-vide");
const nombreJoueurs = document.querySelector("#nombre-joueurs");

const containerModifier = document.querySelector("#containerModifier");
const formModifier = document.querySelector("#formModifier");
const nomModifier = document.querySelector("#nomModifier");
const numeroModifier = document.querySelector("#numeroModifier");
const btnAnnuler = document.querySelector("#btnAnnuler");

let joueurModifier = null;
// Afficher les joueurs
function btnmodifier(){
    joueurs.forEach((joueur)=>{
        joueurModifier = joueur;
        nomModifier.value = joueur.nom;
        numeroModifier.value = joueur.numero;
        formModifier.querySelector(`input[name="posteModifier"][value="${joueur.poste}"]`).checked = true;
        containerModifier.classList.remove("hidden");
    })
}
function supprimer(carte) {
    joueurs.forEach((joueur)=>{
        const index = joueurs.indexOf(joueur);
        joueurs.splice(index, 1);
        carte.remove();
        localStorage.setItem("joueurs", JSON.stringify(joueurs));
      })
}
function creatCart(carte,ligne,informations,numero,nom,poste,actions,btnModifier,btnSupprimer,listposition,joueur){
        
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

        // select
        
        listposition.className = " w-70 border-1 border-gray-500 shadow-xl/30 bg-gray-400/8 h-8 mt-4 rounded-lg";
        listposition.innerHTML = `
            <option value="banc">Sur le banc</option>
            <option value="GB">GB-Gardien</option>
            <option value="DG">DG-Défenseur gauche</option>
            <option value="DC1">DC-Défenseur central 1</option>
            <option value="DC2">DC-Défenseur central 2</option>
            <option value="DD">DD-Défenseur droit</option>
            <option value="MG">MG-Milieu gauche</option>
            <option value="MC1">MC-Milieu central 1</option>
            <option value="MC2">MC-Milieu central 2</option>
            <option value="MD">MD-Milieu droit</option>
            <option value="BU1">BU-Buteur 1</option>
            <option value="BU2">BU-Buteur 2</option>
                `;
}
function validationposte(listposition,joueur){
        
            const nouvellePosition = listposition.value;
            const postesAutorises = {
                Gardien: ["GB"],
                Défenseur: ["DG", "DC1", "DC2", "DD"],
                Milieu: ["MG", "MC1", "MC2", "MD"],
                Attaquant: ["BU1", "BU2"]
            };
            if (nouvellePosition !== "banc" && !postesAutorises[joueur.poste]?.includes(nouvellePosition)) {
                alert("Ce poste ne correspond pas au joueur !");
                listposition.value = joueur.position || "banc";
                return;
            }
            const positionOccupee = joueurs.some(autreJoueur =>
                autreJoueur.id !== joueur.id && autreJoueur.position == nouvellePosition && nouvellePosition !== "banc"
            )
            if (positionOccupee) {
                alert("Ce poste est déjaà occupé !")
                listposition.value = joueur.position || "banc";
                return;
            }
            joueur.position = nouvellePosition;
            localStorage.setItem("joueurs", JSON.stringify(joueurs));
}
function afficherJoueurs() {

    liste.innerHTML = " ";
    joueurs.forEach((joueur) => {
        const carte = document.createElement("div");
        const ligne = document.createElement("div");
        const informations = document.createElement("div");
        const numero = document.createElement("p");
        const details = document.createElement("div");
        const nom = document.createElement("p");
        const poste = document.createElement("p");
        const actions = document.createElement("div");
        const btnModifier = document.createElement("button");
        const btnSupprimer = document.createElement("button");
        const listposition = document.createElement("select");
        creatCart(carte,ligne,informations,numero,nom,poste,actions,btnModifier,btnSupprimer,listposition,joueur);


        btnModifier.addEventListener("click", () => {
            btnmodifier()
        });
        btnAnnuler.addEventListener("click", () => {
            containerModifier.classList.add("hidden");
            joueurModifier = null;
        });

        //Supprimier carte joueur
        btnSupprimer.addEventListener("click", () => {
            supprimer(carte);
            nombreJoueurs.textContent = joueurs.length;
            messageVide.classList.toggle("hidden", joueurs.length > 0);
        });

        
        listposition.value = joueur.position || "banc";
        listposition.addEventListener("change", () => {
            validationposte(listposition,joueur)

            compterJoueursTerrain();
            afficherTerrain();
            console.log(joueur)
        })
        details.append(nom, poste);
        informations.append(numero, details);
        actions.append(btnModifier, btnSupprimer);
        ligne.append(informations, actions);
        carte.append(ligne, listposition);
        liste.append(carte);
    });
    nombreJoueurs.textContent = joueurs.length;
    messageVide.classList.toggle("hidden", joueurs.length > 0);
}
const btnX2 = document.querySelector("#btnX2")
btnX2.addEventListener("click", () => {
    containerModifier.classList.add("hidden");
})
function modifiction() {
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
        localStorage.setItem("joueurs", JSON.stringify(joueurs));
        containerModifier.classList.add("hidden");
        joueurModifier = null;
        afficherJoueurs();
    });
}
modifiction();
function afficherTerrain() {
    const positions = ["GB", "DG", "DC1", "DC2", "DD", "MG", "MC1", "MC2", "MD", "BU1", "BU2"];
    positions.forEach(position => {
        const caseTerrain = document.querySelector(`.position-joueur .${position}`);
        if (!caseTerrain) {
            console.error("Centre introuvable:", position);
            return
        }
        const joueur = joueurs.find(joueur => joueur.position === position);
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
        else {
            const noms = {
                DC1: "DC",
                DC2: "DC",
                MC1: "MC",
                MC2: "MC",
                BU1: "BU",
                BU2: "BU"
            };
            caseTerrain.textContent = noms[position] || position;
        }
    });
}
const nombreTerrain = document.querySelector("#nombre-terrain");
function compterJoueursTerrain() {
    const total = joueurs.filter(joueur => joueur.position !== "banc" && joueur.position !== "").length;
    nombreTerrain.textContent = total;
    localStorage.setItem("joueurs", JSON.stringify(joueurs));
}
compterJoueursTerrain()
afficherJoueurs()
afficherTerrain()