var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// Importa as rotas
var rotasProdutos = require('./rotas/produtos');

// Configura o middleware
app.use(bodyParser());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/produtos', rotasProdutos);

//Inicia o servidor
app.listen(9090, function () {
  console.log('Aplicação rodando na posta 9090');
});