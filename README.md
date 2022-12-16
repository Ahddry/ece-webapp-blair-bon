# Projet - Technologies web SI

## Introduction

Projet du premier semestre de quatrième année à l'ECE en Technologies web SI.

Le contenu créé pour les TP 1 à 3 est disponible dans le dossier [server](https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/server), la suite dont nous parlons dans cette documentation est quant à elle dispnible dans le dossier [www](https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/www).

## A propos

Il s'agit d'un site web présentant les portfolios de deux étudiants de l'ECE, Adrien Blair et Aurélien Bon, ainsi que leurs compétences, leurs projets et leurs expériences professionnelles. Il a été créé à l'aide du framework pour **React** **Next.js 13**, de la base de données **Supabase** et a été stylisé avec **TailwindCSS**. Il est hébergé sur **Vercel**. Il est disponible à l'adresse suivante : <https://ece-webapp-blair-bon.vercel.app/>. Il est également possible de lancer le serveur en local en suivant les instructions de la section [Installation](#installation) et [Utilisation](#utilisation).

## Cahier des charges

Le cahier des charges du projet est disponible dans son intégralité [ici](https://github.com/adaltas/ece-webtech-2022-fall/blob/main/project-instructions.md). En résumé, il nous été demandé de créer une application web (blog, forum ou portfolio) incluant au moins les fonctionnalités suivantes :

- Authentifier les utilisateurs à l'aide d'un fournisseur externe avec **OAuth2**.
- Parcourir les articles et les commentaires des utilisateurs authentifiés et les gérer.
- Commenter les articles des autres utilisateurs.
- Modifier et supprimer ses articles et commentaires.
- Afficher le profil de l'utilisateur et modifier ses paramètres.
- Utiliser le **Gravatar** de l'utilisateur le cas échéant ou fournir un **Gravatar** par défaut.

### Choix d'implémentation

Il est à noter que pour ce projet, nous avons décidé de créer une application web de type portfolio, ainsi, toutes les fonctionnalités demandées pour des "*articles*" ont été remplacées par des "*projets*", que tous peuvent consulter, mais seulement les [administrateurs](#comptes-administrateurs) **Adrien** ou **Aurélien** peuvent modifier ou supprimer. Tout autre utilisateur authentifié peut commenter les projets et modifier ses commentaires.

Pour la base de données, nous avons come demandé utilisé **Supabase** mais dans sa version en ligne et non dans sa version locale.

Pour les comptes d'utilisateurs, nous avons comme demandé utilisé **Github** comme fournisseur externe d'authentification, mais les utilisateurs peuvent aussi se connecter avec leur nom d'utilisateur et mot de passe, après avoir créé un compte avec leurs noms d'utilisateur, email, prénom, nom et mot de passe.

Pour les avatars, nous avons utilisé **Gravatar** pour les utilisateurs connectés avec un nom d'utilisateur et mot de passe, en se basant sur l'adresse email avec laquelle ils ont créé leur compte, et les avatar des comptes **Github** pour les utilisateurs connectés avec **Github**.

Sur la page de profil, les utilisateurs connectés avec leur nom d'utilisateur et leur mot de passe peuvent modifier leurs paramètres, à savoir leur nom, prénom et nom d'utilisateur. Un lien vers le site de **Gravatar** leur permet de modifier leur avatar. Ils peuvent aussi y changer leur thème de couleur préféré pour le site. Les utilisateurs connectés avec **Github** peuvent quant à eux juste modifier leur couleur de thème préférée, pour le reste, ils sont redirigés vers la page de modification de leur profil sur le site de GitHub. Tous ces changements sur les profils sont enregistrés dans la base de données.

Le thème clair/sombre a été implémenté avec le package `next-themes` et permet de choisir le thème (clair ou sombre) avec un bouton dans la barre de navigation et pas seulement avec le paramètre du navigateur.

Pour le reste des fonctionnalités, nous les avons implémentées telles que demandé dans le cahier des charges.

### Fonctionnalités supplémentaires

Cette application web est responsive et fonctionne sur tous les écrans, aussi bien sur les grands écrans que sur les petits, et ce pour toutes les pages.

Une barre de navigation est affichée en haut et avec tous les liens vers d'autres pages pour les plus grands écrans, tandis que pour les plus petits ces liens sont regroupés dans un menu latéral à tiroirs.

La page d'index qui affiche les portfolios dispose d'animations au scroll, chaque section de la page ainsi rendue prend exactement la hauteur de l'écran et le défilment d'une section à l'autre se fait avec une animation de défilement.

Cette application comporte des icônes **React Icons** pour améliorer la lisibilité et le rendu final.

Les profils des portfolios de la page d'index peuvent être modifiés de manières très simples puisqu'ils sont simplement définis dans des objets `JS` dans les fichiers `Adrien.jsx` et `Aurélien.jsx`.

Les deux portfolios disposent de formulaires de contact qui permettent d'envoyer un message à l'utilisateur concerné (Adrien ou Aurélien).

Les utilisateurs peuvent noter les projets sur une échelle de 1 à 5 étoiles avec leurs commentaires.

Tous les changements apportés aux profils, aux projets et aux commentaires sont enregistrés dans la base de données.

Les utilisateurs peuvent se connecter avec **Github** ou bien en avec leur nom d'utilisateur et mot de passe.

La version de **Next.js** utilisée est la toute nouvelle version **13**.

## Installation

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

## Utilisation

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

Une fois le serveur lancé, il faut aller à l'URL <http://localhost:3000> pour arriver sur les portfolios d'Adrien et d'Aurélien. Cliquer sur l'un ou l'autre des profils permet de changer le contenu du reste de la page par le portfolio de l'un ou de l'autre, montrant ainsi :

- Une brève description de la personne
- Une présentation de ses compétences (langages de programmation qu'il maîtrise)
- Une présentation des projets qu'il a pu réalisé
- Une liste des entreprises où il a pu travailler
- Un formulaire de contact enregistrant le message, son sujet ainsi que l'adresse e-mail de l'expéditeur sur la base de données

La page <http://localhost:3000/login> permet de s'authentifier sur l'application avec un compte préalablement créé sur la page <http://localhost:3000/signup>, et d'ainsi accéder au contenu de la page [profil](http://localhost:3000/profil).

La page de <http://localhost:3000/profil> n'est disponible que pour les utilisateurs authentifiés et permets d'accéder aux informations de son profil, de le modifier et de choisir sa couleur favorite pour le site, ainsi que de lire les messages qui leur ont étés adressés sur le formulaire de contact de la page principale pour les utilisateurs administrateurs.

Si une adresse inconnue est rentrée, on est alors redirigé vers une page d'*erreur 404* nous indiquant que la page recherchée n'existe pas.

### Comptes administrateurs

Les deux comptes administrateurs existants sont :

- Pour le compte **Adrien** : login : `adri` et mot de passe : `azerty`
- Pour le compte **Aurelien** : login : `aurel` et mot de passe : `aurellebg`

## Contributeurs

- Adrien Blair [@Ahddry](https://github.com/Ahddry)
- Aurélien Bon [@Aurelien-Bon](https://github.com/Aurelien-Bon)
