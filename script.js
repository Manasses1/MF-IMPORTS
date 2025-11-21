document.addEventListener("DOMContentLoaded", function () {

    let nome = "SEU NOME COMPLETO";
    let cidadeCurso = "SUA CIDADE / SEU CURSO – SUA UNIVERSIDADE";

    let agora = new Date();
    let horas = agora.getHours();

    let dias = [
        "domingo", "segunda-feira", "terça-feira",
        "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
    ];

    let diaSemana = dias[agora.getDay()];

    let cumprimento;

    if (horas >= 5 && horas < 12) {
        cumprimento = "Bom dia!";
    } else if (horas >= 12 && horas < 18) {
        cumprimento = "Boa tarde!";
    } else {
        cumprimento = "Boa noite!";
    }

    alert(
        nome + "\n" +
        cidadeCurso + "\n" +
        `${cumprimento} Hoje é ${diaSemana}`
    );

});

document.addEventListener("DOMContentLoaded", function() {
    const loja = {
        nome: "MF IMPORTS",
        produtos: [
            { nome: "Smartphone Samsung Galaxy S24", preco: 4599.99 },
            { nome: "Notebook Dell Inspiron", preco: 5299.90 },
            { nome: 'Smart TV LG 50"', preco: 3299.00 }
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
