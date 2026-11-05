# Tachkilav2
# ⚽ TACHKILA v2 -- Atlas FC

## 1. Présentation du projet

**TACHKILA v2** est une application web destinée au club amateur **Atlas
FC**. Elle permet de gérer l'effectif des joueurs, préparer les
compositions tactiques en formation **4-4-2** et suivre les matchs de
l'équipe.

Cette deuxième version fait évoluer TACHKILA v1 vers une application
composée de trois pages partageant les mêmes données grâce à
`localStorage` :

-   **Effectif (`index.html`)** : gestion des joueurs.
-   **Composition (`composition.html`)** : préparation de la composition
    tactique.
-   **Matchs (`matchs.html`)** : gestion des rencontres et suivi des
    résultats.

L'objectif est de proposer une application responsive avec une interface
claire, fluide et intuitive, tout en respectant les bonnes pratiques de
développement JavaScript moderne.

### Technologies utilisées

-   HTML5 sémantique
-   CSS3 et CSS Grid natif
-   Tailwind CSS
-   JavaScript ES6+
-   DOM et événements JavaScript
-   ES6 Modules (`import` / `export`)
-   `localStorage`
-   Git et GitHub (branches, commits et Pull Requests)
-   Atlassian Jira (planification des tâches)
-   Vercel (déploiement)

## 2. Planification et avancement

### Jour 1 --- Mercredi 28/10/2026

-   Planification des tâches avec Jira.
-   Organisation du projet et découpage des fonctionnalités.
-   Définition de l'architecture des modules JavaScript.
-   Mise en place de la navigation entre les trois pages.
-   Préparation de la structure HTML et des interfaces.

### Jour 2 --- Jeudi 29/10/2026

-   Réorganisation du code de TACHKILA v1 en modules ES6.
-   Séparation des données, des fonctions de validation et de
    l'interface.
-   Mise en place des instructions `import` et `export`.
-   Centralisation des données partagées dans `localStorage`.
-   Vérification de la communication des données entre les trois pages.

### Jour 3 --- Vendredi 30/10/2026

-   Création des cartes de joueurs sur la page Effectif.
-   Mise en place de l'ajout, de la modification et de la suppression
    des joueurs.
-   Création des modales de gestion des joueurs.
-   Validation des formulaires avec des expressions régulières (regex).
-   Vérification des règles métier : numéro unique, âge entre 18 et 39
    ans et maximum deux gardiens.

### Jour 4 --- Lundi 02/11/2026

-   Mise en place de la désignation du capitaine.
-   Gestion du capitaine unique dans l'effectif.
-   Ajout de la recherche par nom.
-   Mise en place du filtrage par poste.
-   Combinaison de la recherche et du filtrage.
-   Ajout de la pagination avec 8 joueurs par page.
-   Premier déploiement du projet sur Vercel.

### Jour 5 --- Mardi 03/11/2026

-   Création de la page Matchs.
-   Création des cartes de matchs.
-   Mise en place de l'ajout, de la modification et de la suppression
    des matchs.
-   Création des modales de gestion des rencontres.
-   Validation des champs du formulaire avec des regex.
-   Enregistrement des informations des matchs dans `localStorage`.

### Jour 6 --- Mercredi 04/11/2026

-   Mise en place des filtres : Tous, À venir et Joués.
-   Ajout de la recherche par nom de l'adversaire.
-   Combinaison des onglets et de la recherche.
-   Gestion de la saisie des scores dans une modale.
-   Calcul automatique du résultat : victoire, nul ou défaite.
-   Différenciation des résultats avec des couleurs.

### Jour 7 --- Jeudi 05/11/2026

-   Gestion des joueurs blessés sur la page Composition.
-   Blocage du placement des joueurs blessés sur le terrain.
-   Synchronisation entre l'effectif et la composition.
-   Suppression automatique du terrain des joueurs blessés, supprimés ou
    dont le poste change.
-   Adaptation responsive des trois pages : Effectif, Composition et
    Matchs.

### Jour 8 --- Vendredi 06/11/2026

-   Tests des fonctionnalités et des différents cas d'erreur.
-   Vérification de la cohérence des données entre les trois pages.
-   Correction des derniers problèmes.
-   Finalisation du README et de la documentation.
-   Préparation de la présentation et de la démonstration du projet.
-   Livraison finale.

## 3. Structure du projet

Le projet est organisé en plusieurs fichiers HTML, CSS et JavaScript
afin de séparer les responsabilités et faciliter la maintenance.

``` text
TACHKILA-V2/
│
├── index.html
├── composition.html
├── matchs.html
│
├── js/
│   ├── data/
│   │   └── data.js
│   │
│   ├── validation/
│   │   └── validation.js
│   │
│   ├── interface/
│   │   └── interface.js
│   │
│   ├── Effectif.js
│   ├── composition.js
│   └── matchs.js
│
├── css/
│   └── Tachkila.css
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

> Les modules JavaScript sont organisés autour de trois responsabilités
> principales : les données, la validation et l'interface. Chaque page
> possède également son propre fichier d'entrée.

## 4. Fonctionnalités principales

### Gestion de l'effectif

-   Ajouter, modifier et supprimer un joueur.
-   Afficher les joueurs sous forme de cartes.
-   Afficher le numéro, le nom, le poste, l'âge et le statut.
-   Différencier les postes avec des couleurs.
-   Gérer les joueurs en forme et blessés.
-   Désigner un capitaine unique.
-   Rechercher et filtrer les joueurs simultanément.
-   Afficher 8 joueurs par page avec pagination.
-   Consulter les statistiques de l'effectif.

### Gestion de la composition

-   Afficher un terrain de football en formation 4-4-2.
-   Placer les joueurs sur les positions correspondantes.
-   Vérifier la compatibilité entre le poste et la position.
-   Empêcher le placement des joueurs blessés.
-   Synchroniser les modifications de l'effectif avec le terrain.
-   Retirer automatiquement les joueurs qui ne peuvent plus jouer.

### Gestion des matchs

-   Ajouter, modifier et supprimer un match.
-   Enregistrer l'adversaire, la date, l'heure et le lieu.
-   Définir les matchs à domicile ou à l'extérieur.
-   Filtrer les matchs selon leur état.
-   Rechercher un adversaire.
-   Saisir les scores des matchs terminés.
-   Déterminer automatiquement les victoires, les nuls et les défaites.
-   Afficher les résultats avec des couleurs différentes.
-   Consulter le bilan des matchs.

## 5. Règles métier

-   Un joueur possède un nom de 3 à 30 lettres.
-   Le numéro doit être compris entre 1 et 99 et être unique.
-   L'âge doit être compris entre 18 et 39 ans.
-   L'effectif ne peut pas contenir plus de deux gardiens.
-   Un seul joueur peut être capitaine.
-   Un joueur blessé ne peut pas être placé sur le terrain.
-   Chaque position accepte uniquement un joueur compatible avec le
    poste demandé.
-   Les données doivent rester synchronisées entre les trois pages.

## 6. Gestion des données et responsive design

### Sauvegarde des données

L'application utilise `localStorage` pour :

-   Conserver les informations des joueurs.
-   Enregistrer les compositions et les informations nécessaires à leur
    synchronisation.
-   Sauvegarder les matchs et leurs scores.
-   Retrouver les données après actualisation.
-   Partager les mêmes données entre les trois pages.



## 7. Liens du projet

-   **Présentation Canva** : *[https://canva.link/1mk3n3vhx9yyenk]*

## 8. Bilan

Ce projet m'a permis d'approfondir mes connaissances en JavaScript ES6+,
notamment la manipulation du DOM, les événements, les modules, les
méthodes de tableaux ( `filter`, `find`, `some` et `slice` 
), la validation des formulaires et la gestion des données avec
`localStorage`.

