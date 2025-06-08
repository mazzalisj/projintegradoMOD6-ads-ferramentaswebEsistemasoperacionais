document.addEventListener('DOMContentLoaded', function() {
    const privacyBanner = document.getElementById('privacy-policy-banner');
    const acceptButton = document.getElementById('accept-privacy');
    const privacyAccepted = localStorage.getItem('privacy_policy_accepted');

    // Se o usuário ainda não aceitou a política, mostra o banner
    if (!privacyAccepted) {
        privacyBanner.classList.remove('d-none'); // Remove a classe 'd-none' do Bootstrap
    }

    // Adiciona o evento de clique ao botão "Aceitar e Fechar"
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('privacy_policy_accepted', 'true'); // Salva no Local Storage
        privacyBanner.classList.add('d-none'); // Esconde o banner
    });
});

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

document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize Flatpickr for the birth date input
    flatpickr("#dataNascimento", {
        dateFormat: "d/m/Y", // Format the date as DD/MM/YYYY
        locale: "pt",        // Use Portuguese language for the calendar
        maxDate: "today",    // Prevent selecting dates in the future
        minDate: "01-01-1900", // Set a reasonable earliest birth date
        altInput: true,      // Display formatted date in input
        altFormat: "d/m/Y",  // Format for display
        allowInput: true,    // Allow direct typing
        // These settings improve direct year selection by typing when the calendar is open
        enableTime: false,
        static: true, // keeps the calendar in a fixed position when open, can be removed if you prefer floating
        clickOpens: true,
        monthSelectorType: "dropdown", // Allows month selection via dropdown
        // The core Flatpickr features for fast year entry are:
        // 1. Clicking on the year in the header and directly typing the year.
        // 2. Using the mouse scroll wheel while hovering over the year in the header.
        // Setting min/max date helps define the range.
    });

    // 2. Apply jQuery Mask to the birth date input
    // Ensure jQuery is loaded before this runs.
    if (typeof jQuery !== 'undefined') {
        $('#dataNascimento').mask('00/00/0000');
    } else {
        console.error("jQuery is not loaded. Cannot apply input mask.");
    }

    // Example of form submission (if you had this functionality in script.js)
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const termos = document.getElementById('termos').checked;
            const mensagemDiv = document.getElementById('mensagem');

            if (!termos) {
                mensagemDiv.className = 'alert alert-warning';
                mensagemDiv.textContent = 'Você deve concordar com os termos e condições para se cadastrar.';
                return;
            }

            // Basic validation for demonstration
            if (nome && email && dataNascimento) {
                mensagemDiv.className = 'alert alert-success';
                mensagemDiv.innerHTML = `Cadastro realizado com sucesso, ${nome}!`;
                // In a real application, you'd send this data to a server
                console.log({
                    nome,
                    email,
                    telefone,
                    dataNascimento,
                    termos
                });
                cadastroForm.reset(); // Clear the form
            } else {
                mensagemDiv.className = 'alert alert-danger';
                mensagemDiv.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            }
        });
    }

    // Your existing privacy banner logic (if it was in script.js)
    const privacyBanner = document.getElementById('privacy-policy-banner');
    const acceptPrivacyButton = document.getElementById('accept-privacy');

    if (privacyBanner && acceptPrivacyButton) {
        // Check if the user has already accepted
        if (!localStorage.getItem('privacyAccepted')) {
            privacyBanner.style.display = 'block';
        }

        acceptPrivacyButton.addEventListener('click', function() {
            localStorage.setItem('privacyAccepted', 'true');
            privacyBanner.style.display = 'none';
        });
    }
});