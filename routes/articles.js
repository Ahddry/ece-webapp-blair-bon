// Chargement d'express
const express = require('express')
const router = express.Router()

// Chargement des composants HTML
const components = require('../src/html-components.js')

// Chargement de body-parser, pour récupérer les données des formulaires
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// Database locale
let db =
{
    articles:
    [
        {
            id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
            title: 'My article',
            content: 'Content of the article.',
            date: '04/10/2022',
            author: 'Liz Gringer'
        },
        {
            id: '6ec0bd7f-11c0-43da-975e-afe541afb',
            title: 'My article2',
            content: 'Content of the article.',
            date: '04/10/2022',
            author: 'Liz Gringer'
        },
        // ...
    ],
    comments:
    [
        {
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            timestamp: 1664835049,
            content: 'Content of the comment.',
            articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
            author: 'Bob McLaren'
        },
        {
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7baaabbbcc',
            timestamp: 1141764895049,
            content: 'Un savant commentaire.',
            articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
            author: 'Bob McLaren'
        },
        // ...
    ]
}

// Route par défaut
router.route('/').get((req, res) =>
{
    //console.log("GET /articles")
    let liste = ""
    for (var article in db.articles)
    {
        liste += `${db.articles[article].title} (${db.articles[article].id})` + '<br>'
    }
    res.status(200).send(components.debut + 'Liste des articles' + components.paragraphe + liste + components.fin);
}).post((req, res) =>
{
    //console.log("POST /articles")
    //console.log("Body : " + req.query + "\ntitle : " + req.query.title)
    try
    {
        let article = { id : req.query.id, title : req.query.title, content : req.query.content, date : req.query.date, author : req.query.author }
        console.log(article)
        if (article.id === undefined && article.title === undefined && article.content === undefined && article.date === undefined && article.author === undefined)
            throw "Article invalide";
        db.articles.push(article)
        res.status(201).send('Article ajouté : ' + article.title );
    }
    catch (e)
    {
        res.status(400).send('Erreur : ' + e);
        console.error(e)
        console.log("Format incorect.")
    }
});

// Route pour un article spécifique
router.route('/:articleId').get((req, res) =>
{
    // console.log("GET /articlesId " + req.params.articleId)
    try
    {
        let article = db.articles.find(article => article.id === req.params.articleId)
        // console.log("Titre : " + article.title)
        let contenu = ""
        for (var key in article)
        {
            contenu += key + ': ' + article[key] + '<br>'
        }
        res.status(200).send(components.debut + 'Contenu de l\'article ' + article.title + components.paragraphe + contenu + components.fin); //affichage du contenu du fichier JSON
    }
    catch (e)
    {
        console.error(`Article introuvable : ${req.params.articleId}`)
        res.status(404).send(components.e404); //erreur 404
    }
});

// Route pour les commentaires d'un article
router.route('/:articleId/comments/').get((req, res) =>
{
    // console.log("GET /articlesId/comments")
    try
    {
        let article = db.articles.find(article => article.id === req.params.articleId)
        console.log("Titre : " + article.title)
        let comments = db.comments.filter(comment => comment.articleId === article.id)
        let liste = ""
        for (var comment in comments)
        {
            console.log(comments[comment])
            const date = new Date(comments[comment].timestamp)
            liste += `Commentaire ${comments[comment].id} <br>À ${"Date: "+date.getDate()+"/"+(date.getMonth()+1)+ "/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()} par ${comments[comment].author} : <br>${comments[comment].content}<br><br>`
        }
        if (liste === "")
        {
            res.status(404).send(components.debut + 'Aucun commentaire pour l\'article ' + article.title + components.fin);
        }
        else
        {
            res.status(200).send(components.debut + 'Commentaires pour l\'article ' + article.title + components.paragraphe + liste + components.fin);
        }
    }
    catch (e)
    {
        console.error(e)
        res.status(404).send(components.e404); //erreur 404
    }

}).post((req, res) =>
{
    console.log("POST /articlesId/comments")
    try
    {
        let article = db.articles.find(article => article.id === req.params.articleId)
        if (article === undefined)
            throw "Article non trouvé";
        let comment = { id : req.query.id, timestamp : req.query.timestamp, content : req.query.content, articleId : req.query.articleId, author : req.query.author }
        console.log(comment)
        if (comment.id === undefined && comment.timestamp === undefined && comment.content === undefined && comment.articleId === undefined && comment.author === undefined)
            throw "Commentaire invalide";
        db.comments.push(comment)
        res.status(201).send('Article ajouté : ' + article.title );
    }
    catch (e)
    {
        res.status(400).send('Erreur : ' + e);
        console.error(e)
    }
});

// Route pour un commentaire spécifique d'un article spécifique
router.route('/:articleId/comments/:commentId').get((req, res) =>
{
    //console.log("GET /articlesId/comments/commentId " + req.params.commentId)
    try
    {
        let article = db.articles.find(article => article.id === req.params.articleId)
        let comments = db.comments.filter(comment => comment.articleId === article.id)
        let comment = comments.find(comment => comment.id === req.params.commentId)
        const date = new Date(comment.timestamp)
        res.status(200).send(components.debut + 'Commentaire ' + comment.id + ' pour l\'article ' + article.title + components.paragraphe +
        `À ${"Date: "+date.getDate()+"/"+(date.getMonth()+1)+ "/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()} par ${comment.author} : <br>${comment.content}<br><br>` + components.fin);
    }
    catch (e)
    {
        //console.error(e)
        res.status(404).send(components.e404); //erreur 404
    }
});


// Erreur 404
router.route('*').get((req, res) =>
{
    res.status(404).send(components.e404); //erreur 404
});

module.exports = router;