// script.js (para a página de cadastro)

console.log('Script carregado! Aguardando DOMContentLoaded...'); // Mensagem de depuração 1

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded disparado! Procurando formulário...'); // Mensagem de depuração 2

    const cadastroForm = document.getElementById('cadastroForm');
    const mensagemDiv = document.getElementById('mensagem');

    if (cadastroForm) {
        console.log('Formulário encontrado! Adicionando event listener...'); // Mensagem de depuração 3
        cadastroForm.addEventListener('submit', function(event) {
            console.log('Formulário enviado! Prevenindo default...'); // Mensagem de depuração 4
            event.preventDefault(); // Impede o envio padrão do formulário

            // Limpa o formulário (opcional)
            cadastroForm.reset();

            // Oculta o formulário
            cadastroForm.style.display = 'none';

            // Exibe a mensagem de sucesso em verde
            mensagemDiv.innerHTML = `
                <div class="alert alert-success text-center" role="alert" style="color: #155724; background-color: #d4edda; border-color: #c3e6cb;">
                    <strong>Cadastro realizado com sucesso!</strong>
                    <p class="mt-2">Você será redirecionado(a) para a página inicial em instantes.</p>
                </div>
            `;
            console.log('Mensagem de sucesso exibida. Iniciando redirecionamento em 3 segundos...'); // Mensagem de depuração 5

            // Redireciona para a página inicial após 3 segundos (3000 milissegundos)
            setTimeout(function() {
                console.log('Redirecionando para index.html...'); // Mensagem de depuração 6
                window.location.href = 'index.html';
            }, 3000); // 3 segundos
        });
    } else {
        console.log('Formulário com ID "cadastroForm" NÃO encontrado.'); // Mensagem de depuração 7
    }
});