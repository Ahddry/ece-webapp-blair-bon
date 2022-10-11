//TODO : Trouver un moyen de transférer l'attribution dynamique du port à ce fichier (dans les liens)
// Composants HTML
const debut = '<!DOCTYPE html>' +
        '<html>'+
            '<head>'+
                '<meta charset="utf-8">'+
                '<title>Bonjour !</title>'+
            '</head>'+
            '<body>'+
                '<style type="text/css">'+
                'body {background-color: #1e1e1e; color: whitesmoke; font-family: "Segoe UI",s Tahoma, Geneva, Verdana, sans-serif; min-height: 100%!important; margin-bottom: 90px;}' +
                'h1 {color: #f7cf46; font-size: larger; }' +
                '#container {background-color: #141414; border-radius: 8px; border-color: whitesmoke; border: solid; padding: 7px; width: 600px; max-width: 80%; margin: auto; justify-content: center; text-align: center; border-width: 1px; margin-top:8%}' +
                '#container li {text-align: left;}' + '#container a {text-decoration:none}' +
                'footer {background-color: #121212; display: flex; text-align: center; padding: 5px; justify-content: center; bottom:0px; left:0px; right:0px; position: fixed}' +
                'a {color: #f7cf46;}' +
                'hr {border: 1px solid #868686; background-color: #868686; width: 60% }' +
                '</style>' +
                '<div id="container">' +
                  '<h1>';
const paragraphe = '</h1><p>'
const fin = '<br><hr><b><a href="http://localhost:8080/">MENU</a></b></p></div><footer><p>© Adrien BLAIR - Aurélien BON<br>' +
            '<a href="https://github.com/Ahddry/ece-webapp-blair-bon">GitHub</a></p></footer></body></html>'

const index = 'Cette application veut vous dire <b>BONJOUR</b> !<br>' +
              'Vous pouvez rester anonyme, auquel cas il suffit d\'aller à cette adresse : <a href="http://localhost:8080/hello">localhost:8080/hello</a>, ' +
              'mais vous pouvez aussi vous faire connaître !<br>' +
              'Pour cela, rien de plus simple, il suffit de rentrer cette adresse <a href="http://localhost:8080/hello?name=">localhost:8080/hello?name=</a> et de rajouter votre nom à la fin de celle-ci !<br><br>' +
              'Certaines personnes sont assez connues par ici. Allez donc jetter un coup d\'oeil à leurs pages !' +
              '<ul><li><a href="http://localhost:8080/hello?name=Adrien">Adrien</a>' +
              '<li><a href="http://localhost:8080/hello?name=Aurelien">Aurélien</a>' +
              '<li><a href="http://localhost:8080/hello?name=Tosca">🐶</a></ul><br>' +
              'De plus vous pouvez ouvrir et lire les fichiers <a>.json</a> enregistrés dans le dossier <a>content</a> en rajoutant le nom de votre fichier après l\'adresse <a href="http://localhost:8080/">http://localhost:8080/</a><br>' +
              'Essayez par exemple avec le fichier <a href="http://localhost:8080/about">about</a> ou <a href="http://localhost:8080/coccinelle">coccinelle 🐞</a> !<br>' +
              '<br><hr><br>' +
              'Ouvrir l\'adresse <a href="http://localhost:8080/articles">/articles</a> permet d\'afficher la liste des articles sauvegardés dans la base de donnée du fichier <a>articles.js</a>.<br>' +
              'Ouvrir la page sur la route <a href="http://localhost:8080/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b">/articles/:id</a>, où [id] représente l\'attribut `id` d\'un article de la base de données ouvre cet article.<br>' +
              'Ouvrir la page sur la route <a href="http://localhost:8080/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments">/articles/:id/comments</a> affiche tous les commentaires de l\'article dont l\'id est précisé à la place de [id].<br>' +
              'L\'ouverture de la page à la route <a href="http://localhost:8080/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d">/articles/:id/comments/:id2</a> ouvre le commentaire d\'id [id2] pour de l\'article d\'id [id].<br>';

const e404 = debut + 'Erreur 404.' + paragraphe + 'La page que vous avez demandé n\'existe pas :(' + fin;

// Export des composants
exports.debut = debut;
exports.paragraphe = paragraphe;
exports.fin = fin;
exports.index = index;
exports.e404 = e404;