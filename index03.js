var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/produtos', function (req, res) {
    res.send('Listando todos os produtos');
});
  
app.get('/produtos/:id', function (req, res) {
    res.send('Dados do produto ' + req.params['id']);
});

app.post('/produtos', function (req, res) {
    res.send('Adicionando um produto');
});

app.put('/produtos/:id', function (req, res) {
    res.send('Alterando o produto ' + req.params['id']);
});

app.delete('/produtos/:id', function (req, res) {
    res.send('Removendo o produto ' + req.params['id']);
});

app.listen(9090, function () {
  console.log('Aplicação rodando na posta 9090');
});