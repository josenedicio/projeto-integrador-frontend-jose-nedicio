const musicas = [
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

let continuar = true;

while (continuar) {

    let entrada = prompt(
        "Digite o mínimo de visualizações em milhões (0 a 2000).\n" +
        "Exemplo: 600\nDigite 'sair' para encerrar."
    );

    if (entrada === null) {
        continuar = false;
        break;
    }

    entrada = entrada.trim();

    if (entrada.toLowerCase() === "sair") {
        continuar = false;
        break;
    }

    if (entrada === "") {
        alert("Digite algum valor!");
        continue;
    }

    const limite = Number(entrada);

    if (Number.isNaN(limite) || limite < 0 || limite > 2000) {
        alert("Digite um número válido entre 0 e 2000!");
        continue;
    }

    let totalViews = 0;
    let acimaLimite = 0;
    let grandesSucessos = 0;
    let sucessos = 0;
    let destaques = 0;
    let abaixoDestaque = 0;

    let maiorViews = 0;
    let menorViews = Infinity;
    let musicaMaisVista = "";
    let musicaMenosVista = "";

    const resultados = [];

    for (let i = 0; i < musicas.length; i++) {

        const musica = musicas[i];

        totalViews += musica.views;

        let classificacao;

        if (musica.views >= 1000) {
            classificacao = "Grande sucesso";
            grandesSucessos++;
        } else if (musica.views >= 600) {
            classificacao = "Sucesso";
            sucessos++;
        } else if (musica.views >= 300) {
            classificacao = "Destaque";
            destaques++;
        } else {
            classificacao = "Abaixo do destaque";
            abaixoDestaque++;
        }

        if (musica.views >= limite) {
            acimaLimite++;
        }

        let tipo;

        switch (musica.artista) {
            case "Henrique & Juliano":
                tipo = "Dupla";
                break;

            case "Gusttavo Lima":
                tipo = "Solo";
                break;

            case "Zé Neto & Cristiano":
                tipo = "Dupla";
                break;

            default:
                tipo = "Não identificado";
                break;
        }

        if (musica.views > maiorViews) {
            maiorViews = musica.views;
            musicaMaisVista = musica.nome;
        }

        if (musica.views < menorViews) {
            menorViews = musica.views;
            musicaMenosVista = musica.nome;
        }


        resultados.push({
            musica: musica.nome,
            artista: musica.artista,
            tipo: tipo,
            views: musica.views,
            classificacao: classificacao
        });
    }

    const media = totalViews / musicas.length;


    console.log(`Limite informado: ${limite} milhões`);

    console.table(resultados);

    console.log(`
    ===== RESULTADO DA ANÁLISE =====

    Total de músicas: ${musicas.length}
    Músicas acima ou iguais ao limite: ${acimaLimite}

    Grandes sucessos: ${grandesSucessos}
    Sucessos: ${sucessos}
    Destaques: ${destaques}
    Abaixo do destaque: ${abaixoDestaque}

    Total de views: ${totalViews.toFixed(1)} milhões
    Média de views: ${media.toFixed(1)} milhões

    Música mais vista: ${musicaMaisVista}
    Música menos vista: ${musicaMenosVista}

    ===============================
    `);
}
