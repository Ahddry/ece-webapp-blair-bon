// Inititialisation d'express
const express = require('express')
const app = express()

// Attribution dynamique du port du serveur
const normalizePort = val =>
{
    const port = parseInt(val, 10);
    if (isNaN(port))
    {
        return val;
    }
    if (port >= 0)
    {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '8080'); //port par défaut: 8080

// Attribution des routes
const hello = require('./routes/hello')
const root = require('./routes/root')

app.use("/hello", hello);
app.use("/", root);

// Lancement du serveur
app.listen(port, _ => console.log(`Server running at ${port} - http://localhost:${port}/`))
