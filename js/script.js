var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
    var boxOffset = $(idBox).offset().top;
    return boxOffset;
}

$(document).ready(function () {
    const $target = $('.anime-left'),
        animationClass = 'anime-init',
        windowHeight = $(window).height(),
        offset = windowHeight - (windowHeight / 4);


    function animeScroll() {
        var documentTop = $(document).scrollTop();
        $target.each(function () {
            if (documentTop > boxTop(this) - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }
    animeScroll();

    $(document).scroll(function () {
        setTimeout(function () { animeScroll() }, 150);
    });
});


$(document).ready(function () {
    const $target = $('.anime'),
        animationClass = 'anime-init',
        windowHeight = $(window).height(),
        offset = windowHeight - (windowHeight / 4);


    function animeScroll() {
        var documentTop = $(document).scrollTop();
        $target.each(function () {
            if (documentTop > boxTop(this) - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }
    animeScroll();

    $(document).scroll(function () {
        setTimeout(function () { animeScroll() }, 150);
    });
});


// Cabeçalho 

$(document).ready(()=>{
    const windowWidth = $(window).width();
    if (windowWidth <= 1063) {
        
        $('.coluna-header').addClass("col");

    }else{
        $('.coluna-header').addClass("col-4");
    }

    if (windowWidth <= 765){
        $('.card-img-top').addClass('w-25');
        $('.card-img-top').removeClass('w-50');

    }
   
})


$(".whatsapp").on("click", function(){
    window.location.href = $(this).data('href');
})