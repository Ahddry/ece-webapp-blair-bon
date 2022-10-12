// Chargement d'express
const express = require('express')
const router = express.Router()

// Chargement des composants HTML
const components = require('../src/html-components.js')

// Route par défaut (/hello)
router.route('/').get((req, res) =>
{
    const name = req.query.name
    if (name === undefined || !name.match(/^[A-Za-z]+$/)) //vérfie que le paramètre name est bien défini et qu'il ne contient que des lettres
    {
        res.status(200).send(components.debut + 'Bonjour anonyme !' + components.paragraphe + 'Comment t\'appelles-tu ?' + components.fin) //réponse standard
    }
    else
    {
        switch (name)
        {
            case "Adrien":
                res.status(200).send(components.debut + 'C\'est ' + "Adrien !" + components.paragraphe + 'Il s\'agit d\'un des créateurs de l\'application !<br>Il aime bien la couleur <a>Jaune</a> !' + components.fin);
                break;
            case "Aurelien":
                res.status(200).send(components.debut + 'C\'est ' + "Aurélien !" + components.paragraphe + 'Il s\'agit d\'un des créateurs de l\'application !<br>Il a un super chien !' + components.fin);
                break;
            case "Tosca":
                res.status(200).send(components.debut + 'C\'est ' + "Tosca !" + components.paragraphe + 'C\'est le chien d\'Aurélien !<br>🐶🐶🐶' + components.fin);
                break;
            default:
                res.status(200).send(components.debut + 'Bonjour ' + name + components.paragraphe + 'Comment vas-tu ?' + components.fin); //réponse personnalisée
                break;
        }
    }
});

// Erreur 404
router.route('*').get((req, res) =>
{
    res.status(404).send(components.e404); //erreur 404
});

module.exports = router;