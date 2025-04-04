$(document).ready(function() {
    // --- Lógica do Menu de Navegação Dropdown ---
    $('.has-dropdown').on('mouseenter', function() {
        $(this).find('.dropdown-menu').stop(true, true).slideDown(200);
    }).on('mouseleave', function() {
        $(this).find('.dropdown-menu').stop(true, true).slideUp(200);
    });
});