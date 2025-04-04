$(document).ready(function() {
    // --- Lógica da Validação de Formulário ---
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão

        let isValid = true;

        // Resetar erros e sucesso
        $('.error-message').text('');
        $('#contactForm .input-error').removeClass('input-error'); // Remove de qualquer elemento com a classe
        $('#formSuccess').hide();

        // Validação do Nome
        const name = $('#name').val().trim();
        if (name === '') {
            $('#nameError').text('O campo Nome é obrigatório.');
            $('#name').addClass('input-error');
            isValid = false;
        }

        // Validação do Email
        const email = $('#email').val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#emailError').text('O campo Email é obrigatório.');
            $('#email').addClass('input-error');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Por favor, insira um email válido.');
            $('#email').addClass('input-error');
            isValid = false;
        }

        // Validação da Mensagem
        const message = $('#message').val().trim();
        if (message === '') {
            $('#messageError').text('O campo Mensagem é obrigatório.');
            $('#message').addClass('input-error');
            isValid = false;
        }

        // Processar resultado
        if (isValid) {
            console.log('Formulário válido. Enviando dados (simulação)...');
            // Aqui você adicionaria a lógica de envio real (ex: AJAX)
            $('#formSuccess').text('Formulário enviado com sucesso! (Simulação)').fadeIn();
            // Opcional: Limpar o formulário após sucesso
            // $('#contactForm')[0].reset();
        } else {
             console.log('Formulário inválido.');
             $('#formSuccess').hide(); // Garante que a msg de sucesso não apareça
        }
    });
});