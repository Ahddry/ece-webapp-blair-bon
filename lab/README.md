# Projet - Technologies web SI

## 1. Introduction

Deuxième laboratoire de Technologies web SI portant sur la découverte et l'utilisation de **Node.js**.

### État d'avancement

Cette application est actuelement capable de :

1. D'installer ses dépendances avec **npm**
2. Créer un serveur **express** lançant des scripts **Node.js**
3. Rediriger l'utilisateur vers les bonnes routes pour afficher les pages adéquates
4. Lire et afficher des fichiers **JSON**
5. Recvoir des données de requêtes **POST**
6. Tester automatiquement le bon fonctionnement des fonctionalités de l'application avec le framework de tests **Mocha** et le package **SuperTest**

### Fonctionnalités supplémentaires

Pour compléter cette première application au style très brut et basique, nous avons décidé d'y rajouter une couche d'**HTML** et de **CSS** afin d'en améliorer le rendu et la fluidité de navigation.

## 2. Installation

Pour installer l'application, il suffit simplement d'exécuter la commande suivante dans le dossier d'installation :

```bash
git clone https://github.com/Ahddry/ece-webapp-blair-bon
```

Pour installer les dépendances via **nmp**, il faut ensuite exécuter la commande suivante :

```bash
npm install
```

## 3. Utilisation

### Utilisation de l'application

Pour lancer le serveur **node.js**, un simple appel de la commande suivante dans le dossier suffit.

```bash
npm start
#Ou
npm run start
```

Le port **8080** est assigné par défaut au serveur mais il se peut que celui-ci soit déjà utilisé par une autre application, auquel cas il faut vérifier dans la console le message indiquant le numéro de port ouvert.

***

Une fois le serveur lancé, il faut aller à l'URL <http://localhost:8080> pour arriver sur la première page qui nous donne les instructions.

Aller à l'adresse <http://localhost:8080/hello> ouvre une autre page qui nous dit bonjour en tant qu'anonyme et nous invite à donner notre nom.

Ouvrir l'adresse <http://localhost:8080/hello?name=exemple> nous ouvre une nouvelle page qui dit bonjour à la personne dont le nom est mis à la place de *exemple* dans l'URL.

Les pages <http://localhost:8080/hello?name=Adrien>, <http://localhost:8080/hello?name=Aurelien> et <http://localhost:8080/hello?name=Tosca> sont des pages aux messages personnalisés.

Si un suffixe inconnu est rentré, on est alors redirigé vers une page d'*erreur 404* nous indiquant que la page recherchée n'existe pas.

Enfin, si un fichier `.json` existe dans le dossier `./content`, alors l'ouverture de la page à l'adresse <http://localhost:8080/>[NomDuFichier] permettra d'afficher sur la page les informations contenues dans le dit fichier.

***

Ouvrir l'adresse <http://localhost:8080/articles/> permet d'afficher la liste des articles sauvegardés dans la base de donnée du fichier `articles.js`.

Ouvrir la page sur la route `/articles/[id]`, où [id] représente l'attribut `id` d'un article de la base de données ouvre cet article.

Ouvrir la page sur la route `/articles/[id]/comments` affiche tous les commentaires de l'article dont l'id est précisé à la place de [id].

L'ouverture de la page à la route `/articles/[id]/comments/[id2]` ouvre le commentaire d'id [id2] pour de l'article d'id [id].

### Lancement des tests

Pour lancer les tests, il faut exécuter la commande :

```bash
npm test
```

## Contributeurs

- Adrien Blair [@Ahddry](https://github.com/Ahddry)
- Aurélien Bon [@Aurelien-Bon](https://github.com/Aurelien-Bon)
