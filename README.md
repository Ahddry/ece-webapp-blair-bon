# TP 2 - Découverte de Node.js

## 1. Introduction

Deuxième laboratoire de Technologies web SI portant sur la découverte et l'utilisation de **Node.js**.

### Objectifs

Les objectifs de ce TP étaient de :

1. Démarrer un projet avec **npm**
2. Créer un premier script **Node.js** relativement simple
3. Créer un premier serveur **HTTP**
4. Ajouter **Nodemon** pour la mise à jour automatique du serveur
5. Créer une application basique avec de multiples pages
6. Lire et afficher des fichiers **JSON**

### Fonctionnalités supplémentaires

Pour compléter cette première application au style très brut et basique, nous avons décidé d'y rajouter une couche d'**HTML** et de **CSS** afin d'en améliorer le rendu et la fluidité de navigation.

## 2. Installation

Consignes.

## 3. Utilisation

Pour lancer le serveur **nodemon**, un simple appel de la commande suivante dans le dossier suffit.

```bash
npx nodemon index.js
```

Une fois le serveur lancé, il faut aller à l'URL <http://localhost:8080> pour arriver sur la première page qui nous donne les instructions.

Aller à l'adresse <http://localhost:8080/hello> ouvre une autre page qui nous dit bonjour en tant qu'anonyme et nous invite à donner notre nom.

Ouvrir l'adresse <http://localhost:8080/hello?name=exemple> nous ouvre une nouvelle page qui dit bonjour à la personne dont le nom est mis à la place de *exemple* dans l'URL.

Les pages <http://localhost:8080/hello?name=Adrien>, <http://localhost:8080/hello?name=Aurelien> et <http://localhost:8080/hello?name=Tosca> sont des pages aux messages personnalisés.

Si un suffixe inconnu est rentré, on est alors redirigé vers une page d'*erreur 404* nous indiquant que la page recherchée n'existe pas.

Enfin, si un fichier `.json` existe dans le dossier `./content`, alors l'ouverture de la page à l'adresse <http://localhost:8080/>[NomDuFichier] permettra d'afficher sur la page les informations contenues dans le dit fichier.

## Contributeurs

- Adrien Blair [@Ahddry](https://github.com/Ahddry)
- Aurélien Bon [@Aurelien-Bon](https://github.com/Aurelien-Bon)
