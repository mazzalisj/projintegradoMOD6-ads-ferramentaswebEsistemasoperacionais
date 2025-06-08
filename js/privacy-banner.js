// js/privacy-banner.js
document.addEventListener('DOMContentLoaded', function() {
    const privacyBanner = document.getElementById('privacy-policy-banner');
    const acceptButton = document.getElementById('accept-privacy');

    // Verifica se o usuário já aceitou a política de privacidade no localStorage
    const privacyAccepted = localStorage.getItem('privacyAccepted');

    // Se o usuário ainda não aceitou, mostra o banner
    if (!privacyAccepted) {
        privacyBanner.classList.remove('hidden'); // Remove a classe hidden para exibi-lo (se você optar por iniciar com hidden)
        // Por padrão, ele já estará visível, mas esta linha é um bom ponto para controle
    } else {
        privacyBanner.style.display = 'none'; // Se já aceitou, esconde o banner imediatamente
    }

    // Adiciona um listener para o botão de aceitar
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            // Define uma flag no localStorage indicando que a política foi aceita
            localStorage.setItem('privacyAccepted', 'true');
            // Adiciona a classe 'hidden' para animar o desaparecimento e depois remover o display
            privacyBanner.classList.add('hidden');

            // Remove o elemento do DOM após a transição, se desejar
            privacyBanner.addEventListener('transitionend', function() {
                privacyBanner.style.display = 'none';
            }, { once: true }); // Executa o listener apenas uma vez
        });
    }
});