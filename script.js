// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loja = {
        nome: "MF IMPORTS",
        produtos: [
            { nome: "Smartphone Samsung Galaxy S24", preco: 4599.99 },
            { nome: "Notebook Dell Inspiron", preco: 5299.90 },
            { nome: 'Smart TV LG 50"', preco: 3299.00 } // ✅ usa aspas simples por fora
        ],
        promocao: "Descontos de até 20% em eletrônicos selecionados!",
        data: new Date()
    };

    const container = document.createElement("section");
    container.innerHTML = `
        <h3>Informações Atualizadas</h3>
        <p><strong>Loja:</strong> ${loja.nome}</p>
        <p><strong>Promoção:</strong> ${loja.promocao}</p>
        <p><strong>Data:</strong> ${loja.data.toLocaleDateString('pt-BR')}</p>
        <h4>Produtos em Destaque:</h4>
        <ul>
            ${loja.produtos.map(p => `<li>${p.nome} - R$ ${p.preco.toFixed(2)}</li>`).join("")}
        </ul>
    `;
    document.querySelector("main").appendChild(container);
});

