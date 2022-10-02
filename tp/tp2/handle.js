const url = require('url')
const qs = require('querystring');
const { isAbsolute } = require('path');
//* Oui je me suis chauffé pour rien du tout mais c'est joli.
const debut = '<!DOCTYPE html>' +
        '<html>'+
            '<head>'+
                '<meta charset="utf-8">'+
                '<title>Bonjour !</title>'+
                '<link rel="stylesheet" href="./styles.css">'+
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
              '<li><a href="http://localhost:8080/hello?name=Tosca">🐶</a></ul>';

module.exports =
{
    serverHandle: function (req, res)
    {
        const route = url.parse(req.url)
        const path = route.pathname
        const params = qs.parse(route.query)

        if (path !== '/about') {res.writeHead(200, {'Content-Type': 'text/html'}); }

        if (path === '/hello' && 'name' in params)
        {
          if (params['name'] === "Adrien")
          {
            res.write(debut + 'C\'est ' + "Adrien !" + paragraphe + 'Il s\'agit d\'un des créateurs de l\'application !<br>Il aime bien la couleur <a>Jaune</a> !' + fin);
          }
          else if (params['name'] === "Aurelien")
          {
            res.write(debut + 'C\'est ' + "Aurélien !" + paragraphe + 'Il s\'agit d\'un des créateurs de l\'application !<br>Il a un super chien !' + fin);
          }
          else if (params['name'] === "Tosca")
          {
            res.write(debut + 'C\'est ' + "Tosca !" + paragraphe + 'C\'est le chien d\'Aurélien !<br>🐶🐶🐶' + fin);
          }
          else
          {
            res.write(debut + 'Bonjour ' + params['name'] + paragraphe + 'Comment vas-tu ?' + fin);
          }
        }
        else if (path === '/hello')
        {
          res.write(debut + 'Bonjour anonyme !' + paragraphe + 'Comment t\'appelles-tu ?' + fin);
        }
        else if (path === '/about')
        {
          // https://stackoverflow.com/q/7163061/20114541

          res.writeHead(200, {'Content-Type': 'application/json'});
          var jsonData = require('./content/about.json')
          res.write(debut+paragraphe);
          for(var key in jsonData)
          {
            res.write(key+': '+jsonData[key]+'<br>');
          }

        }
        else if (path === '/')
        {
          res.write(debut + 'Bienvenue !' + paragraphe + index + fin);
        }
        else
        {
          const file=path.split('/');
          let jsonData
          try
          {
            jsonData = require('./content/'+file[1]+'.json')
          }catch(error)
          {
            console.error(error);
          }
          console.log(jsonData)
          if(jsonData!=null)
          {
            res.write(debut+'Conenue du fichier '+file[1]+'.json'+paragraphe);
            for(var key in jsonData)
            {
              res.write(key+': '+jsonData[key]+'<br>');
            }
            res.write(fin);
          }
          else
          {
            res.write(debut + 'Erreur 404.' + paragraphe + 'La page que vous avez demandé n\'existe pas :(' + fin);
          }
        }
        res.end();
    }
}
