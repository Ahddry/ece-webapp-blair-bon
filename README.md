# Projet - Technologies web SI

## 1. Introduction

Projet du premier semestre de Technologies web SI.

Le contenu créé pour les TP 1 à 3 est disponible dans le dossier [server](https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/server), la suite dont nous parlons dans cette documentation est quant à elle dispnible dans le dossier [www](https://github.com/Ahddry/ece-webapp-blair-bon/tree/main/www).

### État d'avancement

Cette application est actuelement capable de :

1. Afficher des pages écrites en **React** à l'aide du framework **Next.js**
2. Rediriger l'utilisateur vers les bonnes routes pour afficher les pages adéquates
3. Lire et afficher des fichiers **JSON**
4. Inclure des styles CSS variés

### Fonctionnalités supplémentaires

Pour compléter cette application, nous avons décidé d'y rajouter une couche d'**HTML** et de **CSS** à plusieurs thèmes, s'adaptant ainsi aux préférences de couleurs de l'utilisateur (clair ou sombre) afin d'en améliorer le rendu et la fluidité de navigation.
Cette application comporte aussi des icônes **Font Awesome** pour améliorer la lisibilité et le rendu final.

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

A compléter.

## Contributeurs

- Adrien Blair [@Ahddry](https://github.com/Ahddry)
- Aurélien Bon [@Aurelien-Bon](https://github.com/Aurelien-Bon)
