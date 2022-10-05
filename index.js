const http = require('http')
const handles = require('./handle')

// Attribution dynamique du port
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
const port = normalizePort(process.env.PORT || '8080');

http.createServer(handles.serverHandle).listen(port, _ => console.log(`Server running at ${port}`))
