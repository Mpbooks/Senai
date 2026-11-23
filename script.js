const prompt = require('prompt-sync')();

let produtos = [
    { nome: "Arroz", preco: 25.90 },
    { nome: "Feijão", preco: 8.50 },
    { nome: "Macarrão", preco: 5.99 }
];

// Ordenar do menor para o maior
for (let i = 0; i < produtos.length; i++) {
    for (let j = i + 1; j < produtos.length; j++) {
        if (produtos[i].preco > produtos[j].preco) {
            let auxiliar = produtos[i];
            produtos[i] = produtos[j];
            produtos[j] = auxiliar;
        }
    }
}

// Mostrar os produtos
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome + " - R$ " + produtos[i].preco.toFixed(2));
}