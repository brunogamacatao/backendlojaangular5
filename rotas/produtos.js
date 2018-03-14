var express = require('express');
var ProdutosController = require('../controladores/produtos');

var rotasProdutos = express.Router();

rotasProdutos.route('/')
.get(function (req, res) {
    res.json(ProdutosController.listar());
})
.post(function (req, res) {
    ProdutosController.adicionar(req.body);
    res.json('{status: "Ok"}');
});

rotasProdutos.route('/:id')
.get(function (req, res) {
    res.json(ProdutosController.recuperar(parseInt(req.param['id'])));
}).put(function (req, res) {
    res.json('{status: "Falta implementar"}');
}).delete(function (req, res) {
    ProdutosController.remover(parseInt(req.param['id']));
    res.json('{status: "Ok"}');
});

module.exports = rotasProdutos;