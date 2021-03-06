var app = require('./app');
var debug = require('debug')('nodejwt');
var port = normalizePort(process.env.PORT || 3000);

app.listen(port, () => {
    console.log("Server up in " + port);
});

app.on('error', onError);
app.on('listening', onListening);


// normalize a port into a number, string, or false.
function normalizePort(val) {
    var port = parseInt(val, 10)
    if (isNaN(port)) {
        // named pipe
        return val
    }
    if (port >= 0) {
        // port number
        return port
    }
    return false
}

// event listener for HTTP server "error" event.
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }
    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port
        // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        case 'ECONNREFUSED':
            console.error(bind + 'server not started')
            process.exit(1)
            break
        default:
            throw error
    }
}

// event listener for HTTP server "listening" event.
function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port
    debug('Listening on ' + bind)
}