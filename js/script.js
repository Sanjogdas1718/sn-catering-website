// Mobile menu toggle
$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            500,
            'linear'
        );
    });

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Menu filter functionality
    $('.menu-filter button').click(function() {
        const value = $(this).attr('data-filter');
        if (value === "all") {
            $('.menu-item').show();
        } else {
            $('.menu-item').not('.' + value).hide();
            $('.menu-item').filter('.' + value).show();
        }
    });
}); 