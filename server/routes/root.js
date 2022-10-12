// Chargement d'express
const express = require('express')
const router = express.Router()

// Chargement des composants HTML
const components = require('../src/html-components.js')

// Route par défaut
router.route('/').get((req, res) =>
{
    res.send(components.debut + 'Bienvenue !' + components.paragraphe + components.index + components.fin);
});

// Autres routes et erreur 404
router.route('*').get((req, res) =>
{
    if (req.url.match(/\/[A-Za-z]+$/)) //vérifie que la route demandée ne contient que des lettres (pour éviter la recherche de fichiers non-adéquats)
    {
        const filePath = req.url.split('/');
        let jsonData
        try
        {
            jsonData = require('../content/' + filePath[1]+ '.json') //lecture du fichier JSON
            if (jsonData !== undefined || jsonData !== null)
            {
                let contenu = ""
                for (var key in jsonData)
                {
                    contenu += key + ': ' + jsonData[key] + '<br>'
                }
                res.status(200).send(components.debut + 'Contenu du fichier ' + filePath[1] + '.json' + components.paragraphe + contenu + components.fin); //affichage du contenu du fichier JSON
            }
            else
                res.status(404).send(components.e404); //erreur 404
        }
        catch (e)
        {
            console.warn('Fichier ' + filePath[1] + '.json non trouvé !');
            console.error(e)
            res.status(404).send(components.e404); //erreur 404
        }
    }
    else
    {
        res.status(404).send(components.e404); //erreur 404
    }
});

module.exports = router;