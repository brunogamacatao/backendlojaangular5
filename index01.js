var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.write('Funciona !');
    res.end();
}).listen(9090);