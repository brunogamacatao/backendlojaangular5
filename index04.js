var express = require('express');
var app = express();

var rotasProdutos = express.Router();

rotasProdutos.route('/')
.get(function (req, res) {
    res.send('Listando todos os produtos');
})
.post(function (req, res) {
    res.send('Adicionando um produto');
});

rotasProdutos.route('/:id')
.get(function (req, res) {
    res.send('Dados do produto ' + req.params['id']);
}).put(function (req, res) {
    res.send('Alterando o produto ' + req.params['id']);
}).delete(function (req, res) {
    res.send('Removendo o produto ' + req.params['id']);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/produtos', rotasProdutos);

app.listen(9090, function () {
  console.log('Aplicação rodando na posta 9090');
});