$(document).ready(function () {
    
////////////// Navigation Right //////////////
    
    $('.nav-icon-container').click(function() {
        $('.bar-1').toggleClass('bar-close-1');
        $('.bar-2').toggleClass('bar-close-2');
        $('.nav-fadein-container').toggleClass('nav-fadein');
        
        
        $('.nav-list:nth-child(1)').toggleClass('a');
        $('.nav-list:nth-child(2)').toggleClass('b');
        $('.nav-list:nth-child(3)').toggleClass('c');

    });
    
    
    
    // Page load start Animation
    
    $(function() {
        $('div').removeClass('inview-left inview-right inview-top');
        $('h1').removeClass('inview-text');
        $('.button').delay(800).fadeIn(400);
        $('.contante').addClass('contanteFade');
    });
    
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('h1').addClass('inview-text');
        } else {
            $('h1').removeClass('inview-text');
        }
    });
    
    $('.button').click(function() {
        $('.img-container-right').addClass('img-container-zero');
        $('.img-container-left').addClass('img-container-full');
            window.setTimeout(function(){
                window.location.replace('projekt.php');
            }, 2000);
    });
    
    $(function() {
        $('.contante').addClass('contanteFade');
    });
    
});


