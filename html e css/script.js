// Andre luiz dos santos rodrigues, 13/11/2026

// Busca o elemento HTML com o ID "meuBotao" e adiciona um ouvinte para o evento de clique.
document.getElementById("meuBotao").addEventListener("click",

// Define a função anônima que será executada automaticamente no momento em que o botão for clicado.
    function() {

        // Busca o elemento com o ID "meuParagrafo" e substitui seu conteúdo interno pelo novo texto.
        document.getElementById("meuParagrafo").innerHTML =

        "Você clicou no botão!";

        // Busca novamente o "meuParagrafo" e altera a propriedade CSS de cor do texto para vermelho.
        document.getElementById("meuParagrafo").style.color =

        "red";

    // Fecha a função anônima e o método addEventListener.
    });

