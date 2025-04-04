$(document).ready(function () {
  // --- Lógica da Galeria de Imagens e Miniaturas ---
  $(".thumbnail").on("click", function () {
    const $this = $(this); // Cache do thumbnail clicado

    // Obter dados da imagem grande
    const largeImageSrc = $this.data("large-src");
    const imageAlt = $this.attr("alt");

    // Cache da imagem principal
    const $mainImage = $("#main-image");

    // Atualizar a imagem principal (com fade para suavidade)
    $mainImage.fadeOut(150, function () {
      // Esmaece a antiga
      $mainImage.attr("src", largeImageSrc).attr("alt", imageAlt);
      $mainImage.fadeIn(150); // Mostra a nova
    });

    // Atualizar a classe 'active'
    $(".thumbnail.active").removeClass("active"); // Remove de quem estava ativo
    $this.addClass("active"); // Adiciona na clicada
  });

  // Opcional: Pré-carregar imagens grandes (pode melhorar a experiência)
  $(".thumbnail").each(function () {
    const img = new Image();
    img.src = $(this).data("large-src");
  });
}); // Fim de $(document).ready()
