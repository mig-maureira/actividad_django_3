jQuery(document).ready(function ($) {

    // ==========================================
    // 1. ACTUALIZAR AÑO FOOTER
    // ==========================================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ==========================================
    // 2. INICIALIZAR FANCYBOX (GALERÍA)
    // ==========================================
    // Verificamos que Fancybox esté cargado para evitar errores si falta el script
    if (typeof Fancybox !== "undefined") {
        Fancybox.bind("[data-fancybox]", {
            // Opciones de personalización si las necesitas
            Toolbar: {
                display: ["zoom", "close"],
            },
        });
    }

    // ==========================================
    // 3. LÓGICA THUMBNAILS (GALERÍA PERSONALIZADA)
    // ==========================================
    $('.thumb-img').on('click', function (e) {
        e.preventDefault();

        // Remover clase activa de todos
        $('.thumb-img').removeClass('active');
        // Agregar clase activa al clickeado
        $(this).addClass('active');

        // Lógica para cambiar imagen principal (si aplica)
        // Nota: Si usas data-src o src directo, ajusta aquí:
        let newSrc = $(this).attr('src');
        // Si tus thumbs son pequeños (ej: tienen sufijo -150x150), aquí deberías limpiar el string
        // Ejemplo genérico:
        // let mainSrc = newSrc.replace('-150x150', ''); 

        $('#mainImage').attr('src', newSrc);
    });

    // ==========================================
    // 4. INICIALIZAR OWL CAROUSEL
    // ==========================================
    $(".owl-carousel").owlCarousel({
        items: 1,             // 1 imagen a la vez
        loop: true,           // Infinito
        margin: 0,            // Sin margen
        nav: true,            // Flechas
        dots: true,           // Puntos
        autoplay: true,       // Auto
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,     // Transición suave
        navText: [
            "<span class='display-4 text-white' style='position:absolute; left:20px; top:50%; transform:translateY(-50%); text-shadow: 0 2px 5px rgba(0,0,0,0.5); cursor:pointer;'>‹</span>",
            "<span class='display-4 text-white' style='position:absolute; right:20px; top:50%; transform:translateY(-50%); text-shadow: 0 2px 5px rgba(0,0,0,0.5); cursor:pointer;'>›</span>"
        ]
    });

    // ==========================================
    // 5. BOTÓN SUBIR (SCROLL TO TOP) - OPCIONAL
    // ==========================================
    /*
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#arriba').fadeIn();
        } else {
            $('#arriba').fadeOut();
        }
    });

    $('#arriba').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
    */

});