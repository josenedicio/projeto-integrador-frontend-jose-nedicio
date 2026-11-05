const musicasAula11 = [
    { nome: "Liberdade Provisória", artista: "Henrique & Juliano", views: 626.5 },
    { nome: "Na Hora da Raiva", artista: "Henrique & Juliano", views: 603.2 },
    { nome: "Cuida Bem Dela", artista: "Henrique & Juliano", views: 580.7 },
    { nome: "Apelido Carinhoso", artista: "Gusttavo Lima", views: 613 },
    { nome: "Termina Comigo Antes", artista: "Gusttavo Lima", views: 554.6 },
    { nome: "Na Hora de Amar", artista: "Gusttavo Lima", views: 526.2 },
    { nome: "Largado às Traças", artista: "Zé Neto & Cristiano", views: 1053 },
    { nome: "Notificação Preferida", artista: "Zé Neto & Cristiano", views: 1005 },
    { nome: "Status Que Eu Não Queria", artista: "Zé Neto & Cristiano", views: 592 }
];

function calcularViews(views, multiplicador = 1) {
    return views * multiplicador;
}

function classificarMusica(views) {

    if (views >= 1000) {
        return "Grande sucesso";
    } else if (views >= 600) {
        return "Sucesso";
    } else if (views >= 300) {
        return "Destaque";
    } else {
        return "Poucas visualizações";
    }
}

console.log("Teste de cálculo:", calcularViews(600));
console.log("Teste de cálculo:", calcularViews(500, 2));

console.log("Teste de classificação:", classificarMusica(1053));
console.log("Teste de classificação:", classificarMusica(580));

const musicasAnalisadas = musicasAula11.map(function(musica) {

    const views = calcularViews(musica.views);

    return {
        nome: musica.nome,
        artista: musica.artista,
        views: views,
        classificacao: classificarMusica(views)
    };
});

const grandesSucessos = musicasAnalisadas.filter(function(musica) {
    return musica.views >= 1000;
});

console.log("Grandes sucessos:");
console.table(grandesSucessos);

const totalViews = musicasAnalisadas.reduce(function(total, musica) {
    return total + musica.views;
}, 0);

const mediaViews = totalViews / musicasAnalisadas.length;

function criarCard(musica) {

    const card = document.createElement("div");
    card.classList.add("card-musica");

    const titulo = document.createElement("h3");
    titulo.textContent = musica.nome;

    const artista = document.createElement("p");
    artista.textContent = musica.artista;

    const views = document.createElement("p");
    views.textContent = `${musica.views} milhões de visualizações`;

    const classificacao = document.createElement("p");
    classificacao.textContent = musica.classificacao;

    if (musica.classificacao === "Grande sucesso") {
        card.classList.add("grande-sucesso");
    } else if (musica.classificacao === "Sucesso") {
        card.classList.add("sucesso");
    } else if (musica.classificacao === "Destaque") {
        card.classList.add("destaque-musica");
    } else {
        card.classList.add("poucas-views");
    }

    card.append(titulo, artista, views, classificacao);

    return card;
}

const resultado = document.querySelector("#resultado");

if (resultado !== null) {

    musicasAnalisadas.forEach(function(musica) {

        const card = criarCard(musica);

        resultado.append(card);
    });
    const resumo = document.createElement("p");

    resumo.classList.add("resumo-analise");

    resumo.textContent =
        `Total de músicas: ${musicasAnalisadas.length} |
        Visualizações totais: ${totalViews.toFixed(1)} milhões |
        Média: ${mediaViews.toFixed(1)} milhões |
        Grandes sucessos: ${grandesSucessos.length}`;

    resultado.append(resumo);

} else {
    console.log("Área de resultado não encontrada.");
}