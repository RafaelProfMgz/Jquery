$(document).ready(function() {
    // --- Lógica do Carrosel de Imagens ---
    let currentImageIndex = 0;
    const $carouselImages = $('.carousel-images'); // Cache do seletor jQuery
    const $images = $carouselImages.find('img');   // Cache das imagens
    const totalImages = $images.length;
    let imageWidth = 0; // Será definido/atualizado

    function calculateWidths() {
        imageWidth = $('.carousel-container').width(); // Pega a largura atual do container
        // Define a largura de cada imagem individualmente
        $images.width(imageWidth);
        // Define a largura total do container flex das imagens
        $carouselImages.width(imageWidth * totalImages);
         // Ajusta a posição imediatamente após o cálculo
         showImage(currentImageIndex, false); // false para não animar no resize
    }


    function showImage(index, animate = true) { // animate=true por padrão
        const newTransform = -index * imageWidth;
        $carouselImages.css('transition', animate ? 'transform 0.5s ease-in-out' : 'none'); // Controla animação
        $carouselImages.css('transform', 'translateX(' + newTransform + 'px)');
    }

    // Botão Próximo
    $('.next-btn').on('click', function() {
        currentImageIndex++;
        if (currentImageIndex >= totalImages) {
            currentImageIndex = 0; // Loop para o início
        }
        showImage(currentImageIndex);
    });

    // Botão Anterior
    $('.prev-btn').on('click', function() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = totalImages - 1; // Loop para o fim
        }
        showImage(currentImageIndex);
    });

    // Ajustar ao redimensionar a janela
    let resizeTimer;
    $(window).on('resize', function() {
         // Debounce: Atrasar a execução para evitar disparos múltiplos durante o resize
         clearTimeout(resizeTimer);
         resizeTimer = setTimeout(function() {
              calculateWidths(); // Recalcula larguras e reposiciona
         }, 100); // Espera 100ms após o último evento resize
    });

    // Calcular larguras iniciais ao carregar
    calculateWidths();

}); // Fim de $(document).ready()