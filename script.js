// Função para compartilhar o projeto
function compartilharProjeto() {
    // Verifica se o navegador suporta Web Share API
    if (navigator.share) {
        navigator.share({
            title: 'Mandacaru',
            text: 'Conheça o Mandacaru - um projeto acadêmico para segurança e proteção das mulheres.',
            url: 'https://tatiisft.github.io/Mandacaru/'
        }).catch(function(erro) {
            console.log('Erro ao compartilhar:', erro);
        });
    } else {
        // Fallback: mostra um alerta simples
        alert('Compartilhe o Mandacaru com seus contatos!\nProjeto: Segurança e Proteção para Mulheres');
    }
}

// Função para envio do formulário de contato
const formulario = document.getElementById("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});
