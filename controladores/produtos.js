var produtos = [
    {id: 0, nome: 'TV Samsung 42 polegadas', preco: 1100.00},
    {id: 1, nome: 'Ventilador Britania', preco: 70.00},
    {id: 2, nome: 'Coxinha de Frango', preco: 2.50},
];

module.exports = {
    adicionar: function(produto) {
        produto.id = produtos.length;
        produtos.push(produto);
    },
    listar: function() {
        return produtos;
    },
    recuperar: function(id) {
        for (var i = 0; i < produtos.length; i++) {
            if (produtos[i].id == id) {
                return produtos[i];
            }
        }
        return {};
    },
    remover: function(id) {
        var indice = -1;
        for (var i = 0; i < produtos.length; i++) {
            if (produtos[i].id == id) {
                indice = i;
                break;
            }
        }
        if (indice >= 0) {
            produtos = produtos.splice(indice, 1);
        }
    }
};