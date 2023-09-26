

// Ancora - Scroll suave

var $doc = $('html, body');

$('a').click(function() {

    $doc.animate({

        scrollTop: $( $.attr(this, 'href') ).offset().top - document.querySelector('body header').getBoundingClientRect().height // Estou subtraindo a altura do menu

    }, 500);

    return false;

});










// Linguagens de Programação
const linguagensProgramacao = [
    {
        nome: "HTML e CSS",
        nivel: "Intermediário/Avançado",
        percetual: 75,
        descricao: "Semântica, formulários avançados, meta tags SEO, Seletores Avançados, Unidades de Medida Avançadas, Flexbox e Grid Layout, Media Queries, Posicionamento, Transições e Animações."
    },
    {
        nome: "PHP",
        nivel: "Básico",
        percetual: 60,
        descricao: "Arrays, operações matemáticas, funções, loops, funções nativas, banco de dados, manipulação de arquivos."
    },
    {
        nome: "JavaScript",
        nivel: "Intermediário",
        percetual: 60,
        descricao: "Variáveis, condições, funções, loops, arrays, objetos, classes, operações matemáticas, DOM e manipulação de eventos."
    },
    {
        nome: "JQuery",
        nivel: "Básico",
        percetual: 40,
        descricao: "DOM, estilização, animações, eventos e interatividade."
    },
    {
        nome: "React JS",
        nivel: "Iniciante",
        percetual: 30,
        descricao: "Configuração do Ambiente, Criação de Projeto React, Componentes Funcionais, Props (Propriedades)."
    },
    {
        nome: "Python",
        nivel: "Iniciante/Intermediário",
        percetual: 40,
        descricao: "Arrays, operadores aritméticos, de comparação, lógicas, condicionais, saída de dados, loops, funções, Análise de dados"
    },
    {
        nome: "Excel",
        nivel: "Basico/Intermediário",
        percetual: 75,
        descricao: "Funções lógicas, avançadas e de texto, formatação de células, tabelas, "
    },
    {
        nome: "Mysql",
        nivel: "Basico/Intermediário",
        percetual: 75,
        descricao: "Funções lógicas, avançadas e de texto, formatação de células, tabelas, "
    }
]

var programacaoArticle = $('#formacao .programacao');
const graficos = [];
const data = [];

linguagensProgramacao.forEach((nome, index)=>{
    programacaoArticle.append(`
    
    <div class="linguagem-programacao">
        <div class="titulo">
            <header>
                <div class="grafico-rosca">
                    <canvas id="grafico-${index}"></canvas>
                </div>
                <!-- Gráfico rosca -->
                
                <div class="titulo">
                    <h4>${linguagensProgramacao[index]["nome"]}</h4>
                    <h5>${linguagensProgramacao[index]["nivel"]}</h5>
                </div>
                <!-- /.titulo -->
            </header>
        </div>
        <!-- /.titulo -->
        <p>
            ${linguagensProgramacao[index]["descricao"]}
        </p>
    </div>
    <!-- linguagem-programacao -->

    `);

    // Criando uma lista 'graficos' para colocar os objetos (canvas) dos gráficos que serão colocados na página
    graficos.push(document.getElementById('grafico-'+index).getContext('2d'));
    // Aqui estou criando uma lista 'data' com objetos com as informações dos percentuais e das cores dos gráficos
    data.push({
        datasets: [{
          data: [linguagensProgramacao[index]["percetual"], 100-linguagensProgramacao[index]["percetual"]],
          backgroundColor: ['#061e4e', '#d8d8d8']
        }]
    });
})



// Configurar gráfico doughnut
const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false // Desativa a exibição da legenda
  }
};

// Gerar gráficos
graficos.forEach((item, indice) => {
    var item = new Chart(graficos[indice], { // Aqui é onde informa o objeto canvas que irá ser colocado o gráfico. Estou puxando as informações do array 'graficos' criado dentro do forEach acima
        type: 'doughnut',
        data: data[indice], // Aqui é onde informa o percentual e as cores que irá colocar no gráfico no formato do comentário abaixo. Estou puxando as informações do array 'data' criado dentro do forEach acima
        /*
            data: {
                datasets: [{
                data: [linguagensProgramacao[index]["percetual"], 100-linguagensProgramacao[index]["percetual"]],
                backgroundColor: ['#061e4e', '#d8d8d8']
                }]
            },
        */
        options: options
      });
});







// PROJETOS
const listaProjetos = [
    {
        nome: "Allyuni",
        descricao: "Este é um site que fiz para teste",
        imagem: "escrever.png",
        link: "https://sanctius.co/",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript",
        ]
    },
    {
        nome: "Buscador de CEP",
        descricao: "Este é um buscador de CEP",
        imagem: "images/img-projetos/site-Emmunah.png",
        link: "http://projetos.nicchon.com/projetos/ecommerce-j%C3%B3ias",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "Banco de Dados"
        ]
    },
    {
        nome: "Facebook",
        descricao: "Este é um dos projetos práticos do curso, onde criei uma réplica do site do facebook",
        imagem: "images/img-projetos/site-facebook.png",
        link: "http://projetos.nicchon.com/projetos/facebook-login",
        tecnologias: [
            "HTML",
            "CSS"
        ]
    },
    {
        nome: "Cena Construção",
        descricao: "Este é um dos projetos práticos do curso, um site de empresa de construção",
        imagem: "images/img-projetos/site-cena.png",
        link: "http://projetos.nicchon.com/projetos/cena-constru%C3%A7%C3%A3o",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        nome: "Venda de Carros",
        descricao: "Este é um dos projetos práticos do curso, a réplica de uma página de venda de carros",
        imagem: "images/img-projetos/site-venda-de-carros.png",
        link: "http://projetos.nicchon.com/projetos/venda-de-carros",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP"
        ]
    },
    {
        nome: "Danki Code",
        descricao: "Este é um dos projetos práticos do curso, a réplica de uma página inicial da Danki Code",
        imagem: "images/img-projetos/site-dankicode.png",
        link: "http://projetos.nicchon.com/projetos/danki-code-2",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
]

var projectsBox = $('#projetos .projects-box');

listaProjetos.forEach((projeto, index) => {
    var technologias = listaProjetos[index]["tecnologias"].map(tech => (
        `<div value="${tech}"><i class="circle"></i> ${tech}</div>`
    )).join('');

    projectsBox.append(`
        <a href="${listaProjetos[index]["link"]}" target="_blank" rel="noopener noreferrer">
            <article class="card">
                <figure>
                    <img class="card-img-top" src="${listaProjetos[index]["imagem"]}" alt="Imagem do ${listaProjetos[index]["nome"]}">
                </figure>
                
                <div class="card-body">
                    <h5 class="card-title">${listaProjetos[index]["nome"]}</h5>
                    <p class="card-text">${listaProjetos[index]["descricao"]}</p>
                    <p class="card-text"><small class="text-muted">Clique no card para entrar no site</small></p>
                    <div class="tecnologias">
                        ${technologias}
                    </div>
                </div>
            </article>
        </a>
        <!-- /.project-card -->
    `)

})

/*
<div class="tecnologias">
    <div>
        <i class="circle"></i> HTML
    </div>
    <div>
        <i class="circle"></i> CSS
    </div>
    <div>
        <i class="circle"></i> PHP
    </div>
    <div>
        <i class="circle"></i> Banco de Dados
    </div>
</div>

.tecnologias{
    font-size: 8px;
}
.tecnologias > div{
    display: inline-block;
    padding: 1px 3px;
    margin: 1px
    border-radius: 2px;
    border: 1px solid #ccc
    background: #f3f3f3;
}
.tecnologias > div i{
    padding: 2px;
    border-radius: 50%;
    background: green
}
*/