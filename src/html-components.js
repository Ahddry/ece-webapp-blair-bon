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
                '</style>' +
                '<div id="container">' +
                  '<h1>';
const paragraphe = '</h1><p>'
const fin = '<br><br><b><a href="http://localhost:8080/">MENU</a></b></p></div><footer><p>© Adrien BLAIR - Aurélien BON<br>' +
            '<a href="https://github.com/Ahddry/ece-webapp-blair-bon">GitHub</a></p></footer></body></html>'

const index = 'Cette application veut vous dire <b>BONJOUR</b> !<br>' +
              'Vous pouvez rester anonyme, auquel cas il suffit d\'aller à cette adresse : <a href="http://localhost:8080/hello">localhost:8080/hello</a>, ' +
              'mais vous pouvez aussi vous faire connaître !<br>' +
              'Pour cela, rien de plus simple, il suffit de rentrer cette adresse <a href="http://localhost:8080/hello?name=">localhost:8080/hello?name=</a> et de rajouter votre nom à la fin de celle-ci !<br><br>' +
              'Certaines personnes sont assez connues par ici. Allez donc jetter un coup d\'oeil à leurs pages !' +
              '<ul><li><a href="http://localhost:8080/hello?name=Adrien">Adrien</a>' +
              '<li><a href="http://localhost:8080/hello?name=Aurelien">Aurélien</a>' +
              '<li><a href="http://localhost:8080/hello?name=Tosca">🐶</a></ul><br><br>' +
              'De plus vous pouvez ouvrir et lire les fichiers <a>.json</a> enregistrés dans le dossier <a>content</a> en rajoutant le nom de votre fichier après l\'adresse <a href="http://localhost:8080/">http://localhost:8080/</a><br>' +
              'Essayez par exemple avec le fichier <a href="http://localhost:8080/about">about</a> ou <a href="http://localhost:8080/coccinelle">coccinelle 🐞</a> !';

const e404 = debut + 'Erreur 404.' + paragraphe + 'La page que vous avez demandé n\'existe pas :(' + fin;

// Export des composants
exports.debut = debut;
exports.paragraphe = paragraphe;
exports.fin = fin;
exports.index = index;
exports.e404 = e404;