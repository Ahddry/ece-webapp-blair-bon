# Projet - Technologies web SI

## 1. Introduction

Projet du premier semestre de Technologies web SI.

Le contenu créé pour les TP 1 à 3 est disponible dans le dossier [server](https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/server), la suite dont nous parlons dans cette documentation est quant à elle dispnible dans le dossier [www](https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/www).

### État d'avancement

Cette application est actuelement capable de :

1. Afficher des pages écrites en **React** à l'aide du framework **Next.js**, maintenant dans sa version **13**
2. Rediriger dynamiquement l'utilisateur vers les bonnes routes pour afficher les pages adéquates
3. Inclure des styles Tailwind CSS variés
4. Être réactive à la taille des appareils sur lesquels elle est affichée (responsive design)
5. Insérer et collecter des données d'une base de données Supabase
6. Gérer des accès et des identitées d'utilisateurs

### Fonctionnalités supplémentaires

Pour compléter cette application, nous avons décidé d'y rajouter le package `next-themes` qui permet ainsi à l'utilisateur de modifier le thème de couleur (clair ou sombre) de l'application à sa guise, afin d'en améliorer le rendu et la fluidité de navigation.

Cette application comporte aussi des icônes **React Icons** pour améliorer la lisibilité et le rendu final.

Une barre de navigation est affichée en haut et avec tous les liens vers d'autres pages pour les plus grads écrans, tandis que pour les plus petits ces liens sont regroupés dans un menu latéral à tiroirs.

Les profils des personnes peuvent être modifiés de manières très simples puisqu'ils sont simplement définis dans des objets `JS` dans les fichiers `Adrien.jsx` et `Aurélien.jsx` comme suit :

- Les profils sont définis par :

```js
const dataPersonne =
{
    prenom: "Prénom",
    nom: "Nom",
    age: "age",
    image: "/image.jpg",
    description: "Description de la personne",
};

```

- Les compétences par :

```js
const compPersonne =
{
    langages:
    [
        ["Langage1", "/languages/LogoLangage1.png"],
        ["Langage2", "/languages/LogoLangage2.png"],
    ],
    description:
        "Description des compétences de la personne.",
};

```

- Les projets réalisés par :

```js
const projPersonne =
{
    projets:
    [
        ["Nom du projet 1", "Outils utilisés", "/projects/projet1/projet1photo1.jpg"],
        ["Nom du projet 2", "Outils utilisés", "/projects/projet2/projet2photo1.jpg"],
    ],
    description: "Description des projets de la personne.",
};

```

- Les expériences par :

```js
const expPersonne =
{
    entreprises:
    [
        ["Nom de l'entreprise 1", "Date début - Date fin", "Descriptif poste 1", "/entreprises/logo1.png"],
        ["Nom de l'entreprise 2", "Date début - Date fin", "Descriptif poste 2", "/entreprises/logo2.png"],
    ],
    description: "Description des expériences de la personne.",
};

```

Il est donc très facile de modifier ces données et d'en ajouter, puisqu'elles sont passées en paramètre des éléments à afficher, ces derniers s'adapteront dynamiquement.

### Fonctionnalités à venir

Nous prévoyons de créer une route par projet ayant été réalisés, affichant ainsi une page décrivant en détail le dit projet. Cette page tirera ses données d'un fichier `JSON` avec nottament une liste de captures d'écran du projet, une liste des participants à ce projets, une liste des outils/langages utilisés, une description détaillée du projet et si possible un lien vers le GitHub du projet.

## 2. Installation

Pour installer l'application, il suffit simplement d'exécuter la commande suivante dans le dossier d'installation :

```bash
git clone https://github.com/Ahddry/ece-webapp-blair-bon
```

Il faut ensuite se rendre dans le dossier `www` :

```bash
cd www
```

Pour installer les dépendances via **nmp**, il faut ensuite exécuter la commande suivante :

```bash
npm install
```

## 3. Utilisation

### Utilisation de l'application

Pour lancer le serveur, il faut tout d'abord aller dans le dossier `www` :

```bash
cd www
```

Après quoi deux choix s'offrent à vous :

Soit compiler le code et lancer le serveur dans sa version stable

```bash
npm run build
# Puis
npm run start
```

Soit lancer la version de développement :

```bash
npm run dev
```

Le port **3000** est assigné par défaut au serveur mais il se peut que celui-ci soit déjà utilisé par une autre application, auquel cas il faut vérifier dans la console le message indiquant le numéro de port ouvert.

***

Une fois le serveur lancé, il faut aller à l'URL <http://localhost:3000> pour arriver sur les portfolios d'Adrien et d'Aurélien. Cliquer sur l'un ou l'uatre des profils permet de changer le contenu du reste de la page par le portfolio de l'un ou de l'autre, montrant ainsi :

- Une brève description de la personne
- Une présentation de ses compétences (langages de programmation qu'il maîtrise)
- Une présentation des projets qu'il a pu réalisé
- Une liste des entreprises où il a pu travailler
- Un formulaire de contact enregistrant le message, son sujet ainsi que l'adresse e-mail de l'expéditeur sur la base de données

La page <http://localhost:3000/login> permet de s'authentifier sur l'application avec un compte préalablement créé sur la page <http://localhost:3000/signup>, et d'ainsi accéder au contenu de la page [profil](http://localhost:3000/profil).

La page de <http://localhost:3000/profil> n'est disponible que pour les utilisateurs authentifiés et permets d'accéder aux informations de sson profil ainsi que de lire les messages qui leur ont étés adressés sur le formulaire de contact de la page principale pour les utilisateurs administrateurs.

Aller à l'adresse <http://localhost:3000/articles> permet d'afficher la liste des articles disponibles ainsi qu'un lien pour y accéder.

La page <http://localhost:3000/contacts> donne toutes les informations nécéssaires pour nous contacter.

La page à l'adresse <http://localhost:3000/about> nous donne des informations sur l'application en elle-même.

Si une adresse inconnue est rentrée, on est alors redirigé vers une page d'*erreur 404* nous indiquant que la page recherchée n'existe pas.

## 4. Contributeurs

- Adrien Blair [@Ahddry](https://github.com/Ahddry)
- Aurélien Bon [@Aurelien-Bon](https://github.com/Aurelien-Bon)
