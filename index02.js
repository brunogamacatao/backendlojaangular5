var http = require('http');
var connect = require('connect');

var app = connect();

app.use(function(req, res) {
    res.end('Hello World\n');
});

http.createServer(app).listen(9090);